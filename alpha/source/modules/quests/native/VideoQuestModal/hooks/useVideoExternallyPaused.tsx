// Module ID: 17802
// Function ID: 17803
// Name: useVideoExternallyPaused
// Dependencies: [5547, 9161, 5486, 11293, 504, 6268, 1380, 2]
// Exports: useVideoExternallyPaused

// Module 17802 (useVideoExternallyPaused)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5486 */;
import useAlertStore from "useAlertStore" /* 6268 */;
import ContextMenuState from "ContextMenuState" /* 9161 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11293 */;
import ActionSheetStore from "ActionSheetStore" /* 5547 */;
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
