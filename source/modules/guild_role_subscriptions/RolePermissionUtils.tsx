// Module ID: 3750
// Function ID: 28599
// Name: isChannelAccessDeniedBy
// Dependencies: [1911, 653, 483, 2]
// Exports: hasViewChannelPermission, isChannelAccessGrantedBy

// Module 3750 (isChannelAccessDeniedBy)
import { hasPermission } from "GuildRoleRecordTypeTag";
import { Permissions } from "ME";

function isChannelAccessDeniedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    const tmp5 = !importAll(483).has(deny.deny, Permissions.VIEW_CHANNEL);
    let tmp6 = !tmp5;
    if (tmp5) {
      let isGuildVocalResult = isGuildVocal.isGuildVocal();
      if (isGuildVocalResult) {
        isGuildVocalResult = importAll(483).has(deny.deny, Permissions.CONNECT);
        const obj2 = importAll(483);
      }
      tmp6 = isGuildVocalResult;
    }
    tmp = tmp6;
    const obj = importAll(483);
  }
  return tmp;
}
const result = require("fromHexReverseArray").fileFinishedImporting("modules/guild_role_subscriptions/RolePermissionUtils.tsx");

export const hasViewChannelPermission = function hasViewChannelPermission(closure_0) {
  return hasPermission(closure_0, Permissions.VIEW_CHANNEL);
};
export { isChannelAccessDeniedBy };
export const isChannelAccessGrantedBy = function isChannelAccessGrantedBy(isGuildVocal, allow) {
  let tmp = null != allow;
  if (tmp) {
    let tmp3 = !isChannelAccessDeniedBy(isGuildVocal, allow);
    if (tmp3) {
      const tmp7 = !importAll(483).has(allow.allow, Permissions.VIEW_CHANNEL);
      let tmp8 = !tmp7;
      if (!tmp7) {
        let hasItem = !isGuildVocal.isGuildVocal();
        if (!hasItem) {
          hasItem = importAll(483).has(allow.allow, Permissions.CONNECT);
          const obj2 = importAll(483);
        }
        tmp8 = hasItem;
      }
      tmp3 = tmp8;
      const obj = importAll(483);
    }
    tmp = tmp3;
  }
  return tmp;
};
