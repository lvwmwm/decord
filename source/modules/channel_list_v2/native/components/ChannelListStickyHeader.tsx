// Module ID: 14986
// Function ID: 114196
// Name: ChannelListStickyHeader
// Dependencies: [31, 27, 3759, 653, 33, 3991, 4130, 689, 1324, 12914, 14985, 5169, 5077, 3834, 566, 5698, 1212, 4126, 5701, 1273, 5514, 11396, 11471, 14987, 2]
// Exports: default

// Module 14986 (ChannelListStickyHeader)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { JoinGuildSources } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_7;
let closure_8;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = require("module_3991").createAnimatedComponent(get_ActivityIndicator.Pressable);
let closure_10 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = { chevron: { flexShrink: 0, flexGrow: 0 } };
  obj = { gap: importDefault(689).space.PX_8, paddingTop: importDefault(689).space.PX_16 };
  if (flag) {
    let num = 0;
    if (!arg0) {
      num = importDefault(689).space.PX_8;
    }
    let PX_12 = num;
  } else {
    PX_12 = importDefault(689).space.PX_12;
  }
  obj.paddingBottom = PX_12;
  if (arg0) {
    obj = {};
  } else {
    obj = { borderBottomColor: importDefault(689).colors.BORDER_SUBTLE, borderBottomWidth: 1 };
  }
  const merged = Object.assign(obj);
  obj["zIndex"] = 1;
  obj.container = obj;
  obj.divider = { height: 1, backgroundColor: importDefault(689).colors.BORDER_SUBTLE, marginHorizontal: importDefault(689).space.PX_16 };
  obj.guildBadge = { margin: 0 };
  obj.flex = { flexShrink: 1 };
  const obj2 = { alignItems: "center", flexDirection: "row", gap: importDefault(689).space.PX_4, paddingHorizontal: importDefault(689).space.PX_16 };
  obj.header = obj2;
  const obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: importDefault(689).space.PX_16, gap: importDefault(689).space.PX_8 };
  obj.subheader = obj3;
  const obj4 = { width: 4, height: 4 };
  const colors = importDefault(689).colors;
  obj4.backgroundColor = arg0 ? colors.TEXT_SUBTLE : colors.BACKGROUND_MOD_STRONG;
  obj4.borderRadius = importDefault(689).radii.round;
  obj.ellipse = obj4;
  const obj1 = { height: 1, backgroundColor: importDefault(689).colors.BORDER_SUBTLE, marginHorizontal: importDefault(689).space.PX_16 };
  obj.joinButton = { marginHorizontal: importDefault(689).space.PX_16, marginVertical: importDefault(689).space.PX_4 };
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx");

export default function ChannelListStickyHeader(guild) {
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  guild = guild.guild;
  let flag = guild.showExtraButtons;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = guild.canOpenGuildActionSheet;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = guild.showCoachmarks;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const tmp = importDefault(1324)("ChannelListStickyHeader");
  const tmp2 = callback3(tmp, flag);
  const ref = React.useRef(null);
  const items = [guild];
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[9])(guild);
  }, items);
  const tmp5 = importDefault(14985)(guild);
  let obj = guild(5169);
  const iOSPressEffects = obj.useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  let obj1 = guild(5077);
  const favoritesAwareGuildName = obj1.getFavoritesAwareGuildName(guild);
  let obj2 = guild(3834);
  const token = obj2.useToken(importDefault(689).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  let obj3 = guild(3834);
  const token1 = obj3.useToken(importDefault(689).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  let obj4 = guild(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = obj4.useStateFromStores(items1, () => outer1_5.isLurking(guild.id));
  let obj5 = guild(5698);
  let enabled = stateFromStores;
  if (stateFromStores) {
    enabled = obj5.useMobileLurkerServerPreview("ChannelListStickyHeader").enabled;
  }
  obj = { style: tmp2.container };
  obj = { style: pressableStyles };
  let tmp14;
  if (flag2) {
    tmp14 = callback;
  }
  obj.onPress = tmp14;
  let tmp15;
  if (flag2) {
    tmp15 = onPressIn;
  }
  obj.onPressIn = tmp15;
  let tmp16;
  if (flag2) {
    tmp16 = onPressOut;
  }
  obj.onPressOut = tmp16;
  obj.accessible = true;
  let str = "header";
  if (flag2) {
    str = "button";
  }
  obj.accessibilityRole = str;
  let stringResult;
  if (flag2) {
    const intl = guild(1212).intl;
    stringResult = intl.string(guild(1212).t["Gpyp/e"]);
  }
  obj.accessibilityHint = stringResult;
  obj1 = { style: tmp2.header };
  obj2 = { ref, collapsable: false, style: tmp2.flex, children: callback(guild(4126).Text, obj3) };
  obj3 = { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName };
  const items2 = [callback(View, obj2), , ];
  obj4 = { guild, size: guild(1273).Icon.Sizes.REFRESH_SMALL_16, style: tmp2.guildBadge };
  items2[1] = callback(importDefault(5701), obj4);
  let tmp23 = null;
  if (flag2) {
    obj5 = { size: "xxs", color: importDefault(689).colors.TEXT_SUBTLE, style: tmp2.chevron };
    tmp23 = callback(guild(5514).ChevronSmallRightIcon, obj5);
  }
  items2[2] = tmp23;
  obj1.children = items2;
  const items3 = [callback2(View, obj1), ];
  let tmp28 = null;
  if (null != tmp5) {
    tmp28 = null;
    if (tmp5 > 0) {
      const obj6 = { style: tmp2.subheader };
      const obj7 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1 };
      const intl2 = guild(1212).intl;
      const obj8 = { count: tmp5 };
      obj7.children = intl2.format(guild(1212).t.zRl6XR, obj8);
      const items4 = [callback(guild(4126).Text, obj7), , ];
      const obj9 = { style: tmp2.ellipse };
      items4[1] = callback(View, obj9);
      const obj10 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1 };
      const intl3 = guild(1212).intl;
      obj10.children = intl3.string(guild(1212).t["1g9A/f"]);
      items4[2] = callback(guild(4126).Text, obj10);
      obj6.children = items4;
      tmp28 = callback2(View, obj6);
    }
  }
  items3[1] = tmp28;
  obj.children = items3;
  const items5 = [callback2(closure_9, obj), , , , ];
  let tmp34 = null;
  if (flag) {
    tmp34 = null;
    if (!enabled) {
      const obj11 = { guild, useButtonComponent: true, useEventsButton: true };
      tmp34 = callback(importDefault(11396), obj11);
    }
  }
  items5[1] = tmp34;
  if (enabled) {
    const obj12 = { style: tmp2.joinButton };
    const obj13 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
    obj12.children = callback(importDefault(11471), obj13);
    enabled = callback(View, obj12);
  }
  items5[2] = enabled;
  let tmp43 = null;
  if (tmp) {
    const obj14 = { style: tmp2.divider };
    tmp43 = callback(View, obj14);
  }
  items5[3] = tmp43;
  let tmp46 = null;
  if (flag3) {
    const obj15 = { targetRef: ref, guild };
    tmp46 = callback(importDefault(14987), obj15);
  }
  items5[4] = tmp46;
  obj.children = items5;
  return callback2(View, obj);
};
