// Module ID: 18180
// Function ID: 18181
// Name: ChannelListStickyHeader
// Dependencies: [19, 17, 1072, 21, 5095, 5014, 575, 18149, 4888, 1113, 18181, 15730, 18179, 9304, 6982, 5596, 10063, 5624, 9306, 1187, 7378, 18198, 13830, 18202, 18203, 2]
// Exports: default

// Module 18180 (ChannelListStickyHeader)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 9306 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 15730 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 18149 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 18179 */;
import openFavoritesGuildActionSheetDefault from "openFavoritesGuildActionSheet" /* 18181 */;
import LurkerServerPreviewJoinButtonDefault from "LurkerServerPreviewJoinButton" /* 18202 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import createStyles from "createStyles" /* 5014 */;
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
    num = tmp(575).space.PX_12;
  }
  ({ height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: nativeDefault.space.PX_16 });
  ({ alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 });
  ({ alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 });
  ({ paddingEnd: nativeDefault.space.PX_16 });
  ({ marginRight: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 });
  size = { width: 4, height: 4, backgroundColor: tmp(575).colors.TEXT_SUBTLE, borderRadius: tmp(575).radii.round };
  ({ marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx");

export default function ChannelListStickyHeader(guild) {
  let c1;
  let intl2;
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
  let string;
  let stringResult;
  let t2;
  let tmp18;
  let tmp19;
  let tmp20;
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
  let tmp25Result7 = useIsGameCommunityServerPreviewDefault(guild.id);
  const ref = react.useRef(null);
  const obj2 = guild(4888);
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  importDefault = isFavoritesGuildIdResult;
  const obj = react;
  if (!flag2) {
    flag2 = isFavoritesGuildIdResult;
  }
  const t = tmp6(1113).t;
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
  const tmp6Result = guild(9304);
  const isDiscoverableGuildResult = tmp6Result.isDiscoverableGuild(guild);
  const tmp6Result5 = guild(6982);
  const iOSPressEffects = tmp6Result5.useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const tmp6Result6 = guild(4888);
  const favoritesAwareGuildName = tmp6Result6.getFavoritesAwareGuildName(guild);
  const tmp6Result7 = guild(5596);
  const token = tmp6Result7.useToken(tmp2(575).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  const tmp6Result8 = guild(5596);
  const token1 = tmp6Result8.useToken(tmp2(575).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  const obj3 = { style: items1, onPress: tmp18, onPressIn: tmp19, onPressOut: tmp20, accessible: true, accessibilityRole: str, accessibilityHint: stringResult, children: items3 };
  items1 = [pressableStyles, tmp.headerRowTitle];
  tmp18 = undefined;
  const tmp17 = closure_8;
  if (flag2) {
    tmp18 = callback;
  }
  tmp19 = undefined;
  if (flag2) {
    tmp19 = onPressIn;
  }
  tmp20 = undefined;
  if (flag2) {
    tmp20 = onPressOut;
  }
  str = "header";
  if (flag2) {
    str = "button";
  }
  stringResult = undefined;
  if (flag2) {
    const intl = tmp6(1113).intl;
    stringResult = intl.string(tmp8);
  }
  let tmp23 = null;
  const obj4 = { style: tmp.header, children: items2 };
  if (isFavoritesGuildIdResult) {
    const obj5 = { style: tmp.headerIcon, size: "sm", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
    const StarIcon = tmp6(10063).StarIcon;
    tmp23 = closure_6(StarIcon, obj5);
  }
  items2 = [tmp23, , , ];
  const obj6 = { ref, collapsable: false, style: tmp.flex, children: closure_6(guild(5624).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) };
  items2[1] = closure_6(closure_4, obj6);
  const obj7 = { guild, size: guild(1187).Icon.Sizes.REFRESH_SMALL_16, style: tmp.guildBadge };
  const tmp2Result = GuildBadgeV2Default;
  items2[2] = closure_6(tmp2Result, obj7);
  let tmp25Result = null;
  if (flag2) {
    const obj8 = { size: "xxs", color: nativeDefault.colors.TEXT_SUBTLE, style: tmp.chevron };
    const ChevronSmallRightIcon = tmp6(7378).ChevronSmallRightIcon;
    tmp25Result = tmp25(ChevronSmallRightIcon, obj8);
  }
  items2[3] = tmp25Result;
  items3 = [closure_7(closure_4, obj4), ];
  let tmp16Result = null;
  if (null != tmp10) {
    tmp16Result = null;
    if (tmp10 > 0) {
      const obj9 = { style: tmp.subheader, children: items4 };
      const obj10 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: intl2.format(guild(1113).t.zRl6XR, obj11) };
      const Text = tmp6(5624).Text;
      intl2 = tmp6(1113).intl;
      obj11 = { count: tmp10 };
      items4 = [closure_6(Text, obj10), , ];
      const obj12 = { style: tmp.ellipse };
      items4[1] = closure_6(closure_4, obj12);
      const obj13 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: string(isDiscoverableGuildResult ? t2["B/vjCu"] : t2["1g9A/f"]) };
      const Text2 = tmp6(5624).Text;
      const intl3 = tmp6(1113).intl;
      string = intl3.string;
      t2 = tmp6(1113).t;
      items4[2] = closure_6(Text2, obj13);
      tmp16Result = tmp16(tmp22, obj9);
    }
  }
  items3[1] = tmp16Result;
  const items5 = [tmp.headerRow, ];
  let headerRowInset = null;
  const obj14 = { style: tmp.container, children: items7 };
  const tmp16Result2 = closure_7(tmp17, obj3);
  if (isFavoritesGuildIdResult) {
    headerRowInset = tmp.headerRowInset;
  }
  const obj15 = { style: items5, children: items6 };
  items5[1] = headerRowInset;
  items6 = [tmp16Result2, ];
  let tmp25Result5 = null;
  if (isFavoritesGuildIdResult) {
    tmp25Result5 = tmp25(tmp6(18198).FavoritesGuildHeaderActionButton, {});
  }
  items6[1] = tmp25Result5;
  items7 = [closure_7(closure_4, obj15), , , , ];
  let tmp25Result6 = null;
  if (flag) {
    const obj16 = { guild, useButtonComponent: true, useEventsButton: true };
    tmp25Result6 = tmp25(tmp2(13830), obj16);
  }
  items7[1] = tmp25Result6;
  if (tmp25Result7) {
    const obj17 = { style: tmp.joinButton, children: closure_6(LurkerServerPreviewJoinButtonDefault, obj18) };
    obj18 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
    tmp25Result7 = tmp25(tmp22, obj17);
  }
  items7[2] = tmp25Result7;
  const obj19 = { style: tmp.divider };
  items7[3] = closure_6(closure_4, obj19);
  let tmp25Result8 = null;
  if (flag3) {
    const obj20 = { targetRef: ref, guild };
    tmp25Result8 = tmp25(tmp2(18203), obj20);
  }
  items7[4] = tmp25Result8;
  return closure_7(closure_4, obj14);
};
