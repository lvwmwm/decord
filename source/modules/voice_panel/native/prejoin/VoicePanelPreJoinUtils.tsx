// Module ID: 15712
// Function ID: 120087
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: areVoicePanelPreJoinContentPropsEqual

// Module 15712 (_createForOfIteratorHelperLoose)
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
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinUtils.tsx");

export const areVoicePanelPreJoinContentPropsEqual = function areVoicePanelPreJoinContentPropsEqual(streamingMembers) {
  if (null != streamingMembers) {
    if (null != arg1) {
      if (importDefault(dependencyMap[0])(streamingMembers, arg1, ["<string:1744830>"])) {
        const tmp2 = _createForOfIteratorHelperLoose(streamingMembers.streamingMembers);
        const iter = tmp2();
        let iter2 = iter;
        let num2 = 0;
        if (!iter.done) {
          const value = iter2.value;
          while (null != arg1.streamingMembers[num2]) {
            if (value[0] === tmp3[0]) {
              if (value[1] === tmp3[1]) {
                num2 = num2 + 1;
                let iter3 = tmp2();
                iter2 = iter3;
              }
            }
            let flag2 = false;
            return false;
          }
          return false;
        }
        return true;
      } else {
        return false;
      }
    }
  }
  return streamingMembers === arg1;
};
