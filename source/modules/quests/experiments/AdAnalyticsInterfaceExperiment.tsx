// Module ID: 9441
// Function ID: 73572
// Name: apexExperiment
// Dependencies: []
// Exports: shouldMigrateToAdAnalyticsInterface

// Module 9441 (apexExperiment)
let obj = { STEP_1_LOADED: 0, [0]: "STEP_1_LOADED", STEP_2_CLICKED_INTERNAL: 1, [1]: "STEP_2_CLICKED_INTERNAL", STEP_3_CLICKED_EXTERNAL: 2, [2]: "STEP_3_CLICKED_EXTERNAL", STEP_4_VIEWED_NON_IMPRESSION: 3, [3]: "STEP_4_VIEWED_NON_IMPRESSION", STEP_5_VIEWED_IMPRESSION: 4, [4]: "STEP_5_VIEWED_IMPRESSION" };
const _module = require(dependencyMap[0]);
obj = { enabled: true, maxStep: obj.STEP_1_LOADED };
obj = { enabled: true, maxStep: obj.STEP_2_CLICKED_INTERNAL };
const apexExperiment = _module.createApexExperiment({ defaultConfig: { flexDirection: 1, alignItems: "solid" }, variations: { [0]: { flexDirection: 1, alignItems: "solid" }, [1]: obj, [2]: obj, [3]: { enabled: true, maxStep: obj.STEP_3_CLICKED_EXTERNAL }, [4]: { enabled: true, maxStep: obj.STEP_4_VIEWED_NON_IMPRESSION }, [5]: { enabled: true, maxStep: obj.STEP_5_VIEWED_IMPRESSION } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/AdAnalyticsInterfaceExperiment.tsx");

export const AdAnalyticsInterfaceExperimentStep = obj;
export const AdAnalyticsInterfaceExperiment = apexExperiment;
export const shouldMigrateToAdAnalyticsInterface = function shouldMigrateToAdAnalyticsInterface(STEP_2_CLICKED_INTERNAL, quest_bottom_sheet_console_connect) {
  const config = apexExperiment.getConfig({ location: quest_bottom_sheet_console_connect });
  let enabled = config.enabled;
  if (enabled) {
    enabled = STEP_2_CLICKED_INTERNAL <= config.maxStep;
  }
  return enabled;
};
