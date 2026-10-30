// Module ID: 17062
// Function ID: 17063
// Name: useVideoExternallyPaused
// Dependencies: [5254, 9854, 5193, 14632, 504, 5955, 1376, 2]
// Exports: useVideoExternallyPaused

// Module 17062 (useVideoExternallyPaused)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5193 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import ContextMenuState from "ContextMenuState" /* 9854 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14632 */;
import ActionSheetStore from "ActionSheetStore" /* 5254 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export function useVideoExternallyPaused(id, arg1) {
  let key;
  const obj = ContextMenuState;
  const activeContextMenu = obj.useActiveContextMenu();
  const obj2 = NavigationRouteUtils;
  const openModalKey = obj2.useOpenModalKey();
  const obj3 = VideoQuestUtils;
  const videoQuestModalKey = obj3.getVideoQuestModalKey(id);
  const items = [ActionSheetStore];
  const obj4 = get_initialized;
  const stateFromStores = obj4.useStateFromStores(items, () => key.getKey());
  const obj5 = useAlertStore;
  const tmp5 = obj5.useAlertStore((alerts) => alerts.alerts).length > 0;
  const obj6 = PlatformUtils;
  const tmp6 = obj6.isIOS() && arg1 || null != stateFromStores || null != activeContextMenu || openModalKey !== videoQuestModalKey || tmp5;
  return tmp6;
}
