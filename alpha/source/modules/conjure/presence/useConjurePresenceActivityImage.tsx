// Module ID: 14179
// Function ID: 14180
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 4973, 5187, 14180, 2]
// Exports: default

// Module 14179 (useConjurePresenceActivityImage)
import shared from "shared" /* 4973 */;
import useThemeDefault from "useTheme" /* 5187 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14180 */;
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
