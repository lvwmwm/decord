// Module ID: 6896
// Function ID: 54914
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6896 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
function recountRelationshipTypes() {
  let closure_0 = 0;
  let closure_1 = 0;
  let closure_2 = 0;
  const values = secondaryIndexMap.values();
  const item = values.forEach((arg0) => {
    let id;
    let type;
    ({ type, id } = arg0);
    if (type === constants.FRIEND) {
      closure_2 = closure_2 + 1;
    } else if (type === constants.PENDING_OUTGOING) {
      closure_1 = closure_1 + 1;
    } else if (type === constants.PENDING_INCOMING) {
      if (!closure_5.isSpam(id)) {
        if (!closure_5.isIgnored(id)) {
          closure_0 = closure_0 + 1;
        }
      }
    }
  });
  let closure_12 = closure_0;
  let closure_13 = closure_1;
  let closure_14 = closure_2;
}
function upsert(id) {
  const result = secondaryIndexMap.set(GAME_RELATIONSHIP_KEY(id.id, id.applicationId), id);
}
function remove(id, applicationId) {
  secondaryIndexMap.delete(GAME_RELATIONSHIP_KEY(id, applicationId));
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
const RelationshipTypes = arg1(dependencyMap[6]).RelationshipTypes;
function GAME_RELATIONSHIP_KEY(id, applicationId) {
  return "" + applicationId + "-" + id;
}
function GameRelationshipIndexes_BY_APPLICATION_ID(applicationId) {
  return "application-id-" + applicationId;
}
function GameRelationshipIndexes_BY_USER_ID(id) {
  return "user-id-" + id;
}
function GameRelationshipIndexes_BY_RELATIONSHIP_TYPE(type) {
  return "relationship-type-" + type;
}
const secondaryIndexMap = new arg1(dependencyMap[7]).SecondaryIndexMap(function gameRelationshipsIndex(applicationId) {
  const items = [];
  items.push(GameRelationshipIndexes_BY_APPLICATION_ID(applicationId.applicationId));
  items.push(GameRelationshipIndexes_BY_USER_ID(applicationId.id));
  items.push(GameRelationshipIndexes_BY_RELATIONSHIP_TYPE(applicationId.type));
  return items;
}, (since) => "" + since.since);
let closure_12 = 0;
let closure_13 = 0;
let closure_14 = 0;
let tmp3 = (Store) => {
  class GameRelationshipStore {
    constructor() {
      self = this;
      tmp = GameRelationshipStore(this, GameRelationshipStore);
      obj = closure_3(GameRelationshipStore);
      tmp2 = closure_2;
      if (closure_15()) {
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
  let closure_0 = GameRelationshipStore;
  callback2(GameRelationshipStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "getPendingIncomingCount",
    value() {
      return closure_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPendingOutgoingCount",
    value() {
      return closure_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGameFriendCount",
    value() {
      return closure_14;
    }
  };
  items[4] = {
    key: "getGameFriendsForApplication",
    value(arg0) {
      const values = closure_11.values(callback2(arg0), true);
      return values.filter((type) => type.type === constants.FRIEND);
    }
  };
  items[5] = {
    key: "getGameRelationshipsForUser",
    value(arg0) {
      return closure_11.values(callback3(arg0), true);
    }
  };
  items[6] = {
    key: "getGameRelationshipsForUserByType",
    value(arg0, arg1) {
      const GameRelationshipStore = arg1;
      const gameRelationshipsForUser = this.getGameRelationshipsForUser(arg0);
      return gameRelationshipsForUser.filter((type) => type.type === arg1);
    }
  };
  items[7] = {
    key: "getGameFriendsForUser",
    value(arg0) {
      return this.getGameRelationshipsForUserByType(arg0, constants.FRIEND);
    }
  };
  items[8] = {
    key: "getGameRelationshipCount",
    value() {
      return closure_11.size();
    }
  };
  items[9] = {
    key: "getGameRelationships",
    value() {
      return closure_11;
    }
  };
  items[10] = {
    key: "getGameRelationshipsByType",
    value(arg0) {
      return closure_11.values(callback4(arg0), true);
    }
  };
  items[11] = {
    key: "getGameRelationshipsVersion",
    value() {
      return closure_11.version;
    }
  };
  return callback(GameRelationshipStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp3.displayName = "GameRelationshipStore";
tmp3 = new tmp3(importDefault(dependencyMap[9]), {
  CONNECTION_OPEN: function handleConnectionOpen(gameRelationships) {
    secondaryIndexMap.clear();
    gameRelationships = gameRelationships.gameRelationships;
    const item = gameRelationships.forEach((id) => {
      callback({ id: id.id, applicationId: id.application_id, type: id.type, since: id.since, dmAccessType: id.dm_access_type });
    });
    recountRelationshipTypes();
  },
  GAME_RELATIONSHIP_ADD: function handleGameRelationshipAdd(gameRelationship) {
    upsert(gameRelationship.gameRelationship);
    recountRelationshipTypes();
  },
  GAME_RELATIONSHIP_REMOVE: function handleGameRelationshipRemove(userId) {
    remove(userId.userId, userId.applicationId);
    recountRelationshipTypes();
  },
  APPLICATIONS_FETCH_SUCCESS: function handleApplicationsFetchSuccess(unknownApplicationIds) {
    let iter3;
    unknownApplicationIds = unknownApplicationIds.unknownApplicationIds;
    if (null != unknownApplicationIds) {
      const tmp14 = _createForOfIteratorHelperLoose(unknownApplicationIds);
      const iter5 = tmp14();
      let iter4 = iter5;
      if (!iter5.done) {
        do {
          let value = iter4.value;
          let tmp = closure_16;
          let tmp2 = closure_11;
          let tmp3 = closure_8;
          let tmp4 = closure_16(closure_11.values(closure_8(value)));
          let iter = tmp4();
          if (!iter.done) {
            do {
              value = iter.value;
              let tmp5 = closure_6;
              let tmp6 = value.type !== closure_6.PENDING_INCOMING;
              if (tmp6) {
                let tmp7 = closure_6;
                tmp6 = value.type !== closure_6.PENDING_OUTGOING;
              }
              if (!tmp6) {
                let tmp8 = closure_20;
                let tmp9 = closure_20(value.id, value);
              }
              let iter2 = tmp4();
              iter = iter2;
              let tmp10 = value;
            } while (!iter2.done);
          }
          iter3 = tmp14();
          iter4 = iter3;
        } while (!iter3.done);
      }
      recountRelationshipTypes();
    }
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/game_relationships/GameRelationshipStore.tsx");

export default tmp3;
