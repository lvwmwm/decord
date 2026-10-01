// Module ID: 8199
// Function ID: 8200
// Name: GameProfileCommunity
// Dependencies: [19, 17, 21, 576, 4836, 6364, 8195, 8194, 8168, 8139, 6760, 8200, 2059, 1115, 5896, 4832, 8202, 1177, 5281, 2]
// Exports: default

// Module 8199 (GameProfileCommunity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6364 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import GameProfileSection from "GameProfileSection" /* 8194 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8195 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 8200 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

let hasOwnProperty;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
let size3;
let size4;
let size5;
let size6;
let size7;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { card: obj2, guildContent: obj3, guildHeaderRow: obj4, guildIcon: size, guildIconImage: size1, guildIconLoading: obj5, guildInfo: obj6, guildNameDescriptionContainer: obj7, guildNameRow: obj8, memberCountsContainer: obj9, memberCountContainer: obj10, onlineEllipse: size2, membersEllipse: size3, skeletonGuildIcon: size4, skeletonGuildInfo: { flex: 1, justifyContent: "space-between", marginBottom: 2 }, skeletonGuildInfoSmall: obj11, skeletonGuildInfoLarge: obj12, skeletonGuildName: size5, skeletonGuildDescription: size6, skeletonMemberCounts: size7 };
obj2 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
size = { width: sum, height: sum, borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: nativeDefault.space.PX_4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginLeft: -nativeDefault.space.PX_4 };
size1 = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.none };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj6 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj7 = { gap: nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
size3 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_DEFAULT };
size4 = { width: sum, height: sum, borderRadius: nativeDefault.radii.md, borderWidth: nativeDefault.space.PX_4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj11 = { height: nativeDefault.space.PX_96 + 2 };
obj12 = { height: nativeDefault.space.PX_80 + nativeDefault.space.PX_8 };
size5 = { width: "60%", height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs };
size6 = { width: "90%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
size7 = { width: "55%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles(obj);
let closure_8 = react.memo(() => {
  let GameProfileSkeletonContainer;
  let items;
  let items2;
  let items3;
  let obj2;
  let obj3;
  const tmp = closure_7();
  const tmp4 = useIsWindowLargeDefault();
  const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
  const obj = { animationDelayMs: result, showViewAllSkeleton: false, skeletonTitleWidth: 80, children: hasOwnProperty(View, obj2) };
  obj2 = { style: tmp.card, children: metroRequire(GameProfileSkeletonContainer, obj3) };
  const GameProfileSectionSkeleton = GameProfileSection.GameProfileSectionSkeleton;
  obj3 = { animationDelayMs: result, style: tmp.guildContent, children: items3 };
  const obj4 = { style: tmp.guildHeaderRow, children: items };
  GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  items = [, ];
  const obj5 = { style: tmp.skeletonGuildIcon };
  items[0] = hasOwnProperty(GameProfileSkeletonDefault, obj5);
  const items1 = [tmp.skeletonGuildInfo, ];
  const obj6 = { style: items1, children: items2 };
  items1[1] = tmp4 ? tmp.skeletonGuildInfoLarge : tmp.skeletonGuildInfoSmall;
  items2 = [, , ];
  const obj7 = { style: tmp.skeletonGuildName };
  items2[0] = hasOwnProperty(GameProfileSkeletonDefault, obj7);
  const obj8 = { style: tmp.skeletonGuildDescription };
  items2[1] = hasOwnProperty(GameProfileSkeletonDefault, obj8);
  const obj9 = { style: tmp.skeletonMemberCounts };
  items2[2] = hasOwnProperty(GameProfileSkeletonDefault, obj9);
  items[1] = metroRequire(View, obj6);
  items3 = [metroRequire(View, obj4), hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonButton, {})];
  return hasOwnProperty(GameProfileSectionSkeleton, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default function GameProfileCommunityServer(closeModal) {
  let game;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj19;
  let obj23;
  let obj3;
  let obj4;
  let obj8;
  let tmp11;
  let tmp2Result3;
  let trackAction;
  ({ game, trackAction } = closeModal);
  closeModal = closeModal.closeModal;
  let invite;
  const onInviteResolved = closeModal.onInviteResolved;
  const tmp = closure_7();
  const tmp4 = closeModal(invite[8])(game, onInviteResolved);
  invite = tmp4.invite;
  const isMember = tmp4.isMember;
  const isResolving = tmp4.isResolving;
  const items = [invite, isMember, trackAction, closeModal];
  const obj = trackAction(invite[8]);
  const result = obj.hasGameProfileDiscordWebsite(game);
  if (null != invite) {
    if (null != invite.guild) {
      let stringResult;
      const tmp5Result = trackAction(invite[12]);
      const fromInviteGuildResult = tmp5Result.fromInviteGuild(invite.guild);
      let approximate_member_count = invite.approximate_member_count;
      if (approximate_member_count == null) {
        approximate_member_count = invite.guild.approximate_member_count;
      }
      let approximate_presence_count = invite.approximate_presence_count;
      if (approximate_presence_count == null) {
        approximate_presence_count = invite.guild.approximate_presence_count;
      }
      const obj2 = { title: intl.string(trackAction(invite[13]).t["U2N+ci"]), children: closure_5(tmp10, obj3) };
      const tmp2Result = closeModal(invite[7]);
      intl = tmp5(tmp3[13]).intl;
      obj3 = { style: tmp.card, children: tmp11(View, obj4) };
      tmp11 = closure_6;
      obj4 = { style: tmp.guildContent, children: items8 };
      const obj5 = { style: tmp.guildHeaderRow, children: items1 };
      const obj6 = { style: tmp.guildIcon, children: closure_5(tmp2Result3, obj8) };
      obj8 = { guild: fromInviteGuildResult, size: trackAction(invite[14]).GuildIconSizes.LARGE, style: null, loadingStyle: null };
      ({ guildIconImage: obj7.style, guildIconLoading: obj7.loadingStyle } = tmp);
      tmp2Result3 = closeModal(invite[14]);
      items1 = [closure_5(View, obj6), ];
      const obj10 = { style: tmp.guildNameDescriptionContainer, children: items3 };
      const obj11 = { style: tmp.guildNameRow, children: items2 };
      const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: fromInviteGuildResult.name };
      const obj9 = { style: tmp.guildInfo, children: items4 };
      items2 = [closure_5(tmp5(invite[15]).Text, obj12), ];
      const obj13 = { guild: fromInviteGuildResult, size: trackAction(invite[17]).Icon.Sizes.REFRESH_SMALL_16 };
      const tmp2Result4 = closeModal(invite[16]);
      items2[1] = closure_5(tmp2Result4, obj13);
      items3 = [closure_6(View, obj11), ];
      const obj14 = { variant: "text-sm/medium", color: "text-default", lineClamp: 2, children: fromInviteGuildResult.description };
      items3[1] = closure_5(trackAction(invite[15]).Text, obj14);
      items4 = [closure_6(View, obj10), ];
      let tmp11Result = null;
      const obj15 = { style: tmp.memberCountsContainer, children: items6 };
      if (null != approximate_presence_count) {
        const obj16 = { style: tmp.memberCountContainer, children: items5 };
        const obj17 = { style: tmp.onlineEllipse };
        items5 = [tmp8(tmp10, obj17), ];
        const obj18 = { variant: "text-xs/normal", color: "text-default", children: intl2.formatToPlainString(trackAction(invite[13]).t["LC+S+m"], obj19) };
        const Text = tmp5(tmp3[15]).Text;
        intl2 = tmp5(tmp3[13]).intl;
        obj19 = { membersOnline: approximate_presence_count };
        items5[1] = closure_5(Text, obj18);
        tmp11Result = tmp11(tmp10, obj16);
      }
      items6 = [tmp11Result, ];
      let tmp11Result2 = null;
      if (null != approximate_member_count) {
        const obj20 = { style: tmp.memberCountContainer, children: items7 };
        const obj21 = { style: tmp.membersEllipse };
        items7 = [tmp8(tmp10, obj21), ];
        const obj22 = { variant: "text-xs/normal", color: "text-default", children: intl3.formatToPlainString(trackAction(invite[13]).t.zRl6XR, obj23) };
        const Text2 = tmp5(tmp3[15]).Text;
        intl3 = tmp5(tmp3[13]).intl;
        obj23 = { count: approximate_member_count };
        items7[1] = closure_5(Text2, obj22);
        tmp11Result2 = tmp11(tmp10, obj20);
      }
      items6[1] = tmp11Result2;
      items4[1] = tmp11(View, obj15);
      items1[1] = tmp11(View, obj9);
      items8 = [tmp11(tmp10, obj5), ];
      const Button = tmp5(tmp3[18]).Button;
      const intl4 = tmp5(tmp3[13]).intl;
      const string = intl4.string;
      const t = tmp5(tmp3[13]).t;
      if (isMember) {
        stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      const obj24 = { variant: "secondary", size: "md", text: stringResult, onPress: tmp7 };
      items8[1] = closure_5(Button, obj24);
      return closure_5(tmp2Result, obj2);
    }
  }
  let tmp17 = null;
  if (result) {
    tmp17 = null;
    if (isResolving) {
      tmp17 = closure_5(closure_8, {});
    }
  }
  return tmp17;
};
