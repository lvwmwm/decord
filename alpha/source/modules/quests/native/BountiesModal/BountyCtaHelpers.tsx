// Module ID: 15959
// Function ID: 15960
// Name: BountyCtaHelpers
// Dependencies: [2]
// Exports: getBountyCtaInfo

// Module 15959 (BountyCtaHelpers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  return { label: bounty.productName, buttonLabel: bounty.cta.buttonLabel, iconImageUri: bounty.productIcon };
};
