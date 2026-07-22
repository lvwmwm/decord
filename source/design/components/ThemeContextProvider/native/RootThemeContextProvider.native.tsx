// Module ID: 10792
// Function ID: 83802
// Name: RootThemeContextProvider
// Dependencies: []
// Exports: DisableCustomTheme, RootThemeContextProvider

// Module 10792 (RootThemeContextProvider)
let closure_2 = importAll(dependencyMap[0]);
const ThemeTypes = arg1(dependencyMap[1]).ThemeTypes;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let DARK = children.theme;
  if (DARK === undefined) {
    DARK = ThemeTypes.DARK;
  }
  const arg1 = DARK;
  let primaryColor = children.primaryColor;
  if (primaryColor === undefined) {
    primaryColor = null;
  }
  const dependencyMap = primaryColor;
  let secondaryColor = children.secondaryColor;
  if (secondaryColor === undefined) {
    secondaryColor = null;
  }
  const React = secondaryColor;
  let gradient = children.gradient;
  if (gradient === undefined) {
    gradient = null;
  }
  const ThemeTypes = gradient;
  let num = children.flags;
  if (num === undefined) {
    num = 0;
  }
  const jsx = num;
  let num2 = children.contrast;
  if (num2 === undefined) {
    num2 = 1;
  }
  let num3 = children.saturation;
  if (num3 === undefined) {
    num3 = 1;
  }
  const enabledExperiments = children.enabledExperiments;
  let str = children.density;
  if (str === undefined) {
    str = "compact";
  }
  let flag = children.disableAdaptiveTheme;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = children.reduceAdaptiveTheme;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [DARK, primaryColor, secondaryColor, gradient, num, num2, num3, enabledExperiments, str, flag, flag2];
  const value = React.useMemo(() => {
    let obj = DARK(primaryColor[3]);
    obj = { theme: DARK, primaryColor, secondaryColor, gradient, flags: num, contrast: num2, saturation: num3, enabledExperiments, density: str, disableAdaptiveTheme: flag, reduceAdaptiveTheme: flag2 };
    return obj.createThemedContext(obj);
  }, items);
  return jsx(arg1(dependencyMap[3]).ThemeContext.Provider, { value, children: children.children });
};
export const DisableCustomTheme = function DisableCustomTheme(children) {
  let obj = arg1(dependencyMap[3]);
  const themeContext = obj.useThemeContext();
  const arg1 = themeContext;
  const items = [themeContext];
  const memo = React.useMemo(() => {
    let obj = themeContext(closure_1[3]);
    obj = {};
    const merged = Object.assign(themeContext);
    obj["primaryColor"] = null;
    obj["secondaryColor"] = null;
    obj["gradient"] = null;
    return obj.createThemedContext(obj);
  }, items);
  obj = { value: memo, children: children.children };
  return jsx(arg1(dependencyMap[3]).ThemeContext.Provider, obj);
};
