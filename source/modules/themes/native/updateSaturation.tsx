// Module ID: 13257
// Function ID: 100599
// Name: updateSaturation
// Dependencies: []
// Exports: updateSaturation

// Module 13257 (updateSaturation)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = importDefault(dependencyMap[2]).updateSaturation(saturation);
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
