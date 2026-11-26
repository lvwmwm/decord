// Module ID: 16372
// Function ID: 16373
// Name: AdvertiserCtaHelpers
// Dependencies: [2]
// Exports: getAdvertiserCtaInfo

// Module 16372 (AdvertiserCtaHelpers)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/AdvertiserCtaHelpers.tsx");

export function getAdvertiserCtaInfo(bounty) {
  return { label: bounty.productName, buttonLabel: bounty.cta.buttonLabel, iconImageUri: bounty.productIcon };
}
