// Module ID: 11779
// Function ID: 91504
// Name: getMemberCountFromInvite
// Dependencies: [57, 31, 27, 11482, 1857, 1849, 653, 11780, 33, 4130, 689, 4973, 6977, 1273, 11718, 3969, 1212, 9207, 4126, 1392, 5085, 675, 566, 11781, 8405, 4543, 4965, 2]
// Exports: default

// Module 11779 (getMemberCountFromInvite)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import { INVITE_ROUTING_HUB_GUILD_ID as closure_11 } from "HubEmailConnectionSteps";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_9;
const require = arg1;
function getMemberCountFromInvite(invite) {
  const obj = {};
  const approximate_presence_count = invite.approximate_presence_count;
  let num = 0;
  if (null != approximate_presence_count) {
    num = approximate_presence_count;
  }
  obj.onlineCount = num;
  const approximate_member_count = invite.approximate_member_count;
  let num2 = 0;
  if (null != approximate_member_count) {
    num2 = approximate_member_count;
  }
  obj.memberCount = num2;
  let tmp = null;
  if (0 !== obj.memberCount) {
    tmp = obj;
  }
  return tmp;
}
function isAlreadyMember(invite, isGuildMember) {
  let tmp = isGuildMember;
  if (isGuildMember) {
    tmp = invite.state !== constants.ACCEPTED;
  }
  return tmp;
}
function shouldShowInviter(invite, isGuildMember) {
  let tmp = null != invite.inviter;
  if (tmp) {
    tmp = !isAlreadyMember(invite, isGuildMember);
  }
  if (tmp) {
    let memberCount;
    const tmp6 = getMemberCountFromInvite(invite);
    if (null != tmp6) {
      memberCount = tmp6.memberCount;
    }
    let num = 0;
    if (null != memberCount) {
      num = memberCount;
    }
    tmp = num <= 100;
  }
  return tmp;
}
function InviteDestinationIcon(invite) {
  invite = invite.invite;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.avatarContainer];
  if (obj2.isGroupDMInvite(invite)) {
    if (null != invite.inviter) {
      let tmp10 = null;
      if (null != invite.inviter) {
        obj = { avatarStyle: tmp.avatar };
        const prototype = ctor.prototype;
        const tmp17 = new ctor(invite.inviter);
        obj.user = tmp17;
        obj.guildId = undefined;
        obj.size = require(1273) /* Button */.AvatarSizes.XLARGE;
        tmp10 = callback2(require(1273) /* Button */.Avatar, obj);
      }
      let tmp5 = tmp10;
    }
    obj.children = tmp5;
    return callback2(View, obj);
  }
  tmp5 = null;
  if (null != invite.guild) {
    obj = { style: tmp.avatar, guild: invite.guild, size: importDefault(11718).Sizes.LARGE, textScale: 2 };
    tmp5 = callback2(importDefault(11718), obj);
    const tmp9 = importDefault(11718);
  }
}
function InviteHeader(invite) {
  invite = invite.invite;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(6977) /* isGroupDMInvite */;
  if (obj.isGroupDMInvite(invite)) {
    const channel = invite.channel;
    let name;
    if (null != channel) {
      name = channel.name;
    }
    if (null == name) {
      let obj1 = importDefault(3969);
      name = obj1.getFormattedName(invite.inviter);
    }
  } else {
    const guild = invite.guild;
    if (null != guild) {
      name = guild.name;
    }
  }
  let obj2 = require(6977) /* isGroupDMInvite */;
  if (obj2.isFriendInvite(invite)) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { username: importDefault(3969).getFormattedName(invite.inviter) };
    name = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["4aF92R"], obj);
    const obj5 = importDefault(3969);
  }
  let tmp10 = null;
  if (null != name) {
    obj = { style: tmp.guildNameContainer };
    obj1 = { guild: invite.guild, style: tmp.featureIcon, disableColor: true };
    const items = [callback2(importDefault(9207), obj1), ];
    obj2 = { style: tmp.guildNameText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: name };
    items[1] = callback2(require(4126) /* Text */.Heading, obj2);
    obj.children = items;
    tmp10 = callback3(View, obj);
  }
  return tmp10;
}
function InviteJoinContext(invite) {
  invite = invite.invite;
  const isGuildMember = invite.isGuildMember;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [invite, isGuildMember];
  const memo = React.useMemo(() => {
    if (obj.isStreamInvite(invite)) {
      if (null != invite.target_user) {
        let userAvatarSource = isGuildMember(outer1_2[19]).getUserAvatarSource(invite.target_user);
        const obj3 = isGuildMember(outer1_2[19]);
      }
      return userAvatarSource;
    }
    userAvatarSource = null;
    if (outer1_19(invite, isGuildMember)) {
      userAvatarSource = null;
      if (null != invite.inviter) {
        userAvatarSource = isGuildMember(outer1_2[19]).getUserAvatarSource(invite.inviter);
        const obj2 = isGuildMember(outer1_2[19]);
      }
    }
  }, items);
  const intl = invite(1212).intl;
  let obj = invite(6977);
  if (obj.isFriendInvite(invite)) {
    const intl7 = tmp4(1212).intl;
    obj = { username: isGuildMember(3969).getFormattedName(invite.inviter) };
    let formatResult = intl7.format(tmp4(1212).t.Quj7HX, obj);
    const obj11 = isGuildMember(3969);
  } else {
    if (tmp4Result.isGroupDMInvite(invite)) {
      if (null != invite.channel) {
        if (null != invite.inviter) {
          const intl6 = invite(1212).intl;
          obj = { username: isGuildMember(3969).getFormattedName(invite.inviter) };
          let formatResult1 = intl6.format(invite(1212).t.Lu4h18, obj);
          const obj9 = isGuildMember(3969);
        }
        formatResult = formatResult1;
      }
      const intl5 = invite(1212).intl;
      formatResult1 = intl5.string(invite(1212).t.OsdY8B);
    } else {
      let obj2 = invite(6977);
      if (obj2.isStreamInvite(invite)) {
        if (null != invite.target_user) {
          const intl4 = invite(1212).intl;
          const obj1 = {};
          let obj6 = isGuildMember(3969);
          obj1.username = obj6.getFormattedName(invite.target_user);
          formatResult = intl4.formatToPlainString(invite(1212).t.x2L32Q, obj1);
        }
      }
      if (isAlreadyMember(invite, isGuildMember)) {
        const intl3 = invite(1212).intl;
        const string = intl3.string;
        const t = invite(1212).t;
        if (invite.isRegistration) {
          let stringResult1 = string(t.jpwYbt);
        } else {
          stringResult1 = string(t["FDsl+J"]);
        }
        formatResult = stringResult1;
      } else {
        let tmp11 = shouldShowInviter(invite, isGuildMember);
        if (tmp11) {
          tmp11 = null != invite.inviter;
        }
        formatResult = stringResult;
        if (tmp11) {
          const intl2 = invite(1212).intl;
          obj2 = {};
          let obj4 = isGuildMember(3969);
          obj2.username = obj4.getFormattedName(invite.inviter);
          formatResult = intl2.format(invite(1212).t.spU2mI, obj2);
        }
      }
    }
    tmp4Result = tmp4(6977);
  }
  let obj3 = { style: tmp.inviteJoinContainer };
  let tmp33 = null;
  if (null != memo) {
    tmp33 = null;
    if (!obj13.isFriendInvite(invite)) {
      obj4 = { style: tmp.inviterIconWrapper };
      const obj5 = { source: memo, style: tmp.inviterIcon };
      obj4.children = callback2(isGuildMember(5085), obj5);
      tmp33 = callback2(View, obj4);
    }
    obj13 = invite(6977);
  }
  const items1 = [tmp33, ];
  obj6 = { style: tmp.inviteJoinText, variant: "text-sm/normal", color: "text-default", children: formatResult };
  items1[1] = callback2(invite(4126).Text, obj6);
  obj3.children = items1;
  return closure_13(View, obj3);
}
function InviteMemberCounts(invite) {
  invite = invite.invite;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = getMemberCountFromInvite(invite);
  let tmp23Result = null;
  if (null != tmp2) {
    tmp23Result = null;
    if (!shouldShowInviter(invite, invite.isGuildMember)) {
      let id;
      if (null != invite) {
        const guild = invite.guild;
        if (null != guild) {
          id = guild.id;
        }
      }
      tmp23Result = null;
      if (id !== closure_11) {
        let obj = { style: tmp.memberInfo };
        let tmp14 = null;
        if (null != tmp2.onlineCount) {
          obj = {};
          obj = { style: tmp.dotOnline };
          const items = [callback2(View, obj), ];
          const obj1 = { variant: "text-xs/medium", color: "text-default" };
          const intl = require(1212) /* getSystemLocale */.intl;
          const obj2 = { membersOnline: tmp2.onlineCount };
          obj1.children = intl.format(require(1212) /* getSystemLocale */.t["LC+S+m"], obj2);
          items[1] = callback2(require(4126) /* Text */.Text, obj1);
          obj.children = items;
          tmp14 = callback3(closure_14, obj);
        }
        const items1 = [tmp14, ];
        let tmp15 = null;
        if (null != tmp2.memberCount) {
          const obj3 = {};
          const obj4 = { style: tmp.dotOffline };
          const items2 = [callback2(View, obj4), ];
          const obj5 = { variant: "text-xs/medium", color: "text-default" };
          const intl2 = require(1212) /* getSystemLocale */.intl;
          const obj6 = { count: tmp2.memberCount };
          obj5.children = intl2.format(require(1212) /* getSystemLocale */.t.zRl6XR, obj6);
          items2[1] = callback2(require(4126) /* Text */.Text, obj5);
          obj3.children = items2;
          tmp15 = callback3(closure_14, obj3);
        }
        items1[1] = tmp15;
        obj.children = items1;
        tmp23Result = callback3(View, obj);
        const tmp23 = callback3;
        const tmp24 = View;
      }
    }
  }
  return tmp23Result;
}
({ AnalyticEvents: closure_9, InviteStates: closure_10 } = ME);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 64, width: 64, margin: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.avatar = _createForOfIteratorHelperLoose;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.none, height: 64, width: 64, marginBottom: 24, marginTop: 24 };
_createForOfIteratorHelperLoose.avatarContainer = obj1;
_createForOfIteratorHelperLoose.inviteJoinContainer = { flexDirection: "row", alignItems: "flex-start", marginBottom: 8, marginLeft: 16, marginRight: 16 };
_createForOfIteratorHelperLoose.inviteJoinText = { textAlign: "center" };
_createForOfIteratorHelperLoose.inviterIconWrapper = { borderRadius: require("_createForOfIteratorHelperLoose").radii.none, marginRight: 8 };
let obj3 = { width: 20, height: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.inviterIcon = obj3;
_createForOfIteratorHelperLoose.guildNameContainer = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.guildNameText = { textAlign: "center" };
let obj4 = { flexGrow: 0, marginRight: 8, opacity: require("result").DARK_1_LIGHT_04 };
_createForOfIteratorHelperLoose.featureIcon = obj4;
_createForOfIteratorHelperLoose.memberInfo = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.rolesList = { marginTop: 8, marginBottom: 8, alignItems: "center" };
let obj5 = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginRight: 4, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
_createForOfIteratorHelperLoose.dotOnline = obj5;
let obj6 = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400 };
_createForOfIteratorHelperLoose.dotOffline = obj6;
let obj7 = { width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginTop: 16, marginBottom: 8 };
_createForOfIteratorHelperLoose.embedDetailsCard = obj7;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_16 = { ACCEPT: 0, [0]: "ACCEPT", DECLINE: 1, [1]: "DECLINE" };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.none, marginRight: 8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/accept_invite/native/InviteDetails.tsx");

