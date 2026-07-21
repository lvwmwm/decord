// Module ID: 9799
// Function ID: 76086
// Name: getNextTierForProgress
// Dependencies: []
// Exports: getRemainingGiftsToNextTier, getTierForProgress

// Module 9799 (getNextTierForProgress)
function getNextTierForProgress(arr, arg1) {
  let closure_0 = arg1;
  return arr.reduce((arg0, arg1) => {
    let tmp = arg0;
    const tmp2 = arg1(arg1);
    let tmp3 = arg0;
    if (arg1 < tmp2) {
      if (null == tmp) {
        tmp = arg1;
      }
      tmp3 = tmp;
    }
    return tmp3;
  }, null);
}
let closure_0 = require(dependencyMap[0]).getSingleRequirementThreshold;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/premium/gifting/GiftingBadgeConstants.tsx");

export const getTierForProgress = function getTierForProgress(arr) {
  let closure_0 = arg1;
  return arr.reduce((arg0, arg1) => {
    let tmp = arg0;
    const tmp2 = arg1(arg1);
    let tmp3 = arg0;
    if (arg1 >= tmp2) {
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
