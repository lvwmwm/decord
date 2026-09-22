// Module ID: 8292
// Function ID: 8293
// Name: StageRaiseHandSystemMessage
// Dependencies: [5637, 2042, 4396, 1074, 1115, 2108, 8222, 11, 4904, 8224, 8226, 2]
// Exports: createStageRaiseHandSystemMessage

// Module 8292 (StageRaiseHandSystemMessage)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8222 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8224 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5637 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import PermissionStore from "PermissionStore" /* 4396 */;

require = fn;
const Constants = fn(1074);
({ HelpdeskArticles: metroRequire, MessageFlags: closure_7, MessageTypes: closure_8, Permissions: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx");

export const createStageRaiseHandSystemMessage = function createStageRaiseHandSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  let canResult = PermissionStore.can(constants4.MUTE_MEMBERS, ChannelStore.getChannel(message.channel_id));
  const participant = StageChannelParticipantStore.getParticipant(message.channel_id, message.author.id);
  let num;
  const date = new Date(SnowflakeUtilsDefault.extractTimestamp(message.id));
  if (participant != null) {
    const voiceState = participant.voiceState;
    if (voiceState != null) {
      num = voiceState.requestToSpeakTimestamp;
    }
  }
  if (num == null) {
    num = 0;
  }
  const toISOStringResult = new Date(SnowflakeUtilsDefault.extractTimestamp(message.id)).toISOString();
  const date1 = new Date(num);
  if (canResult) {
    let rtsState;
    if (participant != null) {
      rtsState = participant.rtsState;
    }
    canResult = rtsState === tmp(4904).RequestToSpeakStates.REQUESTED_TO_SPEAK;
  }
  if (canResult) {
    canResult = toISOStringResult === toISOStringResult1;
  }
  const obj3 = { content: null, showInviteToSpeakButton: null, buttonLabel: null, ephemeralIndication: null };
  const intl = tmp(1115).intl;
  toISOStringResult1 = new Date(num).toISOString();
  obj3.content = intl.formatToParts(util.t.M87x7Y, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  obj3.showInviteToSpeakButton = canResult;
  const intl2 = tmp(1115).intl;
  obj3.buttonLabel = intl2.string(util.t.f0T7hI);
  let tmp10;
  if (message.hasFlag(constants2.EPHEMERAL)) {
    if (message.type === constants3.STAGE_RAISE_HAND) {
      const obj5 = { content: null, helpArticleLink: null, helpButtonAccessibilityLabel: null };
      const intl3 = tmp(1115).intl;
      const obj6 = { handleDelete: null };
      const obj7 = { action: "bindDismissMessage", message };
      obj6.handleDelete = obj7;
      obj5.content = intl3.formatToParts(tmp(1115).t["qDAX++"], obj6);
      obj5.helpArticleLink = tmp6(2108).getArticleURL(constants.EPHEMERAL_MESSAGES);
      const intl4 = tmp(1115).intl;
      obj5.helpButtonAccessibilityLabel = intl4.string(tmp(1115).t.htHOrp);
      tmp10 = obj5;
      const tmp6Result = tmp6(2108);
    }
  }
  obj3.ephemeralIndication = tmp10;
  const merged = Object.assign(tmp6(8226)(roleStyle));
  return obj3;
};
