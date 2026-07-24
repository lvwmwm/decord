// Module ID: 12977
// Function ID: 100620
// Name: transformGuildBadgeColors
// Dependencies: [666, 2]
// Exports: getTransformedBadgeColors

// Module 12977 (transformGuildBadgeColors)
function transformGuildBadgeColors(secondaryTintLuminances, primaryTintColor, secondaryLuminanceWeights) {
  const importDefault = secondaryLuminanceWeights;
  if (obj.valid(primaryTintColor)) {
    obj2 = importDefault(obj2[0])(primaryTintColor);
    let closure_2 = obj2.luminance();
    return secondaryTintLuminances.map((arg0, arg1) => obj2.luminance((arg0 * secondaryLuminanceWeights[arg1].base + closure_2 * secondaryLuminanceWeights[arg1].tint) / (secondaryLuminanceWeights[arg1].base + secondaryLuminanceWeights[arg1].tint)).hex());
  } else {
    return secondaryTintLuminances.map(() => "#000000");
  }
  obj = importDefault(obj2[0]);
}
const result = require("set").fileFinishedImporting("modules/guild_tag/badges/getTransformedBadgeColors.tsx");

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
