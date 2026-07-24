// Module ID: 13380
// Function ID: 102601
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4112, 3, 686, 12965, 566, 2]

// Module 13380 (_isNativeReflectConstruct)
import timestamp from "timestamp";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import currentUpdateConfig from "currentUpdateConfig";
import importDefaultResult from "_getPrototypeOf";

let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ UPDATE_CONFIG: closure_8, UPDATE_CHECK_INTERVAL: closure_9 } = currentUpdateConfig);
importDefaultResult = new importDefaultResult("MobileNativeUpdateStore");
let closure_11 = { lastCheck: null, checking: false, newBuild: null };
let c12 = null;
let tmp5 = ((Store) => {
  class MobileNativeUpdateStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, MobileNativeUpdateStore);
      items1 = [...items];
      obj = outer1_6(MobileNativeUpdateStore);
      tmp2 = outer1_5;
      if (outer1_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.hasUpdatesConfigured = null !== outer1_8;
      return tmp2Result;
    }
  }
  callback2(MobileNativeUpdateStore, Store);
  let obj = {
    key: "checkForNewerBuild",
    value() {
      if (true !== outer1_11.checking) {
        let obj = outer1_1(outer1_2[7]);
        obj = { type: "MOBILE_NATIVE_UPDATE_CHECK_STARTED" };
        obj.dispatch(obj);
        const obj3 = MobileNativeUpdateStore(outer1_2[8]);
        MobileNativeUpdateStore(outer1_2[8]).checkForNewerBuild().then((newBuild) => {
          let obj = outer2_1(outer2_2[7]);
          obj = { type: "MOBILE_NATIVE_UPDATE_CHECK_FINISHED", newBuild };
          obj.dispatch(obj);
        }, () => {
          outer2_1(outer2_2[7]).dispatch({ type: "MOBILE_NATIVE_UPDATE_CHECK_FAILED" });
        });
        const checkForNewerBuildResult = MobileNativeUpdateStore(outer1_2[8]).checkForNewerBuild();
      }
    }
  };
  let items = [obj, , ];
  obj = {
    key: "ensureInitialized",
    value() {
      const self = this;
      if (this.hasUpdatesConfigured) {
        if (null === outer1_12) {
          function backgroundUpdateCheck() {
            outer2_10.info("Checking for new native builds in the background");
            self.checkForNewerBuild();
          }
          const _setInterval = setInterval;
          outer1_12 = setInterval(backgroundUpdateCheck, outer1_9.asMilliseconds());
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
      return outer1_11;
    }
  };
  items[2] = obj;
  return callback(MobileNativeUpdateStore, items);
})(require("initialize").Store);
tmp5.displayName = "MobileNativeUpdateStore";
tmp5 = new tmp5(require("dispatcher"), {
  MOBILE_NATIVE_UPDATE_CHECK_STARTED: function handleCheckStarted() {
    const obj = {};
    const merged = Object.assign(obj);
    obj["checking"] = true;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FAILED: function handleCheckFailed() {
    const obj = {};
    const merged = Object.assign(obj);
    obj["checking"] = false;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function handleCheckFinished(newBuild) {
    const obj = { lastCheck: new Date(), checking: false, newBuild: newBuild.newBuild };
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateStore.tsx");

export default tmp5;
