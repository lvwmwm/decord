// Module ID: 15514
// Function ID: 118388
// Name: updateVisualRefresh
// Dependencies: []
// Exports: updateVisualRefresh

// Module 15514 (updateVisualRefresh)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/themes/native/updateVisualRefresh.tsx");

export const updateVisualRefresh = function updateVisualRefresh(arg0) {
  if (obj.isAndroid()) {
    let result = importDefault(dependencyMap[2]).setVisualRefreshEnabled(arg0);
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    result = DCDTheme.setVisualRefreshEnabled(arg0);
  }
  return result;
};
