// Module ID: 9783
// Function ID: 76034
// Name: EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS
// Dependencies: []
// Exports: getDesiredAnimationConfigs

// Module 9783 (EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS)
const obj = {};
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/virtual_currency/shared/AnimationUtils.tsx");

export const EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS = 3000;
export const ORB_LOTTIE_COUNTER_ANIMATION_FACTORS = obj;
export const getDesiredAnimationConfigs = function getDesiredAnimationConfigs(diff, EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS) {
  let str = "SPEND";
  if (diff > 0) {
    str = "EARN";
  }
  const result = EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS * obj[str];
  const obj = { duration: result };
  let num = 0;
  if (diff > 0) {
    num = EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS - result;
  }
  obj.delay = num;
  return obj;
};
