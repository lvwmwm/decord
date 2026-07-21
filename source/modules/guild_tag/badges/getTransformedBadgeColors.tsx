// Module ID: 12802
// Function ID: 98086
// Name: transformGuildBadgeColors
// Dependencies: []
// Exports: getTransformedBadgeColors

// Module 12802 (transformGuildBadgeColors)
function transformGuildBadgeColors(secondaryTintLuminances, primaryTintColor, secondaryLuminanceWeights) {
  const importDefault = secondaryLuminanceWeights;
  if (obj.valid(primaryTintColor)) {
    const obj2 = importDefault(dependencyMap[0])(primaryTintColor);
    const dependencyMap = obj2;
    let closure_2 = obj2.luminance();
    return secondaryTintLuminances.map((arg0, arg1) => obj2.luminance((arg0 * arg2[arg1].base + closure_2 * arg2[arg1].tint) / (arg2[arg1].base + arg2[arg1].tint)).hex());
  } else {
    return secondaryTintLuminances.map(() => "#000000");
  }
  const obj = importDefault(dependencyMap[0]);
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_tag/badges/getTransformedBadgeColors.tsx");

export const getTransformedBadgeColors = function getTransformedBadgeColors(arg0) {
  let primaryBaseColors;
  let primaryTintColor;
  let secondaryBaseColors;
  let secondaryLuminanceWeights;
  let secondaryTintColor;
  let secondaryTintLuminances;
  ({ primaryBaseColors, primaryTintColor, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights } = arg0);
  if (null != primaryTintColor) {
    primaryBaseColors = transformGuildBadgeColors(tmp, primaryTintColor, tmp2);
  }
  if (tmp5) {
    if (null != secondaryTintColor) {
      secondaryBaseColors = transformGuildBadgeColors(secondaryTintLuminances, secondaryTintColor, secondaryLuminanceWeights);
    }
  }
  const obj = { primaryColorsTransformed: primaryBaseColors, secondaryColorsTransformed: [] };
  return obj;
};
