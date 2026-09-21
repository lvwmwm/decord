// Module ID: 10252
// Function ID: 10253
// Name: getEffectiveNoiseCancellation
// Dependencies: [1364, 10253, 2]
// Exports: default

// Module 10252 (getEffectiveNoiseCancellation)
import size from "module_2" /* 2 */;

const deep_noise_suppression = "deep_noise_suppression";
const set = new Set(["voice_isolation", "wide_spectrum"]);
const result = size.fileFinishedImporting("modules/noise_cancellation/getEffectiveNoiseCancellation.tsx");

export default function getEffectiveNoiseCancellation(arg0, arg1) {
  if (!obj.isIOS()) {
    if (!tmpResult.isMac()) {
      let tmp3 = arg0;
      if (arg0) {
        let tmp5 = null == arg1;
        if (!tmp5) {
          tmp5 = "" === arg1;
        }
        if (!tmp5) {
          tmp5 = !tmp(1364).isWindows();
          const tmpResult3 = tmp(1364);
        }
        if (!tmp5) {
          tmp5 = arg1 !== deep_noise_suppression;
        }
        if (!tmp5) {
          tmp5 = !tmp(10253).getWindowsAudioEffectsExperimentConfig({ location: "setNoiseCancellation" }).preferSystemEffects;
          const tmpResult4 = tmp(10253);
        }
        if (tmp5) {
          tmp5 = arg0;
        }
        tmp3 = tmp5;
      }
    }
    return tmp3;
  }
  const hasItem = set.has(arg1);
  let tmp8 = !hasItem;
  if (!hasItem) {
    tmp8 = arg0;
  }
  tmp3 = tmp8;
};
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";
