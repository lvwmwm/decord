// Module ID: 15426
// Function ID: 15427
// Name: useVideoExternallyPaused
// Dependencies: [4479, 8207, 4645, 11796, 504, 5142, 1364, 2]
// Exports: useVideoExternallyPaused

// Module 15426 (useVideoExternallyPaused)
import initialize from "initialize" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4645 */;
import useAlertStore from "useAlertStore" /* 5142 */;
import ContextMenuState from "ContextMenuState" /* 8207 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11796 */;
import ActionSheetStore from "ActionSheetStore" /* 4479 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = ContextMenuState.useActiveContextMenu();
  const openModalKey = NavigationRouteUtils.useOpenModalKey();
  const videoQuestModalKey = VideoQuestUtils.getVideoQuestModalKey(id);
  const items = [ActionSheetStore];
  const stateFromStores = initialize.useStateFromStores(items, () => key.getKey());
  const tmp5 = useAlertStore.useAlertStore((alerts) => alerts.alerts).length > 0;
  let tmp6 = PlatformUtils.isIOS() && arg1;
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
