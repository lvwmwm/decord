// Module ID: 14273
// Function ID: 14274
// Name: useVideoExternallyPaused
// Dependencies: [3948, 8381, 4106, 10473, 589, 4595, 500, 2]
// Exports: useVideoExternallyPaused

// Module 14273 (useVideoExternallyPaused)
import setContent from "setContent";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require(8381) /* updateContextMenuState */.useActiveContextMenu();
  const obj = require(8381) /* updateContextMenuState */;
  const openModalKey = require(4106) /* navigationToRootTabHelper */.useOpenModalKey();
  const obj2 = require(4106) /* navigationToRootTabHelper */;
  const videoQuestModalKey = require(10473) /* getVideoQuestWatchCtaText */.getVideoQuestModalKey(id);
  const obj3 = require(10473) /* getVideoQuestWatchCtaText */;
  const items = [setContent];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => key.getKey());
  const obj4 = require(589) /* initialize */;
  const obj5 = require(4595) /* useAlertStore */;
  const tmp5 = require(4595) /* useAlertStore */.useAlertStore((alerts) => alerts.alerts).length > 0;
  let tmp6 = require(500) /* set */.isIOS() && arg1;
  if (!tmp6) {
    tmp6 = null != stateFromStores;
  }
  if (!tmp6) {
    tmp6 = null != activeContextMenu;
  }
  if (!tmp6) {
    tmp6 = openModalKey !== videoQuestModalKey;
  }
  if (!tmp6) {
    tmp6 = tmp5;
  }
  return tmp6;
};
