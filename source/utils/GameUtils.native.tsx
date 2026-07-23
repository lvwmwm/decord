// Module ID: 8598
// Function ID: 68279
// Name: set
// Dependencies: [2]

// Module 8598 (set)
const result = require("set").fileFinishedImporting("utils/GameUtils.native.tsx");

export default {
  waitSubscribed() {
    return Promise.resolve();
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
    const error = new Error("not supported");
    return Promise.reject(error);
  },
  launchDispatchApplication() {
    const error = new Error("not supported");
    return Promise.reject(error);
  },
  removeShortcuts() {
    return Promise.resolve(false);
  },
  createShortcuts() {
    return Promise.resolve(false);
  },
  launchGame() {
    const error = new Error("not supported");
    return Promise.reject(error);
  },
  isProtocolRegistered(XBOX_GAME_PASS_PROTOCOL) {
    return Promise.resolve(false);
  },
  setRecentGames() {

  }
};
