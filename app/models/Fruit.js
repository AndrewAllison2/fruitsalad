import { generateId } from "../utils/GenerateId.js";

export class Fruit {
  constructor() {
    this.id = generateId()
  }
}