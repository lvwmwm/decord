// Module ID: 20306
// Function ID: 20307
// Name: UserProfileEmbedRenderingExperiment
// Dependencies: [1452, 2]
// Exports: getIsUserProfileEmbedRenderingEnabled, useIsUserProfileEmbedRenderingEnabled

// Module 20306 (UserProfileEmbedRenderingExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-08-profile-embed-rendering", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileEmbedRenderingExperiment.tsx");

export function useIsUserProfileEmbedRenderingEnabled(location) {
  const obj = { location };
  return closure_0.useConfig(obj).enabled;
}
export function getIsUserProfileEmbedRenderingEnabled(MessageCodedLinkManager) {
  const obj = { location: MessageCodedLinkManager };
  return closure_0.getConfig(obj).enabled;
}
