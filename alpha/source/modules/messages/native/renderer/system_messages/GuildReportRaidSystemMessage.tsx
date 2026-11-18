// Module ID: 8699
// Function ID: 8700
// Name: GuildReportRaidSystemMessage
// Dependencies: [4672, 4694, 8603, 8610, 8693, 8612, 8694, 8614, 1113, 1417, 1414, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 8699 (GuildReportRaidSystemMessage)
import intl3 from "intl" /* 1113 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1417 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8603 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8610 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8612 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8693 */;
import getTagPropertiesDefault from "getTagProperties" /* 8694 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import GuildStore from "GuildStore" /* 4694 */;
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
  const merged = Object.assign(tmp(8614)(roleStyle));
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
