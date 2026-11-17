// Module ID: 13124
// Function ID: 13125
// Name: openCheckpoint
// Dependencies: [109, 5, 2120, 13119, 13125, 1072, 13126, 6008, 1113, 13118, 13117, 13120, 6833, 13127, 2121, 13141, 2]
// Exports: openCheckpoint

// Module 13124 (openCheckpoint)
import Constants from "Constants" /* 1072 */;
import CheckpointStore2 from "CheckpointStore" /* 13119 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AppStateStore from "AppStateStore" /* 2120 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 13125 */;
import size from "module_2" /* 2 */;

let c4, c5;

let c10;
let c9;
let obj = function _openCheckpoint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj8;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let didPlayerShareDataWithDiscord;
        let closure_2;
        let obj7;
        let closure_4;
        let closure_5;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            didPlayerShareDataWithDiscord = tmp4;
            closure_2 = tmp;
            obj7 = closure_1;
            if (closure_1 === undefined) {
              obj7 = {};
            }
            closure_2 = undefined;
            didPlayerShareDataWithDiscord = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Path", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_2 = obj7.didPlayerShareDataWithDiscord;
            const tmp51 = undefined === closure_2 || closure_2;
            didPlayerShareDataWithDiscord = tmp51;
            closure_4 = closure_131_4(obj7, closure_131_3);
            c4 = 2;
            c5 = 1;
            const obj10 = { value: obj8.fetchCheckpointData(closure_4), done: false };
            obj8 = closure_131_0(closure_131_2[6]);
            return obj10;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          let flag;
          closure_5 = value;
          if (closure_5 === closure_131_8.ERROR) {
            const presentError = closure_131_0(closure_131_2[7]).presentError;
            const tmp44 = closure_131_0(closure_131_2[7]);
            const intl = closure_131_0(closure_131_2[8]).intl;
            presentError(intl.string(closure_131_0(closure_131_2[8]).t.fEptJP));
            flag = false;
          } else {
            flag = closure_5 !== closure_131_8.FETCHING;
            if (flag) {
              obj = { didPlayerShareDataWithDiscord, isForeground: closure_131_6.getState() === closure_131_11.ACTIVE };
              const initialize = closure_131_1(closure_131_2[9]).initialize;
              const tmp9 = closure_131_1(closure_131_2[9]);
              initialize(obj);
              const obj2 = closure_131_0(closure_131_2[10]);
              const result = obj2.trackCheckpoint2026Started(closure_0);
              if (closure_131_7.availability === closure_131_0(closure_131_2[11]).CheckpointAvailability.UNAVAILABLE) {
                const obj5 = closure_131_1(closure_131_2[12]);
                obj5.pushLazy(closure_131_0(closure_131_2[14])(closure_131_2[13], closure_131_2.paths), {}, closure_131_10);
                flag = true;
              } else {
                const obj12 = { didPlayerShareDataWithDiscord };
                const obj3 = closure_131_1(closure_131_2[12]);
                obj3.pushLazy(closure_131_0(closure_131_2[14])(closure_131_2[15], closure_131_2.paths), obj12, closure_131_9);
                flag = true;
              }
            }
          }
          c5 = 3;
          const obj13 = { value: flag, done: true };
          return obj13;
        }
      } catch (tmp61) {
        c5 = 3;
        throw tmp61;
      }
    }
  });
  return obj(...arguments);
};
let closure_3 = ["didPlayerShareDataWithDiscord"];
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ CHECKPOINT_MODAL_KEY: c9, CHECKPOINT_UNAVAILABLE_MODAL_KEY: c10 } = CheckpointModalConstants);
const AppStates = Constants.AppStates;
let result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint() {
  return obj(...arguments);
}
