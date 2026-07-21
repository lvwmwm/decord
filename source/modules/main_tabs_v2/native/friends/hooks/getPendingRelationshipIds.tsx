// Module ID: 15342
// Function ID: 116850
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getPendingRelationshipIds

// Module 15342 (_createForOfIteratorHelperLoose)
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
function filterFromPending(arg0) {
  let isSpamResult = closure_0.isSpam(arg0);
  if (!isSpamResult) {
    isSpamResult = closure_0.isIgnored(arg0);
  }
  return isSpamResult;
}
let closure_0 = importDefault(dependencyMap[0]);
const RelationshipTypes = arg1(dependencyMap[1]).RelationshipTypes;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx");

export const getPendingRelationshipIds = function getPendingRelationshipIds(mutableRelationships, arg1) {
  let iter2;
  const pendingIncomingIds = [];
  const pendingOutgoingIds = [];
  const spamIds = [];
  const ignoredUserIds = [];
  const tmp = _createForOfIteratorHelperLoose(mutableRelationships.keys());
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      value = mutableRelationships.get(value);
      let tmp3 = closure_1;
      let tmp4 = value !== closure_1.PENDING_INCOMING;
      if (!tmp4) {
        let tmp5 = closure_4;
        tmp4 = closure_4(value);
      }
      if (!tmp4) {
        let arr = pendingIncomingIds.push(value);
      }
      let tmp7 = closure_1;
      if (value === closure_1.PENDING_OUTGOING) {
        arr = pendingOutgoingIds.push(value);
      }
      let tmp9 = closure_1;
      let isSpamResult = value === closure_1.PENDING_INCOMING;
      if (isSpamResult) {
        let tmp11 = closure_0;
        isSpamResult = closure_0.isSpam(value);
      }
      if (isSpamResult) {
        let arr1 = spamIds.push(value);
      }
      let tmp13 = closure_1;
      let isIgnoredResult = value === closure_1.PENDING_INCOMING;
      if (isIgnoredResult) {
        let tmp15 = closure_0;
        isIgnoredResult = closure_0.isIgnored(value);
      }
      if (isIgnoredResult) {
        let arr2 = ignoredUserIds.push(value);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  const reversed = pendingIncomingIds.reverse();
  const reversed1 = pendingOutgoingIds.reverse();
  const reversed2 = spamIds.reverse();
  return { pendingIncomingIds, pendingOutgoingIds, spamIds, ignoredUserIds };
};
