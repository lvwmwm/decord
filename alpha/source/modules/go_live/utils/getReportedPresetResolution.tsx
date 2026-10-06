// Module ID: 5033
// Function ID: 5034
// Name: getReportedPresetResolution
// Dependencies: [1377, 4943, 5034, 2]
// Exports: default

// Module 5033 (getReportedPresetResolution)
import getFrontierTuningConfigIfEligibleDefault from "getFrontierTuningConfigIfEligible" /* 5034 */;
import UserStore from "UserStore" /* 1377 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4943 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ApplicationStreamFPS: c3, ApplicationStreamResolutions: closure_4 } = StreamSettingsConstants);
const result = size.fileFinishedImporting("modules/go_live/utils/getReportedPresetResolution.tsx");

export default function getReportedPresetResolution(arg0, arg1, arg2, arg3) {
  if (arg2 === RESOLUTION_1080.RESOLUTION_1080) {
    if (arg3 === FPS_30.FPS_30) {
      const tmp8 = getFrontierTuningConfigIfEligibleDefault;
      const tmp8Result = tmp8(arg0, UserStore.getCurrentUser(), arg1);
      let maskReportedQuality;
      if (tmp8Result != null) {
        maskReportedQuality = tmp8Result.maskReportedQuality;
      }
      let RESOLUTION_720 = arg2;
      if (true === maskReportedQuality) {
        RESOLUTION_720 = tmp.RESOLUTION_720;
      }
      return RESOLUTION_720;
    }
  }
  return arg2;
};
