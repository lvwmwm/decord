// Module ID: 17435
// Function ID: 17436
// Name: GuildSettingsUtils
// Dependencies: [2106, 1086, 1098, 16654, 2]
// Exports: getPowerfulPermissionTitles, isRolePowerful

// Module 17435 (GuildSettingsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1098 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2106 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 16654 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const hasPermission = GuildRoleRecord.hasPermission;
({ ElevatedPermissions: closure_4, ElevatedPermissionsList: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsUtils.tsx");

export const isRolePowerful = function isRolePowerful(role) {
  const obj = BigFlagUtilsAll;
  return obj.hasAny(role.permissions, React3);
};
export const getPowerfulPermissionTitles = function getPowerfulPermissionTitles(arg0, arg1) {
  const items = [];
  PermissionSpecUtilsDefault;
  for (const item10015 of hasOwnProperty) {
    let str = item10015;
    if (hasPermission(arg1, item10015)) {
      let arr = items.push(tmp2[str.toString(str)].title);
    }
    continue;
  }
  return items;
};
