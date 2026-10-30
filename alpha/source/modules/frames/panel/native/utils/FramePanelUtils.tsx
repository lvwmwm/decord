// Module ID: 19452
// Function ID: 19453
// Name: FramePanelUtils
// Dependencies: [6840, 6841, 5652, 504, 2]
// Exports: isFramePanelFullscreen, useIsActivityPanelFullscreen

// Module 19452 (FramePanelUtils)
import get_initialized from "get initialized" /* 504 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import FramesStore from "FramesStore" /* 6840 */;
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
