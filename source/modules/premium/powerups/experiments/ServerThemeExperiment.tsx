// Module ID: 4058
// Function ID: 33822
// Name: experiment
// Dependencies: []
// Exports: getServerThemeEnabled, useServerThemeEnabled

// Module 4058 (experiment)
const EMPTY_STRING_SNOWFLAKE_ID = require(dependencyMap[0]).EMPTY_STRING_SNOWFLAKE_ID;
const _module = require(dependencyMap[1]);
const obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: null, 炖锅: null, config: { name: 500, fontStack: 1000, uppercase: 60000 } };
const items = [obj, { config: { name: "sm", fontStack: "Placeholder", uppercase: "Click" } }];
const experiment = _module.createExperiment({ defaultConfig: { name: "#ffa813", fontStack: "absolute", uppercase: null }, treatments: items });
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
    config = { size: null, lineHeight: null };
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
