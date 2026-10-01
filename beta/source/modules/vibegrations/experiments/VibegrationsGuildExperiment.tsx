// Module ID: 5372
// Function ID: 5373
// Name: VibegrationsGuildExperiment
// Dependencies: [2067, 1074, 1435, 504, 2]
// Exports: useHasVibegrationsGuild, useIsVibegrationsGuildEnabled

// Module 5372 (VibegrationsGuildExperiment)
import Constants from "Constants" /* 1074 */;
import GuildStore from "GuildStore" /* 2067 */;
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function isVibegrationsGuildEnabled(guildId) {
  guildId = guildId.guildId;
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location: tmp };
    enabled = config.getConfig(obj).enabled;
  }
  return enabled;
}
function hasVibegrationsGuild(arg0, location) {
  const obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let obj2 = { guildId: tmp.id, location };
    if (isVibegrationsGuildEnabled(obj2)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let obj = { name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/vibegrations/experiments/VibegrationsGuildExperiment.tsx");

export const useIsVibegrationsGuildEnabled = function useIsVibegrationsGuildEnabled(guildId) {
  guildId = guildId.guildId;
  const _location = guildId.location;
  const useConfig = config.useConfig;
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  return useConfig({ guildId, location: _location }).enabled;
};
export { isVibegrationsGuildEnabled };
export { hasVibegrationsGuild };
export const useHasVibegrationsGuild = function useHasVibegrationsGuild(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[1] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [arg0];
  return useStateFromStores(items, () => hasVibegrationsGuild(Object.values(GuildStore.getGuilds()), closure_0), items1);
};
