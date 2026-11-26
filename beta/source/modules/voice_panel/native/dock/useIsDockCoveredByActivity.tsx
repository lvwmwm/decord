// Module ID: 19242
// Function ID: 19243
// Name: useIsDockCoveredByActivity
// Dependencies: [6623, 5539, 6624, 19191, 504, 2]
// Exports: default

// Module 19242 (useIsDockCoveredByActivity)
import get_initialized from "get initialized" /* 504 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5539 */;
import FramesConstants from "FramesConstants" /* 6624 */;
import ActivityPanelUtils from "ActivityPanelUtils" /* 19191 */;
import FramesStore from "FramesStore" /* 6623 */;
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
