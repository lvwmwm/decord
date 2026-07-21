// Module ID: 12186
// Function ID: 93665
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12186 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function getPartyForUser(id, closure_11) {
  let obj = closure_12[id];
  if (null == obj) {
    obj = {};
  }
  return obj[closure_11];
}
function removeUserFromParty(id, closure_11) {
  const tmp = getPartyForUser(id, closure_11);
  if (null != tmp) {
    delete r7[r2];
    if (obj.isEmpty(closure_12[id])) {
      delete r2[r5];
    }
    const value = map.get(tmp);
    if (null != value) {
      value.delete(id);
      if (0 === value.size) {
        map.delete(tmp);
      }
    }
    const obj = importDefault(dependencyMap[9]);
  }
}
function updateParty(closure_11, id, activities) {
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
    if (arg3 !== constants.OFFLINE) {
      if (null != tmp3) {
        if (tmp3 === id) {
          return false;
        } else {
          removeUserFromParty(id, closure_11);
        }
      }
      let tmp5 = closure_12[id];
      if (null == tmp5) {
        const obj = {};
        closure_12[id] = obj;
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
      let tmp2 = closure_19;
      if (false !== closure_19(guild.id, value.user.id, value.activities, value.status)) {
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
  const importDefault = guildId;
  let closure_1 = false;
  const item = addedMembers.forEach((user) => {
    let tmp = null != user;
    if (tmp) {
      tmp = callback(user, user.user.id, user.activities, user.status);
    }
    if (tmp) {
      let closure_1 = true;
    }
  });
  return closure_1;
}
function handleLocalPresenceUpdate() {
  const id = id.getId();
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
  if (null == closure_12[relationship.id]) {
    return false;
  } else {
    const tmp6 = _createForOfIteratorHelperLoose(importDefault(dependencyMap[9]).values(tmp2));
    let iter = tmp6();
    if (!iter.done) {
      do {
        let tmp7 = closure_13;
        let value = closure_13.get(iter.value);
        if (null != value) {
          let deleteResult = value.delete(relationship.id);
        }
        iter2 = tmp6();
        iter = iter2;
      } while (!iter2.done);
    }
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
({ StatusTypes: closure_10, ME: closure_11 } = arg1(dependencyMap[8]));
let closure_12 = {};
const map = new Map();
let tmp4 = (Store) => {
  class GamePartyStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GamePartyStore);
      obj = closure_5(GamePartyStore);
      tmp2 = closure_4;
      if (closure_14()) {
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
  const importDefault = GamePartyStore;
  callback2(GamePartyStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [closure_9];
      this.syncWith(items, closure_22);
      this.waitFor(closure_7, closure_8, closure_9);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getParty",
    value(arg0) {
      let value = null;
      if (null != arg0) {
        value = null;
        if (map.has(arg0)) {
          value = map.get(arg0);
        }
      }
      return value;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUserParties",
    value() {
      return closure_12;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getParties",
    value() {
      return closure_13;
    }
  };
  return callback(GamePartyStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp4.displayName = "GamePartyStore";
tmp4 = new tmp4(importDefault(dependencyMap[11]), {
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
          let tmp3 = closure_19;
          let tmp4 = closure_11;
          let tmp5 = activities;
          let tmp6 = status;
          tmp2 = false !== closure_19(closure_11, user.id, activities, status);
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
        let tmp9 = closure_20;
        let obj = { guild: iter4.value };
        if (false !== closure_20(obj)) {
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
    const importDefault = parties;
    const map = new Map();
    const merged = Object.assign(parties.userParties);
    let closure_12 = {};
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
          let tmp4 = closure_19;
          let tmp5 = closure_11;
          tmp3 = false !== closure_19(closure_11, user.id, tmp2);
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
        guildId = closure_11;
      }
      return closure_19(guildId, user.user.id, activities, status);
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
    if (null == closure_12[relationship.id]) {
      return false;
    } else {
      const tmp5 = _createForOfIteratorHelperLoose(importDefault(dependencyMap[9]).values(tmp));
      let iter = tmp5();
      if (!iter.done) {
        do {
          let tmp6 = closure_13;
          let value = closure_13.get(iter.value);
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
const obj = {
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
          let tmp3 = closure_19;
          let tmp4 = closure_11;
          let tmp5 = activities;
          let tmp6 = status;
          tmp2 = false !== closure_19(closure_11, user.id, activities, status);
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
        let tmp9 = closure_20;
        let obj = { guild: iter4.value };
        if (false !== closure_20(obj)) {
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
    const importDefault = parties;
    const map = new Map();
    const merged = Object.assign(parties.userParties);
    let closure_12 = {};
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
          let tmp4 = closure_19;
          let tmp5 = closure_11;
          tmp3 = false !== closure_19(closure_11, user.id, tmp2);
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
        guildId = closure_11;
      }
      return closure_19(guildId, user.user.id, activities, status);
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
    if (null == closure_12[relationship.id]) {
      return false;
    } else {
      const tmp5 = _createForOfIteratorHelperLoose(importDefault(dependencyMap[9]).values(tmp));
      let iter = tmp5();
      if (!iter.done) {
        do {
          let tmp6 = closure_13;
          let value = closure_13.get(iter.value);
          if (null != value) {
            let addResult = value.add(relationship.id);
          }
          iter2 = tmp5();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  }
};
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("stores/GamePartyStore.tsx");

export default tmp4;
