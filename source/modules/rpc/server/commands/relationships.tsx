// Module ID: 13293
// Function ID: 100969
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 13293 (_createForOfIteratorHelperLoose)
let RPCCommands;
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
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ ApplicationFlags: closure_7, RelationshipTypes: closure_8, RPCCommands, RPCErrors: closure_9 } = arg1(dependencyMap[4]));
let obj = {};
const tmp2 = arg1(dependencyMap[4]);
obj = {};
obj = {};
const items = [arg1(dependencyMap[6]).OAuth2Scopes.RELATIONSHIPS_READ];
obj[arg1(dependencyMap[3]).RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(socket) {
  let iter3;
  let obj = importAll(dependencyMap[7]);
  const flags = socket.socket.application.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  const obj2 = importAll(dependencyMap[7]);
  const deserializeResult = importAll(dependencyMap[7]).deserialize(num);
  if (obj.has(deserializeResult, obj3.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
    let tmp20 = importDefault(dependencyMap[8]);
    obj = { errorCode: constants2.INVALID_PERMISSIONS };
    const prototype = tmp20.prototype;
    tmp20 = new tmp20(obj, "Missing Permissions");
    throw tmp20;
  } else {
    const items = [];
    const mutableRelationships = mutableRelationships.getMutableRelationships();
    const tmp4 = _createForOfIteratorHelperLoose(mutableRelationships.entries());
    const iter = tmp4();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp5 = closure_4;
        let tmp6 = closure_4(iter2.value, 2);
        let tmp8 = tmp6[1];
        let tmp9 = closure_8;
        if (tmp8 !== closure_8.NONE) {
          let tmp10 = closure_6;
          let user = closure_6.getUser(tmp7);
          let tmp12 = user;
          if (null != user) {
            let tmp13 = closure_0;
            let tmp14 = closure_3;
            let obj5 = closure_0(closure_3[9]);
            let result = obj5.transformBaseRelationship(tmp8, user);
            let obj6 = closure_0(closure_3[9]);
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
  const obj3 = importAll(dependencyMap[7]);
};
obj[RPCCommands.GET_RELATIONSHIPS] = arg1(dependencyMap[5]).createRPCCommand(RPCCommands.GET_RELATIONSHIPS, obj);
const obj2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/rpc/server/commands/relationships.tsx");

export default obj;
