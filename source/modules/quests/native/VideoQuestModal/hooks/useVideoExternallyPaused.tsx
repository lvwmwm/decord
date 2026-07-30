// Module ID: 14177
// Function ID: 14178
// Name: useVideoExternallyPaused
// Dependencies: [3882, 9296, 4040, 10496, 589, 4530, 500, 2]
// Exports: useVideoExternallyPaused

// Module 14177 (useVideoExternallyPaused)
import setContent from "setContent";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require(9296) /* updateContextMenuState */.useActiveContextMenu();
  const obj = require(9296) /* updateContextMenuState */;
  const openModalKey = require(4040) /* navigationToRootTabHelper */.useOpenModalKey();
  const obj2 = require(4040) /* navigationToRootTabHelper */;
  const videoQuestModalKey = require(10496) /* getVideoQuestWatchCtaText */.getVideoQuestModalKey(id);
  const obj3 = require(10496) /* getVideoQuestWatchCtaText */;
  const items = [setContent];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => key.getKey());
  const obj4 = require(589) /* initialize */;
  const obj5 = require(4530) /* useAlertStore */;
  const tmp5 = require(4530) /* useAlertStore */.useAlertStore((alerts) => alerts.alerts).length > 0;
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
