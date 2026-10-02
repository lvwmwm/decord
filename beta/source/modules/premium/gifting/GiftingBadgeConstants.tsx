// Module ID: 10527
// Function ID: 10528
// Name: GiftingBadgeConstants
// Dependencies: [7641, 2]
// Exports: getNextTierForProgress, getRemainingGiftsToNextTier, getTierForProgress

// Module 10527 (GiftingBadgeConstants)
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7641 */;
import size from "module_2" /* 2 */;

let closure_0 = BadgeDirectoryStore.getSingleRequirementThreshold;
const result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgeConstants.tsx");

export const getTierForProgress = function getTierForProgress(arr, arg1) {
  closure_0 = arg1;
  return arr.reduce((acc, item) => {
    let tmp = acc;
    let tmp4 = acc;
    const tmp3 = closure_0(item);
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
    let tmp4 = acc;
    const tmp3 = closure_0(item);
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
    let tmp4 = acc;
    const tmp3 = closure_0(item);
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
    let tmp3 = closure_0;
    diff = closure_0(reduced) - arg1;
  }
  return diff;
};
