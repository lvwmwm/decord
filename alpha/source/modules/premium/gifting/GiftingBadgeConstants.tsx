// Module ID: 11386
// Function ID: 11387
// Name: GiftingBadgeConstants
// Dependencies: [8540, 2]
// Exports: getNextTierForProgress, getRemainingGiftsToNextTier, getTierForProgress

// Module 11386 (GiftingBadgeConstants)
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8540 */;
import size from "module_2" /* 2 */;

let closure_0 = BadgeDirectoryStore.getSingleRequirementThreshold;
const result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgeConstants.tsx");

export const getTierForProgress = function getTierForProgress(arr, arg1) {
  closure_0 = arg1;
  return arr.reduce((acc, item) => {
    let tmp = acc;
    const tmp3 = closure_0(item);
    let tmp4 = acc;
    if (closure_0 >= tmp3) {
      if (null == tmp) {
        tmp = item;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }, null);
};
export const getNextTierForProgress = function getNextTierForProgress(arr, arg1) {
  closure_0 = arg1;
  return arr.reduce((acc, item) => {
    let tmp = acc;
    const tmp3 = closure_0(item);
    let tmp4 = acc;
    if (closure_0 < tmp3) {
      if (null == tmp) {
        tmp = item;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }, null);
};
export const getRemainingGiftsToNextTier = function getRemainingGiftsToNextTier(arr, arg1) {
  closure_0 = arg1;
  const reduced = arr.reduce((acc, item) => {
    let tmp = acc;
    const tmp3 = closure_0(item);
    let tmp4 = acc;
    if (closure_0 < tmp3) {
      if (null == tmp) {
        tmp = item;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }, null);
  let diff = null;
  if (null != reduced) {
    diff = closure_0(reduced) - arg1;
  }
  return diff;
};
