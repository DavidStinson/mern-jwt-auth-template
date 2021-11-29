import * as tokenService from './tokenService'
const BASE_URL = '/api/auth/'

function signup(user) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user),
  })
  .then(res => {
    return res.json()
  })
  .then(({ token }) => tokenService.setToken(token)) 
  .catch(err => {
    console.log(err)
  })
}

function getUser() {
  return tokenService.getUserFromToken()
}

export {
  signup,
  getUser
}
