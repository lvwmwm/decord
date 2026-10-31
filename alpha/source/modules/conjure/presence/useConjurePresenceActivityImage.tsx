// Module ID: 14844
// Function ID: 14845
// Name: useConjurePresenceActivityImage
// Dependencies: [5021, 5253, 14845, 2]
// Exports: default

// Module 14844 (useConjurePresenceActivityImage)
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14845 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
