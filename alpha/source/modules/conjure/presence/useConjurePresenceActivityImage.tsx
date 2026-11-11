// Module ID: 15599
// Function ID: 15600
// Name: useConjurePresenceActivityImage
// Dependencies: [5250, 5484, 15600, 2]
// Exports: default

// Module 15599 (useConjurePresenceActivityImage)
import shared from "shared" /* 5250 */;
import useThemeDefault from "useTheme" /* 5484 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15600 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
