import {
  asyncRouterMap,
  constantRouterMap
} from 'src/router'
import { getAllMenus } from 'api/login';
/**
 * 通过authority判断是否与当前用户权限匹配
 * @param menus
 * @param route
 */
  //menus{userManager:true}
    //menuDatas{userManager:{}}
function hasPermission(menus, route) {
  if (route.authority) {
    if (menus[route.authority] !== undefined) {
      return menus[route.authority];
    } else {
      return false;
    }
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, menus, menuDatas) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(menus, route)) {
      route.name = menuDatas[route.authority].title;
      route.icon = menuDatas[route.authority].icon;
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, menus, menuDatas);
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  //menus{userManager:true}
    //menuDatas{userManager:{}}
  // getAllMenus().then(data => {  data[{},{},{}]

  actions: {
    GenerateRoutes({
      commit
    }, menus) {
      return new Promise(resolve => {
        getAllMenus().then(data => {
          const menuDatas = {};
          handleMenuResponse(menuDatas,data.data);
          const accessedRouters = filterAsyncRouter(asyncRouterMap, menus, menuDatas);
          commit('SET_ROUTERS', accessedRouters);
          resolve();
        });
      })
    }
  }
};
//内部方法递归解析返回的menus;
function handleMenuResponse(result,res){
  for (let i = 0; i < res.length; i++) {
    result[res[i].code] = res[i];
    if(res[i].children&&res[i].children.length>0){
      handleMenuResponse(result,res[i].children);
    }else{
      continue;
    }
  }
}

export default permission;
