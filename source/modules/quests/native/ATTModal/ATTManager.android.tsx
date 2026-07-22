// Module ID: 15873
// Function ID: 121478
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15873 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let tmp2 = (arg0) => {
  class ATTManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, ATTManager);
      items1 = [...items];
      obj = closure_6(ATTManager);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._openATTPrePromptOrFlowTimeoutId = null;
      tmp2Result.actions = { POST_CONNECTION_OPEN: tmp2Result.onPostConnectionOpen };
      return tmp2Result;
    }
  }
  const arg1 = ATTManager;
  callback2(ATTManager, arg0);
  let obj = {
    key: "onPostConnectionOpen",
    value() {
      const adUser = ATTManager(closure_2[5]).fetchAdUser("post_connection_open");
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      const self = this;
      if (null != this._openATTPrePromptOrFlowTimeoutId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._openATTPrePromptOrFlowTimeoutId);
        self._openATTPrePromptOrFlowTimeoutId = null;
      }
    }
  };
  items[1] = obj;
  return callback(ATTManager, items);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/native/ATTModal/ATTManager.android.tsx");

export default tmp2;
