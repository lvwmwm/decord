// Module ID: 20317
// Function ID: 20318
// Name: NativeOnDemandResourceManager
// Dependencies: [5, 2133, 2120, 1072, 7882, 20318, 510, 6225, 2]

// Module 20317 (NativeOnDemandResourceManager)
import Storage3 from "Storage" /* 510 */;
import Constants from "Constants" /* 1072 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6225 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import AppStateStore from "AppStateStore" /* 2120 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;
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
          const obj7 = { value, done: true };
          return obj7;
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
              const obj8 = { value, done: true };
              return obj8;
            } else {
              tmp4 = undefined;
              result1 = undefined;
              if (applyArgumentsResult.isPastConnectionOpen) {
                const obj2 = tmp(c2[5]);
                let hasOnDemandResourceResult;
                if (obj2 != null) {
                  hasOnDemandResourceResult = obj2.hasOnDemandResource("krisp");
                }
                if (hasOnDemandResourceResult) {
                  applyArgumentsResult.restoreAutoThreshold();
                } else if (!applyArgumentsResult.hasFetchedKrisp) {
                  const obj4 = modeOptions;
                  if (modeOptions.getModeOptions().autoThreshold) {
                    const Storage = tmp4(c2[6]).Storage;
                    const result = Storage.set(constants2.RESTORE_AUTO_THRESHOLD_KEY, true);
                    const obj5 = tmp(c2[7]);
                    obj5.setMode(obj4.getMode(), { autoThreshold: false });
                  }
                  if (state.getState() === constants.ACTIVE) {
                    applyArgumentsResult.hasFetchedKrisp = true;
                    const obj6 = tmp(c2[5]);
                    let onDemandResource;
                    if (obj6 != null) {
                      onDemandResource = obj6.fetchOnDemandResource("krisp");
                    }
                    c2 = 1;
                    c3 = 1;
                    const obj9 = { value: onDemandResource, done: false };
                    return obj9;
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
            const obj10 = tmp(c2[5]);
            if (obj10 != null) {
              result1 = obj10.isOnDemandResourcingAvailable();
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
        } catch (tmp32) {
          c3 = 3;
          throw tmp32;
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
let result = size.fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.native.tsx");

export default nativeOnDemandResourceManager;
