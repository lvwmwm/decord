// Module ID: 16258
// Function ID: 16259
// Name: BountyCtaHelpers
// Dependencies: [2]
// Exports: getBountyCtaInfo

// Module 16258 (BountyCtaHelpers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  return { label: bounty.productName, buttonLabel: bounty.cta.buttonLabel, iconImageUri: bounty.productIcon };
};
