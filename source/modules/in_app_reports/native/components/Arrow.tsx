// Module ID: 8638
// Function ID: 8639
// Name: Arrow
// Dependencies: [19, 21, 4560, 576, 1178, 8639, 2]
// Exports: default

// Module 8638 (Arrow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import Button from "Button" /* 1178 */;
import registerAssetDefault from "registerAsset" /* 8639 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

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
