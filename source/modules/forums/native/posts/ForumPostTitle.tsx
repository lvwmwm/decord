// Module ID: 11244
// Function ID: 11245
// Name: ForumPostTitle
// Dependencies: [19, 21, 4668, 501, 4739, 2]
// Exports: default

// Module 11244 (ForumPostTitle)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4739 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import PlatformTypes from "PlatformTypes" /* 501 */;

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
