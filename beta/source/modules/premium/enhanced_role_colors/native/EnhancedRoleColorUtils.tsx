// Module ID: 8224
// Function ID: 8225
// Name: enhanced_role_colors/EnhancedRoleColorUtils
// Dependencies: [32, 19, 17, 1186, 1089, 676, 1374, 5217, 558, 2]
// Exports: isNativeMessageEligibleForEnhancedRoleColors, processColorStringsArray, useIsRoleStyleAndRoleColorsEligibleForERC, useProcessColorStringsArray

// Module 8224 (enhanced_role_colors/EnhancedRoleColorUtils)
import _modDef676 from "module_676" /* 676 */;
import GlobalUtils from "GlobalUtils" /* 1374 */;
import useHasEnhancedRoleColors from "useHasEnhancedRoleColors" /* 5217 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1186 */;

const useHasEnhancedRoleColorsDefault = useHasEnhancedRoleColors;

require = fn;
function processColorStrings(colorStrings) {
  if (null != colorStrings) {
    const primaryColor = colorStrings.primaryColor;
    if (ThemeStore.theme === ThemeTypes.LIGHT) {
      if (null != primaryColor) {
        const obj = _modDef676(primaryColor);
        let tmp10 = processColor;
        [tmp7, tmp8, tmp9] = _modDef676(primaryColor).hsl();
        const tmp6 = _slicedToArray(_modDef676(primaryColor).hsl(), 3);
        let tmp12Result = processColor(_modDef676.hsl(tmp7, tmp8, 0.85 * tmp9).hex());
        const hslResult = _modDef676.hsl(tmp7, tmp8, 0.85 * tmp9);
      }
      const obj3 = { primaryColor: tmp12Result, secondaryColor: null, tertiaryColor: null };
      const secondaryColor = colorStrings.secondaryColor;
      if (tmp.theme === tmp2.LIGHT) {
        if (null != secondaryColor) {
          const obj5 = _modDef676(secondaryColor);
          [tmp17, tmp18, tmp19] = _modDef676(secondaryColor).hsl();
          const tmp16 = _slicedToArray(_modDef676(secondaryColor).hsl(), 3);
          let tmp10Result = tmp10(_modDef676.hsl(tmp17, tmp18, 0.85 * tmp19).hex());
          const hslResult1 = _modDef676.hsl(tmp17, tmp18, 0.85 * tmp19);
        }
        obj3.secondaryColor = tmp10Result;
        const tertiaryColor = colorStrings.tertiaryColor;
        if (tmp.theme === tmp2.LIGHT) {
          if (null != tertiaryColor) {
            const obj8 = _modDef676(tertiaryColor);
            [tmp25, tmp26, tmp27] = _modDef676(tertiaryColor).hsl();
            const tmp24 = _slicedToArray(_modDef676(tertiaryColor).hsl(), 3);
            let tmp10Result2 = tmp10(_modDef676.hsl(tmp25, tmp26, 0.85 * tmp27).hex());
            const hslResult2 = _modDef676.hsl(tmp25, tmp26, 0.85 * tmp27);
          }
          obj3.tertiaryColor = tmp10Result2;
          return obj3;
        }
        tmp10Result2 = tmp10(tertiaryColor);
      }
      tmp10Result = tmp10(secondaryColor);
    }
    tmp12Result = tmp12(primaryColor);
    tmp10 = tmp12;
  }
}
const processColor = fn(17).processColor;
const ThemeTypes = fn(1089).ThemeTypes;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx");

export { processColorStrings };
export const processColorStringsArray = function processColorStringsArray(colorStrings) {
  if (null == colorStrings) {
    return [];
  } else {
    const items = [, , ];
    ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = processColorStrings(colorStrings));
    return items.filter(GlobalUtils.isNotNullish);
  }
};
export const useProcessColorStringsArray = function useProcessColorStringsArray(colorStrings) {
  closure_0 = colorStrings;
  let primaryColor;
  if (colorStrings != null) {
    primaryColor = colorStrings.primaryColor;
  }
  let items = [primaryColor, , ];
  let secondaryColor;
  if (colorStrings != null) {
    secondaryColor = colorStrings.secondaryColor;
  }
  items[1] = secondaryColor;
  let tertiaryColor;
  if (colorStrings != null) {
    tertiaryColor = colorStrings.tertiaryColor;
  }
  items[2] = tertiaryColor;
  return noop.useMemo(() => {
    if (null == closure_0) {
      let items = [];
    } else {
      const items1 = [, , ];
      ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = processColorStrings(tmp));
      items = items1.filter(GlobalUtils.isNotNullish);
      const tmp3 = processColorStrings(tmp);
    }
    return items;
  }, items);
};
export const isNativeMessageEligibleForEnhancedRoleColors = function isNativeMessageEligibleForEnhancedRoleColors(guildId, id) {
  return useHasEnhancedRoleColors.getHasEnhancedRoleColors(guildId, id);
};
export const useIsRoleStyleAndRoleColorsEligibleForERC = (arg0, arg1, arg2, arg3) => {
  let tmp = useHasEnhancedRoleColorsDefault(arg0, arg1);
  if (tmp) {
    tmp = "username" === arg2;
  }
  if (tmp) {
    tmp = arg3.length > 1;
  }
  return tmp;
};
