// Module ID: 4701
// Function ID: 4702
// Name: GuildRoleRecord
// Dependencies: [4658, 1083, 12, 2]
// Exports: hasAnyPermission, hasPermission, isEveryoneRole, isRoleEqual

// Module 4701 (GuildRoleRecord)
import _modDef12 from "module_12" /* 12 */;
import BigFlagUtils from "BigFlagUtils" /* 1083 */;
import PlainRecord from "PlainRecord" /* 4658 */;
import size from "module_2" /* 2 */;

const TypeTag = PlainRecord.TypeTag;
const result = size.fileFinishedImporting("records/GuildRoleRecord.tsx");

export const GuildRoleRecordTypeTag = "GuildRole";
export function isEveryoneRole(role) {
  return role.id === role.guildId;
}
export function hasPermission(permissions, arg1) {
  const obj = BigFlagUtils;
  return obj.has(permissions.permissions, arg1);
}
export function hasAnyPermission(permissions, arg1) {
  const obj = BigFlagUtils;
  return obj.hasAny(permissions.permissions, arg1);
}
export function isRoleEqual(found, arg1) {
  let obj = _modDef12;
  return obj.isEqualWith(found, arg1, (arg0, arg1, arg2) => {
    let equalsResult;
    if ("permissions" === arg2) {
      const obj = BigFlagUtils;
      equalsResult = obj.equals(arg0, arg1);
    }
    return equalsResult;
  });
}
