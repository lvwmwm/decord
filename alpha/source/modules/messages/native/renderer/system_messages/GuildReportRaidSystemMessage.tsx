// Module ID: 14421
// Function ID: 14422
// Name: GuildReportRaidSystemMessage
// Dependencies: [4892, 4914, 14375, 12008, 14418, 14379, 14419, 14380, 1112, 1416, 1413, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 14421 (GuildReportRaidSystemMessage)
import intl3 from "intl" /* 1112 */;
import AvatarUtils from "AvatarUtils" /* 1413 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1416 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12008 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 14375 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14379 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 14418 */;
import getTagPropertiesDefault from "getTagProperties" /* 14419 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
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
  const merged = Object.assign(tmp(14380)(roleStyle));
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
