// Module ID: 7074
// Function ID: 56555
// Name: getStepwiseValue
// Dependencies: [6921, 688, 2]
// Exports: getComboPercentage, getComboScore, getComboShakeIntensity, getComboStyles

// Module 7074 (getStepwiseValue)
import ConfettiLocation from "ConfettiLocation";

let closure_2;
let closure_3;
let closure_4;
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
  let c2;
  const result = value * multiplier;
  c2 = result;
  if (result <= 0) {
    return 0;
  } else {
    const _Math = Math;
    return Math.min(num, arr.reduce((arg0, arg1, arg2) => {
      let tmp = arg0;
      if (c2 > arg1) {
        if (arg2 + 1 === length.length) {
          return dependencyMap[arg2];
        } else {
          return (c2 - arg1) / (length[arg2 + 1] - arg1) * (dependencyMap[arg2 + 1] - tmp5) + tmp5;
        }
      } else {
        if (c2 === arg1) {
          tmp = dependencyMap[arg2];
        }
        return tmp;
      }
    }, 0));
  }
}
({ ShakeLevel: closure_2, SHAKE_STEPS: closure_3, SHAKE_STEP_DIVIDER: closure_4 } = ConfettiLocation);
let items = [[1, 0.001], [25, 0.3], [100, 0.5], [250, 0.8], [500, 0.9], [2500, 0.95], [9001, 1]];
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
let result = require("set").fileFinishedImporting("modules/poggermode/PoggermodeUtils.tsx");

export const getComboShakeIntensity = function getComboShakeIntensity(userCombo, LEVEL_4) {
  let LEVEL_3 = LEVEL_4;
  if (LEVEL_4 === undefined) {
    LEVEL_3 = LEVEL_3.LEVEL_3;
  }
  const items = [table[LEVEL_3], table2[LEVEL_3]];
  return getStepwiseValue(userCombo, items, 100000);
};
export const getComboPercentage = function getComboPercentage(userCombo) {
  const items = [closure_5, closure_6];
  return getStepwiseValue(userCombo, items, 1);
};
export const getComboStyles = function getComboStyles(arg0) {
  if (1 === arg0) {
    let obj = { color: require(688) /* unsafe_getRawColor */.unsafe_getRawColor("BRAND_500") };
    const obj10 = require(688) /* unsafe_getRawColor */;
  } else {
    if (2 !== arg0) {
      if (3 !== arg0) {
        if (4 !== arg0) {
          if (5 !== arg0) {
            if (6 === arg0) {
              obj = { color: require(688) /* unsafe_getRawColor */.unsafe_getRawColor("RED_400"), square: true };
              const obj4 = require(688) /* unsafe_getRawColor */;
            } else {
              obj = {};
              let obj1 = require(688) /* unsafe_getRawColor */;
              obj.color = obj1.unsafe_getRawColor("ORANGE_345");
              obj.flair = true;
            }
          }
        }
        obj1 = { color: require(688) /* unsafe_getRawColor */.unsafe_getRawColor("YELLOW_300"), square: true };
        obj = obj1;
        const obj6 = require(688) /* unsafe_getRawColor */;
      }
    }
    const obj2 = { color: require(688) /* unsafe_getRawColor */.unsafe_getRawColor("GREEN_360") };
    obj = obj2;
    const obj8 = require(688) /* unsafe_getRawColor */;
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
