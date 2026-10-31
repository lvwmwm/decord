// Module ID: 18767
// Function ID: 18768
// Name: ThreadMemberListHooks
// Dependencies: [19, 4920, 7444, 1083, 5593, 7451, 7449, 504, 1113, 2]
// Exports: useThreadMemberListSections

// Module 18767 (ThreadMemberListHooks)
import Constants from "Constants" /* 1083 */;
import intl3 from "intl" /* 1113 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 7449 */;
import GuildSubscriptionsActionCreators from "GuildSubscriptionsActionCreators" /* 7451 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import ThreadMemberListStore from "ThreadMemberListStore" /* 7444 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, importDefault;

const StatusTypes = Constants.StatusTypes;
let closure_7 = [];
const result = size.fileFinishedImporting("modules/threads/ThreadMemberListHooks.tsx");

export function useThreadMemberListSections(channelId, stateFromStores) {
  _require = channelId;
  importDefault = stateFromStores;
  let tmp = require("useMountEffect")(() => {
    let id;
    if (stateFromStores != null) {
      id = tmp.id;
    }
    if (null != id) {
      const obj = GuildSubscriptionsActionCreators;
      obj.subscribeChannel(stateFromStores.id, channelId, GuildChannelSubscriptions.DEFAULT_RANGES);
    }
  });
  let obj = require("get initialized");
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => {
    let sortedRoles;
    if (null != stateFromStores) {
      sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  });
  let obj2 = require("get initialized");
  const items1 = [ThreadMemberListStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { version: ThreadMemberListStore.getMemberListVersion(channelId), members: ThreadMemberListStore.getMemberListSections(channelId) };
    return obj;
  });
  const members = stateFromStoresObject.members;
  closure_4 = tmp4;
  const items2 = [stateFromStores, members, stateFromStoresObject.version, tmp4];
  let memo = members.useMemo(() => {
    let intl;
    let intl2;
    const tmp = closure_4;
    if (tmp) {
      return closure_7;
    } else {
      const found = stateFromStores.filter((hoist) => hoist.hoist);
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      let obj = { id: StatusTypes.ONLINE, label: intl.string(intl3.t.WbGtnH) };
      const push = mapped.push;
      intl = intl3.intl;
      const obj2 = { id: StatusTypes.OFFLINE, label: intl2.string(intl3.t.Vv0abJ) };
      intl2 = intl3.intl;
      push(obj, obj2);
      return mapped.map((id) => {
        let userIds;
        id = id.id;
        const obj = { label: id.label, userIds, id, roleId: id };
        userIds = undefined;
        if (members != null) {
          if (members[id] != null) {
            userIds = tmp.userIds;
          }
        }
        if (userIds == null) {
          userIds = [];
        }
        return obj;
      });
    }
  }, items2);
  if (null == members) {
    memo = closure_7;
  }
  return memo;
}
