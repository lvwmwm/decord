// Module ID: 9273
// Function ID: 9274
// Name: GuildAlertModeSystemMessage
// Dependencies: [5155, 5306, 575, 9181, 9188, 9190, 1113, 9274, 9192, 1417, 1414, 2]
// Exports: createGuildAlertModeDisabledSystemMessage, createGuildAlertModeEnabledSystemMessage

// Module 9273 (GuildAlertModeSystemMessage)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1417 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 9181 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 9188 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 9190 */;
import createCommonMessageDefault from "createCommonMessage" /* 9192 */;
import getTagPropertiesDefault from "getTagProperties" /* 9274 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import createStyles from "createStyles" /* 5306 */;
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
  const merged = Object.assign(tmp(9192)(roleStyle));
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
