// Module ID: 14537
// Function ID: 14538
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 5011, 5241, 14538, 2]
// Exports: default

// Module 14537 (useConjurePresenceActivityImage)
import shared from "shared" /* 5011 */;
import useThemeDefault from "useTheme" /* 5241 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14538 */;
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
