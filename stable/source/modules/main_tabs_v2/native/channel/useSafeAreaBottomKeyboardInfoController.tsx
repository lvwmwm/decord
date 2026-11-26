// Module ID: 12014
// Function ID: 12015
// Name: useSafeAreaBottomKeyboardInfoController
// Dependencies: [19, 1627, 1380, 1642, 1643, 1499, 1644, 1655, 2019, 1708, 2]
// Exports: default

// Module 12014 (useSafeAreaBottomKeyboardInfoController)
import KeyboardStateDebuggingDefault from "KeyboardStateDebugging" /* 2019 */;
import react from "react" /* 19 */;
import MetaQuestUtils_mod from "MetaQuestUtils" /* 1627 */;
import size from "module_2" /* 2 */;

let MetaQuestUtils = MetaQuestUtils_mod;
MetaQuestUtils = MetaQuestUtils.isMetaQuest();
let closure_5 = { code: "(function useSafeAreaBottomKeyboardInfoControllerTsx1(e){let[scheduleOnRN,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight]=this.__closure;scheduleOnRN(KeyboardStateDebugging.keyboardControllerWorkletEvent,'onStart',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}})" };
let closure_6 = { code: "(function useSafeAreaBottomKeyboardInfoControllerTsx2(e){let[scheduleOnRN,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight]=this.__closure;scheduleOnRN(KeyboardStateDebugging.keyboardControllerWorkletEvent,'onEnd',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx");

export default function useSafeAreaBottomKeyboardInfoController() {
  let appEntryKey;
  let keyboardOpenOrOpening;
  let keyboardOpenedHeight;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let useSafeAreaBottomKeyboardInfoControllerTsx1;
  let useSafeAreaBottomKeyboardInfoControllerTsx2;
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
  const items1 = [closure_5, , , , , ];
  const useKeyboardHandler = tmp(tmp2[6]).useKeyboardHandler;
  items1[1] = tmp(tmp2[9]).scheduleOnRN;
  items1[2] = keyboardOpenedHeight(tmp2[8]);
  items1[3] = tmp4;
  items1[4] = keyboardOverlapsCurrentAppEntry;
  items1[5] = keyboardOpenedHeight;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items1;
  let obj2 = { onStart: useSafeAreaBottomKeyboardInfoControllerTsx1, onEnd: useSafeAreaBottomKeyboardInfoControllerTsx2 };
  useSafeAreaBottomKeyboardInfoControllerTsx1 = function useSafeAreaBottomKeyboardInfoControllerTsx1(height) {
    _undefined(_undefined2.keyboardControllerWorkletEvent, "onStart", height.height);
    const tmp2 = c2;
    if (!tmp2) {
      const value = height.height > 0 && _undefined3.get();
      if (value) {
        const result = _undefined4.set(height.height);
      }
    }
  };
  const items2 = [tmp21, tmp22, tmp23, tmp24, tmp25];
  useSafeAreaBottomKeyboardInfoControllerTsx1.__closure = items2;
  useSafeAreaBottomKeyboardInfoControllerTsx1.__workletHash = 16041436337775;
  useSafeAreaBottomKeyboardInfoControllerTsx1.__initData = tmp20;
  const items3 = [closure_6, tmp(tmp2[9]).scheduleOnRN, keyboardOpenedHeight(tmp2[8]), tmp4, keyboardOverlapsCurrentAppEntry, keyboardOpenedHeight];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items3;
  useSafeAreaBottomKeyboardInfoControllerTsx2 = function useSafeAreaBottomKeyboardInfoControllerTsx2(height) {
    _undefined(_undefined2.keyboardControllerWorkletEvent, "onEnd", height.height);
    const tmp2 = c2;
    if (!tmp2) {
      const value = height.height > 0 && _undefined3.get();
      if (value) {
        const result = _undefined4.set(height.height);
      }
    }
  };
  const items4 = [tmp27, tmp28, tmp29, tmp30, tmp31];
  useSafeAreaBottomKeyboardInfoControllerTsx2.__closure = items4;
  useSafeAreaBottomKeyboardInfoControllerTsx2.__workletHash = 7470195563171;
  useSafeAreaBottomKeyboardInfoControllerTsx2.__initData = tmp26;
  useKeyboardHandler(obj2, []);
  return { keyboardOpenOrOpening, keyboardOpenedHeight, keyboardOverlapsCurrentAppEntry };
};
export const IS_SYSTEM_KEYBOARD_EXTERNAL = MetaQuestUtils;
