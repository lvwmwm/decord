// Module ID: 14435
// Function ID: 14436
// Name: FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY
// Dependencies: [12583, 2]
// Exports: useForceBountiesSwipeUpNux

// Module 14435 (FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY)
import set from "set" /* 2 */;
import useLocalStorageState from "useLocalStorageState" /* 12583 */;

let c2 = "devtools-force-bounties-swipe-up-nux";
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return useLocalStorageState.useLocalStorageState(c2, false);
};
