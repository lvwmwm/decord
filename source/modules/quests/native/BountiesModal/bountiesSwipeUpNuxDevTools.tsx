// Module ID: 13789
// Function ID: 104271
// Name: FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY
// Dependencies: [0, 0]
// Exports: useForceBountiesSwipeUpNux

// Module 13789 (FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY)
const result = require("__exportStarResult1").fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return require(dependencyMap[0]).useLocalStorageState("devtools-force-bounties-swipe-up-nux", false);
};
