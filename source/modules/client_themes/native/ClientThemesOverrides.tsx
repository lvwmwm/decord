// Module ID: 8820
// Function ID: 8821
// Name: useGradientBottom
// Dependencies: [19, 4189, 4000, 8821, 2]
// Exports: useClientThemesOverride, useGradientBottom, useGradientMidpoint, useGradientTop

// Module 8820 (useGradientBottom)
import noop from "noop";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ none: { backgroundColor: "transparent" } });
const result = require("getGradientColorByPercentage").fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = function useGradientBottom() {
  gradientValue = gradientValue(4000).useGradientValue(gradientValue(4000).GradientPercentage.END);
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
  gradientValue = gradientValue(4000).useGradientValue(gradientValue(4000).GradientPercentage.START);
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
  gradientValue = gradientValue(4000).useGradientValue(gradientValue(4000).GradientPercentage.MID);
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
  if (importDefault(8821)()) {
    let none = themedChatInput;
    if (themedChatInput == null) {
      none = tmp.none;
    }
    tmp2 = none;
  }
  return tmp2;
};
