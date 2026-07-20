// Module ID: 12264
// Function ID: 94041
// Name: apexExperiment
// Dependencies: []

// Module 12264 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeExperiment.tsx");

export default apexExperiment;
