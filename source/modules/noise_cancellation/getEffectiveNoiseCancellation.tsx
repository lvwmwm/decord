// Module ID: 10725
// Function ID: 83455
// Name: set
// Dependencies: [477, 10726, 2]
// Exports: default

// Module 10725 (set)
import set from "set";

let set = new Set(["voice_isolation", "wide_spectrum"]);
const result = set.fileFinishedImporting("modules/noise_cancellation/getEffectiveNoiseCancellation.tsx");

export default function getEffectiveNoiseCancellation(arg0, arg1) {
  let obj = require(477) /* set */;
  if (!obj.isIOS()) {
    if (!obj2.isMac()) {
      let tmp3 = arg0;
      if (arg0) {
        let tmp5 = null == arg1;
        if (!tmp5) {
          tmp5 = "" === arg1;
        }
        if (!tmp5) {
          tmp5 = !require(477) /* set */.isWindows();
          const obj3 = require(477) /* set */;
        }
        if (!tmp5) {
          tmp5 = arg1 !== "deep_noise_suppression";
        }
        if (!tmp5) {
          obj = { location: "setNoiseCancellation" };
          tmp5 = !require(10726) /* getWindowsAudioEffectsExperimentConfig */.getWindowsAudioEffectsExperimentConfig(obj).preferSystemEffects;
          const obj4 = require(10726) /* getWindowsAudioEffectsExperimentConfig */;
        }
        if (tmp5) {
          tmp5 = arg0;
        }
        tmp3 = tmp5;
      }
    }
    return tmp3;
  }
  tmp3 = !set.has(arg1) && arg0;
};
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";
