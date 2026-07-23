// Module ID: 13416
// Function ID: 103180
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 3767, 1849, 4033, 653, 13403, 8310, 483, 10496, 10501, 2]

// Module 13416 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import createRPCCommand from "createRPCCommand";

let RPCCommands;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
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
({ ApplicationFlags: closure_7, RelationshipTypes: closure_8, RPCCommands, RPCErrors: closure_9 } = ME);
let obj = {};
obj = {};
obj = {};
let items = [require("set").OAuth2Scopes.RELATIONSHIPS_READ];
obj[require("RPC_SCOPE_CONFIG").RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(socket) {
  let iter3;
  let obj = importAll(483);
  const flags = socket.socket.application.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  const obj2 = importAll(483);
  const deserializeResult = importAll(483).deserialize(num);
  if (obj.has(deserializeResult, obj3.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
    let tmp20 = importDefault(10496);
    obj = { errorCode: constants3.INVALID_PERMISSIONS };
    const prototype = tmp20.prototype;
    tmp20 = new tmp20(obj, "Missing Permissions");
    throw tmp20;
  } else {
    const items = [];
    mutableRelationships = mutableRelationships.getMutableRelationships();
    const tmp4 = _createForOfIteratorHelperLoose(mutableRelationships.entries());
    const iter = tmp4();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp5 = callback;
        let tmp6 = callback(iter2.value, 2);
        let tmp8 = tmp6[1];
        let tmp9 = constants2;
        if (tmp8 !== constants2.NONE) {
          let tmp10 = user;
          user = user.getUser(tmp7);
          let tmp12 = user;
          if (null != user) {
            let tmp13 = require;
            let tmp14 = dependencyMap;
            let obj5 = require(10501) /* recurseReplaceContentTree */;
            let result = obj5.transformBaseRelationship(tmp8, user);
            let obj6 = require(10501) /* recurseReplaceContentTree */;
            let arr = items.push(obj6.transformApplicationRelationship(result, socket.socket.application.id));
            let tmp17 = user;
          }
        }
        iter3 = tmp4();
        iter2 = iter3;
      } while (!iter3.done);
    }
    obj = { relationships: items };
    return obj;
  }
  obj3 = importAll(483);
};
obj[RPCCommands.GET_RELATIONSHIPS] = createRPCCommand.createRPCCommand(RPCCommands.GET_RELATIONSHIPS, obj);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/server/commands/relationships.tsx");

export default obj;
