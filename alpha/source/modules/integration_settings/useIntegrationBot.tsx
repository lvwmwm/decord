// Module ID: 20091
// Function ID: 20092
// Name: useIntegrationBot
// Dependencies: [19, 1406, 4955, 4949, 504, 6991, 1083, 7741, 2]
// Exports: default

// Module 20091 (useIntegrationBot)
import BigFlagUtilsAll from "BigFlagUtils" /* 1083 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6991 */;
import permissions2 from "permissions" /* 7741 */;
import react from "react" /* 19 */;
import UserRecord from "UserRecord" /* 1406 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import GuildRoleStore from "GuildRoleStore" /* 4949 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_8 = [];
const result = size.fileFinishedImporting("modules/integration_settings/useIntegrationBot.tsx");

export default function useIntegrationBot(id, bot) {
  let roles;
  let stateFromStores1;
  let user;
  _require = id;
  bot = bot.bot;
  let obj = roles;
  let items = [bot];
  const memo = roles.useMemo(function() {
    let tmp2 = null;
    if (null != bot) {
      const self = this;
      const self2 = this;
      tmp2 = new UserRecord(tmp);
    }
    return tmp2;
  }, items);
  id = undefined;
  if (memo != null) {
    id = memo.id;
  }
  let tmp3 = _require;
  let tmp4 = stateFromStores1;
  const items1 = [GuildMemberStore];
  const items2 = [id, id.id];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != id) {
      member = GuildMemberStore.getMember(user.id, tmp);
    }
    return member;
  }, items2);
  const items3 = [GuildRoleStore];
  const items4 = [id];
  let tmp6 = GuildRoleStore;
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items3, () => GuildRoleStore.getEveryoneRole(user), items4);
  roles = undefined;
  if (stateFromStores != null) {
    roles = stateFromStores.roles;
  }
  if (roles == null) {
    roles = closure_8;
  }
  const items5 = [tmp6];
  const items6 = [id.id, roles];
  const tmp3Result = tmp3(tmp4[4]);
  const stateFromStoresArray = tmp3Result.useStateFromStoresArray(items5, () => GuildRoleStore.getManyRoles(user.id, roles), items6);
  const items7 = [id.id, id];
  const effect = obj.useEffect(() => {
    if (null != id) {
      const obj = GuildActionCreatorsDefault;
      const membersById = obj.requestMembersById(user.id, tmp);
    }
  }, items7);
  const items8 = [stateFromStores1, stateFromStoresArray];
  const memo1 = obj.useMemo(() => {
    const items = [stateFromStores1.permissions, ...stateFromStoresArray.map((permissions) => permissions.permissions)];
    const grantedPermissions = [];
    const deniedPermissions = [];
    const tmp = BigFlagUtilsAll;
    const applyResult = tmp.combine.apply(items);
    const OrderedPermissions = permissions2.OrderedPermissions;
    for (const item10030 of OrderedPermissions) {
      let tmp3 = item10030;
      let obj = BigFlagUtilsAll;
      if (obj.has(applyResult, item10030)) {
        let arr = grantedPermissions.push(tmp3);
      } else {
        let arr2 = deniedPermissions.push(tmp3);
      }
      continue;
    }
    return { grantedPermissions, deniedPermissions };
  }, items8);
  let tmp14 = null;
  if (null != memo) {
    tmp14 = { bot: memo, member: stateFromStores, roleIds: roles, grantedPermissions: tmp12, deniedPermissions: tmp13 };
    const obj4 = { bot: memo, member: stateFromStores, roleIds: roles, grantedPermissions: tmp12, deniedPermissions: tmp13 };
  }
  return tmp14;
};
