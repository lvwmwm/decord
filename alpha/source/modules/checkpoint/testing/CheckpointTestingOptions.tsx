// Module ID: 19657
// Function ID: 19658
// Name: CheckpointTestingOptions
// Dependencies: [5, 19656, 14258, 3319, 14260, 19658, 1113, 18321, 2]
// Exports: getCheckpointTestingOptions

// Module 19657 (CheckpointTestingOptions)
import _modDef3319 from "module_3319" /* 3319 */;
import openCheckpoint2 from "openCheckpoint" /* 14258 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 14260 */;
import CheckpointMockData from "CheckpointMockData" /* 18321 */;
import CheckpointMitigationOverrideStore from "CheckpointMitigationOverrideStore" /* 19656 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c2;

function action() {
  const tmp = closure_2();
  const openCheckpoint = openCheckpoint2.openCheckpoint;
  const obj = {};
  openCheckpoint2;
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(UNAVAILABLE);
  return openCheckpoint("qa_menu", obj);
}
let closure_2 = CheckpointMitigationOverrideStore.getCheckpointMitigationMock;
let c0;
let obj = { id: "open", label: _modDef3319.yLZjcu, action };
const items = [obj, , , , ];
let obj2 = {
  id: "reset",
  label: _modDef3319["2DL3aX"],
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
const kPBZ5M = _modDef3319.kPBZ5M;
const FAKE_DATA = CheckpointMockData.CheckpointMocks.FAKE_DATA;
items[2] = { id: "open-fake-data", label: kPBZ5M, action };
const UwiUbM = _modDef3319.UwiUbM;
const GLOBAL_STATS = CheckpointMockData.CheckpointMocks.GLOBAL_STATS;
items[3] = { id: "open-global-stats", label: UwiUbM, action };
const BYW9oX = _modDef3319.BYW9oX;
const ZERO_STATS = CheckpointMockData.CheckpointMocks.ZERO_STATS;
items[4] = { id: "open-zero-stats", label: BYW9oX, action };
const items1 = [...items];
const v58TARv = _modDef3319["58TARv"];
const UNAVAILABLE = CheckpointMockData.CheckpointMocks.UNAVAILABLE;
let obj3 = { id: "open-unavailable", label: v58TARv, action };
const items2 = [obj3];
HermesBuiltin.arraySpread(items1, items2, tmp4);
let closure_5 = ["reset"];
let result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointTestingOptions.tsx");

export const CHECKPOINT_TESTING_OPTIONS = items1;
export function getCheckpointTestingOptions(mode) {
  if ("off" === mode) {
    return [];
  } else if ("reset_only" === mode) {
    return items1.filter((id) => closure_1_5.includes(id.id));
  } else if ("all" === mode) {
    return items1;
  }
}
