// Module ID: 8274
// Function ID: 8275
// Name: CallSystemMessage
// Dependencies: [4806, 502, 4809, 1078, 4811, 8275, 8276, 1119, 1404, 4474, 8259, 2]
// Exports: createCallSystemMessage

// Module 8274 (CallSystemMessage)
import utils_AvatarUtils from "utils/AvatarUtils" /* 1404 */;
import createCommonMessageDefault from "createCommonMessage" /* 8259 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8275 */;
import useIsCallActive from "useIsCallActive" /* 8276 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4806 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 4809 */;

require = fn;
const ME = fn(1078).ME;
const ParticipantTypes = fn(4811).ParticipantTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/CallSystemMessage.tsx");

export const createCallSystemMessage = function createCallSystemMessage(message) {
  message = message.message;
  const id = AuthenticationStore.getId();
  const channelId = message.getChannelId();
  const call = message.call;
  const userVoiceChannelId = VoiceStateStore.getUserVoiceChannelId(ME, id);
  const tmp6 = getHumanizedCallDurationDefault(message);
  const participants = ChannelRTCStore.getParticipants(channelId);
  const checkIsCallActiveResult = useIsCallActive.checkIsCallActive(channelId, message.id);
  let tmp9 = !checkIsCallActiveResult;
  if (!checkIsCallActiveResult) {
    tmp9 = null != call;
  }
  if (tmp9) {
    const participants1 = call.participants;
    tmp9 = -1 === participants1.indexOf(id);
  }
  const intl = tmp7(1119).intl;
  const string = intl.string;
  const t = tmp7(1119).t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = tmp7(1119).intl;
        str2 = intl3.string(tmp7(1119).t.DqA3mi);
      } else {
        str2 = "";
      }
    }
    const found = participants.filter((type) => type.type === constants.USER && !type.ringing);
    let mapped = found.map((user) => {
      user = user.user;
      return utils_AvatarUtils.ensureAvatarSource(user.getAvatarSource(undefined)).uri;
    });
    let formatToPlainStringResult = str2;
    let stringResult1 = string(t["NGg/fm"]);
    const stringResult = string(t["NGg/fm"]);
  } else {
    if (tmp9) {
      stringResult1 = string(t["2CnhoI"]);
    } else {
      stringResult1 = string(t.v05Xd6);
    }
    if (null != tmp6) {
      const intl2 = tmp7(1119).intl;
      const obj2 = { duration: tmp6, timestamp: tmp7(4474).calendarFormat(message.timestamp) };
      formatToPlainStringResult = intl2.formatToPlainString(tmp7(1119).t.SBDnp1, obj2);
      const tmp7Result = tmp7(4474);
    } else {
      formatToPlainStringResult = tmp7(4474).calendarFormat(message.timestamp);
      const tmp7Result3 = tmp7(4474);
    }
    const author = message.author;
    mapped = [tmp7(1404).ensureAvatarSource(author.getAvatarSource(undefined)).uri];
    const tmp7Result4 = tmp7(1404);
  }
  const obj3 = { title: stringResult1, description: formatToPlainStringResult, isCallActive: checkIsCallActiveResult, missed: tmp9, avatarURLs: mapped, rawMilliseconds: null };
  const timestamp = message.timestamp;
  obj3.rawMilliseconds = timestamp.valueOf();
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj3;
};
