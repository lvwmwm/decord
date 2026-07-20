// Module ID: 14889
// Function ID: 112211
// Name: apexExperiment
// Dependencies: []

// Module 14889 (apexExperiment)
let obj = { MEDIUM: "medium", LARGE: "large" };
const _module = require(dependencyMap[0]);
obj = { enabled: true, bannerSize: obj.LARGE };
obj = { enabled: true, bannerSize: obj.MEDIUM };
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: obj, [2]: obj } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/application_account_linking/experiments/mobileAccountLinkingExperiment.tsx");

export default apexExperiment;
export const MobileAccountLinkingBannerSize = obj;
