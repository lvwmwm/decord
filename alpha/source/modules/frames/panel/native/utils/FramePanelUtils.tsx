// Module ID: 19828
// Function ID: 19829
// Name: FramePanelUtils
// Dependencies: [6984, 6985, 5793, 504, 2]
// Exports: isFramePanelFullscreen, useIsActivityPanelFullscreen

// Module 19828 (FramePanelUtils)
import get_initialized from "get initialized" /* 504 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5793 */;
import FramesConstants from "FramesConstants" /* 6985 */;
import FramesStore from "FramesStore" /* 6984 */;
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
