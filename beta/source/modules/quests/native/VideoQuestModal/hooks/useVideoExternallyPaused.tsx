// Module ID: 17489
// Function ID: 17490
// Name: useVideoExternallyPaused
// Dependencies: [5407, 10030, 5346, 14949, 504, 6124, 1377, 2]
// Exports: useVideoExternallyPaused

// Module 17489 (useVideoExternallyPaused)
import get_initialized from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5346 */;
import useAlertStore from "useAlertStore" /* 6124 */;
import ContextMenuState from "ContextMenuState" /* 10030 */;
import VideoQuestUtils from "VideoQuestUtils" /* 14949 */;
import ActionSheetStore from "ActionSheetStore" /* 5407 */;
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
