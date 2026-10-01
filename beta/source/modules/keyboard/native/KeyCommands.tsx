// Module ID: 5277
// Function ID: 5278
// Name: KeyCommands
// Dependencies: [19, 5278, 2]
// Exports: subscribeKeyCommand, useKeyCommands

// Module 5277 (KeyCommands)
import react from "react" /* 19 */;
import react_native_mod from "react-native" /* 5278 */;
import size from "module_2" /* 2 */;

let importDefault, map;

const f80377 = () => {
  c4 = false;
  map = new Map();
  for (const item10012 of closure_1_3) {
    let result = map.set(item10012.eventName, item10012);
    continue;
  }
  items = [...map.values()];
  const obj2 = closure_1_0(closure_1_1[1]);
  obj2.setKeyCommands(items.map(closure_1_6));
};
function toNativeKeyCommand(eventName) {
  return { eventName: eventName.eventName, input: eventName.input, modifierFlags: eventName.modifierFlags, discoverabilityTitle: eventName.discoverabilityTitle };
}
function registerKeyCommand(arg0) {
  const items = [];
  items[HermesBuiltin.arraySpread(items, closure_3, 0)] = arg0;
  closure_3 = items;
  if (null == closure_5) {
    const obj = react_native;
    closure_5 = obj.onKeyCommand((eventName) => {
      let diff = items.length - 1;
      if (0 <= diff) {
        while (true) {
          let obj = items[diff];
          if (obj.eventName === eventName.eventName) {
            if (obj.onKeyCommand(eventName)) {
              break;
            }
          }
          diff = diff - 1;
        }
      }
    });
  }
  const tmp4 = c4;
  if (!tmp4) {
    c4 = true;
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(f80377);
  }
}
function unregisterKeyCommand(arg0) {
  let closure_0 = arg0;
  closure_3 = closure_3.filter((item) => item !== closure_0);
  const tmp = c4;
  if (!tmp) {
    c4 = true;
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(f80377);
  }
}
let react_native = react_native_mod;
let closure_3 = [];
let c4 = false;
let closure_5 = null;
react_native = react_native.getConstants();
let result = size.fileFinishedImporting("modules/keyboard/native/KeyCommands.tsx");

export const KeyModifierFlags = react_native;
export const KeyInputs = { ESCAPE: "UIKeyInputEscape" };
export const subscribeKeyCommand = function subscribeKeyCommand(arg0) {
  let closure_0;
  importDefault = arg0;
  let items = [];
  items[HermesBuiltin.arraySpread(items, items, 0)] = arg0;
  if (null == closure_5) {
    let tmp2 = importDefault;
    let tmp3 = dependencyMap;
    let obj = react_native;
    closure_5 = obj.onKeyCommand((eventName) => {
      let diff = items.length - 1;
      if (0 <= diff) {
        while (true) {
          let obj = items[diff];
          if (obj.eventName === eventName.eventName) {
            if (obj.onKeyCommand(eventName)) {
              break;
            }
          }
          diff = diff - 1;
        }
      }
    });
  }
  const tmp4 = c4;
  if (!tmp4) {
    c4 = true;
    let _queueMicrotask = queueMicrotask;
    queueMicrotask(f80377);
  }
  return () => {
    items = items.filter((item) => item !== closure_0);
    const tmp = c4;
    if (!tmp) {
      c4 = true;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(f80377);
    }
  };
};
export const useKeyCommands = function useKeyCommands(memo) {
  const items = [memo];
  const effect = react.useEffect(() => {
    let tmp2 = memo[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp4 = registerKeyCommand;
      let tmp5 = registerKeyCommand(tmp3);
      continue;
    }
    return () => {
      const tmp2 = memo[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let tmp5 = unregisterKeyCommand(tmp3);
        continue;
      }
    };
  }, items);
};
