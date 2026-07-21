// Module ID: 8898
// Function ID: 70237
// Name: items
// Dependencies: []
// Exports: getSecureFramesDeeplinkExperiment, useSecureFramesDeeplinkExperiment

// Module 8898 (items)
const obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, defaultConfig: { enabled: false } };
const items = [{ config: { enabled: true } }];
obj.treatments = items;
let closure_0 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/rtc/SecureFramesDeeplinkExperiment.tsx");

export const useSecureFramesDeeplinkExperiment = function useSecureFramesDeeplinkExperiment(location) {
  return closure_0.useExperiment({ location: location.location }, { autoTrackExposure: true });
};
export const getSecureFramesDeeplinkExperiment = function getSecureFramesDeeplinkExperiment(location) {
  return closure_0.getCurrentConfig({ location: location.location }, { autoTrackExposure: true });
};
