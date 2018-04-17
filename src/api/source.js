// import request from '@/utils/request'
import fetch from '@/api/http'

function getSource(username) {
  return fetch({
    url: '/getSource',
    method: 'post',
    params: { username }
  })
}

export default{
  getSource
}
