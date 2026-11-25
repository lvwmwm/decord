// Module ID: 10318
// Function ID: 10319
// Name: canStreamWithSettings
// Dependencies: [5912, 10319, 10320, 2]
// Exports: default

// Module 10318 (canStreamWithSettings)
import GoLiveAutoQualityExperiment from "GoLiveAutoQualityExperiment" /* 10319 */;
import canUseStreamSettingDefault from "canUseStreamSetting" /* 10320 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5912 */;
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
