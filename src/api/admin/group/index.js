import fetch from 'utils/fetch';

//获取所有的角色分组类型
export function getAllGroupTypes() {
  return fetch({
    url: '/api/role/groupTypes',
    method: 'get'
  });
}

// 获取某个分组类型的角色树
export function fetchTree(query) {
  return fetch({
    url: '/api/role/groupTree',
    method: 'get',
    params: query
  });
}

// 添加角色
export function addObj(obj) {
  return fetch({
    url: '/api/role/addGroup',
    method: 'post',
    data: obj
  });
}

//获取某个角色详细信息
export function getObj(id) {
  return fetch({
    url: '/api/role/getGroupInfo/' + id,
    method: 'get'
  });
}

// 删除某个角色
export function delObj(id) {
  return fetch({
    url: '/api/role/deleteGroup/' + id,
    method: 'delete'
  });
}

// 修改某个角色
export function putObj(id, obj) {
  return fetch({
    url: '/api/role/updateGroup/' + id,
    method: 'put',
    data: obj
  });
}

//获取已经关联的角色的领导 和普通员工用户
export function getUsers(id) {
  return fetch({
    url: '/api/role/getUsersByGroup/' + id,
    method: 'get'
  });
}

//修改关联的用户
export function modifyUsers(id, data) {
  return fetch({
    url: '/api/role/updateUsersByGroup/' + id,
    method: 'get',
    params: data
  });
}

//删除按钮权限
export function removeElementAuthority(id, data) {
  return fetch({
    url: '/api/role/removeAuthorityElement/' + id,
    method: 'delete',
    params: data
  });
}

// 添加按钮权限
export function addElementAuthority(id, data) {
  return fetch({
    url: '/api/role/addAuthorityElement/' + id,
    method: 'get',
    params: data
  });
}

// 根据菜单id 获取按钮权限
export function getElementAuthority(id) {
  return fetch({
    url: '/api/role/getElementAuthority/' + id ,
    method: 'get'
  });
}

// 修改菜单权限
export function modifyMenuAuthority(id, data) {
  return fetch({
    url: '/api/role/modifyMenuAuthority/' + id,
    method: 'post',
    params: data
  });
}

//获取某个角色的已经授权的菜单资源
export function getMenuAuthority(id) {
  return fetch({
    url: '/api/role/getMenuAuthority/' + id ,
    method: 'get'
  });
}


