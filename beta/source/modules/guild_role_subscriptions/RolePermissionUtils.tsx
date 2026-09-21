// Module ID: 4391
// Function ID: 4392
// Name: RolePermissionUtils
// Dependencies: [2104, 1078, 1090, 2]
// Exports: hasViewChannelPermission, isChannelAccessDeniedBy, isChannelAccessGrantedBy

// Module 4391 (RolePermissionUtils)
import Constants from "Constants" /* 1078 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1090 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2104 */;
import size from "module_2" /* 2 */;

const hasPermission = GuildRoleRecord.hasPermission;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/RolePermissionUtils.tsx");

export const hasViewChannelPermission = function hasViewChannelPermission(arg0) {
  return hasPermission(arg0, Permissions.VIEW_CHANNEL);
};
export const isChannelAccessDeniedBy = function isChannelAccessDeniedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    let hasItem = BigFlagUtilsAll.has(deny.deny, Permissions.VIEW_CHANNEL);
    if (!hasItem) {
      let isGuildVocalResult = isGuildVocal.isGuildVocal();
      if (isGuildVocalResult) {
        isGuildVocalResult = tmp2(1090).has(deny.deny, tmp4.CONNECT);
        const tmp2Result = tmp2(1090);
      }
      hasItem = isGuildVocalResult;
    }
    tmp = hasItem;
    tmp2 = importAll;
    tmp4 = Permissions;
  }
  return tmp;
};
export const isChannelAccessGrantedBy = function isChannelAccessGrantedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    let tmp3 = null != deny;
    if (tmp3) {
      let hasItem1 = BigFlagUtilsAll.has(deny.deny, Permissions.VIEW_CHANNEL);
      if (!hasItem1) {
        let isGuildVocalResult = isGuildVocal.isGuildVocal();
        if (isGuildVocalResult) {
          isGuildVocalResult = tmp4(1090).has(deny.deny, tmp6.CONNECT);
          const tmp4Result = tmp4(1090);
        }
        hasItem1 = isGuildVocalResult;
      }
      tmp3 = hasItem1;
      tmp4 = importAll;
      tmp6 = Permissions;
    }
    let tmp9 = !tmp3;
    if (!tmp3) {
      let hasItem2 = BigFlagUtilsAll.has(deny.allow, Permissions.VIEW_CHANNEL);
      if (hasItem2) {
        const isGuildVocalResult1 = isGuildVocal.isGuildVocal();
        let hasItem = !isGuildVocalResult1;
        if (isGuildVocalResult1) {
          hasItem = tmp10(1090).has(deny.allow, tmp12.CONNECT);
          const tmp10Result = tmp10(1090);
        }
        hasItem2 = hasItem;
      }
      tmp9 = hasItem2;
      tmp10 = importAll;
      tmp12 = Permissions;
    }
    tmp = tmp9;
  }
  return tmp;
};
