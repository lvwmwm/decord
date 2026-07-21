// Module ID: 7644
// Function ID: 61180
// Name: processColorStringsInternal
// Dependencies: []
// Exports: isNativeMessageEligibleForEnhancedRoleColors, useIsRoleStyleAndRoleColorsEligibleForERC, useProcessColorStringsArray

// Module 7644 (processColorStringsInternal)
function processColorStringsInternal(primaryColor) {
  let tmp10;
  let tmp8;
  let tmp9;
  if (theme.theme === ThemeTypes.LIGHT) {
    if (null != primaryColor) {
      const obj = importDefault(dependencyMap[5])(primaryColor);
      [tmp8, tmp9, tmp10] = callback(importDefault(dependencyMap[5])(primaryColor).hsl(), 3);
      const tmp7 = callback(importDefault(dependencyMap[5])(primaryColor).hsl(), 3);
      const obj2 = importDefault(dependencyMap[5]);
      return processColor(importDefault(dependencyMap[5]).hsl(tmp8, tmp9, 0.85 * tmp10).hex());
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
    return items.filter(arg1(dependencyMap[6]).isNotNullish);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const processColor = arg1(dependencyMap[2]).processColor;
let closure_6 = importDefault(dependencyMap[3]);
const ThemeTypes = arg1(dependencyMap[4]).ThemeTypes;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx");

export { processColorStrings };
export { processColorStringsArray };
export const useProcessColorStringsArray = function useProcessColorStringsArray(colorStrings) {
  const arg1 = colorStrings;
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
  return React.useMemo(() => callback(arg0), items);
};
export const isNativeMessageEligibleForEnhancedRoleColors = function isNativeMessageEligibleForEnhancedRoleColors(guildId, id) {
  return id(dependencyMap[7]).getHasEnhancedRoleColors(guildId, id);
};
export const useIsRoleStyleAndRoleColorsEligibleForERC = function useIsRoleStyleAndRoleColorsEligibleForERC(guildId, id, stateFromStores, processColorStringsArray) {
  let tmp = importDefault(dependencyMap[7])(guildId, id);
  if (tmp) {
    tmp = "username" === stateFromStores;
  }
  if (tmp) {
    tmp = processColorStringsArray.length > 1;
  }
  return tmp;
};
