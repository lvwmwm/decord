// Module ID: 15087
// Function ID: 114821
// Name: ChannelListStickyHeader
// Dependencies: [31, 27, 3794, 653, 33, 4026, 4165, 689, 1324, 1841, 1212, 15088, 13022, 15086, 5203, 3869, 566, 6670, 9395, 4161, 8440, 1273, 5547, 15091, 11426, 11503, 15096, 2]
// Exports: default

// Module 15087 (ChannelListStickyHeader)
import result from "result";
import get_ActivityIndicator from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { JoinGuildSources } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_4026";

let closure_7;
let closure_8;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = require("module_4026").createAnimatedComponent(get_ActivityIndicator.Pressable);
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
  const obj3 = { alignItems: "center", flexDirection: "row", gap: importDefault(689).space.PX_8 };
  obj.headerRow = obj3;
  obj.headerRowTitle = { flexGrow: 1, flexShrink: 1 };
  const obj1 = { height: 1, backgroundColor: importDefault(689).colors.BORDER_SUBTLE, marginHorizontal: importDefault(689).space.PX_16 };
  obj.headerRowInset = { paddingEnd: importDefault(689).space.PX_16 };
  const obj4 = { paddingEnd: importDefault(689).space.PX_16 };
  obj.headerIcon = { marginRight: importDefault(689).space.PX_4 };
  const obj6 = { flexDirection: "row", alignItems: "center", paddingHorizontal: importDefault(689).space.PX_16, gap: importDefault(689).space.PX_8 };
  obj.subheader = obj6;
  const obj7 = { width: 4, height: 4 };
  const colors = importDefault(689).colors;
  obj7.backgroundColor = arg0 ? colors.TEXT_SUBTLE : colors.BACKGROUND_MOD_STRONG;
  obj7.borderRadius = importDefault(689).radii.round;
  obj.ellipse = obj7;
  const obj5 = { marginRight: importDefault(689).space.PX_4 };
  obj.joinButton = { marginHorizontal: importDefault(689).space.PX_16, marginVertical: importDefault(689).space.PX_4 };
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx");

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
  let importDefault;
  const tmp = importDefault(1324)("ChannelListStickyHeader");
  const tmp2 = callback3(tmp, flag);
  const ref = React.useRef(null);
  let obj = guild(1841);
  const isFavoritesGuildIdResult = obj.isFavoritesGuildId(guild.id);
  importDefault = isFavoritesGuildIdResult;
  if (!flag2) {
    flag2 = isFavoritesGuildIdResult;
  }
  const t = guild(1212).t;
  const items = [guild, isFavoritesGuildIdResult];
  const callback = React.useCallback(() => {
    if (_undefined) {
      const result = guild(outer1_2[11]).openFavoritesGuildActionSheet();
      const obj = guild(outer1_2[11]);
    } else {
      _undefined(outer1_2[12])(guild);
    }
  }, items);
  const tmp7 = importDefault(15086)(guild);
  let obj1 = guild(5203);
  const iOSPressEffects = obj1.useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  let obj2 = guild(1841);
  const favoritesAwareGuildName = obj2.getFavoritesAwareGuildName(guild);
  let obj3 = guild(3869);
  const token = obj3.useToken(importDefault(689).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  let obj4 = guild(3869);
  const token1 = obj4.useToken(importDefault(689).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  let obj5 = guild(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = obj5.useStateFromStores(items1, () => outer1_5.isLurking(guild.id));
  let obj6 = guild(6670);
  let enabled = stateFromStores;
  if (stateFromStores) {
    enabled = obj6.useMobileLurkerServerPreview("ChannelListStickyHeader").enabled;
  }
  obj = { style: items2 };
  items2 = [pressableStyles, tmp2.headerRowTitle];
  let tmp15;
  if (flag2) {
    tmp15 = callback;
  }
  obj.onPress = tmp15;
  let tmp16;
  if (flag2) {
    tmp16 = onPressIn;
  }
  obj.onPressIn = tmp16;
  let tmp17;
  if (flag2) {
    tmp17 = onPressOut;
  }
  obj.onPressOut = tmp17;
  obj.accessible = true;
  let str = "header";
  if (flag2) {
    str = "button";
  }
  obj.accessibilityRole = str;
  let stringResult;
  if (flag2) {
    const intl = guild(1212).intl;
    stringResult = intl.string(tmp5);
  }
  obj.accessibilityHint = stringResult;
  obj = { style: tmp2.header };
  let tmp23 = null;
  if (isFavoritesGuildIdResult) {
    obj1 = { style: tmp2.headerIcon, size: "sm", color: importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY };
    tmp23 = callback(guild(9395).StarIcon, obj1);
  }
  const items3 = [tmp23, , , ];
  obj2 = { ref, collapsable: false, style: tmp2.flex, children: callback(guild(4161).Text, obj3) };
  obj3 = { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName };
  items3[1] = callback(View, obj2);
  obj4 = { guild, size: guild(1273).Icon.Sizes.REFRESH_SMALL_16, style: tmp2.guildBadge };
  items3[2] = callback(importDefault(8440), obj4);
  let tmp29 = null;
  if (flag2) {
    obj5 = { size: "xxs", color: importDefault(689).colors.TEXT_SUBTLE, style: tmp2.chevron };
    tmp29 = callback(guild(5547).ChevronSmallRightIcon, obj5);
  }
  items3[3] = tmp29;
  obj.children = items3;
  const items4 = [callback2(View, obj), ];
  let tmp34 = null;
  if (null != tmp7) {
    tmp34 = null;
    if (tmp7 > 0) {
      obj6 = { style: tmp2.subheader };
      const obj7 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1 };
      const intl2 = guild(1212).intl;
      const obj8 = { count: tmp7 };
      obj7.children = intl2.format(guild(1212).t.zRl6XR, obj8);
      const items5 = [callback(guild(4161).Text, obj7), , ];
      const obj9 = { style: tmp2.ellipse };
      items5[1] = callback(View, obj9);
      const obj10 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1 };
      const intl3 = guild(1212).intl;
      obj10.children = intl3.string(guild(1212).t["1g9A/f"]);
      items5[2] = callback(guild(4161).Text, obj10);
      obj6.children = items5;
      tmp34 = callback2(View, obj6);
    }
  }
  items4[1] = tmp34;
  obj.children = items4;
  const obj11 = { style: tmp2.container };
  const obj12 = {};
  const items6 = [tmp2.headerRow, ];
  let headerRowInset = null;
  const tmp13 = callback2;
  const tmp14 = closure_9;
  const tmp21 = callback2;
  const tmp22 = View;
  const tmp28 = importDefault(8440);
  tmp5 = isFavoritesGuildIdResult ? t.hW8QDk : t["Gpyp/e"];
  if (isFavoritesGuildIdResult) {
    headerRowInset = tmp2.headerRowInset;
  }
  items6[1] = headerRowInset;
  obj12.style = items6;
  const items7 = [callback2(closure_9, obj), ];
  let tmp44 = null;
  if (isFavoritesGuildIdResult) {
    tmp44 = callback(guild(15091).FavoritesGuildHeaderActionButton, {});
  }
  items7[1] = tmp44;
  obj12.children = items7;
  const items8 = [callback2(View, obj12), , , , ];
  let tmp48 = null;
  if (flag) {
    tmp48 = null;
    if (!enabled) {
      const obj13 = { guild, useButtonComponent: true, useEventsButton: true };
      tmp48 = callback(importDefault(11426), obj13);
    }
  }
  items8[1] = tmp48;
  if (enabled) {
    const obj14 = { style: tmp2.joinButton };
    const obj15 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
    obj14.children = callback(importDefault(11503), obj15);
    enabled = callback(View, obj14);
  }
  items8[2] = enabled;
  let tmp57 = null;
  if (tmp) {
    const obj16 = { style: tmp2.divider };
    tmp57 = callback(View, obj16);
  }
  items8[3] = tmp57;
  let tmp60 = null;
  if (flag3) {
    const obj17 = { targetRef: ref, guild };
    tmp60 = callback(importDefault(15096), obj17);
  }
  items8[4] = tmp60;
  obj11.children = items8;
  return callback2(View, obj11);
};
