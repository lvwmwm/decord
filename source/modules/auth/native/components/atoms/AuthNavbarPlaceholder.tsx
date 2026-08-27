// Module ID: 7684
// Function ID: 7685
// Name: AuthNavbarPlaceholder
// Dependencies: [19, 21, 4445, 712, 5447, 2]
// Exports: default

// Module 7684 (AuthNavbarPlaceholder)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import HeaderBackImage from "HeaderBackImage" /* 5447 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
createCacheKey = { navBar: null };
createCacheKey = { backgroundColor: ThemesDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default function AuthNavbarPlaceholder() {
  const tmp = callback();
  return jsx(HeaderBackImage.FauxHeader, { style: callback().navBar, children: null });
};
