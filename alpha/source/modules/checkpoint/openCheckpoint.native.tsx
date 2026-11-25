// Module ID: 12576
// Function ID: 12577
// Name: openCheckpoint
// Dependencies: [5, 2118, 12571, 12577, 1071, 2023, 12578, 12579, 5693, 1112, 12570, 12569, 12580, 5226, 12572, 6099, 12581, 2119, 12594, 2]
// Exports: openCheckpoint

// Module 12576 (openCheckpoint)
import Constants from "Constants" /* 1071 */;
import CheckpointStore2 from "CheckpointStore" /* 12571 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AppStateStore from "AppStateStore" /* 2118 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 12577 */;
import size from "module_2" /* 2 */;

let c4, c5;

let metroImportAll;
let metroImportDefault;
let obj = function _openCheckpoint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj15;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj7 = { value, done: true };
        return obj7;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let closure_2;
        let obj9;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            let closure_3 = tmp4;
            closure_2 = tmp;
            obj9 = closure_1;
            if (closure_1 === undefined) {
              obj9 = {};
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
            const obj10 = { value, done: true };
            return obj10;
          } else {
            const obj11 = { uri: closure_131_1(closure_131_2[6]) };
            const preload = closure_131_1(closure_131_2[5]).preload;
            const tmp71 = closure_131_1(closure_131_2[5]);
            preload(obj11);
            c4 = 2;
            c5 = 1;
            const obj12 = { value: obj15.fetchCheckpointData(obj9), done: false };
            obj15 = closure_131_0(closure_131_2[7]);
            return obj12;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          let flag;
          closure_2 = value;
          if (closure_2 === closure_131_6.ERROR) {
            const presentError = closure_131_0(closure_131_2[8]).presentError;
            const tmp48 = closure_131_0(closure_131_2[8]);
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
              const obj3 = closure_131_0(closure_131_2[12]);
              const result1 = obj3.dismissCheckpointIntro(closure_0);
              const obj4 = closure_131_1(closure_131_2[13]);
              obj4.hideAllActionSheets();
              if (closure_131_5.availability === closure_131_0(closure_131_2[14]).CheckpointAvailability.UNAVAILABLE) {
                const obj6 = closure_131_1(closure_131_2[15]);
                obj6.pushLazy(closure_131_0(closure_131_2[17])(closure_131_2[16], closure_131_2.paths), {}, closure_131_8);
                flag = true;
              } else {
                const obj5 = closure_131_1(closure_131_2[15]);
                obj5.pushLazy(closure_131_0(closure_131_2[17])(closure_131_2[18], closure_131_2.paths), {}, closure_131_7);
                flag = true;
              }
            }
          }
          c5 = 3;
          const obj14 = { value: flag, done: true };
          return obj14;
        }
      } catch (tmp55) {
        c5 = 3;
        throw tmp55;
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
