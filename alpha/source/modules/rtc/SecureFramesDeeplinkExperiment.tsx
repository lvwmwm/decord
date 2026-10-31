// Module ID: 9275
// Function ID: 9276
// Name: SecureFramesDeeplinkExperiment
// Dependencies: [5237, 2]
// Exports: getSecureFramesDeeplinkExperiment, useSecureFramesDeeplinkExperiment

// Module 9275 (SecureFramesDeeplinkExperiment)
import createExperimentDefault from "createExperiment" /* 5237 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "user", id: "2024-09_secure_frames_deeplink", label: "Secure Frames Deeplinks", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enabled.", config: { enabled: true } }];
let closure_0 = createExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/rtc/SecureFramesDeeplinkExperiment.tsx");

export function useSecureFramesDeeplinkExperiment(location) {
  const obj = { location: location.location };
  return closure_0.useExperiment(obj, { autoTrackExposure: true });
}
export function getSecureFramesDeeplinkExperiment(location) {
  const obj = { location: location.location };
  return closure_0.getCurrentConfig(obj, { autoTrackExposure: true });
}
