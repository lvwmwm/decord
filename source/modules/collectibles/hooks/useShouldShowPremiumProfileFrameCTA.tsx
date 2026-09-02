// Module ID: 12793
// Function ID: 12794
// Name: useShouldShowPremiumProfileFrameCTA
// Dependencies: [12794, 12754, 1949, 2]
// Exports: default

// Module 12793 (useShouldShowPremiumProfileFrameCTA)
import set from "set" /* 2 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import useCanPurchaseFramesDefault from "useCanPurchaseFrames" /* 12754 */;
import useShouldShowPremiumProfileFrameEADefault from "useShouldShowPremiumProfileFrameEA" /* 12794 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = useShouldShowPremiumProfileFrameEADefault(_location) && !useCanPurchaseFramesDefault(_location);
  if (tmp2) {
    tmp2 = location.product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};
