import { AboutController } from "./controllers/AboutController.js";
import { FruitsController } from "./controllers/GameController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PlayersController } from "./controllers/PlayersController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [PlayersController, FruitsController],
    view: /*html*/`
    <div class="card">
      <div class="card-body" id='player-template'>
      </div>
      <div class="col-6" id="active-player">
      </div>
    </div>
    `
  },

]