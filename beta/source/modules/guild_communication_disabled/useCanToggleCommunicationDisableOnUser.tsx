// Module ID: 8706
// Function ID: 8707
// Name: useCanToggleCommunicationDisableOnUser
// Dependencies: [2063, 2067, 4469, 1372, 1074, 4474, 504, 2]
// Exports: default

// Module 8706 (useCanToggleCommunicationDisableOnUser)
import Constants from "Constants" /* 1074 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function canToggleCommunicationDisableOnUser(id, id2, items) {
  let obj;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, GuildStore, PermissionStore];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  const guild = obj2.getGuild(id);
  const user = obj.getUser(id2);
  let tmp6 = null != guild && null != user;
  if (tmp6) {
    let tmp8 = !user.isNonUserBot();
    user.isNonUserBot();
    if (tmp8) {
      let canResult = isGuildOwner(guild, user);
      if (!canResult) {
        const obj4 = { permission: Permissions.ADMINISTRATOR, user, context: guild };
        const obj5 = PermissionUtilsAll;
        canResult = obj5.can(obj4);
      }
      tmp8 = !canResult && obj3.canManageUser(Permissions.MODERATE_MEMBERS, user, guild);
      const canManageUserResult = !canResult && obj3.canManageUser(Permissions.MODERATE_MEMBERS, user, guild);
    }
    tmp6 = tmp8;
  }
  return tmp6;
}
const isGuildOwner = GuildRecord.isGuildOwner;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx");

export default function useCanToggleCommunicationDisableOnUser(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let items = [UserStore, GuildStore, PermissionStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const items = [UserStore, GuildStore, PermissionStore];
    return canToggleCommunicationDisableOnUser(closure_0, closure_1, items);
  }, items1);
};
export { canToggleCommunicationDisableOnUser };
