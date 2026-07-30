// Module ID: 9217
// Function ID: 9218
// Name: AuthNavbarPlaceholder
// Dependencies: [19, 21, 4189, 712, 5143, 2]
// Exports: default

// Module 9217 (AuthNavbarPlaceholder)
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
  return jsx(require(5143) /* HeaderBackImage */.FauxHeader, { style: createCacheKey().navBar, children: null });
};
