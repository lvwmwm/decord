// Module ID: 19326
// Function ID: 19327
// Name: CacheManager
// Dependencies: [6275, 8149, 3, 1088, 7364, 8236, 16870, 1378, 1091, 2]

// Module 19326 (CacheManager)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1088 */;
import ConstantsIOS from "ConstantsIOS" /* 1091 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import KvCacheVersionDefault from "KvCacheVersion" /* 8236 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6275 */;
import CacheStore from "CacheStore" /* 8149 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7364 */;
import size from "module_2" /* 2 */;

let tmp;
const CacheActionCreators = tmp(16870);
const hasOwnProperty = new LoggerDefault("CacheStore");
const tmp2 = new LoggerDefault("CacheStore");
let closure_6 = 15 * DurationsDefault.Millis.MINUTE;
class CacheManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN: applyArgumentsResult.handleConnectionOpen,
      CONNECTION_CLOSED: applyArgumentsResult.handleConnectionClose,
      APP_STATE_UPDATE(arg0) {
        return applyArgumentsResult.handleAppStateUpdate(arg0);
      },
      WINDOW_FOCUS(arg0) {
        return applyArgumentsResult.handleWindowFocus(arg0);
      }
    };
    return applyArgumentsResult;
  }
  handleConnectionOpen() {
    let obj = KvCacheVersionDefault;
    const result = obj.doesDatabaseVersionMatchJsConstants();
    result.then((result) => {
      const tmp = result;
      if (!tmp) {
        const obj = CacheActionCreators;
        obj.writeCaches();
      }
    });
  }
  handleConnectionClose() {
    return false;
  }
  handleAppStateUpdate(state) {
    state = state.state;
    const obj = PlatformUtils;
    const isAndroidResult = obj.isAndroid();
    const AppStates = ConstantsIOS.AppStates;
    let isConnectedResult = (isAndroidResult ? AppStates.BACKGROUND : AppStates.INACTIVE) === state;
    if (isConnectedResult) {
      isConnectedResult = GatewayConnectionStore.isConnected();
    }
    if (isConnectedResult) {
      const tmpResult = CacheActionCreators;
      tmpResult.writeCaches();
    }
    return false;
  }
  handleWindowFocus(focused) {
    if (!focused.focused) {
      const _Date = Date;
      if (Date.now() - CacheStore.lastWriteTime > closure_6) {
        closure_5.verbose("Writing cache from window unfocus");
        const obj = CacheActionCreators;
        obj.writeCaches();
      } else {
        closure_5.verbose("Not writing cache from window unfocus");
      }
    }
    return false;
  }
}
const prototype = CacheManager.prototype;
const cacheManager = new CacheManager();
let result = size.fileFinishedImporting("modules/cache/CacheManager.native.tsx");

export default cacheManager;
