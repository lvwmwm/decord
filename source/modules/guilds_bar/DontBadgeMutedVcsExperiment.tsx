// Module ID: 13708
// Function ID: 13709
// Name: useIsDontBadgeMutedVcsEnabled
// Dependencies: [1434, 2]
// Exports: getIsDontBadgeMutedVcsEnabled, useIsDontBadgeMutedVcsEnabled

// Module 13708 (useIsDontBadgeMutedVcsEnabled)
import getUnitIdDefault from "getUnitId" /* 1434 */;

let closure_0 = getUnitIdDefault({ kind: "user", name: "2026-06-dont-badge-muted-vcs", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};
export const getIsDontBadgeMutedVcsEnabled = function getIsDontBadgeMutedVcsEnabled(GuildMediaStateStore) {
  return closure_0.getConfig({ location: GuildMediaStateStore }).enabled;
};
