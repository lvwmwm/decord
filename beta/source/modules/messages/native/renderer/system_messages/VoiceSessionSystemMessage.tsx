// Module ID: 8368
// Function ID: 8369
// Name: VoiceSessionSystemMessage
// Dependencies: [2068, 8265, 8246, 8369, 1128, 8248, 8250, 2]
// Exports: createVoiceSessionSystemMessage

// Module 8368 (VoiceSessionSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8246 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8248 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8265 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx");

export const createVoiceSessionSystemMessage = function createVoiceSessionSystemMessage(message) {
  let closure_0;
  let formatToPartsResult;
  let nick;
  let nick1;
  let obj4;
  let obj6;
  let roleStyle;
  let tmp10;
  let tmp7;
  ({ message, roleStyle } = message);
  _require = ChannelStore.getChannel(message.channel_id);
  const tmp3 = getHumanizedCallDurationDefault(message);
  let obj = require("useAuthorWithProcessedColor");
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let obj2 = require("VoiceSessionUtils");
  const sortedVoiceSessionParticipants = obj2.getSortedVoiceSessionParticipants(message);
  const mapped = sortedVoiceSessionParticipants.map((user) => {
    let obj2;
    const obj = { user, messageAuthor: obj2.getUserAuthorWithProcessedColor(user, closure_0) };
    obj2 = useAuthorWithProcessedColor;
    return obj;
  });
  if (null == tmp3) {
    const intl = tmp4(1128).intl;
    const formatToParts = intl.formatToParts;
    const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj4) };
    const HzBfIN = tmp4(1128).t.HzBfIN;
    obj4 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    formatToPartsResult = formatToParts(HzBfIN, obj3);
  } else {
    const intl2 = tmp4(1128).intl;
    const formatToParts2 = intl2.formatToParts;
    const obj5 = { userCount: mapped.length + 1, username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj6), username2: nick, username2OnClick: tmp7, username3: nick1, username3OnClick: tmp10, otherCount: mapped.length - 1, duration: tmp3 };
    const atbXuX = tmp4(1128).t.atbXuX;
    const first = mapped[0];
    nick = undefined;
    obj6 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    if (first != null) {
      nick = first.messageAuthor.nick;
    }
    tmp7 = undefined;
    if (null != mapped[0]) {
      const obj7 = { userId: mapped[0].user.id, message, author: mapped[0].messageAuthor, roleStyle };
      tmp7 = tmp(8248)(obj7);
    }
    nick1 = undefined;
    if (mapped[1] != null) {
      nick1 = tmp8.messageAuthor.nick;
    }
    tmp10 = undefined;
    if (null != mapped[1]) {
      const obj8 = { userId: mapped[1].user.id, message, author: mapped[1].messageAuthor, roleStyle };
      tmp10 = tmp(8248)(obj8);
    }
    formatToPartsResult = formatToParts2(atbXuX, obj5);
  }
  const obj9 = { content: formatToPartsResult };
  const merged = Object.assign(tmp(8250)(message));
  return obj9;
};
