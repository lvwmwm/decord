// Module ID: 8631
// Function ID: 8632
// Name: GuildReportRaidSystemMessage
// Dependencies: [4990, 5012, 8535, 8542, 8624, 8544, 8625, 8546, 1113, 1414, 1411, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 8631 (GuildReportRaidSystemMessage)
import intl3 from "intl" /* 1113 */;
import AvatarUtils from "AvatarUtils" /* 1411 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1414 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8535 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8542 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8544 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8624 */;
import getTagPropertiesDefault from "getTagProperties" /* 8625 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import GuildStore from "GuildStore" /* 5012 */;
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
  const merged = Object.assign(tmp(8546)(roleStyle));
  intl = tmp8(1113).intl;
  intl2 = tmp8(1113).intl;
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
