// Module ID: 19041
// Function ID: 19042
// Name: CheckpointTestingOptions
// Dependencies: [5, 13570, 13573, 3221, 13572, 19042, 1113, 2]

// Module 19041 (CheckpointTestingOptions)
import _modDef3221 from "module_3221" /* 3221 */;
import openCheckpoint from "openCheckpoint" /* 13570 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 13572 */;
import CheckpointMockData from "CheckpointMockData" /* 13573 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c2;

function action() {
  const obj = openCheckpoint;
  return obj.openCheckpoint("qa_menu", ZERO_DATA !== CheckpointMockData.CheckpointMockStats.NO_PERSONAL_DATA, ZERO_DATA);
}
let c0;
let obj = { id: "open", label: _modDef3221.yLZjcu, description: "Array", action };
const items = [obj, , , , ];
let obj2 = {
  id: "reset",
  label: _modDef3221["2DL3aX"],
  action() {
    return closure_3(...arguments);
  }
};
let closure_3 = _asyncToGenerator(async (arg0, value) => {
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
        const showCheckpointTestingToast = closure_128_0(closure_128_2[5]).showCheckpointTestingToast;
        const tmp15 = closure_128_0(closure_128_2[5]);
        const intl = closure_128_0(closure_128_2[6]).intl;
        const string = intl.string;
        const tmp20 = closure_128_1(closure_128_2[3]);
        if (value) {
          const result = showCheckpointTestingToast(string(tmp20.D5x6qE), "success");
        } else {
          const result1 = showCheckpointTestingToast(string(tmp20.EkMBfH), "failure");
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
const kPBZ5M = _modDef3221.kPBZ5M;
const cf0nfD = _modDef3221.cf0nfD;
const DEFAULT = CheckpointMockData.CheckpointMockStats.DEFAULT;
items[2] = { id: "open-fake-data", label: kPBZ5M, description: cf0nfD, action };
const UwiUbM = _modDef3221.UwiUbM;
const prop = _modDef3221["+5dICr"];
const NO_PERSONAL_DATA = CheckpointMockData.CheckpointMockStats.NO_PERSONAL_DATA;
items[3] = { id: "open-global-stats", label: UwiUbM, description: prop, action };
const BYW9oX = _modDef3221.BYW9oX;
const NffC17 = _modDef3221.NffC17;
const ZERO_DATA = CheckpointMockData.CheckpointMockStats.ZERO_DATA;
items[4] = { id: "open-zero-stats", label: BYW9oX, description: NffC17, action };
let result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointTestingOptions.tsx");

export const CHECKPOINT_TESTING_OPTIONS = items;
