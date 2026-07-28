// Module ID: 8800
// Function ID: 69447
// Name: useGradientBottom
// Dependencies: [31, 4165, 3976, 8801, 2]
// Exports: useClientThemesOverride, useGradientBottom, useGradientMidpoint, useGradientTop

// Module 8800 (useGradientBottom)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ none: { backgroundColor: "transparent" } });
const result = require("colorToHex").fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = function useGradientBottom() {
  gradientValue = gradientValue(3976).useGradientValue(gradientValue(3976).GradientPercentage.END);
  const items = [gradientValue];
  return React.useMemo(() => {
    let tmp;
    if (null != gradientValue) {
      const obj = { backgroundColor: gradientValue };
      tmp = obj;
    }
    return tmp;
  }, items);
};
export const useGradientTop = function useGradientTop() {
  gradientValue = gradientValue(3976).useGradientValue(gradientValue(3976).GradientPercentage.START);
  const items = [gradientValue];
  return React.useMemo(() => {
    let tmp;
    if (null != gradientValue) {
      const obj = { backgroundColor: gradientValue };
      tmp = obj;
    }
    return tmp;
  }, items);
};
export const useGradientMidpoint = function useGradientMidpoint() {
  gradientValue = gradientValue(3976).useGradientValue(gradientValue(3976).GradientPercentage.MID);
  const items = [gradientValue];
  return React.useMemo(() => {
    let tmp;
    if (null != gradientValue) {
      const obj = { backgroundColor: gradientValue };
      tmp = obj;
    }
    return tmp;
  }, items);
};
export const useClientThemesOverride = function useClientThemesOverride(themedChatInput) {
  let none = themedChatInput;
  let tmp;
  if (importDefault(8801)()) {
    if (null == none) {
      none = tmp2.none;
    }
    tmp = none;
  }
  return tmp;
};
