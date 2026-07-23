// Module ID: 1775
// Function ID: 19761
// Name: NOOP
// Dependencies: [31, 27]
// Exports: useKeyboardContext

// Module 1775 (NOOP)
import result from "result";
import { Animated } from "get ActivityIndicator";
import withSharedValueResult from "result";

const useContext = result.useContext;
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
  let closure_0 = value;
  return {
    value,
    addListener: NOOP,
    removeListener: NOOP,
    modify: NOOP,
    get() {
      return closure_0;
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
const context = result.createContext(obj);

export const KeyboardContext = context;
export const useKeyboardContext = function useKeyboardContext() {
  return useContext(context);
};
