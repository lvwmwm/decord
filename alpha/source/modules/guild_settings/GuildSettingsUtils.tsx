// Module ID: 19130
// Function ID: 19131
// Name: GuildSettingsUtils
// Dependencies: [4878, 1087, 1099, 18284, 2]
// Exports: getPowerfulPermissionTitles, isRolePowerful

// Module 19130 (GuildSettingsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1099 */;
import GuildRoleRecord from "GuildRoleRecord" /* 4878 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 18284 */;
import Constants from "Constants" /* 1087 */;
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
