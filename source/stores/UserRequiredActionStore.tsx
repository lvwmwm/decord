// Module ID: 1342
// Function ID: 15808
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1342 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleRequiredAction(requiredAction) {
  requiredAction = requiredAction.requiredAction;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = null;
let tmp2 = (Store) => {
  class UserRequiredActionStore {
    constructor() {
      self = this;
      tmp = UserRequiredActionStore(this, UserRequiredActionStore);
      obj = closure_3(UserRequiredActionStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = UserRequiredActionStore;
  callback2(UserRequiredActionStore, Store);
  let obj = {
    key: "hasAction",
    value() {
      return null != closure_5;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getAction",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  return callback(UserRequiredActionStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "UserRequiredActionStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), { CONNECTION_OPEN: handleRequiredAction, USER_REQUIRED_ACTION_UPDATE: handleRequiredAction });
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/UserRequiredActionStore.tsx");

export default tmp2;
