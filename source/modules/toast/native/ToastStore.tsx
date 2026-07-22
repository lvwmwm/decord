// Module ID: 15519
// Function ID: 118411
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15519 (_isNativeReflectConstruct)
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
let tmp2 = (Store) => {
  class ToastStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_1(this, ToastStore);
      items1 = [...items];
      obj = closure_3(ToastStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.getContent = () => closure_5;
      return tmp2Result;
    }
  }
  const callback = ToastStore;
  callback2(ToastStore, Store);
  return callback(ToastStore);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "ToastStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  TOAST_OPEN: function handleOpen(toastProps) {
    toastProps = toastProps.toastProps;
    let key;
    if (null != key) {
      key = key.key;
    }
    if (key === toastProps.key) {
      return false;
    } else {
      key = toastProps;
    }
  },
  TOAST_CLOSE: function handleClose() {
    let closure_5 = null;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/toast/native/ToastStore.tsx");

export default tmp2;
