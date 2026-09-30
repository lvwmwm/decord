// Module ID: 16959
// Function ID: 16960
// Name: NativeMenuPresenter
// Dependencies: [19, 9165, 504, 10314, 5472, 2]
// Exports: default

// Module 16959 (NativeMenuPresenter)
import useBackPressHandlerDefault from "useBackPressHandler" /* 5472 */;
import NativeMenuActionCreatorsDefault from "NativeMenuActionCreators" /* 10314 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9165 */;

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
