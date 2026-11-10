// Module ID: 5209
// Function ID: 5210
// Name: useKeyboardType
// Dependencies: [19, 1494, 1495, 5095, 1623, 2]
// Exports: default, getKeyboardContextForType, getKeyboardType, getKeyboardTypePrevious, useKeyboardContextForType, useKeyboardTypePrevious, useKeyboardTypeSharedValue, useKeyboardWillOpenSharedValue

// Module 5209 (useKeyboardType)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1494 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1495 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const KeyboardUIStoreDefault = KeyboardUIStore;
let type;

let result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardType.tsx");

export default function useKeyboardType() {
  const obj = AppEntryKeyContext;
  let closure_0 = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].keyboardType);
};
export function getKeyboardContextForType(EXPRESSION) {
  let DEFAULT_APP_ENTRY_KEY = arg1;
  if (arg1 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  return obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[EXPRESSION];
}
export function useKeyboardContextForType(SYSTEM) {
  let closure_0 = SYSTEM;
  const obj = AppEntryKeyContext;
  let closure_1 = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_1].keyboardContexts[closure_0]);
}
export function getKeyboardType(appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  return obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType;
}
export function getKeyboardTypePrevious() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = KeyboardUIStoreDefault;
  return obj.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardTypePrevious;
}
export function useKeyboardTypePrevious() {
  const obj = AppEntryKeyContext;
  let closure_0 = obj.useAppEntryKey();
  return KeyboardUIStoreDefault((arg0) => arg0.byAppEntry[closure_0].keyboardTypePrevious);
}
export function useKeyboardTypeSharedValue() {
  let appEntryKey;
  let sharedValue;
  let tmp = appEntryKey;
  let obj = appEntryKey(1494);
  appEntryKey = obj.useAppEntryKey();
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  const useSharedValue = appEntryKey(5095).useSharedValue;
  appEntryKey(5095);
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1494).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = sharedValue(1495);
  sharedValue = useSharedValue(obj2.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType);
  const items = [appEntryKey, sharedValue];
  const effect = react.useEffect(() => {
    const obj = KeyboardUIStore;
    return obj.addKeyboardTypeChangedListener((type, arg1) => {
      let tmp = null != arg1;
      type = type.type;
      if (tmp) {
        tmp = arg1 !== appEntryKey;
      }
      if (!tmp) {
        const result = sharedValue.set(type);
      }
    });
  }, items);
  return sharedValue;
}
export function useKeyboardWillOpenSharedValue() {
  let appEntryKey;
  let sharedValue;
  let tmp = appEntryKey;
  let obj = appEntryKey(1494);
  appEntryKey = obj.useAppEntryKey();
  const useSharedValue = appEntryKey(5095).useSharedValue;
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  const tmp4 = appEntryKey(5095);
  const SYSTEM = appEntryKey(1623).KeyboardTypes.SYSTEM;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = tmp(1494).DEFAULT_APP_ENTRY_KEY;
  }
  const obj2 = sharedValue(1495);
  sharedValue = useSharedValue(true === obj2.getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[SYSTEM].keyboardWillOpen);
  const items = [appEntryKey, sharedValue];
  const effect = react.useEffect(() => {
    const obj = KeyboardUIStore;
    return obj.addKeyboardWillOpenChangedListener((arg0, arg1) => {
      const tmp = null != arg1 && arg1 !== appEntryKey;
      if (!tmp) {
        const result = sharedValue.set(arg0);
      }
    });
  }, items);
  return sharedValue;
}
