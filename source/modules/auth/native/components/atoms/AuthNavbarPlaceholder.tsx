// Module ID: 8728
// Function ID: 8729
// Name: AuthNavbarPlaceholder
// Dependencies: [19, 21, 4444, 712, 5442, 2]
// Exports: default

// Module 8728 (AuthNavbarPlaceholder)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import HeaderBackImage from "HeaderBackImage" /* 5442 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

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
