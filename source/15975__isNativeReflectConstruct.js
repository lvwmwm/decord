// Module ID: 15975
// Function ID: 122624
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15975 (_isNativeReflectConstruct)
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
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const AppStates = arg1(dependencyMap[7]).AppStates;
let tmp2 = (arg0) => {
  class NativeOnDemandResourceManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, NativeOnDemandResourceManager);
      items1 = [...items];
      obj = closure_5(NativeOnDemandResourceManager);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      NativeOnDemandResourceManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handlePostConnectionOpen();
            },
        APP_STATE_UPDATE() {
              return tmp2Result.handleAppStateUpdate();
            }
      };
      tmp2Result.isPastConnectionOpen = false;
      tmp2Result.hasFetchedKrisp = false;
      tmp2Result.handlePostConnectionOpen = () => {
        tmp2Result.isPastConnectionOpen = true;
        tmp2Result.maybeLoadKrisp();
      };
      tmp2Result.handleAppStateUpdate = () => {
        tmp2Result.maybeLoadKrisp();
      };
      tmp2Result.maybeLoadKrisp = () => {
        if (tmp2Result.isPastConnectionOpen) {
          if (state.getState() === constants.ACTIVE) {
            if (null == tmp2Result(autoThreshold[8])) {
              if (!tmp2Result.hasFetchedKrisp) {
                tmp2Result.hasFetchedKrisp = true;
                const mode = store.getMode();
                const autoThreshold = store.getModeOptions().autoThreshold;
                let obj = { autoThreshold: false };
                mode(autoThreshold[9]).setMode(mode, obj);
                let tmp12 = null == tmp2Result(autoThreshold[8]);
                if (!tmp12) {
                  const onDemandResource = tmp2Result(autoThreshold[8]).fetchOnDemandResource("krisp");
                  tmp12 = null == onDemandResource;
                  const obj4 = tmp2Result(autoThreshold[8]);
                  const promise = onDemandResource;
                }
                if (!tmp12) {
                  promise.then((arg0) => {
                    if (null != mode(autoThreshold[8])) {
                      let obj = mode(autoThreshold[8]);
                      const result = obj.isOnDemandResourcingAvailable();
                    }
                    if (!arg0) {
                      if (result) {
                        mode.hasFetchedKrisp = false;
                      }
                    }
                    obj = { autoThreshold };
                    mode(autoThreshold[9]).setMode(mode, obj);
                  });
                }
                const obj2 = mode(autoThreshold[9]);
              }
            } else {
              obj = tmp2Result(autoThreshold[8]);
            }
          }
        }
      };
      return tmp2Result;
    }
  }
  const importDefault = NativeOnDemandResourceManager;
  callback2(NativeOnDemandResourceManager, arg0);
  return callback(NativeOnDemandResourceManager);
}(importDefault(dependencyMap[10]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx");

export default tmp2;