export default function InviteDetails(invite) {
  let dependencyMap;
  let importDefault;
  let isGuildMember;
  invite = invite.invite;
  ({ isGuildMember, onPressJoin: importDefault, onPressClose: dependencyMap } = invite);
  let callback;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(stateFromStores.useState(), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  let obj = { invite, isGuildMember, isRegistration: invite.isRegistration };
  const guild_scheduled_event = invite.guild_scheduled_event;
  let obj1 = invite(566);
  const items = [closure_8];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_8.getCurrentUser());
  let obj2 = invite(566);
  const items1 = [_isNativeReflectConstruct];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_6.getCanUseMultiAccountMobile());
  obj = {};
  obj = {};
  const merged = Object.assign(obj);
  const items2 = [callback2(InviteDestinationIcon, obj), , , , , , ];
  obj1 = {};
  const merged1 = Object.assign(obj);
  items2[1] = callback2(InviteJoinContext, obj1);
  obj2 = {};
  const merged2 = Object.assign(obj);
  items2[2] = callback2(InviteHeader, obj2);
  const merged3 = Object.assign(obj);
  items2[3] = callback2(InviteMemberCounts, {});
  items2[4] = callback2(importDefault(11781), { invite, style: tmp.rolesList });
  let tmp12 = null != guild_scheduled_event;
  if (tmp12) {
    const obj5 = { style: tmp.embedDetailsCard };
    const obj6 = { event: guild_scheduled_event };
    const items3 = [callback2(invite(8405).GuildEventCardHeader, obj6), , ];
    const obj7 = { event: guild_scheduled_event };
    items3[1] = callback2(invite(8405).GuildEventCardMetaInfo, obj7);
    const obj8 = { event: guild_scheduled_event };
    items3[2] = callback2(invite(8405).GuildEventCardGuildInfo, obj8);
    obj5.children = items3;
    tmp12 = callback3(View, obj5);
  }
  items2[5] = tmp12;
  const tmp20 = isAlreadyMember(invite, isGuildMember);
  let userAvatarSource = null;
  if (null != stateFromStores) {
    let obj13 = importDefault(1392);
    userAvatarSource = obj13.getUserAvatarSource(stateFromStores, false, 20);
  }
  let tmp24;
  if (null != userAvatarSource) {
    const obj9 = { source: userAvatarSource, variant: "entity" };
    tmp24 = callback2(invite(4543).Button.Icon, obj9);
  }
  if (null != stateFromStores) {
    const intl = invite(1212).intl;
    const obj10 = {
      usernameHook() {
          let str = "";
          if (!stateFromStores.hasUniqueUsername()) {
            const _HermesInternal = HermesInternal;
            str = "#" + stateFromStores.discriminator;
          }
          return "" + stateFromStores.username + str;
        }
    };
    const formatToPlainStringResult = intl.formatToPlainString(invite(1212).t["9sWQNT"], obj10);
  }
  const intl2 = invite(1212).intl;
  if (tmp20) {
    const intl3 = invite(1212).intl;
    let stringResult = intl3.string(invite(1212).t.IRoQXr);
    let tmp33 = stringResult;
  } else {
    if (stateFromStores1) {
      stateFromStores1 = null != formatToPlainStringResult;
    }
    stringResult = tmp31;
    tmp33 = formatToPlainStringResult;
    if (stateFromStores1) {
      stringResult = formatToPlainStringResult;
      tmp33 = formatToPlainStringResult;
    }
  }
  const obj11 = {};
  const obj12 = {
    icon: tmp24,
    variant: "primary",
    size: "lg",
    text: stringResult,
    accessibilityLabel: tmp33,
    onPress: function handleAcceptInvitePress() {
      callback3(outer1_16.ACCEPT);
      callback();
    },
    loading: first === constants2.ACCEPT,
    disabled: first === constants2.ACCEPT
  };
  const items4 = [callback2(invite(4543).Button, obj12), ];
  obj13 = { variant: "secondary", size: "lg" };
  const intl4 = invite(1212).intl;
  const string = intl4.string;
  const t = invite(1212).t;
  if (tmp20) {
    let stringResult1 = string(t.WAI6xu);
  } else {
    stringResult1 = string(t.ndsK4Z);
  }
  obj13.text = stringResult1;
  obj13.onPress = function handleCancelPress() {
    callback3(outer1_16.DECLINE);
    let obj = outer1_1(outer1_2[21]);
    obj = { invite_code: invite.code };
    const guild = invite.guild;
    let id;
    if (null != guild) {
      id = guild.id;
    }
    obj.guild_id = id;
    obj.track(outer1_9.INVITE_ACCEPT_DISMISSED, obj);
    callback2();
  };
  obj13.loading = first === constants2.DECLINE;
  obj13.disabled = first === constants2.DECLINE;
  items4[1] = callback2(invite(4543).Button, obj13);
  obj11.children = items4;
  items2[6] = callback3(invite(4965).ButtonGroup, obj11);
  obj.children = items2;
  return callback3(closure_14, obj);
};
