// Module ID: 9539
// Function ID: 74297
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9539 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = null;
let closure_6 = null;
let tmp2 = (Store) => {
  class NativeMenuStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = NativeMenuStore(this, NativeMenuStore);
      items1 = [...items];
      obj = closure_3(NativeMenuStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.getMenu = () => closure_5;
      tmp2Result.isOpen = () => null != closure_5;
      tmp2Result.getKey = () => closure_6;
      return tmp2Result;
    }
  }
  let closure_0 = NativeMenuStore;
  callback2(NativeMenuStore, Store);
  const items = [
    {
      key: "initialize",
      value() {

      }
    }
  ];
  return callback(NativeMenuStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "NativeMenuStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  SHOW_NATIVE_MENU: function handleShowNativeMenu(arg0) {
    ({ menu: closure_5, key: closure_6 } = arg0);
  },
  HIDE_NATIVE_MENU: function handleHideNativeMenu(key) {
    if (null != key.key) {
      if (key !== closure_6) {
        return false;
      }
    }
    let closure_5 = null;
    closure_6 = null;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/native_menu/native/NativeMenuStore.tsx");

export default tmp2;
