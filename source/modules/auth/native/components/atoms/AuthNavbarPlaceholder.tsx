// Module ID: 6918
// Function ID: 6919
// Name: AuthNavbarPlaceholder
// Dependencies: [19, 21, 4481, 709, 5579, 2]
// Exports: default

// Module 6918 (AuthNavbarPlaceholder)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import HeaderBackImage from "HeaderBackImage" /* 5579 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

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
