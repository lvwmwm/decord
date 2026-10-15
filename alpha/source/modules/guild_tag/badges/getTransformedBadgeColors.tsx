// Module ID: 14817
// Function ID: 14818
// Name: getTransformedBadgeColors
// Dependencies: [683, 2]
// Exports: getTransformedBadgeColors

// Module 14817 (getTransformedBadgeColors)
import _modDef683 from "module_683" /* 683 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/badges/getTransformedBadgeColors.tsx");

export const getTransformedBadgeColors = function getTransformedBadgeColors(primaryLuminanceWeights) {
  let primaryBaseColors;
  let primaryColorsTransformed;
  let primaryTintColor;
  let primaryTintLuminances;
  let secondaryBaseColors;
  let secondaryLuminanceWeights;
  let secondaryTintColor;
  let secondaryTintLuminances;
  const f120290 = () => "#000000";
  const f120291 = (item, index) => {
    const luminanceResult = obj4.luminance((item * secondaryLuminanceWeights[index].base + closure_2 * secondaryLuminanceWeights[index].tint) / (secondaryLuminanceWeights[index].base + secondaryLuminanceWeights[index].tint));
    return luminanceResult.hex();
  };
  ({ primaryBaseColors, primaryTintColor, primaryTintLuminances, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights } = primaryLuminanceWeights);
  if (null != primaryTintColor) {
    let mapped;
    primaryLuminanceWeights = primaryLuminanceWeights.primaryLuminanceWeights;
    const obj = _modDef683;
    const tmp = importDefault;
    if (obj.valid(primaryTintColor)) {
      const obj2 = tmp(683)(primaryTintColor);
      let closure_2 = obj2.luminance();
      mapped = primaryTintLuminances.map(f120291);
    } else {
      mapped = primaryTintLuminances.map(f120290);
    }
    primaryColorsTransformed = mapped;
  }
  const tmp4 = null != secondaryBaseColors && null != secondaryTintLuminances && null != secondaryLuminanceWeights;
  if (tmp4) {
    if (null != secondaryTintColor) {
      let mapped1;
      const obj3 = _modDef683;
      const tmp6 = importDefault;
      if (obj3.valid(secondaryTintColor)) {
        const obj4 = tmp6(683)(secondaryTintColor);
        closure_2 = obj4.luminance();
        mapped1 = secondaryTintLuminances.map(f120291);
      } else {
        mapped1 = secondaryTintLuminances.map(f120290);
      }
      secondaryBaseColors = mapped1;
    }
  }
  return { primaryColorsTransformed, secondaryColorsTransformed: [] };
};
