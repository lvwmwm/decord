// Module ID: 7719
// Function ID: 61417
// Name: createGuildReportRaidSystemMessage
// Dependencies: []
// Exports: createGuildReportRaidSystemMessage

// Module 7719 (createGuildReportRaidSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx");

export const createGuildReportRaidSystemMessage = function createGuildReportRaidSystemMessage(roleStyle) {
  let message;
  let theme;
  ({ message, theme } = roleStyle);
  const channel = channel.getChannel(message.channel_id);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const guild = guild.getGuild(guild_id);
  let obj = arg1(dependencyMap[3]);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp = importDefault(dependencyMap[2])(theme);
  const automodUsernameColor = arg1(dependencyMap[4]).resolveAlertModeColors(theme).automodUsernameColor;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: importDefault(dependencyMap[5])({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  let name;
  if (null != guild) {
    name = guild.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj.guildName = str;
  const obj2 = arg1(dependencyMap[4]);
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[7])(roleStyle));
  const intl = arg1(dependencyMap[8]).intl;
  obj["content"] = intl.formatToParts(arg1(dependencyMap[8]).t.MTmH+u, obj);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj["username"] = intl2.string(arg1(dependencyMap[8]).t.hG1StD);
  let tmp10 = null;
  if (null != automodUsernameColor) {
    tmp10 = automodUsernameColor;
  }
  obj["usernameColor"] = tmp10;
  const tmp8 = importDefault(dependencyMap[6])({ message, channel, isSystemDM: true, colors: tmp });
  const obj5 = arg1(dependencyMap[9]);
  const obj6 = arg1(dependencyMap[10]);
  obj["avatarURL"] = obj5.ensureAvatarSource(obj6.makeSource(arg1(dependencyMap[9]).getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp8);
  return obj;
};
