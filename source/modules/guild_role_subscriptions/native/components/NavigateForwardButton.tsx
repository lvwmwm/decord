// Module ID: 14784
// Function ID: 14785
// Name: NavigateForwardButton
// Dependencies: [19, 21, 4448, 712, 5036, 4444, 1297, 14785, 2]
// Exports: default

// Module 14784 (NavigateForwardButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4444 */;
import PressableBase from "PressableBase" /* 5036 */;
import registerAssetDefault from "registerAsset" /* 14785 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 1 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default function NavigateForwardButton(arg0) {
  ({ onPress, text } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.container, onPress, children: null };
  obj = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
  const items = [callback(Text.Text, obj), ];
  obj = { source: registerAssetDefault };
  items[1] = callback(Button.Icon, obj);
  obj[2] = items;
  return callback2(PressableBase.PressableHighlight, obj);
};
