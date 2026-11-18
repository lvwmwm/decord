// Module ID: 12422
// Function ID: 12423
// Name: openCheckpoint
// Dependencies: [5, 2120, 12417, 12423, 1072, 12424, 5504, 1113, 12416, 12415, 12418, 6337, 12425, 2121, 12439, 2]
// Exports: openCheckpoint

// Module 12422 (openCheckpoint)
import Constants from "Constants" /* 1072 */;
import CheckpointStore2 from "CheckpointStore" /* 12417 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AppStateStore from "AppStateStore" /* 2120 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12423 */;
import size from "module_2" /* 2 */;

let c4, c5;

let metroImportAll;
let metroImportDefault;
let obj = function _openCheckpoint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj7;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj5 = { value, done: true };
        return obj5;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_2;
        let obj8;
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
            let closure_3 = tmp4;
            closure_2 = tmp;
            obj8 = closure_1;
            if (closure_1 === undefined) {
              obj8 = {};
            }
            closure_2 = undefined;
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
            c4 = 2;
            c5 = 1;
            const obj10 = { value: obj7.fetchCheckpointData(obj8), done: false };
            obj7 = closure_131_0(closure_131_2[5]);
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
          closure_2 = value;
          if (closure_2 === closure_131_6.ERROR) {
            const presentError = closure_131_0(closure_131_2[6]).presentError;
            const tmp41 = closure_131_0(closure_131_2[6]);
            const intl = closure_131_0(closure_131_2[7]).intl;
            presentError(intl.string(closure_131_0(closure_131_2[7]).t.fEptJP));
            flag = false;
          } else {
            flag = closure_2 !== closure_131_6.FETCHING;
            if (flag) {
              obj = { isForeground: closure_131_4.getState() === closure_131_9.ACTIVE };
              const initialize = closure_131_1(closure_131_2[8]).initialize;
              const tmp9 = closure_131_1(closure_131_2[8]);
              initialize(obj);
              const obj2 = closure_131_0(closure_131_2[9]);
              const result = obj2.trackCheckpoint2026Started(closure_0);
              if (closure_131_5.availability === closure_131_0(closure_131_2[10]).CheckpointAvailability.UNAVAILABLE) {
                const obj4 = closure_131_1(closure_131_2[11]);
                obj4.pushLazy(closure_131_0(closure_131_2[13])(closure_131_2[12], closure_131_2.paths), {}, closure_131_8);
                flag = true;
              } else {
                const obj3 = closure_131_1(closure_131_2[11]);
                obj3.pushLazy(closure_131_0(closure_131_2[13])(closure_131_2[14], closure_131_2.paths), {}, closure_131_7);
                flag = true;
              }
            }
          }
          c5 = 3;
          const obj12 = { value: flag, done: true };
          return obj12;
        }
      } catch (tmp53) {
        c5 = 3;
        throw tmp53;
      }
    }
  });
  return obj(...arguments);
};
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ CHECKPOINT_MODAL_KEY: metroImportDefault, CHECKPOINT_UNAVAILABLE_MODAL_KEY: metroImportAll } = CheckpointModalConstants);
const AppStates = Constants.AppStates;
let result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint() {
  return obj(...arguments);
}
