// Module ID: 14443
// Function ID: 14444
// Name: VoiceSessionSystemMessage
// Dependencies: [4892, 10626, 12008, 10623, 1112, 14379, 14380, 2]
// Exports: createVoiceSessionSystemMessage

// Module 14443 (VoiceSessionSystemMessage)
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 10626 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12008 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14379 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx");

export function createVoiceSessionSystemMessage(message) {
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
    const intl = tmp4(1112).intl;
    const formatToParts = intl.formatToParts;
    const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj4) };
    const HzBfIN = tmp4(1112).t.HzBfIN;
    obj4 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    formatToPartsResult = formatToParts(HzBfIN, obj3);
  } else {
    const intl2 = tmp4(1112).intl;
    const formatToParts2 = intl2.formatToParts;
    const obj5 = { userCount: mapped.length + 1, username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj6), username2: nick, username2OnClick: tmp7, username3: nick1, username3OnClick: tmp10, otherCount: mapped.length - 1, duration: tmp3 };
    const atbXuX = tmp4(1112).t.atbXuX;
    const first = mapped[0];
    nick = undefined;
    obj6 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    if (first != null) {
      nick = first.messageAuthor.nick;
    }
    tmp7 = undefined;
    if (null != mapped[0]) {
      const obj7 = { userId: mapped[0].user.id, message, author: mapped[0].messageAuthor, roleStyle };
      tmp7 = tmp(14379)(obj7);
    }
    nick1 = undefined;
    if (mapped[1] != null) {
      nick1 = tmp8.messageAuthor.nick;
    }
    tmp10 = undefined;
    if (null != mapped[1]) {
      const obj8 = { userId: mapped[1].user.id, message, author: mapped[1].messageAuthor, roleStyle };
      tmp10 = tmp(14379)(obj8);
    }
    formatToPartsResult = formatToParts2(atbXuX, obj5);
  }
  const obj9 = { content: formatToPartsResult };
  const merged = Object.assign(tmp(14380)(message));
  return obj9;
}
