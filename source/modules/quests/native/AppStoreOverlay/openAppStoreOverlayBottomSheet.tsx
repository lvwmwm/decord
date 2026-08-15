// Module ID: 10695
// Function ID: 10696
// Name: openAppStoreOverlayBottomSheet
// Dependencies: [676, 4342, 10696, 2007, 1231, 10690, 2]
// Exports: openAppStoreOverlayBottomSheet

// Module 10695 (openAppStoreOverlayBottomSheet)
import ME from "ME";

let c3;
let c4;
({ AnalyticEvents: c3, ComponentActions: c4 } = ME);
let result = require("AppStoreOverlayFooter").fileFinishedImporting("modules/quests/native/AppStoreOverlay/openAppStoreOverlayBottomSheet.tsx");

export const openAppStoreOverlayBottomSheet = function openAppStoreOverlayBottomSheet(appId) {
  const _require = arg1;
  appId = appId.appId;
  let obj = appId(4342);
  obj = {
    metadata: appId,
    onOpen() {
      callback(outer1_3.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, appId);
    },
    onDismiss(arg0) {
      const result = callback(outer1_2[5]).clearAppStoreOverlayOpen();
      callback(outer1_3.QUEST_APP_STORE_OVERLAY_CLOSED, appId, arg0);
      const ComponentDispatch = callback(outer1_2[4]).ComponentDispatch;
      ComponentDispatch.dispatch(outer1_4.QUEST_APP_STORE_OVERLAY_FINISHED);
    },
    onInstallPress(closure_4, arg1) {
      const result = callback(outer1_2[5]).setAppStoreOverlayOpen({
        trackOverlayEvent(arg0, arg1) {
          return callback(arg0, closure_1, arg1);
        }
      });
    }
  };
  obj.openLazy(_require(2007)(10696, dependencyMap.paths), "QuestAppStoreOverlayBottomSheet", obj);
};
