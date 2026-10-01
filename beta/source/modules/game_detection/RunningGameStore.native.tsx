// Module ID: 2000
// Function ID: 2001
// Name: RunningGameStore
// Dependencies: [2001, 2017, 6817, 13535, 504, 573, 2]
// Exports: gameKey, getRawOverlayGameStatus, isDetectionEnabled, maybeTransformSubgame, transformForGameSettings

// Module 2000 (RunningGameStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import OverlayTypes from "OverlayTypes" /* 13535 */;
import GameStore from "GameStore" /* 2001 */;
import DetectableGameStore from "DetectableGameStore" /* 2017 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 6817 */;
import size from "module_2" /* 2 */;

const Store = get_initializedDefault.Store;
class RunningGameStore extends Store {
  initialize() {

  }
  getVisibleGame() {
    return null;
  }
  getCurrentGameForAnalytics() {
    return null;
  }
  getCurrentNonGameForAnalytics() {
    return null;
  }
  getVisibleRunningGames() {
    return [];
  }
  getRunningGames() {
    return [];
  }
  getDebugRunningGame() {
    return null;
  }
  getDetectionDebug() {
    return null;
  }
  getRunningNonGames() {
    return [];
  }
  getRunningDiscordApplicationIds() {
    return [];
  }
  getRunningVerifiedApplicationIds() {
    return [];
  }
  getGameForPID() {
    return null;
  }
  getGameForName() {
    return null;
  }
  getGameOrTransformedSubgameForPID() {
    return null;
  }
  getLauncherForPID() {
    return null;
  }
  getOverlayOptionsForPID() {
    return null;
  }
  shouldElevateProcessForPID() {
    return false;
  }
  shouldContinueWithoutElevatedProcessForPID() {
    return false;
  }
  canCollectExecutableFingerprintsForRunningGames() {
    return false;
  }
  getCandidateGames() {
    return [];
  }
  isGamesSeenLoaded() {
    return true;
  }
  isGameSeen() {
    return false;
  }
  getGamesSeen() {
    return [];
  }
  getSeenGameByName() {
    return null;
  }
  isObservedAppRunning() {
    return false;
  }
  getOverlayEnabledForGame() {
    return false;
  }
  getOverrides() {
    return [];
  }
  getOverrideForGame() {
    return null;
  }
  getGameOverlayStatus() {
    return null;
  }
  getObservedAppNameForWindow() {
    return null;
  }
  isDetectionEnabled() {
    return false;
  }
  addExecutableTrackedByAnalytics() {

  }
  getSystemServiceStatus() {
    return { state: "unknown" };
  }
  isSystemServiceInitialized() {
    return false;
  }
}
Object.defineProperty(RunningGameStore.prototype, "canShowAdminWarning", {
  get: function canShowAdminWarning() {
    return false;
  },
  set: undefined
});
RunningGameStore.displayName = "RunningGameStore";
const runningGameStore = new RunningGameStore(DispatcherDefault, {});
const result = size.fileFinishedImporting("modules/game_detection/RunningGameStore.native.tsx");

export default runningGameStore;
export function gameKey() {
  return "";
}
export const getRawOverlayGameStatus = function getRawOverlayGameStatus() {
  if (arg1 === undefined) {
    const items = [DetectableGameStore, LibraryApplicationStore, GameStore];
  }
  const obj = { source: OverlayTypes.OverlayGameStatusSource.UNKNOWN, enabledOOP: false, enabledLegacy: false, overlayMethod: OverlayTypes.OverlayMethod.Disabled, reason: "Dummy implementation" };
  return obj;
};
export function isDetectionEnabled() {
  return false;
}
export function maybeTransformSubgame(arg0) {
  return arg0;
}
export const transformForGameSettings = function transformForGameSettings(arg0) {
  const obj = { played: "", overlay: false, verified: false, detectable: false };
  const merged = Object.assign(arg0);
  return obj;
};
