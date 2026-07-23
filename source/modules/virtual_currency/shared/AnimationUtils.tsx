// Module ID: 9796
// Function ID: 76115
// Name: EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS
// Dependencies: [2]
// Exports: getDesiredAnimationConfigs

// Module 9796 (EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS)
let obj = { EARN: 0.25, SPEND: 0.3 };
let result = require("set").fileFinishedImporting("modules/virtual_currency/shared/AnimationUtils.tsx");

export const EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS = 3000;
export const ORB_LOTTIE_COUNTER_ANIMATION_FACTORS = obj;
export const getDesiredAnimationConfigs = function getDesiredAnimationConfigs(diff, EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS) {
  let str = "SPEND";
  if (diff > 0) {
    str = "EARN";
  }
  const result = EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS * obj[str];
  obj = { duration: result };
  let num = 0;
  if (diff > 0) {
    num = EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS - result;
  }
  obj.delay = num;
  return obj;
};
