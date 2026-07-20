// Module ID: 3765
// Function ID: 28850
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3765 (_isNativeReflectConstruct)
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
function resetUserIdLists() {
  closure_24.friends = undefined;
  closure_24.blocked = undefined;
  closure_24.ignored = undefined;
  closure_24.blockedOrIgnored = undefined;
}
function upsertRelationship(id, type) {
  let value = map.get(id);
  if (value !== type) {
    if (null != value) {
      value = map1.get(value);
      if (null != value) {
        value.delete(id);
      }
    }
    const result = map.set(id, type);
    const value1 = map1.get(type);
    if (null != value1) {
      value1.add(id);
    } else {
      const _Set = Set;
      const items = [id];
      const set = new Set(items);
      const result1 = map1.set(type, set);
    }
    resetUserIdLists();
  }
}
function removeRelationship(arg0) {
  let value = map.get(arg0);
  if (null != value) {
    map.delete(arg0);
    value = map1.get(value);
    if (null != value) {
      value.delete(arg0);
    }
    resetUserIdLists();
  }
}
function recountPending() {
  const size2 = set.size;
  const size3 = set2.size;
  const value = map1.get(RelationshipTypes.PENDING_INCOMING);
  let size;
  if (null != value) {
    size = value.size;
  }
  let num = 0;
  if (null != size) {
    num = size;
  }
  let closure_21 = Math.max(num - size2 - size3, 0);
  closure_19 = closure_19 + 1;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const RelationshipTypes = arg1(dependencyMap[8]).RelationshipTypes;
const map = new Map();
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
const set = new Set();
const set1 = new Set();
const set2 = new Set();
let closure_18 = {};
let closure_19 = 0;
let closure_20 = {};
let closure_21 = 0;
let closure_22 = 0;
let closure_23 = 0;
let closure_24 = { friends: undefined, blocked: undefined, ignored: undefined, blockedOrIgnored: undefined };
const map1 = new Map();
let tmp7 = (Store) => {
  class RelationshipStore {
    constructor() {
      self = this;
      tmp = closure_2(this, RelationshipStore);
      obj = closure_5(RelationshipStore);
      tmp2 = closure_4;
      if (closure_26()) {
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
  const importDefault = RelationshipStore;
  callback2(RelationshipStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isFriend",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = store.get(arg0) === constants.FRIEND;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "isBlockedOrIgnored",
    value(arg0) {
      const self = this;
      return this.isBlocked(arg0) || self.isIgnored(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isBlockedOrIgnoredForMessage",
    value(arg0) {
      const self = this;
      return this.isBlockedForMessage(arg0) || self.isIgnoredForMessage(arg0);
    }
  };
  items[4] = {
    key: "isBlocked",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = store.get(arg0) === constants.BLOCKED;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "isBlockedForMessage",
    value(author) {
      const self = this;
      if (null != author.author) {
        if (store.get(author.author.id) === constants.BLOCKED) {
          return true;
        }
      }
      const isBlocked = self.isBlocked;
      if (author instanceof closure_8) {
        const interactionMetadata = author.interactionMetadata;
        let id;
        if (null != interactionMetadata) {
          const user2 = interactionMetadata.user;
          if (null != user2) {
            id = user2.id;
          }
        }
        if (isBlocked(id)) {
          return true;
        }
      } else {
        const interaction_metadata = author.interaction_metadata;
        let id1;
        if (null != interaction_metadata) {
          const user = interaction_metadata.user;
          if (null != user) {
            id1 = user.id;
          }
        }
        if (isBlocked(id1)) {
          return true;
        }
      }
      return false;
    }
  };
  items[6] = {
    key: "isIgnored",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let hasItem = store.get(arg0) !== constants.BLOCKED;
        if (hasItem) {
          hasItem = set2.has(arg0);
        }
        tmp = hasItem;
      }
      return tmp;
    }
  };
  items[7] = {
    key: "isIgnoredForMessage",
    value(author) {
      const self = this;
      if (null != author.author) {
        if (self.isIgnored(author.author.id)) {
          return true;
        }
      }
      const isIgnored = self.isIgnored;
      if (author instanceof closure_8) {
        const interactionMetadata = author.interactionMetadata;
        let id;
        if (null != interactionMetadata) {
          const user2 = interactionMetadata.user;
          if (null != user2) {
            id = user2.id;
          }
        }
        if (isIgnored(id)) {
          return true;
        }
      } else {
        const interaction_metadata = author.interaction_metadata;
        let id1;
        if (null != interaction_metadata) {
          const user = interaction_metadata.user;
          if (null != user) {
            id1 = user.id;
          }
        }
        if (isIgnored(id1)) {
          return true;
        }
      }
      return false;
    }
  };
  items[8] = {
    key: "isUnfilteredPendingIncoming",
    value(arg0) {
      const self = this;
      return store.get(arg0) === constants.PENDING_INCOMING && !self.isSpam(arg0) && !self.isIgnored(arg0);
    }
  };
  items[9] = {
    key: "getPendingCount",
    value() {
      return closure_21;
    }
  };
  items[10] = {
    key: "getSpamCount",
    value() {
      return closure_22;
    }
  };
  items[11] = {
    key: "getPendingIgnoredCount",
    value() {
      return closure_23;
    }
  };
  items[12] = {
    key: "getOutgoingCount",
    value() {
      const value = store2.get(constants.PENDING_OUTGOING);
      let size;
      if (null != value) {
        size = value.size;
      }
      let num = 0;
      if (null != size) {
        num = size;
      }
      return num;
    }
  };
  items[13] = {
    key: "getFriendCount",
    value() {
      const value = store2.get(constants.FRIEND);
      let size;
      if (null != value) {
        size = value.size;
      }
      let num = 0;
      if (null != size) {
        num = size;
      }
      return num;
    }
  };
  items[14] = {
    key: "getRelationshipCount",
    value() {
      return store.size;
    }
  };
  items[15] = {
    key: "getMutableRelationships",
    value() {
      return closure_11;
    }
  };
  items[16] = {
    key: "getVersion",
    value() {
      return closure_19;
    }
  };
  items[17] = {
    key: "isSpam",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[18] = {
    key: "getRelationshipType",
    value(arg0) {
      let NONE = store.get(arg0);
      if (null == NONE) {
        NONE = constants.NONE;
      }
      return NONE;
    }
  };
  items[19] = {
    key: "getNickname",
    value(arg0) {
      return closure_12[arg0];
    }
  };
  items[20] = {
    key: "getSince",
    value(arg0) {
      return closure_13[arg0];
    }
  };
  items[21] = {
    key: "getSinces",
    value() {
      return closure_13;
    }
  };
  items[22] = {
    key: "getNote",
    value(arg0) {
      return closure_14[arg0];
    }
  };
  items[23] = {
    key: "getFriendIDs",
    value() {
      if (null == closure_24.friends) {
        let items = store2.get(constants.FRIEND);
        if (null == items) {
          items = [];
        }
        closure_24.friends = Array.from(items);
        const tmp = closure_24;
      }
      return closure_24.friends;
    }
  };
  items[24] = {
    key: "getBlockedIDs",
    value() {
      if (null == closure_24.blocked) {
        let items = store2.get(constants.BLOCKED);
        if (null == items) {
          items = [];
        }
        closure_24.blocked = Array.from(items);
        const tmp = closure_24;
      }
      return closure_24.blocked;
    }
  };
  items[25] = {
    key: "getIgnoredIDs",
    value() {
      const RelationshipStore = this;
      if (null == closure_24.ignored) {
        const _Array = Array;
        closure_24.ignored = Array.from(set2.values()).filter((arg0) => self.isIgnored(arg0));
        const arr = Array.from(set2.values());
      }
      return closure_24.ignored;
    }
  };
  items[26] = {
    key: "getBlockedOrIgnoredIDs",
    value() {
      let done;
      if (null == closure_24.blockedOrIgnored) {
        const _Set = Set;
        const set = new Set(closure_16);
        const value = store2.get(constants.BLOCKED);
        if (null != value) {
          const tmp2 = callback4(value);
          let iter = tmp2();
          if (!iter.done) {
            do {
              let addResult = set.add(iter.value);
              let iter2 = tmp2();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
        }
        const _Array = Array;
        closure_24.blockedOrIgnored = Array.from(set.values());
      }
      return closure_24.blockedOrIgnored;
    }
  };
  items[27] = {
    key: "getOriginApplicationId",
    value(arg0) {
      return closure_18[arg0];
    }
  };
  items[28] = {
    key: "isStranger",
    value(arg0) {
      if (null != closure_20[arg0]) {
        const _Date = Date;
        if (closure_20[arg0].expiry < Date.now()) {
          delete r0[r1];
        } else {
          return closure_20[arg0].isStranger;
        }
      }
    }
  };
  return callback(RelationshipStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp7.displayName = "RelationshipStore";
tmp7 = new tmp7(importDefault(dependencyMap[9]), {
  CONNECTION_OPEN: function handleConnectionOpen(relationships) {
    map.clear();
    map1.clear();
    let closure_12 = {};
    let closure_13 = {};
    let closure_14 = {};
    set1.clear();
    set.clear();
    set2.clear();
    resetUserIdLists();
    let closure_18 = {};
    let closure_20 = {};
    relationships = relationships.relationships;
    const item = relationships.forEach((id) => {
      callback(id.id, id.type);
      if (null != id.nickname) {
        closure_12[id.id] = id.nickname;
      }
      if (null != id.since) {
        closure_13[id.id] = id.since;
      }
      if (null != id.note) {
        closure_14[id.id] = id.note;
      }
      if (id.is_spam_request) {
        set.add(id.id);
      }
      if (null != id.origin_application_id) {
        closure_18[id.id] = id.origin_application_id;
      }
      if (id.user_ignored) {
        set2.add(id.id);
        if (id.type === constants.PENDING_INCOMING) {
          set3.add(id.id);
        }
      }
    });
    recountPending();
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(relationships) {
    let done;
    map.clear();
    map1.clear();
    const tmp3 = _createForOfIteratorHelperLoose(relationships.relationships);
    let iter = tmp3();
    if (!iter.done) {
      do {
        let tmp4 = closure_7;
        let tmp5 = closure_7(iter.value, 2);
        let tmp6 = closure_30;
        let tmp7 = closure_30(tmp5[0], tmp5[1]);
        let iter2 = tmp3();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    recountPending();
  },
  RELATIONSHIP_ADD: function handleRelationshipAdd(relationship) {
    const value = map.get(relationship.relationship.id);
    upsertRelationship(relationship.relationship.id, relationship.relationship.type);
    if (null != relationship.relationship.nickname) {
      let obj = {};
      const merged = Object.assign(closure_12);
      obj[relationship.relationship.id] = relationship.relationship.nickname;
      closure_12 = obj;
    }
    if (null != relationship.relationship.since) {
      obj = {};
      const merged1 = Object.assign(closure_13);
      obj[relationship.relationship.id] = relationship.relationship.since;
      closure_13 = obj;
    }
    if (null != relationship.relationship.note) {
      obj = {};
      const merged2 = Object.assign(closure_14);
      obj[relationship.relationship.id] = relationship.relationship.note;
      closure_14 = obj;
    }
    if (null != relationship.relationship.originApplicationId) {
      const obj1 = {};
      const merged3 = Object.assign(closure_18);
      obj1[relationship.relationship.id] = relationship.relationship.originApplicationId;
      closure_18 = obj1;
    }
    if (relationship.relationship.isSpamRequest) {
      obj5.add(relationship.relationship.id);
    } else {
      obj5.delete(relationship.relationship.id);
    }
    if (relationship.relationship.userIgnored) {
      obj6.add(relationship.relationship.id);
      if (relationship.relationship.type === RelationshipTypes.PENDING_INCOMING) {
        set2.add(relationship.relationship.id);
      } else if (relationship.relationship.type === RelationshipTypes.FRIEND) {
        set2.delete(relationship.relationship.id);
      }
    } else {
      obj6.delete(relationship.relationship.id);
      set2.delete(relationship.relationship.id);
    }
    recountPending();
    let tmp28 = relationship.relationship.type === RelationshipTypes.FRIEND;
    if (tmp28) {
      tmp28 = value === RelationshipTypes.PENDING_OUTGOING;
    }
    if (tmp28) {
      const obj2 = { type: "FRIEND_REQUEST_ACCEPTED", user: relationship.relationship.user };
      importDefault(dependencyMap[9]).dispatch(obj2);
      const obj7 = importDefault(dependencyMap[9]);
    }
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    removeRelationship(relationship.relationship.id);
    if (null != closure_12[relationship.relationship.id]) {
      let obj = {};
      const merged = Object.assign(closure_12);
      closure_12 = obj;
      const id = relationship.relationship.id;
      delete r5[r3];
    }
    if (null != closure_13[relationship.relationship.id]) {
      obj = {};
      const merged1 = Object.assign(closure_13);
      closure_13 = obj;
      const id2 = relationship.relationship.id;
      delete r5[r3];
    }
    if (null != closure_14[relationship.relationship.id]) {
      obj = {};
      const merged2 = Object.assign(closure_14);
      closure_14 = obj;
      const id3 = relationship.relationship.id;
      delete r5[r3];
    }
    if (null != closure_18[relationship.relationship.id]) {
      const obj1 = {};
      const merged3 = Object.assign(closure_18);
      closure_18 = obj1;
      const id4 = relationship.relationship.id;
      delete r4[r3];
    }
    if (!relationship.relationship.userIgnored) {
      set1.delete(relationship.relationship.id);
    }
    set2.delete(relationship.relationship.id);
    set.delete(relationship.relationship.id);
    recountPending();
  },
  RELATIONSHIP_UPDATE: function handleRelationshipUpdate(relationship) {
    relationship = relationship.relationship;
    upsertRelationship(relationship.id, relationship.type);
    if (null == relationship.since) {
      const id = relationship.id;
      delete r5[r3];
    } else {
      closure_13[relationship.id] = relationship.since;
    }
    if (null == relationship.nickname) {
      const id2 = relationship.id;
      delete r5[r3];
    } else {
      closure_12[relationship.id] = relationship.nickname;
    }
    if (null == relationship.note) {
      const id3 = relationship.id;
      delete r5[r3];
    } else {
      closure_14[relationship.id] = relationship.note;
    }
    if (relationship.isSpamRequest) {
      obj.add(relationship.id);
    } else {
      obj.delete(relationship.id);
    }
    if (null != closure_20[relationship.id]) {
      const id4 = relationship.id;
      delete r5[r3];
    }
    if (null == relationship.originApplicationId) {
      const id5 = relationship.id;
      delete r4[r3];
    } else {
      closure_18[relationship.id] = relationship.originApplicationId;
    }
    if (relationship.userIgnored) {
      obj2.add(relationship.id);
      if (relationship.type === RelationshipTypes.PENDING_INCOMING) {
        set2.add(relationship.id);
      }
    } else {
      obj2.delete(relationship.id);
      set2.delete(relationship.id);
    }
    recountPending();
  },
  RELATIONSHIP_PENDING_INCOMING_REMOVED: function handlePendingIncomingRemoved() {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(map.keys());
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_11;
        let tmp3 = closure_10;
        if (closure_11.get(value) === closure_10.PENDING_INCOMING) {
          let tmp4 = closure_31;
          let tmp5 = closure_31(value);
          let tmp6 = closure_15;
          let deleteResult = closure_15.delete(value);
          let tmp8 = closure_17;
          let deleteResult1 = closure_17.delete(value);
          let tmp10 = closure_20;
          delete r2[r5];
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    recountPending();
  },
  UPDATE_STRANGER_STATUS: function handleUpdateStrangerStatus(isStranger) {
    closure_20[isStranger.userId] = { expiry: Date.now() + 300000, isStranger: isStranger.isStranger };
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/RelationshipStore.tsx");

export default tmp7;
