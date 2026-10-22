// Module ID: 14217
// Function ID: 14218
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 4976, 5191, 14218, 2]
// Exports: default

// Module 14217 (useConjurePresenceActivityImage)
import shared from "shared" /* 4976 */;
import useThemeDefault from "useTheme" /* 5191 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14218 */;
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
