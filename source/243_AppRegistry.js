// Module ID: 243
// Function ID: 3270
// Name: AppRegistry
// Dependencies: []

// Module 243 (AppRegistry)
importAll(dependencyMap[0]).registerComponent("LogBox", () => function NoOp() {
  return null;
});
global.RN$AppRegistry = importAll(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[0]);
global.RN$SurfaceRegistry = { renderSurface: importAll(dependencyMap[0]).runApplication, setSurfaceProps: importAll(dependencyMap[0]).setSurfaceProps };
const obj = { renderSurface: importAll(dependencyMap[0]).runApplication, setSurfaceProps: importAll(dependencyMap[0]).setSurfaceProps };
importDefault(dependencyMap[1])("AppRegistry", importAll(dependencyMap[0]));

export const AppRegistry = importAll(dependencyMap[0]);
