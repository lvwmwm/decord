// Module ID: 5867
// Function ID: 5868
// Name: getReportedPresetResolution
// Dependencies: [1392, 5800, 5831, 2]
// Exports: default

// Module 5867 (getReportedPresetResolution)
import getFrontierTuningConfigIfEligibleDefault from "getFrontierTuningConfigIfEligible" /* 5831 */;
import UserStore from "UserStore" /* 1392 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5800 */;
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
