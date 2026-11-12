// Module ID: 14352
// Function ID: 14353
// Name: canBoostGuildFromMobile
// Dependencies: [2]
// Exports: default

// Module 14352 (canBoostGuildFromMobile)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/canBoostGuildFromMobile.tsx");

export default function canBoostGuildFromMobile(hasFetchedSubscriptions) {
  let boostsNeeded;
  let hasFetchedBoostSlots;
  let isPurchaseBlocked;
  ({ isPurchaseBlocked, hasFetchedBoostSlots, boostsNeeded } = hasFetchedSubscriptions);
  let prop = hasFetchedSubscriptions.hasFetchedSubscriptions;
  if (prop) {
    if (isPurchaseBlocked) {
      isPurchaseBlocked = !hasFetchedSubscriptions.isWebRedirectCheckoutEnabled;
    }
    let tmp3 = !isPurchaseBlocked;
    if (isPurchaseBlocked) {
      if (hasFetchedBoostSlots) {
        hasFetchedBoostSlots = boostsNeeded > 0;
      }
      if (hasFetchedBoostSlots) {
        hasFetchedBoostSlots = tmp >= boostsNeeded;
      }
      tmp3 = hasFetchedBoostSlots;
    }
    prop = tmp3;
  }
  return prop;
};
