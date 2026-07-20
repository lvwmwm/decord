// Module ID: 4357
// Function ID: 38606
// Name: isMentioned
// Dependencies: []
// Exports: default, isRawMessageMentioned

// Module 4357 (isMentioned)
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
  let channel;
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
          channel = channel.getChannel(channelId);
          if (null == channel) {
            return false;
          } else {
            const guildId = channel.getGuildId();
            if (null == guildId) {
              return false;
            } else if (null == guild.getGuild(guildId)) {
              return false;
            } else {
              const member = member.getMember(guildId, userId);
              channel = member;
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/messages/isMessageMentioned.tsx");

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
