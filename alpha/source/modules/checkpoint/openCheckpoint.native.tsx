// Module ID: 14258
// Function ID: 14259
// Name: openCheckpoint
// Dependencies: [109, 5, 2120, 14253, 14259, 1072, 14260, 6014, 1113, 14252, 14251, 14254, 6848, 14261, 2121, 14275, 2]
// Exports: openCheckpoint

// Module 14258 (openCheckpoint)
import Constants from "Constants" /* 1072 */;
import CheckpointStore2 from "CheckpointStore" /* 14253 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AppStateStore from "AppStateStore" /* 2120 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 14259 */;
import size from "module_2" /* 2 */;

let c4, c5;

let c10;
let c9;
let obj = function _openCheckpoint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let didPlayerShareDataWithDiscord;
        let closure_2;
        let obj6;
        let closure_4;
        let closure_5;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            didPlayerShareDataWithDiscord = tmp4;
            closure_2 = tmp;
            obj6 = closure_1;
            if (closure_1 === undefined) {
              obj6 = {};
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
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_2 = obj6.didPlayerShareDataWithDiscord;
            const tmp39 = undefined === closure_2 || closure_2;
            didPlayerShareDataWithDiscord = tmp39;
            closure_4 = closure_131_4(obj6, closure_131_3);
            c4 = 2;
            c5 = 1;
            const obj8 = { value: obj5.fetchCheckpointData(closure_4), done: false };
            obj5 = closure_131_0(closure_131_2[6]);
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_5 = value;
          if (closure_5 !== closure_131_8.ERROR) {
            if (closure_5 !== closure_131_8.FETCHING) {
              const obj10 = { didPlayerShareDataWithDiscord, isForeground: closure_131_6.getState() === closure_131_11.ACTIVE };
              const initialize = closure_131_1(closure_131_2[9]).initialize;
              const tmp61 = closure_131_1(closure_131_2[9]);
              initialize(obj10);
              const obj12 = closure_131_0(closure_131_2[10]);
              const result = obj12.trackCheckpoint2026Started(closure_0);
              if (closure_131_7.availability !== closure_131_0(closure_131_2[11]).CheckpointAvailability.UNAVAILABLE) {
                const obj11 = { didPlayerShareDataWithDiscord };
                const obj2 = closure_131_1(closure_131_2[12]);
                obj2.pushLazy(closure_131_0(closure_131_2[14])(closure_131_2[15], closure_131_2.paths), obj11, closure_131_9);
              } else {
                obj = closure_131_1(closure_131_2[12]);
                obj.pushLazy(closure_131_0(closure_131_2[14])(closure_131_2[13], closure_131_2.paths), {}, closure_131_10);
              }
            }
          } else {
            const presentError = closure_131_0(closure_131_2[7]).presentError;
            const tmp8 = closure_131_0(closure_131_2[7]);
            const intl = closure_131_0(closure_131_2[8]).intl;
            presentError(intl.string(closure_131_0(closure_131_2[8]).t.fEptJP));
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp49) {
        c5 = 3;
        throw tmp49;
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
