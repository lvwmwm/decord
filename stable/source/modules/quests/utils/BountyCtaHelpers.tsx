// Module ID: 16074
// Function ID: 16075
// Name: BountyCtaHelpers
// Dependencies: [2]
// Exports: getBountyCtaInfo

// Module 16074 (BountyCtaHelpers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  return { label: bounty.productName, buttonLabel: bounty.cta.buttonLabel, iconImageUri: bounty.productIcon };
};
