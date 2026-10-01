// Module ID: 17199
// Function ID: 17200
// Name: NativeOnDemandResourceManager
// Dependencies: [1993, 1980, 1074, 6539, 17200, 9104, 2]

// Module 17199 (NativeOnDemandResourceManager)
import Constants from "Constants" /* 1074 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import react_nativeDefault from "react-native" /* 17200 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
import size from "module_2" /* 2 */;

let importDefault;

const AppStates = Constants.AppStates;
class NativeOnDemandResourceManager extends AutomaticLifecycleManager {
  constructor() {
    let state;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    importDefault = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return importDefault.handlePostConnectionOpen();
      },
      APP_STATE_UPDATE() {
        return importDefault.handleAppStateUpdate();
      }
    };
    applyArgumentsResult.isPastConnectionOpen = false;
    applyArgumentsResult.hasFetchedKrisp = false;
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      importDefault.isPastConnectionOpen = true;
      importDefault.maybeLoadKrisp();
    };
    applyArgumentsResult.handleAppStateUpdate = function handleAppStateUpdate() {
      importDefault.maybeLoadKrisp();
    };
    applyArgumentsResult.maybeLoadKrisp = function maybeLoadKrisp() {
      let mode;
      let tmp = mode;
      if (mode.isPastConnectionOpen) {
        if (state.getState() === constants.ACTIVE) {
          const obj3 = react_nativeDefault;
          let hasOnDemandResourceResult;
          if (obj3 != null) {
            hasOnDemandResourceResult = obj3.hasOnDemandResource("krisp");
          }
          if (!hasOnDemandResourceResult) {
            if (!tmp.hasFetchedKrisp) {
              tmp.hasFetchedKrisp = true;
              mode = MediaEngineStore.getMode();
              const autoThreshold = MediaEngineStore.getModeOptions().autoThreshold;
              const tmp9Result = AudioActionCreatorsDefault;
              tmp9Result.setMode(mode, { autoThreshold: false });
              const tmp9Result2 = react_nativeDefault;
              if (tmp9Result2 != null) {
                const onDemandResource = tmp9Result2.fetchOnDemandResource("krisp");
                if (onDemandResource != null) {
                  onDemandResource.then((result) => {
                    const obj = react_nativeDefault;
                    if (obj != null) {
                      result = obj.isOnDemandResourcingAvailable();
                    }
                    const tmp4 = result;
                    if (!tmp4) {
                      if (result) {
                        importDefault.hasFetchedKrisp = false;
                      }
                    }
                    const obj2 = { autoThreshold };
                    const tmpResult = AudioActionCreatorsDefault;
                    tmpResult.setMode(mode, obj2);
                  });
                }
              }
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
const nativeOnDemandResourceManager = new NativeOnDemandResourceManager();
let result = size.fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx");

export default nativeOnDemandResourceManager;
