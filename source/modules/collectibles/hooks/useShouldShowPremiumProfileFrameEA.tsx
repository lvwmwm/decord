// Module ID: 13161
// Function ID: 13162
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8212, 8831, 2]
// Exports: default

// Module 13161 (useShouldShowPremiumProfileFrameEA)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 8212 */;
import apexExperiment2 from "apexExperiment" /* 8831 */;
import apexExperimentDefault from "apexExperiment" /* 8831 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
