// Module ID: 3994
// Function ID: 33117
// Name: getKeyboardContextForType
// Dependencies: []
// Exports: default, getKeyboardTypePrevious, useKeyboardContextForType, useKeyboardTypePrevious, useKeyboardTypeSharedValue, useKeyboardWillOpenSharedValue

// Module 3994 (getKeyboardContextForType)
function getKeyboardContextForType(SYSTEM, appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = appEntryKey(dependencyMap[1]).DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(dependencyMap[2]).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardContexts[SYSTEM];
}
function getKeyboardType(appEntryKey) {
  let DEFAULT_APP_ENTRY_KEY = appEntryKey;
  if (appEntryKey === undefined) {
    DEFAULT_APP_ENTRY_KEY = arg1(dependencyMap[1]).DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(dependencyMap[2]).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardType;
}
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/keyboard/native/useKeyboardType.tsx");

export default function useKeyboardType() {
  const callback = callback(dependencyMap[1]).useAppEntryKey();
  return importDefault(dependencyMap[2])((arg0) => arg0.byAppEntry[closure_0].keyboardType);
};
export { getKeyboardContextForType };
export const useKeyboardContextForType = function useKeyboardContextForType(SYSTEM) {
  const arg1 = SYSTEM;
  const importDefault = arg1(dependencyMap[1]).useAppEntryKey();
  return importDefault(dependencyMap[2])((arg0) => arg0.byAppEntry[closure_1].keyboardContexts[closure_0]);
};
export { getKeyboardType };
export const getKeyboardTypePrevious = function getKeyboardTypePrevious() {
  let DEFAULT_APP_ENTRY_KEY = arg0;
  if (arg0 === undefined) {
    DEFAULT_APP_ENTRY_KEY = arg1(dependencyMap[1]).DEFAULT_APP_ENTRY_KEY;
  }
  return importDefault(dependencyMap[2]).getState().byAppEntry[DEFAULT_APP_ENTRY_KEY].keyboardTypePrevious;
};
export const useKeyboardTypePrevious = function useKeyboardTypePrevious() {
  const callback = callback(dependencyMap[1]).useAppEntryKey();
  return importDefault(dependencyMap[2])((arg0) => arg0.byAppEntry[closure_0].keyboardTypePrevious);
};
export const useKeyboardTypeSharedValue = function useKeyboardTypeSharedValue() {
  const appEntryKey = arg1(dependencyMap[1]).useAppEntryKey();
  const arg1 = appEntryKey;
  const obj = arg1(dependencyMap[1]);
  const sharedValue = arg1(dependencyMap[3]).useSharedValue(getKeyboardType(appEntryKey));
  const importDefault = sharedValue;
  const items = [appEntryKey, sharedValue];
  const effect = React.useEffect(() => appEntryKey(closure_2[2]).addKeyboardTypeChangedListener((type) => {
    let tmp = null != arg1;
    if (tmp) {
      tmp = arg1 !== closure_0;
    }
    if (!tmp) {
      const result = closure_1.set(type.type);
    }
  }), items);
  return sharedValue;
};
export const useKeyboardWillOpenSharedValue = function useKeyboardWillOpenSharedValue() {
  const appEntryKey = arg1(dependencyMap[1]).useAppEntryKey();
  const arg1 = appEntryKey;
  const obj = arg1(dependencyMap[1]);
  const sharedValue = arg1(dependencyMap[3]).useSharedValue(true === getKeyboardContextForType(arg1(dependencyMap[4]).KeyboardTypes.SYSTEM, appEntryKey).keyboardWillOpen);
  const importDefault = sharedValue;
  const items = [appEntryKey, sharedValue];
  const effect = React.useEffect(() => appEntryKey(closure_2[2]).addKeyboardWillOpenChangedListener((arg0, arg1) => {
    let tmp = null != arg1;
    if (tmp) {
      tmp = arg1 !== closure_0;
    }
    if (!tmp) {
      const result = closure_1.set(arg0);
    }
  }), items);
  return sharedValue;
};
