// Module ID: 7563
// Function ID: 7564
// Name: useGradientBottom
// Dependencies: [19, 4446, 4265, 7564, 2]
// Exports: useClientThemesOverride, useGradientBottom, useGradientMidpoint, useGradientTop

// Module 7563 (useGradientBottom)
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7564 */;
import closure_3 from "noop" /* 19 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
let closure_4 = createCacheKey.createStyles({ none: { backgroundColor: "transparent" } });
const result = require("set").fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = function useGradientBottom() {
  gradientValue = gradientValue(4265).useGradientValue(gradientValue(4265).GradientPercentage.END);
  const items = [gradientValue];
  return React.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      const obj = { backgroundColor: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }, items);
};
export const useGradientTop = function useGradientTop() {
  gradientValue = gradientValue(4265).useGradientValue(gradientValue(4265).GradientPercentage.START);
  const items = [gradientValue];
  return React.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      const obj = { backgroundColor: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }, items);
};
export const useGradientMidpoint = function useGradientMidpoint() {
  gradientValue = gradientValue(4265).useGradientValue(gradientValue(4265).GradientPercentage.MID);
  const items = [gradientValue];
  return React.useMemo(() => {
    let tmp2;
    if (null != gradientValue) {
      const obj = { backgroundColor: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }, items);
};
export const useClientThemesOverride = function useClientThemesOverride(themedChatInput) {
  let tmp2;
  if (useIsUsingClientThemeDefault()) {
    let none = themedChatInput;
    if (themedChatInput == null) {
      none = tmp.none;
    }
    tmp2 = none;
  }
  return tmp2;
};
