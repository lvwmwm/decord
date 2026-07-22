// Module ID: 16372
// Function ID: 126339
// Name: getInvitableChannelForGuild
// Dependencies: []
// Exports: getInvitableChannelForGuild

// Module 16372 (getInvitableChannelForGuild)
const _module = require(dependencyMap[0]);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_0, GUILD_VOCAL_CHANNELS_KEY: closure_1 } = _module);
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Permissions = require(dependencyMap[2]).Permissions;
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export const getInvitableChannelForGuild = function getInvitableChannelForGuild(guildId) {
  const channels = channels.getChannels(guildId);
  const items = [...channels[closure_1]];
  return items.find((channel) => closure_3.can(constants.CREATE_INSTANT_INVITE, channel.channel));
};
