// Module ID: 15969
// Function ID: 15970
// Name: GuildMediaStateStoreExperiment
// Dependencies: [1436, 2]
// Exports: useGuildMediaStateSource

// Module 15969 (GuildMediaStateStoreExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;
import size from "module_2" /* 2 */;

let obj3;
let obj = { HOOK: "hook", STORE: "store", SHADOW: "shadow" };
const obj2 = { kind: "user", name: "2026-08-guilds-bar-media-state-store", defaultConfig: { source: obj.HOOK }, variations: obj3 };
obj3 = { 0: { source: obj.HOOK }, 1: { source: obj.STORE }, 2: { source: obj.SHADOW } };
let closure_0 = apex_ApexExperimentDefault(obj2);
const result = size.fileFinishedImporting("modules/guilds_bar/GuildMediaStateStoreExperiment.tsx");

export const GuildMediaStateSource = obj;
export const useGuildMediaStateSource = function useGuildMediaStateSource(GuildsBarGuild) {
  const obj = { location: GuildsBarGuild };
  return closure_0.useConfig(obj).source;
};
