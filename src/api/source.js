// import request from '@/utils/request'
import fetch from '@/utils/http'

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
