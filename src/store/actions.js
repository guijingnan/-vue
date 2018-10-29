import Vue from 'vue'
import {
  GET_HOME_DATA,
} from './mutation-types'
import api from '../http/index'
export default {
  async getHomeData({commit},data){

    commit(GET_HOME_DATA,{data})

  }
}
