// Module ID: 11741
// Function ID: 91192
// Name: getMemberCountFromInvite
// Dependencies: []
// Exports: default

// Module 11741 (getMemberCountFromInvite)
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
  const tmp = callback4();
  let obj = { style: items };
  const items = [tmp.avatarContainer];
  if (obj2.isGroupDMInvite(invite)) {
    if (null != invite.inviter) {
      let tmp10 = null;
      if (null != invite.inviter) {
        obj = { avatarStyle: tmp.avatar };
        const prototype = ctor.prototype;
        const tmp17 = new ctor(invite.inviter);
        obj.user = tmp17;
        obj.guildId = undefined;
        obj.size = arg1(dependencyMap[13]).AvatarSizes.XLARGE;
        tmp10 = callback2(arg1(dependencyMap[13]).Avatar, obj);
      }
      let tmp5 = tmp10;
    }
    obj.children = tmp5;
    return callback2(View, obj);
  }
  tmp5 = null;
  if (null != invite.guild) {
    obj = { style: tmp.avatar, guild: invite.guild, size: importDefault(dependencyMap[14]).Sizes.LARGE, textScale: 2 };
    tmp5 = callback2(importDefault(dependencyMap[14]), obj);
    const tmp9 = importDefault(dependencyMap[14]);
  }
}
function InviteHeader(invite) {
  invite = invite.invite;
  const tmp = callback4();
  let obj = arg1(dependencyMap[12]);
  if (obj.isGroupDMInvite(invite)) {
    const channel = invite.channel;
    let name;
    if (null != channel) {
      name = channel.name;
    }
    if (null == name) {
      let obj1 = importDefault(dependencyMap[15]);
      name = obj1.getFormattedName(invite.inviter);
    }
  } else {
    const guild = invite.guild;
    if (null != guild) {
      name = guild.name;
    }
  }
  let obj2 = arg1(dependencyMap[12]);
  if (obj2.isFriendInvite(invite)) {
    const intl = arg1(dependencyMap[16]).intl;
    obj = { username: importDefault(dependencyMap[15]).getFormattedName(invite.inviter) };
    name = intl.formatToPlainString(arg1(dependencyMap[16]).t.4aF92R, obj);
    const obj5 = importDefault(dependencyMap[15]);
  }
  let tmp10 = null;
  if (null != name) {
    obj = { style: tmp.guildNameContainer };
    obj1 = { guild: invite.guild, style: tmp.featureIcon, disableColor: true };
    const items = [callback2(importDefault(dependencyMap[17]), obj1), ];
    obj2 = { style: tmp.guildNameText, children: name };
    items[1] = callback2(arg1(dependencyMap[18]).Heading, obj2);
    obj.children = items;
    tmp10 = callback3(View, obj);
  }
  return tmp10;
}
function InviteJoinContext(invite) {
  invite = invite.invite;
  const arg1 = invite;
  const isGuildMember = invite.isGuildMember;
  const importDefault = isGuildMember;
  const tmp = callback4();
  const items = [invite, isGuildMember];
  const memo = React.useMemo(() => {
    if (obj.isStreamInvite(invite)) {
      if (null != invite.target_user) {
        let userAvatarSource = isGuildMember(closure_2[19]).getUserAvatarSource(invite.target_user);
        const obj3 = isGuildMember(closure_2[19]);
      }
      return userAvatarSource;
    }
    userAvatarSource = null;
    if (callback(invite, isGuildMember)) {
      userAvatarSource = null;
      if (null != invite.inviter) {
        userAvatarSource = isGuildMember(closure_2[19]).getUserAvatarSource(invite.inviter);
        const obj2 = isGuildMember(closure_2[19]);
      }
    }
  }, items);
  const intl = arg1(dependencyMap[16]).intl;
  let obj = arg1(dependencyMap[12]);
  if (obj.isFriendInvite(invite)) {
    const intl7 = tmp4(tmp5[16]).intl;
    obj = { username: importDefault(tmp5[15]).getFormattedName(invite.inviter) };
    let formatResult = intl7.format(tmp4(tmp5[16]).t.Quj7HX, obj);
    const obj11 = importDefault(tmp5[15]);
  } else {
    if (tmp4Result.isGroupDMInvite(invite)) {
      if (null != invite.channel) {
        if (null != invite.inviter) {
          const intl6 = arg1(dependencyMap[16]).intl;
          obj = { username: importDefault(dependencyMap[15]).getFormattedName(invite.inviter) };
          let formatResult1 = intl6.format(arg1(dependencyMap[16]).t.Lu4h18, obj);
          const obj9 = importDefault(dependencyMap[15]);
        }
        formatResult = formatResult1;
      }
      const intl5 = arg1(dependencyMap[16]).intl;
      formatResult1 = intl5.string(arg1(dependencyMap[16]).t.OsdY8B);
    } else {
      let obj2 = arg1(dependencyMap[12]);
      if (obj2.isStreamInvite(invite)) {
        if (null != invite.target_user) {
          const intl4 = arg1(dependencyMap[16]).intl;
          const obj1 = {};
          let obj6 = importDefault(dependencyMap[15]);
          obj1.username = obj6.getFormattedName(invite.target_user);
          formatResult = intl4.formatToPlainString(arg1(dependencyMap[16]).t.x2L32Q, obj1);
        }
      }
      if (isAlreadyMember(invite, isGuildMember)) {
        const intl3 = arg1(dependencyMap[16]).intl;
        const string = intl3.string;
        const t = arg1(dependencyMap[16]).t;
        if (invite.isRegistration) {
          let stringResult1 = string(t.jpwYbt);
        } else {
          stringResult1 = string(t.FDsl+J);
        }
        formatResult = stringResult1;
      } else {
        let tmp11 = shouldShowInviter(invite, isGuildMember);
        if (tmp11) {
          tmp11 = null != invite.inviter;
        }
        formatResult = stringResult;
        if (tmp11) {
          const intl2 = arg1(dependencyMap[16]).intl;
          obj2 = {};
          let obj4 = importDefault(dependencyMap[15]);
          obj2.username = obj4.getFormattedName(invite.inviter);
          formatResult = intl2.format(arg1(dependencyMap[16]).t.spU2mI, obj2);
        }
      }
    }
    const tmp4Result = tmp4(tmp5[12]);
  }
  const obj3 = { style: tmp.inviteJoinContainer };
  let tmp33 = null;
  if (null != memo) {
    tmp33 = null;
    if (!obj13.isFriendInvite(invite)) {
      obj4 = { style: tmp.inviterIconWrapper };
      const obj5 = { source: memo, style: tmp.inviterIcon };
      obj4.children = callback2(importDefault(dependencyMap[20]), obj5);
      tmp33 = callback2(View, obj4);
    }
    const obj13 = arg1(dependencyMap[12]);
  }
  const items1 = [tmp33, ];
  obj6 = { "Null": "xs", "Null": "interactive-text-default", "Null": "md", style: tmp.inviteJoinText, children: formatResult };
  items1[1] = callback2(arg1(dependencyMap[18]).Text, obj6);
  obj3.children = items1;
  return closure_13(View, obj3);
}
function InviteMemberCounts(invite) {
  invite = invite.invite;
  const tmp = callback4();
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
          const obj1 = {};
          const intl = arg1(dependencyMap[16]).intl;
          const obj2 = { membersOnline: tmp2.onlineCount };
          obj1.children = intl.format(arg1(dependencyMap[16]).t.LC+S+m, obj2);
          items[1] = callback2(arg1(dependencyMap[18]).Text, obj1);
          obj.children = items;
          tmp14 = callback3(closure_14, obj);
        }
        const items1 = [tmp14, ];
        let tmp15 = null;
        if (null != tmp2.memberCount) {
          const obj3 = {};
          const obj4 = { style: tmp.dotOffline };
          const items2 = [callback2(View, obj4), ];
          const obj5 = {};
          const intl2 = arg1(dependencyMap[16]).intl;
          const obj6 = { count: tmp2.memberCount };
          obj5.children = intl2.format(arg1(dependencyMap[16]).t.zRl6XR, obj6);
          items2[1] = callback2(arg1(dependencyMap[18]).Text, obj5);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ AnalyticEvents: closure_9, InviteStates: closure_10 } = arg1(dependencyMap[6]));
