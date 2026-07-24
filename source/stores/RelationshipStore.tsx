// Module ID: 3767
// Function ID: 28861
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 3768, 1849, 653, 686, 566, 2]

// Module 3767 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_8 from "_callSuper";
import closure_9 from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";
import set from "_possibleConstructorReturn";

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
  let size = set.size;
  size = set2.size;
  const value = map1.get(RelationshipTypes.PENDING_INCOMING);
  size = undefined;
  if (null != value) {
    size = value.size;
  }
  let num = 0;
  if (null != size) {
    num = size;
  }
  let closure_21 = Math.max(num - size - size, 0);
  closure_19 = closure_19 + 1;
}
const map = new Map();
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let set = new Set();
const set1 = new Set();
const set2 = new Set();
let closure_18 = {};
let c19 = 0;
let closure_20 = {};
let c21 = 0;
let c22 = 0;
let c23 = 0;
let closure_24 = { friends: undefined, blocked: undefined, ignored: undefined, blockedOrIgnored: undefined };
const map1 = new Map();
let tmp7 = ((Store) => {
  class RelationshipStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, RelationshipStore);
      obj = outer1_5(RelationshipStore);
      tmp2 = outer1_4;
      if (outer1_26()) {
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
  callback2(RelationshipStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isFriend",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = outer1_11.get(arg0) === outer1_10.FRIEND;
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
        tmp = outer1_11.get(arg0) === outer1_10.BLOCKED;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "isBlockedForMessage",
    value(author) {
      const self = this;
      if (null != author.author) {
        if (outer1_11.get(author.author.id) === outer1_10.BLOCKED) {
          return true;
        }
      }
      const isBlocked = self.isBlocked;
      if (author instanceof outer1_8) {
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
        let hasItem = outer1_11.get(arg0) !== outer1_10.BLOCKED;
        if (hasItem) {
          hasItem = outer1_16.has(arg0);
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
      if (author instanceof outer1_8) {
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
      return outer1_11.get(arg0) === outer1_10.PENDING_INCOMING && !self.isSpam(arg0) && !self.isIgnored(arg0);
    }
  };
  items[9] = {
    key: "getPendingCount",
    value() {
      return outer1_21;
    }
  };
  items[10] = {
    key: "getSpamCount",
    value() {
      return outer1_22;
    }
  };
  items[11] = {
    key: "getPendingIgnoredCount",
    value() {
      return outer1_23;
    }
  };
  items[12] = {
    key: "getOutgoingCount",
    value() {
      const value = outer1_25.get(outer1_10.PENDING_OUTGOING);
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
      const value = outer1_25.get(outer1_10.FRIEND);
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
      return outer1_11.size;
    }
  };
  items[15] = {
    key: "getMutableRelationships",
    value() {
      return outer1_11;
    }
  };
  items[16] = {
    key: "getVersion",
    value() {
      return outer1_19;
    }
  };
  items[17] = {
    key: "isSpam",
    value(arg0) {
      return outer1_15.has(arg0);
    }
  };
  items[18] = {
    key: "getRelationshipType",
    value(arg0) {
      let NONE = outer1_11.get(arg0);
      if (null == NONE) {
        NONE = outer1_10.NONE;
      }
      return NONE;
    }
  };
  items[19] = {
    key: "getNickname",
    value(arg0) {
      return outer1_12[arg0];
    }
  };
  items[20] = {
    key: "getSince",
    value(arg0) {
      return outer1_13[arg0];
    }
  };
  items[21] = {
    key: "getSinces",
    value() {
      return outer1_13;
    }
  };
  items[22] = {
    key: "getNote",
    value(arg0) {
      return outer1_14[arg0];
    }
  };
  items[23] = {
    key: "getFriendIDs",
    value() {
      if (null == outer1_24.friends) {
        let items = outer1_25.get(outer1_10.FRIEND);
        if (null == items) {
          items = [];
        }
        outer1_24.friends = Array.from(items);
        const tmp = outer1_24;
      }
      return outer1_24.friends;
    }
  };
  items[24] = {
    key: "getBlockedIDs",
    value() {
      if (null == outer1_24.blocked) {
        let items = outer1_25.get(outer1_10.BLOCKED);
        if (null == items) {
          items = [];
        }
        outer1_24.blocked = Array.from(items);
        const tmp = outer1_24;
      }
      return outer1_24.blocked;
    }
  };
  items[25] = {
    key: "getIgnoredIDs",
    value() {
      const self = this;
      if (null == outer1_24.ignored) {
        const _Array = Array;
        outer1_24.ignored = Array.from(outer1_16.values()).filter((arg0) => self.isIgnored(arg0));
        const arr = Array.from(outer1_16.values());
      }
      return outer1_24.ignored;
    }
  };
  items[26] = {
    key: "getBlockedOrIgnoredIDs",
    value() {
      let done;
      if (null == outer1_24.blockedOrIgnored) {
        const _Set = Set;
        const set = new Set(outer1_16);
        const value = outer1_25.get(outer1_10.BLOCKED);
        if (null != value) {
          const tmp2 = outer1_27(value);
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
        outer1_24.blockedOrIgnored = Array.from(set.values());
      }
      return outer1_24.blockedOrIgnored;
    }
  };
  items[27] = {
    key: "getOriginApplicationId",
    value(arg0) {
      return outer1_18[arg0];
    }
  };
  items[28] = {
    key: "isStranger",
    value(arg0) {
      if (null != outer1_20[arg0]) {
        const _Date = Date;
        if (outer1_20[arg0].expiry < Date.now()) {
          delete tmp[tmp2];
        } else {
          return outer1_20[arg0].isStranger;
        }
      }
    }
  };
  return callback(RelationshipStore, items);
})(require("initialize").Store);
tmp7.displayName = "RelationshipStore";
tmp7 = new tmp7(require("dispatcher"), {
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
      outer1_30(id.id, id.type);
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
        outer1_15.add(id.id);
      }
      if (null != id.origin_application_id) {
        closure_18[id.id] = id.origin_application_id;
      }
      if (id.user_ignored) {
        outer1_16.add(id.id);
        if (id.type === outer1_10.PENDING_INCOMING) {
          outer1_17.add(id.id);
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
        let tmp4 = callback3;
        let tmp5 = callback3(iter.value, 2);
        let tmp6 = upsertRelationship;
        let tmp7 = upsertRelationship(tmp5[0], tmp5[1]);
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
      const merged = Object.assign(obj);
      obj[relationship.relationship.id] = relationship.relationship.nickname;
    }
    if (null != relationship.relationship.since) {
      obj = {};
      const merged1 = Object.assign(obj);
      obj[relationship.relationship.id] = relationship.relationship.since;
    }
    if (null != relationship.relationship.note) {
      obj = {};
      const merged2 = Object.assign(obj);
      obj[relationship.relationship.id] = relationship.relationship.note;
    }
    if (null != relationship.relationship.originApplicationId) {
      const obj1 = {};
      const merged3 = Object.assign(obj1);
      obj1[relationship.relationship.id] = relationship.relationship.originApplicationId;
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
      importDefault(686).dispatch(obj2);
      const obj7 = importDefault(686);
    }
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    removeRelationship(relationship.relationship.id);
    if (null != obj[relationship.relationship.id]) {
      obj = {};
      const merged = Object.assign(obj);
      const id = relationship.relationship.id;
      delete tmp3[tmp];
    }
    if (null != obj[relationship.relationship.id]) {
      obj = {};
      const merged1 = Object.assign(obj);
      const id2 = relationship.relationship.id;
      delete tmp3[tmp];
    }
    if (null != obj[relationship.relationship.id]) {
      obj = {};
      const merged2 = Object.assign(obj);
      const id3 = relationship.relationship.id;
      delete tmp3[tmp];
    }
    if (null != obj1[relationship.relationship.id]) {
      obj1 = {};
      const merged3 = Object.assign(obj1);
      const id4 = relationship.relationship.id;
      delete tmp2[tmp];
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
      delete tmp3[tmp];
    } else {
      closure_13[relationship.id] = relationship.since;
    }
    if (null == relationship.nickname) {
      const id2 = relationship.id;
      delete tmp3[tmp];
    } else {
      closure_12[relationship.id] = relationship.nickname;
    }
    if (null == relationship.note) {
      const id3 = relationship.id;
      delete tmp3[tmp];
    } else {
      closure_14[relationship.id] = relationship.note;
    }
    if (relationship.isSpamRequest) {
      obj.add(relationship.id);
    } else {
      obj.delete(relationship.id);
    }
    if (null != table[relationship.id]) {
      const id4 = relationship.id;
      delete tmp3[tmp];
    }
    if (null == relationship.originApplicationId) {
      const id5 = relationship.id;
      delete tmp2[tmp];
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
    const tmp3 = _createForOfIteratorHelperLoose(map.keys());
    let iter = tmp3();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp4 = map;
        let tmp5 = RelationshipTypes;
        if (map.get(value) === RelationshipTypes.PENDING_INCOMING) {
          let tmp6 = removeRelationship;
          let tmp7 = removeRelationship(value);
          let tmp8 = set;
          let deleteResult = set.delete(value);
          let tmp10 = set2;
          let deleteResult1 = set2.delete(value);
          let tmp12 = closure_20;
          delete tmp[tmp2];
        }
        iter2 = tmp3();
        iter = iter2;
      } while (!iter2.done);
    }
    recountPending();
  },
  UPDATE_STRANGER_STATUS: function handleUpdateStrangerStatus(isStranger) {
    closure_20[isStranger.userId] = { expiry: Date.now() + 300000, isStranger: isStranger.isStranger };
  }
});
let result = set.fileFinishedImporting("stores/RelationshipStore.tsx");

export default tmp7;
