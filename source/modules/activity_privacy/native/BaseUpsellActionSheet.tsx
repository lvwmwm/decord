// Module ID: 13756
// Function ID: 105502
// Name: renderSuccessIcon
// Dependencies: [31, 27, 1838, 33, 4091, 689, 4130, 566, 5515, 13754, 1212, 4126, 11651, 11413, 4098, 3831, 5187, 4543, 2]
// Exports: default

// Module 13756 (renderSuccessIcon)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
function renderSuccessIcon() {
  const obj = { size: "sm", color: importDefault(689).colors.STATUS_POSITIVE, secondaryColor: importDefault(689).colors.WHITE };
  return callback(require(4091) /* CircleCheckIcon */.CircleCheckIcon, obj);
}
function StoreGuildIcon(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(guildId));
  obj = { guild: stateFromStores, size: guildId(5515).GuildIconSizes.XSMALL };
  return callback(importDefault(5515), obj);
}
function GuildCard(guildIds) {
  let direction;
  let onPress;
  guildIds = guildIds.guildIds;
  ({ direction, onPress } = guildIds);
  let substr;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [guildIds];
  const memo = React.useMemo(() => guildIds(substr[9]).sortGuildIdsByFrecency(guildIds), items);
  let obj = guildIds(substr[7]);
  const items1 = [closure_6];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_6.getGuild(memo[0]));
  if (direction === guildIds(substr[9]).ChangeDirection.RESTRICTING) {
    const intl2 = guildIds(substr[10]).intl;
    let stringResult = intl2.string(guildIds(substr[10]).t.e6Kpa7);
  } else {
    const intl = guildIds(substr[10]).intl;
    stringResult = intl.string(guildIds(substr[10]).t.cy4G4y);
  }
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  let tmp9 = null != stateFromStores;
  if (tmp9) {
    tmp9 = memo.length > 1;
  }
  substr = memo;
  if (4 !== memo.length) {
    substr = memo.slice(0, 3);
  }
  let obj1 = guildIds(substr[7]);
  const items2 = [closure_6];
  const items3 = [substr];
  obj = { style: tmp.card, onPress };
  obj = { style: tmp.cardInfo };
  const stateFromStoresArray = obj1.useStateFromStoresArray(items2, () => substr.map((guildId) => {
    const guild = outer2_6.getGuild(guildId);
    let name;
    if (null != guild) {
      name = guild.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    return str;
  }), items3);
  obj1 = { variant: "text-md/semibold", color: "text-strong" };
  const intl3 = guildIds(substr[10]).intl;
  obj1.children = intl3.format(guildIds(substr[10]).t["0fkj8J"], { count: guildIds.length });
  const items4 = [callback(guildIds(substr[11]).Text, obj1), ];
  const obj3 = { style: tmp.statusRow };
  const obj4 = { variant: "text-sm/medium" };
  let str2 = "text-muted";
  if (direction === guildIds(substr[9]).ChangeDirection.RESTRICTING) {
    str2 = "text-feedback-positive";
  }
  obj4.color = str2;
  obj4.children = stringResult;
  const items5 = [callback(guildIds(substr[11]).Text, obj4), ];
  const obj5 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.guildSummary };
  const intl4 = guildIds(substr[10]).intl;
  const t = guildIds(substr[10]).t;
  const obj6 = { guildName: str };
  obj5.children = intl4.format(tmp9 ? t["8ZLbvR"] : t["+NoTYm"], obj6);
  items5[1] = callback(guildIds(substr[11]).Text, obj5);
  obj3.children = items5;
  items4[1] = closure_8(closure_5, obj3);
  obj.children = items4;
  const items6 = [closure_8(closure_5, obj), , ];
  const obj7 = { size: guildIds(substr[8]).GuildIconSizes.XSMALL, names: stateFromStoresArray, totalCount: memo.length, children: substr.map((guildId) => outer1_7(outer1_11, { guildId }, guildId)) };
  items6[1] = callback(guildIds(substr[12]).GuildIconPile, obj7);
  let tmp19 = null != onPress;
  if (tmp19) {
    const obj8 = { style: tmp.chevron };
    const obj9 = { color: memo(substr[5]).colors.TEXT_SUBTLE, size: "xs" };
    obj8.children = callback(guildIds(substr[13]).ChevronLargeRightIcon, obj9);
    tmp19 = callback(closure_5, obj8);
  }
  items6[2] = tmp19;
  obj.children = items6;
  return closure_8(null != onPress ? closure_4 : closure_5, obj);
}
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.description = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.card = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, padding: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, padding: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.cardInfo = { flex: 1, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj5 = { flexDirection: "row", alignItems: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, paddingBottom: 2 };
_createForOfIteratorHelperLoose.statusRow = obj5;
_createForOfIteratorHelperLoose.guildSummary = { flexShrink: 1 };
let obj4 = { flex: 1, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.chevron = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj6 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttonsContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj7 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activity_privacy/native/BaseUpsellActionSheet.tsx");

export default function BaseUpsellActionSheet(toastContent) {
  let affectedGuildIds;
  let confirmText;
  let direction;
  let onCardPress;
  let subtitle;
  let title;
  toastContent = toastContent.toastContent;
  const onConfirm = toastContent.onConfirm;
  ({ direction, affectedGuildIds, title, subtitle, confirmText, onCardPress } = toastContent);
  const tmp = _createForOfIteratorHelperLoose();
  const items = [onConfirm, toastContent];
  const callback = React.useCallback(() => {
    onConfirm();
    let obj = onConfirm(outer1_2[14]);
    obj.hideActionSheet();
    obj = { key: "ACTIVITY_PRIVACY_UPSELL_TOAST", content: toastContent, icon: outer1_10 };
    onConfirm(outer1_2[15]).open(obj);
  }, items);
  const callback1 = React.useCallback(() => {
    onConfirm(outer1_2[14]).hideActionSheet();
  }, []);
  let obj = { startExpanded: true };
  obj = { style: tmp.container };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", color: "text-strong", children: title };
  const items1 = [callback(toastContent(4126).Text, obj), , , ];
  const obj1 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: subtitle };
  items1[1] = callback(toastContent(4126).Text, obj1);
  items1[2] = callback(GuildCard, { guildIds: affectedGuildIds, direction, onPress: onCardPress });
  const obj2 = { style: tmp.buttonsContainer };
  const obj3 = { variant: "primary", size: "md", text: confirmText, onPress: callback };
  const items2 = [callback(toastContent(4543).Button, obj3), ];
  const obj4 = { variant: "secondary", size: "md" };
  const intl = toastContent(1212).intl;
  obj4.text = intl.string(toastContent(1212).t.X1rGEm);
  obj4.onPress = callback1;
  items2[1] = callback(toastContent(4543).Button, obj4);
  obj2.children = items2;
  items1[3] = callback2(closure_5, obj2);
  obj.children = items1;
  obj.children = callback2(closure_5, obj);
  return callback(toastContent(5187).BottomSheet, obj);
};
