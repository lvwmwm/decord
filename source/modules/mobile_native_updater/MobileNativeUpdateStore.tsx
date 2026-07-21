// Module ID: 13204
// Function ID: 100063
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13204 (_isNativeReflectConstruct)
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
({ UPDATE_CONFIG: closure_8, UPDATE_CHECK_INTERVAL: closure_9 } = arg1(dependencyMap[5]));
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult("MobileNativeUpdateStore");
let closure_11 = {};
let closure_12 = null;
let tmp5 = (Store) => {
  class MobileNativeUpdateStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, MobileNativeUpdateStore);
      items1 = [...items];
      obj = closure_6(MobileNativeUpdateStore);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.hasUpdatesConfigured = null !== closure_8;
      return tmp2Result;
    }
  }
  const arg1 = MobileNativeUpdateStore;
  callback2(MobileNativeUpdateStore, Store);
  let obj = {
    key: "checkForNewerBuild",
    value() {
      if (true !== checking.checking) {
        let obj = callback(closure_2[7]);
        obj = { type: "MOBILE_NATIVE_UPDATE_CHECK_STARTED" };
        obj.dispatch(obj);
        const obj3 = MobileNativeUpdateStore(closure_2[8]);
        MobileNativeUpdateStore(closure_2[8]).checkForNewerBuild().then((newBuild) => {
          let obj = callback(closure_2[7]);
          obj = { type: "MOBILE_NATIVE_UPDATE_CHECK_FINISHED", newBuild };
          obj.dispatch(obj);
        }, () => {
          callback(closure_2[7]).dispatch({ type: "MOBILE_NATIVE_UPDATE_CHECK_FAILED" });
        });
        const checkForNewerBuildResult = MobileNativeUpdateStore(closure_2[8]).checkForNewerBuild();
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "ensureInitialized",
    value() {
      const MobileNativeUpdateStore = this;
      if (this.hasUpdatesConfigured) {
        if (null === interval) {
          function backgroundUpdateCheck() {
            closure_10.info("Checking for new native builds in the background");
            self.checkForNewerBuild();
          }
          const _setInterval = setInterval;
          const interval = setInterval(backgroundUpdateCheck, closure_9.asMilliseconds());
          const _setTimeout = setTimeout;
          const timerId = setTimeout(backgroundUpdateCheck, 1000);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "latestFetchedBuild",
    value() {
      this.ensureInitialized();
      return closure_11;
    }
  };
  items[2] = obj;
  return callback(MobileNativeUpdateStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp5.displayName = "MobileNativeUpdateStore";
tmp5 = new tmp5(importDefault(dependencyMap[7]), {
  MOBILE_NATIVE_UPDATE_CHECK_STARTED: function handleCheckStarted() {
    const obj = {};
    const merged = Object.assign(closure_11);
    obj["checking"] = true;
    closure_11 = obj;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FAILED: function handleCheckFailed() {
    const obj = {};
    const merged = Object.assign(closure_11);
    obj["checking"] = false;
    closure_11 = obj;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function handleCheckFinished(newBuild) {
    const obj = { lastCheck: new Date(), checking: false, newBuild: newBuild.newBuild };
    let closure_11 = obj;
  }
});
const obj = {
  MOBILE_NATIVE_UPDATE_CHECK_STARTED: function handleCheckStarted() {
    const obj = {};
    const merged = Object.assign(closure_11);
    obj["checking"] = true;
    closure_11 = obj;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FAILED: function handleCheckFailed() {
    const obj = {};
    const merged = Object.assign(closure_11);
    obj["checking"] = false;
    closure_11 = obj;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function handleCheckFinished(newBuild) {
    const obj = { lastCheck: new Date(), checking: false, newBuild: newBuild.newBuild };
    let closure_11 = obj;
  }
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateStore.tsx");

export default tmp5;
