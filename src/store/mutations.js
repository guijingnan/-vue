import {
  GET_HOME_DATA,

} from './mutation-types'
export default {
  [GET_HOME_DATA](state,{data}){
state.home=data
  }
}
