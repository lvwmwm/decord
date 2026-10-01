// Module ID: 14389
// Function ID: 14390
// Name: BaseUpsellActionSheet
// Dependencies: [19, 17, 2067, 21, 4792, 576, 4836, 504, 5896, 14387, 1115, 4832, 12115, 11855, 4800, 4528, 6571, 5281, 2]
// Exports: default

// Module 14389 (BaseUpsellActionSheet)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import CircleCheckIcon2 from "CircleCheckIcon" /* 4792 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 14387 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, guild;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function renderSuccessIcon() {
  const obj = { size: "sm", color: nativeDefault.colors.STATUS_POSITIVE, secondaryColor: nativeDefault.colors.WHITE };
  const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
  return metroImportDefault(CircleCheckIcon, obj);
}
function StoreGuildIcon(guildId) {
  guildId = guildId.guildId;
  const items = [GuildStore];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj2 = { guild: stateFromStores, size: guildId(5896).GuildIconSizes.XSMALL };
  const tmp2 = GuildIconDefault;
  return closure_7(tmp2, obj2);
}
function GuildCard(guildIds) {
  let ChevronLargeRightIcon;
  let direction;
  let format;
  let intl3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj5;
  let onPress;
  let stringResult;
  let t;
  guildIds = guildIds.guildIds;
  ({ direction, onPress } = guildIds);
  let substr;
  const tmp = closure_10();
  const items = [guildIds];
  const memo = react.useMemo(() => {
    const obj = ActivityPrivacyUpsellUtils;
    return obj.sortGuildIdsByFrecency(guildIds);
  }, items);
  let obj = guildIds(substr[7]);
  const items1 = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items1, () => GuildStore.getGuild(memo[0]));
  const tmp4 = GuildStore;
  if (direction === guildIds(substr[9]).ChangeDirection.RESTRICTING) {
    const intl2 = tmp2(tmp3[10]).intl;
    stringResult = intl2.string(tmp2(tmp3[10]).t.e6Kpa7);
  } else {
    const intl = tmp2(tmp3[10]).intl;
    stringResult = intl.string(tmp2(tmp3[10]).t.cy4G4y);
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  substr = memo;
  const tmp7 = null != stateFromStores && memo.length > 1;
  if (4 !== memo.length) {
    substr = memo.slice(0, 3);
  }
  const items2 = [tmp4];
  const items3 = [substr];
  const obj2 = { style: tmp.card, onPress, children: items6 };
  const obj3 = { style: tmp.cardInfo, children: items4 };
  const tmp2Result = guildIds(substr[7]);
  const stateFromStoresArray = tmp2Result.useStateFromStoresArray(items2, () => substr.map((item) => {
    guild = guild.getGuild(item);
    let str;
    if (guild != null) {
      str = guild.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  }), items3);
  const obj4 = { variant: "text-md/semibold", color: "text-strong", children: intl3.format(guildIds(substr[10]).t["0fkj8J"], obj5) };
  const tmp10 = null != onPress ? closure_4 : closure_5;
  const Text = tmp2(tmp3[11]).Text;
  intl3 = tmp2(tmp3[10]).intl;
  obj5 = { count: guildIds.length };
  items4 = [closure_7(Text, obj4), ];
  const obj6 = { style: tmp.statusRow, children: items5 };
  const Text2 = tmp2(tmp3[11]).Text;
  let str2 = "text-muted";
  if (direction === guildIds(substr[9]).ChangeDirection.RESTRICTING) {
    str2 = "text-feedback-positive";
  }
  items5 = [closure_7(Text2, { variant: "text-sm/medium", color: str2, children: stringResult }), ];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.guildSummary, children: format(tmp7 ? t["8ZLbvR"] : t["+NoTYm"], { guildName: str }) };
  const Text3 = tmp2(tmp3[11]).Text;
  const intl4 = tmp2(tmp3[10]).intl;
  format = intl4.format;
  t = tmp2(tmp3[10]).t;
  items5[1] = closure_7(Text3, obj7);
  items4[1] = closure_8(closure_5, obj6);
  items6 = [closure_8(closure_5, obj3), , ];
  const obj8 = {
    size: guildIds(substr[8]).GuildIconSizes.XSMALL,
    names: stateFromStoresArray,
    totalCount: memo.length,
    children: substr.map((guildId) => {
      const obj = { guildId };
      return closure_1_7(StoreGuildIcon, obj, guildId);
    })
  };
  const GuildIconPile = tmp2(tmp3[12]).GuildIconPile;
  items6[1] = closure_7(GuildIconPile, obj8);
  let tmp12Result = null != onPress;
  if (tmp12Result) {
    const obj9 = { style: tmp.chevron, children: closure_7(ChevronLargeRightIcon, obj10) };
    obj10 = { color: memo(substr[5]).colors.TEXT_SUBTLE, size: "xs" };
    ChevronLargeRightIcon = tmp2(tmp3[13]).ChevronLargeRightIcon;
    tmp12Result = tmp12(tmp11, obj9);
  }
  items6[2] = tmp12Result;
  return closure_8(tmp10, obj2);
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, description: obj4, card: obj5, cardInfo: obj6, statusRow: obj7, guildSummary: { flexShrink: 1 }, chevron: obj8, buttonsContainer: obj9 };
obj2 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_24 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj6 = { flex: 1, marginRight: nativeDefault.space.PX_12 };
obj7 = { flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_4, paddingBottom: 2 };
obj8 = { marginLeft: nativeDefault.space.PX_8 };
obj9 = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/activity_privacy/native/BaseUpsellActionSheet.tsx");

export default function BaseUpsellActionSheet(toastContent) {
  let affectedGuildIds;
  let confirmText;
  let direction;
  let intl;
  let items1;
  let items2;
  let obj2;
  let onCardPress;
  let subtitle;
  let title;
  toastContent = toastContent.toastContent;
  const onConfirm = toastContent.onConfirm;
  ({ direction, affectedGuildIds, title, subtitle, confirmText, onCardPress } = toastContent);
  const tmp = closure_10();
  const items = [onConfirm, toastContent];
  const callback = react.useCallback(() => {
    onConfirm();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ToastActionCreatorsDefault;
    const obj3 = { key: "ACTIVITY_PRIVACY_UPSELL_TOAST", content: toastContent, icon: renderSuccessIcon };
    obj2.open(obj3);
  }, items);
  const callback1 = react.useCallback(() => {
    const obj = onConfirm(dependencyMap[14]);
    obj.hideActionSheet();
  }, []);
  let obj = { startExpanded: true, children: closure_8(closure_5, obj2) };
  obj2 = { style: tmp.container, children: items1 };
  BottomSheet = toastContent(6571).BottomSheet;
  let obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", color: "text-strong", children: title };
  items1 = [closure_7(toastContent(4832).Text, obj3), , , ];
  const obj4 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: subtitle };
  items1[1] = closure_7(toastContent(4832).Text, obj4);
  items1[2] = closure_7(GuildCard, { guildIds: affectedGuildIds, direction, onPress: onCardPress });
  const obj5 = { style: tmp.buttonsContainer, children: items2 };
  items2 = [closure_7(toastContent(5281).Button, { variant: "primary", size: "md", text: confirmText, onPress: callback }), ];
  const obj6 = { variant: "secondary", size: "md", text: intl.string(toastContent(1115).t.X1rGEm), onPress: callback1 };
  const Button = toastContent(5281).Button;
  intl = toastContent(1115).intl;
  items2[1] = closure_7(Button, obj6);
  items1[3] = closure_8(closure_5, obj5);
  return closure_7(BottomSheet, obj);
};
