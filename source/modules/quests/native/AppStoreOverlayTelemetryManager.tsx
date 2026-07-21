// Module ID: 10462
// Function ID: 80994
// Name: _isNativeReflectConstruct
// Dependencies: [5, 4142, 10473, 10474, 2]
// Exports: clearAppStoreOverlayOpen, setAppStoreOverlayOpen

// Module 10462 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closeVoicePanels from "closeVoicePanels";
import _launchFrame from "_launchFrame";
import result2 from "result2";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
let closure_8 = null;
let closure_9 = null;
let tmp2 = (arg0) => {
  class AppStoreOverlayTelemetryManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = asyncGeneratorStep(this, AppStoreOverlayTelemetryManager);
      items1 = [...items];
      obj = _launchFrame(AppStoreOverlayTelemetryManager);
      tmp2 = closeVoicePanels;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = _launchFrame;
        constructResult = Reflect.construct(obj, items1, _launchFrame(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      AppStoreOverlayTelemetryManager = tmp2Result;
      tmp2Result.actions = {
        APP_STATE_UPDATE(arg0) {
              return tmp2Result.handleAppStateUpdate(arg0);
            }
      };
      return tmp2Result;
    }
  }
  const arg1 = AppStoreOverlayTelemetryManager;
  callback2(AppStoreOverlayTelemetryManager, arg0);
  const items = [
    {
      key: "handleAppStateUpdate",
      value(state) {
        state = state.state;
        const tmp = !AppStoreOverlayTelemetryManager(closure_1[6]).isAndroid();
        if (!tmp) {
          return tmp;
        } else {
          let flag = null != closure_8;
          if (flag) {
            if (state !== AppStoreOverlayTelemetryManager(closure_1[7]).AppStates.ACTIVE) {
              flag = false;
              if (state === AppStoreOverlayTelemetryManager(closure_1[7]).AppStates.BACKGROUND) {
                closure_8.trackOverlayEvent(constants.QUEST_APP_STORE_OVERLAY_BACKGROUNDED);
                const _Date = Date;
                let closure_9 = Date.now();
                flag = false;
              }
            }
            const _Date2 = Date;
            closure_8.trackOverlayEvent(constants.QUEST_APP_STORE_OVERLAY_RETURNED, Date.now() - closure_9);
            closure_9 = null;
            flag = false;
          }
        }
      }
    }
  ];
  return callback(AppStoreOverlayTelemetryManager, items);
}(importDefault(dependencyMap[8]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/quests/native/AppStoreOverlayTelemetryManager.tsx");

export default tmp2;
export function setAppStoreOverlayOpen(arg0) {
  let closure_8 = arg0;
}
export function clearAppStoreOverlayOpen() {
  let closure_8 = null;
  let closure_9 = null;
}
