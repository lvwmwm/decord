// Module ID: 16036
// Function ID: 123138
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16036 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = arg1(dependencyMap[5]).subscribeToIntlLoadingSuccess;
let tmp2 = (arg0) => {
  class SearchTokensManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, SearchTokensManager);
      items1 = [...items];
      obj = closure_5(SearchTokensManager);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { USER_SETTINGS_PROTO_UPDATE: SearchTokensManager(closure_1[6]).refreshSearchTokens, POST_CONNECTION_OPEN: SearchTokensManager(closure_1[6]).refreshSearchTokens };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = SearchTokensManager;
  callback2(SearchTokensManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      this._unsubscribeIntlLoadingStore = callback3(SearchTokensManager(closure_1[6]).refreshSearchTokens);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      const _unsubscribeIntlLoadingStore = this._unsubscribeIntlLoadingStore;
      if (null != _unsubscribeIntlLoadingStore) {
        _unsubscribeIntlLoadingStore.call(tmp);
      }
    }
  };
  items[1] = obj;
  return callback(SearchTokensManager, items);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/search/managers/SearchTokensManager.tsx");

export default tmp2;
