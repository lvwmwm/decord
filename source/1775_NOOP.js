// Module ID: 1775
// Function ID: 19755
// Name: NOOP
// Dependencies: []
// Exports: useKeyboardContext

// Module 1775 (NOOP)
import withSharedValueResult from "module_0";

const _module = require(dependencyMap[0]);
const useContext = _module.useContext;
const Animated = require(dependencyMap[1]).Animated;
class NOOP {
  constructor() {
    return;
  }
}
class NESTED_NOOP {
  constructor() {
    return NOOP;
  }
}
function withSharedValue(value) {
  const useContext = value;
  return {
    value,
    addListener: NOOP,
    removeListener: NOOP,
    modify: NOOP,
    get() {
      return arg0;
    },
    set: NOOP
  };
}
let obj = { enabled: true };
obj = {};
let value = new Animated.Value(0);
obj.progress = value;
value = new Animated.Value(0);
obj.height = value;
obj.animated = obj;
obj.reanimated = { progress: withSharedValueResult, height: withSharedValueResult };
obj.layout = withSharedValue(null);
obj.update = Promise.resolve;
obj.setKeyboardHandlers = NESTED_NOOP;
obj.setInputHandlers = NESTED_NOOP;
obj.setEnabled = NOOP;
const context = _module.createContext(obj);

export const KeyboardContext = context;
export const useKeyboardContext = function useKeyboardContext() {
  return useContext(context);
};
