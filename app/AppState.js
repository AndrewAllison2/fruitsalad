import { Value } from "./models/Value.js"
import { Player } from "./models/Player.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Player.js').Player[]} */


  players = [
    new Player({
      name: 'Andrew',
      score: 0
    }),
    new Player({
      name: 'Josh',
      score: 0
    })
  ]
  activePlayer = null
  fruits = [
    'pear',
    'apple',
    'orange'
  ]

  activeFruit = null


  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
