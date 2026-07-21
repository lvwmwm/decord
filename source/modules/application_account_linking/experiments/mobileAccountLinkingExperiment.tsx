// Module ID: 14899
// Function ID: 112269
// Name: apexExperiment
// Dependencies: []

// Module 14899 (apexExperiment)
let obj = { MEDIUM: "medium", LARGE: "large" };
const _module = require(dependencyMap[0]);
obj = { 844175713: "r", 1387159956: 148, defaultConfig: { enabled: false } };
obj = { enabled: true, bannerSize: obj.LARGE };
obj.variations = { [0]: { enabled: false }, [1]: obj, [2]: { enabled: true, bannerSize: obj.MEDIUM } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/application_account_linking/experiments/mobileAccountLinkingExperiment.tsx");

export default apexExperiment;
export const MobileAccountLinkingBannerSize = obj;
