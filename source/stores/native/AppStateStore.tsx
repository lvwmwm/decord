// Module ID: 6646
// Function ID: 51060
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6646 (_isNativeReflectConstruct)
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
const AppStates = arg1(dependencyMap[6]).AppStates;
const currentState = arg1(dependencyMap[5]).AppState.currentState;
let closure_7 = null;
let tmp2 = (Store) => {
  class AppStateStore {
    constructor() {
      self = this;
      tmp = AppStateStore(this, AppStateStore);
      obj = closure_3(AppStateStore);
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
  let closure_0 = AppStateStore;
  callback2(AppStateStore, Store);
  let obj = {
    key: "getState",
    value() {
      return closure_6;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getLastActiveTime",
    value() {
      return closure_7;
    }
  };
  items[1] = obj;
  return callback(AppStateStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "AppStateStore";
arg1(dependencyMap[9])(dependencyMap[8], dependencyMap.paths).then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_app_state = closure_6;
  });
});
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (currentState === state.state) {
      return false;
    } else {
      state = state.state;
      const currentState = state;
      if (state === AppStates.ACTIVE) {
        const _Date = Date;
        let closure_7 = Date.now();
      }
    }
  }
});
const obj = {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (currentState === state.state) {
      return false;
    } else {
      state = state.state;
      const currentState = state;
      if (state === AppStates.ACTIVE) {
        const _Date = Date;
        let closure_7 = Date.now();
      }
    }
  }
};
const promise = arg1(dependencyMap[9])(dependencyMap[8], dependencyMap.paths);
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/native/AppStateStore.tsx");

export default tmp2;
