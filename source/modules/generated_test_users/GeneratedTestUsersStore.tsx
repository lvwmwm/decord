// Module ID: 13519
// Function ID: 104045
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1857, 566, 686, 2]

// Module 13519 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function handleAddUser(id) {
  if (null == closure_6.users) {
    const _Map = Map;
    const map = new Map();
    closure_6.users = map;
  }
  const users = closure_6.users;
  const result = users.set(id.id, new _isNativeReflectConstruct(id));
}
let closure_6 = { pools: null, users: null };
let tmp2 = ((PersistedStore) => {
  class GeneratedTestUsersStore {
    constructor() {
      self = this;
      tmp = GeneratedTestUsersStore(this, GeneratedTestUsersStore);
      obj = outer1_3(GeneratedTestUsersStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GeneratedTestUsersStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(pools) {
      if (null != pools) {
        if (null != pools.pools) {
          const _Map = Map;
          const _Object = Object;
          const map = new Map(Object.entries(pools.pools));
          outer1_6.pools = map;
        }
        if (null != pools.users) {
          const _Map2 = Map;
          const _Object2 = Object;
          const map1 = new Map(Object.entries(pools.users));
          outer1_6.users = map1;
        }
      }
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      const obj = {};
      let fromEntriesResult = null;
      if (null != outer1_6.pools) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(outer1_6.pools);
      }
      obj.pools = fromEntriesResult;
      let fromEntriesResult1 = null;
      if (null != outer1_6.users) {
        const _Object2 = Object;
        fromEntriesResult1 = Object.fromEntries(outer1_6.users);
      }
      obj.users = fromEntriesResult1;
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUsersForPool",
    value(arg0) {
      let initialize = arg0;
      const users = outer1_6.users;
      let items;
      if (null != users) {
        items = users.values();
      }
      if (null == items) {
        items = [];
      }
      return Array.from(items).filter((id) => {
        const pools = outer2_6.pools;
        let hasItem;
        if (null != pools) {
          const value = pools.get(initialize);
          if (null != value) {
            const userIds = value.userIds;
            hasItem = userIds.includes(id.id);
          }
        }
        return hasItem;
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getPool",
    value(arg0) {
      const pools = outer1_6.pools;
      let value;
      if (null != pools) {
        value = pools.get(arg0);
      }
      let tmp3 = null;
      if (null != value) {
        tmp3 = value;
      }
      return tmp3;
    }
  };
  items[4] = {
    key: "getUser",
    value(arg0) {
      const users = outer1_6.users;
      let value;
      if (null != users) {
        value = users.get(arg0);
      }
      let tmp3 = null;
      if (null != value) {
        tmp3 = value;
      }
      return tmp3;
    }
  };
  items[5] = {
    key: "getPools",
    value() {
      let arr = null;
      if (null !== outer1_6.pools) {
        const _Array = Array;
        const pools = outer1_6.pools;
        arr = Array.from(pools.values());
      }
      return arr;
    }
  };
  return callback(GeneratedTestUsersStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "GeneratedTestUsersStore";
tmp2.persistKey = "GeneratedTestUsersStore";
tmp2 = new tmp2(require("dispatcher"), {
  GENERATED_POOL_BY_ID_FETCH_SUCCESS: function handleFetchPoolByIdSuccess(arg0) {
    let pool;
    let users;
    ({ pool, users } = arg0);
    if (null == closure_6.pools) {
      const _Map = Map;
      const map = new Map();
      closure_6.pools = map;
    }
    const pools = closure_6.pools;
    const result = pools.set(pool.id, pool);
    const item = users.forEach(handleAddUser);
  },
  GENERATED_POOL_REMOVE_FROM_LIST: function handleRemovePool(poolId) {
    poolId = poolId.poolId;
    const pools = closure_6.pools;
    let value;
    if (null != pools) {
      value = pools.get(poolId);
    }
    if (null == value) {
      return false;
    } else {
      if (value.userIds.length > 0) {
        const userIds = value.userIds;
        const item = userIds.forEach((arg0) => {
          const users = outer1_6.users;
          if (null != users) {
            users.delete(arg0);
          }
        });
      }
      const pools2 = closure_6.pools;
      if (null != pools2) {
        pools2.delete(poolId);
      }
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/generated_test_users/GeneratedTestUsersStore.tsx");

export default tmp2;
