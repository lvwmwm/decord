// Module ID: 12228
// Function ID: 12229
// Name: UserProfileEmbedRenderingMobileExperiment
// Dependencies: [1450, 2]
// Exports: getIsUserProfileEmbedRenderingMobileEnabled

// Module 12228 (UserProfileEmbedRenderingMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-11-profile-embed-rendering-mobile", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileEmbedRenderingMobileExperiment.tsx");

export function getIsUserProfileEmbedRenderingMobileEnabled(MessageCodedLinkManager) {
  const obj = { location: MessageCodedLinkManager };
  return config.getConfig(obj).enabled;
}
