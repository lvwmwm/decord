// Module ID: 13121
// Function ID: 13122
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 4969, 5031, 13122, 2]
// Exports: default

// Module 13121 (useConjurePresenceActivityImage)
import shared from "shared" /* 4969 */;
import useThemeDefault from "useTheme" /* 5031 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 13122 */;
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
