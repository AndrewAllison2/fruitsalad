import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";


function _drawPlayerList() {
  let template = ''
  const players = AppState.players

  players.forEach(p => template += p.ListTemplate)

  setHTML('player-template', template)
}


function _drawActivePlayer() {
  const activePlayer = AppState.activePlayer
  if (activePlayer) {
    // @ts-ignore
    setHTML('active-player', activePlayer.ActiveTemplate)

  }
}


export class PlayersController {
  constructor() {

    _drawPlayerList()
    _drawActivePlayer()

    AppState.on('players', _drawPlayerList)
    AppState.on('activePlayer', _drawActivePlayer)
  }
  setActivePlayer(playerId) {
    console.log('Setting active', playerId);
    playersService.setActivePlayer(playerId)
  }

  createPlayer() {
    event?.preventDefault()
    const form = event?.target
    let playerData = getFormData(form)
    playersService.createPlayer(playerData)
    console.log(playerData);
  }

}

