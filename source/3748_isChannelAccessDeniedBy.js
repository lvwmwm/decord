// Module ID: 3748
// Function ID: 28589
// Name: isChannelAccessDeniedBy
// Dependencies: []
// Exports: hasViewChannelPermission, isChannelAccessGrantedBy

// Module 3748 (isChannelAccessDeniedBy)
function isChannelAccessDeniedBy(isGuildVocal, deny) {
  let tmp = null != deny;
  if (tmp) {
    const tmp5 = !importAll(dependencyMap[2]).has(deny.deny, Permissions.VIEW_CHANNEL);
    let tmp6 = !tmp5;
    if (tmp5) {
      let isGuildVocalResult = isGuildVocal.isGuildVocal();
      if (isGuildVocalResult) {
        isGuildVocalResult = importAll(dependencyMap[2]).has(deny.deny, Permissions.CONNECT);
        const obj2 = importAll(dependencyMap[2]);
      }
      tmp6 = isGuildVocalResult;
    }
    tmp = tmp6;
    const obj = importAll(dependencyMap[2]);
  }
  return tmp;
}
const hasPermission = require(dependencyMap[0]).hasPermission;
const Permissions = require(dependencyMap[1]).Permissions;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/RolePermissionUtils.tsx");

export const hasViewChannelPermission = function hasViewChannelPermission(value) {
  return hasPermission(value, Permissions.VIEW_CHANNEL);
};
export { isChannelAccessDeniedBy };
export const isChannelAccessGrantedBy = function isChannelAccessGrantedBy(isGuildVocal, allow) {
  let tmp = null != allow;
  if (tmp) {
    let tmp3 = !isChannelAccessDeniedBy(isGuildVocal, allow);
    if (tmp3) {
      const tmp7 = !importAll(dependencyMap[2]).has(allow.allow, Permissions.VIEW_CHANNEL);
      let tmp8 = !tmp7;
      if (!tmp7) {
        let hasItem = !isGuildVocal.isGuildVocal();
        if (!hasItem) {
          hasItem = importAll(dependencyMap[2]).has(allow.allow, Permissions.CONNECT);
          const obj2 = importAll(dependencyMap[2]);
        }
        tmp8 = hasItem;
      }
      tmp3 = tmp8;
      const obj = importAll(dependencyMap[2]);
    }
    tmp = tmp3;
  }
  return tmp;
};
