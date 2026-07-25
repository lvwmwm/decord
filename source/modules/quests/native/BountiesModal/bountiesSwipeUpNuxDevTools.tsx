// Module ID: 13974
// Function ID: 106933
// Name: FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY
// Dependencies: [10666, 2]
// Exports: useForceBountiesSwipeUpNux

// Module 13974 (FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY)
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return require(10666) /* useLocalStorageState */.useLocalStorageState("devtools-force-bounties-swipe-up-nux", false);
};
