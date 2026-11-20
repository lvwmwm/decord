// Module ID: 19100
// Function ID: 19101
// Name: useIsDockCoveredByActivity
// Dependencies: [6504, 5420, 6505, 19049, 504, 2]
// Exports: default

// Module 19100 (useIsDockCoveredByActivity)
import get_initialized from "get initialized" /* 504 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5420 */;
import FramesConstants from "FramesConstants" /* 6505 */;
import ActivityPanelUtils from "ActivityPanelUtils" /* 19049 */;
import FramesStore from "FramesStore" /* 6504 */;
import size from "module_2" /* 2 */;

let mainFrame;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useIsDockCoveredByActivity.tsx");

export default function useIsDockCoveredByActivity() {
  const obj = ActivityPanelUtils;
  let isActivityPanelFullscreen = obj.useIsActivityPanelFullscreen();
  const items = [FramesStore];
  const obj2 = get_initialized;
  if (!isActivityPanelFullscreen) {
    isActivityPanelFullscreen = obj2.useStateFromStores(items, () => {
      mainFrame = mainFrame.getMainFrame();
      const tmp2 = isLaunched(mainFrame) && mainFrame.data.activityPanelMode === constants.PANEL;
      return tmp2;
    });
  }
  return isActivityPanelFullscreen;
};
