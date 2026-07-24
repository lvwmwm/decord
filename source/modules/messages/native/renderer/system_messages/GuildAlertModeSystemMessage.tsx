// Module ID: 7808
// Function ID: 61748
// Name: nativeStyleProperties
// Dependencies: [1348, 4130, 689, 7731, 7738, 7740, 1212, 7809, 7741, 1395, 1392, 2]
// Exports: createGuildAlertModeDisabledSystemMessage, createGuildAlertModeEnabledSystemMessage

// Module 7808 (nativeStyleProperties)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { automodUsernameColor: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createNativeStyleProperties(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx");

export const resolveAlertModeColors = _createForOfIteratorHelperLoose;
export const createGuildAlertModeEnabledSystemMessage = function createGuildAlertModeEnabledSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = require(7738) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const automodUsernameColor = _createForOfIteratorHelperLoose(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7740)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  let str = "";
  if ("" !== message.content) {
    const _Date = Date;
    const date = new Date(message.content);
    str = date.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  obj.time = str;
  const tmp = importDefault(7731)(theme);
  obj = {};
  const merged = Object.assign(importDefault(7741)(roleStyle));
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["content"] = intl.formatToParts(require(1212) /* getSystemLocale */.t.ig55n6, obj);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj["username"] = intl2.string(require(1212) /* getSystemLocale */.t.hG1StD);
  let tmp12 = null;
  if (null != automodUsernameColor) {
    tmp12 = automodUsernameColor;
  }
  obj["usernameColor"] = tmp12;
  const tmp10 = importDefault(7809)({ message, channel, isSystemDM: true, colors: importDefault(7731)(theme) });
  const obj5 = require(1395) /* ensureAvatarSource */;
  const obj6 = require(1392) /* getAvatarURL */;
  obj["avatarURL"] = obj5.ensureAvatarSource(obj6.makeSource(require(1395) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp10);
  return obj;
};
export const createGuildAlertModeDisabledSystemMessage = function createGuildAlertModeDisabledSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  const automodUsernameColor = _createForOfIteratorHelperLoose(theme).automodUsernameColor;
  let obj = require(7738) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7740)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const tmp = importDefault(7731)(theme);
  obj = {};
  const merged = Object.assign(importDefault(7741)(roleStyle));
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["content"] = intl.formatToParts(require(1212) /* getSystemLocale */.t.cyq2WA, obj);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj["username"] = intl2.string(require(1212) /* getSystemLocale */.t.hG1StD);
  let tmp5 = null;
  if (null != automodUsernameColor) {
    tmp5 = automodUsernameColor;
  }
  obj["usernameColor"] = tmp5;
  const tmp3 = importDefault(7809)({ message, channel: undefined, isSystemDM: true, colors: importDefault(7731)(theme) });
  const obj4 = require(1395) /* ensureAvatarSource */;
  const obj5 = require(1392) /* getAvatarURL */;
  obj["avatarURL"] = obj4.ensureAvatarSource(obj5.makeSource(require(1395) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp3);
  return obj;
};
