// Module ID: 8086
// Function ID: 8087
// Name: createGuildReportRaidSystemMessage
// Dependencies: [1372, 1891, 8002, 8009, 8079, 8011, 8080, 8012, 1236, 1419, 1416, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 8086 (createGuildReportRaidSystemMessage)
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx");

export const createGuildReportRaidSystemMessage = function createGuildReportRaidSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  guild = guild.getGuild(guild_id);
  let obj = require(8009) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = importDefault(8002)(theme);
  let automodUsernameColor = require(8079) /* nativeStyleProperties */.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp(8011)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), guildName: null };
  let str;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  obj[2] = str;
  const obj2 = require(8079) /* nativeStyleProperties */;
  obj = {};
  const merged = Object.assign(tmp(8012)(roleStyle));
  const intl = tmp8(1236).intl;
  obj.content = intl.formatToParts(require(1236) /* getSystemLocale */.t["MTmH+u"], obj);
  const intl2 = tmp8(1236).intl;
  obj.username = intl2.string(require(1236) /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp8Result = tmp8(1419);
  tmp8Result = tmp8(1416);
  const tmp11 = importDefault(8080)({ message, channel, isSystemDM: true, colors: tmp3 });
  obj.avatarURL = tmp8Result.ensureAvatarSource(tmp8Result.makeSource(require(1419) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp11);
  return obj;
};
