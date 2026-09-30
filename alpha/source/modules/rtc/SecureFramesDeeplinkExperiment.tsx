// Module ID: 9372
// Function ID: 9373
// Name: SecureFramesDeeplinkExperiment
// Dependencies: [4779, 2]
// Exports: getSecureFramesDeeplinkExperiment, useSecureFramesDeeplinkExperiment

// Module 9372 (SecureFramesDeeplinkExperiment)
import createExperimentDefault from "createExperiment" /* 4779 */;

const obj = { kind: "user", id: "2024-09_secure_frames_deeplink", label: "Secure Frames Deeplinks", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enabled.", config: { enabled: true } }];
obj.treatments = items;
let closure_0 = createExperimentDefault(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/SecureFramesDeeplinkExperiment.tsx");

export const useSecureFramesDeeplinkExperiment = function useSecureFramesDeeplinkExperiment(location) {
  return closure_0.useExperiment({ location: location.location }, { autoTrackExposure: true });
};
export const getSecureFramesDeeplinkExperiment = function getSecureFramesDeeplinkExperiment(location) {
  return closure_0.getCurrentConfig({ location: location.location }, { autoTrackExposure: true });
};
