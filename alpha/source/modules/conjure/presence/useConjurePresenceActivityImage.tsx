// Module ID: 14332
// Function ID: 14333
// Name: useConjurePresenceActivityImage
// Dependencies: [4801, 5003, 14333, 2]
// Exports: default

// Module 14332 (useConjurePresenceActivityImage)
import shared from "shared" /* 4801 */;
import useThemeDefault from "useTheme" /* 5003 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14333 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
