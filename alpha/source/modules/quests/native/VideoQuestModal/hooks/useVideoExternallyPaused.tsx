// Module ID: 17455
// Function ID: 17456
// Name: useVideoExternallyPaused
// Dependencies: [5375, 9997, 5314, 14920, 504, 6092, 1377, 2]
// Exports: useVideoExternallyPaused

// Module 17455 (useVideoExternallyPaused)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5314 */;
import useAlertStore from "useAlertStore" /* 6092 */;
import ContextMenuState from "ContextMenuState" /* 9997 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14920 */;
import ActionSheetStore from "ActionSheetStore" /* 5375 */;
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
