// Module ID: 7740
// Function ID: 61502
// Name: getMessageContent
// Dependencies: []
// Exports: createVoiceSessionSystemMessage

// Module 7740 (getMessageContent)
function getMessageContent(channel_id, roleStyle) {
  const callback = channel.getChannel(channel_id.channel_id);
  const tmp = importDefault(dependencyMap[1])(channel_id);
  let obj = callback(dependencyMap[2]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(channel_id);
  let obj1 = callback(dependencyMap[3]);
  const sortedVoiceSessionParticipants = obj1.getSortedVoiceSessionParticipants(channel_id);
  const mapped = sortedVoiceSessionParticipants.map((user) => {
    const obj = { user, messageAuthor: callback(closure_2[2]).getUserAuthorWithProcessedColor(user, callback) };
    return obj;
  });
  if (null == tmp) {
    const intl = callback(dependencyMap[4]).intl;
    obj = { username: messageAuthorWithProcessedColor.nick };
    obj = { message: channel_id, author: messageAuthorWithProcessedColor, roleStyle };
    obj.usernameOnClick = importDefault(dependencyMap[5])(obj);
    let formatToPartsResult = intl.formatToParts(callback(dependencyMap[4]).t.HzBfIN, obj);
  } else {
    const intl2 = callback(dependencyMap[4]).intl;
    obj1 = { userCount: mapped.length + 1, username: messageAuthorWithProcessedColor.nick };
    const obj2 = { message: channel_id, author: messageAuthorWithProcessedColor, roleStyle };
    obj1.usernameOnClick = importDefault(dependencyMap[5])(obj2);
    const first = mapped[0];
    let nick;
    if (null != first) {
      nick = first.messageAuthor.nick;
    }
    obj1.username2 = nick;
    let tmp4;
    if (null != mapped[0]) {
      const obj3 = { userId: mapped[0].user.id, message: channel_id, author: mapped[0].messageAuthor, roleStyle };
      tmp4 = importDefault(dependencyMap[5])(obj3);
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
      tmp9 = importDefault(dependencyMap[5])(obj4);
    }
    obj1.username3OnClick = tmp9;
    obj1.otherCount = mapped.length - 1;
    obj1.duration = tmp;
    formatToPartsResult = intl2.formatToParts(callback(dependencyMap[4]).t.atbXuX, obj1);
  }
  return formatToPartsResult;
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx");

export const createVoiceSessionSystemMessage = function createVoiceSessionSystemMessage(message) {
  const merged = Object.assign(importDefault(dependencyMap[6])(message));
  return { content: getMessageContent(message.message, message.roleStyle) };
};
