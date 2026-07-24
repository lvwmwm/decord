// Module ID: 14103
// Function ID: 108405
// Name: useVideoExternallyPaused
// Dependencies: [3823, 9339, 3981, 10503, 566, 4472, 477, 2]
// Exports: useVideoExternallyPaused

// Module 14103 (useVideoExternallyPaused)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require(9339) /* updateContextMenuState */.useActiveContextMenu();
  const obj = require(9339) /* updateContextMenuState */;
  const openModalKey = require(3981) /* _createForOfIteratorHelperLoose */.useOpenModalKey();
  const obj2 = require(3981) /* _createForOfIteratorHelperLoose */;
  const obj3 = require(10503) /* sendVideoProgress */;
  const tmp3 = openModalKey !== require(10503) /* sendVideoProgress */.getVideoQuestModalKey(id);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getKey());
  const obj4 = require(566) /* initialize */;
  const obj5 = require(4472) /* useAlertStore */;
  const tmp5 = require(4472) /* useAlertStore */.useAlertStore((alerts) => alerts.alerts).length > 0;
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
