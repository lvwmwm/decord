// Module ID: 7068
// Function ID: 56498
// Name: getStepwiseValue
// Dependencies: []
// Exports: getComboPercentage, getComboScore, getComboShakeIntensity, getComboStyles

// Module 7068 (getStepwiseValue)
function getStepwiseValue(userCombo, items, arg2) {
  let arr;
  let multiplier;
  let value;
  let num = arg2;
  [arr, ] = items;
  ({ multiplier, value } = userCombo);
  if (num === undefined) {
    num = 1;
  }
  let result;
  result = value * multiplier;
  if (result <= 0) {
    return 0;
  } else {
    const _Math = Math;
    return Math.min(num, arr.reduce((arg0, arg1, arg2) => {
      let tmp = arg0;
      if (result > arg1) {
        if (arg2 + 1 === length.length) {
          return closure_1[arg2];
        } else {
          return (result - arg1) / (length[arg2 + 1] - arg1) * (closure_1[arg2 + 1] - tmp5) + tmp5;
        }
      } else {
        if (result === arg1) {
          tmp = closure_1[arg2];
        }
        return tmp;
      }
    }, 0));
  }
}
const _module = require(dependencyMap[0]);
({ ShakeLevel: closure_2, SHAKE_STEPS: closure_3, SHAKE_STEP_DIVIDER: closure_4 } = _module);
const items = [["replay_event", "replay_recording"], [false, false], ["<string:290521089>", "<string:504783377>"], [true, true], [null, null], [0.000000000000000000000000000000000000000000000000002779675298488545, 0.000000000000000000000000000000000000000000000000000000000000000000074184150771745], ["h", "applicationId"]];
let closure_5 = items.map((arg0) => {
  let tmp;
  [tmp] = arg0;
  return tmp;
});
let closure_6 = items.map((arg0) => {
  let tmp;
  [, tmp] = arg0;
  return tmp;
});
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/poggermode/PoggermodeUtils.tsx");

export const getComboShakeIntensity = function getComboShakeIntensity(userCombo, LEVEL_4) {
  let LEVEL_3 = LEVEL_4;
  if (LEVEL_4 === undefined) {
    LEVEL_3 = LEVEL_3.LEVEL_3;
  }
  const items = [closure_3[LEVEL_3], closure_4[LEVEL_3]];
  return getStepwiseValue(userCombo, items, 100000);
};
export const getComboPercentage = function getComboPercentage(userCombo) {
  const items = [closure_5, closure_6];
  return getStepwiseValue(userCombo, items, 1);
};
export const getComboStyles = function getComboStyles(arg0) {
  if (1 === arg0) {
    let obj = { color: require(dependencyMap[1]).unsafe_getRawColor("BRAND_500") };
    const obj10 = require(dependencyMap[1]);
  } else {
    if (2 !== arg0) {
      if (3 !== arg0) {
        if (4 !== arg0) {
          if (5 !== arg0) {
            if (6 === arg0) {
              obj = { color: require(dependencyMap[1]).unsafe_getRawColor("RED_400"), square: true };
              const obj4 = require(dependencyMap[1]);
            } else {
              obj = {};
              let obj1 = require(dependencyMap[1]);
              obj.color = obj1.unsafe_getRawColor("ORANGE_345");
              obj.flair = true;
            }
          }
        }
        obj1 = { color: require(dependencyMap[1]).unsafe_getRawColor("YELLOW_300"), square: true };
        obj = obj1;
        const obj6 = require(dependencyMap[1]);
      }
    }
    const obj2 = { color: require(dependencyMap[1]).unsafe_getRawColor("GREEN_360") };
    obj = obj2;
    const obj8 = require(dependencyMap[1]);
  }
  return obj;
};
export const getComboScore = function getComboScore(value) {
  const multiplier = value.multiplier;
  let num = 1;
  if (null != multiplier) {
    num = multiplier;
  }
  return value.value * num;
};
