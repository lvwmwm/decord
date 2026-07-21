// Module ID: 8821
// Function ID: 69548
// Name: useGradientBottom
// Dependencies: []
// Exports: useClientThemesOverride, useGradientBottom, useGradientMidpoint, useGradientTop

// Module 8821 (useGradientBottom)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).createStyles({ none: { backgroundColor: "transparent" } });
const obj = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = function useGradientBottom() {
  const gradientValue = arg1(dependencyMap[2]).useGradientValue(arg1(dependencyMap[2]).GradientPercentage.END);
  const arg1 = gradientValue;
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
  const gradientValue = arg1(dependencyMap[2]).useGradientValue(arg1(dependencyMap[2]).GradientPercentage.START);
  const arg1 = gradientValue;
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
  const gradientValue = arg1(dependencyMap[2]).useGradientValue(arg1(dependencyMap[2]).GradientPercentage.MID);
  const arg1 = gradientValue;
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
  if (importDefault(dependencyMap[3])()) {
    if (null == none) {
      none = tmp2.none;
    }
    tmp = none;
  }
  return tmp;
};
