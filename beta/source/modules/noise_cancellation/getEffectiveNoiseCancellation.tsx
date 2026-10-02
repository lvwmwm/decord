// Module ID: 9447
// Function ID: 9448
// Name: getEffectiveNoiseCancellation
// Dependencies: [1370, 9448, 2]
// Exports: default

// Module 9447 (getEffectiveNoiseCancellation)
import PlatformUtils from "PlatformUtils" /* 1370 */;
import WindowsEffectsExperiment from "WindowsEffectsExperiment" /* 9448 */;
import size from "module_2" /* 2 */;

const deep_noise_suppression = "deep_noise_suppression";
const set = new Set(["voice_isolation", "wide_spectrum"]);
const result = size.fileFinishedImporting("modules/noise_cancellation/getEffectiveNoiseCancellation.tsx");

export default function getEffectiveNoiseCancellation(arg0, arg1) {
  const obj = PlatformUtils;
  if (!obj.isIOS()) {
    let tmp3;
    const tmpResult = PlatformUtils;
    if (!tmpResult.isMac()) {
      tmp3 = arg0;
      if (tmp3) {
        let tmp5 = null == arg1 || "" === arg1;
        if (!tmp5) {
          const tmpResult3 = PlatformUtils;
          tmp5 = !tmpResult3.isWindows();
        }
        if (!tmp5) {
          tmp5 = arg1 !== deep_noise_suppression;
        }
        if (!tmp5) {
          const tmpResult4 = WindowsEffectsExperiment;
          tmp5 = !tmpResult4.getWindowsAudioEffectsExperimentConfig({ location: "setNoiseCancellation" }).preferSystemEffects;
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
  tmp3 = !hasItem && arg0;
};
export const WINDOWS_NOISE_SUPPRESSION_EFFECT = "deep_noise_suppression";
