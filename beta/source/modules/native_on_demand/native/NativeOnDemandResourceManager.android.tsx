// Module ID: 19978
// Function ID: 19979
// Name: NativeOnDemandResourceManager
// Dependencies: [5, 2130, 2117, 1072, 7383, 19979, 510, 6079, 2]

// Module 19978 (NativeOnDemandResourceManager)
import Storage3 from "Storage" /* 510 */;
import Constants from "Constants" /* 1072 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6079 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import AppStateStore from "AppStateStore" /* 2117 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7383 */;
import size from "module_2" /* 2 */;

let c2, c3;

const AppStates = Constants.AppStates;
class NativeOnDemandResourceManager extends AutomaticLifecycleManager {
  constructor() {
    let modeOptions;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handlePostConnectionOpen();
      },
      APP_STATE_UPDATE() {
        return require.handleAppStateUpdate();
      }
    };
    applyArgumentsResult.isPastConnectionOpen = false;
    applyArgumentsResult.hasFetchedKrisp = false;
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      require.isPastConnectionOpen = true;
      require.maybeLoadKrisp();
    };
    applyArgumentsResult.handleAppStateUpdate = function handleAppStateUpdate() {
      require.maybeLoadKrisp();
    };
    applyArgumentsResult.maybeLoadKrisp = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj6 = { value, done: true };
          return obj6;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let tmp4;
          let result1;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              tmp4 = undefined;
              result1 = undefined;
              if (applyArgumentsResult.isPastConnectionOpen) {
                if (state.getState() === constants.ACTIVE) {
                  const obj10 = tmp(c2[5]);
                  let hasOnDemandResourceResult;
                  if (obj10 != null) {
                    hasOnDemandResourceResult = obj10.hasOnDemandResource("krisp");
                  }
                  if (hasOnDemandResourceResult) {
                    applyArgumentsResult.restoreAutoThreshold();
                  } else if (!applyArgumentsResult.hasFetchedKrisp) {
                    applyArgumentsResult.hasFetchedKrisp = true;
                    const obj3 = modeOptions;
                    if (modeOptions.getModeOptions().autoThreshold) {
                      const Storage = tmp4(c2[6]).Storage;
                      const result = Storage.set(constants2.RESTORE_AUTO_THRESHOLD_KEY, true);
                      const obj4 = tmp(c2[7]);
                      obj4.setMode(obj3.getMode(), { autoThreshold: false });
                    }
                    const obj5 = tmp(c2[5]);
                    let onDemandResource;
                    if (obj5 != null) {
                      onDemandResource = obj5.fetchOnDemandResource("krisp");
                    }
                    c2 = 1;
                    c3 = 1;
                    const obj8 = { value: onDemandResource, done: false };
                    return obj8;
                  }
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp4 = value;
            result1 = undefined;
            const obj9 = tmp(c2[5]);
            if (obj9 != null) {
              result1 = obj9.isOnDemandResourcingAvailable();
            }
            const tmp7 = tmp4;
            if (!tmp7) {
              const tmp8 = result1;
              if (tmp8) {
                closure_129_0.hasFetchedKrisp = false;
              }
            }
            closure_129_0.restoreAutoThreshold();
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp29) {
          c3 = 3;
          throw tmp29;
        }
      }
    });
    applyArgumentsResult.restoreAutoThreshold = function restoreAutoThreshold() {
      const Storage = Storage3.Storage;
      const tmp = require;
      const tmp3 = constants;
      if (true === Storage.get(constants.RESTORE_AUTO_THRESHOLD_KEY)) {
        const Storage2 = tmp(tmp2[6]).Storage;
        Storage2.remove(tmp3.RESTORE_AUTO_THRESHOLD_KEY);
        const obj = modeOptions;
        if (!modeOptions.getModeOptions().autoThreshold) {
          const obj2 = AudioActionCreatorsDefault;
          obj2.setMode(obj.getMode(), { autoThreshold: true });
        }
      }
    };
    return applyArgumentsResult;
  }
}
NativeOnDemandResourceManager.RESTORE_AUTO_THRESHOLD_KEY = "KrispOnDemandRestoreAutoThreshold";
const nativeOnDemandResourceManager = new NativeOnDemandResourceManager();
let result = size.fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx");

export default nativeOnDemandResourceManager;
