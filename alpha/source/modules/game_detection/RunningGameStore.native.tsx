// Module ID: 2019
// Function ID: 2020
// Name: RunningGameStore
// Dependencies: [2020, 2037, 7112, 14280, 504, 10655, 584, 2]
// Exports: gameKey, getRawOverlayGameStatus, isDetectionEnabled, maybeTransformSubgame, transformForGameSettings

// Module 2019 (RunningGameStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SocialSdkGameResolver from "SocialSdkGameResolver" /* 10655 */;
import OverlayTypes from "OverlayTypes" /* 14280 */;
import GameStore from "GameStore" /* 2020 */;
import DetectableGameStore from "DetectableGameStore" /* 2037 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 7112 */;
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
  getSdkResolutionForPID() {
    const obj = { type: SocialSdkGameResolver.SdkCanonicalGameResolutionType.UNRESOLVED };
    return obj;
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
