// Module ID: 10570
// Function ID: 10571
// Name: SecureFramesDeeplinkExperiment
// Dependencies: [5468, 2]
// Exports: getSecureFramesDeeplinkExperiment, useSecureFramesDeeplinkExperiment

// Module 10570 (SecureFramesDeeplinkExperiment)
import createExperimentDefault from "createExperiment" /* 5468 */;
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
