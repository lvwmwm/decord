// Module ID: 9407
// Function ID: 9408
// Name: canStreamWithSettings
// Dependencies: [4884, 9408, 9409, 2]
// Exports: default

// Module 9407 (canStreamWithSettings)
import GoLiveAutoQualityExperiment from "GoLiveAutoQualityExperiment" /* 9408 */;
import canUseStreamSettingDefault from "canUseStreamSetting" /* 9409 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4884 */;
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
