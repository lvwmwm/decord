// Module ID: 8369
// Function ID: 8370
// Name: CallSystemMessage
// Dependencies: [6807, 502, 5666, 1084, 5668, 8370, 8371, 1125, 1417, 4829, 8355, 2]
// Exports: createCallSystemMessage

// Module 8369 (CallSystemMessage)
import Constants from "Constants" /* 1084 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1417 */;
import DateUtils from "DateUtils" /* 4829 */;
import CallConstants from "CallConstants" /* 5668 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8370 */;
import useIsCallActive from "useIsCallActive" /* 8371 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6807 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 5666 */;
import size from "module_2" /* 2 */;

let user;

let tmp4;
const createCommonMessageDefault = tmp4(8355);
const ME = Constants.ME;
const ParticipantTypes = CallConstants.ParticipantTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/CallSystemMessage.tsx");

export const createCallSystemMessage = function createCallSystemMessage(message) {
  let formatToPlainStringResult;
  let mapped;
  let stringResult1;
  let timestamp;
  let tmp7Result;
  message = message.message;
  const id = AuthenticationStore.getId();
  const channelId = message.getChannelId();
  const call = message.call;
  const userVoiceChannelId = VoiceStateStore.getUserVoiceChannelId(ME, id);
  const tmp6 = getHumanizedCallDurationDefault(message);
  const participants = ChannelRTCStore.getParticipants(channelId);
  let obj = useIsCallActive;
  const checkIsCallActiveResult = obj.checkIsCallActive(channelId, message.id);
  let tmp9 = !checkIsCallActiveResult;
  if (tmp9) {
    tmp9 = null != call;
  }
  if (tmp9) {
    const participants1 = call.participants;
    tmp9 = -1 === participants1.indexOf(id);
  }
  const intl = tmp7(1125).intl;
  const string = intl.string;
  const t = tmp7(1125).t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    const stringResult = string(t["NGg/fm"]);
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = tmp7(1125).intl;
        str2 = intl3.string(tmp7(1125).t.DqA3mi);
      } else {
        str2 = "";
      }
    }
    const found = participants.filter((type) => type.type === constants.USER && !type.ringing);
    mapped = found.map((user) => {
      user = user.user;
      const obj = utils_AvatarUtils;
      return obj.ensureAvatarSource(user.getAvatarSource(undefined)).uri;
    });
    formatToPlainStringResult = str2;
    stringResult1 = stringResult;
  } else {
    if (tmp9) {
      stringResult1 = string(t["2CnhoI"]);
    } else {
      stringResult1 = string(t.v05Xd6);
    }
    if (null != tmp6) {
      const intl2 = tmp7(1125).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj2 = { duration: tmp6, timestamp: tmp7Result.calendarFormat(message.timestamp) };
      const SBDnp1 = tmp7(1125).t.SBDnp1;
      tmp7Result = DateUtils;
      formatToPlainStringResult = formatToPlainString(SBDnp1, obj2);
    } else {
      const tmp7Result3 = DateUtils;
      formatToPlainStringResult = tmp7Result3.calendarFormat(message.timestamp);
    }
    const author = message.author;
    mapped = [];
    const tmp7Result4 = utils_AvatarUtils;
    mapped[0] = tmp7Result4.ensureAvatarSource(author.getAvatarSource(undefined)).uri;
  }
  const obj3 = { title: stringResult1, description: formatToPlainStringResult, isCallActive: checkIsCallActiveResult, missed: tmp9, avatarURLs: mapped, rawMilliseconds: timestamp.valueOf() };
  timestamp = message.timestamp;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj3;
};
