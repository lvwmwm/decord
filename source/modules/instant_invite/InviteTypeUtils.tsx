// Module ID: 6977
// Function ID: 55782
// Name: isGroupDMInvite
// Dependencies: [6758, 1352, 6978, 6979, 2]
// Exports: getGuildInviteExtendedType, getInviteType, isRoleSubscriptionInvite, isStreamInvite

// Module 6977 (isGroupDMInvite)
import { isEventUpcoming } from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import InviteSendStates from "InviteSendStates";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
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
({ isGuildVocalChannelType: closure_3, isMultiUserDM: closure_4 } = _callSuper);
({ InviteTargetTypes: closure_5, InviteTypes: closure_6 } = InviteSendStates);
let obj = { EVENT: "event", APPLICATION: "application", PROFILE: "profile", DEFAULT: "default", VOICE_CHANNEL: "voice_channel" };
const result = require("InviteSendStates").fileFinishedImporting("modules/instant_invite/InviteTypeUtils.tsx");

export const InviteTypes = require("InviteSendStates").InviteTypes;
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
    obj = require(6979) /* getEstablishedDate */;
    if (obj.guildInviteCanEmbedProfile(invite)) {
      PROFILE = obj.PROFILE;
    } else {
      PROFILE = isVoiceChannelInvite(invite) ? tmp5.VOICE_CHANNEL : tmp5.DEFAULT;
    }
  }
  return PROFILE;
};
