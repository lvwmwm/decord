// Module ID: 14771
// Function ID: 14772
// Name: useConjurePresenceActivityImage
// Dependencies: [558, 5012, 5242, 14772, 2]
// Exports: default

// Module 14771 (useConjurePresenceActivityImage)
import shared from "shared" /* 5012 */;
import useThemeDefault from "useTheme" /* 5242 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14772 */;
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
