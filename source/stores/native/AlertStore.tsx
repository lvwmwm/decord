// Module ID: 9483
// Function ID: 73891
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9483 (_isNativeReflectConstruct)
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
let closure_6 = -1;
let closure_7 = null;
let tmp2 = (Store) => {
  class AlertStore {
    constructor() {
      self = this;
      tmp = AlertStore(this, AlertStore);
      obj = closure_3(AlertStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = AlertStore;
  callback2(AlertStore, Store);
  let obj = {
    key: "getAlert",
    value() {
      return closure_5;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getAlertKey",
    value() {
      return "alert-store-" + closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "isAlertDismissable",
    value() {
      return closure_7;
    }
  };
  items[2] = obj;
  return callback(AlertStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "AlertStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  ALERT_OPEN: function handleOpen(arg0) {
    closure_6 = closure_6 + 1;
    ({ alert: closure_5, isDismissable: closure_7 } = arg0);
  },
  ALERT_CLOSE: function handleClose() {
    let closure_5 = null;
    let closure_7 = null;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/native/AlertStore.tsx");

export default tmp2;
