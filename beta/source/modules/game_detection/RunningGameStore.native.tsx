// Module ID: 2137
// Function ID: 2138
// Name: RunningGameStore
// Dependencies: [2138, 2156, 2160, 16222, 504, 11709, 572, 2]
// Exports: gameKey, getRawOverlayGameStatus, isDetectionEnabled, maybeTransformSubgame, transformForGameSettings

// Module 2137 (RunningGameStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import SocialSdkGameResolver from "SocialSdkGameResolver" /* 11709 */;
import OverlayTypes from "OverlayTypes" /* 16222 */;
import GameStore from "GameStore" /* 2138 */;
import DetectableGameStore from "DetectableGameStore" /* 2156 */;
import LibraryApplicationStore from "LibraryApplicationStore" /* 2160 */;
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
export function getRawOverlayGameStatus() {
  if (arg1 === undefined) {
    const items = [DetectableGameStore, LibraryApplicationStore, GameStore];
  }
  const obj = { source: OverlayTypes.OverlayGameStatusSource.UNKNOWN, enabledOOP: false, enabledLegacy: false, overlayMethod: OverlayTypes.OverlayMethod.Disabled, reason: "Dummy implementation" };
  return obj;
}
export function isDetectionEnabled() {
  return false;
}
export function maybeTransformSubgame(arg0) {
  return arg0;
}
export function transformForGameSettings(arg0) {
  const obj = { played: "", overlay: false, verified: false, detectable: false };
  const merged = Object.assign(arg0);
  return obj;
}
