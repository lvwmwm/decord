// Module ID: 14833
// Function ID: 14834
// Name: BountyCtaHelpers
// Dependencies: [2]
// Exports: getBountyCtaInfo

// Module 14833 (BountyCtaHelpers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyCtaHelpers.tsx");

export const getBountyCtaInfo = function getBountyCtaInfo(bounty) {
  return { label: bounty.productName, buttonLabel: bounty.cta.buttonLabel, iconImageUri: bounty.productIcon };
};
