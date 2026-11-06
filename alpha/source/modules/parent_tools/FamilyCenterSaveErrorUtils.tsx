// Module ID: 16984
// Function ID: 16985
// Name: FamilyCenterSaveErrorUtils
// Dependencies: [5, 7577, 7591, 2]
// Exports: showToastIfSaveFails

// Module 16984 (FamilyCenterSaveErrorUtils)
import Constants from "Constants" /* 7577 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1;

let obj = function _showToastIfSaveFails() {
  obj = _asyncToGenerator(async (value) => {
    let c2 = 0;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp;
              c3 = 1;
              c2 = 2;
              c4 = 1;
              return { value, done: false };
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
              const obj2 = closure_129_0(closure_129_1[2]);
              obj2.showFailedToast(closure_129_3.FAMILY_CENTER_TEEN_SETTINGS_SAVE_ERROR);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 0;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          if (0 === c3) {
            c4 = 3;
            throw tmp10;
          } else {
            c2 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const SafetyToastType = Constants.SafetyToastType;
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterSaveErrorUtils.tsx");

export function showToastIfSaveFails() {
  return obj(...arguments);
}
