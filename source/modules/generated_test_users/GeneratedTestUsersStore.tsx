// Module ID: 13396
// Function ID: 101834
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13396 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
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
  const result = users.set(id.id, new closure_5(id));
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = { suggestion: "o", fetched: "o" };
let tmp2 = (PersistedStore) => {
  class GeneratedTestUsersStore {
    constructor() {
      self = this;
      tmp = GeneratedTestUsersStore(this, GeneratedTestUsersStore);
      obj = closure_3(GeneratedTestUsersStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = GeneratedTestUsersStore;
  callback2(GeneratedTestUsersStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(pools) {
      if (null != pools) {
        if (null != pools.pools) {
          const _Map = Map;
          const _Object = Object;
          const map = new Map(Object.entries(pools.pools));
          closure_6.pools = map;
        }
        if (null != pools.users) {
          const _Map2 = Map;
          const _Object2 = Object;
          const map1 = new Map(Object.entries(pools.users));
          closure_6.users = map1;
        }
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      const obj = {};
      let fromEntriesResult = null;
      if (null != closure_6.pools) {
        const _Object = Object;
        fromEntriesResult = Object.fromEntries(closure_6.pools);
      }
      obj.pools = fromEntriesResult;
      let fromEntriesResult1 = null;
      if (null != closure_6.users) {
        const _Object2 = Object;
        fromEntriesResult1 = Object.fromEntries(closure_6.users);
      }
      obj.users = fromEntriesResult1;
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUsersForPool",
    value(arg0) {
      const GeneratedTestUsersStore = arg0;
      const users = closure_6.users;
      let items;
      if (null != users) {
        items = users.values();
      }
      if (null == items) {
        items = [];
      }
      return Array.from(items).filter((id) => {
        const pools = pools.pools;
        let hasItem;
        if (null != pools) {
          const value = pools.get(id);
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
      const pools = closure_6.pools;
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
      const users = closure_6.users;
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
      if (null !== closure_6.pools) {
        const _Array = Array;
        const pools = closure_6.pools;
        arr = Array.from(pools.values());
      }
      return arr;
    }
  };
  return callback(GeneratedTestUsersStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "GeneratedTestUsersStore";
tmp2.persistKey = "GeneratedTestUsersStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
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
          const users = users.users;
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
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/generated_test_users/GeneratedTestUsersStore.tsx");

export default tmp2;
