// Module ID: 14397
// Function ID: 14398
// Name: GiftingBadgeConstants
// Dependencies: [8755, 2]
// Exports: getNextTierForProgress, getRemainingGiftsToNextTier, getTierForProgress

// Module 14397 (GiftingBadgeConstants)
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8755 */;
import size from "module_2" /* 2 */;

let closure_0 = BadgeDirectoryStore.getSingleRequirementThreshold;
const result = size.fileFinishedImporting("modules/premium/gifting/GiftingBadgeConstants.tsx");

export function getTierForProgress(arr, arg1) {
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
}
export function getNextTierForProgress(arr, arg1) {
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
}
export function getRemainingGiftsToNextTier(arr, arg1) {
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
}
