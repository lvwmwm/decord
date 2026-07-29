// Module ID: 14041
// Function ID: 14042
// Name: FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY
// Dependencies: [10729, 2]
// Exports: useForceBountiesSwipeUpNux

// Module 14041 (FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY)
let c2 = "devtools-force-bounties-swipe-up-nux";
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return require(10729) /* useLocalStorageState */.useLocalStorageState(c2, false);
};
