// Module ID: 14181
// Function ID: 14182
// Name: useVideoExternallyPaused
// Dependencies: [3882, 9300, 4040, 10500, 589, 4530, 500, 2]
// Exports: useVideoExternallyPaused

// Module 14181 (useVideoExternallyPaused)
import setContent from "setContent";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require(9300) /* updateContextMenuState */.useActiveContextMenu();
  const obj = require(9300) /* updateContextMenuState */;
  const openModalKey = require(4040) /* navigationToRootTabHelper */.useOpenModalKey();
  const obj2 = require(4040) /* navigationToRootTabHelper */;
  const videoQuestModalKey = require(10500) /* getVideoQuestWatchCtaText */.getVideoQuestModalKey(id);
  const obj3 = require(10500) /* getVideoQuestWatchCtaText */;
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
