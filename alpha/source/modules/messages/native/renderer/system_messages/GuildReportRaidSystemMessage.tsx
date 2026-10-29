// Module ID: 8465
// Function ID: 8466
// Name: GuildReportRaidSystemMessage
// Dependencies: [4857, 4879, 8366, 8373, 8458, 8375, 8459, 8377, 1125, 1418, 1415, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 8465 (GuildReportRaidSystemMessage)
import intl3 from "intl" /* 1125 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1418 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8366 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8373 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8375 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8458 */;
import getTagPropertiesDefault from "getTagProperties" /* 8459 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildStore from "GuildStore" /* 4879 */;
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
  const merged = Object.assign(tmp(8377)(roleStyle));
  intl = tmp8(1125).intl;
  intl2 = tmp8(1125).intl;
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
