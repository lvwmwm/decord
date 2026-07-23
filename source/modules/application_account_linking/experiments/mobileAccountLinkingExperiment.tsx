// Module ID: 15023
// Function ID: 114480
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 15023 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { MEDIUM: "medium", LARGE: "large" };
obj = { name: "2026-02-mobile-account-linking", kind: "user", defaultConfig: { enabled: false } };
obj = { enabled: true, bannerSize: obj.LARGE };
obj.variations = { [0]: { enabled: false }, [1]: obj, [2]: { enabled: true, bannerSize: obj.MEDIUM } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/application_account_linking/experiments/mobileAccountLinkingExperiment.tsx");

export default apexExperiment;
export const MobileAccountLinkingBannerSize = obj;
