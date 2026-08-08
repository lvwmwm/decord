// Module ID: 11911
// Function ID: 11912
// Name: GuildPowerupsBoostInfo
// Dependencies: [17, 4191, 21, 4303, 712, 11912, 7695, 4299, 2]
// Exports: default

// Module 11911 (GuildPowerupsBoostInfo)
import { View } from "get ActivityIndicator";
import { BoostInfoType } from "BoostedGuildTiers";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: null, headerContainer: null };
obj = { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: require("Themes").space.PX_12 };
obj[0] = obj;
obj[1] = { flexDirection: "row", alignItems: "center", justifyContent: "center", display: "flex" };
let closure_7 = createCacheKey.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx");

export default function GuildPowerupsBoostInfo(arg0) {
  let count;
  let type;
  ({ count, type } = arg0);
  const tmp = callback();
  let obj = require(11912) /* getGuildPowerupsBoostInfoText */;
  const guildPowerupsBoostInfoText = obj.getGuildPowerupsBoostInfoText(count, type);
  obj = { style: tmp.container, accessible: true, accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText, children: null };
  obj = { style: tmp.headerContainer, importantForAccessibility: "no-hide-descendants", accessible: false, children: null };
  if (type === BoostInfoType.AVAILABLE) {
    let TEXT_MUTED = importDefault(712).unsafe_rawColors.GUILD_BOOSTING_PINK;
  } else {
    TEXT_MUTED = importDefault(712).colors.TEXT_MUTED;
  }
  const items = [closure_5(require(7695) /* BoostGemIcon */.BoostGemIcon, { size: "sm", color: TEXT_MUTED }), ];
  let str = "text-subtle";
  if (type === BoostInfoType.AVAILABLE) {
    str = "text-strong";
  }
  items[1] = closure_5(require(4299) /* Text */.Text, { variant: "text-lg/medium", color: str, importantForAccessibility: "no-hide-descendants", children: count });
  obj[3] = items;
  const items1 = [closure_6(View, obj), closure_5(require(4299) /* Text */.Text, { variant: "text-md/normal", color: "text-subtle", importantForAccessibility: "no-hide-descendants", children: guildPowerupsBoostInfoText })];
  obj[3] = items1;
  return closure_6(View, obj);
};
