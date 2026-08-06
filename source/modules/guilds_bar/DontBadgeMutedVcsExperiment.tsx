// Module ID: 15346
// Function ID: 15347
// Name: useIsDontBadgeMutedVcsEnabled
// Dependencies: [1349, 2]
// Exports: useIsDontBadgeMutedVcsEnabled

// Module 15346 (useIsDontBadgeMutedVcsEnabled)
let closure_0 = require("getUnitId")({ kind: "user", name: "2026-06-dont-badge-muted-vcs", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};
