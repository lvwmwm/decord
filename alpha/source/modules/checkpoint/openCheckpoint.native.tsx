// Module ID: 12497
// Function ID: 12498
// Name: openCheckpoint
// Dependencies: [5, 2118, 12492, 12498, 1071, 2023, 12499, 12500, 5594, 1112, 12491, 12490, 12493, 6429, 12501, 2119, 12514, 2]
// Exports: openCheckpoint

// Module 12497 (openCheckpoint)
import Constants from "Constants" /* 1071 */;
import CheckpointStore2 from "CheckpointStore" /* 12492 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AppStateStore from "AppStateStore" /* 2118 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12498 */;
import size from "module_2" /* 2 */;

let c4, c5;

let metroImportAll;
let metroImportDefault;
let obj = function _openCheckpoint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj13;
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
        let obj7;
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
            obj7 = closure_1;
            if (closure_1 === undefined) {
              obj7 = {};
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
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj9 = { uri: closure_131_1(closure_131_2[6]) };
            const preload = closure_131_1(closure_131_2[5]).preload;
            const tmp64 = closure_131_1(closure_131_2[5]);
            preload(obj9);
            c4 = 2;
            c5 = 1;
            const obj10 = { value: obj13.fetchCheckpointData(obj7), done: false };
            obj13 = closure_131_0(closure_131_2[7]);
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
            const presentError = closure_131_0(closure_131_2[8]).presentError;
            const tmp41 = closure_131_0(closure_131_2[8]);
            const intl = closure_131_0(closure_131_2[9]).intl;
            presentError(intl.string(closure_131_0(closure_131_2[9]).t.fEptJP));
            flag = false;
          } else {
            flag = closure_2 !== closure_131_6.FETCHING;
            if (flag) {
              obj = { isForeground: closure_131_4.getState() === closure_131_9.ACTIVE };
              const initialize = closure_131_1(closure_131_2[10]).initialize;
              const tmp9 = closure_131_1(closure_131_2[10]);
              initialize(obj);
              const obj2 = closure_131_0(closure_131_2[11]);
              const result = obj2.trackCheckpoint2026Started(closure_0);
              if (closure_131_5.availability === closure_131_0(closure_131_2[12]).CheckpointAvailability.UNAVAILABLE) {
                const obj4 = closure_131_1(closure_131_2[13]);
                obj4.pushLazy(closure_131_0(closure_131_2[15])(closure_131_2[14], closure_131_2.paths), {}, closure_131_8);
                flag = true;
              } else {
                const obj3 = closure_131_1(closure_131_2[13]);
                obj3.pushLazy(closure_131_0(closure_131_2[15])(closure_131_2[16], closure_131_2.paths), {}, closure_131_7);
                flag = true;
              }
            }
          }
          c5 = 3;
          const obj12 = { value: flag, done: true };
          return obj12;
        }
      } catch (tmp48) {
        c5 = 3;
        throw tmp48;
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
