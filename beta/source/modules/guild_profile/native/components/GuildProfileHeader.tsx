// Module ID: 9212
// Function ID: 9213
// Name: GuildProfileHeader
// Dependencies: [19, 17, 2112, 502, 2108, 9213, 21, 4836, 576, 504, 7156, 11, 2059, 8205, 8204, 4528, 4800, 6760, 5896, 4832, 5435, 8202, 1115, 2]
// Exports: default

// Module 9212 (GuildProfileHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2059 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import BadgeCategory from "BadgeCategory" /* 8204 */;
import GuildTraits from "GuildTraits" /* 8205 */;
import GuildBadgeConstants from "GuildBadgeConstants" /* 9213 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let size;
let size1;
let size2;
const View = react_native.View;
const getBadgeTooltip = GuildBadgeConstants.getBadgeTooltip;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: { paddingHorizontal: 16, marginTop: -32, display: "flex", flexDirection: "column", gap: 0 }, avatarBackground: size, members: { display: "flex", flexDirection: "row", gap: 8 }, memberCount: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, dot: size1, dotOnline: size2, established: { display: "flex" }, nameRow: { marginTop: 4, display: "flex", flexDirection: "row", alignItems: "center" }, guildName: { flexShrink: 1 }, guildIcon: { marginLeft: 8, height: 24, width: 24 } };
size = { width: 86, height: 86, borderRadius: 28.666666666666668, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
size1 = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
size2 = { width: 8, height: 8, borderRadius: 4, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
const styles = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileHeader.tsx");

export default function GuildProfileHeader(profile) {
  let Text4;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let locale;
  let obj11;
  let obj16;
  let obj20;
  let obj22;
  let obj7;
  let tmp15;
  profile = profile.profile;
  let id;
  let stateFromStores1;
  const guildIconSource = profile.guildIconSource;
  let tmp = styles();
  let obj = profile(stateFromStores1[9]);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let tmp5 = profile(stateFromStores1[10]);
  const getEstablishedDate = tmp5.getEstablishedDate;
  let obj2 = id(stateFromStores1[11]);
  const establishedDate = getEstablishedDate(obj2.extractTimestamp(profile.id), stateFromStores);
  let obj3 = profile(stateFromStores1[12]);
  const items1 = [profile];
  let fromGuildProfileResult = obj3.fromGuildProfile(profile);
  const tmp6 = id;
  id = profile.id;
  const callback = react.useCallback(() => {
    let tooltipSubtitle;
    let tooltipTitle;
    const obj = GuildRecordUtils;
    const fromGuildProfileResult = obj.fromGuildProfile(profile);
    const obj2 = GuildTraits;
    const guildTraits = obj2.getGuildTraits(fromGuildProfileResult);
    const obj3 = BadgeCategory;
    ({ tooltipTitle, tooltipSubtitle } = getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility));
    getBadgeTooltip(obj3.getBadgeCategory(guildTraits), guildTraits.visibility);
    const tmp5 = null == tooltipTitle && null == tooltipSubtitle;
    if (!tmp5) {
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      if (tooltipSubtitle == null) {
        tooltipSubtitle = tooltipTitle;
      }
      const obj4 = { key: "guild-badge-tooltip", content: tooltipSubtitle };
      open(obj4);
    }
  }, items1);
  let obj4 = profile(stateFromStores1[9]);
  const items2 = [GuildMemberStore, AuthenticationStore];
  const items3 = [id];
  stateFromStores1 = obj4.useStateFromStores(items2, () => {
    const member = GuildMemberStore.getMember(id, AuthenticationStore.getId());
    let joinedAt;
    if (member != null) {
      joinedAt = member.joinedAt;
    }
    return null != joinedAt;
  }, items3);
  const items4 = [id, stateFromStores1];
  const obj5 = { style: tmp.header, children: items5 };
  const obj6 = { style: tmp.avatarBackground, children: closure_9(tmp15, obj7) };
  const callback1 = react.useCallback(() => {
    const tmp = stateFromStores1;
    if (tmp) {
      const _HermesInternal = HermesInternal;
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("GuildProfileActionSheet:" + id);
      const obj2 = transitionToGuild;
      obj2.transitionToGuild(id);
    }
  }, items4);
  obj7 = { icon: guildIconSource, size: profile(stateFromStores1[18]).GuildIconSizes.XXLARGE, animate: true, value: profile.name, selected: false };
  tmp15 = id(stateFromStores1[18]);
  items5 = [closure_9(View, obj6), , , ];
  let tmp16;
  const obj8 = { style: tmp.nameRow, children: items6 };
  const Text = profile(stateFromStores1[19]).Text;
  if (stateFromStores1) {
    tmp16 = callback1;
  }
  items6 = [, ];
  const obj9 = { onPress: tmp16, style: tmp.guildName, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: profile.name };
  items6[0] = closure_9(Text, obj9);
  const obj10 = { onPress: callback, children: closure_9(tmp6(stateFromStores1[21]), obj11) };
  const PressableHighlight = tmp2(tmp3[20]).PressableHighlight;
  obj11 = { guild: fromGuildProfileResult, style: tmp.guildIcon };
  items6[1] = closure_9(PressableHighlight, obj10);
  items5[1] = closure_10(View, obj8);
  const obj13 = { style: tmp.memberCount, children: items7 };
  items7 = [, ];
  const obj12 = { style: tmp.members, children: items8 };
  const obj14 = { style: tmp.dotOnline };
  items7[0] = closure_9(View, obj14);
  const obj15 = { variant: "text-md/medium", color: "text-default", children: intl.format(profile(stateFromStores1[22]).t["LC+S+m"], obj16) };
  const Text2 = tmp2(tmp3[19]).Text;
  intl = tmp2(tmp3[22]).intl;
  obj16 = { membersOnline: profile.onlineCount };
  items7[1] = closure_9(Text2, obj15);
  items8 = [closure_10(View, obj13), ];
  const obj17 = { style: tmp.memberCount, children: items9 };
  items9 = [, ];
  const obj18 = { style: tmp.dot };
  items9[0] = closure_9(View, obj18);
  const obj19 = { variant: "text-md/medium", color: "text-default", children: intl2.format(profile(stateFromStores1[22]).t.zRl6XR, obj20) };
  const Text3 = tmp2(tmp3[19]).Text;
  intl2 = tmp2(tmp3[22]).intl;
  obj20 = { count: profile.memberCount };
  items9[1] = closure_9(Text3, obj19);
  items8[1] = closure_10(View, obj17);
  items5[2] = closure_10(View, obj12);
  const obj21 = { style: tmp.established, children: closure_9(Text4, obj22) };
  obj22 = { variant: "text-md/medium", color: "text-muted", children: intl3.format(profile(stateFromStores1[22]).t.zb2Q56, { createdAtDate: establishedDate }) };
  Text4 = tmp2(tmp3[19]).Text;
  intl3 = tmp2(tmp3[22]).intl;
  items5[3] = closure_9(View, obj21);
  return closure_10(View, obj5);
};
export const useStyles = styles;
