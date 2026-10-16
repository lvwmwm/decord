// Module ID: 13971
// Function ID: 13972
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 5028, 5090, 13972, 2]
// Exports: default

// Module 13971 (useConjurePresenceActivityImage)
import shared from "shared" /* 5028 */;
import useThemeDefault from "useTheme" /* 5090 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 13972 */;
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
