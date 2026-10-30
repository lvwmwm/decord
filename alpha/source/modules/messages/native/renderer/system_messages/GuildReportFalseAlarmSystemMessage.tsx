// Module ID: 8500
// Function ID: 8501
// Name: GuildReportFalseAlarmSystemMessage
// Dependencies: [4858, 8403, 8410, 8492, 8412, 8493, 8414, 1114, 1413, 1410, 2]
// Exports: createGuildReportFalseAlarmSystemMessage

// Module 8500 (GuildReportFalseAlarmSystemMessage)
import intl3 from "intl" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1413 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8403 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8410 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8412 */;
import createCommonMessageDefault from "createCommonMessage" /* 8414 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8492 */;
import getTagPropertiesDefault from "getTagProperties" /* 8493 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx");

export function createGuildReportFalseAlarmSystemMessage(roleStyle) {
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
}
