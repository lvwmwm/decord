// Module ID: 14053
// Function ID: 14054
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 5065, 5127, 14054, 2]
// Exports: default

// Module 14053 (useConjurePresenceActivityImage)
import shared from "shared" /* 5065 */;
import useThemeDefault from "useTheme" /* 5127 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14054 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
