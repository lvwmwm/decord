// Module ID: 15311
// Function ID: 116443
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 15311 (_createForOfIteratorHelperLoose)
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const StatusTypes = arg1(dependencyMap[2]).StatusTypes;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/friends/getFriendStatusCounts.tsx");

export default function getFriendStatusCounts() {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(friendIDs.getFriendIDs());
  const iter = tmp();
  let num = 0;
  let iter2 = iter;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  if (!iter.done) {
    do {
      let tmp2 = closure_0;
      let status = closure_0.getStatus(iter2.value);
      let tmp4 = closure_2;
      if (closure_2.ONLINE === status) {
        let sum = num + 1;
        let sum1 = num2;
        let sum2 = num3;
      } else {
        let tmp5 = closure_2;
        if (closure_2.IDLE === status) {
          sum1 = num2 + 1;
          sum = num;
          sum2 = num3;
        } else {
          let tmp6 = closure_2;
          sum = num;
          sum1 = num2;
          sum2 = num3;
          if (closure_2.DND === status) {
            sum2 = num3 + 1;
            sum = num;
            sum1 = num2;
          }
        }
      }
      iter3 = tmp();
      num = sum;
      num2 = sum1;
      num3 = sum2;
      iter2 = iter3;
      num4 = sum;
      num5 = sum1;
      num6 = sum2;
    } while (!iter3.done);
  }
  const obj = { num_friends_online: num4, num_friends_idle: num5, num_friends_dnd: num6 };
  return obj;
};
