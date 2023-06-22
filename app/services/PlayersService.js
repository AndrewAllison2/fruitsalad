import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js";

class PlayersService {
  setActivePlayer(playerId) {
    const selectedPlayer = AppState.players.find(p => p.id == playerId)
    console.log('Active Player', selectedPlayer);

    // @ts-ignore
    AppState.activePlayer = selectedPlayer
  }
  activatePlayer() {
    const thePlayer = AppState.activePlayer
  }

  createPlayer(playerData) {
    const newPlayer = new Player(playerData)
    console.log('In the service', newPlayer);
    AppState.players = [...AppState.players, newPlayer]

    console.log('players in array', AppState.players);
  }

}




export const playersService = new PlayersService()