// Module ID: 14319
// Function ID: 14320
// Name: GuildActionSheetUtils
// Dependencies: [4462, 1074, 504, 2]
// Exports: useGuildActionSheetPermissions

// Module 14319 (GuildActionSheetUtils)
import PermissionStore from "PermissionStore" /* 4462 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetUtils.tsx");

export const useGuildActionSheetPermissions = function useGuildActionSheetPermissions(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  return require("initialize").useStateFromStoresObject(items, () => {
    if (null == closure_0) {
      let obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
    } else {
      obj = { canAccessSettings: PermissionStore.canAccessGuildSettings(tmp), canEditNickname: PermissionStore.can(Permissions.CHANGE_NICKNAME, tmp) || PermissionStore.can(Permissions.MANAGE_NICKNAMES, tmp), canManageChannels: PermissionStore.can(Permissions.MANAGE_CHANNELS, tmp) };
      const tmp3 = PermissionStore.can(Permissions.CHANGE_NICKNAME, tmp) || PermissionStore.can(Permissions.MANAGE_NICKNAMES, tmp);
    }
    return obj;
  }, items1);
};
