// Module ID: 9279
// Function ID: 9280
// Name: DefaultInviteExpirationExperiments
// Dependencies: [2067, 1074, 9277, 4748, 563, 2]
// Exports: useDefaultInviteExpiration, useMaxAgeOptions

// Module 9279 (DefaultInviteExpirationExperiments)
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9277 */;
import GuildStore from "GuildStore" /* 2067 */;
import Constants from "Constants" /* 1074 */;
import createExperiment_mod from "module_4748" /* 4748 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let items;
let items1;
function getDefaultInviteExpiration(arg0) {
  let experimentConfig;
  let guild;
  ({ guild, experimentConfig } = arg0);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(hasOwnProperty.HUB);
  }
  if (hasItem) {
    return InstantInviteUtilsDefault.INVITE_OPTIONS_FOREVER.value;
  } else if (null != experimentConfig) {
    let defaultMaxAge2 = experimentConfig.defaultMaxAge;
    if (defaultMaxAge2 == null) {
      defaultMaxAge2 = metroRequire;
    }
    return defaultMaxAge2;
  } else {
    let defaultMaxAge;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (id == null) {
      id = React3;
    }
    const obj = { guildId: id, location: "getDefaultInviteExpiration" };
    const currentConfig = experiment.getCurrentConfig(obj);
    if (currentConfig.defaultMaxAge !== metroRequire) {
      defaultMaxAge = currentConfig.defaultMaxAge;
    } else {
      const obj2 = { guildId: id, location: "getDefaultInviteExpiration" };
      defaultMaxAge = experiment1.getCurrentConfig(obj2).defaultMaxAge;
      if (defaultMaxAge == null) {
        defaultMaxAge = tmp6;
      }
    }
    return defaultMaxAge;
  }
}
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const value = InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.value;
const metroRequire = value;
let createExperiment = createExperiment_mod;
let obj = { kind: "guild", id: "2025-08_default_invite_expiration_guild", label: "Default Invite Expiration Guild", defaultConfig: { defaultMaxAge: 604800 }, treatments: items };
items = [{ id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } }, { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } }, { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } }];
let experiment = createExperiment.createExperiment(obj);
createExperiment = createExperiment_mod;
let obj2 = { kind: "guild", id: "2026-05_default_invite_expiration_guild_web", label: "Default Invite Expiration Guild Web", defaultConfig: { defaultMaxAge: 604800 }, treatments: items1 };
items1 = [{ id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } }, { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } }, { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } }];
let experiment1 = createExperiment.createExperiment(obj2);
const result = size.fileFinishedImporting("modules/instant_invite/DefaultInviteExpirationExperiments.tsx");

export const DEFAULT_MAX_AGE = value;
export const DefaultInviteExpirationGuildExperiment = experiment;
export const DefaultInviteExpirationGuildWebExperiment = experiment1;
export { getDefaultInviteExpiration };
export const useDefaultInviteExpiration = function useDefaultInviteExpiration(guildId) {
  guildId = guildId.guildId;
  const _location = guildId.location;
  let tmp = guildId;
  if (guildId == null) {
    tmp = closure_4;
  }
  experiment = experiment.useExperiment({ guildId: tmp, location: _location });
  experiment1 = experiment1.useExperiment({ guildId: tmp, location: _location });
  let defaultMaxAge;
  if (experiment != null) {
    defaultMaxAge = experiment.defaultMaxAge;
  }
  if (defaultMaxAge !== closure_6) {
    experiment1 = experiment;
  }
  guildId(563);
  [][0] = GuildStore;
  let tmp7 = null;
  if (null != guildId) {
    const obj = { guild: tmp6, experimentConfig: experiment1 };
    tmp7 = getDefaultInviteExpiration(obj);
  }
  return tmp7;
};
export const useMaxAgeOptions = function useMaxAgeOptions(arg0) {
  let _location;
  let guildId;
  let items;
  ({ guildId, location: _location } = arg0);
  if (guildId == null) {
    guildId = React3;
  }
  experiment = experiment.useExperiment({ guildId, location: _location });
  experiment1 = experiment1.useExperiment({ guildId, location: _location });
  let defaultMaxAge;
  if (experiment != null) {
    defaultMaxAge = experiment.defaultMaxAge;
  }
  if (defaultMaxAge !== metroRequire) {
    experiment1 = experiment;
  }
  let defaultMaxAge1;
  const getMaxAgeOptions = InstantInviteUtilsDefault.getMaxAgeOptions;
  InstantInviteUtilsDefault;
  if (experiment1 != null) {
    defaultMaxAge1 = experiment1.defaultMaxAge;
  }
  const obj = { includeExperimentalValues: items };
  items = [defaultMaxAge1];
  return getMaxAgeOptions(obj);
};
