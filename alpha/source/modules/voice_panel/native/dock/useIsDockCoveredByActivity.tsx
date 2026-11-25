// Module ID: 19382
// Function ID: 19383
// Name: useIsDockCoveredByActivity
// Dependencies: [6905, 5638, 6906, 19331, 504, 2]
// Exports: default

// Module 19382 (useIsDockCoveredByActivity)
import get_initialized from "get initialized" /* 504 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5638 */;
import FramesConstants from "FramesConstants" /* 6906 */;
import ActivityPanelUtils from "ActivityPanelUtils" /* 19331 */;
import FramesStore from "FramesStore" /* 6905 */;
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
