import Config from "./schema/config";
import CoffeeFlavor from "./schema/coffee-flavor";

export function getCurrentCoffeeFlavor(): CoffeeFlavor {
    const config = require("./config.json") as Config;
    if (config.coffeeFlavors.length > 0) {
        return config.coffeeFlavors.slice(-1)[0];
    }
    return <CoffeeFlavor>{};
}

export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}