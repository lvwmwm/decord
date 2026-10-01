// Module ID: 4547
// Function ID: 4548
// Name: ThemeContext
// Dependencies: [19, 1085, 21, 2]
// Exports: UseThemeContext, createThemedContext, useThemeContext

// Module 4547 (ThemeContext)
import Constants from "Constants" /* 1085 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let json;
let map;
const ThemeTypes = Constants.ThemeTypes;
({ Fragment: map, jsx: c2 } = Fragment);
let obj = { theme: ThemeTypes.LIGHT, primaryColor: null, secondaryColor: null, gradient: null, flags: 0, contrast: 1, saturation: 1, density: "compact", disableAdaptiveTheme: false, reduceAdaptiveTheme: false };
const obj2 = { key: json };
json = JSON.stringify(obj);
let merged = Object.assign(obj);
let context = react.createContext(obj2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx");

export const createThemedContext = function createThemedContext(arg0) {
  let json;
  const obj = { key: json };
  json = JSON.stringify(arg0);
  const merged = Object.assign(arg0);
  return obj;
};
export const useThemeContext = function useThemeContext() {
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useThemeContext must be used within a ThemeContext.Provider");
    throw error;
  } else {
    return context;
  }
};
export const FALLBACK_THEME_CONTEXT_VALUE = obj2;
export const ThemeContext = context;
export const UseThemeContext = function UseThemeContext(children) {
  children = children.children;
  context = react.useContext(context);
  if (null == context) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useThemeContext must be used within a ThemeContext.Provider");
    throw error;
  } else {
    const obj = { children: children(context) };
    return React2(map, obj);
  }
};
