// Module ID: 13626
// Function ID: 103268
// Name: renderSuccessIcon
// Dependencies: []
// Exports: default

// Module 13626 (renderSuccessIcon)
function renderSuccessIcon() {
  const obj = { size: "sm", color: importDefault(dependencyMap[5]).colors.STATUS_POSITIVE, secondaryColor: importDefault(dependencyMap[5]).colors.WHITE };
  return callback(arg1(dependencyMap[4]).CircleCheckIcon, obj);
}
function StoreGuildIcon(guildId) {
  const arg1 = guildId.guildId;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  obj = { guild: stateFromStores, size: arg1(dependencyMap[8]).GuildIconSizes.XSMALL };
  return callback(importDefault(dependencyMap[8]), obj);
}
function GuildCard(guildIds) {
  let direction;
  let onPress;
  guildIds = guildIds.guildIds;
  const arg1 = guildIds;
  ({ direction, onPress } = guildIds);
  let dependencyMap;
  const tmp = callback3();
  const items = [guildIds];
  const memo = React.useMemo(() => guildIds(substr[9]).sortGuildIdsByFrecency(guildIds), items);
  const importDefault = memo;
  let obj = arg1(dependencyMap[7]);
  const items1 = [closure_6];
  const stateFromStores = obj.useStateFromStores(items1, () => guild.getGuild(memo[0]));
  if (direction === arg1(dependencyMap[9]).ChangeDirection.RESTRICTING) {
    const intl2 = arg1(dependencyMap[10]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[10]).t.e6Kpa7);
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    stringResult = intl.string(arg1(dependencyMap[10]).t.cy4G4y);
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
  let substr = memo;
  if (4 !== memo.length) {
    substr = memo.slice(0, 3);
  }
  dependencyMap = substr;
  let obj1 = arg1(dependencyMap[7]);
  const items2 = [closure_6];
  const items3 = [substr];
  obj = { style: tmp.card, onPress };
  obj = { style: tmp.cardInfo };
  const stateFromStoresArray = obj1.useStateFromStoresArray(items2, () => substr.map((guildId) => {
    const guild = guild.getGuild(guildId);
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
  obj1 = {};
  const intl3 = arg1(dependencyMap[10]).intl;
  obj1.children = intl3.format(arg1(dependencyMap[10]).t.0fkj8J, { count: guildIds.length });
  const items4 = [callback(arg1(dependencyMap[11]).Text, obj1), ];
  const obj3 = { style: tmp.statusRow };
  const obj4 = { variant: "text-sm/medium" };
  let str2 = "text-muted";
  if (direction === arg1(dependencyMap[9]).ChangeDirection.RESTRICTING) {
    str2 = "text-feedback-positive";
  }
  obj4.color = str2;
  obj4.children = stringResult;
  const items5 = [callback(arg1(dependencyMap[11]).Text, obj4), ];
  const obj5 = { style: tmp.guildSummary };
  const intl4 = arg1(dependencyMap[10]).intl;
  const t = arg1(dependencyMap[10]).t;
  const obj6 = { guildName: str };
  obj5.children = intl4.format(tmp9 ? t.8ZLbvR : t.+NoTYm, obj6);
  items5[1] = callback(arg1(dependencyMap[11]).Text, obj5);
  obj3.children = items5;
  items4[1] = closure_8(closure_5, obj3);
  obj.children = items4;
  const items6 = [closure_8(closure_5, obj), , ];
  const obj7 = { size: arg1(dependencyMap[8]).GuildIconSizes.XSMALL, names: stateFromStoresArray, totalCount: memo.length, children: substr.map((guildId) => callback(closure_11, { guildId }, guildId)) };
  items6[1] = callback(arg1(dependencyMap[12]).GuildIconPile, obj7);
  let tmp19 = null != onPress;
  if (tmp19) {
    const obj8 = { style: tmp.chevron };
    const obj9 = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE, size: "xs" };
    obj8.children = callback(arg1(dependencyMap[13]).ChevronLargeRightIcon, obj9);
    tmp19 = callback(closure_5, obj8);
  }
  items6[2] = tmp19;
  obj.children = items6;
  return closure_8(null != onPress ? closure_4 : closure_5, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { paddingVertical: importDefault(dependencyMap[5]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_24 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.title = { marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
const obj1 = { marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
obj.description = { marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
const obj2 = { marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
obj.card = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.md, padding: importDefault(dependencyMap[5]).space.PX_16, marginBottom: importDefault(dependencyMap[5]).space.PX_24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj3 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.md, padding: importDefault(dependencyMap[5]).space.PX_16, marginBottom: importDefault(dependencyMap[5]).space.PX_24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.cardInfo = { flex: 1, marginRight: importDefault(dependencyMap[5]).space.PX_12 };
const obj4 = { flex: 1, marginRight: importDefault(dependencyMap[5]).space.PX_12 };
obj.statusRow = { marginTop: importDefault(dependencyMap[5]).space.PX_4 };
obj.guildSummary = { flexShrink: 1 };
const obj5 = { marginTop: importDefault(dependencyMap[5]).space.PX_4 };
obj.chevron = { marginLeft: importDefault(dependencyMap[5]).space.PX_8 };
const obj6 = { marginLeft: importDefault(dependencyMap[5]).space.PX_8 };
obj.buttonsContainer = { gap: importDefault(dependencyMap[5]).space.PX_8 };
let closure_9 = obj.createStyles(obj);
const obj7 = { gap: importDefault(dependencyMap[5]).space.PX_8 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/activity_privacy/native/BaseUpsellActionSheet.tsx");

export default function BaseUpsellActionSheet(toastContent) {
  let affectedGuildIds;
  let confirmText;
  let direction;
  let onCardPress;
  let subtitle;
  let title;
  toastContent = toastContent.toastContent;
  const arg1 = toastContent;
  const onConfirm = toastContent.onConfirm;
  const importDefault = onConfirm;
  ({ direction, affectedGuildIds, title, subtitle, confirmText, onCardPress } = toastContent);
  const tmp = callback3();
  const items = [onConfirm, toastContent];
  const callback = React.useCallback(() => {
    onConfirm();
    let obj = onConfirm(closure_2[14]);
    obj.hideActionSheet();
    obj = { key: "ACTIVITY_PRIVACY_UPSELL_TOAST", content: toastContent, icon: closure_10 };
    onConfirm(closure_2[15]).open(obj);
  }, items);
  const callback1 = React.useCallback(() => {
    onConfirm(closure_2[14]).hideActionSheet();
  }, []);
  let obj = { startExpanded: true };
  obj = { style: tmp.container };
  obj = { 0: "flex", 9223372036854775807: "row", 0: 1, -9223372036854775808: "center", style: tmp.title, children: title };
  const items1 = [callback(arg1(dependencyMap[11]).Text, obj), callback(arg1(dependencyMap[11]).Text, { style: tmp.description, children: subtitle }), callback(GuildCard, { guildIds: affectedGuildIds, direction, onPress: onCardPress }), ];
  const obj2 = { style: tmp.buttonsContainer };
  const items2 = [callback(arg1(dependencyMap[17]).Button, { text: confirmText, onPress: callback }), ];
  const obj3 = { <string:1522289750>: "r", <string:570601313>: "isArray" };
  const intl = arg1(dependencyMap[10]).intl;
  obj3.text = intl.string(arg1(dependencyMap[10]).t.X1rGEm);
  obj3.onPress = callback1;
  items2[1] = callback(arg1(dependencyMap[17]).Button, obj3);
  obj2.children = items2;
  items1[3] = callback2(closure_5, obj2);
  obj.children = items1;
  obj.children = callback2(closure_5, obj);
  return callback(arg1(dependencyMap[16]).BottomSheet, obj);
};
