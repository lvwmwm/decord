// Module ID: 14407
// Function ID: 14408
// Name: useVideoExternallyPaused
// Dependencies: [4013, 8605, 4158, 10592, 589, 4644, 500, 2]
// Exports: useVideoExternallyPaused

// Module 14407 (useVideoExternallyPaused)
import setContent from "setContent";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require(8605) /* updateContextMenuState */.useActiveContextMenu();
  const obj = require(8605) /* updateContextMenuState */;
  const openModalKey = require(4158) /* navigationToRootTabHelper */.useOpenModalKey();
  const obj2 = require(4158) /* navigationToRootTabHelper */;
  const videoQuestModalKey = require(10592) /* getVideoQuestWatchCtaText */.getVideoQuestModalKey(id);
  const obj3 = require(10592) /* getVideoQuestWatchCtaText */;
  const items = [setContent];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => key.getKey());
  const obj4 = require(589) /* initialize */;
  const obj5 = require(4644) /* useAlertStore */;
  const tmp5 = require(4644) /* useAlertStore */.useAlertStore((alerts) => alerts.alerts).length > 0;
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
