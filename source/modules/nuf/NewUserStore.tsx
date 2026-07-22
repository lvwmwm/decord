// Module ID: 7457
// Function ID: 59898
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7457 (_isNativeReflectConstruct)
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
let tmp2 = (PersistedStore) => {
  class NewUserStore {
    constructor() {
      self = this;
      tmp = NewUserStore(this, NewUserStore);
      obj = closure_3(NewUserStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = NewUserStore;
  callback2(NewUserStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(type) {
      type = undefined;
      if (null != type) {
        type = type.type;
      }
      let tmp2 = null;
      if (null != type) {
        tmp2 = type;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getType",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { type: closure_5 };
    }
  };
  items[2] = obj;
  return callback(NewUserStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "NewUserStore";
tmp2.persistKey = "nuf";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  NUF_NEW_USER: function handleNewUser(newUserType) {
    newUserType = newUserType.newUserType;
    tmp2.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    let closure_5 = null;
    tmp2.persist();
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/nuf/NewUserStore.tsx");

export default tmp2;
