// Module ID: 19398
// Function ID: 19399
// Name: CreateInstantInviteUtils
// Dependencies: [4902, 4904, 1084, 2]
// Exports: getInvitableChannelForGuild

// Module 19398 (CreateInstantInviteUtils)
import Constants from "Constants" /* 1084 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4902 */;
import PermissionStore from "PermissionStore" /* 4904 */;
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
