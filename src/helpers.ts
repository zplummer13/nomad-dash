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

/**
 * Returns a description and icon based on the passed code.
 * 
 * See open-meteo.com/en/docs
 */
export function lookupWeatherByCode(code: number): { description: string, icon: string } {
    let result = {
        description: "",
        icon: "",
    }
    switch (code) {
        case 0:
            result.description = "Clear Sky";
            result.icon = "☀️";
            break;
        case 1:
        case 2:
        case 3:
            result.description = "Party Cloudy";
            result.icon = "⛅";
            break;
        case 51:
        case 53:
        case 55:
            result.description = "Light Drizzle";
            result.icon = "🌧️➖";
            break;
        case 56:
        case 57:
            result.description = "Freezing Drizzle";
            result.icon = "🥶🌧️";
            break;
        case 61:
        case 63:
        case 65:
            result.description = "Rain";
            result.icon = "🌧️";
            break;
        case 66:
        case 67:
            result.description = "Freezing Rain";
            result.icon = "🥶🌧️";
            break;
        case 71:
        case 73:
        case 75:
            result.description = "Snow Fall";
            result.icon = "🌨️";
            break;
        case 77:
            result.description = "Snow Grains";
            result.icon = "🌨️➕";
            break;
        case 80:
        case 81:
        case 82:
            result.description = "Rain Showers";
            result.icon = "🌧️🚿";
            break;
        case 85:
        case 86:
            result.description = "Snow Showers";
            result.icon = "🌨️🚿";
            break;
        case 95:
        case 96:
        case 99:
            result.description = "Thunderstorms";
            result.icon = "🌩️";
            break;
        default:
            result.description = "Unknown Orangutan";
            result.icon = "🦧";
            break;
    }

    return result;
}