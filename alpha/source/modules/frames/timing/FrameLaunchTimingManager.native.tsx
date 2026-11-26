// Module ID: 7687
// Function ID: 7688
// Name: FrameLaunchTimingManager
// Dependencies: [7686, 2]
// Exports: getFrameLaunchTiming, getFrameLaunchTimingForIframe, startLaunchTiming

// Module 7687 (FrameLaunchTimingManager)
import noopFrameLaunchTiming from "noopFrameLaunchTiming" /* 7686 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/timing/FrameLaunchTimingManager.native.tsx");

export function startLaunchTiming() {
  return noopFrameLaunchTiming.NOOP_FRAME_LAUNCH_TIMING;
}
export function getFrameLaunchTiming() {
  return null;
}
export function getFrameLaunchTimingForIframe() {
  return null;
}
