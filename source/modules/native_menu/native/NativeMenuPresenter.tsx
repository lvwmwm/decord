// Module ID: 15469
// Function ID: 117991
// Name: MenuContainer
// Dependencies: []
// Exports: default

// Module 15469 (MenuContainer)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
  const items = [closure_4];
  const stateFromStoresObject = arg1(dependencyMap[2]).useStateFromStoresObject(items, () => ({ key: store.getKey(), menu: store.getMenu() }), []);
  const arg1 = key;
  const menu = stateFromStoresObject.menu;
  const items1 = [stateFromStoresObject.key];
  const callback = React.useCallback(() => {
    if (null != key) {
      callback(closure_2[3]).hideNativeMenu(key);
      const obj = callback(closure_2[3]);
    }
    return null != key;
  }, items1);
  importDefault(dependencyMap[4])(callback);
  let tmp4 = null;
  if (null != stateFromStoresObject.key) {
    tmp4 = null;
    if (null != menu) {
      tmp4 = menu;
    }
  }
  return tmp4;
};
