// Module ID: 15073
// Function ID: 15074
// Name: useConjurePresenceActivityImage
// Dependencies: [5150, 5379, 15074, 2]
// Exports: default

// Module 15073 (useConjurePresenceActivityImage)
import shared from "shared" /* 5150 */;
import useThemeDefault from "useTheme" /* 5379 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15074 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
