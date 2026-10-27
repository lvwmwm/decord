// Module ID: 18803
// Function ID: 18804
// Name: CacheManager
// Dependencies: [6497, 7586, 3, 1101, 7216, 7728, 16975, 1381, 1104, 2]

// Module 18803 (CacheManager)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1101 */;
import ConstantsIOS from "ConstantsIOS" /* 1104 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import KvCacheVersionDefault from "KvCacheVersion" /* 7728 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6497 */;
import CacheStore from "CacheStore" /* 7586 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7216 */;
import size from "module_2" /* 2 */;

let tmp;
const CacheActionCreators = tmp(16975);
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
