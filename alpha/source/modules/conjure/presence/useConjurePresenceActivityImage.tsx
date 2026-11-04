// Module ID: 15059
// Function ID: 15060
// Name: useConjurePresenceActivityImage
// Dependencies: [5148, 5377, 15060, 2]
// Exports: default

// Module 15059 (useConjurePresenceActivityImage)
import shared from "shared" /* 5148 */;
import useThemeDefault from "useTheme" /* 5377 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
