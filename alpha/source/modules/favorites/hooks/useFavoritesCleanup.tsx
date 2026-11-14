// Module ID: 18859
// Function ID: 18860
// Name: useFavoritesCleanup
// Dependencies: [5, 32, 19, 5158, 504, 10944, 2]
// Exports: default

// Module 18859 (useFavoritesCleanup)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 5158 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, closure_5;

let _slicedToArray = _slicedToArray_mod;
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesCleanup.tsx");

export default function useFavoritesCleanup(arg0) {
  let autoAdd;
  let closure_0;
  let closure_3;
  let closure_7;
  let closure_8;
  let first1;
  let first2;
  let first3;
  let num;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp20;
  let tmp7;
  _require = arg0;
  let obj = function _save() {
    let ref;
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const tmp54 = closure_2_11;
              if (tmp54) {
                if (!ref.current) {
                  ref.current = true;
                  closure_2_7(true);
                  closure_2_8(false);
                  c3 = 2;
                  const obj2 = tmp(c1[5]);
                  const result = obj2.setFavoritesAutoAddJoinedThreads(autoAdd);
                  const obj3 = tmp(c1[5]);
                  c1 = 3;
                  c4 = 1;
                  const obj6 = { value: obj3.setFavoritesPruneInactiveThreads(first1, first2, first3), done: false };
                  return obj6;
                }
              }
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_9.current = false;
            const tmp28 = closure_2;
            if (closure_128_10.current) {
              closure_128_7(false);
            }
            throw tmp28;
          } else {
            if (2 === c1) {
              c3 = 1;
              if (closure_128_10.current) {
                closure_128_8(true);
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_9.current = false;
              if (closure_128_10.current) {
                closure_128_7(false);
              }
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (closure_128_10.current) {
                closure_128_0();
              }
              c3 = 1;
            }
            c3 = 0;
            closure_128_9.current = false;
            if (closure_128_10.current) {
              closure_128_7(false);
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp48) {
          closure_2 = tmp48;
          if (0 === c3) {
            c4 = 3;
            throw tmp48;
          } else if (1 === tmp50) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = require("get initialized");
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.autoAddThreadsMode);
  let obj2 = require("get initialized");
  const items1 = [closure_5];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_5.pruneInactiveThreads);
  let obj3 = require("get initialized");
  const items2 = [closure_5];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => closure_5.pruneInactiveThreadsDays);
  let obj4 = require("get initialized");
  const items3 = [closure_5];
  const stateFromStores3 = obj4.useStateFromStores(items3, () => closure_5.pruneInactiveThreadsScope);
  [autoAdd, tmp7] = first2.useState(stateFromStores);
  [first1, tmp10] = first2.useState(stateFromStores1);
  _slicedToArray = tmp10;
  [first2, tmp13] = first2.useState(stateFromStores2);
  closure_5 = tmp13;
  [first3, tmp16] = first2.useState(stateFromStores3);
  [tmp18, closure_7] = _slicedToArray(first2.useState(false), 2);
  const tmp17 = _slicedToArray(first2.useState(false), 2);
  [tmp20, closure_8] = _slicedToArray(first2.useState(false), 2);
  const tmp19 = _slicedToArray(first2.useState(false), 2);
  let closure_9 = first2.useRef(false);
  let closure_10 = first2.useRef(true);
  const effect = first2.useEffect(() => {
    closure_10.current = true;
    return () => {
      closure_1_10.current = false;
    };
  }, []);
  let tmp22 = autoAdd !== stateFromStores || first1 !== stateFromStores1;
  if (!tmp22) {
    let tmp23 = first1;
    if (tmp23) {
      tmp23 = first2 !== stateFromStores2 || first3 !== stateFromStores3;
      const tmp24 = first2 !== stateFromStores2 || first3 !== stateFromStores3;
    }
    tmp22 = tmp23;
  }
  let closure_11 = tmp22;
  let obj5 = {
    autoAdd,
    setAutoAdd: tmp7,
    prune: first1,
    setPrune: tmp10,
    days: first2,
    setDays: tmp13,
    pruneTiming: num,
    setPruneTiming(arg0) {
      if (-1 !== arg0) {
        closure_3(true);
        closure_5(arg0);
      } else {
        closure_3(false);
      }
    },
    canSave: tmp22,
    scope: first3,
    setScope: tmp16,
    loading: tmp18,
    error: tmp20,
    save() {
      return obj(...arguments);
    }
  };
  num = -1;
  if (first1) {
    num = first2;
  }
  return obj5;
};
export const FAVORITES_PRUNE_NEVER = -1;
