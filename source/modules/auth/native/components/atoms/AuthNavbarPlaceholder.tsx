// Module ID: 8554
// Function ID: 8555
// Name: AuthNavbarPlaceholder
// Dependencies: [19, 21, 4342, 712, 5310, 2]
// Exports: default

// Module 8554 (AuthNavbarPlaceholder)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { navBar: null };
createCacheKey = { backgroundColor: require("Themes").unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default function AuthNavbarPlaceholder() {
  const tmp = createCacheKey();
  return jsx(require(5310) /* HeaderBackImage */.FauxHeader, { style: createCacheKey().navBar, children: null });
};
