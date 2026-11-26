// Module ID: 15049
// Function ID: 15050
// Name: CheckpointTestingOptions
// Dependencies: [5, 15047, 12625, 3497, 12628, 15050, 1112, 15048, 2]
// Exports: getCheckpointTestingOptions

// Module 15049 (CheckpointTestingOptions)
import intl2 from "intl" /* 1112 */;
import _modDef3497 from "module_3497" /* 3497 */;
import openCheckpoint2 from "openCheckpoint" /* 12625 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 12628 */;
import CheckpointMitigationOverrideStore from "CheckpointMitigationOverrideStore" /* 15047 */;
import CheckpointMockData from "CheckpointMockData" /* 15048 */;
import CheckpointToastUtils from "CheckpointToastUtils" /* 15050 */;
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
let obj = { id: "open", label: _modDef3497.yLZjcu, action };
const items = [obj, , , , , , ];
let obj2 = {
  id: "reset-all",
  label: _modDef3497.WM19oT,
  action() {
    return closure_4(...arguments);
  }
};
let closure_4 = _asyncToGenerator(async (arg0, value) => {
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
      return { value: "HermesInternal", done: "+95" };
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
        return { value: "HermesInternal", done: "+95" };
      }
    } catch (tmp8) {
      c2 = 3;
      throw tmp8;
    }
  }
});
items[1] = obj2;
let obj3 = {
  id: "reset-progress",
  label: _modDef3497.HYMZmZ,
  action() {
    const obj = CheckpointActionCreators;
    const result = obj.resetCheckpointProgress();
    const showCheckpointTestingToast = CheckpointToastUtils.showCheckpointTestingToast;
    CheckpointToastUtils;
    const intl = intl2.intl;
    const result1 = showCheckpointTestingToast(intl.string(intl2.t.i4jeWR), "success");
  }
};
items[2] = obj3;
let obj4 = {
  id: "reset-character",
  label: _modDef3497.Q9JHSs,
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
      return { value: "HermesInternal", done: "+95" };
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
          const obj5 = { value: obj2.resetCheckpointCharacter(), done: false };
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
        return { value: "HermesInternal", done: "+95" };
      }
    } catch (tmp8) {
      c2 = 3;
      throw tmp8;
    }
  }
});
items[3] = obj4;
const kPBZ5M = _modDef3497.kPBZ5M;
const FAKE_DATA = CheckpointMockData.CheckpointMocks.FAKE_DATA;
items[4] = { id: "open-fake-data", label: kPBZ5M, action };
const UwiUbM = _modDef3497.UwiUbM;
const GLOBAL_STATS = CheckpointMockData.CheckpointMocks.GLOBAL_STATS;
items[5] = { id: "open-global-stats", label: UwiUbM, action };
const BYW9oX = _modDef3497.BYW9oX;
const ZERO_STATS = CheckpointMockData.CheckpointMocks.ZERO_STATS;
items[6] = { id: "open-zero-stats", label: BYW9oX, action };
const items1 = [...items];
const v58TARv = _modDef3497["58TARv"];
const UNAVAILABLE = CheckpointMockData.CheckpointMocks.UNAVAILABLE;
let obj5 = { id: "open-unavailable", label: v58TARv, action };
const items2 = [obj5];
HermesBuiltin.arraySpread(items1, items2, tmp4);
let closure_6 = ["reset-all", "reset-progress", "reset-character"];
let result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointTestingOptions.tsx");

export const CHECKPOINT_TESTING_OPTIONS = items1;
export function getCheckpointTestingOptions(mode) {
  if ("off" === mode) {
    return [];
  } else if ("reset_only" === mode) {
    return items1.filter((id) => closure_1_6.includes(id.id));
  } else if ("all" === mode) {
    return items1;
  }
}
