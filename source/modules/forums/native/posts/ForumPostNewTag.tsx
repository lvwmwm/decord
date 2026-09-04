// Module ID: 11947
// Function ID: 11948
// Name: ForumPostNewTag
// Dependencies: [19, 21, 4481, 709, 1296, 2]
// Exports: default

// Module 11947 (ForumPostNewTag)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
noopAll;
createCacheKey = { container: null };
createCacheKey = { paddingVertical: 1, backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default function ForumPostNewTag(containerStyle) {
  containerStyle = [containerStyle.containerStyle, callback().container];
  return jsx(Button.NewTag, { containerStyle, variant: "text-xs/bold", color: "badge-text-brand" });
};
