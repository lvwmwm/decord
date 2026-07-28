// Module ID: 14019
// Function ID: 107111
// Name: FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY
// Dependencies: [10705, 2]
// Exports: useForceBountiesSwipeUpNux

// Module 14019 (FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY)
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return require(10705) /* useLocalStorageState */.useLocalStorageState("devtools-force-bounties-swipe-up-nux", false);
};
