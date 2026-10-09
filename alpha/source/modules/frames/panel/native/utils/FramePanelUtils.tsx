// Module ID: 18022
// Function ID: 18023
// Name: FramePanelUtils
// Dependencies: [10772, 10767, 6074, 558, 576, 504, 2]
// Exports: isFramePanelFullscreen

// Module 18022 (FramePanelUtils)
import react from "react" /* 576 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 6074 */;
import FramesConstants from "FramesConstants" /* 10767 */;
import FramesStore from "FramesStore" /* 10772 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const asLaunched = FramesConstants.asLaunched;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsActivityPanelFullscreen() {
  let mainFrame;
  let tmp4;
  let tmp5;
  let tmp = require;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    const fn = function u() {
      const tmp = asLaunched(mainFrame.getMainFrame());
      return null != tmp && tmp.data.activityPanelMode === constants.PANEL;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsActivityPanelFullscreen() {
  let mainFrame;
  const items = [FramesStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    return null != tmp && tmp.data.activityPanelMode === constants.PANEL;
  });
});
const result = size.fileFinishedImporting("modules/frames/panel/native/utils/FramePanelUtils.tsx");

export const isFramePanelFullscreen = function isFramePanelFullscreen() {
  const tmp = asLaunched(FramesStore.getMainFrame());
  return null != tmp && tmp.data.activityPanelMode === ActivityPanelModes.PANEL;
};
export const useIsActivityPanelFullscreen = tmp2;
