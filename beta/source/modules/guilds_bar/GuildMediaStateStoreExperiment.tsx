// Module ID: 16684
// Function ID: 16685
// Name: GuildMediaStateStoreExperiment
// Dependencies: [1439, 558, 568, 2]

// Module 16684 (GuildMediaStateStoreExperiment)
import c from "c" /* 568 */;
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

require = fn;
const obj = { HOOK: "hook", STORE: "store", SHADOW: "shadow" };
let obj2 = { kind: "user", name: "2026-08-guilds-bar-media-state-store", defaultConfig: { source: obj.HOOK }, variations: { 0: { source: obj.HOOK }, 1: { source: obj.STORE }, 2: { source: obj.SHADOW } } };
let closure_2 = apex_ApexExperimentDefault(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/GuildMediaStateStoreExperiment.tsx");

export const GuildMediaStateSource = obj;
export const useGuildMediaStateSource = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).source;
}) : ((location) => closure_2.useConfig({ location }).source);
