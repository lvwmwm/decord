// Module ID: 11500
// Function ID: 89587
// Dependencies: [31, 27, 1838, 11132, 653, 33, 4130, 689, 566, 4098, 8621, 1934, 4324, 4660, 5513, 4126, 5701, 1273, 5512, 1212, 11501, 2]

// Module 11500
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import { TextAreaCta } from "TextAreaCta";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_7, JoinGuildSources: closure_8 } = ME);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_12, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 1 };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_HIGH);
obj.cardContainer = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.headerRow = _createForOfIteratorHelperLoose;
obj.guildIcon = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.textColumn = { flex: 1, flexShrink: 1, minWidth: 0 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.nameRow = obj3;
obj.chevron = { marginLeft: -2 };
obj.badge = { flexShrink: 0 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
const memoResult = importAllResult.memo(function ChatInputGuardLurkingPreviewBar(guildId) {
  guildId = guildId.guildId;
  const tmp = callback3();
  let obj = guildId(566);
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(guildId), items1);
  const items2 = [guildId];
  const callback = importAllResult.useCallback(() => {
    let obj = outer1_1(outer1_2[9]);
    obj = { guildId };
    obj.openLazy(guildId(outer1_2[11])(outer1_2[10], outer1_2.paths), "GuildProfileActionSheet:" + guildId, obj);
  }, items2);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { style: tmp.cardContainer };
    obj = { style: tmp.headerRow, onPress: callback, accessibilityRole: "button", accessibilityLabel: stateFromStores.name };
    const obj1 = { guild: stateFromStores, size: guildId(5513).GuildIconSizes.LARGE, style: tmp.guildIcon };
    const items3 = [callback(importDefault(5513), obj1), ];
    const obj2 = { style: tmp.textColumn };
    const obj3 = { style: tmp.nameRow };
    const obj4 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: stateFromStores.name };
    const items4 = [callback(guildId(4126).Text, obj4), , ];
    const obj5 = {};
    const tmp12 = importDefault(5513);
    obj5.size = guildId(1273).Icon.Sizes.SMALL;
    obj5.guild = stateFromStores;
    obj5.style = tmp.badge;
    items4[1] = callback(importDefault(5701), obj5);
    const obj6 = { size: "xs", color: importDefault(689).colors.TEXT_MUTED, style: tmp.chevron };
    items4[2] = callback(guildId(5512).ChevronSmallRightIcon, obj6);
    obj3.children = items4;
    const items5 = [callback2(View, obj3), ];
    const obj7 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 1 };
    const intl = guildId(1212).intl;
    obj7.children = intl.string(guildId(1212).t.BRSnEj);
    items5[1] = callback(guildId(4126).Text, obj7);
    obj2.children = items5;
    items3[1] = callback2(View, obj2);
    obj.children = items3;
    const items6 = [callback2(guildId(4660).PressableOpacity, obj), ];
    const obj8 = { guildId, joinSource: constants.CHAT_INPUT_BLOCKER, onBeforeJoin: tmp4 };
    items6[1] = callback(importDefault(11501), obj8);
    obj.children = items6;
    tmp5 = callback2(View, obj);
    const tmp13 = importDefault(5701);
  }
  return tmp5;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurkingPreviewBar.tsx");

export default memoResult;
