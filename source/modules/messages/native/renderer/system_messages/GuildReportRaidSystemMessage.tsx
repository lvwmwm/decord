// Module ID: 8148
// Function ID: 8149
// Name: createGuildReportRaidSystemMessage
// Dependencies: [1391, 1910, 8064, 8071, 8141, 8073, 8142, 8074, 1236, 1438, 1435, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 8148 (createGuildReportRaidSystemMessage)
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
  let obj = require(8071) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp3 = importDefault(8064)(theme);
  let automodUsernameColor = require(8141) /* nativeStyleProperties */.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp(8073)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), guildName: null };
  let str;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  obj[2] = str;
  const obj2 = require(8141) /* nativeStyleProperties */;
  obj = {};
  const merged = Object.assign(tmp(8074)(roleStyle));
  const intl = tmp8(1236).intl;
  obj.content = intl.formatToParts(require(1236) /* getSystemLocale */.t["MTmH+u"], obj);
  const intl2 = tmp8(1236).intl;
  obj.username = intl2.string(require(1236) /* getSystemLocale */.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj.usernameColor = automodUsernameColor;
  let tmp8Result = tmp8(1438);
  tmp8Result = tmp8(1435);
  const tmp11 = importDefault(8142)({ message, channel, isSystemDM: true, colors: tmp3 });
  obj.avatarURL = tmp8Result.ensureAvatarSource(tmp8Result.makeSource(require(1438) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp11);
  return obj;
};
