// Module ID: 15767
// Function ID: 15768
// Name: ChannelListStickyHeader
// Dependencies: [19, 17, 1074, 21, 4566, 4836, 576, 15736, 2070, 1115, 15768, 13452, 15766, 5922, 4531, 9698, 4832, 8202, 1177, 6630, 15782, 11780, 15787, 15788, 2]
// Exports: default

// Module 15767 (ChannelListStickyHeader)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 8202 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 13452 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 15736 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 15766 */;
import openFavoritesGuildActionSheetDefault from "openFavoritesGuildActionSheet" /* 15768 */;
import LurkerServerPreviewJoinButtonDefault from "LurkerServerPreviewJoinButton" /* 15787 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let Pressable;
let closure_4;
let metroImportDefault;
let metroRequire;
({ View: closure_4, Pressable } = react_native);
const JoinGuildSources = Constants.JoinGuildSources;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_9 = createStyles.createStyles(() => {
  let num;
  let obj2;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const obj = { chevron: { flexShrink: 0, flexGrow: 0 }, container: obj2, divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: nativeDefault.space.PX_16 }, guildBadge: { margin: 0 }, flex: { flexShrink: 1 }, header: { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 }, headerRow: { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 }, headerRowTitle: { flexGrow: 1, flexShrink: 1 }, headerRowInset: { paddingEnd: nativeDefault.space.PX_16 }, headerIcon: { marginRight: nativeDefault.space.PX_4 }, subheader: { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 }, ellipse: size, joinButton: { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 } };
  obj2 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_16, paddingBottom: num, zIndex: 1 };
  num = 0;
  if (!flag) {
    num = tmp(576).space.PX_12;
  }
  ({ height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: nativeDefault.space.PX_16 });
  ({ alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 });
  ({ alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 });
  ({ paddingEnd: nativeDefault.space.PX_16 });
  ({ marginRight: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 });
  size = { width: 4, height: 4, backgroundColor: tmp(576).colors.TEXT_SUBTLE, borderRadius: tmp(576).radii.round };
  ({ marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx");

export default function ChannelListStickyHeader(guild) {
  let c1;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let items6;
  let items7;
  let obj11;
  let obj18;
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  let str;
  let stringResult;
  let tmp17;
  let tmp18;
  let tmp19;
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
  const tmp = closure_9(flag);
  let tmp24Result7 = useIsGameCommunityServerPreviewDefault(guild.id);
  const ref = react.useRef(null);
  const obj2 = guild(2070);
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  importDefault = isFavoritesGuildIdResult;
  const obj = react;
  if (!flag2) {
    flag2 = isFavoritesGuildIdResult;
  }
  const t = tmp6(1115).t;
  const items = [guild, isFavoritesGuildIdResult];
  const tmp8 = isFavoritesGuildIdResult ? t.hW8QDk : t["Gpyp/e"];
  const callback = obj.useCallback(() => {
    if (c1) {
      openFavoritesGuildActionSheetDefault();
    } else {
      openGuildActionSheetDefault(guild);
    }
  }, items);
  const tmp10 = useStickyServerHeaderSubtitleDefault(guild);
  const tmp6Result = guild(5922);
  const iOSPressEffects = tmp6Result.useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const tmp6Result4 = guild(2070);
  const favoritesAwareGuildName = tmp6Result4.getFavoritesAwareGuildName(guild);
  const tmp6Result5 = guild(4531);
  const token = tmp6Result5.useToken(tmp2(576).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  const tmp6Result6 = guild(4531);
  const token1 = tmp6Result6.useToken(tmp2(576).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  const obj3 = { style: items1, onPress: tmp17, onPressIn: tmp18, onPressOut: tmp19, accessible: true, accessibilityRole: str, accessibilityHint: stringResult, children: items3 };
  items1 = [pressableStyles, tmp.headerRowTitle];
  tmp17 = undefined;
  const tmp16 = closure_8;
  if (flag2) {
    tmp17 = callback;
  }
  tmp18 = undefined;
  if (flag2) {
    tmp18 = onPressIn;
  }
  tmp19 = undefined;
  if (flag2) {
    tmp19 = onPressOut;
  }
  str = "header";
  if (flag2) {
    str = "button";
  }
  stringResult = undefined;
  if (flag2) {
    const intl = tmp6(1115).intl;
    stringResult = intl.string(tmp8);
  }
  let tmp22 = null;
  const obj4 = { style: tmp.header, children: items2 };
  if (isFavoritesGuildIdResult) {
    const obj5 = { style: tmp.headerIcon, size: "sm", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
    const StarIcon = tmp6(9698).StarIcon;
    tmp22 = closure_6(StarIcon, obj5);
  }
  items2 = [tmp22, , , ];
  const obj6 = { ref, collapsable: false, style: tmp.flex, children: closure_6(guild(4832).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) };
  items2[1] = closure_6(closure_4, obj6);
  const obj7 = { guild, size: guild(1177).Icon.Sizes.REFRESH_SMALL_16, style: tmp.guildBadge };
  const tmp2Result = GuildBadgeV2Default;
  items2[2] = closure_6(tmp2Result, obj7);
  let tmp24Result = null;
  if (flag2) {
    const obj8 = { size: "xxs", color: nativeDefault.colors.TEXT_SUBTLE, style: tmp.chevron };
    const ChevronSmallRightIcon = tmp6(6630).ChevronSmallRightIcon;
    tmp24Result = tmp24(ChevronSmallRightIcon, obj8);
  }
  items2[3] = tmp24Result;
  items3 = [closure_7(closure_4, obj4), ];
  let tmp15Result = null;
  if (null != tmp10) {
    tmp15Result = null;
    if (tmp10 > 0) {
      const obj9 = { style: tmp.subheader, children: items4 };
      const obj10 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: intl2.format(guild(1115).t.zRl6XR, obj11) };
      const Text = tmp6(4832).Text;
      intl2 = tmp6(1115).intl;
      obj11 = { count: tmp10 };
      items4 = [closure_6(Text, obj10), , ];
      const obj12 = { style: tmp.ellipse };
      items4[1] = closure_6(closure_4, obj12);
      const obj13 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: intl3.string(guild(1115).t["1g9A/f"]) };
      const Text2 = tmp6(4832).Text;
      intl3 = tmp6(1115).intl;
      items4[2] = closure_6(Text2, obj13);
      tmp15Result = tmp15(tmp21, obj9);
    }
  }
  items3[1] = tmp15Result;
  const items5 = [tmp.headerRow, ];
  let headerRowInset = null;
  const obj14 = { style: tmp.container, children: items7 };
  const tmp15Result2 = closure_7(tmp16, obj3);
  if (isFavoritesGuildIdResult) {
    headerRowInset = tmp.headerRowInset;
  }
  const obj15 = { style: items5, children: items6 };
  items5[1] = headerRowInset;
  items6 = [tmp15Result2, ];
  let tmp24Result5 = null;
  if (isFavoritesGuildIdResult) {
    tmp24Result5 = tmp24(tmp6(15782).FavoritesGuildHeaderActionButton, {});
  }
  items6[1] = tmp24Result5;
  items7 = [closure_7(closure_4, obj15), , , , ];
  let tmp24Result6 = null;
  if (flag) {
    const obj16 = { guild, useButtonComponent: true, useEventsButton: true };
    tmp24Result6 = tmp24(tmp2(11780), obj16);
  }
  items7[1] = tmp24Result6;
  if (tmp24Result7) {
    const obj17 = { style: tmp.joinButton, children: closure_6(LurkerServerPreviewJoinButtonDefault, obj18) };
    obj18 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
    tmp24Result7 = tmp24(tmp21, obj17);
  }
  items7[2] = tmp24Result7;
  const obj19 = { style: tmp.divider };
  items7[3] = closure_6(closure_4, obj19);
  let tmp24Result8 = null;
  if (flag3) {
    const obj20 = { targetRef: ref, guild };
    tmp24Result8 = tmp24(tmp2(15788), obj20);
  }
  items7[4] = tmp24Result8;
  return closure_7(closure_4, obj14);
};
