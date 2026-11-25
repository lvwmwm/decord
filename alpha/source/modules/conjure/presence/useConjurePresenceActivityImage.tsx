// Module ID: 14843
// Function ID: 14844
// Name: useConjurePresenceActivityImage
// Dependencies: [5019, 5221, 14844, 2]
// Exports: default

// Module 14843 (useConjurePresenceActivityImage)
import shared from "shared" /* 5019 */;
import useThemeDefault from "useTheme" /* 5221 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14844 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
