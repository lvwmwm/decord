// Module ID: 15494
// Function ID: 118268
// Name: deriveProfileFramesMarketing
// Dependencies: []
// Exports: getProfileFramesMarketing, useProfileFramesMarketing

// Module 15494 (deriveProfileFramesMarketing)
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
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/collectibles/hooks/useProfileFramesMarketing.tsx");

export { deriveProfileFramesMarketing };
export const useProfileFramesMarketing = function useProfileFramesMarketing(CollectiblesMobileAnnouncementActionSheet) {
  const obj = { canViewProfileFramesInCollectiblesShop: arg1(dependencyMap[1]).useCanViewProfileFramesInCollectiblesShop(CollectiblesMobileAnnouncementActionSheet) };
  const obj2 = arg1(dependencyMap[1]);
  obj.isEarlyAccess = arg1(dependencyMap[1]).useIsProfileFramesEarlyAccessPhase(CollectiblesMobileAnnouncementActionSheet);
  const obj3 = arg1(dependencyMap[1]);
  obj.isFramesEAMarketingEnabled = arg1(dependencyMap[2]).useIsProfileFramesEAMarketingEnabled(CollectiblesMobileAnnouncementActionSheet);
  const obj4 = arg1(dependencyMap[2]);
  obj.isFrameGiftingEnabled = arg1(dependencyMap[3]).useIsProfileFrameGiftingEnabled(CollectiblesMobileAnnouncementActionSheet);
  const obj5 = arg1(dependencyMap[3]);
  const items = [closure_3];
  obj.hasPaidTier2 = arg1(dependencyMap[4]).useStateFromStores(items, () => callback(closure_2[1]).isUserPaidTier2(currentUser.getCurrentUser()));
  return deriveProfileFramesMarketing(obj);
};
export const getProfileFramesMarketing = function getProfileFramesMarketing(location) {
  let obj = importDefault(dependencyMap[5]);
  obj = { location };
  let enableProfileFrames = obj.getConfig(obj).enableProfileFrames;
  obj = { location };
  const bucket = importDefault(dependencyMap[6]).getConfig(obj).bucket;
  const obj1 = {};
  let tmp2 = enableProfileFrames;
  if (enableProfileFrames) {
    tmp2 = bucket !== arg1(dependencyMap[6]).ProfileFramesPurchaseBucket.CONTROL;
  }
  obj1.canViewProfileFramesInCollectiblesShop = tmp2;
  if (enableProfileFrames) {
    enableProfileFrames = bucket === arg1(dependencyMap[6]).ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  obj1.isEarlyAccess = enableProfileFrames;
  const obj3 = importDefault(dependencyMap[6]);
  const tmp = deriveProfileFramesMarketing;
  obj1.isFramesEAMarketingEnabled = arg1(dependencyMap[2]).getIsProfileFramesEAMarketingEnabled(location);
  const obj6 = arg1(dependencyMap[2]);
  obj1.isFrameGiftingEnabled = arg1(dependencyMap[3]).getIsProfileFrameGiftingEnabled(location);
  const obj7 = arg1(dependencyMap[3]);
  obj1.hasPaidTier2 = arg1(dependencyMap[1]).isUserPaidTier2(currentUser.getCurrentUser());
  return tmp(obj1);
};
