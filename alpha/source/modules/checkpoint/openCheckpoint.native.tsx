// Module ID: 13570
// Function ID: 13571
// Name: openCheckpoint
// Dependencies: [5, 13571, 1072, 13572, 5831, 1113, 1252, 6864, 13574, 2123, 2]
// Exports: openCheckpoint

// Module 13570 (openCheckpoint)
import Constants from "Constants" /* 1072 */;
import CheckpointStore from "CheckpointStore" /* 13571 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_3, closure_4;

let obj = function _openCheckpoint() {
  obj = _asyncToGenerator(async (source) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (async (arg0, value) => {
      let obj2;
      if (c6 === 2) {
        c6 = 3;
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
          let flag;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = tmp;
              closure_2 = undefined;
              flag = closure_1;
              if (closure_1 === undefined) {
                flag = true;
              }
              closure_3 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "flexDirection", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c5 = 2;
              c6 = 1;
              const obj6 = { value: obj2.fetchCheckpointData(closure_2), done: false };
              obj2 = closure_132_0(closure_132_2[3]);
              return obj6;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_3 = value;
            if (closure_3 !== closure_132_4.ERROR) {
              if (closure_3 !== closure_132_4.FETCHING) {
                const obj8 = { source };
                const obj7 = closure_132_1(closure_132_2[6]);
                obj7.track(closure_132_5.CHECKPOINT_STARTED, obj8);
                const obj10 = { didPlayerShareDataWithDiscord: flag };
                const obj9 = closure_132_1(closure_132_2[7]);
                obj9.pushLazy(closure_132_0(closure_132_2[9])(closure_132_2[8], closure_132_2.paths), obj10, "CHECKPOINT_MODAL");
              }
            } else {
              const presentError = closure_132_0(closure_132_2[4]).presentError;
              closure_132_0(closure_132_2[4]);
              const intl = closure_132_0(closure_132_2[5]).intl;
              presentError(intl.string(closure_132_0(closure_132_2[5]).t.fEptJP));
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          c6 = 3;
          throw tmp25;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint() {
  return obj(...arguments);
}
