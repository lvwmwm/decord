// Module ID: 8410
// Function ID: 8411
// Name: GuildDiscoverySystemMessage
// Dependencies: [4855, 4877, 1128, 8354, 2]
// Exports: createGuildDiscoveryDisqualifiedSystemMessage, createGuildDiscoveryGracePeriodFinalWarningSystemMessage, createGuildDiscoveryGracePeriodInitialWarningSystemMessage, createGuildDiscoveryRequalifiedSystemMessage

// Module 8410 (GuildDiscoverySystemMessage)
import intl3 from "intl" /* 1128 */;
import createCommonMessageDefault from "createCommonMessage" /* 8354 */;
import ChannelStore from "ChannelStore" /* 4855 */;
import GuildStore from "GuildStore" /* 4877 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx");

export const createGuildDiscoveryDisqualifiedSystemMessage = function createGuildDiscoveryDisqualifiedSystemMessage(message) {
  let formatToPartsResult;
  message = message.message;
  const channel = ChannelStore.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id == null) {
    const messageReference = message.messageReference;
    let guild_id1;
    if (messageReference != null) {
      guild_id1 = messageReference.guild_id;
    }
    guild_id = guild_id1;
  }
  const guild = GuildStore.getGuild(guild_id);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    name = null;
  }
  if (null != name) {
    const intl2 = intl3.intl;
    const obj = { guildName: name };
    formatToPartsResult = intl2.formatToParts(intl3.t.NaUZWO, obj);
  } else {
    const intl = intl3.intl;
    formatToPartsResult = intl.string(intl3.t.NxS3hY);
  }
  const obj2 = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
};
export const createGuildDiscoveryRequalifiedSystemMessage = function createGuildDiscoveryRequalifiedSystemMessage(message) {
  let intl;
  const obj = { content: intl.string(intl3.t.tu6tOR) };
  intl = intl3.intl;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodInitialWarningSystemMessage = function createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message) {
  let formatToPartsResult;
  message = message.message;
  const channel = ChannelStore.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id == null) {
    const messageReference = message.messageReference;
    let guild_id1;
    if (messageReference != null) {
      guild_id1 = messageReference.guild_id;
    }
    guild_id = guild_id1;
  }
  const guild = GuildStore.getGuild(guild_id);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    name = null;
  }
  if (null != name) {
    const intl2 = intl3.intl;
    const obj = { guildName: name };
    formatToPartsResult = intl2.formatToParts(intl3.t["fJP+Wx"], obj);
  } else {
    const intl = intl3.intl;
    formatToPartsResult = intl.string(intl3.t.BoiiWz);
  }
  const obj2 = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
};
export const createGuildDiscoveryGracePeriodFinalWarningSystemMessage = function createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message) {
  let formatToPartsResult;
  message = message.message;
  const channel = ChannelStore.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id == null) {
    const messageReference = message.messageReference;
    let guild_id1;
    if (messageReference != null) {
      guild_id1 = messageReference.guild_id;
    }
    guild_id = guild_id1;
  }
  const guild = GuildStore.getGuild(guild_id);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    name = null;
  }
  if (null != name) {
    const intl2 = intl3.intl;
    const obj = { guildName: name };
    formatToPartsResult = intl2.formatToParts(intl3.t.bPMe3o, obj);
  } else {
    const intl = intl3.intl;
    formatToPartsResult = intl.string(intl3.t.ED4mGc);
  }
  const obj2 = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
};
