import fetch from 'utils/fetch';

//获取按钮权限列表
export function page(query) {
  return fetch({
    url: '/api/menu/getElementList',
    method: 'get',
    params: query
  });
}

//获取按钮权限列表不分页
export function getElementById(query) {
  return fetch({
    url: '/api/menu/getElementById',
    method: 'get',
    params: query
  });
}

//添加按钮权限
export function addObj(obj) {
  return fetch({
    url: '/api/menu/addElement',
    method: 'post',
    data: obj
  });
}
//按钮单个详细信息
export function getObj(id) {
  return fetch({
    url: '/api/menu/getElementInfo/' + id,
    method: 'get'
  })
}
// 删除按钮
export function delObj(id) {
  return fetch({
    url: '/api/menu/deleteElement/' + id,
    method: 'delete'
  })
}

// 修改按钮权限
export function putObj(id, obj) {
  return fetch({
    url: '/api/menu/updateElement/' + id,
    method: 'put',
    data: obj
  })
}