let closure_11 = arg1(dependencyMap[7]).INVITE_ROUTING_HUB_GUILD_ID;
const tmp2 = arg1(dependencyMap[6]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[10]).radii.lg };
obj.avatar = obj;
const tmp3 = arg1(dependencyMap[8]);
obj.avatarContainer = { borderRadius: importDefault(dependencyMap[10]).radii.none };
obj.inviteJoinContainer = { darkStaticUrl: "/assets/images/native/stream_feedback/light-theme-desaturated", ad_content_id: 64, announcement_modal_config: 64, isVideoAssetHash: null, spotlight: "69e9e79e44fff2fca6c7a210e9bf5b9f" };
obj.inviteJoinText = { textAlign: "center" };
const obj1 = { borderRadius: importDefault(dependencyMap[10]).radii.none };
obj.inviterIconWrapper = { borderRadius: importDefault(dependencyMap[10]).radii.none, marginRight: 8 };
const obj3 = { bhk: false, bic: "internal", borderRadius: importDefault(dependencyMap[10]).radii.md };
obj.inviterIcon = obj3;
obj.guildNameContainer = {};
obj.guildNameText = { textAlign: "center" };
const obj2 = { borderRadius: importDefault(dependencyMap[10]).radii.none, marginRight: 8 };
obj.featureIcon = { opacity: arg1(dependencyMap[11]).DARK_1_LIGHT_04 };
obj.memberInfo = {};
obj.rolesList = { color: 800, variant: 16, style: 20 };
const obj4 = { opacity: arg1(dependencyMap[11]).DARK_1_LIGHT_04 };
obj.dotOnline = { borderRadius: importDefault(dependencyMap[10]).radii.sm, backgroundColor: importDefault(dependencyMap[10]).unsafe_rawColors.GREEN_360 };
const obj5 = { borderRadius: importDefault(dependencyMap[10]).radii.sm, backgroundColor: importDefault(dependencyMap[10]).unsafe_rawColors.GREEN_360 };
obj.dotOffline = { borderRadius: importDefault(dependencyMap[10]).radii.sm, backgroundColor: importDefault(dependencyMap[10]).unsafe_rawColors.PRIMARY_400 };
const obj7 = { justifyContent: null, alignItems: 10, padding: "grab", width: null, height: "\u{1F91F}\u{1F3FF}", flex: true, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[10]).radii.sm };
obj.embedDetailsCard = obj7;
let closure_15 = obj.createStyles(obj);
let closure_16 = { ACCEPT: 0, [0]: "ACCEPT", DECLINE: 1, [1]: "DECLINE" };
const obj6 = { borderRadius: importDefault(dependencyMap[10]).radii.sm, backgroundColor: importDefault(dependencyMap[10]).unsafe_rawColors.PRIMARY_400 };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/accept_invite/native/InviteDetails.tsx");

