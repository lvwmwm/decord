// Module ID: 8568
// Function ID: 8569
// Name: Arrow
// Dependencies: [19, 21, 4481, 709, 1296, 8569, 2]
// Exports: default

// Module 8568 (Arrow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import registerAssetDefault from "registerAsset" /* 8569 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

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
