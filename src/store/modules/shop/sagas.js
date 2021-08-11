import { takeLatest, all, call, put } from 'redux-saga/effects'
import types from './types'
import api from '../../../services/api'
import { setPetshops, setPetshop } from './actions'

//é quase como se usasse um async function
export function* requestPetshops() {
    const response = yield call(api.get, '/petshops')
    const res = response.data
    yield put(setPetshops(res.petshops))
}

//api.get ('/petshops', {}) *bucar um petshop por vez
export function* requestPetshop(payload) {
    const response = yield call(api.get, `/petshop/${payload.id}`)
    const res = response.data
    yield put(setPetshop(res.petshop))
}



export default all([
    takeLatest(types.REQUEST_PETSHOPS, requestPetshops),
    takeLatest(types.REQUEST_PETSHOP, requestPetshop)
])