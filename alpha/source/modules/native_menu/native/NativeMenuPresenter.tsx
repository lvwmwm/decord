// Module ID: 17401
// Function ID: 17402
// Name: NativeMenuPresenter
// Dependencies: [9645, 558, 576, 504, 2]

// Module 17401 (NativeMenuPresenter)
import react from "react" /* 576 */;
import NativeMenuStore from "NativeMenuStore" /* 9645 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function MenuContainer() {
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = react;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NativeMenuStore];
    const fn = function u() {
      const obj = { key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() };
      return obj;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5, tmp6);
  const menu = stateFromStoresObject.menu;
  let tmp9 = null;
  if (null != stateFromStoresObject.key) {
    tmp9 = null;
    if (null != menu) {
      tmp9 = menu;
    }
  }
  return tmp9;
}) : (function MenuContainer() {
  let obj = get_initialized;
  const items = [NativeMenuStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() };
    return obj;
  }, []);
  const menu = stateFromStoresObject.menu;
  let tmp2 = null;
  if (null != stateFromStoresObject.key) {
    tmp2 = null;
    if (null != menu) {
      tmp2 = menu;
    }
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default tmp2;
