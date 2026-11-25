// Module ID: 17892
// Function ID: 17893
// Name: preloadChannelAppFrame
// Dependencies: [6905, 17893, 7656, 7654, 7648, 2]
// Exports: preloadChannelAppFrame

// Module 17892 (preloadChannelAppFrame)
import frameLaunchSteps from "frameLaunchSteps" /* 7648 */;
import FrameLaunchTimingTypes from "FrameLaunchTimingTypes" /* 7654 */;
import FrameLaunchTimingManager from "FrameLaunchTimingManager" /* 7656 */;
import getChannelAppLaunchTargetDefault from "getChannelAppLaunchTarget" /* 17893 */;
import FramesStore from "FramesStore" /* 6905 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/preloadChannelAppFrame.tsx");

export function preloadChannelAppFrame(id) {
  let applicationId;
  let frameId;
  let surface;
  const tmp2 = getChannelAppLaunchTargetDefault(id);
  if (null != tmp2) {
    ({ frameId, applicationId, surface } = tmp2);
    if (null != FramesStore.getFrame(frameId)) {
      const obj2 = FrameLaunchTimingManager;
      let frameLaunchTiming = obj2.getFrameLaunchTiming(frameId);
      if (null == frameLaunchTiming) {
        const tmp6Result = FrameLaunchTimingManager;
        frameLaunchTiming = tmp6Result.startLaunchTiming(tmp6(7654).LaunchTrigger.SIDEBAR_MOUSEDOWN, frameId, applicationId, surface);
      }
      const finish = frameLaunchTiming.finish;
      const obj3 = { type: FrameLaunchTimingTypes.FrameLaunchCloseType.REUSED };
      finish(obj3);
    } else {
      const obj = frameLaunchSteps;
      obj.prefetchFrameLaunch(FrameLaunchTimingTypes.LaunchTrigger.SIDEBAR_MOUSEDOWN, applicationId, surface);
    }
  }
}
