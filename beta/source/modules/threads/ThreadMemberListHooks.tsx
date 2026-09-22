// Module ID: 17166
// Function ID: 17167
// Name: ThreadMemberListHooks
// Dependencies: [19, 2103, 10072, 1089, 558, 568, 7556, 7530, 5203, 504, 1119, 2]

// Module 17166 (ThreadMemberListHooks)
import util from "util" /* 1119 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 7530 */;
import GuildSubscriptionsActionCreators from "GuildSubscriptionsActionCreators" /* 7556 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2103 */;
import ThreadMemberListStore from "ThreadMemberListStore" /* 10072 */;

const require = globalThis.__r;

require = fn;
const StatusTypes = fn(1089).StatusTypes;
let closure_7 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/ThreadMemberListHooks.tsx");

export const useThreadMemberListSections = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(16);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp4 = cResult[2];
    }
    require("useMountEffect")(tmp4);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildRoleStore];
      cResult[3] = items;
      let tmp8 = items;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== arg1) {
      class S {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_4;
            sortedRoles = closure_4.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
      cResult[4] = arg1;
      cResult[5] = S;
      const tmp10 = S;
    } else {
      class S {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_4;
            sortedRoles = closure_4.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
    }
    const stateFromStores = tmp(tmp2[9]).useStateFromStores(tmp8, tmp10);
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_4;
            sortedRoles = closure_4.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
      const items1 = [ThreadMemberListStore];
      cResult[6] = items1;
      const tmp11 = items1;
    } else {
      class S {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_4;
            sortedRoles = closure_4.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
    }
    if (cResult[7] !== arg0) {
      class S {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_4;
            sortedRoles = closure_4.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
      cResult[7] = arg0;
      cResult[8] = tmp13;
      const tmp12 = tmp13;
    } else {
      class S {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_4;
            sortedRoles = closure_4.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
    }
    const tmpResult = tmp(tmp2[9]);
    const stateFromStoresObject = tmp(tmp2[9]).useStateFromStoresObject(tmp11, tmp12);
    ({ version, members } = stateFromStoresObject);
    if (null != arg1) {
      class S {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_4;
            sortedRoles = closure_4.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(arg0) {
            return arg0.hoist;
          }
        }
        cResult[12] = E;
        const tmp17 = E;
      } else {
        class E {
          constructor(arg0) {
            return arg0.hoist;
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            obj = { id: arg0.id, label: arg0.name };
            return obj;
          }
        }
        cResult[13] = M;
        const tmp18 = M;
      } else {
        class M {
          constructor(arg0) {
            obj = { id: arg0.id, label: arg0.name };
            return obj;
          }
        }
      }
      const found = stateFromStores.filter(tmp17);
      const mapped = found.map(tmp18);
      const obj2 = { id: StatusTypes.ONLINE, label: null };
      const intl = tmp(tmp2[10]).intl;
      obj2.label = intl.string(tmp(tmp2[10]).t.WbGtnH);
      const obj3 = { id: StatusTypes.OFFLINE, label: null };
      const intl2 = tmp(tmp2[10]).intl;
      obj3.label = intl2.string(tmp(tmp2[10]).t.Vv0abJ);
      mapped.push(obj2, obj3);
      if (cResult[14] !== members) {
        class N {
          constructor(arg0) {
            id = arg0.id;
            obj = { label: arg0.label, userIds: null, id: null, roleId: null };
            userIds = undefined;
            if (members != null) {
              tmp = members[id];
              if (tmp != null) {
                userIds = tmp.userIds;
              }
            }
            if (userIds == null) {
              userIds = [];
            }
            obj.userIds = userIds;
            obj.id = id;
            obj.roleId = id;
            return obj;
          }
        }
        cResult[14] = members;
        cResult[15] = N;
        const tmp21 = N;
      } else {
        class N {
          constructor(arg0) {
            id = arg0.id;
            obj = { label: arg0.label, userIds: null, id: null, roleId: null };
            userIds = undefined;
            if (members != null) {
              tmp = members[id];
              if (tmp != null) {
                userIds = tmp.userIds;
              }
            }
            if (userIds == null) {
              userIds = [];
            }
            obj.userIds = userIds;
            obj.id = id;
            obj.roleId = id;
            return obj;
          }
        }
      }
      const mapped1 = mapped.map(tmp21);
      cResult[9] = members;
      cResult[10] = stateFromStores;
      cResult[11] = mapped1;
    } else {
      class N {
        constructor(arg0) {
          id = arg0.id;
          obj = { label: arg0.label, userIds: null, id: null, roleId: null };
          userIds = undefined;
          if (members != null) {
            tmp = members[id];
            if (tmp != null) {
              userIds = tmp.userIds;
            }
          }
          if (userIds == null) {
            userIds = [];
          }
          obj.userIds = userIds;
          obj.id = id;
          obj.roleId = id;
          return obj;
        }
      }
      if (null == members) {
        class N {
          constructor(arg0) {
            id = arg0.id;
            obj = { label: arg0.label, userIds: null, id: null, roleId: null };
            userIds = undefined;
            if (members != null) {
              tmp = members[id];
              if (tmp != null) {
                userIds = tmp.userIds;
              }
            }
            if (userIds == null) {
              userIds = [];
            }
            obj.userIds = userIds;
            obj.id = id;
            obj.roleId = id;
            return obj;
          }
        }
      }
      return tmp16;
    }
    const tmpResult2 = tmp(tmp2[9]);
  }
  const fn = function u() {
    let id;
    if (closure_1 != null) {
      id = tmp.id;
    }
    if (null != id) {
      GuildSubscriptionsActionCreators.subscribeChannel(tmp.id, closure_0, GuildChannelSubscriptions.DEFAULT_RANGES);
    }
  };
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  require("useMountEffect")(() => {
    let id;
    if (closure_1 != null) {
      id = tmp.id;
    }
    if (null != id) {
      GuildSubscriptionsActionCreators.subscribeChannel(tmp.id, closure_0, GuildChannelSubscriptions.DEFAULT_RANGES);
    }
  });
  const items = [closure_4];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null != closure_1) {
      let sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  });
  let obj = require("initialize");
  const items1 = [ThreadMemberListStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({ version: ThreadMemberListStore.getMemberListVersion(closure_0), members: ThreadMemberListStore.getMemberListSections(closure_0) }));
  const members = stateFromStoresObject.members;
  closure_4 = tmp4;
  const items2 = [stateFromStores, members, stateFromStoresObject.version, null == arg1];
  let memo = members.useMemo(() => {
    if (closure_4) {
      return closure_7;
    } else {
      const found = stateFromStores.filter((hoist) => hoist.hoist);
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      let obj = { id: StatusTypes.ONLINE, label: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.WbGtnH);
      const obj2 = { id: StatusTypes.OFFLINE, label: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.Vv0abJ);
      mapped.push(obj, obj2);
      return mapped.map((id) => {
        id = id.id;
        const obj = { label: id.label, userIds: null, id: null, roleId: null };
        let userIds;
        if (members != null) {
          if (members[id] != null) {
            userIds = tmp.userIds;
          }
        }
        if (userIds == null) {
          userIds = [];
        }
        obj.userIds = userIds;
        obj.id = id;
        obj.roleId = id;
        return obj;
      });
    }
  }, items2);
  if (null == members) {
    memo = closure_7;
  }
  return memo;
});
