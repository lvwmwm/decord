// Module ID: 15422
// Function ID: 15423
// Name: useVideoExternallyPaused
// Dependencies: [4483, 558, 568, 8215, 4648, 11672, 504, 5144, 1368, 2]

// Module 15422 (useVideoExternallyPaused)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4648 */;
import useAlertStore from "useAlertStore" /* 5144 */;
import ContextMenuState from "ContextMenuState" /* 8215 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11672 */;
import ActionSheetStore from "ActionSheetStore" /* 4483 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = ReactCompilerGating.isReactCompilerEnabled() ? ((questId, arg1) => {
  const cResult = c.c(11);
  const tmp4 = null != ContextMenuState.useActiveContextMenu();
  const openModalKey = NavigationRouteUtils.useOpenModalKey();
  if (cResult[0] !== questId) {
    const videoQuestModalKey = tmp(11672).getVideoQuestModalKey(questId);
    cResult[0] = questId;
    cResult[1] = videoQuestModalKey;
    let tmp6 = videoQuestModalKey;
    const tmpResult = tmp(11672);
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActionSheetStore];
    const fn = function v() {
      return key.getKey();
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp9 = fn;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmp11 = null != initialize.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        return questId.alerts;
      }
    }
    cResult[4] = M;
    const tmp12 = M;
  } else {
    class M {
      constructor(arg0) {
        return questId.alerts;
      }
    }
  }
  const tmpResult4 = initialize;
  const tmp14 = useAlertStore.useAlertStore(tmp12).length > 0;
  if (cResult[5] === tmp11) {
    class M {
      constructor(arg0) {
        return questId.alerts;
      }
    }
  }
  const tmpResult5 = useAlertStore;
  const tmpResult6 = PlatformUtils;
  cResult[5] = tmp11;
  cResult[6] = tmp14;
  cResult[7] = tmp4;
  cResult[8] = openModalKey !== tmp6;
  cResult[9] = arg1;
  cResult[10] = PlatformUtils.isIOS() && arg1 || tmp11 || tmp4 || openModalKey !== tmp6 || tmp14;
}) : ((questId, arg1) => {
  const activeContextMenu = ContextMenuState.useActiveContextMenu();
  const openModalKey = NavigationRouteUtils.useOpenModalKey();
  const videoQuestModalKey = VideoQuestUtils.getVideoQuestModalKey(questId);
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
});
