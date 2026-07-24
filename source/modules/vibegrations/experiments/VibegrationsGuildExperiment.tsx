// Module ID: 5630
// Function ID: 48051
// Name: useIsVibegrationsGuildEnabled
// Dependencies: [653, 1428, 2]
// Exports: isVibegrationsGuildEnabled, useIsVibegrationsGuildEnabled

// Module 5630 (useIsVibegrationsGuildEnabled)
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import ApexExperiment from "ApexExperiment";

let obj = { name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_1 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/vibegrations/experiments/VibegrationsGuildExperiment.tsx");

export const useIsVibegrationsGuildEnabled = function useIsVibegrationsGuildEnabled(guildId) {
  guildId = guildId.guildId;
  const obj = {};
  if (null == guildId) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  obj.guildId = guildId;
  obj.location = guildId.location;
  return closure_1.useConfig(obj).enabled;
};
export const isVibegrationsGuildEnabled = function isVibegrationsGuildEnabled(guildId) {
  guildId = guildId.guildId;
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location: tmp };
    enabled = closure_1.getConfig(obj).enabled;
  }
  return enabled;
};
