// Module ID: 7878
// Function ID: 7879
// Name: InviteTypeUtils
// Dependencies: [6855, 4867, 7879, 7880, 7881, 2]
// Exports: getGuildInviteExtendedType, getInviteType, isEmbeddedApplicationInvite, isFriendInvite, isGroupDMInvite, isGuildScheduledEventInviteEmbed, isRoleSubscriptionInvite, isStreamInvite, isVoiceChannelInvite

// Module 7878 (InviteTypeUtils)
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6855 */;
import Constants from "Constants" /* 7879 */;
import InviteTargetTypes from "InviteTargetTypes" /* 7880 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const isEventUpcoming = GuildScheduledEventStore.isEventUpcoming;
({ isGuildVocalChannelType: c3, isMultiUserDM: closure_4 } = ChannelRecord);
const GuildInviteExtendedType = { EVENT: "event", APPLICATION: "application", PROFILE: "profile", DEFAULT: "default", VOICE_CHANNEL: "voice_channel" };
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/instant_invite/InviteTypeUtils.tsx");

export { InviteTypes };
export function isGroupDMInvite(invite) {
  let tmp = invite.type === InviteTypes.GROUP_DM;
  if (!tmp) {
    tmp = null != invite.channel && React3(invite.channel.type);
    const tmp3 = null != invite.channel && React3(invite.channel.type);
  }
  return tmp;
}
export function isGuildScheduledEventInviteEmbed(invite) {
  const guild_scheduled_event = invite.guild_scheduled_event;
  const tmp = null != guild_scheduled_event && isEventUpcoming(guild_scheduled_event);
  return tmp;
}
export function isRoleSubscriptionInvite(target_type) {
  return target_type.target_type === InviteTargetTypes.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE;
}
export function isStreamInvite(invite) {
  const tmp = invite.target_type === InviteTargetTypes.InviteTargetTypes.STREAM && null != invite.target_user;
  return tmp;
}
export function isFriendInvite(invite) {
  let tmp = invite.type === InviteTypes.FRIEND;
  if (!tmp) {
    tmp = null == invite.guild && null != invite.inviter;
  }
  return tmp;
}
export function isEmbeddedApplicationInvite(invite) {
  return invite.target_type === InviteTargetTypes.InviteTargetTypes.EMBEDDED_APPLICATION;
}
export function isVoiceChannelInvite(channel) {
  const tmp = null != channel.channel && _false(channel.channel.type);
  return tmp;
}
export function getInviteType(body) {
  let GROUP_DM;
  if (typeof body.type === "number") {
    GROUP_DM = body.type;
  } else {
    let tmp4 = body.type === InviteTypes.GROUP_DM;
    if (!tmp4) {
      tmp4 = null != body.channel && React3(body.channel.type);
      const tmp2 = null != body.channel && React3(body.channel.type);
    }
    if (tmp4) {
      GROUP_DM = tmp8.GROUP_DM;
    } else {
      let tmp5 = body.type === tmp8.FRIEND;
      if (!tmp5) {
        tmp5 = null == body.guild && null != body.inviter;
      }
      GROUP_DM = tmp5 ? tmp8.FRIEND : tmp8.GUILD;
    }
  }
  return GROUP_DM;
}
export { GuildInviteExtendedType };
export function getGuildInviteExtendedType(invite) {
  let PROFILE;
  const guild_scheduled_event = invite.guild_scheduled_event;
  const tmp = null != guild_scheduled_event && isEventUpcoming(guild_scheduled_event);
  if (tmp) {
    PROFILE = obj.EVENT;
  } else {
    const tmp3 = require;
    if (invite.target_type === InviteTargetTypes.InviteTargetTypes.EMBEDDED_APPLICATION) {
      PROFILE = obj.APPLICATION;
    } else {
      const tmp3Result = tmp3(7881);
      if (tmp3Result.guildInviteCanEmbedProfile(invite)) {
        PROFILE = obj.PROFILE;
      } else {
        PROFILE = null != invite.channel && _false(invite.channel.type) ? tmp7.VOICE_CHANNEL : tmp7.DEFAULT;
        const tmp5 = null != invite.channel && _false(invite.channel.type);
      }
    }
  }
  return PROFILE;
}
