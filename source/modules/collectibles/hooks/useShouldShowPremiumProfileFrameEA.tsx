// Module ID: 12570
// Function ID: 12571
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8544, 12531, 2]
// Exports: default

// Module 12570 (useShouldShowPremiumProfileFrameEA)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 8544 */;
import apexExperiment2 from "apexExperiment" /* 12531 */;
import apexExperimentDefault from "apexExperiment" /* 12531 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
