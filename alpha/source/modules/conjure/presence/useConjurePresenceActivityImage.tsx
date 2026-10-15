// Module ID: 13939
// Function ID: 13940
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 5025, 5087, 13940, 2]
// Exports: default

// Module 13939 (useConjurePresenceActivityImage)
import shared from "shared" /* 5025 */;
import useThemeDefault from "useTheme" /* 5087 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 13940 */;
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
