// Module ID: 18876
// Function ID: 18877
// Name: CheckpointTestingOptions
// Dependencies: [5, 13435, 18877, 1113, 3094, 13419, 13436, 2]

// Module 18876 (CheckpointTestingOptions)
import _modDef3094 from "module_3094" /* 3094 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 13435 */;
import CheckpointMockData from "CheckpointMockData" /* 13436 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2;

const f115937 = async (arg0, value) => {
  let closure_0;
  let intl2;
  let v1;
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c2 = 2;
      if (0 === ZERO_DATA) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          ZERO_DATA = 1;
          const obj4 = tmp3(c2[1]);
          c2 = 1;
          const obj5 = { value: obj4.fetchCheckpointData(ZERO_DATA), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        if (value) {
          const tmp26Result = tmp3(c2[5]);
          tmp26Result.openCheckpoint("qa_menu", closure_128_1 !== tmp3(c2[6]).CheckpointMockStats.NO_PERSONAL_DATA);
        } else {
          const showCheckpointTestingToast = tmp3(c2[2]).showCheckpointTestingToast;
          const tmp26Result2 = tmp3(c2[2]);
          const intl = tmp3(c2[3]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj = { label: intl2.string(closure_128_0) };
          const prop = ZERO_DATA(c2[4])["6pDB++"];
          intl2 = tmp3(c2[3]).intl;
          const result = showCheckpointTestingToast(formatToPlainString(prop, obj), "failure");
        }
        c2 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp21) {
      c2 = 3;
      throw tmp21;
    }
  }
};
function action() {
  return closure_2(...arguments);
}
const yLZjcu = _modDef3094.yLZjcu;
let c1;
let obj = { id: "open", label: yLZjcu, description: "Array", action };
_asyncToGenerator(f115937);
const items = [obj, , , , ];
let obj2 = {
  id: "reset",
  label: _modDef3094["2DL3aX"],
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
        const showCheckpointTestingToast = closure_128_0(closure_128_2[2]).showCheckpointTestingToast;
        const tmp15 = closure_128_0(closure_128_2[2]);
        const intl = closure_128_0(closure_128_2[3]).intl;
        const string = intl.string;
        const tmp20 = closure_128_1(closure_128_2[4]);
        if (value) {
          const result = showCheckpointTestingToast(string(tmp20.D5x6qE), "success");
        } else {
          const result1 = showCheckpointTestingToast(string(tmp20.EkMBfH), "failure");
        }
        c2 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp8) {
      c2 = 3;
      throw tmp8;
    }
  }
});
items[1] = obj2;
const kPBZ5M = _modDef3094.kPBZ5M;
const cf0nfD = _modDef3094.cf0nfD;
const DEFAULT = CheckpointMockData.CheckpointMockStats.DEFAULT;
let obj3 = { id: "open-fake-data", label: kPBZ5M, description: cf0nfD, action };
_asyncToGenerator(f115937);
items[2] = obj3;
const UwiUbM = _modDef3094.UwiUbM;
let prop = _modDef3094["+5dICr"];
const NO_PERSONAL_DATA = CheckpointMockData.CheckpointMockStats.NO_PERSONAL_DATA;
let obj4 = { id: "open-global-stats", label: UwiUbM, description: prop, action };
_asyncToGenerator(f115937);
items[3] = obj4;
const BYW9oX = _modDef3094.BYW9oX;
const NffC17 = _modDef3094.NffC17;
let ZERO_DATA = CheckpointMockData.CheckpointMockStats.ZERO_DATA;
let obj5 = { id: "open-zero-stats", label: BYW9oX, description: NffC17, action };
let closure_2 = _asyncToGenerator(f115937);
items[4] = obj5;
let result = size.fileFinishedImporting("modules/checkpoint/testing/CheckpointTestingOptions.tsx");

export const CHECKPOINT_TESTING_OPTIONS = items;
