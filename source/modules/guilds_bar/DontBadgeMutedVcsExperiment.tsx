// Module ID: 15595
// Function ID: 15596
// Name: useIsDontBadgeMutedVcsEnabled
// Dependencies: [1368, 2]
// Exports: useIsDontBadgeMutedVcsEnabled

// Module 15595 (useIsDontBadgeMutedVcsEnabled)
let closure_0 = require("getUnitId")({ kind: "user", name: "2026-06-dont-badge-muted-vcs", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};
