// Module ID: 15705
// Function ID: 120900
// Name: MenuContainer
// Dependencies: [31, 9544, 566, 9667, 4575, 2]
// Exports: default

// Module 15705 (MenuContainer)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = key(566).useStateFromStoresObject(items, () => ({ key: outer1_4.getKey(), menu: outer1_4.getMenu() }), []);
  key = stateFromStoresObject.key;
  const menu = stateFromStoresObject.menu;
  const items1 = [key];
  const callback = React.useCallback(() => {
    if (null != key) {
      outer1_1(outer1_2[3]).hideNativeMenu(key);
      const obj = outer1_1(outer1_2[3]);
    }
    return null != key;
  }, items1);
  importDefault(4575)(callback);
  let tmp4 = null;
  if (null != key) {
    tmp4 = null;
    if (null != menu) {
      tmp4 = menu;
    }
  }
  return tmp4;
};
