// Module ID: 15019
// Function ID: 114325
// Name: commonTriggerPointConfiguration
// Dependencies: [4080, 6276, 2]

// Module 15019 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
