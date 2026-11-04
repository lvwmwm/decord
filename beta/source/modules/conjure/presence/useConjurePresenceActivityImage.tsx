// Module ID: 14848
// Function ID: 14849
// Name: useConjurePresenceActivityImage
// Dependencies: [5021, 5253, 14849, 2]
// Exports: default

// Module 14848 (useConjurePresenceActivityImage)
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14849 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
