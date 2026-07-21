// Module ID: 12867
// Function ID: 98317
// Name: apexExperiment
// Dependencies: []

// Module 12867 (apexExperiment)
let obj = { CONTROL: 0, [0]: "CONTROL", DUAL_READ_RETURN_OLD: 1, [1]: "DUAL_READ_RETURN_OLD", DUAL_READ_RETURN_NEW: 2, [2]: "DUAL_READ_RETURN_NEW" };
const _module = require(dependencyMap[0]);
obj = { 9223372036854775807: true, 0: "/assets/images/native/status" };
obj.defaultConfig = obj.CONTROL;
obj.variations = { [0]: obj.CONTROL, [1]: obj.DUAL_READ_RETURN_OLD, [2]: obj.DUAL_READ_RETURN_NEW };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/DenormalizedPerksReadExperiment.tsx");

export default apexExperiment;
export const DenormalizedPerksReadConfig = obj;
