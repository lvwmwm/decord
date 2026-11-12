// Module ID: 15112
// Function ID: 15113
// Name: useConjurePresenceActivityImage
// Dependencies: [5177, 5401, 15113, 2]
// Exports: default

// Module 15112 (useConjurePresenceActivityImage)
import shared from "shared" /* 5177 */;
import useThemeDefault from "useTheme" /* 5401 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15113 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
