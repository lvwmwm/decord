// Module ID: 3853
// Function ID: 32059
// Name: createThemedContext
// Dependencies: [31, 33, 2]
// Exports: UseThemeContext, createThemedContext

// Module 3853 (createThemedContext)
import importAllResult from "result";
import jsxProd from "jsxProd";

let closure_1;
let closure_2;
function createThemedContext(arg0) {
  const obj = {};
  const json = JSON.stringify(arg0);
  const merged = Object.assign(arg0);
  obj["key"] = json;
  return obj;
}
function useThemeContext() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useThemeContext must be used within a ThemeContext.Provider");
    throw error;
  } else {
    return context;
  }
}
({ Fragment: closure_1, jsx: closure_2 } = jsxProd);
const themedContext = createThemedContext({ theme: "light", primaryColor: null, secondaryColor: null, gradient: null, flags: 0, contrast: 1, saturation: 1, density: "compact", disableAdaptiveTheme: false, reduceAdaptiveTheme: false });
let context = importAllResult.createContext(themedContext);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx");

export { createThemedContext };
export { useThemeContext };
export const FALLBACK_THEME_CONTEXT_VALUE = themedContext;
export const ThemeContext = context;
export const UseThemeContext = function UseThemeContext(children) {
  return callback(closure_1, { children: children.children(useThemeContext()) });
};
