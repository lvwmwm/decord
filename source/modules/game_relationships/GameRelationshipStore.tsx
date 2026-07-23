// Module ID: 6901
// Function ID: 54959
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3767, 653, 3754, 566, 686, 2]

// Module 6901 (_isNativeReflectConstruct)
import ME from "ME";
import sortedInsert from "sortedInsert";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";

function _isNativeReflectConstruct() {
  let ME = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return ME;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let ME = iterable;
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
      ME = tmp;
    }
    let c1 = 0;
    return () => {
      if (sortedInsert >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        sortedInsert = tmp3 + 1;
        obj.value = length[+sortedInsert];
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
  let c0 = 0;
  let c1 = 0;
  let c2 = 0;
  const values = secondaryIndexMap.values();
  const item = values.forEach((arg0) => {
    let id;
    let type;
    ({ type, id } = arg0);
    if (type === outer1_6.FRIEND) {
      _possibleConstructorReturn = _possibleConstructorReturn + 1;
    } else if (type === outer1_6.PENDING_OUTGOING) {
      sortedInsert = sortedInsert + 1;
    } else if (type === outer1_6.PENDING_INCOMING) {
      if (!outer1_5.isSpam(id)) {
        if (!outer1_5.isIgnored(id)) {
          ME = ME + 1;
        }
      }
    }
  });
  let closure_12 = c0;
  let closure_13 = c1;
  let closure_14 = c2;
}
function upsert(id) {
  const result = secondaryIndexMap.set(GAME_RELATIONSHIP_KEY(id.id, id.applicationId), id);
}
function remove(id, applicationId) {
  secondaryIndexMap.delete(GAME_RELATIONSHIP_KEY(id, applicationId));
}
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
const secondaryIndexMap = new require("sortedInsert").SecondaryIndexMap(function gameRelationshipsIndex(applicationId) {
  const items = [];
  items.push(GameRelationshipIndexes_BY_APPLICATION_ID(applicationId.applicationId));
  items.push(GameRelationshipIndexes_BY_USER_ID(applicationId.id));
  items.push(GameRelationshipIndexes_BY_RELATIONSHIP_TYPE(applicationId.type));
  return items;
}, (since) => "" + since.since);
let c12 = 0;
let c13 = 0;
let c14 = 0;
let tmp3 = ((Store) => {
  class GameRelationshipStore {
    constructor() {
      self = this;
      tmp = GameRelationshipStore(this, GameRelationshipStore);
      obj = outer1_3(GameRelationshipStore);
      tmp2 = outer1_2;
      if (outer1_15()) {
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
  callback2(GameRelationshipStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "getPendingIncomingCount",
    value() {
      return outer1_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPendingOutgoingCount",
    value() {
      return outer1_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGameFriendCount",
    value() {
      return outer1_14;
    }
  };
  items[4] = {
    key: "getGameFriendsForApplication",
    value(arg0) {
      const values = outer1_11.values(outer1_8(arg0), true);
      return values.filter((type) => type.type === outer2_6.FRIEND);
    }
  };
  items[5] = {
    key: "getGameRelationshipsForUser",
    value(arg0) {
      return outer1_11.values(outer1_9(arg0), true);
    }
  };
  items[6] = {
    key: "getGameRelationshipsForUserByType",
    value(arg0, arg1) {
      let ME = arg1;
      const gameRelationshipsForUser = this.getGameRelationshipsForUser(arg0);
      return gameRelationshipsForUser.filter((type) => type.type === ME);
    }
  };
  items[7] = {
    key: "getGameFriendsForUser",
    value(arg0) {
      return this.getGameRelationshipsForUserByType(arg0, outer1_6.FRIEND);
    }
  };
  items[8] = {
    key: "getGameRelationshipCount",
    value() {
      return outer1_11.size();
    }
  };
  items[9] = {
    key: "getGameRelationships",
    value() {
      return outer1_11;
    }
  };
  items[10] = {
    key: "getGameRelationshipsByType",
    value(arg0) {
      return outer1_11.values(outer1_10(arg0), true);
    }
  };
  items[11] = {
    key: "getGameRelationshipsVersion",
    value() {
      return outer1_11.version;
    }
  };
  return callback(GameRelationshipStore, items);
})(require("initialize").Store);
tmp3.displayName = "GameRelationshipStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(gameRelationships) {
    secondaryIndexMap.clear();
    gameRelationships = gameRelationships.gameRelationships;
    const item = gameRelationships.forEach((id) => {
      outer1_19({ id: id.id, applicationId: id.application_id, type: id.type, since: id.since, dmAccessType: id.dm_access_type });
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
          let tmp = _createForOfIteratorHelperLoose;
          let tmp2 = secondaryIndexMap;
          let tmp3 = GameRelationshipIndexes_BY_APPLICATION_ID;
          let tmp4 = _createForOfIteratorHelperLoose(secondaryIndexMap.values(GameRelationshipIndexes_BY_APPLICATION_ID(value)));
          let iter = tmp4();
          if (!iter.done) {
            do {
              value = iter.value;
              let tmp5 = RelationshipTypes;
              let tmp6 = value.type !== RelationshipTypes.PENDING_INCOMING;
              if (tmp6) {
                let tmp7 = RelationshipTypes;
                tmp6 = value.type !== RelationshipTypes.PENDING_OUTGOING;
              }
              if (!tmp6) {
                let tmp8 = remove;
                let tmp9 = remove(value.id, value);
              }
              iter2 = tmp4();
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/game_relationships/GameRelationshipStore.tsx");

export default tmp3;
