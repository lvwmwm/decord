// Module ID: 7403
// Function ID: 7404
// Name: GuildSpaceExperiment
// Dependencies: [1072, 1447, 2]
// Exports: getGuildSpaceExperimentEnabled, useGuildSpaceExperimentEnabled

// Module 7403 (GuildSpaceExperiment)
import Constants from "Constants" /* 1072 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let obj = { kind: "guild", name: "2026-09-guild-spaces", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_space/GuildSpaceExperiment.tsx");

export const GuildSpaceExperiment = apexExperiment;
export function getGuildSpaceExperimentEnabled(id, GuildSettingsModalOverview) {
  let enabled = null != id;
  if (enabled) {
    const obj = { guildId: id, location: GuildSettingsModalOverview };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
export function useGuildSpaceExperimentEnabled(id, location) {
  let tmp = id;
  const useConfig = apexExperiment.useConfig;
  if (id == null) {
    tmp = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj = { guildId: tmp, location };
  return useConfig(obj).enabled;
}
