// Module ID: 14283
// Function ID: 14284
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 4978, 5205, 14284, 2]
// Exports: default

// Module 14283 (useConjurePresenceActivityImage)
import shared from "shared" /* 4978 */;
import useThemeDefault from "useTheme" /* 5205 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14284 */;
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
