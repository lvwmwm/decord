// Module ID: 13550
// Function ID: 104205
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 33, 4130, 13551, 2]
// Exports: default, useKeyCommands

// Module 13550 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

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
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ viewDefaults: { flex: 1 } });
let context = importAllResult.createContext({
  keyCommands: [],
  addKeyCommand(value) {

  },
  removeKeyCommand() {

  }
});
const result = require("jsxProd").fileFinishedImporting("modules/keyboard/native/KeyCommandsView.tsx");

export default function KeyCommandsView(style) {
  let obj = Object.create(null);
  obj.style = 0;
  const merged = Object.assign(style, obj);
  const tmp4 = callback(callback1.useState([]), 2);
  const first = tmp4[0];
  const dependencyMap = tmp4[1];
  callback = callback1.useCallback((arg0) => {
    let closure_0 = arg0;
    callback((arg0) => {
      const items = [...arg0, closure_0];
      return items;
    });
  }, []);
  callback1 = callback1.useCallback((arg0) => {
    let closure_0 = arg0;
    callback((arr) => arr.filter((eventName) => eventName.eventName !== outer1_0));
  }, []);
  let items = [first, callback, callback1];
  obj = { value: callback1.useMemo(() => ({ keyCommands: first, addKeyCommand: callback, removeKeyCommand: callback1 }), items) };
  obj = {};
  const tmp3 = callback();
  const merged1 = Object.assign(merged);
  const items1 = [tmp3.viewDefaults, style.style];
  obj["style"] = items1;
  obj["keyCommands"] = first;
  obj["onKeyCommand"] = function onKeyCommand(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    const found = nativeEvent.find((eventName) => eventName.eventName === nativeEvent.eventName);
    if (null != found) {
      found.onKeyCommand(nativeEvent);
    }
  };
  obj.children = jsx(first(13551), {});
  return <redux.Provider />;
};
export const useKeyCommands = function useKeyCommands(memo) {
  let closure_0 = memo;
  const context = importAllResult.useContext(closure_6);
  const addKeyCommand = context.addKeyCommand;
  const removeKeyCommand = context.removeKeyCommand;
  const items = [addKeyCommand, removeKeyCommand, memo];
  const effect = importAllResult.useEffect(() => {
    let done;
    let tmp = outer1_7(closure_0);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = addKeyCommand;
        let tmp3 = addKeyCommand(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return () => {
      let done;
      const tmp = outer2_7(outer1_0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = outer1_2;
          let tmp3 = outer1_2(iter.value.eventName);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    };
  }, items);
};
