// Module ID: 10385
// Function ID: 80061
// Name: isKeyboardOverlappingAppEntry
// Dependencies: []
// Exports: default

// Module 10385 (isKeyboardOverlappingAppEntry)
function isKeyboardOverlappingAppEntry(appEntryKey) {
  const arg1 = appEntryKey;
  let tmp = !arg1(dependencyMap[2]).isAndroid();
  if (!tmp) {
    let tmp4 = importDefault(dependencyMap[3]).getImeInsets(false, appEntryKey) > 0;
    if (!tmp4) {
      const APP_ENTRY_KEYS = arg1(dependencyMap[4]).APP_ENTRY_KEYS;
      tmp4 = !APP_ENTRY_KEYS.some((arg0) => {
        let tmp = arg0 !== arg0;
        if (tmp) {
          tmp = callback(closure_2[3]).getImeInsets(false, arg0) > 0;
          const obj = callback(closure_2[3]);
        }
        return tmp;
      }) && null;
      const tmp7 = !APP_ENTRY_KEYS.some((arg0) => {
        let tmp = arg0 !== arg0;
        if (tmp) {
          tmp = callback(closure_2[3]).getImeInsets(false, arg0) > 0;
          const obj = callback(closure_2[3]);
        }
        return tmp;
      }) && null;
    }
    tmp = tmp4;
    const obj2 = importDefault(dependencyMap[3]);
  }
  return tmp;
}
let closure_3 = importAll(dependencyMap[0]);
const isMetaQuestResult = arg1(dependencyMap[1]).isMetaQuest();
let closure_5 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}" };
let closure_6 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}" };
const obj = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx");

export default function useSafeAreaBottomKeyboardInfoController() {
  let obj = arg1(dependencyMap[5]);
  const appEntryKey = obj.useAppEntryKey();
  const arg1 = appEntryKey;
  let num = 0;
  if (!isMetaQuestResult) {
    const KeyboardController = arg1(dependencyMap[6]).KeyboardController;
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
  let obj1 = arg1(dependencyMap[7]);
  const keyboardOpenedHeight = obj1.useSharedValue(num4);
  const importDefault = keyboardOpenedHeight;
  const keyboardOpenOrOpening = arg1(dependencyMap[7]).useSharedValue(tmp7);
  const dependencyMap = keyboardOpenOrOpening;
  const obj3 = arg1(dependencyMap[7]);
  const keyboardOverlapsCurrentAppEntry = arg1(dependencyMap[7]).useSharedValue(tmp7);
  const React = keyboardOverlapsCurrentAppEntry;
  const items = [appEntryKey, keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry];
  const effect = React.useEffect(() => {
    function handleKeyboardShow(height) {
      if (height > 0) {
        const tmp3 = callback(closure_0);
        if (null != tmp3) {
          const result = store2.set(tmp3);
        }
        if (false !== tmp3) {
          if (true === tmp3) {
            const result1 = store.set(true);
            const result2 = lib.set(height);
          }
        } else {
          const result3 = store.set(false);
        }
      }
    }
    if (!closure_4) {
      const appEntryKey = false;
      const KeyboardEvents = appEntryKey(closure_2[6]).KeyboardEvents;
      let closure_1 = KeyboardEvents.addListener("keyboardWillShow", (height) => {
        const result = lib(closure_2[8]).keyboardControllerKeyboardWillShow(height.height);
        let closure_0 = true;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents2 = appEntryKey(closure_2[6]).KeyboardEvents;
      closure_2 = KeyboardEvents2.addListener("keyboardDidShow", (height) => {
        const result = lib(closure_2[8]).keyboardControllerKeyboardDidShow(height.height);
        let closure_0 = false;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents3 = appEntryKey(closure_2[6]).KeyboardEvents;
      let closure_3 = KeyboardEvents3.addListener("keyboardWillHide", () => {
        const result = lib(store[8]).keyboardControllerKeyboardWillHide();
        if (store2.get()) {
          if (!closure_0) {
            const result1 = store.set(false);
          }
        }
      });
      const KeyboardEvents4 = appEntryKey(closure_2[6]).KeyboardEvents;
      closure_4 = KeyboardEvents4.addListener("keyboardDidHide", () => {
        const result = lib(store[8]).keyboardControllerKeyboardDidHide();
        if (store2.get()) {
          let closure_0 = false;
          const result1 = store.set(false);
        }
      });
      return () => {
        lib.remove();
        store.remove();
        store2.remove();
        closure_4.remove();
      };
    }
  }, items);
  const obj4 = arg1(dependencyMap[7]);
  obj = {};
  const fn = function b(height) {
    appEntryKey(keyboardOpenOrOpening[7]).runOnJS(keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerWorkletEvent)("onStart", height.height);
    if (!closure_4) {
      let value = height.height > 0;
      if (value) {
        value = keyboardOverlapsCurrentAppEntry.get();
      }
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  obj = { runOnJS: arg1(dependencyMap[7]).runOnJS, KeyboardStateDebugging: importDefault(dependencyMap[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: isMetaQuestResult, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn.__closure = obj;
  fn.__workletHash = 11726427166555;
  fn.__initData = closure_5;
  obj.onStart = fn;
  const fn2 = function y(height) {
    appEntryKey(keyboardOpenOrOpening[7]).runOnJS(keyboardOpenedHeight(keyboardOpenOrOpening[8]).keyboardControllerWorkletEvent)("onEnd", height.height);
    if (!closure_4) {
      let value = height.height > 0;
      if (value) {
        value = keyboardOverlapsCurrentAppEntry.get();
      }
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  obj1 = { runOnJS: arg1(dependencyMap[7]).runOnJS, KeyboardStateDebugging: importDefault(dependencyMap[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: isMetaQuestResult, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn2.__closure = obj1;
  fn2.__workletHash = 15110866363831;
  fn2.__initData = closure_6;
  obj.onEnd = fn2;
  arg1(dependencyMap[6]).useKeyboardHandler(obj, []);
  return { keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry };
};
export const IS_SYSTEM_KEYBOARD_EXTERNAL = isMetaQuestResult;
