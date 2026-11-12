// Module ID: 14148
// Function ID: 14149
// Name: openCheckpoint
// Dependencies: [5, 14146, 14149, 14150, 5951, 1113, 14145, 14144, 14147, 6785, 14152, 2118, 14165, 2]
// Exports: openCheckpoint

// Module 14148 (openCheckpoint)
import CheckpointStore2 from "CheckpointStore" /* 14146 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import CheckpointModalConstants from "CheckpointModalConstants" /* 14149 */;
import size from "module_2" /* 2 */;

let c5, c6;

let metroImportDefault;
let metroRequire;
let obj = function _openCheckpoint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
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
        let closure_3;
        let flag;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp4;
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c5 = 2;
            c6 = 1;
            const obj7 = { value: obj5.fetchCheckpointData(closure_2), done: false };
            obj5 = closure_132_0(closure_132_2[3]);
            return obj7;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_3 = value;
          if (closure_3 !== closure_132_5.ERROR) {
            if (closure_3 !== closure_132_5.FETCHING) {
              const obj10 = closure_132_1(closure_132_2[6]);
              obj10.initialize(flag);
              const obj11 = closure_132_0(closure_132_2[7]);
              const result = obj11.trackCheckpoint2026Started(closure_0);
              if (closure_132_4.availability !== closure_132_0(closure_132_2[8]).CheckpointAvailability.UNAVAILABLE) {
                const obj9 = { didPlayerShareDataWithDiscord: flag };
                const obj2 = closure_132_1(closure_132_2[9]);
                obj2.pushLazy(closure_132_0(closure_132_2[11])(closure_132_2[12], closure_132_2.paths), obj9, closure_132_6);
              } else {
                obj = closure_132_1(closure_132_2[9]);
                obj.pushLazy(closure_132_0(closure_132_2[11])(closure_132_2[10], closure_132_2.paths), {}, closure_132_7);
              }
            }
          } else {
            const presentError = closure_132_0(closure_132_2[4]).presentError;
            const tmp8 = closure_132_0(closure_132_2[4]);
            const intl = closure_132_0(closure_132_2[5]).intl;
            presentError(intl.string(closure_132_0(closure_132_2[5]).t.fEptJP));
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp45) {
        c6 = 3;
        throw tmp45;
      }
    }
  });
  return obj(...arguments);
};
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ CHECKPOINT_MODAL_KEY: metroRequire, CHECKPOINT_UNAVAILABLE_MODAL_KEY: metroImportDefault } = CheckpointModalConstants);
let result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint() {
  return obj(...arguments);
}
