// Module ID: 4937
// Function ID: 4938
// Name: RolePermissionUtils
// Dependencies: [4921, 1072, 1084, 2]
// Exports: hasViewChannelPermission, isChannelAccessDeniedBy, isChannelAccessGrantedBy

// Module 4937 (RolePermissionUtils)
import Constants from "Constants" /* 1072 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import GuildRoleRecord from "GuildRoleRecord" /* 4921 */;
import size from "module_2" /* 2 */;

const hasPermission = GuildRoleRecord.hasPermission;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/RolePermissionUtils.tsx");

export function hasViewChannelPermission(arg0) {
  return hasPermission(arg0, Permissions.VIEW_CHANNEL);
}
export function isChannelAccessDeniedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    const obj = BigFlagUtilsAll;
    let hasItem = obj.has(deny.deny, Permissions.VIEW_CHANNEL);
    const tmp2 = importAll;
    const tmp4 = Permissions;
    if (!hasItem) {
      let isGuildVocalResult = isGuildVocal.isGuildVocal();
      if (isGuildVocalResult) {
        const tmp2Result = tmp2(1084);
        isGuildVocalResult = tmp2Result.has(deny.deny, tmp4.CONNECT);
      }
      hasItem = isGuildVocalResult;
    }
    tmp = hasItem;
  }
  return tmp;
}
export function isChannelAccessGrantedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    let tmp3 = null != deny;
    if (tmp3) {
      const obj = BigFlagUtilsAll;
      let hasItem1 = obj.has(deny.deny, Permissions.VIEW_CHANNEL);
      const tmp4 = importAll;
      const tmp6 = Permissions;
      if (!hasItem1) {
        let isGuildVocalResult = isGuildVocal.isGuildVocal();
        if (isGuildVocalResult) {
          const tmp4Result = tmp4(1084);
          isGuildVocalResult = tmp4Result.has(deny.deny, tmp6.CONNECT);
        }
        hasItem1 = isGuildVocalResult;
      }
      tmp3 = hasItem1;
    }
    let tmp9 = !tmp3;
    if (tmp9) {
      const obj3 = BigFlagUtilsAll;
      let hasItem2 = obj3.has(deny.allow, Permissions.VIEW_CHANNEL);
      const tmp10 = importAll;
      const tmp12 = Permissions;
      if (hasItem2) {
        const isGuildVocalResult1 = isGuildVocal.isGuildVocal();
        let hasItem = !isGuildVocalResult1;
        if (isGuildVocalResult1) {
          const tmp10Result = tmp10(1084);
          hasItem = tmp10Result.has(deny.allow, tmp12.CONNECT);
        }
        hasItem2 = hasItem;
      }
      tmp9 = hasItem2;
    }
    tmp = tmp9;
  }
  return tmp;
}
