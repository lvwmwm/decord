// Module ID: 19957
// Function ID: 19958
// Name: FramePanelUtils
// Dependencies: [6934, 6935, 5813, 504, 2]
// Exports: isFramePanelFullscreen, useIsActivityPanelFullscreen

// Module 19957 (FramePanelUtils)
import get_initialized from "get initialized" /* 504 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5813 */;
import FramesConstants from "FramesConstants" /* 6935 */;
import FramesStore from "FramesStore" /* 6934 */;
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
