// Module ID: 12331
// Function ID: 96082
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 3767, 4810, 653, 22, 566, 686, 2]

// Module 12331 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
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
function getPartyForUser(id, closure_11) {
  let obj = dependencyMap[id];
  if (null == obj) {
    obj = {};
  }
  return obj[closure_11];
}
function removeUserFromParty(id, closure_11) {
  const tmp4 = getPartyForUser(id, closure_11);
  if (null != tmp4) {
    delete tmp3[tmp];
    if (obj.isEmpty(dependencyMap[id])) {
      delete tmp[tmp2];
    }
    const value = map.get(tmp4);
    if (null != value) {
      value.delete(id);
      if (0 === value.size) {
        map.delete(tmp4);
      }
    }
    obj = importDefault(22);
  }
}
function updateParty(closure_11, id, activities, status) {
  const found = activities.find((party) => null != party.party && party.party.id);
  id = null;
  if (null != found) {
    id = null;
    if (null != found.party) {
      id = found.party.id;
    }
  }
  const tmp3 = getPartyForUser(id, closure_11);
  if (null != id) {
    if (status !== constants.OFFLINE) {
      if (null != tmp3) {
        if (tmp3 === id) {
          return false;
        } else {
          removeUserFromParty(id, closure_11);
        }
      }
      let tmp5 = dependencyMap[id];
      if (null == tmp5) {
        const obj = {};
        dependencyMap[id] = obj;
        tmp5 = obj;
      }
      tmp5[closure_11] = id;
      if (!closure_8.isBlocked(id)) {
        if (!closure_8.isIgnored(id)) {
          let set = map.get(id);
          if (null == set) {
            const _Set = Set;
            set = new Set();
          }
          const result = map.set(id, set);
          set.add(id);
        }
      }
      return true;
    }
  }
  let flag3 = null != tmp3;
  if (flag3) {
    removeUserFromParty(id, closure_11);
    flag3 = true;
  }
  return flag3;
}
function handleGuildCreate(guild) {
  let iter3;
  guild = guild.guild;
  const tmp = _createForOfIteratorHelperLoose(guild.presences);
  const iter = tmp();
  let iter2 = iter;
  let flag = false;
  let flag2 = false;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp2 = updateParty;
      if (false !== updateParty(guild.id, value.user.id, value.activities, value.status)) {
        flag = true;
      }
      iter3 = tmp();
      iter2 = iter3;
      flag2 = flag;
    } while (!iter3.done);
  }
  return flag2;
}
function batchUpdatePresences(guildId, addedMembers) {
  let closure_0 = guildId;
  let c1 = false;
  const item = addedMembers.forEach((user) => {
    let tmp = null != user;
    if (tmp) {
      tmp = outer1_19(closure_0, user.user.id, user.activities, user.status);
    }
    if (tmp) {
      let c1 = true;
    }
  });
  return c1;
}
function handleLocalPresenceUpdate() {
  id = id.getId();
  return updateParty(closure_11, id, activities.getActivities());
}
function handleRelationshipAddOrUpdate(relationship) {
  let iter2;
  relationship = relationship.relationship;
  if (!closure_8.isBlocked(relationship.id)) {
    if (!closure_8.isIgnored(relationship.id)) {
      return false;
    }
  }
  if (null == dependencyMap[relationship.id]) {
    return false;
  } else {
    const tmp6 = _createForOfIteratorHelperLoose(importDefault(22).values(tmp2));
    let iter = tmp6();
    if (!iter.done) {
      do {
        let tmp7 = map;
        let value = map.get(iter.value);
        if (null != value) {
          let deleteResult = value.delete(relationship.id);
        }
        iter2 = tmp6();
        iter = iter2;
      } while (!iter2.done);
    }
  }
}
({ StatusTypes: closure_10, ME: closure_11 } = ME);
let closure_12 = {};
let map = new Map();
let tmp4 = ((Store) => {
  class GamePartyStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GamePartyStore);
      obj = outer1_5(GamePartyStore);
      tmp2 = outer1_4;
      if (outer1_14()) {
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
  callback2(GamePartyStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [outer1_9];
      this.syncWith(items, outer1_22);
      this.waitFor(outer1_7, outer1_8, outer1_9);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getParty",
    value(arg0) {
      let value = null;
      if (null != arg0) {
        value = null;
        if (outer1_13.has(arg0)) {
          value = outer1_13.get(arg0);
        }
      }
      return value;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUserParties",
    value() {
      return outer1_12;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getParties",
    value() {
      return outer1_13;
    }
  };
  return callback(GamePartyStore, items);
})(require("initialize").Store);
tmp4.displayName = "GamePartyStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(presences) {
    let activities;
    let iter3;
    let iter5;
    let status;
    let user;
    const tmp = _createForOfIteratorHelperLoose(presences.presences);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        ({ user, status, activities } = iter2.value);
        let tmp2 = null != user;
        if (tmp2) {
          let tmp3 = updateParty;
          let tmp4 = closure_11;
          let tmp5 = activities;
          let tmp6 = status;
          tmp2 = false !== updateParty(closure_11, user.id, activities, status);
        }
        if (tmp2) {
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    const tmp7 = _createForOfIteratorHelperLoose(presences.guilds);
    let iter4 = tmp7();
    let flag3 = flag2;
    let tmp8 = flag2;
    if (!iter4.done) {
      do {
        let tmp9 = handleGuildCreate;
        let obj = { guild: iter4.value };
        if (false !== handleGuildCreate(obj)) {
          flag3 = true;
        }
        iter5 = tmp7();
        iter4 = iter5;
        tmp8 = flag3;
      } while (!iter5.done);
    }
    return tmp8;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(parties) {
    parties = parties.parties;
    const map = new Map();
    const obj = {};
    const merged = Object.assign(parties.userParties);
    const keys = Object.keys(parties);
    const item = keys.forEach((arg0) => map.set(arg0, new Set(parties[arg0])));
  },
  GUILD_CREATE: handleGuildCreate,
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(presences.presences);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let user = iter2.value.user;
        let tmp3 = null != user;
        if (tmp3) {
          let tmp4 = updateParty;
          let tmp5 = closure_11;
          tmp3 = false !== updateParty(closure_11, user.id, tmp2);
        }
        if (tmp3) {
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((user) => {
      let activities;
      let guildId;
      let status;
      ({ guildId, status, activities } = user);
      if (null == guildId) {
        guildId = outer1_11;
      }
      return outer1_19(guildId, user.user.id, activities, status);
    });
    return mapped.some((arg0) => arg0);
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(members) {
    members = members.members;
    return batchUpdatePresences(members.guildId, members.map((presence) => presence.presence));
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(addedMembers) {
    addedMembers = addedMembers.addedMembers;
    let tmp2 = null != addedMembers;
    if (tmp2) {
      tmp2 = batchUpdatePresences(tmp, addedMembers.map((presence) => presence.presence));
    }
    return tmp2;
  },
  RELATIONSHIP_ADD: handleRelationshipAddOrUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipAddOrUpdate,
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    let iter2;
    relationship = relationship.relationship;
    if (null == dependencyMap[relationship.id]) {
      return false;
    } else {
      const tmp5 = _createForOfIteratorHelperLoose(importDefault(22).values(tmp));
      let iter = tmp5();
      if (!iter.done) {
        do {
          let tmp6 = map;
          let value = map.get(iter.value);
          if (null != value) {
            let addResult = value.add(relationship.id);
          }
          iter2 = tmp5();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/GamePartyStore.tsx");

export default tmp4;
