// Module ID: 10897
// Function ID: 10898
// Name: useSafeAreaBottomKeyboardInfoController
// Dependencies: [19, 1610, 1364, 1625, 1626, 1482, 1627, 4566, 1875, 2]
// Exports: default

// Module 10897 (useSafeAreaBottomKeyboardInfoController)
import KeyboardStateDebuggingDefault from "KeyboardStateDebugging" /* 1875 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import MetaQuestUtils_mod from "MetaQuestUtils" /* 1610 */;
import size from "module_2" /* 2 */;

let MetaQuestUtils = MetaQuestUtils_mod;
MetaQuestUtils = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}" };
const __initData2 = { code: "function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx");

export default function useSafeAreaBottomKeyboardInfoController() {
  let appEntryKey;
  let fn;
  let fn2;
  let keyboardOpenOrOpening;
  let keyboardOpenedHeight;
  let tmp = appEntryKey;
  let tmp2 = keyboardOpenOrOpening;
  let obj = appEntryKey(keyboardOpenOrOpening[5]);
  appEntryKey = obj.useAppEntryKey();
  const tmp4 = MetaQuestUtils;
  let num = 0;
  if (!MetaQuestUtils) {
    const KeyboardController = tmp(tmp2[6]).KeyboardController;
    const stateResult = KeyboardController.state();
    let num2;
    if (stateResult != null) {
      num2 = stateResult.height;
    }
    if (num2 == null) {
      num2 = 0;
    }
    num = num2;
  }
  let tmp7 = 0 !== num;
  if (tmp7) {
    const tmpResult = tmp(tmp2[2]);
    let isAndroidResult = tmpResult.isAndroid();
    let tmp9 = !isAndroidResult;
    if (isAndroidResult) {
      let flag = false;
      const obj3 = keyboardOpenedHeight(tmp2[3]);
      let tmp11 = obj3.getImeInsets(false, appEntryKey) > 0;
      if (!tmp11) {
        let APP_ENTRY_KEYS = tmp(tmp2[4]).APP_ENTRY_KEYS;
        tmp11 = !APP_ENTRY_KEYS.some((item) => {
          let tmp = item !== closure_0;
          if (tmp) {
            const obj = closure_2_1(closure_2_2[3]);
            tmp = obj.getImeInsets(false, item) > 0;
          }
          return tmp;
        }) && null;
        const tmp13 = !APP_ENTRY_KEYS.some((item) => {
          let tmp = item !== closure_0;
          if (tmp) {
            const obj = closure_2_1(closure_2_2[3]);
            tmp = obj.getImeInsets(false, item) > 0;
          }
          return tmp;
        }) && null;
      }
      tmp9 = tmp11;
    }
    tmp7 = true === tmp9;
  }
  let num3 = 0;
  if (tmp7) {
    num3 = num;
  }
  const tmpResult5 = tmp(tmp2[7]);
  keyboardOpenedHeight = tmpResult5.useSharedValue(num3);
  const tmpResult6 = tmp(tmp2[7]);
  keyboardOpenOrOpening = tmpResult6.useSharedValue(tmp7);
  const tmpResult7 = tmp(tmp2[7]);
  const keyboardOverlapsCurrentAppEntry = tmpResult7.useSharedValue(tmp7);
  const items = [appEntryKey, keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry];
  const effect = keyboardOverlapsCurrentAppEntry.useEffect(() => {
    function handleKeyboardShow(height) {
      if (height > 0) {
        let closure_0 = c0;
        const obj2 = appEntryKey(keyboardOpenOrOpening[2]);
        const isAndroidResult = obj2.isAndroid();
        let tmp5 = !isAndroidResult;
        const tmp15 = c0;
        const tmp16 = appEntryKey;
        if (isAndroidResult) {
          let tmp = keyboardOpenedHeight;
          let obj = keyboardOpenedHeight(tmp17[3]);
          let tmp2 = obj.getImeInsets(false, tmp15) > 0;
          if (!tmp2) {
            const APP_ENTRY_KEYS = tmp16(tmp17[4]).APP_ENTRY_KEYS;
            tmp2 = !APP_ENTRY_KEYS.some((item) => {
              let tmp = item !== closure_0;
              if (tmp) {
                const obj = closure_2_1(closure_2_2[3]);
                tmp = obj.getImeInsets(false, item) > 0;
              }
              return tmp;
            }) && null;
            !APP_ENTRY_KEYS.some((item) => {
              let tmp = item !== closure_0;
              if (tmp) {
                const obj = closure_2_1(closure_2_2[3]);
                tmp = obj.getImeInsets(false, item) > 0;
              }
              return tmp;
            }) && null;
          }
          tmp5 = tmp2;
        }
        if (null != tmp5) {
          const result = closure_3.set(tmp5);
        }
        if (false !== tmp5) {
          if (true === tmp5) {
            const result1 = closure_2.set(true);
            const result2 = closure_1.set(height);
          }
        } else {
          const result3 = closure_2.set(false);
        }
      }
    }
    let tmp = MetaQuestUtils;
    if (!tmp) {
      const flag = false;
      let c0 = false;
      let tmp2 = appEntryKey;
      const KeyboardEvents = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let closure_1 = KeyboardEvents.addListener("keyboardWillShow", (height) => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardWillShow(height.height);
        c0 = true;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents2 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let closure_2 = KeyboardEvents2.addListener("keyboardDidShow", (height) => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardDidShow(height.height);
        c0 = false;
        handleKeyboardShow(height.height);
      });
      const KeyboardEvents3 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let closure_3 = KeyboardEvents3.addListener("keyboardWillHide", () => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardWillHide();
        if (keyboardOverlapsCurrentAppEntry.get()) {
          const tmp2 = c0;
          if (!tmp2) {
            const result1 = keyboardOpenOrOpening.set(false);
          }
        }
      });
      const KeyboardEvents4 = appEntryKey(keyboardOpenOrOpening[6]).KeyboardEvents;
      let closure_4 = KeyboardEvents4.addListener("keyboardDidHide", () => {
        const obj = KeyboardStateDebuggingDefault;
        const result = obj.keyboardControllerKeyboardDidHide();
        if (keyboardOverlapsCurrentAppEntry.get()) {
          c0 = false;
          const result1 = keyboardOpenOrOpening.set(false);
        }
      });
      return () => {
        closure_1.remove();
        closure_2.remove();
        closure_3.remove();
        closure_4.remove();
      };
    }
  }, items);
  let obj2 = { onStart: fn, onEnd: fn2 };
  fn = function s(height) {
    const obj = ReanimatedRexport;
    obj.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)("onStart", height.height);
    const tmp2 = MetaQuestUtils;
    if (!tmp2) {
      const value = height.height > 0 && keyboardOverlapsCurrentAppEntry.get();
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  const useKeyboardHandler = tmp(tmp2[6]).useKeyboardHandler;
  fn.__closure = { runOnJS: tmp(tmp2[7]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(tmp2[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: tmp4, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn.__workletHash = 11726427166555;
  fn.__initData = __initData;
  fn2 = function l(height) {
    const obj = ReanimatedRexport;
    obj.runOnJS(KeyboardStateDebuggingDefault.keyboardControllerWorkletEvent)("onEnd", height.height);
    const tmp2 = MetaQuestUtils;
    if (!tmp2) {
      const value = height.height > 0 && keyboardOverlapsCurrentAppEntry.get();
      if (value) {
        const result = keyboardOpenedHeight.set(height.height);
      }
    }
  };
  ({ runOnJS: tmp(tmp2[7]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(tmp2[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: tmp4, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight });
  fn2.__closure = { runOnJS: tmp(tmp2[7]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(tmp2[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: tmp4, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight };
  fn2.__workletHash = 15110866363831;
  fn2.__initData = __initData2;
  ({ runOnJS: tmp(tmp2[7]).runOnJS, KeyboardStateDebugging: keyboardOpenedHeight(tmp2[8]), IS_SYSTEM_KEYBOARD_EXTERNAL: tmp4, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight });
  useKeyboardHandler(obj2, []);
  return { keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry };
};
export const IS_SYSTEM_KEYBOARD_EXTERNAL = MetaQuestUtils;
