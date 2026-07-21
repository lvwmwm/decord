// Module ID: 8214
// Function ID: 64924
// Name: getPositiveValue
// Dependencies: [284214097]
// Exports: getAssetWHRatio

// Module 8214 (getPositiveValue)
function getPositiveValue(height, arg1) {
  let tmp = height;
  if (null == height) {
    tmp = arg1;
  }
  return tmp;
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/collectibles/profile_effects/native/getAssetWHRatio.tsx");

export const DEFAULT_PROFILE_EFFECT_WH_RATIO = 0.5113636363636364;
export const getAssetWHRatio = function getAssetWHRatio(width) {
  return getPositiveValue(width.width, 450) / getPositiveValue(width.height, 880);
};
