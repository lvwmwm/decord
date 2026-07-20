// Module ID: 8474
// Function ID: 67680
// Name: getDefaultInviteExpiration
// Dependencies: []
// Exports: useDefaultInviteExpiration, useMaxAgeOptions

// Module 8474 (getDefaultInviteExpiration)
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
obj = { "Bool(false)": "column", "Bool(false)": "flex-start", config: { defaultMaxAge: 1209600 } };
const items = [obj, , ];
obj = { "Bool(false)": "heading-lg/bold", "Bool(false)": "text-sm/normal", config: { defaultMaxAge: 2592000 } };
items[1] = obj;
items[2] = { config: { defaultMaxAge: 5184000 } };
const experiment = obj.createExperiment({ defaultConfig: { defaultMaxAge: 604800 }, treatments: items });
const tmp2 = arg1(dependencyMap[1]);
const obj1 = { "Bool(false)": "column", "Bool(false)": "flex-start", config: { defaultMaxAge: 1209600 } };
const items1 = [obj1, , ];
const obj2 = { "Bool(false)": "heading-lg/bold", "Bool(false)": "text-sm/normal", config: { defaultMaxAge: 2592000 } };
items1[1] = obj2;
items1[2] = { config: { defaultMaxAge: 5184000 } };
const experiment1 = arg1(dependencyMap[3]).createExperiment({ defaultConfig: { defaultMaxAge: 604800 }, treatments: items1 });
const obj4 = arg1(dependencyMap[3]);
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
