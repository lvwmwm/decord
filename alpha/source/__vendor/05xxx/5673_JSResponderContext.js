// Module ID: 5673
// Function ID: 5674
// Name: JSResponderContext
// Dependencies: [19, 17]
// Exports: isKeyboardDismissingTap, setKeyboardVisibility, updateResponderEventValue

// Module 5673 (JSResponderContext)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;

const TextInput = react_native.TextInput;
let c1 = false;
let closure_2 = false;

export const JSResponderContext = react.createContext(null);
export function updateResponderEventValue(isRNGHResponderEvent, current) {
  isRNGHResponderEvent = undefined;
  if (isRNGHResponderEvent != null) {
    isRNGHResponderEvent = isRNGHResponderEvent.isRNGHResponderEvent;
  }
  if (isRNGHResponderEvent) {
    isRNGHResponderEvent.current = current;
  }
}
export function setKeyboardVisibility(arg0) {
  let tmp = arg0;
  c1 = arg0;
  if (c1) {
    const State = TextInput.State;
    const currentlyFocusedInput = State.currentlyFocusedInput;
    let result;
    if (currentlyFocusedInput != null) {
      result = currentlyFocusedInput();
    }
    tmp = null != result;
  }
  closure_2 = tmp;
}
export function isKeyboardDismissingTap(keyboardShouldPersistTaps) {
  if (null == keyboardShouldPersistTaps) {
    return false;
  } else {
    keyboardShouldPersistTaps = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
    let tmp = !keyboardShouldPersistTaps;
    if (keyboardShouldPersistTaps) {
      tmp = "never" === keyboardShouldPersistTaps;
    }
    if (tmp) {
      tmp = c1;
    }
    if (tmp) {
      let tmp2 = closure_2;
      if (!tmp2) {
        const State = TextInput.State;
        const currentlyFocusedInput = State.currentlyFocusedInput;
        let result;
        if (currentlyFocusedInput != null) {
          result = currentlyFocusedInput();
        }
        tmp2 = null != result;
      }
      tmp = tmp2;
    }
    return tmp;
  }
}
