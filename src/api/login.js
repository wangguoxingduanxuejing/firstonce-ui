import fetch from 'utils/fetch';

//登录
export function loginByEmail(username, password) {
  const data = {
    username,
    password
  };
  return fetch({
    url: '/api/user/login',
    method: 'post',
    data
  });
}

//登出
export function logout(token) {
  return fetch({
    url: '/api/user/logout',
    method: 'post',
    params: { token }
  });
}

//初始化菜单和按钮
export function getInfo(token) {
  return fetch({
    url: '/api/menu/menuAndElement',
    method: 'get',
    params: { token }
  });
}

//获取全部菜单
export function getMenus(token) {
  return fetch({
    url: '/api/menu/menus',
    method: 'get',
    params: { token }
  });
}
//获取全部菜单
export function getAllMenus() {
  return fetch({
    url: '/api/menu/menus',
    method: 'get'
  });
}