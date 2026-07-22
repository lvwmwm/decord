// Module ID: 14745
// Function ID: 111190
// Name: useIsDontBadgeMutedVcsEnabled
// Dependencies: []
// Exports: useIsDontBadgeMutedVcsEnabled

// Module 14745 (useIsDontBadgeMutedVcsEnabled)
const obj = { "Bool(false)": "<string:2805399554>", "Bool(false)": "<string:4132503554>", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};
