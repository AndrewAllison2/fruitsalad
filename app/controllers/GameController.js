import { AppState } from "../AppState.js";
import { fruitService } from "../services/GameService.js";


export class FruitsController {

  constructor() {

  }

  getRandomFruit(fruits) {
    let randomFruit = AppState.fruits[Math.floor(Math.random() * AppState.fruits.length)]
    console.log(randomFruit);
  }
}

