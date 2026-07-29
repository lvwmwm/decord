// Module ID: 244
// Function ID: 245
// Name: AppRegistry
// Dependencies: [245, 236]

// Module 244 (AppRegistry)
import importAllResult from "map";

require("map").registerComponent("LogBox", () => function NoOp() {
  return null;
});
global.RN$AppRegistry = require("map");
global.RN$SurfaceRegistry = { renderSurface: require("map").runApplication, setSurfaceProps: require("map").setSurfaceProps };
const obj = { renderSurface: require("map").runApplication, setSurfaceProps: require("map").setSurfaceProps };
require("MessageQueue")("AppRegistry", require("map"));

export const AppRegistry = require("map");
