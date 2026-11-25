// Module ID: 14362
// Function ID: 14363
// Name: GuildReportRaidSystemMessage
// Dependencies: [4861, 4883, 14316, 11952, 14359, 14320, 14360, 14321, 1112, 1415, 1412, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 14362 (GuildReportRaidSystemMessage)
import intl3 from "intl" /* 1112 */;
import AvatarUtils from "AvatarUtils" /* 1412 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1415 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 11952 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 14316 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14320 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 14359 */;
import getTagPropertiesDefault from "getTagProperties" /* 14360 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildStore from "GuildStore" /* 4883 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx");

export function createGuildReportRaidSystemMessage(roleStyle) {
  let ensureAvatarSource;
  let intl;
  let intl2;
  let makeSource;
  let message;
  let str;
  let theme;
  let tmp8Result4;
  ({ message, theme } = roleStyle);
  roleStyle = roleStyle.roleStyle;
  const tmp3 = resolveMessageContentColorsDefault(theme);
  const channel = ChannelStore.getChannel(message.channel_id);
  let guild_id;
  const getGuild = GuildStore.getGuild;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const guild = getGuild(guild_id);
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = GuildAlertModeSystemMessage;
  let automodUsernameColor = obj2.resolveAlertModeColors(theme).automodUsernameColor;
  const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }), guildName: str };
  str = undefined;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  const obj4 = { content: intl.formatToParts(intl3.t["MTmH+u"], obj3), username: intl2.string(intl3.t.hG1StD), usernameColor: automodUsernameColor, avatarURL: ensureAvatarSource(makeSource(tmp8Result4.getAutomodAvatarURL())).uri };
  const tmp11 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp3 });
  const merged = Object.assign(tmp(14321)(roleStyle));
  intl = tmp8(1112).intl;
  intl2 = tmp8(1112).intl;
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  ensureAvatarSource = utils_AvatarUtils.ensureAvatarSource;
  utils_AvatarUtils;
  makeSource = AvatarUtils.makeSource;
  AvatarUtils;
  tmp8Result4 = utils_AvatarUtils;
  const merged1 = Object.assign(tmp11);
  return obj4;
}
