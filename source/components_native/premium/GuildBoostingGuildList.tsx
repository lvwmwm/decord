// Module ID: 12521
// Function ID: 96962
// Name: GuildBoostingGuildListItem
// Dependencies: [31, 27, 1838, 4970, 653, 33, 4130, 689, 4066, 566, 4037, 8518, 5737, 7375, 5513, 4126, 9662, 1212, 12490, 2]
// Exports: default

// Module 12521 (GuildBoostingGuildListItem)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NUMBER_OF_GUILDS_TO_RECOMMEND_BOOSTING as closure_7 } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_8;
let closure_9;
const require = arg1;
function GuildBoostingGuildListItem(guildId) {
  guildId = guildId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(566);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(guildId));
  importDefault(4037);
  if (null != stateFromStores) {
    const id = stateFromStores.id;
  }
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = {
      style: tmp.guildCard,
      activeOpacity: 0.5,
      onPress() {
          guildId(outer1_2[12]).transitionToGuild(guildId, { state: { shouldShowSubscribeTooltip: true } });
          const obj = guildId(outer1_2[12]);
          outer1_1(outer1_2[13]).close();
        }
    };
    obj = { guild: stateFromStores };
    const tmp10 = importDefault(8518);
    obj.size = guildId(5513).GuildIconSizes.LARGE;
    obj.style = tmp.guildIcon;
    obj.selected = false;
    const items1 = [callback(importDefault(5513), obj), , ];
    const obj1 = { style: tmp.guildCardDescription };
    const obj2 = { variant: "text-md/bold", children: stateFromStores.name };
    const items2 = [callback(guildId(4126).Text, obj2), ];
    const obj3 = { style: tmp.subscriptionInfo };
    const obj4 = { source: importDefault(9662), style: tmp.premiumGuildImage, resizeMode: "contain", resizeMethod: "resize" };
    const items3 = [callback(closure_4, obj4), ];
    const obj5 = { variant: "text-xs/medium" };
    const intl = guildId(1212).intl;
    const obj6 = { subscriberCount: tmp5 };
    obj5.children = intl.format(guildId(1212).t.If4iTS, obj6);
    items3[1] = callback(guildId(4126).Text, obj5);
    obj3.children = items3;
    items2[1] = callback2(closure_3, obj3);
    obj1.children = items2;
    items1[1] = callback2(closure_3, obj1);
    const obj7 = { guild: stateFromStores, theme: tmp2 };
    items1[2] = callback(importDefault(12490), obj7);
    obj.children = items1;
    tmp6 = callback2(tmp10, obj);
    const tmp12 = importDefault(5513);
  }
  return tmp6;
}
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: 12, paddingLeft: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginBottom: 8, minHeight: 96, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.guildCard = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildIcon = { marginRight: 16 };
_createForOfIteratorHelperLoose.guildCardDescription = { flex: 1 };
_createForOfIteratorHelperLoose.subscriptionInfo = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.premiumGuildImage = { width: 18, height: 12, marginLeft: -5 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("components_native/premium/GuildBoostingGuildList.tsx");

export default function GuildBoostingGuildList(guildCount) {
  guildCount = guildCount.guildCount;
  if (guildCount === undefined) {
    guildCount = closure_7;
  }
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getFlattenedGuildIds());
  obj = { style: guildCount.style };
  const substr = stateFromStores.slice(0, guildCount);
  obj.children = substr.map((guildId) => outer1_8(outer1_11, { guildId }, guildId));
  return callback(closure_3, obj);
};
