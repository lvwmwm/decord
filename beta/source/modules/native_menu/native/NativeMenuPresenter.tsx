// Module ID: 17386
// Function ID: 17387
// Name: NativeMenuPresenter
// Dependencies: [19, 9805, 504, 10946, 5213, 2]
// Exports: default

// Module 17386 (NativeMenuPresenter)
import useBackPressHandlerDefault from "useBackPressHandler" /* 5213 */;
import NativeMenuActionCreatorsDefault from "NativeMenuActionCreators" /* 10946 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9805 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
  const items = [NativeMenuStore];
  const stateFromStoresObject = key(504).useStateFromStoresObject(items, () => ({ key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() }), []);
  key = stateFromStoresObject.key;
  const menu = stateFromStoresObject.menu;
  const items1 = [key];
  const callback = noop.useCallback(() => {
    if (null != key) {
      NativeMenuActionCreatorsDefault.hideNativeMenu(tmp);
    }
    return null != key;
  }, items1);
  useBackPressHandlerDefault(callback);
  let tmp4 = null;
  if (null != key) {
    tmp4 = null;
    if (null != menu) {
      tmp4 = menu;
    }
  }
  return tmp4;
};
