// Module ID: 7732
// Function ID: 61493
// Name: getMessageContent
// Dependencies: [6692, 3948, 1838, 1849, 653, 1212, 21, 7652, 2]
// Exports: createJoinRequestNotificationSystemMessage

// Module 7732 (getMessageContent)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import { MessageTypes } from "ME";

const require = arg1;
function getMessageContent(arg0, username, guildName) {
  if (MessageTypes.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION === arg0) {
    if (null != username) {
      if (null != guildName) {
        const intl6 = require(1212) /* getSystemLocale */.intl;
        let obj = { username, guildName };
        let formatToPartsResult = intl6.formatToParts(require(1212) /* getSystemLocale */.t.EloBG4, obj);
      }
      return formatToPartsResult;
    }
    const intl5 = require(1212) /* getSystemLocale */.intl;
    formatToPartsResult = intl5.string(require(1212) /* getSystemLocale */.t["2VLV0d"]);
  } else if (MessageTypes.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION === arg0) {
    if (null != username) {
      if (null != guildName) {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        obj = { username, guildName };
        let formatToPartsResult1 = intl4.formatToParts(require(1212) /* getSystemLocale */.t["UGN/Yy"], obj);
      }
      return formatToPartsResult1;
    }
    const intl3 = require(1212) /* getSystemLocale */.intl;
    formatToPartsResult1 = intl3.string(require(1212) /* getSystemLocale */.t.FVF6qU);
  } else if (MessageTypes.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION === arg0) {
    if (null != username) {
      if (null != guildName) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj = { username, guildName };
        let formatToPartsResult2 = intl2.formatToParts(require(1212) /* getSystemLocale */.t.u4movT, obj);
      }
      return formatToPartsResult2;
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    formatToPartsResult2 = intl.string(require(1212) /* getSystemLocale */.t.BMlbE7);
  } else {
    return "";
  }
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx");

export const createJoinRequestNotificationSystemMessage = function createJoinRequestNotificationSystemMessage(message) {
  message = message.message;
  let obj = importDefault(21);
  request = request.getRequest(obj.cast(message.channel_id));
  let tmp2;
  if (null != request) {
    guild = guild.getGuild(request.guildId);
    if (null == guild) {
      guild = joinRequestGuild.getJoinRequestGuild(request.guildId);
    }
    tmp2 = guild;
  }
  let userId;
  if (null != request) {
    userId = request.userId;
  }
  user = user.getUser(userId);
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
  const merged = Object.assign(importDefault(7652)(message));
  return obj;
};
