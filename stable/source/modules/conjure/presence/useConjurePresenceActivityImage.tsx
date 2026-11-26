// Module ID: 15712
// Function ID: 15713
// Name: useConjurePresenceActivityImage
// Dependencies: [5313, 5537, 15713, 2]
// Exports: default

// Module 15712 (useConjurePresenceActivityImage)
import shared from "shared" /* 5313 */;
import useThemeDefault from "useTheme" /* 5537 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15713 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
