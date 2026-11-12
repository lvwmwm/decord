// Module ID: 14461
// Function ID: 14462
// Name: MobileRTCV2Experiment
// Dependencies: [1449, 2]
// Exports: useIsMobileRTCV2Enabled, useShouldAnimateSpeakerLevels

// Module 14461 (MobileRTCV2Experiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-10-mobile-rtc-v2", defaultConfig: { enabled: false, animateSpeakerLevels: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, animateSpeakerLevels: false } };
obj2[2] = { enabled: true, animateSpeakerLevels: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/MobileRTCV2Experiment.tsx");

export function useShouldAnimateSpeakerLevels(VoicePanelDock) {
  const obj = { location: VoicePanelDock };
  return closure_0.useConfig(obj).animateSpeakerLevels;
}
export function useIsMobileRTCV2Enabled(ChannelSafeAreaBottom) {
  const obj = { location: ChannelSafeAreaBottom };
  return closure_0.useConfig(obj).enabled;
}
