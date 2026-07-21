// Module ID: 11534
// Function ID: 89824
// Name: getHasAllocateBoostPermission
// Dependencies: []
// Exports: default

// Module 11534 (getHasAllocateBoostPermission)
function getHasAllocateBoostPermission(closure_9, guild) {
  let canResult = null;
  if (null != guild) {
    canResult = null;
    if (null != closure_9.getGuildPermissions(guild)) {
      canResult = closure_9.can(Permissions.ADMINISTRATOR, guild);
    }
  }
  return canResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx");

export default function useHasAllocateBoostPermission(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_2];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(closure_3, guild.getGuild(arg0)));
};
export { getHasAllocateBoostPermission };
