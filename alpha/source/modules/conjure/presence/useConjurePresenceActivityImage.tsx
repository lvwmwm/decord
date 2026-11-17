// Module ID: 15744
// Function ID: 15745
// Name: useConjurePresenceActivityImage
// Dependencies: [5317, 5541, 15745, 2]
// Exports: default

// Module 15744 (useConjurePresenceActivityImage)
import shared from "shared" /* 5317 */;
import useThemeDefault from "useTheme" /* 5541 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15745 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
