// Module ID: 19794
// Function ID: 19795
// Name: GuildSettingsUtils
// Dependencies: [4921, 1072, 1084, 18911, 2]
// Exports: getPowerfulPermissionTitles, isRolePowerful

// Module 19794 (GuildSettingsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import GuildRoleRecord from "GuildRoleRecord" /* 4921 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 18911 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const hasPermission = GuildRoleRecord.hasPermission;
({ ElevatedPermissions: closure_4, ElevatedPermissionsList: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsUtils.tsx");

export function isRolePowerful(role) {
  const obj = BigFlagUtilsAll;
  return obj.hasAny(role.permissions, React3);
}
export function getPowerfulPermissionTitles(arg0, arg1) {
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
}
