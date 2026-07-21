// Module ID: 1819
// Function ID: 19984
// Dependencies: []

// Module 1819
let importDefaultResult = importDefault(dependencyMap[0]);
importDefaultResult = new importDefaultResult("KeyboardStateDebugging");
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/keyboard/KeyboardStateDebugging.tsx");

export default {
  channelSafeAreaBottomLayoutHeightChanged(layoutHeight) {
    let obj = arg1(dependencyMap[1]);
    if (!obj.isIOS()) {
      obj = { layoutHeight };
      importDefaultResult.info("ChannelSafeAreaBottom layout height changed.", obj);
    }
  },
  channelSafeAreaBottomLayoutHeightMismatch(layoutHeight, reportedKeyboardHeight) {
    let obj = reportedKeyboardHeight(dependencyMap[1]);
    if (!obj.isIOS()) {
      obj = { layoutHeight, reportedKeyboardHeight };
      importDefaultResult.warn("ChannelSafeAreaBottom layout height mismatch.", obj);
    }
  },
  keyboardControllerKeyboardWillShow(height) {
    let obj = arg1(dependencyMap[1]);
    if (!obj.isIOS()) {
      obj = { height };
      importDefaultResult.info("KeyboardController keyboardWillShow.", obj);
    }
  },
  keyboardControllerKeyboardDidShow(height) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let obj = arg1(dependencyMap[1]);
    if (!obj.isIOS()) {
      obj = { height, rootProvider: flag };
      importDefaultResult.info("KeyboardController keyboardDidShow.", obj);
    }
  },
  keyboardControllerWorkletEvent(arg0, height) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let obj = height(dependencyMap[1]);
    if (!obj.isIOS()) {
      const _HermesInternal = HermesInternal;
      obj = { height, rootProvider: flag };
      importDefaultResult.info("KeyboardController worklet " + arg0 + ".", obj);
    }
  },
  keyboardControllerKeyboardWillHide() {
    if (!obj.isIOS()) {
      importDefaultResult.info("KeyboardController keyboardWillHide.");
    }
  },
  keyboardControllerKeyboardDidHide() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    let obj = arg1(dependencyMap[1]);
    if (!obj.isIOS()) {
      obj = { rootProvider: flag };
      importDefaultResult.info("KeyboardController keyboardDidHide.", obj);
    }
  },
  reactNativeKeyboardDidShow(height, KeyboardUIStore) {
    let obj = KeyboardUIStore(dependencyMap[1]);
    if (!obj.isIOS()) {
      obj = { height, location: KeyboardUIStore };
      importDefaultResult.info("ReactNativeKeyboard didShow.", obj);
    }
  },
  reactNativeKeyboardDidHide(KeyboardUIStore) {
    let obj = arg1(dependencyMap[1]);
    if (!obj.isIOS()) {
      obj = { location: KeyboardUIStore };
      importDefaultResult.info("ReactNativeKeyboard didHide.", obj);
    }
  },
  markPotentialBadState() {
    if (!obj.isIOS()) {
      importDefaultResult.warn("Marking potential bad state from user, check logs above.");
    }
  }
};
