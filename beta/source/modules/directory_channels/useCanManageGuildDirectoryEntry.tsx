// Module ID: 11790
// Function ID: 11791
// Name: useCanManageGuildDirectoryEntry
// Dependencies: [2045, 2067, 4469, 1074, 504, 2]
// Exports: default, useCanCreateOrAddGuildInDirectory

// Module 11790 (useCanManageGuildDirectoryEntry)
import Constants from "Constants" /* 1074 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, dependencyMap;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default function useCanManageGuildDirectoryEntry(arg0) {
  let closure_0;
  let closure_1;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  dependencyMap = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0.guildId));
  const items1 = [closure_2];
  const obj2 = require("get initialized");
  closure_2 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(closure_0.channelId));
  const items2 = [PermissionStore];
  const obj3 = require("get initialized");
  let stateFromStores = obj3.useStateFromStores(items2, () => PermissionStore.can(Permissions.ADMINISTRATOR, closure_1));
  const items3 = [PermissionStore];
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items3, () => PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_2));
  const obj5 = { isEntryAdmin: stateFromStores, canEdit: stateFromStores || stateFromStores1, canRemove: stateFromStores };
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  return obj5;
};
export const useCanCreateOrAddGuildInDirectory = function useCanCreateOrAddGuildInDirectory(channel) {
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PermissionStore.can(Permissions.SEND_MESSAGES, channel));
};
