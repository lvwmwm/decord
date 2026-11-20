// Module ID: 19430
// Function ID: 19431
// Name: FramePanelUtils
// Dependencies: [6504, 6505, 5420, 504, 2]
// Exports: isFramePanelFullscreen, useIsActivityPanelFullscreen

// Module 19430 (FramePanelUtils)
import get_initialized from "get initialized" /* 504 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5420 */;
import FramesConstants from "FramesConstants" /* 6505 */;
import FramesStore from "FramesStore" /* 6504 */;
import size from "module_2" /* 2 */;

const asLaunched = FramesConstants.asLaunched;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const result = size.fileFinishedImporting("modules/frames/panel/native/utils/FramePanelUtils.tsx");

export function isFramePanelFullscreen() {
  const tmp = asLaunched(FramesStore.getMainFrame());
  return null != tmp && tmp.data.activityPanelMode === ActivityPanelModes.PANEL;
}
export function useIsActivityPanelFullscreen() {
  let mainFrame;
  const items = [FramesStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    return null != tmp && tmp.data.activityPanelMode === constants.PANEL;
  });
}
