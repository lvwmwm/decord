// Module ID: 7294
// Function ID: 7295
// Name: GameUtils
// Dependencies: [7295, 7298, 2]

// Module 7294 (GameUtils)
import waitForFrameSubscriptionDefault from "waitForFrameSubscription" /* 7295 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 7298 */;
import size from "module_2" /* 2 */;

let c2 = "not supported";
const obj = {
  waitSubscribed() {
    return Promise.resolve();
  },
  waitFrameSubscribed(frameId, ACTIVITY_JOIN) {
    const tmp = waitForFrameSubscriptionDefault;
    return tmp(NativeRPCServerDefault, frameId, ACTIVITY_JOIN);
  },
  waitParentSubscribed() {
    return Promise.resolve();
  },
  waitConnected() {
    return Promise.resolve();
  },
  waitParentConnected() {
    return Promise.resolve();
  },
  isLaunchable() {
    return Promise.resolve(false);
  },
  isGameLaunchable() {
    return Promise.resolve(false);
  },
  launch() {
    const error = new Error(c2);
    return reject(error);
  },
  launchDispatchApplication() {
    const error = new Error(c2);
    return reject(error);
  },
  removeShortcuts() {
    return Promise.resolve(false);
  },
  createShortcuts() {
    return Promise.resolve(false);
  },
  launchGame() {
    const error = new Error(c2);
    return reject(error);
  },
  isProtocolRegistered() {
    return Promise.resolve(false);
  },
  setRecentGames() {

  }
};
const result = size.fileFinishedImporting("utils/GameUtils.native.tsx");

export default obj;
