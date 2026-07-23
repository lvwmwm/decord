// Module ID: 7746
// Function ID: 61539
// Name: getMessageContent
// Dependencies: [1348, 7667, 7649, 7747, 1212, 7651, 7652, 2]
// Exports: createVoiceSessionSystemMessage

// Module 7746 (getMessageContent)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getMessageContent(channel_id, roleStyle) {
  const _require = channel.getChannel(channel_id.channel_id);
  const tmp = importDefault(7667)(channel_id);
  let obj = _require(7649);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(channel_id);
  let obj1 = _require(7747);
  const sortedVoiceSessionParticipants = obj1.getSortedVoiceSessionParticipants(channel_id);
  const mapped = sortedVoiceSessionParticipants.map((user) => {
    const obj = { user, messageAuthor: callback(outer1_2[2]).getUserAuthorWithProcessedColor(user, callback) };
    return obj;
  });
  if (null == tmp) {
    const intl = _require(1212).intl;
    obj = { username: messageAuthorWithProcessedColor.nick };
    obj = { message: channel_id, author: messageAuthorWithProcessedColor, roleStyle };
    obj.usernameOnClick = importDefault(7651)(obj);
    let formatToPartsResult = intl.formatToParts(_require(1212).t.HzBfIN, obj);
  } else {
    const intl2 = _require(1212).intl;
    obj1 = { userCount: mapped.length + 1, username: messageAuthorWithProcessedColor.nick };
    const obj2 = { message: channel_id, author: messageAuthorWithProcessedColor, roleStyle };
    obj1.usernameOnClick = importDefault(7651)(obj2);
    const first = mapped[0];
    let nick;
    if (null != first) {
      nick = first.messageAuthor.nick;
    }
    obj1.username2 = nick;
    let tmp4;
    if (null != mapped[0]) {
      const obj3 = { userId: mapped[0].user.id, message: channel_id, author: mapped[0].messageAuthor, roleStyle };
      tmp4 = importDefault(7651)(obj3);
    }
    obj1.username2OnClick = tmp4;
    let nick1;
    if (null != mapped[1]) {
      nick1 = tmp7.messageAuthor.nick;
    }
    obj1.username3 = nick1;
    let tmp9;
    if (null != mapped[1]) {
      const obj4 = { userId: mapped[1].user.id, message: channel_id, author: mapped[1].messageAuthor, roleStyle };
      tmp9 = importDefault(7651)(obj4);
    }
    obj1.username3OnClick = tmp9;
    obj1.otherCount = mapped.length - 1;
    obj1.duration = tmp;
    formatToPartsResult = intl2.formatToParts(_require(1212).t.atbXuX, obj1);
  }
  return formatToPartsResult;
}
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx");

export const createVoiceSessionSystemMessage = function createVoiceSessionSystemMessage(message) {
  const merged = Object.assign(importDefault(7652)(message));
  return { content: getMessageContent(message.message, message.roleStyle) };
};
