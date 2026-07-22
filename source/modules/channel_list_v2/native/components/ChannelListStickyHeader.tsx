// Module ID: 14870
// Function ID: 112028
// Name: ChannelListStickyHeader
// Dependencies: []
// Exports: default

// Module 14870 (ChannelListStickyHeader)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
const JoinGuildSources = arg1(dependencyMap[3]).JoinGuildSources;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]).createAnimatedComponent(tmp2.Pressable);
const importDefaultResult = importDefault(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = { chevron: { createStyles: "%FunctionPrototype%", guild_id: "paddingStart" } };
  obj = { gap: importDefault(dependencyMap[7]).space.PX_8, paddingTop: importDefault(dependencyMap[7]).space.PX_16 };
  if (flag) {
    let num = 0;
    if (!arg0) {
      num = importDefault(dependencyMap[7]).space.PX_8;
    }
    let PX_12 = num;
  } else {
    PX_12 = importDefault(dependencyMap[7]).space.PX_12;
  }
  obj.paddingBottom = PX_12;
  if (arg0) {
    obj = {};
  } else {
    obj = { borderBottomColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE, borderBottomWidth: 1 };
  }
  const merged = Object.assign(obj);
  obj["zIndex"] = 1;
  obj.container = obj;
  obj.divider = { height: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE, marginHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
  obj.guildBadge = { margin: 0 };
  obj.flex = { flexShrink: 1 };
  const obj2 = { width: true, marginHorizontal: true, gap: importDefault(dependencyMap[7]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
  obj.header = obj2;
  const obj3 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_8 };
  obj.subheader = obj3;
  const obj4 = { "Null": null, "Null": null };
  const colors = importDefault(dependencyMap[7]).colors;
  obj4.backgroundColor = arg0 ? colors.TEXT_SUBTLE : colors.BACKGROUND_MOD_STRONG;
  obj4.borderRadius = importDefault(dependencyMap[7]).radii.round;
  obj.ellipse = obj4;
  const obj1 = { height: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE, marginHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
  obj.joinButton = { marginHorizontal: importDefault(dependencyMap[7]).space.PX_16, marginVertical: importDefault(dependencyMap[7]).space.PX_4 };
  return obj;
});
const obj2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx");

export default function ChannelListStickyHeader(guild) {
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  guild = guild.guild;
  const arg1 = guild;
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
  const tmp = importDefault(dependencyMap[8])("ChannelListStickyHeader");
  const tmp2 = callback3(tmp, flag);
  const ref = React.useRef(null);
  const items = [guild];
  const callback = React.useCallback(() => {
    callback(closure_2[9])(guild);
  }, items);
  const tmp5 = importDefault(dependencyMap[10])(guild);
  let obj = arg1(dependencyMap[11]);
  const iOSPressEffects = obj.useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  let obj1 = arg1(dependencyMap[12]);
  const favoritesAwareGuildName = obj1.getFavoritesAwareGuildName(guild);
  let obj2 = arg1(dependencyMap[13]);
  const token = obj2.useToken(importDefault(dependencyMap[7]).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  let obj3 = arg1(dependencyMap[13]);
  const token1 = obj3.useToken(importDefault(dependencyMap[7]).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  let obj4 = arg1(dependencyMap[14]);
  const items1 = [closure_5];
  const stateFromStores = obj4.useStateFromStores(items1, () => lurking.isLurking(guild.id));
  let obj5 = arg1(dependencyMap[15]);
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
    const intl = arg1(dependencyMap[16]).intl;
    stringResult = intl.string(arg1(dependencyMap[16]).t.Gpyp/e);
  }
  obj.accessibilityHint = stringResult;
  obj1 = { style: tmp2.header };
  obj2 = { ref, collapsable: false, style: tmp2.flex, children: callback(arg1(dependencyMap[17]).Text, { variant: token, children: favoritesAwareGuildName }) };
  const items2 = [callback(View, obj2), , ];
  obj3 = { guild, size: arg1(dependencyMap[19]).Icon.Sizes.REFRESH_SMALL_16, style: tmp2.guildBadge };
  items2[1] = callback(importDefault(dependencyMap[18]), obj3);
  let tmp23 = null;
  if (flag2) {
    obj4 = { size: "xxs", color: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE, style: tmp2.chevron };
    tmp23 = callback(arg1(dependencyMap[20]).ChevronSmallRightIcon, obj4);
  }
  items2[2] = tmp23;
  obj1.children = items2;
  const items3 = [callback2(View, obj1), ];
  let tmp28 = null;
  if (null != tmp5) {
    tmp28 = null;
    if (tmp5 > 0) {
      obj5 = { style: tmp2.subheader };
      const obj6 = { fetchJoinRequestForInterview: "M44.2994 29.7789H30.1249C29.6356 29.7789 29.239 30.18 29.239 30.6745C29.239 31.1692 29.6356 31.5701 30.1249 31.5701H44.2994C44.7885 31.5701 45.1853 31.1692 45.1853 30.6745C45.1853 30.18 44.7885 29.7789 44.2994 29.7789Z", warningRow: "white", RCTOverKeyboardView: "white", sessionData: "0.723776", variant: token1 };
      const intl2 = arg1(dependencyMap[16]).intl;
      const obj7 = { count: tmp5 };
      obj6.children = intl2.format(arg1(dependencyMap[16]).t.zRl6XR, obj7);
      const items4 = [callback(arg1(dependencyMap[17]).Text, obj6), , ];
      const obj8 = { style: tmp2.ellipse };
      items4[1] = callback(View, obj8);
      const obj9 = { fetchJoinRequestForInterview: "M44.2994 29.7789H30.1249C29.6356 29.7789 29.239 30.18 29.239 30.6745C29.239 31.1692 29.6356 31.5701 30.1249 31.5701H44.2994C44.7885 31.5701 45.1853 31.1692 45.1853 30.6745C45.1853 30.18 44.7885 29.7789 44.2994 29.7789Z", warningRow: "white", RCTOverKeyboardView: "white", sessionData: "0.723776", variant: token1 };
      const intl3 = arg1(dependencyMap[16]).intl;
      obj9.children = intl3.string(arg1(dependencyMap[16]).t.1g9A/f);
      items4[2] = callback(arg1(dependencyMap[17]).Text, obj9);
      obj5.children = items4;
      tmp28 = callback2(View, obj5);
    }
  }
  items3[1] = tmp28;
  obj.children = items3;
  const items5 = [callback2(closure_9, obj), , , , ];
  let tmp34 = null;
  if (flag) {
    tmp34 = null;
    if (!enabled) {
      const obj10 = { isMobileOnline: null, isVROnline: null, streaming: null, guild };
      tmp34 = callback(importDefault(dependencyMap[21]), obj10);
    }
  }
  items5[1] = tmp34;
  if (enabled) {
    const obj11 = { style: tmp2.joinButton };
    const obj12 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
    obj11.children = callback(importDefault(dependencyMap[22]), obj12);
    enabled = callback(View, obj11);
  }
  items5[2] = enabled;
  let tmp43 = null;
  if (tmp) {
    const obj13 = { style: tmp2.divider };
    tmp43 = callback(View, obj13);
  }
  items5[3] = tmp43;
  let tmp46 = null;
  if (flag3) {
    const obj14 = { targetRef: ref, guild };
    tmp46 = callback(importDefault(dependencyMap[23]), obj14);
  }
  items5[4] = tmp46;
  obj.children = items5;
  return callback2(View, obj);
};
