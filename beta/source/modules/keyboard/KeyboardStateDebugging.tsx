// Module ID: 1875
// Function ID: 1876
// Name: KeyboardStateDebugging
// Dependencies: [3, 1365, 2]

// Module 1875 (KeyboardStateDebugging)
import LoggerDefault from "Logger" /* 3 */;

const require = fn;
const logger = new LoggerDefault("KeyboardStateDebugging");
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/KeyboardStateDebugging.tsx");

export default {
  channelSafeAreaBottomLayoutHeightChanged(layoutHeight) {
    if (!obj.isIOS()) {
      const obj2 = { layoutHeight };
      logger.info("ChannelSafeAreaBottom layout height changed.", obj2);
    }
  },
  channelSafeAreaBottomLayoutHeightMismatch(layoutHeight, reportedKeyboardHeight) {
    if (!obj.isIOS()) {
      const obj2 = { layoutHeight, reportedKeyboardHeight };
      logger.warn("ChannelSafeAreaBottom layout height mismatch.", obj2);
    }
  },
  keyboardControllerKeyboardWillShow(height) {
    if (!obj.isIOS()) {
      const obj2 = { height };
      logger.info("KeyboardController keyboardWillShow.", obj2);
    }
  },
  keyboardControllerKeyboardDidShow(height) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (!obj.isIOS()) {
      const obj2 = { height, rootProvider: flag };
      logger.info("KeyboardController keyboardDidShow.", obj2);
    }
  },
  keyboardControllerWorkletEvent(arg0, height) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    if (!obj.isIOS()) {
      const _HermesInternal = HermesInternal;
      const obj2 = { height, rootProvider: flag };
      logger.info("KeyboardController worklet " + arg0 + ".", obj2);
    }
  },
  keyboardControllerKeyboardWillHide() {
    if (!obj.isIOS()) {
      logger.info("KeyboardController keyboardWillHide.");
    }
  },
  keyboardControllerKeyboardDidHide() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (!obj.isIOS()) {
      const obj2 = { rootProvider: flag };
      logger.info("KeyboardController keyboardDidHide.", obj2);
    }
  },
  reactNativeKeyboardDidShow(height, KeyboardUIStore) {
    if (!obj.isIOS()) {
      const obj2 = { height, location: KeyboardUIStore };
      logger.info("ReactNativeKeyboard didShow.", obj2);
    }
  },
  reactNativeKeyboardDidHide(KeyboardUIStore) {
    if (!obj.isIOS()) {
      const obj2 = { location: KeyboardUIStore };
      logger.info("ReactNativeKeyboard didHide.", obj2);
    }
  },
  markPotentialBadState() {
    if (!obj.isIOS()) {
      logger.warn("Marking potential bad state from user, check logs above.");
    }
  }
};
