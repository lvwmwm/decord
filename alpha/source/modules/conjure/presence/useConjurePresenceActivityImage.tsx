// Module ID: 14721
// Function ID: 14722
// Name: useConjurePresenceActivityImage
// Dependencies: [4924, 5126, 14722, 2]
// Exports: default

// Module 14721 (useConjurePresenceActivityImage)
import shared from "shared" /* 4924 */;
import useThemeDefault from "useTheme" /* 5126 */;
import conjurePresenceActivityImageDefault from "conjurePresenceActivityImage" /* 14722 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/presence/useConjurePresenceActivityImage.tsx");

export default function useConjurePresenceActivityImage() {
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const tmp2 = conjurePresenceActivityImageDefault;
  return isThemeDarkResult ? tmp2.dark : tmp2.light;
};
