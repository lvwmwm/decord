// Module ID: 14806
// Function ID: 14807
// Name: useConjurePresenceActivityImage
// Dependencies: [5016, 5248, 14807, 2]
// Exports: default

// Module 14806 (useConjurePresenceActivityImage)
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14807 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
