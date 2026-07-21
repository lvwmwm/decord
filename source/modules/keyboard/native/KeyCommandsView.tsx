// Module ID: 13376
// Function ID: 101689
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default, useKeyCommands

// Module 13376 (_createForOfIteratorHelperLoose)
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
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles({ viewDefaults: { flex: 1 } });
const context = importAllResult.createContext({
  keyCommands: [],
  addKeyCommand() {

  },
  removeKeyCommand() {

  }
});
const obj = {
  keyCommands: [],
  addKeyCommand() {

  },
  removeKeyCommand() {

  }
};
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/keyboard/native/KeyCommandsView.tsx");

export default function KeyCommandsView(style) {
  let obj = Object.create(null);
  obj.style = 0;
  const merged = Object.assign(style, obj);
  const tmp4 = callback(importAllResult.useState([]), 2);
  const first = tmp4[0];
  const importDefault = first;
  let closure_1 = tmp4[1];
  const callback = importAllResult.useCallback((arg0) => {
    const first = arg0;
    callback((arg0) => {
      const items = [...arg0, arg0];
      return items;
    });
  }, []);
  const callback1 = importAllResult.useCallback((arg0) => {
    const first = arg0;
    callback((arr) => arr.filter((eventName) => eventName.eventName !== closure_0));
  }, []);
  const items = [first, callback, callback1];
  obj = { value: importAllResult.useMemo(() => ({ keyCommands: first, addKeyCommand: callback, removeKeyCommand: callback1 }), items) };
  obj = {};
  const tmp3 = callback2();
  const merged1 = Object.assign(merged);
  const items1 = [tmp3.viewDefaults, style.style];
  obj["style"] = items1;
  obj["keyCommands"] = first;
  obj["onKeyCommand"] = function onKeyCommand(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    const first = nativeEvent;
    const found = first.find((eventName) => eventName.eventName === nativeEvent.eventName);
    if (null != found) {
      found.onKeyCommand(nativeEvent);
    }
  };
  obj.children = jsx(importDefault(closure_1[4]), obj);
  return <redux.Provider {...obj} />;
};
export const useKeyCommands = function useKeyCommands(memo) {
  const importDefault = memo;
  const context = importAllResult.useContext(closure_6);
  const addKeyCommand = context.addKeyCommand;
  const dependencyMap = addKeyCommand;
  const removeKeyCommand = context.removeKeyCommand;
  let closure_2 = removeKeyCommand;
  const items = [addKeyCommand, removeKeyCommand, memo];
  const effect = importAllResult.useEffect(() => {
    let done;
    const tmp = callback(arg0);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_1;
        let tmp3 = closure_1(iter.value);
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return () => {
      let done;
      const tmp = callback(closure_0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_2;
          let tmp3 = closure_2(iter.value.eventName);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    };
  }, items);
};
