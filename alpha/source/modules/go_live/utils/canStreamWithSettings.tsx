// Module ID: 10842
// Function ID: 10843
// Name: canStreamWithSettings
// Dependencies: [5210, 10843, 10844, 2]
// Exports: default

// Module 10842 (canStreamWithSettings)
import GoLiveAutoQualityExperiment from "GoLiveAutoQualityExperiment" /* 10843 */;
import canUseStreamSettingDefault from "canUseStreamSetting" /* 10844 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 5210 */;
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
