// Module ID: 8803
// Function ID: 69416
// Name: apexExperiment
// Dependencies: []

// Module 8803 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { maskRemainder: "y", overflow: "isArray", member_ids_preview: "Reflect" }, variations: { [1]: { maskRemainder: true, overflow: false, member_ids_preview: false }, [2]: {}, [3]: {} } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/gifting/experiments/NitroGiftPriceCopyExperiment.tsx");

export default apexExperiment;