export default function InviteDetails(invite) {
  let isGuildMember;
  invite = invite.invite;
  const arg1 = invite;
  ({ isGuildMember, onPressJoin: closure_1, onPressClose: closure_2 } = invite);
  let callback;
  const tmp = callback4();
  const tmp2 = callback(React.useState(), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  let obj = { invite, isGuildMember, isRegistration: invite.isRegistration };
  const guild_scheduled_event = invite.guild_scheduled_event;
  let obj1 = arg1(dependencyMap[22]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const React = stateFromStores;
  let obj2 = arg1(dependencyMap[22]);
  const items1 = [closure_6];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile());
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
  items2[4] = callback2(importDefault(dependencyMap[23]), { invite, style: tmp.rolesList });
  let tmp12 = null != guild_scheduled_event;
  if (tmp12) {
    const obj5 = { style: tmp.embedDetailsCard };
    const obj6 = { event: guild_scheduled_event };
    const items3 = [callback2(arg1(dependencyMap[24]).GuildEventCardHeader, obj6), , ];
    const obj7 = { event: guild_scheduled_event };
    items3[1] = callback2(arg1(dependencyMap[24]).GuildEventCardMetaInfo, obj7);
    const obj8 = { event: guild_scheduled_event };
    items3[2] = callback2(arg1(dependencyMap[24]).GuildEventCardGuildInfo, obj8);
    obj5.children = items3;
    tmp12 = callback3(View, obj5);
  }
  items2[5] = tmp12;
  const tmp20 = isAlreadyMember(invite, isGuildMember);
  let userAvatarSource = null;
  if (null != stateFromStores) {
    let obj13 = importDefault(dependencyMap[19]);
    userAvatarSource = obj13.getUserAvatarSource(stateFromStores, false, 20);
  }
  let tmp24;
  if (null != userAvatarSource) {
    const obj9 = { source: userAvatarSource, variant: "entity" };
    tmp24 = callback2(arg1(dependencyMap[25]).Button.Icon, obj9);
  }
  if (null != stateFromStores) {
    const intl = arg1(dependencyMap[16]).intl;
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
    const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[16]).t.9sWQNT, obj10);
  }
  const intl2 = arg1(dependencyMap[16]).intl;
  if (tmp20) {
    const intl3 = arg1(dependencyMap[16]).intl;
    let stringResult = intl3.string(arg1(dependencyMap[16]).t.IRoQXr);
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
    <string:1454006884>: "RBTree",
    <string:3620889915>: "currentEmbeddedApplication",
    <string:1388749051>: "SyntaxError",
    icon: tmp24,
    text: stringResult,
    accessibilityLabel: tmp33,
    onPress: function handleAcceptInvitePress() {
      callback3(constants2.ACCEPT);
      callback();
    },
    loading: first === constants2.ACCEPT,
    disabled: first === constants2.ACCEPT
  };
  const items4 = [callback2(arg1(dependencyMap[25]).Button, obj12), ];
  obj13 = { 9223372036854775807: false, -9223372036854775808: false };
  const intl4 = arg1(dependencyMap[16]).intl;
  const string = intl4.string;
  const t = arg1(dependencyMap[16]).t;
  if (tmp20) {
    let stringResult1 = string(t.WAI6xu);
  } else {
    stringResult1 = string(t.ndsK4Z);
  }
  obj13.text = stringResult1;
  obj13.onPress = function handleCancelPress() {
    callback3(constants2.DECLINE);
    let obj = callback(callback2[21]);
    obj = { invite_code: invite.code };
    const guild = invite.guild;
    let id;
    if (null != guild) {
      id = guild.id;
    }
    obj.guild_id = id;
    obj.track(constants.INVITE_ACCEPT_DISMISSED, obj);
    callback2();
  };
  obj13.loading = first === constants2.DECLINE;
  obj13.disabled = first === constants2.DECLINE;
  items4[1] = callback2(arg1(dependencyMap[25]).Button, obj13);
  obj11.children = items4;
  items2[6] = callback3(arg1(dependencyMap[26]).ButtonGroup, obj11);
  obj.children = items2;
  return callback3(closure_14, obj);
};
