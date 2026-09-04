// Module ID: 11948
// Function ID: 11949
// Name: ForumPostTitle
// Dependencies: [19, 21, 4481, 1235, 4477, 2]
// Exports: default

// Module 11948 (ForumPostTitle)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4477 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;
import PlatformTypes from "PlatformTypes" /* 1235 */;

require = arg1;
noopAll;
createCacheKey = null;
if (PlatformTypes.isIOS()) {
  createCacheKey = { lineHeight: 22 };
}
createCacheKey = { title: null };
PlatformTypes = { marginBottom: 6 };
createCacheKey = Object.assign(createCacheKey);
createCacheKey[0] = PlatformTypes;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/forums/native/posts/ForumPostTitle.tsx");

export default function ForumPostTitle(arg0) {
  ({ title, lineClamp, ellipsizeMode, hasUnreads, onTextLayout } = arg0);
  let str = "text-muted";
  if (hasUnreads) {
    str = "mobile-text-heading-primary";
  }
  const tmp = callback();
  return jsx(Text.Text, { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: callback().title, onTextLayout, children: title });
};
