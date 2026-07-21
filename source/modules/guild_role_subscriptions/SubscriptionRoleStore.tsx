// Module ID: 5262
// Function ID: 44721
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 4294967295, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 5262 (_isNativeReflectConstruct)
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import { isGuildOwner } from "result";
import { hasPermission } from "result";
import closure_9 from "result";
import closure_10 from "result";
import closure_11 from "result";
import closure_12 from "result";
import result from "result";
import result from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function computeRolesForGuild(guildId) {
  let iter2;
  const currentUser = authStore.getCurrentUser();
  const guild = store.getGuild(guildId);
  if (null != guild) {
    if (null != currentUser) {
      const _Set2 = Set;
      const set = new Set();
      const _Set3 = Set;
      const set1 = new Set();
      const _Set4 = Set;
      const set2 = new Set();
      const result = map3.set(guildId, isGuildOwner(guild, currentUser));
      const features = guild.features;
      if (features.has(constants.ROLE_SUBSCRIPTIONS_ENABLED)) {
        const member = member.getMember(guildId, currentUser.id);
        let _Set = Set;
        let roles;
        if (null != member) {
          roles = member.roles;
        }
        if (null == roles) {
          roles = [];
        }
        const prototype = _Set.prototype;
        _Set = new _Set(roles);
        const tmp11 = _createForOfIteratorHelperLoose(sortedRoles.getSortedRoles(guild.id));
        let iter = tmp11();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp12 = closure_0;
            let tmp13 = closure_1;
            let obj2 = closure_0(closure_1[12]);
            if (obj2.isSubscriptionRole(value)) {
              let addResult = set.add(value.id);
              let tmp15 = closure_0;
              let tmp16 = closure_1;
              let obj3 = closure_0(closure_1[12]);
              if (obj3.isSubscriptionRoleAvailableForPurchase(value)) {
                let addResult1 = set1.add(value.id);
                if (_Set.has(value.id)) {
                  let addResult2 = set2.add(value.id);
                }
              }
            }
            let hasItem = _Set.has(value.id);
            if (hasItem) {
              let tmp20 = closure_8;
              let tmp21 = closure_13;
              hasItem = closure_8(value, closure_13.ADMINISTRATOR);
            }
            if (hasItem) {
              let tmp22 = closure_19;
              let result1 = closure_19.set(guildId, true);
            }
            iter2 = tmp11();
            iter = iter2;
          } while (!iter2.done);
        }
      }
      const result2 = map.set(guildId, set);
      const result3 = map2.set(guildId, set2);
      const result4 = map1.set(guildId, set1);
      return true;
    }
  }
  return false;
}
function deleteEverything() {
  map.clear();
  map2.clear();
  map1.clear();
  map3.clear();
  let closure_20 = null;
}
function handleGuildUpdate(guild) {
  const id = guild.guild.id;
  if (null == set) {
    return false;
  } else {
    guild = store.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const features = guild.features;
      const hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
      if (hasItem) {
        if (!set.has(id)) {
          const _Set = Set;
          let set = new Set(set);
          set.add(id);
          return true;
        }
      }
      if (!hasItem) {
        if (set.has(id)) {
          const _Set2 = Set;
          const set1 = new Set(set);
          set1.delete(id);
          set = set1;
          return true;
        }
      }
      return false;
    }
  }
}
function handleRoleUpdate(guildId) {
  guildId = guildId.guildId;
  const tmp = !map.has(guildId);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = computeRolesForGuild(guildId);
  }
  return tmp2;
}
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ Permissions: closure_13, GuildFeatures: closure_14 } = result);
const set = new Set();
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let closure_20 = null;
let tmp8 = (Store) => {
  class SubscriptionRoleStore {
    constructor() {
      self = this;
      tmp = closure_2(this, SubscriptionRoleStore);
      obj = closure_5(SubscriptionRoleStore);
      tmp2 = closure_4;
      if (closure_21()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SubscriptionRoleStore;
  callback2(SubscriptionRoleStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_11, closure_10, closure_12, closure_9);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getGuildIdsWithPurchasableRoles",
    value() {
      let iter2;
      if (null == set) {
        const _Set = Set;
        const guildsArray = guildsArray.getGuildsArray();
        const set = new Set();
        const tmp9 = callback4(guildsArray);
        let iter = tmp9();
        if (!iter.done) {
          do {
            let value = iter.value;
            let features = value.features;
            let tmp10 = closure_14;
            if (features.has(closure_14.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) {
              let addResult = set.add(value.id);
            }
            iter2 = tmp9();
            iter = iter2;
          } while (!iter2.done);
        }
        let tmp = set;
      } else {
        tmp = set;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "buildRoles",
    value(arg0) {
      if (!map.has(arg0)) {
        callback5(arg0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSubscriptionRoles",
    value(arg0) {
      const roles = this.buildRoles(arg0);
      let value = map.get(arg0);
      if (null == value) {
        value = closure_15;
      }
      return value;
    }
  };
  items[4] = {
    key: "getPurchasableSubscriptionRoles",
    value(arg0) {
      const roles = this.buildRoles(arg0);
      let value = closure_17.get(arg0);
      if (null == value) {
        value = closure_15;
      }
      return value;
    }
  };
  items[5] = {
    key: "getUserSubscriptionRoles",
    value(arg0) {
      const roles = this.buildRoles(arg0);
      let value = closure_18.get(arg0);
      if (null == value) {
        value = closure_15;
      }
      return value;
    }
  };
  items[6] = {
    key: "getUserIsAdmin",
    value(arg0) {
      const roles = this.buildRoles(arg0);
      const value = closure_19.get(arg0);
      return null != value && value;
    }
  };
  return callback(SubscriptionRoleStore, items);
}(require("result").Store);
tmp8.displayName = "SubscriptionRoleStore";
tmp8 = new tmp8(require("result"), {
  CONNECTION_OPEN: deleteEverything,
  LOGOUT: deleteEverything,
  GUILD_CREATE: handleGuildUpdate,
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    let hasItem;
    if (null != closure_20) {
      hasItem = obj.has(id);
    }
    if (true !== hasItem) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(closure_20);
      set.delete(id);
      closure_20 = set;
    }
    const obj = closure_20;
  },
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_ROLE_CREATE: handleRoleUpdate,
  GUILD_ROLE_UPDATE: handleRoleUpdate,
  GUILD_ROLE_DELETE: handleRoleUpdate,
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    let tmp3 = guildId.user.id !== id;
    if (!tmp3) {
      tmp3 = !map.has(guildId);
    }
    let tmp5 = !tmp3;
    if (!tmp3) {
      tmp5 = computeRolesForGuild(guildId);
    }
    return tmp5;
  }
});
result = result.fileFinishedImporting("modules/guild_role_subscriptions/SubscriptionRoleStore.tsx");

export default tmp8;
