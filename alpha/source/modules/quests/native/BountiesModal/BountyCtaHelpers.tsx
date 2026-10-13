// Module ID: 15626
// Function ID: 15627
// Name: BountyCtaHelpers
// Dependencies: [2]
// Exports: getBountyCtaInfo

// Module 15626 (BountyCtaHelpers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  return { label: bounty.productName, buttonLabel: bounty.cta.buttonLabel, iconImageUri: bounty.productIcon };
};
