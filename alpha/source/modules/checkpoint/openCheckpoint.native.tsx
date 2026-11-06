// Module ID: 13644
// Function ID: 13645
// Name: openCheckpoint
// Dependencies: [5, 13643, 13645, 5866, 1113, 13642, 13641, 6824, 13647, 2118, 2]
// Exports: openCheckpoint

// Module 13644 (openCheckpoint)
import CheckpointStore from "CheckpointStore" /* 13643 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c5, c6;

let obj = function _openCheckpoint() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c5 = 2;
            c6 = 1;
            const obj6 = { value: obj2.fetchCheckpointData(closure_2), done: false };
            obj2 = closure_132_0(closure_132_2[2]);
            return obj6;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = value;
          if (closure_3 !== closure_132_4.ERROR) {
            if (closure_3 !== closure_132_4.FETCHING) {
              const obj7 = closure_132_1(closure_132_2[5]);
              obj7.initialize(flag);
              const obj8 = closure_132_0(closure_132_2[6]);
              const result = obj8.trackCheckpoint2026Started(closure_0);
              const obj10 = { didPlayerShareDataWithDiscord: flag };
              const obj9 = closure_132_1(closure_132_2[7]);
              obj9.pushLazy(closure_132_0(closure_132_2[9])(closure_132_2[8], closure_132_2.paths), obj10, "CHECKPOINT_MODAL");
            }
          } else {
            const presentError = closure_132_0(closure_132_2[3]).presentError;
            const tmp8 = closure_132_0(closure_132_2[3]);
            const intl = closure_132_0(closure_132_2[4]).intl;
            presentError(intl.string(closure_132_0(closure_132_2[4]).t.fEptJP));
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp25) {
        c6 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
const CheckpointFetchStates = CheckpointStore.CheckpointFetchStates;
let result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint() {
  return obj(...arguments);
}
