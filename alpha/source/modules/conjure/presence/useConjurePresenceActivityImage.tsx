// Module ID: 14377
// Function ID: 14378
// Name: useConjurePresenceActivityImage
// Dependencies: [4830, 5032, 14378, 2]
// Exports: default

// Module 14377 (useConjurePresenceActivityImage)
import shared from "shared" /* 4830 */;
import useThemeDefault from "useTheme" /* 5032 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14378 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
