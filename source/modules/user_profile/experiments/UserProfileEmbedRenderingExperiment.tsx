// Module ID: 8276
// Function ID: 8277
// Name: useIsUserProfileEmbedRenderingEnabled
// Dependencies: [1471, 2]
// Exports: getIsUserProfileEmbedRenderingEnabled, useIsUserProfileEmbedRenderingEnabled

// Module 8276 (useIsUserProfileEmbedRenderingEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-08-profile-embed-rendering", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/user_profile/experiments/UserProfileEmbedRenderingExperiment.tsx");

export const useIsUserProfileEmbedRenderingEnabled = function useIsUserProfileEmbedRenderingEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const getIsUserProfileEmbedRenderingEnabled = function getIsUserProfileEmbedRenderingEnabled(MarkupPostProcessors) {
  return closure_0.getConfig({ location: MarkupPostProcessors }).enabled;
};
