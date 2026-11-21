// Module ID: 16360
// Function ID: 16361
// Name: AdvertiserCtaHelpers
// Dependencies: [2]
// Exports: getAdvertiserCtaInfo

// Module 16360 (AdvertiserCtaHelpers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/AdvertiserCtaHelpers.tsx");

export function getAdvertiserCtaInfo(bounty) {
  return { label: bounty.productName, buttonLabel: bounty.cta.buttonLabel, iconImageUri: bounty.productIcon };
}
