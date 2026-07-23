// Module ID: 243
// Function ID: 3270
// Name: AppRegistry
// Dependencies: [244, 236]

// Module 243 (AppRegistry)
import importAllResult from "registerComponent";

require("registerComponent").registerComponent("LogBox", () => function NoOp() {
  return null;
});
global.RN$AppRegistry = require("registerComponent");
global.RN$SurfaceRegistry = { renderSurface: require("registerComponent").runApplication, setSurfaceProps: require("registerComponent").setSurfaceProps };
const obj = { renderSurface: require("registerComponent").runApplication, setSurfaceProps: require("registerComponent").setSurfaceProps };
require("MessageQueue")("AppRegistry", require("registerComponent"));

export const AppRegistry = require("registerComponent");
