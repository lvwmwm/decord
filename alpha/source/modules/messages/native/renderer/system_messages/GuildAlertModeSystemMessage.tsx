// Module ID: 9207
// Function ID: 9208
// Name: GuildAlertModeSystemMessage
// Dependencies: [5092, 5243, 575, 9115, 9122, 9124, 1113, 9208, 9126, 1414, 1411, 2]
// Exports: createGuildAlertModeDisabledSystemMessage, createGuildAlertModeEnabledSystemMessage

// Module 9207 (GuildAlertModeSystemMessage)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import AvatarUtils from "AvatarUtils" /* 1411 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1414 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 9115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 9122 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 9124 */;
import createCommonMessageDefault from "createCommonMessage" /* 9126 */;
import getTagPropertiesDefault from "getTagProperties" /* 9208 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let obj = { automodUsernameColor: nativeDefault.colors.TEXT_BRAND };
const nativeStyleProperties = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildAlertModeSystemMessage.tsx");

export const resolveAlertModeColors = nativeStyleProperties;
export function createGuildAlertModeEnabledSystemMessage(roleStyle) {
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
    str = date.toLocaleString(tmp5(1113).intl.currentLocale, { hour: "numeric", minute: "2-digit" });
  }
  const obj3 = { content: intl.formatToParts(intl3.t.ig55n6, obj2), username: intl2.string(intl3.t.hG1StD), usernameColor: automodUsernameColor, avatarURL: ensureAvatarSource(makeSource(tmp5Result4.getAutomodAvatarURL())).uri };
  const tmp10 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp3 });
  const merged = Object.assign(tmp(9126)(roleStyle));
  intl = tmp5(1113).intl;
  intl2 = tmp5(1113).intl;
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
}
export function createGuildAlertModeDisabledSystemMessage(roleStyle) {
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
  const obj3 = { message, channel: "HermesInternal", isSystemDM: null, colors: tmp2 };
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
}
