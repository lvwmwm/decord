// Module ID: 8042
// Function ID: 8043
// Name: GuildReportRaidSystemMessage
// Dependencies: [2063, 2086, 7944, 7951, 8035, 7953, 8036, 7955, 1126, 1417, 1414, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 8042 (GuildReportRaidSystemMessage)
import intl3 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1417 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7944 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7951 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7953 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8035 */;
import getTagPropertiesDefault from "getTagProperties" /* 8036 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx");

export const createGuildReportRaidSystemMessage = function createGuildReportRaidSystemMessage(roleStyle) {
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
  const merged = Object.assign(tmp(7955)(roleStyle));
  intl = tmp8(1126).intl;
  intl2 = tmp8(1126).intl;
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
};
