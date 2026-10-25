// Module ID: 11594
// Function ID: 11595
// Name: canStreamWithSettings
// Dependencies: [5814, 11595, 11596, 2]
// Exports: default

// Module 11594 (canStreamWithSettings)
import GoLiveAutoQualityExperiment from "GoLiveAutoQualityExperiment" /* 11595 */;
import canUseStreamSettingDefault from "canUseStreamSetting" /* 11596 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5814 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ApplicationStreamSettingRequirements: c3, ApplicationStreamPresets: closure_4 } = StreamSettingsConstants);
const result = size.fileFinishedImporting("modules/go_live/utils/canStreamWithSettings.tsx");

export default function canStreamWithSettings(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (arg0 === constants.PRESET_AUTO) {
    const obj = GoLiveAutoQualityExperiment;
    return obj.getGoLiveAutoQualityExperimentConfig({ location: "canStreamWithSettings" }).allowAutoQuality;
  } else {
    const iter = _false[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (null == nextResult.preset) {
        if (arg1 === tmp4.resolution) {
          if (arg2 === tmp4.fps) {
            if (canUseStreamSettingDefault(tmp4, arg3, arg4, arg5)) {
              iter.return();
              let flag = true;
              return true;
            }
          }
        }
      }
      continue;
    }
    return false;
  }
};
