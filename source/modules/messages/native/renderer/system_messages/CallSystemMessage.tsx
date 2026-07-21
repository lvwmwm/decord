// Module ID: 7659
// Function ID: 61230
// Name: createCallSystemMessage
// Dependencies: []
// Exports: createCallSystemMessage

// Module 7659 (createCallSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const ME = arg1(dependencyMap[3]).ME;
const ParticipantTypes = arg1(dependencyMap[4]).ParticipantTypes;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/native/renderer/system_messages/CallSystemMessage.tsx");

export const createCallSystemMessage = function createCallSystemMessage(message) {
  message = message.message;
  const id = id.getId();
  const channelId = message.getChannelId();
  const call = message.call;
  const userVoiceChannelId = userVoiceChannelId.getUserVoiceChannelId(ME, id);
  const tmp4 = importDefault(dependencyMap[5])(message);
  const participants = participants.getParticipants(channelId);
  let obj = arg1(dependencyMap[6]);
  const checkIsCallActiveResult = obj.checkIsCallActive(channelId, message.id);
  let tmp6 = !checkIsCallActiveResult;
  if (tmp6) {
    tmp6 = null != call;
  }
  if (tmp6) {
    const participants1 = call.participants;
    tmp6 = -1 === participants1.indexOf(id);
  }
  const intl = arg1(dependencyMap[7]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[7]).t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = arg1(dependencyMap[7]).intl;
        str2 = intl3.string(arg1(dependencyMap[7]).t.DqA3mi);
      } else {
        str2 = "";
      }
    }
    const found = participants.filter((type) => type.type === constants.USER && !type.ringing);
    let mapped = found.map((user) => {
      user = user.user;
      return callback(closure_2[8]).ensureAvatarSource(user.getAvatarSource(undefined)).uri;
    });
    let formatToPlainStringResult = str2;
    let stringResult1 = string(t.NGg/fm);
    const stringResult = string(t.NGg/fm);
  } else {
    if (tmp6) {
      stringResult1 = string(t.2CnhoI);
    } else {
      stringResult1 = string(t.v05Xd6);
    }
    if (null != tmp4) {
      const intl2 = arg1(dependencyMap[7]).intl;
      obj = { duration: tmp4, timestamp: arg1(dependencyMap[9]).calendarFormat(message.timestamp) };
      formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[7]).t.SBDnp1, obj);
      const obj4 = arg1(dependencyMap[9]);
    } else {
      formatToPlainStringResult = arg1(dependencyMap[9]).calendarFormat(message.timestamp);
      const obj2 = arg1(dependencyMap[9]);
    }
    const author = message.author;
    mapped = [arg1(dependencyMap[8]).ensureAvatarSource(author.getAvatarSource(undefined)).uri];
    const obj5 = arg1(dependencyMap[8]);
  }
  obj = { title: stringResult1, description: formatToPlainStringResult, isCallActive: checkIsCallActiveResult, missed: tmp6, avatarURLs: mapped };
  const timestamp = message.timestamp;
  obj.rawMilliseconds = timestamp.valueOf();
  const merged = Object.assign(importDefault(dependencyMap[10])(message));
  return obj;
};
