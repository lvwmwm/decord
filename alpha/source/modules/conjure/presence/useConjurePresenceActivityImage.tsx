// Module ID: 15083
// Function ID: 15084
// Name: useConjurePresenceActivityImage
// Dependencies: [5147, 5369, 15084, 2]
// Exports: default

// Module 15083 (useConjurePresenceActivityImage)
import shared from "shared" /* 5147 */;
import useThemeDefault from "useTheme" /* 5369 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 15084 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
