// Module ID: 14364
// Function ID: 14365
// Name: useConjurePresenceActivityImage
// Dependencies: [4799, 5001, 14365, 2]
// Exports: default

// Module 14364 (useConjurePresenceActivityImage)
import shared from "shared" /* 4799 */;
import useThemeDefault from "useTheme" /* 5001 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14365 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
