// Module ID: 12503
// Function ID: 12504
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8490, 12464, 2]
// Exports: default

// Module 12503 (useShouldShowPremiumProfileFrameEA)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 8490 */;
import apexExperiment2 from "apexExperiment" /* 12464 */;
import apexExperimentDefault from "apexExperiment" /* 12464 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
