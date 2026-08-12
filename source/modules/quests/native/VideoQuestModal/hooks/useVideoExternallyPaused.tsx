// Module ID: 14464
// Function ID: 14465
// Name: useVideoExternallyPaused
// Dependencies: [4054, 8644, 4199, 10644, 589, 4684, 500, 2]
// Exports: useVideoExternallyPaused

// Module 14464 (useVideoExternallyPaused)
import setContent from "setContent";

const require = arg1;
const result = require("coerceMainRoute").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require(8644) /* updateContextMenuState */.useActiveContextMenu();
  const obj = require(8644) /* updateContextMenuState */;
  const openModalKey = require(4199) /* coerceMainRoute */.useOpenModalKey();
  const obj2 = require(4199) /* coerceMainRoute */;
  const videoQuestModalKey = require(10644) /* getVideoQuestWatchCtaText */.getVideoQuestModalKey(id);
  const obj3 = require(10644) /* getVideoQuestWatchCtaText */;
  const items = [setContent];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => key.getKey());
  const obj4 = require(589) /* initialize */;
  const obj5 = require(4684) /* useAlertStore */;
  const tmp5 = require(4684) /* useAlertStore */.useAlertStore((alerts) => alerts.alerts).length > 0;
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
