// Module ID: 14159
// Function ID: 108710
// Name: useVideoExternallyPaused
// Dependencies: [3858, 9276, 4016, 10476, 566, 4507, 477, 2]
// Exports: useVideoExternallyPaused

// Module 14159 (useVideoExternallyPaused)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require(9276) /* updateContextMenuState */.useActiveContextMenu();
  const obj = require(9276) /* updateContextMenuState */;
  const openModalKey = require(4016) /* _createForOfIteratorHelperLoose */.useOpenModalKey();
  const obj2 = require(4016) /* _createForOfIteratorHelperLoose */;
  const obj3 = require(10476) /* sendVideoProgress */;
  const tmp3 = openModalKey !== require(10476) /* sendVideoProgress */.getVideoQuestModalKey(id);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getKey());
  const obj4 = require(566) /* initialize */;
  const obj5 = require(4507) /* useAlertStore */;
  const tmp5 = require(4507) /* useAlertStore */.useAlertStore((alerts) => alerts.alerts).length > 0;
  let tmp6 = require(477) /* set */.isIOS() && arg1;
  if (!tmp6) {
    tmp6 = null != stateFromStores;
  }
  if (!tmp6) {
    tmp6 = null != activeContextMenu;
  }
  if (!tmp6) {
    tmp6 = tmp3;
  }
  if (!tmp6) {
    tmp6 = tmp5;
  }
  return tmp6;
};
