import fetch from 'utils/fetch';

//获取菜单树
export function fetchTree(query) {
  return fetch({
    url: '/api/menu/menusTree',
    method: 'get',
    params: query
  });
}
//获取全部菜单树
export function fetchAll() {
  return fetch({
    url: '/api/menu/menus',
    method: 'get'
  });
}
// 添加菜单
export function addObj(obj) {
  return fetch({
    url: '/api/menu/addMenu',
    method: 'post',
    data: obj
  });
}
// 获取单个菜单的信息
export function getObj(id) {
  return fetch({
    url: '/api/menu/getMenuInfo/' + id,
    method: 'get'
  })
}

//删除菜单
export function delObj(id) {
  return fetch({
    url: '/api/menu/deleteMenu/' + id,
    method: 'delete'
  })
}

//更新菜单
export function putObj(id, obj) {
  return fetch({
    url: '/api/menu/updateMenu/' + id,
    method: 'put',
    data: obj
  })
}
