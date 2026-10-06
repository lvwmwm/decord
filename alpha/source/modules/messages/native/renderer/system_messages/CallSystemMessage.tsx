// Module ID: 7649
// Function ID: 7650
// Name: CallSystemMessage
// Dependencies: [4912, 502, 4915, 1085, 4917, 7650, 7651, 1126, 1405, 4558, 7634, 2]
// Exports: createCallSystemMessage

// Module 7649 (CallSystemMessage)
import Constants from "Constants" /* 1085 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1405 */;
import DateUtils from "DateUtils" /* 4558 */;
import CallConstants from "CallConstants" /* 4917 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 7650 */;
import useIsCallActive from "useIsCallActive" /* 7651 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;
import size from "module_2" /* 2 */;

let user;

let tmp4;
const createCommonMessageDefault = tmp4(7634);
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
  const intl = tmp7(1126).intl;
  const string = intl.string;
  const t = tmp7(1126).t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    const stringResult = string(t["NGg/fm"]);
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = tmp7(1126).intl;
        str2 = intl3.string(tmp7(1126).t.DqA3mi);
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
      const intl2 = tmp7(1126).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj2 = { duration: tmp6, timestamp: tmp7Result.calendarFormat(message.timestamp) };
      const SBDnp1 = tmp7(1126).t.SBDnp1;
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
