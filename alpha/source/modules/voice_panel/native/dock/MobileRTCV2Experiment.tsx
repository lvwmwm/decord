// Module ID: 14206
// Function ID: 14207
// Name: MobileRTCV2Experiment
// Dependencies: [1447, 2]
// Exports: useIsMobileRTCV2Enabled

// Module 14206 (MobileRTCV2Experiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-10-mobile-rtc-v2", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/MobileRTCV2Experiment.tsx");

export function useIsMobileRTCV2Enabled(ChannelSafeAreaBottom) {
  const obj = { location: ChannelSafeAreaBottom };
  return closure_0.useConfig(obj).enabled;
}
