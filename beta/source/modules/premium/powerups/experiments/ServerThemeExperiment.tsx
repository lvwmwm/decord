// Module ID: 13389
// Function ID: 13390
// Name: ServerThemeExperiment
// Dependencies: [1071, 5853, 13390, 2]
// Exports: getServerThemeEnabled, getServerThemeRollbackEnabled, resolveServerThemeConfig, useServerThemeEnabled, useServerThemeRollbackEnabled

// Module 13389 (ServerThemeExperiment)
import Constants from "Constants" /* 1071 */;
import ServerThemeApexShadowExperiment2 from "ServerThemeApexShadowExperiment" /* 13390 */;
import createExperiment from "module_5853" /* 5853 */;
import size from "module_2" /* 2 */;

let items;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let obj = { kind: "guild", id: "2026-04_server_theme", label: "Server Theme", defaultConfig: { enabled: false, inExperiment: false, gatesApex: false, rollbackEnabled: false }, treatments: items };
items = [{ id: 0, label: "Control", config: { enabled: false, inExperiment: true, gatesApex: false, rollbackEnabled: false } }, { id: 1, label: "Enable Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false, rollbackEnabled: false } }, { id: 2, label: "Rollback UI for Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false, rollbackEnabled: true } }];
let experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeExperiment.tsx");

export const ServerThemeExperiment = experiment;
export function resolveServerThemeConfig(inExperiment, gatesApex, arg2) {
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
}
export function getServerThemeEnabled(guildId, location) {
  let defaultConfig;
  const obj = { guildId, location };
  let currentConfig = experiment.getCurrentConfig(obj, { autoTrackExposure: false });
  const tmp = experiment;
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
    const obj2 = { guildId, location };
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
}
export function useServerThemeEnabled(guildId, location) {
  const obj = { guildId, location };
  const tmp = experiment;
  experiment = experiment.useExperiment(obj, { autoTrackExposure: false });
  const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
  let tmp3 = guildId;
  const useConfig = ServerThemeApexShadowExperiment.useConfig;
  if (guildId == null) {
    tmp3 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = { guildId: tmp3, location };
  let defaultConfig = useConfig(obj2);
  if (!experiment.inExperiment) {
    if (null == guildId) {
      defaultConfig = tmp.definition.defaultConfig;
    }
    experiment = defaultConfig;
  }
  return experiment.enabled;
}
export function getServerThemeRollbackEnabled(guildId, location) {
  let defaultConfig;
  const obj = { guildId, location };
  let currentConfig = experiment.getCurrentConfig(obj, { autoTrackExposure: false });
  const tmp = experiment;
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
    const obj2 = { guildId, location };
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
}
export function useServerThemeRollbackEnabled(guildId, useMarketablePowerupPerks) {
  const obj = { guildId, location: useMarketablePowerupPerks };
  const tmp = experiment;
  experiment = experiment.useExperiment(obj, { autoTrackExposure: false });
  const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
  let tmp3 = guildId;
  const useConfig = ServerThemeApexShadowExperiment.useConfig;
  if (guildId == null) {
    tmp3 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = { guildId: tmp3, location: useMarketablePowerupPerks };
  let defaultConfig = useConfig(obj2);
  if (!experiment.inExperiment) {
    if (null == guildId) {
      defaultConfig = tmp.definition.defaultConfig;
    }
    experiment = defaultConfig;
  }
  return experiment.rollbackEnabled;
}
