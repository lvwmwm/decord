// Module ID: 4992
// Function ID: 43149
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1391, 1911, 1917, 1910, 1838, 1849, 653, 3749, 566, 686, 2]

// Module 4992 (_isNativeReflectConstruct)
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { isGuildOwner } from "isGuildOwner";
import { hasPermission } from "GuildRoleRecordTypeTag";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "_possibleConstructorReturn";

let closure_13;
let closure_14;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
      if (features.has(constants2.ROLE_SUBSCRIPTIONS_ENABLED)) {
        member = member.getMember(guildId, currentUser.id);
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
            let tmp12 = require;
            let tmp13 = dependencyMap;
            let obj2 = require(3749) /* isSubscriptionRole */;
            if (obj2.isSubscriptionRole(value)) {
              let addResult = set.add(value.id);
              let tmp15 = require;
              let tmp16 = dependencyMap;
              let obj3 = require(3749) /* isSubscriptionRole */;
              if (obj3.isSubscriptionRoleAvailableForPurchase(value)) {
                let addResult1 = set1.add(value.id);
                if (_Set.has(value.id)) {
                  let addResult2 = set2.add(value.id);
                }
              }
            }
            let hasItem = _Set.has(value.id);
            if (hasItem) {
              let tmp20 = hasPermission;
              let tmp21 = constants;
              hasItem = hasPermission(value, constants.ADMINISTRATOR);
            }
            if (hasItem) {
              let tmp22 = map3;
              let result1 = map3.set(guildId, true);
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
  let c20 = null;
}
function handleGuildUpdate(guild) {
  const id = guild.guild.id;
  if (null == set1) {
    return false;
  } else {
    guild = store.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const features = guild.features;
      const hasItem = features.has(constants2.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
      if (hasItem) {
        if (!set1.has(id)) {
          const _Set = Set;
          const set = new Set(set1);
          set.add(id);
          set1 = set;
          return true;
        }
      }
      if (!hasItem) {
        if (set1.has(id)) {
          const _Set2 = Set;
          set1 = new Set(set1);
          set1.delete(id);
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
({ Permissions: closure_13, GuildFeatures: closure_14 } = ME);
let set = new Set();
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let c20 = null;
let tmp8 = ((Store) => {
  class SubscriptionRoleStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, SubscriptionRoleStore);
      obj = outer1_5(SubscriptionRoleStore);
      tmp2 = outer1_4;
      if (outer1_21()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SubscriptionRoleStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_11, outer1_10, outer1_12, outer1_9);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getGuildIdsWithPurchasableRoles",
    value() {
      let iter2;
      if (null == outer1_20) {
        const _Set = Set;
        const guildsArray = outer1_11.getGuildsArray();
        const set = new Set();
        const tmp9 = outer1_22(guildsArray);
        let iter = tmp9();
        if (!iter.done) {
          do {
            let value = iter.value;
            let features = value.features;
            let tmp10 = outer1_14;
            if (features.has(outer1_14.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) {
              let addResult = set.add(value.id);
            }
            iter2 = tmp9();
            iter = iter2;
          } while (!iter2.done);
        }
        outer1_20 = set;
        let tmp = set;
      } else {
        tmp = outer1_20;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "buildRoles",
    value(arg0) {
      if (!outer1_16.has(arg0)) {
        outer1_24(arg0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSubscriptionRoles",
    value(arg0) {
      const roles = this.buildRoles(arg0);
      let value = outer1_16.get(arg0);
      if (null == value) {
        value = outer1_15;
      }
      return value;
    }
  };
  items[4] = {
    key: "getPurchasableSubscriptionRoles",
    value(arg0) {
      const roles = this.buildRoles(arg0);
      let value = outer1_17.get(arg0);
      if (null == value) {
        value = outer1_15;
      }
      return value;
    }
  };
  items[5] = {
    key: "getUserSubscriptionRoles",
    value(arg0) {
      const roles = this.buildRoles(arg0);
      let value = outer1_18.get(arg0);
      if (null == value) {
        value = outer1_15;
      }
      return value;
    }
  };
  items[6] = {
    key: "getUserIsAdmin",
    value(arg0) {
      const roles = this.buildRoles(arg0);
      const value = outer1_19.get(arg0);
      return null != value && value;
    }
  };
  return callback(SubscriptionRoleStore, items);
})(require("initialize").Store);
tmp8.displayName = "SubscriptionRoleStore";
tmp8 = new tmp8(require("dispatcher"), {
  CONNECTION_OPEN: deleteEverything,
  LOGOUT: deleteEverything,
  GUILD_CREATE: handleGuildUpdate,
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    let hasItem;
    if (null != set) {
      hasItem = obj.has(id);
    }
    if (true !== hasItem) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(set);
      set.delete(id);
    }
    obj = set;
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
let result = set.fileFinishedImporting("modules/guild_role_subscriptions/SubscriptionRoleStore.tsx");

export default tmp8;
