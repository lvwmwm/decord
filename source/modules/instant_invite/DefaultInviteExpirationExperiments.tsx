// Module ID: 8485
// Function ID: 67752
// Name: getDefaultInviteExpiration
// Dependencies: [1838, 653, 8483, 4042, 624, 2]
// Exports: useDefaultInviteExpiration, useMaxAgeOptions

// Module 8485 (getDefaultInviteExpiration)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import createExperiment from "createExperiment";
import createExperiment from "createExperiment";

let closure_4;
let closure_5;
const require = arg1;
function getDefaultInviteExpiration(arg0) {
  let experimentConfig;
  let guild;
  ({ guild, experimentConfig } = arg0);
  if (null != guild) {
    const features = guild.features;
    if (features.has(constants.HUB)) {
      return importDefault(8483).INVITE_OPTIONS_FOREVER.value;
    }
  }
  if (null != experimentConfig) {
    let defaultMaxAge2 = experimentConfig.defaultMaxAge;
    if (null == defaultMaxAge2) {
      defaultMaxAge2 = closure_6;
    }
    return defaultMaxAge2;
  } else {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    if (null == id) {
      id = closure_4;
    }
    let obj = { guildId: id, location: "getDefaultInviteExpiration" };
    const currentConfig = createExperiment.getCurrentConfig(obj);
    if (currentConfig.defaultMaxAge !== closure_6) {
      let defaultMaxAge = currentConfig.defaultMaxAge;
    } else {
      obj = { guildId: id, location: "getDefaultInviteExpiration" };
      defaultMaxAge = experiment1.getCurrentConfig(obj).defaultMaxAge;
      if (null == defaultMaxAge) {
        defaultMaxAge = closure_6;
      }
    }
    return defaultMaxAge;
  }
}
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, GuildFeatures: closure_5 } = ME);
const value = require("_createForOfIteratorHelperLoose").INVITE_OPTIONS_7_DAYS.value;
createExperiment = { kind: "guild", id: "2025-08_default_invite_expiration_guild", label: "Default Invite Expiration Guild", defaultConfig: { defaultMaxAge: 604800 } };
createExperiment = { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } };
let items = [createExperiment, , ];
const obj1 = { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } };
items[1] = obj1;
const obj2 = { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } };
items[2] = obj2;
createExperiment.treatments = items;
createExperiment = createExperiment.createExperiment(createExperiment);
const obj3 = { kind: "guild", id: "2026-05_default_invite_expiration_guild_web", label: "Default Invite Expiration Guild Web", defaultConfig: { defaultMaxAge: 604800 } };
const obj4 = { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } };
const items1 = [obj4, , ];
createExperiment = { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } };
items1[1] = createExperiment;
const obj6 = { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } };
items1[2] = obj6;
obj3.treatments = items1;
let experiment1 = createExperiment.createExperiment(obj3);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/instant_invite/DefaultInviteExpirationExperiments.tsx");

export const DEFAULT_MAX_AGE = value;
export const DefaultInviteExpirationGuildExperiment = createExperiment;
export const DefaultInviteExpirationGuildWebExperiment = experiment1;
export { getDefaultInviteExpiration };
export const useDefaultInviteExpiration = function useDefaultInviteExpiration(guildId) {
  guildId = guildId.guildId;
  const _location = guildId.location;
  let tmp = guildId;
  if (null == guildId) {
    tmp = closure_4;
  }
  let obj = { guildId: tmp, location: _location };
  const experiment = createExperiment.useExperiment(obj);
  obj = { guildId: tmp, location: _location };
  experiment1 = experiment1.useExperiment(obj);
  let defaultMaxAge;
  if (null != experiment) {
    defaultMaxAge = experiment.defaultMaxAge;
  }
  if (defaultMaxAge !== closure_6) {
    experiment1 = experiment;
  }
  guildId(624);
  [][0] = _createForOfIteratorHelperLoose;
  let tmp7 = null;
  if (null != guildId) {
    obj = { guild: tmp6, experimentConfig: experiment1 };
    tmp7 = getDefaultInviteExpiration(obj);
  }
  return tmp7;
};
export const useMaxAgeOptions = function useMaxAgeOptions(arg0) {
  let _location;
  let guildId;
  ({ guildId, location: _location } = arg0);
  if (null == guildId) {
    guildId = closure_4;
  }
  let obj = { guildId, location: _location };
  const experiment = createExperiment.useExperiment(obj);
  obj = { guildId, location: _location };
  experiment1 = experiment1.useExperiment(obj);
  let defaultMaxAge;
  if (null != experiment) {
    defaultMaxAge = experiment.defaultMaxAge;
  }
  if (defaultMaxAge !== closure_6) {
    experiment1 = experiment;
  }
  obj = {};
  let defaultMaxAge1;
  if (null != experiment1) {
    defaultMaxAge1 = experiment1.defaultMaxAge;
  }
  const items = [defaultMaxAge1];
  obj.includeExperimentalValues = items;
  return importDefault(8483).getMaxAgeOptions(obj);
};
