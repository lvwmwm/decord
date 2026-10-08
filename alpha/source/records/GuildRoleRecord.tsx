// Module ID: 2119
// Function ID: 2120
// Name: GuildRoleRecord
// Dependencies: [2079, 1097, 12, 2]
// Exports: hasAnyPermission, hasPermission, isEveryoneRole, isRoleEqual

// Module 2119 (GuildRoleRecord)
import _modDef12 from "module_12" /* 12 */;
import BigFlagUtils from "BigFlagUtils" /* 1097 */;
import PlainRecord from "PlainRecord" /* 2079 */;
import size from "module_2" /* 2 */;

const TypeTag = PlainRecord.TypeTag;
const result = size.fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export const isEveryoneRole = function isEveryoneRole(role) {
  return role.id === role.guildId;
};
export const hasPermission = function hasPermission(permissions, arg1) {
  const obj = BigFlagUtils;
  return obj.has(permissions.permissions, arg1);
};
export const hasAnyPermission = function hasAnyPermission(permissions, arg1) {
  const obj = BigFlagUtils;
  return obj.hasAny(permissions.permissions, arg1);
};
export const isRoleEqual = function isRoleEqual(found, arg1) {
  let obj = _modDef12;
  return obj.isEqualWith(found, arg1, (arg0, arg1, arg2) => {
    let equalsResult;
    if ("permissions" === arg2) {
      const obj = BigFlagUtils;
      equalsResult = obj.equals(arg0, arg1);
    }
    return equalsResult;
  });
};
