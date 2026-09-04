// Module ID: 7970
// Function ID: 7971
// Name: createGuildReportRaidSystemMessage
// Dependencies: [1386, 1908, 7884, 7891, 7963, 7893, 7964, 7895, 1233, 1434, 1431, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 7970 (createGuildReportRaidSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1434 */;
import resultDefault from "result" /* 7884 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7891 */;
import nativeStyleProperties from "nativeStyleProperties" /* 7963 */;
import getTagPropertiesDefault from "getTagProperties" /* 7964 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx");

export const createGuildReportRaidSystemMessage = function createGuildReportRaidSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  guild = guild.getGuild(guild_id);
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = resultDefault(theme);
  let automodUsernameColor = nativeStyleProperties.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp(7893)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), guildName: null };
  let str;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  obj[2] = str;
  const obj2 = nativeStyleProperties;
  obj = {};
  const merged = Object.assign(tmp(7895)(roleStyle));
  const intl = tmp8(1233).intl;
  obj.content = intl.formatToParts(getSystemLocale.t["MTmH+u"], obj);
  const intl2 = tmp8(1233).intl;
  obj.username = intl2.string(getSystemLocale.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp8Result = tmp8(1434);
  tmp8Result = tmp8(1431);
  const tmp11 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp3 });
  obj.avatarURL = tmp8Result.ensureAvatarSource(tmp8Result.makeSource(ensureAvatarSource.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp11);
  return obj;
};
