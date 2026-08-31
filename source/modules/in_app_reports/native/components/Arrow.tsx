// Module ID: 8728
// Function ID: 8729
// Name: Arrow
// Dependencies: [19, 21, 4448, 712, 1297, 8729, 2]
// Exports: default

// Module 8728 (Arrow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import registerAssetDefault from "registerAsset" /* 8729 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
createCacheKey = { tintColor: null };
createCacheKey = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const tmp = callback();
  return jsx(Button.Icon, { source: registerAssetDefault, size: Button.Icon.Sizes.MEDIUM, style: callback().tintColor });
};
