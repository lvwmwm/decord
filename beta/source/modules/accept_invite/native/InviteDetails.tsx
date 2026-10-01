// Module ID: 12232
// Function ID: 12233
// Name: InviteDetails
// Dependencies: [32, 19, 17, 11906, 1386, 1372, 1074, 12233, 21, 4836, 576, 5753, 7154, 1177, 12156, 4678, 1115, 5902, 4832, 1397, 5899, 1241, 504, 12234, 9062, 5281, 5745, 2]
// Exports: default

// Module 12232 (InviteDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl8 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import GuildBadgeDefault from "GuildBadge" /* 5902 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7154 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 12156 */;
import HubConstants from "HubConstants" /* 12233 */;
import InviteRolesListDefault from "InviteRolesList" /* 12234 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MultiAccountStore from "MultiAccountStore" /* 11906 */;
import UserRecord from "UserRecord" /* 1386 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let size2;
let size3;
let size4;
let tmp15;
const AvatarUtilsDefault = tmp15(1397);
function shouldShowInviter(invite, isGuildMember) {
  let num2;
  let tmp = null != invite.inviter;
  if (tmp) {
    tmp = !(isGuildMember && invite.state !== constants2.ACCEPTED);
    const tmp2 = isGuildMember && invite.state !== constants2.ACCEPTED;
  }
  if (tmp) {
    let num = invite.approximate_presence_count;
    if (num == null) {
      num = 0;
    }
    const obj = { onlineCount: num, memberCount: num2 };
    num2 = invite.approximate_member_count;
    if (num2 == null) {
      num2 = 0;
    }
    let tmp4 = null;
    if (0 !== obj.memberCount) {
      tmp4 = obj;
    }
    let num4;
    if (tmp4 != null) {
      num4 = tmp4.memberCount;
    }
    if (num4 == null) {
      num4 = 0;
    }
    tmp = num4 <= 100;
  }
  return tmp;
}
function InviteDestinationIcon(invite) {
  let items;
  let tmp12;
  let tmp2Result2;
  invite = invite.invite;
  const tmp = closure_15();
  const obj = { style: items, children: null };
  items = [tmp.avatarContainer];
  const obj2 = InviteTypeUtils;
  const tmp3 = View;
  if (obj2.isGroupDMInvite(invite)) {
    if (null != invite.inviter) {
      let tmp2Result = null;
      if (null != invite.inviter) {
        const self = this;
        const self2 = this;
        const obj3 = { avatarStyle: tmp.avatar, user: tmp12, guildId: "Array", size: native.AvatarSizes.XLARGE };
        const Avatar = tmp4(1177).Avatar;
        tmp12 = new UserRecord(invite.inviter);
        tmp2Result = tmp2(Avatar, obj3);
      }
      tmp2Result2 = tmp2Result;
    }
    obj.children = tmp2Result2;
    return closure_12(tmp3, obj);
  }
  tmp2Result2 = null;
  if (null != invite.guild) {
    const obj4 = { style: tmp.avatar, guild: invite.guild, size: GuildInviteIconDefault.Sizes.LARGE, textScale: 2 };
    const tmp9 = GuildInviteIconDefault;
    tmp2Result2 = tmp2(tmp9, obj4);
  }
}
function InviteHeader(invite) {
  let items;
  let name;
  let obj5;
  invite = invite.invite;
  const tmp = closure_15();
  const obj = InviteTypeUtils;
  if (obj.isGroupDMInvite(invite)) {
    const channel = invite.channel;
    let name1;
    if (channel != null) {
      name1 = channel.name;
    }
    if (name1 == null) {
      const obj2 = UserUtilsDefault;
      name1 = obj2.getFormattedName(invite.inviter);
    }
    name = name1;
  } else {
    const guild = invite.guild;
    if (guild != null) {
      name = guild.name;
    }
  }
  const tmp2Result = InviteTypeUtils;
  if (tmp2Result.isFriendInvite(invite)) {
    const intl = tmp2(1115).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { username: obj5.getFormattedName(invite.inviter) };
    const v4aF92R = tmp2(1115).t["4aF92R"];
    obj5 = UserUtilsDefault;
    name = formatToPlainString(v4aF92R, obj3);
  }
  let tmp10 = null;
  if (null != name) {
    const obj4 = { style: tmp.guildNameContainer, children: items };
    const obj6 = { guild: invite.guild, style: tmp.featureIcon, disableColor: true };
    items = [closure_12(GuildBadgeDefault, obj6), ];
    const obj7 = { style: tmp.guildNameText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: name };
    items[1] = closure_12(Text_Text.Heading, obj7);
    tmp10 = map1(View, obj4);
  }
  return tmp10;
}
function InviteJoinContext(invite) {
  let format3Result;
  let items1;
  let obj11;
  let obj12;
  let obj5;
  let obj7;
  let obj9;
  invite = invite.invite;
  const isGuildMember = invite.isGuildMember;
  const isRegistration = invite.isRegistration;
  const tmp = closure_15();
  const items = [invite, isGuildMember];
  const memo = react.useMemo(() => {
    let userAvatarSource;
    const obj = InviteTypeUtils;
    if (obj.isStreamInvite(invite)) {
      if (null != invite.target_user) {
        const obj3 = AvatarUtilsDefault;
        userAvatarSource = obj3.getUserAvatarSource(tmp2.target_user);
      }
      return userAvatarSource;
    }
    userAvatarSource = null;
    if (shouldShowInviter(invite, isGuildMember)) {
      userAvatarSource = null;
      if (null != invite.inviter) {
        const obj2 = AvatarUtilsDefault;
        userAvatarSource = obj2.getUserAvatarSource(tmp2.inviter);
      }
    }
  }, items);
  const intl = invite(1115).intl;
  const stringResult = intl.string(invite(1115).t["3rE1P8"]);
  let obj = invite(7154);
  if (obj.isFriendInvite(invite)) {
    const intl7 = tmp3(1115).intl;
    const format3 = intl7.format;
    let obj2 = { username: obj11.getFormattedName(invite.inviter) };
    const Quj7HX = tmp3(1115).t.Quj7HX;
    obj11 = isGuildMember(4678);
    format3Result = format3(Quj7HX, obj2);
  } else {
    const tmp3Result = invite(7154);
    if (tmp3Result.isGroupDMInvite(invite)) {
      if (null != invite.channel) {
        let format2Result;
        if (null != invite.inviter) {
          const intl6 = tmp3(1115).intl;
          const format2 = intl6.format;
          let obj3 = { username: obj9.getFormattedName(invite.inviter) };
          const Lu4h18 = tmp3(1115).t.Lu4h18;
          obj9 = isGuildMember(4678);
          format2Result = format2(Lu4h18, obj3);
        }
        format3Result = format2Result;
      }
      const intl5 = tmp3(1115).intl;
      format2Result = intl5.string(tmp3(1115).t.OsdY8B);
    } else {
      const tmp3Result3 = invite(7154);
      if (tmp3Result3.isStreamInvite(invite)) {
        if (null != invite.target_user) {
          const intl4 = tmp3(1115).intl;
          const formatToPlainString = intl4.formatToPlainString;
          const obj4 = { username: obj7.getFormattedName(invite.target_user) };
          const x2L32Q = tmp3(1115).t.x2L32Q;
          obj7 = isGuildMember(4678);
          format3Result = formatToPlainString(x2L32Q, obj4);
        }
      }
      const tmp7 = isGuildMember && invite.state !== constants2.ACCEPTED;
      if (tmp7) {
        let stringResult1;
        const intl3 = tmp3(1115).intl;
        const string = intl3.string;
        const t = tmp3(1115).t;
        if (isRegistration) {
          stringResult1 = string(t.jpwYbt);
        } else {
          stringResult1 = string(t["FDsl+J"]);
        }
        format3Result = stringResult1;
      } else {
        format3Result = stringResult;
        const tmp10 = shouldShowInviter(invite, isGuildMember) && null != invite.inviter;
        if (tmp10) {
          const intl2 = tmp3(1115).intl;
          const format = intl2.format;
          const obj6 = { username: obj5.getFormattedName(invite.inviter) };
          const spU2mI = tmp3(1115).t.spU2mI;
          obj5 = isGuildMember(4678);
          format3Result = format(spU2mI, obj6);
        }
      }
    }
  }
  let tmp22 = null;
  const obj8 = { style: tmp.inviteJoinContainer, children: items1 };
  const tmp20 = closure_13;
  if (null != memo) {
    tmp22 = null;
    const tmp3Result4 = invite(7154);
    if (!tmp3Result4.isFriendInvite(invite)) {
      const obj10 = { style: tmp.inviterIconWrapper, children: closure_12(isGuildMember(5899), obj12) };
      obj12 = { source: memo, style: tmp.inviterIcon };
      tmp22 = closure_12(tmp21, obj10);
    }
  }
  items1 = [tmp22, ];
  const obj13 = { style: tmp.inviteJoinText, variant: "text-sm/normal", color: "text-default", children: format3Result };
  items1[1] = closure_12(invite(4832).Text, obj13);
  return tmp20(View, obj8);
}
function InviteMemberCounts(invite) {
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let num2;
  let obj10;
  let obj6;
  invite = invite.invite;
  const isGuildMember = invite.isGuildMember;
  const tmp = closure_15();
  let num = invite.approximate_presence_count;
  if (num == null) {
    num = 0;
  }
  const obj = { onlineCount: num, memberCount: num2 };
  num2 = invite.approximate_member_count;
  if (num2 == null) {
    num2 = 0;
  }
  let tmp2 = null;
  if (0 !== obj.memberCount) {
    tmp2 = obj;
  }
  let tmp17Result4 = null;
  if (null != tmp2) {
    tmp17Result4 = null;
    if (!shouldShowInviter(invite, isGuildMember)) {
      let id;
      if (invite != null) {
        const guild = invite.guild;
        if (guild != null) {
          id = guild.id;
        }
      }
      tmp17Result4 = null;
      if (id !== closure_11) {
        let tmp17Result = null;
        const obj2 = { style: tmp.memberInfo, children: items1 };
        if (null != tmp2.onlineCount) {
          const obj3 = { children: items };
          const obj4 = { style: tmp.dotOnline };
          items = [closure_12(View, obj4), ];
          const obj5 = { variant: "text-xs/medium", color: "text-default", children: intl.format(intl8.t["LC+S+m"], obj6) };
          const Text = Text_Text.Text;
          intl = intl8.intl;
          obj6 = { membersOnline: tmp2.onlineCount };
          items[1] = closure_12(Text, obj5);
          tmp17Result = tmp17(authStore2, obj3);
        }
        items1 = [tmp17Result, ];
        let tmp17Result3 = null;
        if (null != tmp2.memberCount) {
          const obj7 = { children: items2 };
          const obj8 = { style: tmp.dotOffline };
          items2 = [closure_12(View, obj8), ];
          const obj9 = { variant: "text-xs/medium", color: "text-default", children: intl2.format(intl8.t.zRl6XR, obj10) };
          const Text2 = Text_Text.Text;
          intl2 = intl8.intl;
          obj10 = { count: tmp2.memberCount };
          items2[1] = closure_12(Text2, obj9);
          tmp17Result3 = tmp17(authStore2, obj7);
        }
        items1[1] = tmp17Result3;
        tmp17Result4 = tmp17(tmp18, obj2);
      }
    }
  }
  return tmp17Result4;
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ AnalyticEvents: c9, InviteStates: c10 } = Constants);
let closure_11 = HubConstants.INVITE_ROUTING_HUB_GUILD_ID;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatar: size, avatarContainer: size1, inviteJoinContainer: { flexDirection: "row", alignItems: "flex-start", marginBottom: 8, marginLeft: 16, marginRight: 16 }, inviteJoinText: { textAlign: "center" }, inviterIconWrapper: obj2, inviterIcon: size2, guildNameContainer: { flexDirection: "row", alignItems: "center", marginBottom: 8 }, guildNameText: { textAlign: "center" }, featureIcon: obj3, memberInfo: { flexDirection: "row", alignItems: "center", marginBottom: 8 }, rolesList: { marginTop: 8, marginBottom: 8, alignItems: "center" }, dotOnline: size3, dotOffline: size4, embedDetailsCard: obj4 };
size = { height: 64, width: 64, margin: 0, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
size1 = { borderRadius: nativeDefault.radii.none, height: 64, width: 64, marginBottom: 24, marginTop: 24 };
obj2 = { borderRadius: nativeDefault.radii.none, marginRight: 8 };
size2 = { width: 20, height: 20, borderRadius: nativeDefault.radii.md };
obj3 = { flexGrow: 0, marginRight: 8, opacity: LegacyTokens.DARK_1_LIGHT_04 };
size3 = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
size4 = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj4 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 8 };
let closure_15 = createStyles(obj);
const constants3 = { ACCEPT: 0, [0]: "ACCEPT", DECLINE: 1, [1]: "DECLINE" };
size = size_mod;
const result = size.fileFinishedImporting("modules/accept_invite/native/InviteDetails.tsx");

export default function InviteDetails(invite) {
  let _undefined;
  let c3;
  let canUseMultiAccountMobile;
  let currentUser;
  let formatToPlainStringResult;
  let isGuildMember;
  let items3;
  let stringResult;
  let stringResult1;
  let tmp24;
  let tmp3;
  invite = invite.invite;
  ({ isGuildMember, onPressJoin: importDefault, onPressClose: dependencyMap } = invite);
  _slicedToArray = undefined;
  let stateFromStores;
  const isRegistration = invite.isRegistration;
  let tmp = closure_15();
  const tmp2 = _slicedToArray(stateFromStores.useState(), 2);
  [tmp3, c3] = tmp2;
  let obj = { invite, isGuildMember, isRegistration };
  const guild_scheduled_event = invite.guild_scheduled_event;
  const items = [UserStore];
  const obj2 = invite(504);
  stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [MultiAccountStore];
  const obj3 = invite(504);
  let stateFromStores1 = obj3.useStateFromStores(items1, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
  const obj4 = {};
  const merged = Object.assign(obj);
  const items2 = [closure_12(InviteDestinationIcon, obj4), , , , , , ];
  const obj5 = {};
  const merged1 = Object.assign(obj);
  items2[1] = closure_12(InviteJoinContext, obj5);
  const obj6 = {};
  const merged2 = Object.assign(obj);
  items2[2] = closure_12(InviteHeader, obj6);
  const obj7 = {};
  const merged3 = Object.assign(obj);
  items2[3] = closure_12(InviteMemberCounts, obj7);
  const obj8 = { invite, style: tmp.rolesList };
  items2[4] = closure_12(InviteRolesListDefault, obj8);
  let tmp8Result = null != guild_scheduled_event;
  const tmp9 = closure_14;
  if (tmp8Result) {
    const obj10 = { event: guild_scheduled_event };
    const obj9 = { style: tmp.embedDetailsCard, children: items3 };
    items3 = [closure_12(invite(9062).GuildEventCardHeader, obj10), , ];
    const obj11 = { event: guild_scheduled_event };
    items3[1] = closure_12(invite(9062).GuildEventCardMetaInfo, obj11);
    const obj12 = { event: guild_scheduled_event };
    items3[2] = closure_12(invite(9062).GuildEventCardGuildInfo, obj12);
    tmp8Result = tmp8(View, obj9);
  }
  items2[5] = tmp8Result;
  if (isGuildMember) {
    isGuildMember = invite.state !== constants2.ACCEPTED;
  }
  let userAvatarSource = null;
  if (null != stateFromStores) {
    const tmp15Result = AvatarUtilsDefault;
    userAvatarSource = tmp15Result.getUserAvatarSource(stateFromStores, false, 20);
  }
  let tmp10Result;
  if (null != userAvatarSource) {
    const obj13 = { source: userAvatarSource, variant: "entity" };
    tmp10Result = tmp10(tmp4(5281).Button.Icon, obj13);
  }
  if (null != stateFromStores) {
    const intl = tmp4(1115).intl;
    const obj14 = {
      usernameHook() {
          const username = stateFromStores.username;
          let str = "";
          const tmp = stateFromStores;
          if (!stateFromStores.hasUniqueUsername()) {
            const _HermesInternal = HermesInternal;
            str = "#" + tmp.discriminator;
          }
          return "" + username + str;
        }
    };
    formatToPlainStringResult = intl.formatToPlainString(invite(1115).t["9sWQNT"], obj14);
  }
  const intl2 = tmp4(1115).intl;
  if (isGuildMember) {
    const intl3 = tmp4(1115).intl;
    stringResult = intl3.string(tmp4(1115).t.IRoQXr);
    tmp24 = stringResult;
  } else {
    if (stateFromStores1) {
      stateFromStores1 = null != formatToPlainStringResult;
    }
    stringResult = formatToPlainStringResult;
    tmp24 = tmp22;
    if (stateFromStores1) {
      stringResult = formatToPlainStringResult;
      tmp24 = formatToPlainStringResult;
    }
  }
  function handleAcceptInvitePress() {
    _undefined(constants.ACCEPT);
    importDefault();
  }
  const ButtonGroup = tmp4(5745).ButtonGroup;
  const items4 = [, ];
  const obj15 = { icon: tmp10Result, variant: "primary", size: "lg", text: tmp24, accessibilityLabel: stringResult, onPress: handleAcceptInvitePress, loading: tmp3 === constants3.ACCEPT, disabled: tmp3 === constants3.ACCEPT };
  items4[0] = closure_12(invite(5281).Button, obj15);
  const Button = tmp4(5281).Button;
  const intl4 = tmp4(1115).intl;
  const string = intl4.string;
  const t = tmp4(1115).t;
  if (isGuildMember) {
    stringResult1 = string(t.WAI6xu);
  } else {
    stringResult1 = string(t.ndsK4Z);
  }
  const obj16 = { children: items2 };
  const obj17 = { children: items4 };
  const obj18 = {
    variant: "secondary",
    size: "lg",
    text: stringResult1,
    onPress: function handleCancelPress() {
      let id;
      _undefined(constants.DECLINE);
      const guild = invite.guild;
      const obj = { invite_code: invite.code, guild_id: id };
      id = undefined;
      const track = AnalyticsUtilsDefault.track;
      const INVITE_ACCEPT_DISMISSED = constants.INVITE_ACCEPT_DISMISSED;
      AnalyticsUtilsDefault;
      if (guild != null) {
        id = guild.id;
      }
      track(INVITE_ACCEPT_DISMISSED, obj);
      dependencyMap();
    },
    loading: tmp3 === constants3.DECLINE,
    disabled: tmp3 === constants3.DECLINE
  };
  items4[1] = closure_12(Button, obj18);
  items2[6] = closure_13(ButtonGroup, obj17);
  return closure_13(tmp9, obj16);
};
