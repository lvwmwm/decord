// Module ID: 4725
// Function ID: 4726
// Name: useTheme
// Dependencies: [1078, 558, 4642, 568, 2]
// Exports: getThemeIndex

// Module 4725 (useTheme)
import c from "c" /* 568 */;
import Constants from "Constants" /* 1078 */;
import shared from "shared" /* 4642 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const useTheme = () => shared.useThemeContext().theme;
let ReactCompilerGating = ReactCompilerGating_mod;
function getThemeIndex(arg0) {
  if (ThemeTypes.DARK === arg0) {
    return 0;
  } else if (tmp.LIGHT === arg0) {
    return 1;
  }
}
const result1 = size.fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export const useThemeIndex = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (typeof fn === "function") {
    const theme = shared.useThemeContext().theme;
    if (cResult[0] !== theme) {
      let num2 = 0;
      if (ThemeTypes.DARK !== theme) {
        if (ThemeTypes.LIGHT === theme) {
          num2 = 1;
        }
      }
      cResult[0] = theme;
      cResult[1] = num2;
      let tmp4 = num2;
    } else {
      tmp4 = cResult[1];
    }
    return tmp4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (() => {
  if (typeof fn === "function") {
    const theme = shared.useThemeContext().theme;
    let num = 0;
    if (ThemeTypes.DARK !== theme) {
      if (ThemeTypes.LIGHT === theme) {
        num = 1;
      }
    }
    return num;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
export { getThemeIndex };
