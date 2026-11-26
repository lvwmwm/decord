// Module ID: 14896
// Function ID: 14897
// Name: useConjurePresenceActivityImage
// Dependencies: [5050, 5252, 14897, 2]
// Exports: default

// Module 14896 (useConjurePresenceActivityImage)
import shared from "shared" /* 5050 */;
import useThemeDefault from "useTheme" /* 5252 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14897 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
