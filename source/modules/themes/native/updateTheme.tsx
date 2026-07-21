// Module ID: 15512
// Function ID: 118351
// Name: updateTheme
// Dependencies: []
// Exports: updateTheme

// Module 15512 (updateTheme)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = importDefault(dependencyMap[2]).updateTheme(arg0);
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
