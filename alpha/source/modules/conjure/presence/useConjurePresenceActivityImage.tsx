// Module ID: 14231
// Function ID: 14232
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 4976, 5191, 14232, 2]
// Exports: default

// Module 14231 (useConjurePresenceActivityImage)
import shared from "shared" /* 4976 */;
import useThemeDefault from "useTheme" /* 5191 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14232 */;
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
