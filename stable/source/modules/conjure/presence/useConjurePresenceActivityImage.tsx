// Module ID: 14316
// Function ID: 14317
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 5010, 5237, 14317, 2]
// Exports: default

// Module 14316 (useConjurePresenceActivityImage)
import shared from "shared" /* 5010 */;
import useThemeDefault from "useTheme" /* 5237 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14317 */;
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
