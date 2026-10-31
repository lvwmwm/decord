// Module ID: 20004
// Function ID: 20005
// Name: CreateInstantInviteUtils
// Dependencies: [4944, 4946, 1072, 2]
// Exports: getInvitableChannelForGuild

// Module 20004 (CreateInstantInviteUtils)
import Constants from "Constants" /* 1072 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4944 */;
import PermissionStore from "PermissionStore" /* 4946 */;
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
