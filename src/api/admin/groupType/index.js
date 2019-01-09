import fetch from 'utils/fetch';

export function page(query) {
  return fetch({
    url: '/api/groupType/list',
    method: 'get',
    params: query
  });
}

export function addObj(obj) {
  return fetch({
    url: '/api/groupType/add',
    method: 'post',
    data: obj
  });
}

// export function getObj(id) {
//   return fetch({
//     url: '/api/groupType/info' + id,
//     method: 'get'
//   })
// }

export function delObj(id) {
  return fetch({
    url: '/api/groupType/delete/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return fetch({
    url: '/api/groupType/update/' + id,
    method: 'put',
    data: obj
  })
}
