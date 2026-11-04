// Module ID: 8577
// Function ID: 8578
// Name: CallSystemMessage
// Dependencies: [6978, 502, 5813, 1072, 5815, 8578, 8579, 1113, 1414, 4963, 8563, 2]
// Exports: createCallSystemMessage

// Module 8577 (CallSystemMessage)
import Constants from "Constants" /* 1072 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1414 */;
import DateUtils from "DateUtils" /* 4963 */;
import CallConstants from "CallConstants" /* 5815 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8578 */;
import useIsCallActive from "useIsCallActive" /* 8579 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 5813 */;
import size from "module_2" /* 2 */;

let user;

let tmp4;
const createCommonMessageDefault = tmp4(8563);
const ME = Constants.ME;
const ParticipantTypes = CallConstants.ParticipantTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/CallSystemMessage.tsx");

export function createCallSystemMessage(message) {
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
  const intl = tmp7(1113).intl;
  const string = intl.string;
  const t = tmp7(1113).t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    const stringResult = string(t["NGg/fm"]);
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = tmp7(1113).intl;
        str2 = intl3.string(tmp7(1113).t.DqA3mi);
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
      const intl2 = tmp7(1113).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj2 = { duration: tmp6, timestamp: tmp7Result.calendarFormat(message.timestamp) };
      const SBDnp1 = tmp7(1113).t.SBDnp1;
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
}
