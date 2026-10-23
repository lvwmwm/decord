// Module ID: 14255
// Function ID: 14256
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 4976, 5203, 14256, 2]
// Exports: default

// Module 14255 (useConjurePresenceActivityImage)
import shared from "shared" /* 4976 */;
import useThemeDefault from "useTheme" /* 5203 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14256 */;
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
