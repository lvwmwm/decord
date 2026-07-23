// Module ID: 7716
// Function ID: 61455
// Name: createRequestToSpeakEphemeralIndication
// Dependencies: [4951, 1348, 3758, 653, 1212, 1920, 7649, 21, 4314, 7651, 7652, 2]
// Exports: createStageRaiseHandSystemMessage

// Module 7716 (createRequestToSpeakEphemeralIndication)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function createRequestToSpeakEphemeralIndication(message) {
  if (message.hasFlag(constants2.EPHEMERAL)) {
    if (message.type === constants3.STAGE_RAISE_HAND) {
      let obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = {};
      obj = { action: "bindDismissMessage", message };
      obj.handleDelete = obj;
      obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t["qDAX++"], obj);
      obj.helpArticleLink = importDefault(1920).getArticleURL(constants.EPHEMERAL_MESSAGES);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.helpButtonAccessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.htHOrp);
      return obj;
    }
  }
}
({ HelpdeskArticles: closure_6, MessageFlags: closure_7, MessageTypes: closure_8, Permissions: closure_9 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx");

export const createStageRaiseHandSystemMessage = function createStageRaiseHandSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require(7649) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const canResult = closure_5.can(constants4.MUTE_MEMBERS, channel.getChannel(message.channel_id));
  participant = participant.getParticipant(message.channel_id, message.author.id);
  const obj2 = importDefault(21);
  let prop;
  const date = new Date(importDefault(21).extractTimestamp(message.id));
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
  const toISOStringResult = new Date(importDefault(21).extractTimestamp(message.id)).toISOString();
  let tmp7 = canResult;
  const date1 = new Date(num);
  if (canResult) {
    let rtsState;
    if (null != participant) {
      rtsState = participant.rtsState;
    }
    tmp7 = rtsState === require(4314) /* getAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK;
  }
  if (tmp7) {
    tmp7 = tmp6;
  }
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7651)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = intl.formatToParts(require(1212) /* getSystemLocale */.t.M87x7Y, obj);
  obj.showInviteToSpeakButton = tmp7;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.buttonLabel = intl2.string(require(1212) /* getSystemLocale */.t.f0T7hI);
  obj.ephemeralIndication = createRequestToSpeakEphemeralIndication(message);
  const merged = Object.assign(importDefault(7652)(roleStyle));
  return obj;
};
