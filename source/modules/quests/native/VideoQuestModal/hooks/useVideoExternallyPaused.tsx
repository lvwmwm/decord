// Module ID: 14310
// Function ID: 14311
// Name: useVideoExternallyPaused
// Dependencies: [3977, 8522, 4135, 10504, 589, 4625, 500, 2]
// Exports: useVideoExternallyPaused

// Module 14310 (useVideoExternallyPaused)
import setContent from "setContent";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require(8522) /* updateContextMenuState */.useActiveContextMenu();
  const obj = require(8522) /* updateContextMenuState */;
  const openModalKey = require(4135) /* navigationToRootTabHelper */.useOpenModalKey();
  const obj2 = require(4135) /* navigationToRootTabHelper */;
  const videoQuestModalKey = require(10504) /* getVideoQuestWatchCtaText */.getVideoQuestModalKey(id);
  const obj3 = require(10504) /* getVideoQuestWatchCtaText */;
  const items = [setContent];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => key.getKey());
  const obj4 = require(589) /* initialize */;
  const obj5 = require(4625) /* useAlertStore */;
  const tmp5 = require(4625) /* useAlertStore */.useAlertStore((alerts) => alerts.alerts).length > 0;
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
