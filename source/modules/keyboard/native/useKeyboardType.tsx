// Module ID: 3996
// Function ID: 33130
// Name: getKeyboardContextForType
// Dependencies: [31, 1453, 1454, 3991, 1555, 2]
// Exports: default, getKeyboardTypePrevious, useKeyboardContextForType, useKeyboardTypePrevious, useKeyboardTypeSharedValue, useKeyboardWillOpenSharedValue

// Module 3996 (getKeyboardContextForType)
import result from "result";

const require = arg1;
function getKeyboardContextForType(SYSTEM, appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1453) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1454).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[SYSTEM];
}
function getKeyboardType(appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1453) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1454).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType;
}
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/keyboard/native/useKeyboardType.tsx");

export default function useKeyboardType() {
  _require = _require(1453).useAppEntryKey();
  return importDefault(1454)((arg0) => arg0.byAppEntry[closure_0].keyboardType);
};
export { getKeyboardContextForType };
export const useKeyboardContextForType = function useKeyboardContextForType(SYSTEM) {
  const _require = SYSTEM;
  const importDefault = _require(1453).useAppEntryKey();
  return importDefault(1454)((arg0) => arg0.byAppEntry[closure_1].keyboardContexts[closure_0]);
};
export { getKeyboardType };
export const getKeyboardTypePrevious = function getKeyboardTypePrevious() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = require(1453) /* context */.DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(1454).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardTypePrevious;
};
export const useKeyboardTypePrevious = function useKeyboardTypePrevious() {
  _require = _require(1453).useAppEntryKey();
  return importDefault(1454)((arg0) => arg0.byAppEntry[closure_0].keyboardTypePrevious);
};
export const useKeyboardTypeSharedValue = function useKeyboardTypeSharedValue() {
  appEntryKey = appEntryKey(1453).useAppEntryKey();
  const obj = appEntryKey(1453);
  const sharedValue = appEntryKey(3991).useSharedValue(getKeyboardType(appEntryKey));
  const items = [appEntryKey, sharedValue];
  const effect = React.useEffect(() => appEntryKey(outer1_2[2]).addKeyboardTypeChangedListener((type) => {
    let tmp = null != arg1;
    if (tmp) {
      tmp = arg1 !== outer1_0;
    }
    if (!tmp) {
      const result = outer1_1.set(type.type);
    }
  }), items);
  return sharedValue;
};
export const useKeyboardWillOpenSharedValue = function useKeyboardWillOpenSharedValue() {
  appEntryKey = appEntryKey(1453).useAppEntryKey();
  const obj = appEntryKey(1453);
  const sharedValue = appEntryKey(3991).useSharedValue(true === getKeyboardContextForType(appEntryKey(1555).KeyboardTypes.SYSTEM, appEntryKey).keyboardWillOpen);
  const items = [appEntryKey, sharedValue];
  const effect = React.useEffect(() => appEntryKey(outer1_2[2]).addKeyboardWillOpenChangedListener((arg0, arg1) => {
    let tmp = null != arg1;
    if (tmp) {
      tmp = arg1 !== outer1_0;
    }
    if (!tmp) {
      const result = outer1_1.set(arg0);
    }
  }), items);
  return sharedValue;
};
