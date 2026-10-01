// Module ID: 8925
// Function ID: 8926
// Name: useStableSafeAreaInsets
// Dependencies: [32, 19, 1482, 1364, 1625, 1613, 8926, 2]
// Exports: default, getStableSafeAreaInsets

// Module 8925 (useStableSafeAreaInsets)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1482 */;
import react_nativeDefault from "react-native" /* 1625 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 8926 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const useSafeAreaInsets = tmp3(1613);
const result = size.fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default function useStableSafeAreaInsets() {
  let appEntryKey;
  let closure_1;
  let first;
  let obj = appEntryKey(1482);
  appEntryKey = obj.useAppEntryKey();
  [first, closure_1] = react.useState(() => {
    let stableSafeAreaInsets;
    let DEFAULT_APP_ENTRY_KEY = appEntryKey;
    if (appEntryKey === undefined) {
      DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
    }
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const obj3 = react_nativeDefault;
      stableSafeAreaInsets = obj3.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    } else {
      const tmp3Result = useSafeAreaInsets;
      stableSafeAreaInsets = tmp3Result.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    }
    return stableSafeAreaInsets;
  });
  const items = [appEntryKey];
  const effect = react.useEffect(() => subscribeToSafeAreaInsetsDefault(() => {
    let stableSafeAreaInsets;
    let DEFAULT_APP_ENTRY_KEY = closure_1_0;
    const tmp = closure_1_1;
    if (closure_1_0 === undefined) {
      DEFAULT_APP_ENTRY_KEY = appEntryKey(dependencyMap[2]).DEFAULT_APP_ENTRY_KEY;
    }
    const obj = appEntryKey(dependencyMap[3]);
    const tmp4 = appEntryKey;
    if (obj.isAndroid()) {
      const obj3 = closure_1(dependencyMap[4]);
      stableSafeAreaInsets = obj3.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    } else {
      const tmp4Result = tmp4(dependencyMap[5]);
      stableSafeAreaInsets = tmp4Result.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    }
    tmp(stableSafeAreaInsets);
  }, appEntryKey), items);
  return first;
};
export const getStableSafeAreaInsets = function getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  let stableSafeAreaInsets;
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj3 = react_nativeDefault;
    stableSafeAreaInsets = obj3.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
  } else {
    const tmp3Result = useSafeAreaInsets;
    stableSafeAreaInsets = tmp3Result.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
  }
  return stableSafeAreaInsets;
};
