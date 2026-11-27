// Module ID: 14903
// Function ID: 14904
// Name: useConjurePresenceActivityImage
// Dependencies: [5050, 5252, 14904, 2]
// Exports: default

// Module 14903 (useConjurePresenceActivityImage)
import shared from "shared" /* 5050 */;
import useThemeDefault from "useTheme" /* 5252 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14904 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
