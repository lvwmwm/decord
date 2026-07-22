// Module ID: 12876
// Function ID: 98372
// Name: apexExperiment
// Dependencies: []

// Module 12876 (apexExperiment)
let obj = { CONTROL: 0, [0]: "CONTROL", DUAL_READ_RETURN_OLD: 1, [1]: "DUAL_READ_RETURN_OLD", DUAL_READ_RETURN_NEW: 2, [2]: "DUAL_READ_RETURN_NEW" };
const _module = require(dependencyMap[0]);
obj = { y: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012487114522313853, DateToSystemTimezoneSetter: 287995.4036114514 };
obj.defaultConfig = obj.CONTROL;
obj.variations = { [0]: obj.CONTROL, [1]: obj.DUAL_READ_RETURN_OLD, [2]: obj.DUAL_READ_RETURN_NEW };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/DenormalizedPerksReadExperiment.tsx");

export default apexExperiment;
export const DenormalizedPerksReadConfig = obj;
