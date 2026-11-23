// Module ID: 20069
// Function ID: 20070
// Name: CreateInstantInviteUtils
// Dependencies: [4843, 4845, 1071, 2]
// Exports: getInvitableChannelForGuild

// Module 20069 (CreateInstantInviteUtils)
import Constants from "Constants" /* 1071 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import size from "module_2" /* 2 */;

let _window;
let map;
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: _window, GUILD_VOCAL_CHANNELS_KEY: map } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("utils/CreateInstantInviteUtils.tsx");

export function getInvitableChannelForGuild(guildId) {
  const channels = GuildChannelStore.getChannels(guildId);
  const items = [...channels[closure_1_1]];
  return items.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
}
