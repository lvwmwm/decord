// Module ID: 6900
// Function ID: 6901
// Name: GameUtils
// Dependencies: [6901, 6904, 2]

// Module 6900 (GameUtils)
import waitForFrameSubscriptionDefault from "waitForFrameSubscription" /* 6901 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 6904 */;
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
