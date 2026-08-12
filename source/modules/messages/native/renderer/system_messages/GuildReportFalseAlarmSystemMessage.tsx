// Module ID: 8188
// Function ID: 8189
// Name: createGuildReportFalseAlarmSystemMessage
// Dependencies: [1391, 8103, 8110, 8180, 8112, 8181, 8113, 1236, 1438, 1435, 2]
// Exports: createGuildReportFalseAlarmSystemMessage

// Module 8188 (createGuildReportFalseAlarmSystemMessage)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx");

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = require(8110) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = importDefault(8103)(theme);
  let automodUsernameColor = require(8180) /* nativeStyleProperties */.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(8112)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const obj2 = require(8180) /* nativeStyleProperties */;
  obj = {};
  const merged = Object.assign(importDefault(8113)(roleStyle));
  const intl = require(1236) /* getSystemLocale */.intl;
  obj.content = intl.formatToParts(require(1236) /* getSystemLocale */.t["21+uW4"], obj);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj.username = intl2.string(require(1236) /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp4Result = tmp4(1438);
  tmp4Result = tmp4(1435);
  const tmp7 = importDefault(8181)({ message, channel, isSystemDM: true, colors: tmp2 });
  obj.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(require(1438) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp7);
  return obj;
};
