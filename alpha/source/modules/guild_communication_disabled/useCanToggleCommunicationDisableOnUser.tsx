// Module ID: 13247
// Function ID: 13248
// Name: useCanToggleCommunicationDisableOnUser
// Dependencies: [4881, 4885, 4946, 1383, 1072, 4951, 504, 2]
// Exports: default

// Module 13247 (useCanToggleCommunicationDisableOnUser)
import Constants from "Constants" /* 1072 */;
import GuildRecord from "GuildRecord" /* 4881 */;
import PermissionUtilsAll from "PermissionUtils" /* 4951 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import UserStore from "UserStore" /* 1383 */;
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
