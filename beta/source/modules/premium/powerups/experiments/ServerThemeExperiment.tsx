// Module ID: 4761
// Function ID: 4762
// Name: ServerThemeExperiment
// Dependencies: [1074, 4748, 4762, 2]
// Exports: getServerThemeEnabled, getServerThemeRollbackEnabled, resolveServerThemeConfig, useServerThemeEnabled, useServerThemeRollbackEnabled

// Module 4761 (ServerThemeExperiment)
import Constants from "Constants" /* 1074 */;
import ServerThemeApexShadowExperiment2 from "ServerThemeApexShadowExperiment" /* 4762 */;
import createExperiment from "module_4748" /* 4748 */;
import size from "module_2" /* 2 */;

let items;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let obj = { kind: "guild", id: "2026-04_server_theme", label: "Server Theme", defaultConfig: { enabled: false, inExperiment: false, gatesApex: false, rollbackEnabled: false }, treatments: items };
items = [{ id: 0, label: "Control", config: { enabled: false, inExperiment: true, gatesApex: false, rollbackEnabled: false } }, { id: 1, label: "Enable Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false, rollbackEnabled: false } }, { id: 2, label: "Rollback UI for Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false, rollbackEnabled: true } }];
let experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeExperiment.tsx");

export const ServerThemeExperiment = experiment;
export const resolveServerThemeConfig = function resolveServerThemeConfig(inExperiment, gatesApex, arg2) {
  let tmp = inExperiment;
  if (!inExperiment.inExperiment) {
    let defaultConfig;
    const tmp2 = arg2;
    if (!tmp2) {
      defaultConfig = experiment.definition.defaultConfig;
    } else {
      defaultConfig = gatesApex;
    }
    tmp = defaultConfig;
  }
  return tmp;
};
export const getServerThemeEnabled = function getServerThemeEnabled(guildId, GuildPowerupsConstants) {
  let defaultConfig;
  const obj = { guildId, location: GuildPowerupsConstants };
  let currentConfig = experiment.getCurrentConfig(obj, { autoTrackExposure: false });
  const tmp = experiment;
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
    const obj2 = { guildId, location: GuildPowerupsConstants };
    defaultConfig = ServerThemeApexShadowExperiment.getConfig(obj2);
  } else {
    defaultConfig = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment.definition.defaultConfig;
  }
  if (!currentConfig.inExperiment) {
    if (null == guildId) {
      defaultConfig = tmp.definition.defaultConfig;
    }
    currentConfig = defaultConfig;
  }
  return currentConfig.enabled;
};
export const useServerThemeEnabled = function useServerThemeEnabled(guildId, useGuildPowerupNewPerkMarketingVersion) {
  const obj = { guildId, location: useGuildPowerupNewPerkMarketingVersion };
  const tmp = experiment;
  experiment = experiment.useExperiment(obj, { autoTrackExposure: false });
  const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
  let tmp3 = guildId;
  const useConfig = ServerThemeApexShadowExperiment.useConfig;
  if (guildId == null) {
    tmp3 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = { guildId: tmp3, location: useGuildPowerupNewPerkMarketingVersion };
  let defaultConfig = useConfig(obj2);
  if (!experiment.inExperiment) {
    if (null == guildId) {
      defaultConfig = tmp.definition.defaultConfig;
    }
    experiment = defaultConfig;
  }
  return experiment.enabled;
};
export const getServerThemeRollbackEnabled = function getServerThemeRollbackEnabled(guildId, GuildPowerupsManager) {
  let defaultConfig;
  const obj = { guildId, location: GuildPowerupsManager };
  let currentConfig = experiment.getCurrentConfig(obj, { autoTrackExposure: false });
  const tmp = experiment;
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
    const obj2 = { guildId, location: GuildPowerupsManager };
    defaultConfig = ServerThemeApexShadowExperiment.getConfig(obj2);
  } else {
    defaultConfig = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment.definition.defaultConfig;
  }
  if (!currentConfig.inExperiment) {
    if (null == guildId) {
      defaultConfig = tmp.definition.defaultConfig;
    }
    currentConfig = defaultConfig;
  }
  return currentConfig.rollbackEnabled;
};
export const useServerThemeRollbackEnabled = function useServerThemeRollbackEnabled(guildId, useGuildPowerupNewPerkMarketingVersion) {
  const obj = { guildId, location: useGuildPowerupNewPerkMarketingVersion };
  const tmp = experiment;
  experiment = experiment.useExperiment(obj, { autoTrackExposure: false });
  const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
  let tmp3 = guildId;
  const useConfig = ServerThemeApexShadowExperiment.useConfig;
  if (guildId == null) {
    tmp3 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = { guildId: tmp3, location: useGuildPowerupNewPerkMarketingVersion };
  let defaultConfig = useConfig(obj2);
  if (!experiment.inExperiment) {
    if (null == guildId) {
      defaultConfig = tmp.definition.defaultConfig;
    }
    experiment = defaultConfig;
  }
  return experiment.rollbackEnabled;
};
