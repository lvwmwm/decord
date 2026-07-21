// Module ID: 7710
// Function ID: 61408
// Name: createRequestToSpeakEphemeralIndication
// Dependencies: []
// Exports: createStageRaiseHandSystemMessage

// Module 7710 (createRequestToSpeakEphemeralIndication)
function createRequestToSpeakEphemeralIndication(message) {
  if (message.hasFlag(constants2.EPHEMERAL)) {
    if (message.type === constants3.STAGE_RAISE_HAND) {
      let obj = {};
      const intl = arg1(dependencyMap[4]).intl;
      obj = {};
      obj = { action: "bindDismissMessage", message };
      obj.handleDelete = obj;
      obj.content = intl.formatToParts(arg1(dependencyMap[4]).t.qDAX++, obj);
      obj.helpArticleLink = importDefault(dependencyMap[5]).getArticleURL(constants.EPHEMERAL_MESSAGES);
      const intl2 = arg1(dependencyMap[4]).intl;
      obj.helpButtonAccessibilityLabel = intl2.string(arg1(dependencyMap[4]).t.htHOrp);
      return obj;
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ HelpdeskArticles: closure_6, MessageFlags: closure_7, MessageTypes: closure_8, Permissions: closure_9 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx");

export const createStageRaiseHandSystemMessage = function createStageRaiseHandSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = arg1(dependencyMap[6]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const canResult = closure_5.can(constants4.MUTE_MEMBERS, channel.getChannel(message.channel_id));
  const participant = participant.getParticipant(message.channel_id, message.author.id);
  const obj2 = importDefault(dependencyMap[7]);
  let prop;
  const date = new Date(importDefault(dependencyMap[7]).extractTimestamp(message.id));
  if (null != participant) {
    const voiceState = participant.voiceState;
    if (null != voiceState) {
      prop = voiceState.requestToSpeakTimestamp;
    }
  }
  let num = 0;
  if (null != prop) {
    num = prop;
  }
  const toISOStringResult = new Date(importDefault(dependencyMap[7]).extractTimestamp(message.id)).toISOString();
  let tmp7 = canResult;
  const date1 = new Date(num);
  if (canResult) {
    let rtsState;
    if (null != participant) {
      rtsState = participant.rtsState;
    }
    tmp7 = rtsState === arg1(dependencyMap[8]).RequestToSpeakStates.REQUESTED_TO_SPEAK;
  }
  if (tmp7) {
    tmp7 = tmp6;
  }
  obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[9])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = intl.formatToParts(arg1(dependencyMap[4]).t.M87x7Y, obj);
  obj.showInviteToSpeakButton = tmp7;
  const intl2 = arg1(dependencyMap[4]).intl;
  obj.buttonLabel = intl2.string(arg1(dependencyMap[4]).t.f0T7hI);
  obj.ephemeralIndication = createRequestToSpeakEphemeralIndication(message);
  const merged = Object.assign(importDefault(dependencyMap[10])(roleStyle));
  return obj;
};
