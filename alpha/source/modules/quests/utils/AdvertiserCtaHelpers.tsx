// Module ID: 16358
// Function ID: 16359
// Name: AdvertiserCtaHelpers
// Dependencies: [2]
// Exports: getAdvertiserCtaInfo

// Module 16358 (AdvertiserCtaHelpers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/AdvertiserCtaHelpers.tsx");

export function getAdvertiserCtaInfo(bounty) {
  return { label: bounty.productName, buttonLabel: bounty.cta.buttonLabel, iconImageUri: bounty.productIcon };
}
