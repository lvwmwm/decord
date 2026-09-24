// Module ID: 17939
// Function ID: 17940
// Name: NativeOnDemandResourceManager
// Dependencies: [1992, 1979, 1074, 7451, 17940, 9995, 2]

// Module 17939 (NativeOnDemandResourceManager)
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9995 */;
import NativeOnDemandResourceModuleDefault from "NativeOnDemandResourceModule" /* 17940 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import AppStateStore from "AppStateStore" /* 1979 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7451 */;

const AppStates = fn(1074).AppStates;
const prototype = function NativeOnDemandResourceManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  importDefault = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    },
    APP_STATE_UPDATE() {
      return applyArgumentsResult.handleAppStateUpdate();
    }
  };
  applyArgumentsResult.isPastConnectionOpen = false;
  applyArgumentsResult.hasFetchedKrisp = false;
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    applyArgumentsResult.isPastConnectionOpen = true;
    applyArgumentsResult.maybeLoadKrisp();
  };
  applyArgumentsResult.handleAppStateUpdate = function handleAppStateUpdate() {
    applyArgumentsResult.maybeLoadKrisp();
  };
  applyArgumentsResult.maybeLoadKrisp = function maybeLoadKrisp() {
    if (mode.isPastConnectionOpen) {
      if (state.getState() === constants.ACTIVE) {
        const obj3 = applyArgumentsResult(dependencyMap[4]);
        let hasOnDemandResourceResult;
        if (obj3 != null) {
          hasOnDemandResourceResult = obj3.hasOnDemandResource("krisp");
        }
        if (!hasOnDemandResourceResult) {
          if (!tmp.hasFetchedKrisp) {
            tmp.hasFetchedKrisp = true;
            mode = MediaEngineStore.getMode();
            const autoThreshold = MediaEngineStore.getModeOptions().autoThreshold;
            tmp9(tmp10[5]).setMode(mode, { autoThreshold: false });
            const tmp9Result2 = tmp9(tmp10[4]);
            if (tmp9Result2 != null) {
              const onDemandResource = tmp9Result2.fetchOnDemandResource("krisp");
              if (onDemandResource != null) {
                onDemandResource.then((result) => {
                  const obj = NativeOnDemandResourceModuleDefault;
                  if (obj != null) {
                    result = obj.isOnDemandResourcingAvailable();
                  }
                  if (!result) {
                    if (result) {
                      applyArgumentsResult.hasFetchedKrisp = false;
                    }
                  }
                  AudioActionCreatorsDefault.setMode(mode, { autoThreshold });
                });
              }
            }
            const tmp9Result = tmp9(tmp10[5]);
          }
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/native_on_demand/native/NativeOnDemandResourceManager.android.tsx");

export default prototype1;
