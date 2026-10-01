// Module ID: 10164
// Function ID: 10165
// Name: useGiftOptionsSyncDebounce
// Dependencies: [19, 5910, 12, 2]
// Exports: default

// Module 10164 (useGiftOptionsSyncDebounce)
import _modDef12 from "module_12" /* 12 */;
import reactDefault from "react" /* 5910 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let react = react_mod;
const result = size.fileFinishedImporting("modules/payments/native/hooks/useGiftOptionsSyncDebounce.tsx");

export default function useGiftOptionsSyncDebounce(arg0) {
  let closure_0;
  let closure_1;
  let ref;
  importDefault = arg0;
  dependencyMap = react.useRef(null);
  react = react.useRef(null);
  const ref2 = react.useRef([]);
  const tmp = reactDefault(() => {
    const obj = _modDef12;
    return obj.debounce(() => {
      closure_1_2.current = ref.current;
      closure_1_0((arg0) => arg0 + 1);
    }, 500);
  });
  let closure_4 = tmp;
  const resolveSyncs = react.useCallback((arg0) => {
    const current = ref2.current;
    ref2.current = [];
    for (const item10008 of current) {
      let item10008Result = item10008(arg0);
      continue;
    }
  }, []);
  const items = [tmp, resolveSyncs];
  const effect = react.useEffect(() => () => {
    closure_1_4.cancel();
    resolveSyncs(false);
  }, items);
  const items1 = [tmp];
  const items2 = [tmp];
  const callback1 = react.useCallback((current) => {
    closure_1.current = current;
    let flag = ref.current !== current;
    if (flag) {
      closure_4();
      flag = true;
    }
    return flag;
  }, items1);
  const callback2 = react.useCallback((current) => {
    closure_4.cancel();
    ref.current = current;
  }, items2);
  const callback3 = react.useCallback(() => {
    const promise = new Promise((arg0) => {
      const current = ref.current;
      return current.push(arg0);
    });
    return promise;
  }, []);
  let obj = { waitForPause: callback1, flush: callback2, waitForSync: callback3, resolveSyncs, isAwaitingSync: react.useCallback(() => ref2.current.length > 0, []) };
  return obj;
};
