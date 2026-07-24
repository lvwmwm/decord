// Module ID: 11613
// Function ID: 90301
// Name: GuildPowerupsBoostInfo
// Dependencies: [27, 4018, 33, 4130, 689, 11614, 7477, 4126, 2]
// Exports: default

// Module 11613 (GuildPowerupsBoostInfo)
import { View } from "get ActivityIndicator";
import { BoostInfoType } from "BoostedGuildTiers";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.container = obj;
obj.headerContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", display: "flex" };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx");

export default function GuildPowerupsBoostInfo(arg0) {
  let count;
  let type;
  ({ count, type } = arg0);
  const tmp = callback2();
  let obj = require(11614) /* getGuildPowerupsBoostInfoText */;
  const guildPowerupsBoostInfoText = obj.getGuildPowerupsBoostInfoText(count, type);
  obj = { style: tmp.container, accessible: true, accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText };
  obj = { style: tmp.headerContainer, importantForAccessibility: "no-hide-descendants", accessible: false };
  const obj1 = { size: "sm" };
  if (type === BoostInfoType.AVAILABLE) {
    let TEXT_MUTED = importDefault(689).unsafe_rawColors.GUILD_BOOSTING_PINK;
  } else {
    TEXT_MUTED = importDefault(689).colors.TEXT_MUTED;
  }
  obj1.color = TEXT_MUTED;
  const items = [callback(require(7477) /* BoostGemIcon */.BoostGemIcon, obj1), ];
  const obj2 = { variant: "text-lg/medium", color: null, importantForAccessibility: "no-hide-descendants" };
  let str = "text-subtle";
  if (type === BoostInfoType.AVAILABLE) {
    str = "text-strong";
  }
  obj2.color = str;
  obj2.children = count;
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  const items1 = [closure_6(View, obj), ];
  const obj3 = { variant: "text-md/normal", color: "text-subtle", importantForAccessibility: "no-hide-descendants", children: guildPowerupsBoostInfoText };
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  obj.children = items1;
  return closure_6(View, obj);
};
