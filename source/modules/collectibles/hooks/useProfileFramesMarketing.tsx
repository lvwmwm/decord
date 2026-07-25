// Module ID: 15687
// Function ID: 121038
// Name: deriveProfileFramesMarketing
// Dependencies: [1850, 8632, 15688, 8598, 566, 8031, 8633, 2]
// Exports: getProfileFramesMarketing, useProfileFramesMarketing

// Module 15687 (deriveProfileFramesMarketing)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function deriveProfileFramesMarketing(arg0) {
  let canViewProfileFramesInCollectiblesShop;
  let hasPaidTier2;
  let isEarlyAccess;
  let isFrameGiftingEnabled;
  let isFramesEAMarketingEnabled;
  ({ canViewProfileFramesInCollectiblesShop, isEarlyAccess, isFramesEAMarketingEnabled, hasPaidTier2, isFrameGiftingEnabled } = arg0);
  if (canViewProfileFramesInCollectiblesShop) {
    canViewProfileFramesInCollectiblesShop = !isEarlyAccess;
  }
  const obj = {};
  let tmp = canViewProfileFramesInCollectiblesShop;
  if (!canViewProfileFramesInCollectiblesShop) {
    let tmp2 = isEarlyAccess;
    if (isEarlyAccess) {
      tmp2 = isFramesEAMarketingEnabled;
    }
    tmp = tmp2;
  }
  obj.isAnnouncementEligible = tmp;
  obj.isEarlyAccess = isEarlyAccess;
  if (canViewProfileFramesInCollectiblesShop) {
    canViewProfileFramesInCollectiblesShop = isFrameGiftingEnabled;
  }
  obj.showGiftingMarketing = canViewProfileFramesInCollectiblesShop;
  let tmp3 = isEarlyAccess;
  if (isEarlyAccess) {
    tmp3 = isFramesEAMarketingEnabled;
  }
  if (tmp3) {
    tmp3 = hasPaidTier2;
  }
  obj.showEaPremiumMarketing = tmp3;
  if (isEarlyAccess) {
    isEarlyAccess = isFramesEAMarketingEnabled;
  }
  if (isEarlyAccess) {
    isEarlyAccess = !hasPaidTier2;
  }
  obj.showEaNonPremiumMarketing = isEarlyAccess;
  return obj;
}
const result = require("apexExperiment").fileFinishedImporting("modules/collectibles/hooks/useProfileFramesMarketing.tsx");

export { deriveProfileFramesMarketing };
export const useProfileFramesMarketing = function useProfileFramesMarketing(CollectiblesMobileAnnouncementActionSheet) {
  const obj = { canViewProfileFramesInCollectiblesShop: require(8632) /* isUserPaidTier2 */.useCanViewProfileFramesInCollectiblesShop(CollectiblesMobileAnnouncementActionSheet) };
  const obj2 = require(8632) /* isUserPaidTier2 */;
  obj.isEarlyAccess = require(8632) /* isUserPaidTier2 */.useIsProfileFramesEarlyAccessPhase(CollectiblesMobileAnnouncementActionSheet);
  const obj3 = require(8632) /* isUserPaidTier2 */;
  obj.isFramesEAMarketingEnabled = require(15688) /* apexExperiment */.useIsProfileFramesEAMarketingEnabled(CollectiblesMobileAnnouncementActionSheet);
  const obj4 = require(15688) /* apexExperiment */;
  obj.isFrameGiftingEnabled = require(8598) /* apexExperiment */.useIsProfileFrameGiftingEnabled(CollectiblesMobileAnnouncementActionSheet);
  const obj5 = require(8598) /* apexExperiment */;
  const items = [_isNativeReflectConstruct];
  obj.hasPaidTier2 = require(566) /* initialize */.useStateFromStores(items, () => outer1_0(outer1_2[1]).isUserPaidTier2(outer1_3.getCurrentUser()));
  return deriveProfileFramesMarketing(obj);
};
export const getProfileFramesMarketing = function getProfileFramesMarketing(location) {
  let obj = importDefault(8031);
  obj = { location };
  let enableProfileFrames = obj.getConfig(obj).enableProfileFrames;
  obj = { location };
  const bucket = importDefault(8633).getConfig(obj).bucket;
  const obj1 = {};
  let tmp2 = enableProfileFrames;
  if (enableProfileFrames) {
    tmp2 = bucket !== require(8633) /* apexExperiment */.ProfileFramesPurchaseBucket.CONTROL;
  }
  obj1.canViewProfileFramesInCollectiblesShop = tmp2;
  if (enableProfileFrames) {
    enableProfileFrames = bucket === require(8633) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  obj1.isEarlyAccess = enableProfileFrames;
  const obj3 = importDefault(8633);
  const tmp = deriveProfileFramesMarketing;
  obj1.isFramesEAMarketingEnabled = require(15688) /* apexExperiment */.getIsProfileFramesEAMarketingEnabled(location);
  const obj6 = require(15688) /* apexExperiment */;
  obj1.isFrameGiftingEnabled = require(8598) /* apexExperiment */.getIsProfileFrameGiftingEnabled(location);
  const obj7 = require(8598) /* apexExperiment */;
  obj1.hasPaidTier2 = require(8632) /* isUserPaidTier2 */.isUserPaidTier2(currentUser.getCurrentUser());
  return tmp(obj1);
};
