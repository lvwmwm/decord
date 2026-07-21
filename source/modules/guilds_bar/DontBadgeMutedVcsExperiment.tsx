// Module ID: 14734
// Function ID: 111113
// Name: useIsDontBadgeMutedVcsEnabled
// Dependencies: []
// Exports: useIsDontBadgeMutedVcsEnabled

// Module 14734 (useIsDontBadgeMutedVcsEnabled)
const obj = { margin: 136616579955019750000000000000000000000000000000000000000000000, paddingHorizontal: 2.000000599364285, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};
