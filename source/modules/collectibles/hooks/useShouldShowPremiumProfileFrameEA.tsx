// Module ID: 12044
// Function ID: 12045
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8993, 9271, 2]
// Exports: default

// Module 12044 (useShouldShowPremiumProfileFrameEA)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 8993 */;
import apexExperiment2 from "apexExperiment" /* 9271 */;
import apexExperimentDefault from "apexExperiment" /* 9271 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
