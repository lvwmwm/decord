// Module ID: 8241
// Function ID: 8242
// Name: CallSystemMessage
// Dependencies: [4773, 502, 4776, 1074, 4778, 8242, 8243, 1115, 1400, 4439, 8226, 2]
// Exports: createCallSystemMessage

// Module 8241 (CallSystemMessage)
import utils_AvatarUtils from "utils/AvatarUtils" /* 1400 */;
import createCommonMessageDefault from "createCommonMessage" /* 8226 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8242 */;
import useIsCallActive from "useIsCallActive" /* 8243 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4773 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 4776 */;

require = fn;
const ME = fn(1074).ME;
const ParticipantTypes = fn(4778).ParticipantTypes;
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
  const intl = tmp7(1115).intl;
  const string = intl.string;
  const t = tmp7(1115).t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = tmp7(1115).intl;
        str2 = intl3.string(tmp7(1115).t.DqA3mi);
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
      const intl2 = tmp7(1115).intl;
      const obj2 = { duration: tmp6, timestamp: tmp7(4439).calendarFormat(message.timestamp) };
      formatToPlainStringResult = intl2.formatToPlainString(tmp7(1115).t.SBDnp1, obj2);
      const tmp7Result = tmp7(4439);
    } else {
      formatToPlainStringResult = tmp7(4439).calendarFormat(message.timestamp);
      const tmp7Result3 = tmp7(4439);
    }
    const author = message.author;
    mapped = [tmp7(1400).ensureAvatarSource(author.getAvatarSource(undefined)).uri];
    const tmp7Result4 = tmp7(1400);
  }
  const obj3 = { title: stringResult1, description: formatToPlainStringResult, isCallActive: checkIsCallActiveResult, missed: tmp9, avatarURLs: mapped, rawMilliseconds: null };
  const timestamp = message.timestamp;
  obj3.rawMilliseconds = timestamp.valueOf();
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj3;
};
