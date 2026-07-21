// Module ID: 8166
// Function ID: 64484
// Name: canToggleCommunicationDisableOnUser
// Dependencies: []
// Exports: default

// Module 8166 (canToggleCommunicationDisableOnUser)
function canToggleCommunicationDisableOnUser(id, id2, items) {
  let obj;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [closure_6, closure_4, closure_5];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  const guild = obj2.getGuild(id);
  const user = obj.getUser(id2);
  let tmp6 = null != guild && null != user;
  if (tmp6) {
    let tmp7 = !user.isNonUserBot();
    if (tmp7) {
      let canResult = isGuildOwner(guild, user);
      if (!canResult) {
        obj = { permission: Permissions.ADMINISTRATOR, user, context: guild };
        canResult = importAll(dependencyMap[5]).can(obj);
        const obj5 = importAll(dependencyMap[5]);
      }
      let canManageUserResult = !canResult;
      if (canManageUserResult) {
        canManageUserResult = obj3.canManageUser(Permissions.MODERATE_MEMBERS, user, guild);
      }
      tmp7 = canManageUserResult;
    }
    tmp6 = tmp7;
  }
  return tmp6;
}
const isGuildOwner = require(dependencyMap[0]).isGuildOwner;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const Permissions = require(dependencyMap[4]).Permissions;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx");

export default function useCanToggleCommunicationDisableOnUser(arg0, arg1) {
  const require = arg0;
  const importAll = arg1;
  const items = [closure_6, closure_4, closure_5];
  const items1 = [arg0, arg1];
  return require(dependencyMap[6]).useStateFromStores(items, () => {
    const items = [closure_6, closure_4, closure_5];
    return callback(arg0, arg1, items);
  }, items1);
};
export { canToggleCommunicationDisableOnUser };
