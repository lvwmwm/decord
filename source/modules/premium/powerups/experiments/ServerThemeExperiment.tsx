// Module ID: 4060
// Function ID: 33833
// Name: items
// Dependencies: [653, 4042, 4061, 2]
// Exports: getServerThemeEnabled, useServerThemeEnabled

// Module 4060 (items)
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-04_server_theme", label: "Server Theme", defaultConfig: { enabled: false, inExperiment: false, gatesApex: false } };
obj = { id: 0, label: "Control", config: { enabled: false, inExperiment: true, gatesApex: false } };
const items = [obj, ];
const obj1 = { id: 1, label: "Enable Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false } };
items[1] = obj1;
obj.treatments = items;
let experiment = createExperiment.createExperiment(obj);
const result = require("apexExperiment").fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeExperiment.tsx");

export const ServerThemeExperiment = experiment;
export const getServerThemeEnabled = function getServerThemeEnabled(guildId, GuildPowerupsConstants) {
  let obj = { guildId, location: GuildPowerupsConstants };
  const currentConfig = experiment.getCurrentConfig(obj, { autoTrackExposure: false });
  let enabled = currentConfig.enabled;
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = require(4061) /* apexExperiment */.ServerThemeApexShadowExperiment;
    obj = { guildId, location: GuildPowerupsConstants };
    let config = ServerThemeApexShadowExperiment.getConfig(obj);
  } else {
    config = { enabled: false, gatesApex: false };
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
  experiment = experiment.useExperiment(obj, { autoTrackExposure: false });
  let enabled = experiment.enabled;
  const ServerThemeApexShadowExperiment = require(4061) /* apexExperiment */.ServerThemeApexShadowExperiment;
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
