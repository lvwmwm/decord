// Module ID: 11192
// Function ID: 11193
// Name: ForumPostTitle
// Dependencies: [19, 21, 4661, 501, 4734, 2]
// Exports: default

// Module 11192 (ForumPostTitle)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import PlatformTypes from "PlatformTypes";

const require = arg1;
createCacheKey = null;
if (PlatformTypes.isIOS()) {
  createCacheKey = { lineHeight: 22 };
}
createCacheKey = { title: null };
PlatformTypes = { marginBottom: 6 };
createCacheKey = Object.assign(createCacheKey);
createCacheKey[0] = PlatformTypes;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/forums/native/posts/ForumPostTitle.tsx");

export default function ForumPostTitle(arg0) {
  let ellipsizeMode;
  let hasUnreads;
  let lineClamp;
  let onTextLayout;
  let title;
  ({ title, lineClamp, ellipsizeMode, hasUnreads, onTextLayout } = arg0);
  let str = "text-muted";
  if (hasUnreads) {
    str = "mobile-text-heading-primary";
  }
  const tmp = createCacheKey();
  return jsx(require(4734) /* Text */.Text, { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: createCacheKey().title, onTextLayout, children: title });
};
