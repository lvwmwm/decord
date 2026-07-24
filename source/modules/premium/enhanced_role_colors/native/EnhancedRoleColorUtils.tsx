// Module ID: 7739
// Function ID: 61513
// Name: processColorStringsInternal
// Dependencies: [57, 31, 27, 1278, 482, 666, 1327, 4571, 2]
// Exports: isNativeMessageEligibleForEnhancedRoleColors, useIsRoleStyleAndRoleColorsEligibleForERC, useProcessColorStringsArray

// Module 7739 (processColorStringsInternal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { processColor } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ThemeTypes } from "sum";

const require = arg1;
function processColorStringsInternal(primaryColor) {
  let tmp10;
  let tmp8;
  let tmp9;
  if (theme.theme === ThemeTypes.LIGHT) {
    if (null != primaryColor) {
      const obj = importDefault(666)(primaryColor);
      [tmp8, tmp9, tmp10] = callback(importDefault(666)(primaryColor).hsl(), 3);
      const tmp7 = callback(importDefault(666)(primaryColor).hsl(), 3);
      const obj2 = importDefault(666);
      return processColor(importDefault(666).hsl(tmp8, tmp9, 0.85 * tmp10).hex());
    }
  }
  let tmp2;
  if (null != primaryColor) {
    tmp2 = primaryColor;
  }
  return processColor(tmp2);
}
function processColorStrings(colorStrings) {
  if (null != colorStrings) {
    const obj = { primaryColor: processColorStringsInternal(colorStrings.primaryColor), secondaryColor: processColorStringsInternal(colorStrings.secondaryColor), tertiaryColor: processColorStringsInternal(colorStrings.tertiaryColor) };
    return obj;
  }
}
function processColorStringsArray(colorStrings) {
  if (null == colorStrings) {
    return [];
  } else {
    const items = [, , ];
    ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = processColorStrings(colorStrings));
    return items.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  }
}
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx");

export { processColorStrings };
export { processColorStringsArray };
export const useProcessColorStringsArray = function useProcessColorStringsArray(colorStrings) {
  let closure_0 = colorStrings;
  let primaryColor;
  if (null != colorStrings) {
    primaryColor = colorStrings.primaryColor;
  }
  const items = [primaryColor, , ];
  let secondaryColor;
  if (null != colorStrings) {
    secondaryColor = colorStrings.secondaryColor;
  }
  items[1] = secondaryColor;
  let tertiaryColor;
  if (null != colorStrings) {
    tertiaryColor = colorStrings.tertiaryColor;
  }
  items[2] = tertiaryColor;
  return React.useMemo(() => outer1_10(closure_0), items);
};
export const isNativeMessageEligibleForEnhancedRoleColors = function isNativeMessageEligibleForEnhancedRoleColors(guildId, id) {
  return require(4571) /* useHasEnhancedRoleColors */.getHasEnhancedRoleColors(guildId, id);
};
export const useIsRoleStyleAndRoleColorsEligibleForERC = function useIsRoleStyleAndRoleColorsEligibleForERC(guildId, id, stateFromStores, processColorStringsArray) {
  let tmp = importDefault(4571)(guildId, id);
  if (tmp) {
    tmp = "username" === stateFromStores;
  }
  if (tmp) {
    tmp = processColorStringsArray.length > 1;
  }
  return tmp;
};
