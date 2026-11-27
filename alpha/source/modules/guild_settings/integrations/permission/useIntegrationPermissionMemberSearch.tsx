// Module ID: 20085
// Function ID: 20086
// Name: useIntegrationPermissionMemberSearch
// Dependencies: [32, 19, 4950, 4955, 4949, 4914, 4975, 1387, 1071, 504, 38, 4980, 20084, 2]
// Exports: useIntegrationPermissionMemberSearch

// Module 20085 (useIntegrationPermissionMemberSearch)
import Constants from "Constants" /* 1071 */;
import PermissionUtilsAll from "PermissionUtils" /* 4980 */;
import fuzzysearch from "fuzzysearch" /* 20084 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleRecord from "GuildRoleRecord" /* 4950 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import GuildRoleStore from "GuildRoleStore" /* 4949 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
function memberTerms(id) {
  const items = [id.username];
  let nick;
  if (id != null) {
    nick = id.nick;
  }
  if (null != nick) {
    items.push(id.nick);
  }
  return { id: id.id, names: items };
}
function roleTerms(id) {
  let items;
  const obj = { id: id.id, names: items };
  items = [id.name];
  return obj;
}
({ hasPermission: metroRequire, isEveryoneRole: metroImportDefault } = GuildRoleRecord);
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useIntegrationPermissionMemberSearch.tsx");

export function useIntegrationPermissionMemberSearch(arg0) {
  let closure_0;
  let memo1;
  let query;
  let stateFromStoresArray;
  let users;
  _require = arg0;
  function isBotRole(nextResult) {
    let managed = nextResult.managed;
    if (managed) {
      const tags = nextResult.tags;
      let bot_id;
      if (tags != null) {
        bot_id = tags.bot_id;
      }
      managed = null != bot_id;
    }
    return managed;
  }
  let obj = require("get initialized");
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  stateFromStores(stateFromStoresArray[10])(null != stateFromStores, "guild must be present to be editing its integration settings");
  let obj2 = require("get initialized");
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.getHighestRole(stateFromStores));
  let obj3 = require("get initialized");
  const items2 = [memo1];
  const items3 = [arg0];
  stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => GuildMemberStore.getMembers(closure_0), items3);
  const items4 = [UserStore];
  const obj4 = require("get initialized");
  const stateFromStoresObject = obj4.useStateFromStoresObject(items4, () => users.getUsers());
  const items5 = [query];
  const items6 = [arg0];
  const obj5 = require("get initialized");
  const stateFromStores2 = obj5.useStateFromStores(items5, () => GuildRoleStore.getSortedRoles(closure_0), items6);
  const items7 = [stateFromStores, stateFromStoresArray, stateFromStoresObject];
  const memo = stateFromStores2.useMemo(() => {
    const items = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = stateFromStoresObject[nextResult.userId];
      let tmp6 = tmp5;
      if (null != tmp5) {
        if (!tmp6.bot) {
          let tmp8 = stateFromStores;
          let canManageUserResult = tmp6.id !== stateFromStores.ownerId;
          if (canManageUserResult) {
            let obj = PermissionUtilsAll;
            let obj2 = { permission: Permissions.ADMINISTRATOR, user: tmp6, context: tmp8 };
            canManageUserResult = !obj.can(obj2);
          }
          if (canManageUserResult) {
            canManageUserResult = PermissionStore.canManageUser(Permissions.USE_APPLICATION_COMMANDS, tmp6, tmp8);
          }
          let obj3 = { id: tmp6.id, canManage: canManageUserResult, nick: tmp3.nick, username: tmp6.username };
          let arr = items.push(obj3);
        }
      }
      continue;
    }
    return items;
  }, items7);
  const items8 = [stateFromStores2, stateFromStores, stateFromStores1];
  memo1 = stateFromStores2.useMemo(() => {
    const items = [];
    const iter = stateFromStores2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (!isBotRole(nextResult)) {
        let tmp8 = metroRequire(tmp3, Permissions.ADMINISTRATOR);
        let isRoleHigherResult = !tmp8;
        if (isRoleHigherResult) {
          isRoleHigherResult = PermissionStore.isRoleHigher(stateFromStores, stateFromStores1, tmp3);
        }
        let obj = { id: null, name: null, canManage: isRoleHigherResult };
        ({ id: obj.id, name: obj.name } = tmp3);
        let tmp15 = obj;
        if (metroImportDefault(tmp3)) {
          let arr = items.unshift(tmp15);
        } else {
          let arr3 = items.push(tmp15);
        }
      }
      continue;
    }
    return items;
  }, items8);
  const tmp9 = stateFromStoresObject(stateFromStores2.useState(""), 2);
  query = tmp9[0];
  const items9 = [arg0, memo, query, memo1];
  let tmp11 = tmp9[1];
  const memo2 = stateFromStores2.useMemo(() => {
    let found;
    let obj2;
    let obj3;
    let substr = first;
    if (first.startsWith("@")) {
      substr = str.substr(1);
    }
    if (first.startsWith("@")) {
      found = arr.filter((id) => id.id === closure_1_0);
    } else {
      found = arr;
    }
    const obj = { members: obj2.filterPermissionSearchItems(memo, memberTerms, substr), roles: obj3.filterPermissionSearchItems(found, roleTerms, substr) };
    obj2 = fuzzysearch;
    obj3 = fuzzysearch;
    return obj;
  }, items9);
  return { query, results: memo2, setQuery: tmp11, unfilteredCount: memo2.members.length + memo2.roles.length };
}
