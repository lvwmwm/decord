// Module ID: 14013
// Function ID: 14014
// Name: DontBadgeMutedVcsExperiment
// Dependencies: [1439, 558, 568, 2]
// Exports: getIsDontBadgeMutedVcsEnabled

// Module 14013 (DontBadgeMutedVcsExperiment)
import c from "c" /* 568 */;
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

require = fn;
let closure_2 = apex_ApexExperimentDefault({ kind: "user", name: "2026-06-dont-badge-muted-vcs", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/DontBadgeMutedVcsExperiment.tsx");

export const useIsDontBadgeMutedVcsEnabled = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : ((location) => closure_2.useConfig({ location }).enabled);
export const getIsDontBadgeMutedVcsEnabled = function getIsDontBadgeMutedVcsEnabled(GuildMediaStateStore) {
  return closure_2.getConfig({ location: GuildMediaStateStore }).enabled;
};
