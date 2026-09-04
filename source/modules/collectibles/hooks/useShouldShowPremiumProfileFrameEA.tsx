// Module ID: 13093
// Function ID: 13094
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8143, 8761, 2]
// Exports: default

// Module 13093 (useShouldShowPremiumProfileFrameEA)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 8143 */;
import apexExperiment2 from "apexExperiment" /* 8761 */;
import apexExperimentDefault from "apexExperiment" /* 8761 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
