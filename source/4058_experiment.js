// Module ID: 4058
// Function ID: 33817
// Name: experiment
// Dependencies: []
// Exports: getServerThemeEnabled, useServerThemeEnabled

// Module 4058 (experiment)
const EMPTY_STRING_SNOWFLAKE_ID = require(dependencyMap[0]).EMPTY_STRING_SNOWFLAKE_ID;
const _module = require(dependencyMap[1]);
let obj = { "Bool(false)": null, "Bool(false)": null, config: { <string:74106368>: -1924062975, <string:71306752>: 275849618, <string:80013056>: 1358954496 } };
const items = [obj, ];
obj = { "Bool(false)": null, "Bool(false)": null, config: {} };
items[1] = obj;
const experiment = _module.createExperiment({ defaultConfig: { <string:74106368>: true, <string:71306752>: false, <string:80013056>: false }, treatments: items });
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeExperiment.tsx");

export const ServerThemeExperiment = experiment;
export const getServerThemeEnabled = function getServerThemeEnabled(guildId, GuildPowerupsConstants) {
  let obj = { guildId, location: GuildPowerupsConstants };
  const currentConfig = experiment.getCurrentConfig(obj, { autoTrackExposure: false });
  let enabled = currentConfig.enabled;
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = require(dependencyMap[2]).ServerThemeApexShadowExperiment;
    obj = { guildId, location: GuildPowerupsConstants };
    let config = ServerThemeApexShadowExperiment.getConfig(obj);
  } else {
    config = {};
  }
  if (!currentConfig.inExperiment) {
    let tmp6 = !tmp5;
    if (!!config.gatesApex) {
      tmp6 = tmp4;
    }
    enabled = tmp6;
  }
  return enabled;
};
export const useServerThemeEnabled = function useServerThemeEnabled(guildId, useGuildPowerupNewPerkMarketingVersion) {
  let obj = { guildId, location: useGuildPowerupNewPerkMarketingVersion };
  const experiment = experiment.useExperiment(obj, { autoTrackExposure: false });
  let enabled = experiment.enabled;
  const ServerThemeApexShadowExperiment = require(dependencyMap[2]).ServerThemeApexShadowExperiment;
  obj = {};
  let tmp2 = guildId;
  if (null == guildId) {
    tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  obj.guildId = tmp2;
  obj.location = useGuildPowerupNewPerkMarketingVersion;
  const config = ServerThemeApexShadowExperiment.useConfig(obj);
  if (!experiment.inExperiment) {
    let tmp6 = null != guildId;
    if (tmp6) {
      let tmp8 = !tmp7;
      if (!!tmp5) {
        tmp8 = tmp4;
      }
      tmp6 = tmp8;
    }
    enabled = tmp6;
  }
  return enabled;
};
