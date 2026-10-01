// Module ID: 13253
// Function ID: 13254
// Name: DontBadgeMutedVcsExperiment
// Dependencies: [1436, 2]
// Exports: getIsDontBadgeMutedVcsEnabled, useIsDontBadgeMutedVcsEnabled

// Module 13253 (DontBadgeMutedVcsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-06-dont-badge-muted-vcs", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = function useIsDontBadgeMutedVcsEnabled(useGuildMediaState) {
  const obj = { location: useGuildMediaState };
  return closure_0.useConfig(obj).enabled;
};
export const getIsDontBadgeMutedVcsEnabled = function getIsDontBadgeMutedVcsEnabled(GuildMediaStateStore) {
  const obj = { location: GuildMediaStateStore };
  return closure_0.getConfig(obj).enabled;
};
