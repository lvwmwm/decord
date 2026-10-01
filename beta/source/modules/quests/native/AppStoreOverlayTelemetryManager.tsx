// Module ID: 10720
// Function ID: 10721
// Name: AppStoreOverlayTelemetryManager
// Dependencies: [1074, 6539, 1364, 1094, 2]
// Exports: clearAppStoreOverlayOpen, setAppStoreOverlayOpen

// Module 10720 (AppStoreOverlayTelemetryManager)
import Constants from "Constants" /* 1074 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const _false = null;
let c4 = null;
class AppStoreOverlayTelemetryManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
        return applyArgumentsResult.handleAppStateUpdate(arg0);
      }
    };
    return applyArgumentsResult;
  }
  handleAppStateUpdate(state) {
    state = state.state;
    const obj = PlatformUtils;
    let tmp4 = !obj.isAndroid();
    obj.isAndroid();
    if (tmp4) {
      let flag = null != _null;
      if (flag) {
        if (state === ConstantsIOS.AppStates.ACTIVE) {
          if (null != c4) {
            const _Date2 = Date;
            _null.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_RETURNED, Date.now() - c4);
            c4 = null;
            flag = false;
          }
        }
        flag = false;
        if (state === ConstantsIOS.AppStates.BACKGROUND) {
          _null.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_BACKGROUNDED);
          const _Date = Date;
          c4 = Date.now();
          flag = false;
        }
      }
      tmp4 = flag;
    }
    return tmp4;
  }
}
const prototype = AppStoreOverlayTelemetryManager.prototype;
const appStoreOverlayTelemetryManager = new AppStoreOverlayTelemetryManager();
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlayTelemetryManager.tsx");

export default appStoreOverlayTelemetryManager;
export function setAppStoreOverlayOpen(arg0) {
  let c3 = arg0;
}
export function clearAppStoreOverlayOpen() {
  let c3 = null;
  c4 = null;
}
