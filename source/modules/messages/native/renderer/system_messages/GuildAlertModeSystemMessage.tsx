// Module ID: 8184
// Function ID: 8185
// Name: nativeStyleProperties
// Dependencies: [1391, 4342, 712, 8107, 8114, 8116, 1236, 8185, 8117, 1438, 1435, 2]
// Exports: createGuildAlertModeDisabledSystemMessage, createGuildAlertModeEnabledSystemMessage

// Module 8184 (nativeStyleProperties)
import ensureGuildLoaded from "ensureGuildLoaded";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { automodUsernameColor: require("Themes").colors.TEXT_BRAND };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("Themes").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx");

export const resolveAlertModeColors = createCacheKey;
export const createGuildAlertModeEnabledSystemMessage = function createGuildAlertModeEnabledSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let obj = require(8114) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = createCacheKey(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(8116)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), time: null };
  let str = "";
  if ("" !== message.content) {
    const _Date = Date;
    const date = new Date(message.content);
    str = date.toLocaleString(tmp5(1236).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  obj[2] = str;
  const tmp3 = importDefault(8107)(theme);
  obj = {};
  const merged = Object.assign(tmp(8117)(roleStyle));
  const intl = tmp5(1236).intl;
  obj.content = intl.formatToParts(require(1236) /* getSystemLocale */.t.ig55n6, obj);
  const intl2 = tmp5(1236).intl;
  obj.username = intl2.string(require(1236) /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp5Result = tmp5(1438);
  tmp5Result = tmp5(1435);
  const tmp12 = importDefault(8185)({ message, channel, isSystemDM: true, colors: importDefault(8107)(theme) });
  obj.avatarURL = tmp5Result.ensureAvatarSource(tmp5Result.makeSource(require(1438) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp12);
  return obj;
};
export const createGuildAlertModeDisabledSystemMessage = function createGuildAlertModeDisabledSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  let automodUsernameColor = createCacheKey(theme).automodUsernameColor;
  let obj = require(8114) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(8116)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { message, channel: "HermesInternal", isSystemDM: null, colors: "md" };
  obj[3] = importDefault(8107)(theme);
  const tmp2 = importDefault(8107)(theme);
  const obj1 = {};
  const merged = Object.assign(importDefault(8117)(roleStyle));
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1.content = intl.formatToParts(require(1236) /* getSystemLocale */.t.cyq2WA, obj);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1.username = intl2.string(require(1236) /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj1.usernameColor = automodUsernameColor;
  let tmp4Result = tmp4(1438);
  tmp4Result = tmp4(1435);
  const tmp6 = importDefault(8185)(obj);
  obj1.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(require(1438) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp6);
  return obj1;
};
