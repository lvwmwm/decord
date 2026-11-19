// Module ID: 16415
// Function ID: 16416
// Name: AdvertiserCtaHelpers
// Dependencies: [2]
// Exports: getAdvertiserCtaInfo

// Module 16415 (AdvertiserCtaHelpers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/AdvertiserCtaHelpers.tsx");

export function getAdvertiserCtaInfo(bounty) {
  return { label: bounty.productName, buttonLabel: bounty.cta.buttonLabel, iconImageUri: bounty.productIcon };
}
