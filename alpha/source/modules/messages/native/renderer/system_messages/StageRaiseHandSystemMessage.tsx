// Module ID: 9204
// Function ID: 9205
// Name: StageRaiseHandSystemMessage
// Dependencies: [6877, 5092, 5175, 1072, 1113, 2185, 9122, 11, 6295, 9124, 9126, 2]
// Exports: createStageRaiseHandSystemMessage

// Module 9204 (StageRaiseHandSystemMessage)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl5 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 9122 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 9124 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6877 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ HelpdeskArticles: metroRequire, MessageFlags: metroImportDefault, MessageTypes: metroImportAll, Permissions: c9 } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageRaiseHandSystemMessage.tsx");

export function createStageRaiseHandSystemMessage(message) {
  let M87x7Y;
  let formatToParts;
  let intl2;
  let intl3;
  let intl4;
  let obj4;
  let obj6;
  let obj7;
  let tmp10;
  let tmp6Result;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let canResult = PermissionStore.can(constants4.MUTE_MEMBERS, ChannelStore.getChannel(message.channel_id));
  const participant = StageChannelParticipantStore.getParticipant(message.channel_id, message.author.id);
  let num;
  const obj2 = SnowflakeUtilsDefault;
  const _Date = Date;
  const date = new Date(obj2.extractTimestamp(message.id));
  const toISOStringResult = date.toISOString();
  if (participant != null) {
    const voiceState = participant.voiceState;
    if (voiceState != null) {
      num = voiceState.requestToSpeakTimestamp;
    }
  }
  if (num == null) {
    num = 0;
  }
  const _Date1 = new _Date(num);
  const toISOStringResult1 = _Date1.toISOString();
  if (canResult) {
    let rtsState;
    if (participant != null) {
      rtsState = participant.rtsState;
    }
    canResult = rtsState === tmp(6295).RequestToSpeakStates.REQUESTED_TO_SPEAK;
  }
  if (canResult) {
    canResult = toISOStringResult === toISOStringResult1;
  }
  const obj3 = { content: formatToParts(M87x7Y, obj4), showInviteToSpeakButton: canResult, buttonLabel: intl2.string(intl5.t.f0T7hI), ephemeralIndication: tmp10 };
  const intl = tmp(1113).intl;
  formatToParts = intl.formatToParts;
  obj4 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  M87x7Y = tmp(1113).t.M87x7Y;
  intl2 = tmp(1113).intl;
  tmp10 = undefined;
  if (message.hasFlag(metroImportDefault.EPHEMERAL)) {
    if (message.type === metroImportAll.STAGE_RAISE_HAND) {
      const obj5 = { content: intl3.formatToParts(intl5.t["qDAX++"], obj6), helpArticleLink: tmp6Result.getArticleURL(metroRequire.EPHEMERAL_MESSAGES), helpButtonAccessibilityLabel: intl4.string(intl5.t.htHOrp) };
      intl3 = tmp(1113).intl;
      obj6 = { handleDelete: obj7 };
      obj7 = { action: "bindDismissMessage", message };
      tmp6Result = HelpdeskUtilsDefault;
      intl4 = tmp(1113).intl;
      tmp10 = obj5;
    }
  }
  const merged = Object.assign(tmp6(9126)(message));
  return obj3;
}
