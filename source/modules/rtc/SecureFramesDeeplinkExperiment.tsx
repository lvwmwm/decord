// Module ID: 8945
// Function ID: 70506
// Name: items
// Dependencies: [4043, 2]
// Exports: getSecureFramesDeeplinkExperiment, useSecureFramesDeeplinkExperiment

// Module 8945 (items)
let obj = { kind: "user", id: "2024-09_secure_frames_deeplink", label: "Secure Frames Deeplinks", defaultConfig: { enabled: false } };
obj = { id: 1, label: "Enabled.", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
let closure_0 = require("getExperimentDescriptor")(obj);
const result = require("set").fileFinishedImporting("modules/rtc/SecureFramesDeeplinkExperiment.tsx");

export const useSecureFramesDeeplinkExperiment = function useSecureFramesDeeplinkExperiment(location) {
  return closure_0.useExperiment({ location: location.location }, { autoTrackExposure: true });
};
export const getSecureFramesDeeplinkExperiment = function getSecureFramesDeeplinkExperiment(location) {
  return closure_0.getCurrentConfig({ location: location.location }, { autoTrackExposure: true });
};
