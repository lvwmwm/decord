// Module ID: 15400
// Function ID: 15401
// Name: CacheActionCreators
// Dependencies: [5, 2051, 6985, 584, 2]
// Exports: clearCaches, writeCaches

// Module 15400 (CacheActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import CacheStore from "CacheStore" /* 6985 */;
import size from "module_2" /* 2 */;

let c3, c4;

let obj = function _writeCaches() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let promisesToWaitOn;
        let flag;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            promisesToWaitOn = tmp;
            flag = closure_0;
            if (closure_0 === undefined) {
              flag = false;
            }
            promisesToWaitOn = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: null };
          }
        } else {
          if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
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
              promisesToWaitOn = [];
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
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        c4 = 3;
        throw tmp19;
      }
    }
  });
  return obj(...arguments);
};
const ChannelLoader = ChannelStore.ChannelLoader;
const result = size.fileFinishedImporting("modules/cache/CacheActionCreators.tsx");

export const writeCaches = function writeCaches() {
  return obj(...arguments);
};
export const clearCaches = function clearCaches() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "CLEAR_CACHES", reason: "Requested by user", preventWritingCachesAgainThisSession: true, resetSocket: true });
};
