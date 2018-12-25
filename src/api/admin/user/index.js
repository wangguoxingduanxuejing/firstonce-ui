import fetch from 'utils/fetch';

//用户列表
export function page(query) {
  return fetch({
    url: '/api/user/userList',
    method: 'get',
    params: query
  });
}

//添加用户
export function addObj(obj) {
  return fetch({
    url: '/api/user/userAdd',
    method: 'post',
    data: obj
  });
}
//根据id获取用户详情
export function getObj(id) {
  return fetch({
    url: '/api/user/getUserById/' + id,
    method: 'get'
  })
}
//删除用户
export function delObj(id) {
  return fetch({
    url: '/api/user/deleteUser/' + id,
    method: 'delete'
  })
}

//修改用户
export function putObj(id, obj) {
  return fetch({
    url: '/api/user/updateUser/' + id,
    method: 'put',
    data: obj
  })
}
