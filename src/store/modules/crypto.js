import crypto from '../../api/crypto'
import * as types from '../mutation-types'

//    initial state
const state = {
  cryptos: [],
  status: null
}

// actions
const actions = {
  getCryptos ({commit, state}) {
    commit(types.FETCHING_CRYPTOS)
    crypto.getCryptos(
      (fetchedCryptos) => commit(types.FETCH_CRYPTOS_SUCCESS, { fetchedCryptos })
    )
  }
}

// mutations
const mutations = {
  [types.FETCHING_CRYPTOS] (state) {
    state.status = 'FETCHING'
  },
  [types.FETCH_CRYPTOS_SUCCESS] (state, { fetchedCryptos }) {
    state.crypts = fetchedCryptos
    state.status = 'FETCHED'
  }
}
