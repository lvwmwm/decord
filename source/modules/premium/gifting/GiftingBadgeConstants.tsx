// Module ID: 9839
// Function ID: 76345
// Name: getNextTierForProgress
// Dependencies: [8312, 2]
// Exports: getRemainingGiftsToNextTier, getTierForProgress

// Module 9839 (getNextTierForProgress)
import { getSingleRequirementThreshold as closure_0 } from "_isNativeReflectConstruct";

function getNextTierForProgress(arr, arg1) {
  let closure_0 = arg1;
  return arr.reduce((arg0, arg1) => {
    let tmp = arg0;
    const tmp2 = callback(arg1);
    let tmp3 = arg0;
    if (callback < tmp2) {
      if (null == tmp) {
        tmp = arg1;
      }
      tmp3 = tmp;
    }
    return tmp3;
  }, null);
}
const result = require("set").fileFinishedImporting("modules/premium/gifting/GiftingBadgeConstants.tsx");

export const getTierForProgress = function getTierForProgress(arr) {
  let closure_0 = arg1;
  return arr.reduce((arg0, arg1) => {
    let tmp = arg0;
    const tmp2 = callback(arg1);
    let tmp3 = arg0;
    if (callback >= tmp2) {
      if (null == tmp) {
        tmp = arg1;
      }
      tmp3 = tmp;
    }
    return tmp3;
  }, null);
};
export { getNextTierForProgress };
export const getRemainingGiftsToNextTier = function getRemainingGiftsToNextTier(arr) {
  const tmp = getNextTierForProgress(arr, arg1);
  let diff = null;
  if (null != tmp) {
    diff = callback(tmp) - arg1;
  }
  return diff;
};
