// Module ID: 14737
// Function ID: 111147
// Name: useIsDontBadgeMutedVcsEnabled
// Dependencies: []
// Exports: useIsDontBadgeMutedVcsEnabled

// Module 14737 (useIsDontBadgeMutedVcsEnabled)
const obj = { bottom: "r", name: "videoQualityMeasurement", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};
