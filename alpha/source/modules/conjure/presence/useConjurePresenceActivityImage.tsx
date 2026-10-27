// Module ID: 14314
// Function ID: 14315
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 4979, 5206, 14315, 2]
// Exports: default

// Module 14314 (useConjurePresenceActivityImage)
import shared from "shared" /* 4979 */;
import useThemeDefault from "useTheme" /* 5206 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14315 */;
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
