// Module ID: 4146
// Function ID: 34974
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4149, 653, 4152, 664, 4159, 587, 477]
// Exports: gameKey, getRawOverlayGameStatus, isDetectionEnabled, maybeTransformSubgame, transformForGameSettings

// Module 4146 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _callSuper from "_callSuper";
import ME from "ME";
import ApplicationTypes from "ApplicationTypes";
import module_477 from "module_477";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = (Store) => {
  class RunningGameStore {
    constructor() {
      self = this;
      tmp = _classCallCheck(this, RunningGameStore);
      obj = _getPrototypeOf(RunningGameStore);
      tmp2 = _possibleConstructorReturn;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = _getPrototypeOf;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = RunningGameStore;
  callback2(RunningGameStore, Store);
  let obj = {
    key: "initialize",
    value() {

    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getVisibleGame",
    value() {
      return null;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCurrentGameForAnalytics",
    value() {
      return null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCurrentNonGameForAnalytics",
    value() {
      return null;
    }
  };
  items[4] = {
    key: "getVisibleRunningGames",
    value() {
      return [];
    }
  };
  items[5] = {
    key: "getRunningGames",
    value() {
      return [];
    }
  };
  items[6] = {
    key: "getDebugRunningGame",
    value() {
      return null;
    }
  };
  items[7] = {
    key: "getDetectionDebug",
    value() {
      return null;
    }
  };
  items[8] = {
    key: "getRunningNonGames",
    value() {
      return [];
    }
  };
  items[9] = {
    key: "getRunningDiscordApplicationIds",
    value() {
      return [];
    }
  };
  items[10] = {
    key: "getRunningVerifiedApplicationIds",
    value() {
      return [];
    }
  };
  items[11] = {
    key: "getGameForPID",
    value() {
      return null;
    }
  };
  items[12] = {
    key: "getGameForName",
    value() {
      return null;
    }
  };
  items[13] = {
    key: "getGameOrTransformedSubgameForPID",
    value() {
      return null;
    }
  };
  items[14] = {
    key: "getLauncherForPID",
    value() {
      return null;
    }
  };
  items[15] = {
    key: "getOverlayOptionsForPID",
    value() {
      return null;
    }
  };
  items[16] = {
    key: "shouldElevateProcessForPID",
    value() {
      return false;
    }
  };
  items[17] = {
    key: "shouldContinueWithoutElevatedProcessForPID",
    value() {
      return false;
    }
  };
  items[18] = {
    key: "canCollectExecutableFingerprintsForRunningGames",
    value() {
      return false;
    }
  };
  items[19] = {
    key: "getCandidateGames",
    value() {
      return [];
    }
  };
  items[20] = {
    key: "isGamesSeenLoaded",
    value() {
      return true;
    }
  };
  items[21] = {
    key: "isGameSeen",
    value() {
      return false;
    }
  };
  items[22] = {
    key: "getGamesSeen",
    value() {
      return [];
    }
  };
  items[23] = {
    key: "getSeenGameByName",
    value() {
      return null;
    }
  };
  items[24] = {
    key: "isObservedAppRunning",
    value() {
      return false;
    }
  };
  items[25] = {
    key: "getOverlayEnabledForGame",
    value() {
      return false;
    }
  };
  items[26] = {
    key: "getOverrides",
    value() {
      return [];
    }
  };
  items[27] = {
    key: "getOverrideForGame",
    value() {
      return null;
    }
  };
  items[28] = {
    key: "getGameOverlayStatus",
    value() {
      return null;
    }
  };
  items[29] = {
    key: "getObservedAppNameForWindow",
    value() {
      return null;
    }
  };
  items[30] = {
    key: "canShowAdminWarning",
    get() {
      return false;
    }
  };
  items[31] = {
    key: "isDetectionEnabled",
    value() {
      return false;
    }
  };
  items[32] = {
    key: "addExecutableTrackedByAnalytics",
    value() {

    }
  };
  items[33] = {
    key: "getSystemServiceStatus",
    value() {
      return { state: "unknown" };
    }
  };
  items[34] = {
    key: "isSystemServiceInitialized",
    value() {
      return false;
    }
  };
  return callback(RunningGameStore, items);
}(require("CachedEntriesMap").Store);
tmp2.displayName = "RunningGameStore";
tmp2 = new tmp2(require("Storage"), {});
const result = module_477.fileFinishedImporting("modules/game_detection/RunningGameStore.native.tsx");

export default tmp2;
export function gameKey() {
  return "";
}
export const getRawOverlayGameStatus = function getRawOverlayGameStatus() {
  if (arg1 === undefined) {
    const items = [ME, ApplicationTypes, _callSuper];
  }
  return { source: arg1(dependencyMap[8]).OverlayGameStatusSource.UNKNOWN, overlayMethod: arg1(dependencyMap[8]).OverlayMethod.Disabled };
};
export function isDetectionEnabled(value) {
  return false;
}
export function maybeTransformSubgame(arg0) {
  return arg0;
}
export const transformForGameSettings = function transformForGameSettings(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["played"] = "";
  obj["overlay"] = false;
  obj["verified"] = false;
  obj["detectable"] = false;
  return obj;
};
