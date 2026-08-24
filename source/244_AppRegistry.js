// Module ID: 244
// Function ID: 245
// Name: AppRegistry
// Dependencies: [245, 236]

// Module 244 (AppRegistry)
import MessageQueueDefault from "MessageQueue" /* 236 */;
import importAllResult from "map" /* 245 */;

importAllResult.registerComponent("LogBox", () => function NoOp() {
  return null;
});
global.RN$AppRegistry = importAllResult;
global.RN$SurfaceRegistry = { renderSurface: importAllResult.runApplication, setSurfaceProps: importAllResult.setSurfaceProps };
const obj = { renderSurface: importAllResult.runApplication, setSurfaceProps: importAllResult.setSurfaceProps };
MessageQueueDefault("AppRegistry", importAllResult);

export const AppRegistry = importAllResult;
