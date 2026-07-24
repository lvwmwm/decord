// Module ID: 7815
// Function ID: 61762
// Name: createGuildReportRaidSystemMessage
// Dependencies: [1348, 1838, 7731, 7738, 7808, 7740, 7809, 7741, 1212, 1395, 1392, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 7815 (createGuildReportRaidSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx");

export const createGuildReportRaidSystemMessage = function createGuildReportRaidSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  channel = channel.getChannel(message.channel_id);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  guild = guild.getGuild(guild_id);
  let obj = require(7738) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp = importDefault(7731)(theme);
  const automodUsernameColor = require(7808) /* nativeStyleProperties */.resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(7740)({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  let name;
  if (null != guild) {
    name = guild.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj.guildName = str;
  const obj2 = require(7808) /* nativeStyleProperties */;
  obj = {};
  const merged = Object.assign(importDefault(7741)(roleStyle));
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["content"] = intl.formatToParts(require(1212) /* getSystemLocale */.t["MTmH+u"], obj);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj["username"] = intl2.string(require(1212) /* getSystemLocale */.t.hG1StD);
  let tmp10 = null;
  if (null != automodUsernameColor) {
    tmp10 = automodUsernameColor;
  }
  obj["usernameColor"] = tmp10;
  const tmp8 = importDefault(7809)({ message, channel, isSystemDM: true, colors: tmp });
  const obj5 = require(1395) /* ensureAvatarSource */;
  const obj6 = require(1392) /* getAvatarURL */;
  obj["avatarURL"] = obj5.ensureAvatarSource(obj6.makeSource(require(1395) /* ensureAvatarSource */.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp8);
  return obj;
};
