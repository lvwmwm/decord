// Module ID: 12806
// Function ID: 12807
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8561, 12767, 2]
// Exports: default

// Module 12806 (useShouldShowPremiumProfileFrameEA)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 8561 */;
import apexExperiment2 from "apexExperiment" /* 12767 */;
import apexExperimentDefault from "apexExperiment" /* 12767 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
