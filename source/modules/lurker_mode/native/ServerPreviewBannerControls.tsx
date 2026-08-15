// Module ID: 15439
// Function ID: 15440
// Name: ServerPreviewBannerControls
// Dependencies: [19, 17, 676, 21, 4661, 712, 7302, 8035, 6317, 1236, 15440, 2]
// Exports: default

// Module 15439 (ServerPreviewBannerControls)
import noop from "noop";
import { View } from "get ActivityIndicator";
import { MOBILE_GUILD_UPSELL_LIST } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { row: null };
createCacheKey = { position: "absolute", top: require("Themes").space.PX_16, left: require("Themes").space.PX_16, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default function ServerPreviewBannerControls() {
  let obj = { style: createCacheKey().row, children: null };
  const callback = React.useCallback(() => {
    callback(table[6]).transitionToGuild(closure_5);
  }, []);
  obj = { size: "md", variant: "secondary-overlay", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  obj[2] = importDefault(6317);
  obj[3] = callback;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
  const items = [callback(require(8035) /* IconButton */.IconButton, obj), callback(importDefault(15440), {})];
  obj[1] = items;
  return callback2(View, obj);
};
