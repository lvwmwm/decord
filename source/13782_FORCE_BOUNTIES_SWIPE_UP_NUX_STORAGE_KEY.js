// Module ID: 13782
// Function ID: 104248
// Name: FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY
// Dependencies: [0, 0]
// Exports: useForceBountiesSwipeUpNux

// Module 13782 (FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY)
import result from "result";

result = result.fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return require(dependencyMap[0]).useLocalStorageState("devtools-force-bounties-swipe-up-nux", false);
};
