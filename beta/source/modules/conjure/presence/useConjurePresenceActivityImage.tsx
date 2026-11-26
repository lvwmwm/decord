// Module ID: 14465
// Function ID: 14466
// Name: useConjurePresenceActivityImage
// Dependencies: [4920, 5122, 14466, 2]
// Exports: default

// Module 14465 (useConjurePresenceActivityImage)
import shared from "shared" /* 4920 */;
import useThemeDefault from "useTheme" /* 5122 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14466 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
