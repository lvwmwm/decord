// Module ID: 7713
// Function ID: 61425
// Name: nativeStyleProperties
// Dependencies: []
// Exports: createGuildAlertModeDisabledSystemMessage, createGuildAlertModeEnabledSystemMessage

// Module 7713 (nativeStyleProperties)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
obj = { automodUsernameColor: importDefault(dependencyMap[2]).colors.TEXT_BRAND };
const nativeStyleProperties = obj.createNativeStyleProperties(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx");

export const resolveAlertModeColors = nativeStyleProperties;
export const createGuildAlertModeEnabledSystemMessage = function createGuildAlertModeEnabledSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  const channel = channel.getChannel(message.channel_id);
  let obj = arg1(dependencyMap[4]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const automodUsernameColor = nativeStyleProperties(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[5])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  let str = "";
  if ("" !== message.content) {
    const _Date = Date;
    const date = new Date(message.content);
    str = date.toLocaleString(arg1(dependencyMap[6]).intl.currentLocale, { -17117184: true, 0: true });
  }
  obj.time = str;
  const tmp = importDefault(dependencyMap[3])(theme);
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[8])(roleStyle));
  const intl = arg1(dependencyMap[6]).intl;
  obj["content"] = intl.formatToParts(arg1(dependencyMap[6]).t.ig55n6, obj);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj["username"] = intl2.string(arg1(dependencyMap[6]).t.hG1StD);
  let tmp12 = null;
  if (null != automodUsernameColor) {
    tmp12 = automodUsernameColor;
  }
  obj["usernameColor"] = tmp12;
  const tmp10 = importDefault(dependencyMap[7])({ message, channel, isSystemDM: true, colors: importDefault(dependencyMap[3])(theme) });
  const obj5 = arg1(dependencyMap[9]);
  const obj6 = arg1(dependencyMap[10]);
  obj["avatarURL"] = obj5.ensureAvatarSource(obj6.makeSource(arg1(dependencyMap[9]).getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp10);
  return obj;
};
export const createGuildAlertModeDisabledSystemMessage = function createGuildAlertModeDisabledSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  const automodUsernameColor = nativeStyleProperties(theme).automodUsernameColor;
  let obj = arg1(dependencyMap[4]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[5])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const tmp = importDefault(dependencyMap[3])(theme);
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[8])(roleStyle));
  const intl = arg1(dependencyMap[6]).intl;
  obj["content"] = intl.formatToParts(arg1(dependencyMap[6]).t.cyq2WA, obj);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj["username"] = intl2.string(arg1(dependencyMap[6]).t.hG1StD);
  let tmp5 = null;
  if (null != automodUsernameColor) {
    tmp5 = automodUsernameColor;
  }
  obj["usernameColor"] = tmp5;
  const tmp3 = importDefault(dependencyMap[7])({ message, channel: undefined, isSystemDM: true, colors: importDefault(dependencyMap[3])(theme) });
  const obj4 = arg1(dependencyMap[9]);
  const obj5 = arg1(dependencyMap[10]);
  obj["avatarURL"] = obj4.ensureAvatarSource(obj5.makeSource(arg1(dependencyMap[9]).getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp3);
  return obj;
};
