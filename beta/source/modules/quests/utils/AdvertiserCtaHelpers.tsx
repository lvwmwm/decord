// Module ID: 16368
// Function ID: 16369
// Name: AdvertiserCtaHelpers
// Dependencies: [2]
// Exports: getAdvertiserCtaInfo

// Module 16368 (AdvertiserCtaHelpers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/AdvertiserCtaHelpers.tsx");

export function getAdvertiserCtaInfo(bounty) {
  return { label: bounty.productName, buttonLabel: bounty.cta.buttonLabel, iconImageUri: bounty.productIcon };
}
