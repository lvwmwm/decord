// Module ID: 11290
// Function ID: 11291
// Name: ForumPostNewTag
// Dependencies: [19, 21, 4255, 712, 1297, 2]
// Exports: default

// Module 11290 (ForumPostNewTag)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { paddingVertical: 1, backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  containerStyle = [containerStyle.containerStyle, createCacheKey().container];
  return jsx(require(1297) /* Button */.NewTag, { containerStyle, variant: "text-xs/bold", color: "badge-text-brand" });
};
