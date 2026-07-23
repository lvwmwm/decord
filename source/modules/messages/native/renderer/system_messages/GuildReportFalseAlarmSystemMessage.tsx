// Module ID: 7727
// Function ID: 61478
// Name: createGuildReportFalseAlarmSystemMessage
// Dependencies: [1348, 7642, 7649, 7719, 7651, 7720, 7652, 1212, 1395, 1392, 2]
// Exports: createGuildReportFalseAlarmSystemMessage

// Module 7727 (createGuildReportFalseAlarmSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx");

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = require(7649) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp = importDefault(7642)(theme);
  const automodUsernameColor = require(7719) /* nativeStyleProperties */.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7651)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const obj2 = require(7719) /* nativeStyleProperties */;
  obj = {};
  const merged = Object.assign(importDefault(7652)(roleStyle));
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["content"] = intl.formatToParts(require(1212) /* getSystemLocale */.t["21+uW4"], obj);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj["username"] = intl2.string(require(1212) /* getSystemLocale */.t.hG1StD);
  let tmp6 = null;
  if (null != automodUsernameColor) {
    tmp6 = automodUsernameColor;
  }
  obj["usernameColor"] = tmp6;
  const tmp4 = importDefault(7720)({ message, channel, isSystemDM: true, colors: tmp });
  const obj5 = require(1395) /* ensureAvatarSource */;
  const obj6 = require(1392) /* getAvatarURL */;
  obj["avatarURL"] = obj5.ensureAvatarSource(obj6.makeSource(require(1395) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp4);
  return obj;
};
