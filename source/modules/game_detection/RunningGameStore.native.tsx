// Module ID: 4146
// Function ID: 34984
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: gameKey, getRawOverlayGameStatus, isDetectionEnabled, maybeTransformSubgame, transformForGameSettings

// Module 4146 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let tmp2 = (Store) => {
  class RunningGameStore {
    constructor() {
      self = this;
      tmp = closure_2(this, RunningGameStore);
      obj = closure_5(RunningGameStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
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
}(importDefault(dependencyMap[9]).Store);
tmp2.displayName = "RunningGameStore";
tmp2 = new tmp2(importDefault(dependencyMap[10]), {});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/game_detection/RunningGameStore.native.tsx");

export default tmp2;
export function gameKey() {
  return "";
}
export const getRawOverlayGameStatus = function getRawOverlayGameStatus() {
  if (arg1 === undefined) {
    const items = [closure_8, closure_9, closure_7];
  }
  const obj = { "Null": "<string:172032001>", "Null": "<string:1358955001>", "Null": "<string:423732022>", "Null": "<string:16778269>", "Null": "<string:33040193>", source: arg1(dependencyMap[8]).OverlayGameStatusSource.UNKNOWN, overlayMethod: arg1(dependencyMap[8]).OverlayMethod.Disabled };
  return obj;
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
