// Module ID: 8690
// Function ID: 8691
// Name: Arrow
// Dependencies: [19, 21, 4445, 712, 1297, 8691, 2]
// Exports: default

// Module 8690 (Arrow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import registerAssetDefault from "registerAsset" /* 8691 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

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
