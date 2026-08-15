// Module ID: 14509
// Function ID: 14510
// Name: useVideoExternallyPaused
// Dependencies: [4086, 9959, 4229, 10704, 589, 4657, 500, 2]
// Exports: useVideoExternallyPaused

// Module 14509 (useVideoExternallyPaused)
import setContent from "setContent";

const require = arg1;
const result = require("coerceMainRoute").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require(9959) /* updateContextMenuState */.useActiveContextMenu();
  const obj = require(9959) /* updateContextMenuState */;
  const openModalKey = require(4229) /* coerceMainRoute */.useOpenModalKey();
  const obj2 = require(4229) /* coerceMainRoute */;
  const videoQuestModalKey = require(10704) /* getVideoQuestWatchCtaText */.getVideoQuestModalKey(id);
  const obj3 = require(10704) /* getVideoQuestWatchCtaText */;
  const items = [setContent];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => key.getKey());
  const obj4 = require(589) /* initialize */;
  const obj5 = require(4657) /* useAlertStore */;
  const tmp5 = require(4657) /* useAlertStore */.useAlertStore((alerts) => alerts.alerts).length > 0;
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
