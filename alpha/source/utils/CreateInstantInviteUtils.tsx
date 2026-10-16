// Module ID: 18938
// Function ID: 18939
// Name: CreateInstantInviteUtils
// Dependencies: [4807, 4809, 1087, 2]
// Exports: getInvitableChannelForGuild

// Module 18938 (CreateInstantInviteUtils)
import Constants from "Constants" /* 1087 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4807 */;
import PermissionStore from "PermissionStore" /* 4809 */;
import size from "module_2" /* 2 */;

let _window;
let map;
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: _window, GUILD_VOCAL_CHANNELS_KEY: map } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export const getInvitableChannelForGuild = function getInvitableChannelForGuild(guildId) {
  const channels = GuildChannelStore.getChannels(guildId);
  const items = [...channels[closure_1_1]];
  return items.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
};
