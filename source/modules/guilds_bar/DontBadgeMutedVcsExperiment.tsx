// Module ID: 13360
// Function ID: 13361
// Name: useIsDontBadgeMutedVcsEnabled
// Dependencies: [1469, 2]
// Exports: getIsDontBadgeMutedVcsEnabled, useIsDontBadgeMutedVcsEnabled

// Module 13360 (useIsDontBadgeMutedVcsEnabled)
import getUnitIdDefault from "getUnitId" /* 1469 */;

let closure_0 = getUnitIdDefault({ kind: "user", name: "2026-06-dont-badge-muted-vcs", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  return closure_0.useConfig({ location: useGuildMediaState }).enabled;
};
export const getIsDontBadgeMutedVcsEnabled = function getIsDontBadgeMutedVcsEnabled(GuildMediaStateStore) {
  return closure_0.getConfig({ location: GuildMediaStateStore }).enabled;
};
