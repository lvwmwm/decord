// Module ID: 6973
// Function ID: 55728
// Name: isGroupDMInvite
// Dependencies: []
// Exports: getGuildInviteExtendedType, getInviteType, isRoleSubscriptionInvite, isStreamInvite

// Module 6973 (isGroupDMInvite)
function isGroupDMInvite(invite) {
  let tmp = invite.type === constants2.GROUP_DM;
  if (!tmp) {
    let tmp3 = null != invite.channel;
    if (tmp3) {
      tmp3 = callback2(invite.channel.type);
    }
    tmp = tmp3;
  }
  return tmp;
}
function isGuildScheduledEventInviteEmbed(invite) {
  const guild_scheduled_event = invite.guild_scheduled_event;
  let tmp = null != guild_scheduled_event;
  if (tmp) {
    tmp = isEventUpcoming(guild_scheduled_event);
  }
  return tmp;
}
function isFriendInvite(invite) {
  let tmp = invite.type === constants2.FRIEND;
  if (!tmp) {
    tmp = null == invite.guild && null != invite.inviter;
    const tmp3 = null == invite.guild && null != invite.inviter;
  }
  return tmp;
}
function isEmbeddedApplicationInvite(invite) {
  return invite.target_type === constants.EMBEDDED_APPLICATION;
}
function isVoiceChannelInvite(value) {
  let tmp = null != value.channel;
  if (tmp) {
    tmp = callback(value.channel.type);
  }
  return tmp;
}
const isEventUpcoming = require(dependencyMap[0]).isEventUpcoming;
const _module = require(dependencyMap[1]);
({ isGuildVocalChannelType: closure_3, isMultiUserDM: closure_4 } = _module);
const _module1 = require(dependencyMap[2]);
({ InviteTargetTypes: closure_5, InviteTypes: closure_6 } = _module1);
const obj = { EVENT: "event", APPLICATION: "application", PROFILE: "profile", DEFAULT: "default", VOICE_CHANNEL: "voice_channel" };
const _module2 = require(dependencyMap[4]);
const result = _module2.fileFinishedImporting("modules/instant_invite/InviteTypeUtils.tsx");

export const InviteTypes = require(dependencyMap[2]).InviteTypes;
export { isGroupDMInvite };
export { isGuildScheduledEventInviteEmbed };
export const isRoleSubscriptionInvite = function isRoleSubscriptionInvite(invite) {
  return invite.target_type === constants.ROLE_SUBSCRIPTIONS_PURCHASE;
};
export const isStreamInvite = function isStreamInvite(invite) {
  let tmp = invite.target_type === constants.STREAM;
  if (tmp) {
    tmp = null != invite.target_user;
  }
  return tmp;
};
export { isFriendInvite };
export { isEmbeddedApplicationInvite };
export { isVoiceChannelInvite };
export const getInviteType = function getInviteType(invite) {
  if ("number" === typeof invite.type) {
    let GROUP_DM = invite.type;
  } else if (isGroupDMInvite(invite)) {
    GROUP_DM = constants2.GROUP_DM;
  } else {
    GROUP_DM = isFriendInvite(invite) ? tmp3.FRIEND : tmp3.GUILD;
  }
  return GROUP_DM;
};
export const GuildInviteExtendedType = obj;
export const getGuildInviteExtendedType = function getGuildInviteExtendedType(invite) {
  if (isGuildScheduledEventInviteEmbed(invite)) {
    let PROFILE = obj.EVENT;
  } else if (isEmbeddedApplicationInvite(invite)) {
    PROFILE = obj.APPLICATION;
  } else {
    const obj = require(dependencyMap[3]);
    if (obj.guildInviteCanEmbedProfile(invite)) {
      PROFILE = obj.PROFILE;
    } else {
      PROFILE = isVoiceChannelInvite(invite) ? tmp5.VOICE_CHANNEL : tmp5.DEFAULT;
    }
  }
  return PROFILE;
};
