// Module ID: 19378
// Function ID: 19379
// Name: NativeMenuPresenter
// Dependencies: [10323, 504, 2]
// Exports: default

// Module 19378 (NativeMenuPresenter)
import get_initialized from "get initialized" /* 504 */;
import NativeMenuStore from "NativeMenuStore" /* 10323 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
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
};
