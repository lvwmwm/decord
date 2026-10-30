// Module ID: 15745
// Function ID: 15746
// Name: GuildActionSheetUtils
// Dependencies: [4941, 1072, 504, 2]
// Exports: useGuildActionSheetPermissions

// Module 15745 (GuildActionSheetUtils)
import Constants from "Constants" /* 1072 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetUtils.tsx");

export function useGuildActionSheetPermissions(guild) {
  _require = guild;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [guild];
  return obj.useStateFromStoresObject(items, () => {
    let obj;
    if (null == guild) {
      obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
    } else {
      obj = { canAccessSettings: PermissionStore.canAccessGuildSettings(guild), canEditNickname: PermissionStore.can(Permissions.CHANGE_NICKNAME, guild) || PermissionStore.can(Permissions.MANAGE_NICKNAMES, guild), canManageChannels: PermissionStore.can(Permissions.MANAGE_CHANNELS, guild) };
      PermissionStore.can(Permissions.CHANGE_NICKNAME, guild) || PermissionStore.can(Permissions.MANAGE_NICKNAMES, guild);
    }
    return obj;
  }, items1);
}
