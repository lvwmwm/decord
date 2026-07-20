// Module ID: 7721
// Function ID: 61422
// Name: getMessageContent
// Dependencies: []
// Exports: createJoinRequestNotificationSystemMessage

// Module 7721 (getMessageContent)
function getMessageContent(arg0, username, guildName) {
  if (MessageTypes.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION === arg0) {
    if (null != username) {
      if (null != guildName) {
        const intl6 = username(dependencyMap[5]).intl;
        let obj = { username, guildName };
        let formatToPartsResult = intl6.formatToParts(username(dependencyMap[5]).t.EloBG4, obj);
      }
      return formatToPartsResult;
    }
    const intl5 = username(dependencyMap[5]).intl;
    formatToPartsResult = intl5.string(username(dependencyMap[5]).t.2VLV0d);
  } else if (MessageTypes.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION === arg0) {
    if (null != username) {
      if (null != guildName) {
        const intl4 = username(dependencyMap[5]).intl;
        obj = { username, guildName };
        let formatToPartsResult1 = intl4.formatToParts(username(dependencyMap[5]).t.UGN/Yy, obj);
      }
      return formatToPartsResult1;
    }
    const intl3 = username(dependencyMap[5]).intl;
    formatToPartsResult1 = intl3.string(username(dependencyMap[5]).t.FVF6qU);
  } else if (MessageTypes.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION === arg0) {
    if (null != username) {
      if (null != guildName) {
        const intl2 = username(dependencyMap[5]).intl;
        obj = { username, guildName };
        let formatToPartsResult2 = intl2.formatToParts(username(dependencyMap[5]).t.u4movT, obj);
      }
      return formatToPartsResult2;
    }
    const intl = username(dependencyMap[5]).intl;
    formatToPartsResult2 = intl.string(username(dependencyMap[5]).t.BMlbE7);
  } else {
    return "";
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const MessageTypes = arg1(dependencyMap[4]).MessageTypes;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx");

export const createJoinRequestNotificationSystemMessage = function createJoinRequestNotificationSystemMessage(message) {
  message = message.message;
  let obj = importDefault(dependencyMap[6]);
  const request = request.getRequest(obj.cast(message.channel_id));
  let tmp2;
  if (null != request) {
    let guild = guild.getGuild(request.guildId);
    if (null == guild) {
      guild = joinRequestGuild.getJoinRequestGuild(request.guildId);
    }
    tmp2 = guild;
  }
  let userId;
  if (null != request) {
    userId = request.userId;
  }
  let user = user.getUser(userId);
  let username;
  if (null != user) {
    username = user.username;
  }
  if (null == username) {
    let username1;
    if (null != request) {
      user = request.user;
      if (null != user) {
        username1 = user.username;
      }
    }
    username = username1;
  }
  obj = {};
  let name;
  if (null != tmp2) {
    name = tmp2.name;
  }
  obj.content = getMessageContent(message.type, username, name);
  const merged = Object.assign(importDefault(dependencyMap[7])(message));
  return obj;
};
