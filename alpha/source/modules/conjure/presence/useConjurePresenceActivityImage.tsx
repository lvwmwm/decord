// Module ID: 14979
// Function ID: 14980
// Name: useConjurePresenceActivityImage
// Dependencies: [5148, 5376, 14980, 2]
// Exports: default

// Module 14979 (useConjurePresenceActivityImage)
import shared from "shared" /* 5148 */;
import useThemeDefault from "useTheme" /* 5376 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14980 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
