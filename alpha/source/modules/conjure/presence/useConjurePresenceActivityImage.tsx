// Module ID: 15596
// Function ID: 15597
// Name: useConjurePresenceActivityImage
// Dependencies: [5250, 5484, 15597, 2]
// Exports: default

// Module 15596 (useConjurePresenceActivityImage)
import shared from "shared" /* 5250 */;
import useThemeDefault from "useTheme" /* 5484 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15597 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
