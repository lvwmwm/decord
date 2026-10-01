// Module ID: 9535
// Function ID: 9536
// Name: ThemeContextProvider/RootThemeContextProvider
// Dependencies: [19, 1085, 21, 4540, 2]
// Exports: DisableCustomTheme, RootThemeContextProvider

// Module 9535 (ThemeContextProvider/RootThemeContextProvider)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 4540 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(theme) {
  let gradient;
  let DARK = theme.theme;
  const children = theme.children;
  if (DARK === undefined) {
    DARK = gradient.DARK;
  }
  let primaryColor = theme.primaryColor;
  if (primaryColor === undefined) {
    primaryColor = null;
  }
  let secondaryColor = theme.secondaryColor;
  if (secondaryColor === undefined) {
    secondaryColor = null;
  }
  gradient = theme.gradient;
  if (gradient === undefined) {
    gradient = null;
  }
  let num = theme.flags;
  if (num === undefined) {
    num = 0;
  }
  let num2 = theme.contrast;
  if (num2 === undefined) {
    num2 = 1;
  }
  let num3 = theme.saturation;
  if (num3 === undefined) {
    num3 = 1;
  }
  const enabledExperiments = theme.enabledExperiments;
  let str = theme.density;
  if (str === undefined) {
    str = "compact";
  }
  let flag = theme.disableAdaptiveTheme;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = theme.reduceAdaptiveTheme;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const items = [DARK, primaryColor, secondaryColor, gradient, num, num2, num3, enabledExperiments, str, flag, flag2];
  const value = secondaryColor.useMemo(() => {
    const obj = native;
    const obj2 = { theme: DARK, primaryColor, secondaryColor, gradient, flags: num, contrast: num2, saturation: num3, enabledExperiments, density: str, disableAdaptiveTheme: flag, reduceAdaptiveTheme: flag2 };
    return obj.createThemedContext(obj2);
  }, items);
  return num(DARK(primaryColor[3]).ThemeContext.Provider, { value, children });
};
export const DisableCustomTheme = function DisableCustomTheme(children) {
  let themeContext;
  let obj = themeContext(4540);
  themeContext = obj.useThemeContext();
  const items = [themeContext];
  const memo = react.useMemo(() => {
    const obj = { primaryColor: null, secondaryColor: null, gradient: null };
    const createThemedContext = native.createThemedContext;
    native;
    const merged = Object.assign(themeContext);
    return createThemedContext(obj);
  }, items);
  return jsx(themeContext(4540).ThemeContext.Provider, { value: memo, children: children.children });
};
