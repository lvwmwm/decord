// Module ID: 8051
// Function ID: 8052
// Name: GuildReportFalseAlarmSystemMessage
// Dependencies: [2064, 7953, 7960, 8043, 7962, 8044, 7964, 1126, 1418, 1415, 2]
// Exports: createGuildReportFalseAlarmSystemMessage

// Module 8051 (GuildReportFalseAlarmSystemMessage)
import intl3 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1418 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7953 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8043 */;
import getTagPropertiesDefault from "getTagProperties" /* 8044 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx");

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
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
  const channel = ChannelStore.getChannel(message.channel_id);
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = GuildAlertModeSystemMessage;
  let automodUsernameColor = obj2.resolveAlertModeColors(theme).automodUsernameColor;
  const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  const obj4 = { content: intl.formatToParts(intl3.t["21+uW4"], obj3), username: intl2.string(intl3.t.hG1StD), usernameColor: automodUsernameColor, avatarURL: ensureAvatarSource(makeSource(tmp4Result4.getAutomodAvatarURL())).uri };
  const tmp7 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp2 });
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
  const merged1 = Object.assign(tmp7);
  return obj4;
};
