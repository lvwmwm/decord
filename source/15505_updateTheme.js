// Module ID: 15505
// Function ID: 118327
// Name: updateTheme
// Dependencies: []
// Exports: updateTheme

// Module 15505 (updateTheme)
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
