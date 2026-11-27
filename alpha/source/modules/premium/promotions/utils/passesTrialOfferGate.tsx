// Module ID: 9403
// Function ID: 9404
// Name: passesTrialOfferGate
// Dependencies: [2]
// Exports: default

// Module 9403 (passesTrialOfferGate)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/promotions/utils/passesTrialOfferGate.tsx");

export default function passesTrialOfferGate(trialId, getUserTrialOffer) {
  trialId = undefined;
  if (trialId != null) {
    trialId = trialId.trialId;
  }
  if (null == trialId) {
    return true;
  } else {
    const userTrialOffer = getUserTrialOffer.getUserTrialOffer(trialId.trialId);
    return null != userTrialOffer && !userTrialOffer.hasExpired;
  }
};
