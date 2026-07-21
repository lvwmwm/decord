// Module ID: 6955
// Function ID: 55572
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6955 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function init() {
  let closure_10 = arg1(dependencyMap[9]).isStaffEnv(currentUser.getCurrentUser());
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const ExperimentBuckets = arg1(dependencyMap[7]).ExperimentBuckets;
const Environments = arg1(dependencyMap[8]).Environments;
let tmp2 = "production" === Environments.DEVELOPMENT;
if (!tmp2) {
  const _window = window;
  tmp2 = window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING;
}
let tmp3 = (Store) => {
  class DeveloperExperimentStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, DeveloperExperimentStore);
      items1 = [...items];
      obj = closure_5(DeveloperExperimentStore);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.isDeveloper = false;
      return tmp2Result;
    }
  }
  const arg1 = DeveloperExperimentStore;
  callback2(DeveloperExperimentStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const DeveloperExperimentStore = this;
      this.waitFor(closure_8, closure_7);
      Object.defineProperties(this, {
        isDeveloper: {
          configurable: false,
          get() {
            return closure_10;
          },
          set() {

          }
        }
      });
      callback4();
      const timerId = setTimeout(() => Object.freeze(self));
    }
  };
  const items = [obj, ];
  obj = {
    key: "getExperimentDescriptor",
    value() {
      let tmp = null;
      if (closure_10) {
        const obj = { bucket: TREATMENT_1.TREATMENT_1 };
        tmp = obj;
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(DeveloperExperimentStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp3.displayName = "DeveloperExperimentStore";
tmp3 = new tmp3(importDefault(dependencyMap[11]), { CONNECTION_OPEN: init, OVERLAY_INITIALIZE: init, CURRENT_USER_UPDATE: init });
const result = arg1(dependencyMap[12]).fileFinishedImporting("stores/DeveloperExperimentStore.tsx");

export default tmp3;
