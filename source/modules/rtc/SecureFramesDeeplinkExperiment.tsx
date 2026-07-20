// Module ID: 8894
// Function ID: 70214
// Name: useSecureFramesDeeplinkExperiment
// Dependencies: []
// Exports: getSecureFramesDeeplinkExperiment, useSecureFramesDeeplinkExperiment

// Module 8894 (useSecureFramesDeeplinkExperiment)
const items = [{ config: { enabled: true } }];
let closure_0 = importDefault(dependencyMap[0])({ defaultConfig: { enabled: false }, treatments: items });
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/rtc/SecureFramesDeeplinkExperiment.tsx");

export const useSecureFramesDeeplinkExperiment = function useSecureFramesDeeplinkExperiment(location) {
  return closure_0.useExperiment({ location: location.location }, { autoTrackExposure: true });
};
export const getSecureFramesDeeplinkExperiment = function getSecureFramesDeeplinkExperiment(location) {
  return closure_0.getCurrentConfig({ location: location.location }, { autoTrackExposure: true });
};
