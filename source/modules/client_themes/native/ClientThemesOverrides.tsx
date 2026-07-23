// Module ID: 8829
// Function ID: 69601
// Name: useGradientBottom
// Dependencies: [31, 4130, 3941, 8830, 2]
// Exports: useClientThemesOverride, useGradientBottom, useGradientMidpoint, useGradientTop

// Module 8829 (useGradientBottom)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ none: { backgroundColor: "transparent" } });
const result = require("colorToHex").fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = function useGradientBottom() {
  gradientValue = gradientValue(3941).useGradientValue(gradientValue(3941).GradientPercentage.END);
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
  gradientValue = gradientValue(3941).useGradientValue(gradientValue(3941).GradientPercentage.START);
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
  gradientValue = gradientValue(3941).useGradientValue(gradientValue(3941).GradientPercentage.MID);
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
  if (importDefault(8830)()) {
    if (null == none) {
      none = tmp2.none;
    }
    tmp = none;
  }
  return tmp;
};
