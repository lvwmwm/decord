// Module ID: 14790
// Function ID: 111454
// Name: commonTriggerPointConfiguration
// Dependencies: []

// Module 14790 (commonTriggerPointConfiguration)
const commonTriggerPointConfiguration = new require(dependencyMap[1]).CommonTriggerPointConfiguration([], require(dependencyMap[0]).CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
