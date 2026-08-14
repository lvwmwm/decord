// Module ID: 14477
// Function ID: 14478
// Name: useVideoExternallyPaused
// Dependencies: [4054, 8662, 4197, 10576, 589, 4707, 500, 2]
// Exports: useVideoExternallyPaused

// Module 14477 (useVideoExternallyPaused)
import setContent from "setContent";

const require = arg1;
const result = require("coerceMainRoute").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require(8662) /* updateContextMenuState */.useActiveContextMenu();
  const obj = require(8662) /* updateContextMenuState */;
  const openModalKey = require(4197) /* coerceMainRoute */.useOpenModalKey();
  const obj2 = require(4197) /* coerceMainRoute */;
  const videoQuestModalKey = require(10576) /* getVideoQuestWatchCtaText */.getVideoQuestModalKey(id);
  const obj3 = require(10576) /* getVideoQuestWatchCtaText */;
  const items = [setContent];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => key.getKey());
  const obj4 = require(589) /* initialize */;
  const obj5 = require(4707) /* useAlertStore */;
  const tmp5 = require(4707) /* useAlertStore */.useAlertStore((alerts) => alerts.alerts).length > 0;
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
