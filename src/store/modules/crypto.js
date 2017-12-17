import crypto from '../../api/crypto'
import * as types from '../mutation-types'

//    initial state
const state = {
  cryptos: [],
  status: null
}

const getters = {
  checkStatus: state => state.status,
  allCryptos: state => state.cryptos
}

// actions
const actions = {
  getCryptos ({commit, state}) {
    commit(types.FETCHING_CRYPTOS)
    crypto.getCryptos(
      (fetchedCryptos) => commit(types.FETCH_CRYPTOS_SUCCESS, { fetchedCryptos }),
      () => commit(types.FETCH_CRYPTOS_FAILURE)
    )
  }
}

// mutations
const mutations = {
  [types.FETCHING_CRYPTOS] (state) {
    state.status = 'FETCHING'
  },
  [types.FETCH_CRYPTOS_SUCCESS] (state, { fetchedCryptos }) {
    state.cryptos = fetchedCryptos
    state.status = 'FETCHED'
  },
  [types.FETCH_CRYPTOS_FAILURE] (state) {
    state.status = 'FAILED'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
