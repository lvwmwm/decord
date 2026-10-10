// Module ID: 8061
// Function ID: 8062
// Name: GuildAlertModeSystemMessage
// Dependencies: [2065, 5092, 587, 7971, 7978, 7980, 1126, 8062, 7982, 1418, 1415, 2]
// Exports: createGuildAlertModeDisabledSystemMessage, createGuildAlertModeEnabledSystemMessage

// Module 8061 (GuildAlertModeSystemMessage)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1418 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7971 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7978 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7980 */;
import createCommonMessageDefault from "createCommonMessage" /* 7982 */;
import getTagPropertiesDefault from "getTagProperties" /* 8062 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let obj = { automodUsernameColor: nativeDefault.colors.TEXT_BRAND };
const nativeStyleProperties = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx");

export const resolveAlertModeColors = nativeStyleProperties;
export const createGuildAlertModeEnabledSystemMessage = function createGuildAlertModeEnabledSystemMessage(roleStyle) {
  let ensureAvatarSource;
  let intl;
  let intl2;
  let makeSource;
  let message;
  let str;
  let theme;
  let tmp5Result4;
  ({ message, theme } = roleStyle);
  roleStyle = roleStyle.roleStyle;
  const tmp3 = resolveMessageContentColorsDefault(theme);
  const channel = ChannelStore.getChannel(message.channel_id);
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = nativeStyleProperties(theme).automodUsernameColor;
  const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), time: str };
  str = "";
  if ("" !== message.content) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(message.content);
    str = date.toLocaleString(tmp5(1126).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  const obj3 = { content: intl.formatToParts(intl3.t.ig55n6, obj2), username: intl2.string(intl3.t.hG1StD), usernameColor: automodUsernameColor, avatarURL: ensureAvatarSource(makeSource(tmp5Result4.getAutomodAvatarURL())).uri };
  const tmp10 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp3 });
  const merged = Object.assign(tmp(7982)(roleStyle));
  intl = tmp5(1126).intl;
  intl2 = tmp5(1126).intl;
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  ensureAvatarSource = utils_AvatarUtils.ensureAvatarSource;
  utils_AvatarUtils;
  makeSource = AvatarUtils.makeSource;
  AvatarUtils;
  tmp5Result4 = utils_AvatarUtils;
  const merged1 = Object.assign(tmp10);
  return obj3;
};
export const createGuildAlertModeDisabledSystemMessage = function createGuildAlertModeDisabledSystemMessage(roleStyle) {
  let ensureAvatarSource;
  let intl;
  let intl2;
  let makeSource;
  let message;
  let theme;
  let tmp4Result4;
  ({ message, theme } = roleStyle);
  roleStyle = roleStyle.roleStyle;
  const tmp2 = resolveMessageContentColorsDefault(theme);
  let automodUsernameColor = nativeStyleProperties(theme).automodUsernameColor;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj3 = { message, channel: "IconComponent", isSystemDM: null, colors: tmp2 };
  const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  const obj4 = { content: intl.formatToParts(intl3.t.cyq2WA, obj2), username: intl2.string(intl3.t.hG1StD), usernameColor: automodUsernameColor, avatarURL: ensureAvatarSource(makeSource(tmp4Result4.getAutomodAvatarURL())).uri };
  const tmp6 = getTagPropertiesDefault(obj3);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  intl = intl3.intl;
  intl2 = intl3.intl;
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  ensureAvatarSource = utils_AvatarUtils.ensureAvatarSource;
  utils_AvatarUtils;
  makeSource = AvatarUtils.makeSource;
  AvatarUtils;
  tmp4Result4 = utils_AvatarUtils;
  const merged1 = Object.assign(tmp6);
  return obj4;
};
