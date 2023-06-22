import { generateId } from "../utils/GenerateId.js"

export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0
    this.playerActive = data.playerActive ? data.playerActive : false
  }

  get ListTemplate() {
    return /*html*/ `
    <div class="col-8">
        </div>
        <div class="col-4">
          <p class="selectable" onclick="app.PlayersController.setActivePlayer('${this.id}')">${this.name}</p>
          <p>Score: ${this.score}</p>
        </div>
        `
  }

  get ActiveTemplate() {
    return /*html*/ `
        <div class="col-4">
          <p>Active Player: ${this.name}</p>
          <p>Score: ${this.score}</p>
        </div>
    `
  }
}