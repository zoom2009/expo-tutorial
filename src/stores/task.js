import { atom } from 'recoil'

const taskList = atom({
  key: 'taskList',
  default: [],
})

export default {
  taskList,
}
