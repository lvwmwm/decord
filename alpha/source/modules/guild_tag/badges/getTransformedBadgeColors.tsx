// Module ID: 15277
// Function ID: 15278
// Name: getTransformedBadgeColors
// Dependencies: [671, 2]
// Exports: getTransformedBadgeColors

// Module 15277 (getTransformedBadgeColors)
import _modDef671 from "module_671" /* 671 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/badges/getTransformedBadgeColors.tsx");

export function getTransformedBadgeColors(primaryLuminanceWeights) {
  let primaryBaseColors;
  let primaryColorsTransformed;
  let primaryTintColor;
  let primaryTintLuminances;
  let secondaryBaseColors;
  let secondaryLuminanceWeights;
  let secondaryTintColor;
  let secondaryTintLuminances;
  const f108124 = () => "#000000";
  const f108125 = (item, index) => {
    const luminanceResult = obj4.luminance((item * secondaryLuminanceWeights[index].base + closure_2 * secondaryLuminanceWeights[index].tint) / (secondaryLuminanceWeights[index].base + secondaryLuminanceWeights[index].tint));
    return luminanceResult.hex();
  };
  ({ primaryBaseColors, primaryTintColor, primaryTintLuminances, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights } = primaryLuminanceWeights);
  if (null != primaryTintColor) {
    let mapped;
    primaryLuminanceWeights = primaryLuminanceWeights.primaryLuminanceWeights;
    const obj = _modDef671;
    const tmp = importDefault;
    if (obj.valid(primaryTintColor)) {
      const obj2 = tmp(671)(primaryTintColor);
      let closure_2 = obj2.luminance();
      mapped = primaryTintLuminances.map(f108125);
    } else {
      mapped = primaryTintLuminances.map(f108124);
    }
    primaryColorsTransformed = mapped;
  }
  const tmp4 = null != secondaryBaseColors && null != secondaryTintLuminances && null != secondaryLuminanceWeights;
  if (tmp4) {
    if (null != secondaryTintColor) {
      let mapped1;
      const obj3 = _modDef671;
      const tmp6 = importDefault;
      if (obj3.valid(secondaryTintColor)) {
        const obj4 = tmp6(671)(secondaryTintColor);
        closure_2 = obj4.luminance();
        mapped1 = secondaryTintLuminances.map(f108125);
      } else {
        mapped1 = secondaryTintLuminances.map(f108124);
      }
      secondaryBaseColors = mapped1;
    }
  }
  return { primaryColorsTransformed, secondaryColorsTransformed: [] };
}
