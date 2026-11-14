// Module ID: 18206
// Function ID: 18207
// Name: CacheActionCreators
// Dependencies: [5, 5155, 8679, 572, 2]
// Exports: clearCaches, writeCaches

// Module 18206 (CacheActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import CacheStore from "CacheStore" /* 8679 */;
import size from "module_2" /* 2 */;

let c3;

let obj = function _writeCaches() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_2;
    let flag;
    let closure_0 = arg0;
    if (1 === c3) {
      if (arg0 === 1) {
        let c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else if (closure_130_4.canWriteCaches(flag)) {
        c3 = 2;
        c4 = 1;
        const obj6 = { value: closure_130_3.loadAllMissingChannels(), done: false };
        return obj6;
      }
    } else if (2 === c3) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        let promisesToWaitOn = [];
        const obj8 = { type: "WRITE_CACHES", promisesToWaitOn };
        const obj2 = closure_130_0(closure_130_1[3]);
        obj2.dispatch(obj8);
        c3 = 3;
        c4 = 1;
        const obj9 = { value: Promise.all(promisesToWaitOn), done: false };
        return obj9;
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      obj = { value, done: true };
      return obj;
    }
    await "HermesInternal";
    promisesToWaitOn = tmp;
    flag = closure_0;
    if (closure_0 === undefined) {
      flag = false;
    }
    return "Path";
  });
  return obj(...arguments);
};
const ChannelLoader = ChannelStore.ChannelLoader;
const result = size.fileFinishedImporting("modules/cache/CacheActionCreators.tsx");

export function writeCaches() {
  return obj(...arguments);
}
export function clearCaches() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "CLEAR_CACHES", reason: "Requested by user", preventWritingCachesAgainThisSession: true, resetSocket: true });
}
