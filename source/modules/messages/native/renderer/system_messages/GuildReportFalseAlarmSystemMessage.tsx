// Module ID: 8087
// Function ID: 8088
// Name: createGuildReportFalseAlarmSystemMessage
// Dependencies: [1372, 8002, 8009, 8079, 8011, 8080, 8012, 1236, 1419, 1416, 2]
// Exports: createGuildReportFalseAlarmSystemMessage

// Module 8087 (createGuildReportFalseAlarmSystemMessage)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx");

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = require(8009) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp2 = importDefault(8002)(theme);
  let automodUsernameColor = require(8079) /* nativeStyleProperties */.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(8011)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const obj2 = require(8079) /* nativeStyleProperties */;
  obj = {};
  const merged = Object.assign(importDefault(8012)(roleStyle));
  const intl = require(1236) /* getSystemLocale */.intl;
  obj.content = intl.formatToParts(require(1236) /* getSystemLocale */.t["21+uW4"], obj);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj.username = intl2.string(require(1236) /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp4Result = tmp4(1419);
  tmp4Result = tmp4(1416);
  const tmp7 = importDefault(8080)({ message, channel, isSystemDM: true, colors: tmp2 });
  obj.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(require(1419) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp7);
  return obj;
};
