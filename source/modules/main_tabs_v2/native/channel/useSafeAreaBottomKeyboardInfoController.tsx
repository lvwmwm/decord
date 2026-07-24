// Module ID: 10425
// Function ID: 80327
// Name: isKeyboardOverlappingAppEntry
// Dependencies: [31, 1553, 477, 1569, 1570, 1453, 1571, 3991, 1819, 2]
// Exports: default

// Module 10425 (isKeyboardOverlappingAppEntry)
import result from "result";
import isMetaQuest from "isMetaQuest";

const require = arg1;
function isKeyboardOverlappingAppEntry(appEntryKey) {
  const _require = appEntryKey;
  let tmp = !_require(477).isAndroid();
  if (!tmp) {
    let tmp4 = importDefault(1569).getImeInsets(false, appEntryKey) > 0;
    if (!tmp4) {
      const APP_ENTRY_KEYS = _require(1570).APP_ENTRY_KEYS;
      tmp4 = !APP_ENTRY_KEYS.some((arg0) => {
        let tmp = arg0 !== closure_0;
        if (tmp) {
          tmp = outer1_1(outer1_2[3]).getImeInsets(false, arg0) > 0;
          const obj = outer1_1(outer1_2[3]);
        }
        return tmp;
      }) && null;
      const tmp7 = !APP_ENTRY_KEYS.some((arg0) => {
        let tmp = arg0 !== closure_0;
        if (tmp) {
          tmp = outer1_1(outer1_2[3]).getImeInsets(false, arg0) > 0;
          const obj = outer1_1(outer1_2[3]);
        }
        return tmp;
      }) && null;
    }
    tmp = tmp4;
    const obj2 = importDefault(1569);
  }
  return tmp;
}
isMetaQuest = isMetaQuest.isMetaQuest();
let closure_5 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}" };
let closure_6 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}" };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx");

export default function useSafeAreaBottomKeyboardInfoController() {
  let obj = appEntryKey(keyboardOpenOrOpening[5]);
  appEntryKey = obj.useAppEntryKey();
  let num = 0;
  if (!isMetaQuest) {
    const KeyboardController = appEntryKey(keyboardOpenOrOpening[6]).KeyboardController;
    const stateResult = KeyboardController.state();
    let height;
    if (null != stateResult) {
      height = stateResult.height;
    }
    let num3 = 0;
    if (null != height) {
      num3 = height;
    }
    num = num3;
  }
  let tmp7 = 0 !== num;
  if (tmp7) {
    tmp7 = true === isKeyboardOverlappingAppEntry(appEntryKey);
  }
  let num4 = 0;
  if (tmp7) {
    num4 = num;
  }
  let obj1 = appEntryKey(keyboardOpenOrOpening[7]);
  const keyboardOpenedHeight = obj1.useSharedValue(num4);
  keyboardOpenOrOpening = appEntryKey(keyboardOpenOrOpening[7]).useSharedValue(tmp7);
  const obj3 = appEntryKey(keyboardOpenOrOpening[7]);
  const keyboardOverlapsCurrentAppEntry = appEntryKey(keyboardOpenOrOpening[7]).useSharedValue(tmp7);
  const items = [appEntryKey, keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry];
  const effect = keyboardOverlapsCurrentAppEntry.useEffect(() => {
    function handleKeyboardShow(height) {
      if (height > 0) {
        const tmp3 = outer2_7(c0);
        if (null != tmp3) {
          const result = store2.set(tmp3);
        }
        if (false !== tmp3) {
          if (true === tmp3) {
            const result1 = store.set(true);
            const result2 = closure_1.set(height);
          }
        } else {
          const result3 = store.set(false);
        }
      }
    }
    if (!outer1_4) {
      let c0 = false;
      const KeyboardEvents = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let closure_1 = KeyboardEvents.addListener("keyboardWillShow", (height) => {
        const result = keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerKeyboardWillShow(height.height);
        let c0 = true;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents2 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let closure_2 = KeyboardEvents2.addListener("keyboardDidShow", (height) => {
        const result = keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerKeyboardDidShow(height.height);
        let c0 = false;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents3 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let result = KeyboardEvents3.addListener("keyboardWillHide", () => {
        const result = keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerKeyboardWillHide();
        if (store2.get()) {
          if (!c0) {
            const result1 = store.set(false);
          }
        }
      });
      const KeyboardEvents4 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let closure_4 = KeyboardEvents4.addListener("keyboardDidHide", () => {
        const result = keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerKeyboardDidHide();
        if (store2.get()) {
          let c0 = false;
          const result1 = store.set(false);
        }
      });
      return () => {
        closure_1.remove();
        store.remove();
        store2.remove();
        closure_4.remove();
      };
    }
  }, items);
  const obj4 = appEntryKey(keyboardOpenOrOpening[7]);
  obj = {};
  const fn = function b(height) {
    appEntryKey(keyboardOpenOrOpening[7]).runOnJS(keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerWorkletEvent)("onStart", height.height);
    if (!outer1_4) {
      let value = height.height > 0;
      if (value) {
        value = keyboardOverlapsCurrentAppEntry.get();
      }
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  obj = { runOnJS: appEntryKey(keyboardOpenOrOpening[7]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(keyboardOpenOrOpening[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: isMetaQuest, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn.__closure = obj;
  fn.__workletHash = 11726427166555;
  fn.__initData = closure_5;
  obj.onStart = fn;
  const fn2 = function y(height) {
    appEntryKey(keyboardOpenOrOpening[7]).runOnJS(keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerWorkletEvent)("onEnd", height.height);
    if (!outer1_4) {
      let value = height.height > 0;
      if (value) {
        value = keyboardOverlapsCurrentAppEntry.get();
      }
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  obj1 = { runOnJS: appEntryKey(keyboardOpenOrOpening[7]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(keyboardOpenOrOpening[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: isMetaQuest, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn2.__closure = obj1;
  fn2.__workletHash = 15110866363831;
  fn2.__initData = closure_6;
  obj.onEnd = fn2;
  appEntryKey(keyboardOpenOrOpening[6]).useKeyboardHandler(obj, []);
  return { keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry };
};
export const IS_SYSTEM_KEYBOARD_EXTERNAL = isMetaQuest;
