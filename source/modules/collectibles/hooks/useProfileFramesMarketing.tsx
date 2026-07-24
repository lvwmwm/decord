// Module ID: 15676
// Function ID: 120869
// Name: deriveProfileFramesMarketing
// Dependencies: [1849, 8744, 15677, 8710, 566, 8296, 8745, 2]
// Exports: getProfileFramesMarketing, useProfileFramesMarketing

// Module 15676 (deriveProfileFramesMarketing)
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
  const obj = { canViewProfileFramesInCollectiblesShop: require(8744) /* isUserPaidTier2 */.useCanViewProfileFramesInCollectiblesShop(CollectiblesMobileAnnouncementActionSheet) };
  const obj2 = require(8744) /* isUserPaidTier2 */;
  obj.isEarlyAccess = require(8744) /* isUserPaidTier2 */.useIsProfileFramesEarlyAccessPhase(CollectiblesMobileAnnouncementActionSheet);
  const obj3 = require(8744) /* isUserPaidTier2 */;
  obj.isFramesEAMarketingEnabled = require(15677) /* apexExperiment */.useIsProfileFramesEAMarketingEnabled(CollectiblesMobileAnnouncementActionSheet);
  const obj4 = require(15677) /* apexExperiment */;
  obj.isFrameGiftingEnabled = require(8710) /* apexExperiment */.useIsProfileFrameGiftingEnabled(CollectiblesMobileAnnouncementActionSheet);
  const obj5 = require(8710) /* apexExperiment */;
  const items = [_isNativeReflectConstruct];
  obj.hasPaidTier2 = require(566) /* initialize */.useStateFromStores(items, () => outer1_0(outer1_2[1]).isUserPaidTier2(outer1_3.getCurrentUser()));
  return deriveProfileFramesMarketing(obj);
};
export const getProfileFramesMarketing = function getProfileFramesMarketing(location) {
  let obj = importDefault(8296);
  obj = { location };
  let enableProfileFrames = obj.getConfig(obj).enableProfileFrames;
  obj = { location };
  const bucket = importDefault(8745).getConfig(obj).bucket;
  const obj1 = {};
  let tmp2 = enableProfileFrames;
  if (enableProfileFrames) {
    tmp2 = bucket !== require(8745) /* apexExperiment */.ProfileFramesPurchaseBucket.CONTROL;
  }
  obj1.canViewProfileFramesInCollectiblesShop = tmp2;
  if (enableProfileFrames) {
    enableProfileFrames = bucket === require(8745) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  obj1.isEarlyAccess = enableProfileFrames;
  const obj3 = importDefault(8745);
  const tmp = deriveProfileFramesMarketing;
  obj1.isFramesEAMarketingEnabled = require(15677) /* apexExperiment */.getIsProfileFramesEAMarketingEnabled(location);
  const obj6 = require(15677) /* apexExperiment */;
  obj1.isFrameGiftingEnabled = require(8710) /* apexExperiment */.getIsProfileFrameGiftingEnabled(location);
  const obj7 = require(8710) /* apexExperiment */;
  obj1.hasPaidTier2 = require(8744) /* isUserPaidTier2 */.isUserPaidTier2(currentUser.getCurrentUser());
  return tmp(obj1);
};
