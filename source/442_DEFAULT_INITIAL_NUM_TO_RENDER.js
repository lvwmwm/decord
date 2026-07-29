// Module ID: 442
// Function ID: 443
// Name: DEFAULT_INITIAL_NUM_TO_RENDER
// Dependencies: [88]

// Module 442 (DEFAULT_INITIAL_NUM_TO_RENDER)
import importDefaultResult from "Dimensions";

const result = require("Dimensions").get("window").height / 7;

export const DEFAULT_INITIAL_NUM_TO_RENDER = 7;
export const INITIAL_NUM_TO_RENDER = 7;
export const FALLBACK_ESTIMATED_HEIGHT = result;
export const FALLBACK_ESTIMATED_WIDTH = require("Dimensions").get("window").width / 7;
