// Module ID: 13069
// Function ID: 13070
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 4930, 4992, 13070, 2]
// Exports: default

// Module 13069 (useConjurePresenceActivityImage)
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 13070 */;
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
