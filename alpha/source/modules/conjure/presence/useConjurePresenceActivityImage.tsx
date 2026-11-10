// Module ID: 15109
// Function ID: 15110
// Name: useConjurePresenceActivityImage
// Dependencies: [5149, 5371, 15110, 2]
// Exports: default

// Module 15109 (useConjurePresenceActivityImage)
import shared from "shared" /* 5149 */;
import useThemeDefault from "useTheme" /* 5371 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15110 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
