// Module ID: 7721
// Function ID: 61441
// Name: createGuildReportFalseAlarmSystemMessage
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: createGuildReportFalseAlarmSystemMessage

// Module 7721 (createGuildReportFalseAlarmSystemMessage)
import __exportStarResult1 from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx");

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  const channel = channel.getChannel(message.channel_id);
  let obj = arg1(dependencyMap[2]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp = importDefault(dependencyMap[1])(theme);
  const automodUsernameColor = arg1(dependencyMap[3]).resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[4])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const obj2 = arg1(dependencyMap[3]);
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[6])(roleStyle));
  const intl = arg1(dependencyMap[7]).intl;
  obj["content"] = intl.formatToParts(arg1(dependencyMap[7]).t.21+uW4, obj);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj["username"] = intl2.string(arg1(dependencyMap[7]).t.hG1StD);
  let tmp6 = null;
  if (null != automodUsernameColor) {
    tmp6 = automodUsernameColor;
  }
  obj["usernameColor"] = tmp6;
  const tmp4 = importDefault(dependencyMap[5])({ message, channel, isSystemDM: true, colors: tmp });
  const obj5 = arg1(dependencyMap[8]);
  const obj6 = arg1(dependencyMap[9]);
  obj["avatarURL"] = obj5.ensureAvatarSource(obj6.makeSource(arg1(dependencyMap[8]).getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp4);
  return obj;
};
