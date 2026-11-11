// Module ID: 19469
// Function ID: 19470
// Name: CheckpointTestingOptions
// Dependencies: [5, 14152, 14155, 3271, 14154, 19470, 1113, 2]
// Exports: getCheckpointTestingOptions

// Module 19469 (CheckpointTestingOptions)
import _modDef3271 from "module_3271" /* 3271 */;
import openCheckpoint from "openCheckpoint" /* 14152 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 14154 */;
import CheckpointMockData from "CheckpointMockData" /* 14155 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c2;

function action() {
  const obj = openCheckpoint;
  return obj.openCheckpoint("qa_menu", ZERO_DATA !== CheckpointMockData.CheckpointMockStats.NO_PERSONAL_DATA, ZERO_DATA);
}
let c0;
let obj = { id: "open", label: _modDef3271.yLZjcu, action };
const items = [obj, , , , ];
let obj2 = {
  id: "reset",
  label: _modDef3271["2DL3aX"],
  action() {
    return closure_2(...arguments);
  }
};
let closure_2 = _asyncToGenerator(async (arg0, value) => {
  let obj2;
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
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
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let closure_0 = tmp3;
          c1 = 1;
          c2 = 1;
          const obj5 = { value: obj2.resetCheckpoint(), done: false };
          obj2 = CheckpointActionCreators;
          return obj5;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const showCheckpointTestingToast = closure_128_0(closure_128_1[5]).showCheckpointTestingToast;
        const tmp15 = closure_128_0(closure_128_1[5]);
        const intl = closure_128_0(closure_128_1[6]).intl;
        const string = intl.string;
        const t = closure_128_0(closure_128_1[6]).t;
        if (value) {
          const result = showCheckpointTestingToast(string(t.i4jeWR), "success");
        } else {
          const result1 = showCheckpointTestingToast(string(t.fEptJP), "failure");
        }
        c2 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp8) {
      c2 = 3;
      throw tmp8;
    }
  }
});
items[1] = obj2;
const kPBZ5M = _modDef3271.kPBZ5M;
const DEFAULT = CheckpointMockData.CheckpointMockStats.DEFAULT;
items[2] = { id: "open-fake-data", label: kPBZ5M, action };
const UwiUbM = _modDef3271.UwiUbM;
const NO_PERSONAL_DATA = CheckpointMockData.CheckpointMockStats.NO_PERSONAL_DATA;
items[3] = { id: "open-global-stats", label: UwiUbM, action };
const BYW9oX = _modDef3271.BYW9oX;
const ZERO_DATA = CheckpointMockData.CheckpointMockStats.ZERO_DATA;
items[4] = { id: "open-zero-stats", label: BYW9oX, action };
let closure_4 = ["reset"];
let result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointTestingOptions.tsx");

export const CHECKPOINT_TESTING_OPTIONS = items;
export function getCheckpointTestingOptions(mode) {
  if ("off" === mode) {
    return [];
  } else if ("reset_only" === mode) {
    return items.filter((id) => closure_1_4.includes(id.id));
  } else if ("all" === mode) {
    return items;
  }
}
