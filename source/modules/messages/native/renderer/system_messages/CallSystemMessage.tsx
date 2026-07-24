// Module ID: 7755
// Function ID: 61575
// Name: createCallSystemMessage
// Dependencies: [4143, 1194, 4146, 653, 4148, 7756, 7757, 1212, 1395, 3800, 7741, 2]
// Exports: createCallSystemMessage

// Module 7755 (createCallSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { ME } from "ME";
import { ParticipantTypes } from "ParticipantTypes";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/system_messages/CallSystemMessage.tsx");

export const createCallSystemMessage = function createCallSystemMessage(message) {
  message = message.message;
  id = id.getId();
  const channelId = message.getChannelId();
  const call = message.call;
  userVoiceChannelId = userVoiceChannelId.getUserVoiceChannelId(ME, id);
  const tmp4 = importDefault(7756)(message);
  participants = participants.getParticipants(channelId);
  let obj = require(7757) /* checkIsCallActive */;
  const checkIsCallActiveResult = obj.checkIsCallActive(channelId, message.id);
  let tmp6 = !checkIsCallActiveResult;
  if (tmp6) {
    tmp6 = null != call;
  }
  if (tmp6) {
    const participants1 = call.participants;
    tmp6 = -1 === participants1.indexOf(id);
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        str2 = intl3.string(require(1212) /* getSystemLocale */.t.DqA3mi);
      } else {
        str2 = "";
      }
    }
    const found = participants.filter((type) => type.type === outer1_7.USER && !type.ringing);
    let mapped = found.map((user) => {
      user = user.user;
      return outer1_0(outer1_2[8]).ensureAvatarSource(user.getAvatarSource(undefined)).uri;
    });
    let formatToPlainStringResult = str2;
    let stringResult1 = string(t["NGg/fm"]);
    const stringResult = string(t["NGg/fm"]);
  } else {
    if (tmp6) {
      stringResult1 = string(t["2CnhoI"]);
    } else {
      stringResult1 = string(t.v05Xd6);
    }
    if (null != tmp4) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = { duration: tmp4, timestamp: require(3800) /* resetCache */.calendarFormat(message.timestamp) };
      formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.SBDnp1, obj);
      const obj4 = require(3800) /* resetCache */;
    } else {
      formatToPlainStringResult = require(3800) /* resetCache */.calendarFormat(message.timestamp);
      const obj2 = require(3800) /* resetCache */;
    }
    const author = message.author;
    mapped = [require(1395) /* ensureAvatarSource */.ensureAvatarSource(author.getAvatarSource(undefined)).uri];
    const obj5 = require(1395) /* ensureAvatarSource */;
  }
  obj = { title: stringResult1, description: formatToPlainStringResult, isCallActive: checkIsCallActiveResult, missed: tmp6, avatarURLs: mapped };
  const timestamp = message.timestamp;
  obj.rawMilliseconds = timestamp.valueOf();
  const merged = Object.assign(importDefault(7741)(message));
  return obj;
};
