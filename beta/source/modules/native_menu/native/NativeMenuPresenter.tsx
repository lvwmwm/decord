// Module ID: 16736
// Function ID: 16737
// Name: NativeMenuPresenter
// Dependencies: [19, 8966, 504, 10113, 5276, 2]
// Exports: default

// Module 16736 (NativeMenuPresenter)
import useBackPressHandlerDefault from "useBackPressHandler" /* 5276 */;
import NativeMenuActionCreatorsDefault from "NativeMenuActionCreators" /* 10113 */;
import react from "react" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 8966 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
  let key;
  let obj = key(504);
  const items = [NativeMenuStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() };
    return obj;
  }, []);
  key = stateFromStoresObject.key;
  const menu = stateFromStoresObject.menu;
  const items1 = [key];
  const callback = react.useCallback(() => {
    if (null != key) {
      const obj = NativeMenuActionCreatorsDefault;
      obj.hideNativeMenu(tmp);
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
