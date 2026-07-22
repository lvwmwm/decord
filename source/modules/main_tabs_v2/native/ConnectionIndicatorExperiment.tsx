// Module ID: 12499
// Function ID: 95797
// Name: apexExperiment
// Dependencies: []

// Module 12499 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { timeoutMs: undefined, hidden: true }, variations: { [1]: { PremiumSubscriptionSKUToPremiumType: true, _httpStatus: true }, [2]: {}, [3]: {}, [4]: { PremiumSubscriptionSKUToPremiumType: true, _httpStatus: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/main_tabs_v2/native/ConnectionIndicatorExperiment.tsx");

export default apexExperiment;
