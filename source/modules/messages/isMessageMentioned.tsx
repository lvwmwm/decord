// Module ID: 4365
// Function ID: 38703
// Name: isMentioned
// Dependencies: [1348, 1917, 1838, 2]
// Exports: default, isRawMessageMentioned

// Module 4365 (isMentioned)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

function isMentioned(suppressRoles) {
  let channelId;
  let mentionEveryone;
  let mentionRoles;
  let mentionUsers;
  let suppressEveryone;
  let userId;
  ({ userId, mentionUsers, mentionRoles, suppressEveryone } = suppressRoles);
  ({ channelId, mentionEveryone } = suppressRoles);
  if (suppressEveryone === undefined) {
    suppressEveryone = false;
  }
  let flag = suppressRoles.suppressRoles;
  if (flag === undefined) {
    flag = false;
  }
  let member;
  if (mentionEveryone) {
    if (!suppressEveryone) {
      return true;
    }
  }
  if (mentionUsers.includes(userId)) {
    return true;
  } else {
    if (!flag) {
      if (null != mentionRoles) {
        if (0 !== mentionRoles.length) {
          const channel = member.getChannel(channelId);
          if (null == channel) {
            return false;
          } else {
            const guildId = channel.getGuildId();
            if (null == guildId) {
              return false;
            } else if (null == guild.getGuild(guildId)) {
              return false;
            } else {
              member = member.getMember(guildId, userId);
              return null != member && mentionRoles.some((arg0) => {
                const roles = member.roles;
                return roles.includes(arg0);
              });
            }
          }
        }
      }
    }
    return false;
  }
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/isMessageMentioned.tsx");

export default function isMessageMentioned(suppressRoles) {
  let message;
  let suppressEveryone;
  ({ message, suppressEveryone } = suppressRoles);
  if (suppressEveryone === undefined) {
    suppressEveryone = false;
  }
  let flag = suppressRoles.suppressRoles;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { userId: suppressRoles.userId, channelId: message.channel_id, mentionEveryone: message.mentionEveryone, mentionUsers: message.mentions, mentionRoles: message.mentionRoles, suppressEveryone, suppressRoles: flag };
  return isMentioned(obj);
};
export const isRawMessageMentioned = function isRawMessageMentioned(suppressRoles) {
  let rawMessage;
  let suppressEveryone;
  ({ rawMessage, suppressEveryone } = suppressRoles);
  if (suppressEveryone === undefined) {
    suppressEveryone = false;
  }
  let flag = suppressRoles.suppressRoles;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { userId: suppressRoles.userId, channelId: rawMessage.channel_id };
  const mention_everyone = rawMessage.mention_everyone;
  let tmp2 = null != mention_everyone;
  if (tmp2) {
    tmp2 = mention_everyone;
  }
  obj.mentionEveryone = tmp2;
  const mentions = rawMessage.mentions;
  let mapped;
  if (null != mentions) {
    mapped = mentions.map((id) => id.id);
  }
  if (null == mapped) {
    mapped = [];
  }
  obj.mentionUsers = mapped;
  let mention_roles = rawMessage.mention_roles;
  if (null == mention_roles) {
    mention_roles = [];
  }
  obj.mentionRoles = mention_roles;
  obj.suppressEveryone = suppressEveryone;
  obj.suppressRoles = flag;
  return isMentioned(obj);
};
export { isMentioned };
