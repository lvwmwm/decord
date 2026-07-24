// Module ID: 8218
// Function ID: 64774
// Name: canToggleCommunicationDisableOnUser
// Dependencies: [1391, 1838, 3758, 1849, 653, 3763, 566, 2]
// Exports: default

// Module 8218 (canToggleCommunicationDisableOnUser)
import { isGuildOwner } from "isGuildOwner";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

function canToggleCommunicationDisableOnUser(id, id2, items) {
  let obj;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [closure_6, _createForOfIteratorHelperLoose, _isNativeReflectConstruct];
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
        canResult = importAll(3763).can(obj);
        const obj5 = importAll(3763);
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx");

export default function useCanToggleCommunicationDisableOnUser(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let items = [closure_6, _createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [arg0, arg1];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_6, outer1_4, outer1_5];
    return outer1_8(closure_0, closure_1, items);
  }, items1);
};
export { canToggleCommunicationDisableOnUser };
