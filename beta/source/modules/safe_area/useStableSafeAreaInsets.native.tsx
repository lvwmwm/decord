// Module ID: 9729
// Function ID: 9730
// Name: useStableSafeAreaInsets
// Dependencies: [32, 19, 1485, 1368, 1628, 1616, 558, 568, 9730, 2]
// Exports: getStableSafeAreaInsets

// Module 9729 (useStableSafeAreaInsets)
import AppEntryKeyContext from "AppEntryKeyContext" /* 1485 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1616 */;
import NativeSafeAreaInsetsModuleDefault from "NativeSafeAreaInsetsModule" /* 1628 */;
import subscribeToSafeAreaInsetsDefault from "subscribeToSafeAreaInsets" /* 9730 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
function getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY) {
  if (DEFAULT_APP_ENTRY_KEY === undefined) {
    DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
  }
  if (obj.isAndroid()) {
    let stableSafeAreaInsets = NativeSafeAreaInsetsModuleDefault.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
  } else {
    stableSafeAreaInsets = useSafeAreaInsets.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    const tmp3Result = useSafeAreaInsets;
  }
  return stableSafeAreaInsets;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/safe_area/useStableSafeAreaInsets.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = appEntryKey(568).c(5);
  const obj = appEntryKey(568);
  appEntryKey = appEntryKey(1485).useAppEntryKey();
  if (cResult[0] !== appEntryKey) {
    const fn = function n() {
      let DEFAULT_APP_ENTRY_KEY = appEntryKey;
      if (appEntryKey === undefined) {
        DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
      }
      if (obj.isAndroid()) {
        let stableSafeAreaInsets = NativeSafeAreaInsetsModuleDefault.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      } else {
        stableSafeAreaInsets = useSafeAreaInsets.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
        const tmp3Result = useSafeAreaInsets;
      }
      return stableSafeAreaInsets;
    };
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  const obj2 = appEntryKey(1485);
  let obj3 = noop;
  [tmp5, importDefault] = noop.useState(tmp3);
  if (cResult[2] !== appEntryKey) {
    const fn2 = function u() {
      return subscribeToSafeAreaInsetsDefault(() => {
        let DEFAULT_APP_ENTRY_KEY = closure_1_0;
        if (closure_1_0 === undefined) {
          DEFAULT_APP_ENTRY_KEY = appEntryKey(1485).DEFAULT_APP_ENTRY_KEY;
        }
        if (obj.isAndroid()) {
          let stableSafeAreaInsets = NativeSafeAreaInsetsModuleDefault.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
        } else {
          stableSafeAreaInsets = appEntryKey(1616).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
          const tmp4Result = appEntryKey(1616);
        }
        closure_1_1(stableSafeAreaInsets);
      }, appEntryKey);
    };
    const items = [appEntryKey];
    cResult[2] = appEntryKey;
    cResult[3] = fn2;
    cResult[4] = items;
    let tmp7 = items;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const effect = obj3.useEffect(tmp6, tmp7);
  return tmp5;
}) : (() => {
  appEntryKey = appEntryKey(1485).useAppEntryKey();
  const tmp2 = _slicedToArray(noop.useState(() => {
    let DEFAULT_APP_ENTRY_KEY = appEntryKey;
    if (appEntryKey === undefined) {
      DEFAULT_APP_ENTRY_KEY = AppEntryKeyContext.DEFAULT_APP_ENTRY_KEY;
    }
    if (obj.isAndroid()) {
      let stableSafeAreaInsets = NativeSafeAreaInsetsModuleDefault.getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
    } else {
      stableSafeAreaInsets = useSafeAreaInsets.getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const tmp3Result = useSafeAreaInsets;
    }
    return stableSafeAreaInsets;
  }), 2);
  closure_1 = tmp2[1];
  const items = [appEntryKey];
  const effect = noop.useEffect(() => subscribeToSafeAreaInsetsDefault(() => {
    let DEFAULT_APP_ENTRY_KEY = closure_1_0;
    if (closure_1_0 === undefined) {
      DEFAULT_APP_ENTRY_KEY = appEntryKey(1485).DEFAULT_APP_ENTRY_KEY;
    }
    if (obj.isAndroid()) {
      let stableSafeAreaInsets = closure_1(1628).getStableSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const obj3 = closure_1(1628);
    } else {
      stableSafeAreaInsets = appEntryKey(1616).getSafeAreaInsets(DEFAULT_APP_ENTRY_KEY);
      const tmp4Result = appEntryKey(1616);
    }
    closure_1_1(stableSafeAreaInsets);
  }, appEntryKey), items);
  return tmp2[0];
});
export { getStableSafeAreaInsets };
