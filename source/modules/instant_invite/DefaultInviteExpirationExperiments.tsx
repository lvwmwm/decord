// Module ID: 8479
// Function ID: 67715
// Name: getDefaultInviteExpiration
// Dependencies: []
// Exports: useDefaultInviteExpiration, useMaxAgeOptions

// Module 8479 (getDefaultInviteExpiration)
function getDefaultInviteExpiration(arg0) {
  let experimentConfig;
  let guild;
  ({ guild, experimentConfig } = arg0);
  if (null != guild) {
    const features = guild.features;
    if (features.has(constants.HUB)) {
      return importDefault(dependencyMap[2]).INVITE_OPTIONS_FOREVER.value;
    }
  }
  if (null != experimentConfig) {
    let defaultMaxAge2 = experimentConfig.defaultMaxAge;
    if (null == defaultMaxAge2) {
      defaultMaxAge2 = value;
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
    const currentConfig = experiment.getCurrentConfig(obj);
    if (currentConfig.defaultMaxAge !== value) {
      let defaultMaxAge = currentConfig.defaultMaxAge;
    } else {
      obj = { guildId: id, location: "getDefaultInviteExpiration" };
      defaultMaxAge = experiment1.getCurrentConfig(obj).defaultMaxAge;
      if (null == defaultMaxAge) {
        defaultMaxAge = value;
      }
    }
    return defaultMaxAge;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, GuildFeatures: closure_5 } = arg1(dependencyMap[1]));
const value = importDefault(dependencyMap[2]).INVITE_OPTIONS_7_DAYS.value;
let obj = arg1(dependencyMap[3]);
obj = { displayNameStylesEnabled: "render_embeds", submitButtonEnabled: "message", config: { defaultMaxAge: 1209600 } };
const items = [obj, { config: { defaultMaxAge: 2592000 } }, ];
obj = { displayNameStylesEnabled: null, submitButtonEnabled: null, config: { defaultMaxAge: 5184000 } };
items[2] = obj;
const experiment = obj.createExperiment({ defaultConfig: { defaultMaxAge: 604800 }, treatments: items });
let obj3 = arg1(dependencyMap[3]);
const obj1 = { shapes: "Array", flex: "isArray", sk: "construct", defaultConfig: { defaultMaxAge: 604800 } };
const obj2 = { displayNameStylesEnabled: "render_embeds", submitButtonEnabled: "message", config: { defaultMaxAge: 1209600 } };
const items1 = [obj2, { config: { defaultMaxAge: 2592000 } }, ];
obj3 = { displayNameStylesEnabled: null, submitButtonEnabled: null, config: { defaultMaxAge: 5184000 } };
items1[2] = obj3;
obj1.treatments = items1;
const experiment1 = obj3.createExperiment(obj1);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/instant_invite/DefaultInviteExpirationExperiments.tsx");

export const DEFAULT_MAX_AGE = value;
export const DefaultInviteExpirationGuildExperiment = experiment;
export const DefaultInviteExpirationGuildWebExperiment = experiment1;
export { getDefaultInviteExpiration };
export const useDefaultInviteExpiration = function useDefaultInviteExpiration(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const _location = guildId.location;
  let tmp = guildId;
  if (null == guildId) {
    tmp = closure_4;
  }
  let obj = { guildId: tmp, location: _location };
  const experiment = experiment.useExperiment(obj);
  obj = { guildId: tmp, location: _location };
  let experiment1 = experiment1.useExperiment(obj);
  let defaultMaxAge;
  if (null != experiment) {
    defaultMaxAge = experiment.defaultMaxAge;
  }
  if (defaultMaxAge !== value) {
    experiment1 = experiment;
  }
  arg1(dependencyMap[4]);
  [][0] = closure_3;
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
  const experiment = experiment.useExperiment(obj);
  obj = { guildId, location: _location };
  let experiment1 = experiment1.useExperiment(obj);
  let defaultMaxAge;
  if (null != experiment) {
    defaultMaxAge = experiment.defaultMaxAge;
  }
  if (defaultMaxAge !== value) {
    experiment1 = experiment;
  }
  obj = {};
  let defaultMaxAge1;
  if (null != experiment1) {
    defaultMaxAge1 = experiment1.defaultMaxAge;
  }
  const items = [defaultMaxAge1];
  obj.includeExperimentalValues = items;
  return importDefault(dependencyMap[2]).getMaxAgeOptions(obj);
};
