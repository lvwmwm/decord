// Module ID: 14861
// Function ID: 113358
// Name: useIsDontBadgeMutedVcsEnabled
// Dependencies: [1325, 2]
// Exports: useIsDontBadgeMutedVcsEnabled

// Module 14861 (useIsDontBadgeMutedVcsEnabled)
const obj = { kind: "user", name: "2026-06-dont-badge-muted-vcs", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};
