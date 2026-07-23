// Module ID: 12968
// Function ID: 100393
// Name: useGuildActionSheetPermissions
// Dependencies: [3758, 653, 566, 2]
// Exports: useGuildActionSheetPermissions

// Module 12968 (useGuildActionSheetPermissions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetUtils.tsx");

export const useGuildActionSheetPermissions = function useGuildActionSheetPermissions(guild) {
  const _require = guild;
  const items = [_isNativeReflectConstruct];
  const items1 = [guild];
  return _require(566).useStateFromStoresObject(items, () => {
    if (null == closure_0) {
      let obj = { canAccessSettings: false, canEditNickname: false, canManageChannels: false };
    } else {
      obj = { canAccessSettings: outer1_2.canAccessGuildSettings(closure_0) };
      let canResult = outer1_2.can(outer1_3.CHANGE_NICKNAME, closure_0);
      if (!canResult) {
        canResult = outer1_2.can(outer1_3.MANAGE_NICKNAMES, closure_0);
      }
      obj.canEditNickname = canResult;
      obj.canManageChannels = outer1_2.can(outer1_3.MANAGE_CHANNELS, closure_0);
    }
    return obj;
  }, items1);
};
