// Module ID: 7814
// Function ID: 7815
// Name: nativeStyleProperties
// Dependencies: [1372, 4189, 712, 7736, 7743, 7745, 1236, 7815, 7746, 1419, 1416, 2]
// Exports: createGuildAlertModeDisabledSystemMessage, createGuildAlertModeEnabledSystemMessage

// Module 7814 (nativeStyleProperties)
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
  let obj = require(7743) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = createCacheKey(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7745)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), time: null };
  let str = "";
  if ("" !== message.content) {
    const _Date = Date;
    const date = new Date(message.content);
    str = date.toLocaleString(tmp5(1236).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  obj[2] = str;
  const tmp3 = importDefault(7736)(theme);
  obj = {};
  const merged = Object.assign(tmp(7746)(roleStyle));
  const intl = tmp5(1236).intl;
  obj.content = intl.formatToParts(require(1236) /* getSystemLocale */.t.ig55n6, obj);
  const intl2 = tmp5(1236).intl;
  obj.username = intl2.string(require(1236) /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp5Result = tmp5(1419);
  tmp5Result = tmp5(1416);
  const tmp12 = importDefault(7815)({ message, channel, isSystemDM: true, colors: importDefault(7736)(theme) });
  obj.avatarURL = tmp5Result.ensureAvatarSource(tmp5Result.makeSource(require(1419) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp12);
  return obj;
};
export const createGuildAlertModeDisabledSystemMessage = function createGuildAlertModeDisabledSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  let automodUsernameColor = createCacheKey(theme).automodUsernameColor;
  let obj = require(7743) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7745)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj = { message, channel: "HermesInternal", isSystemDM: null, colors: "md" };
  obj[3] = importDefault(7736)(theme);
  const tmp2 = importDefault(7736)(theme);
  const obj1 = {};
  const merged = Object.assign(importDefault(7746)(roleStyle));
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1.content = intl.formatToParts(require(1236) /* getSystemLocale */.t.cyq2WA, obj);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1.username = intl2.string(require(1236) /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj1.usernameColor = automodUsernameColor;
  let tmp4Result = tmp4(1419);
  tmp4Result = tmp4(1416);
  const tmp6 = importDefault(7815)(obj);
  obj1.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result.makeSource(require(1419) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp6);
  return obj1;
};
