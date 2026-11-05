// Module ID: 18484
// Function ID: 18485
// Name: useFavoritesCleanup
// Dependencies: [5, 32, 19, 4995, 504, 11015, 2]
// Exports: default

// Module 18484 (useFavoritesCleanup)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 4995 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2;

let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesCleanup.tsx");

export default function useFavoritesCleanup(arg0) {
  let autoAdd;
  let closure_0;
  let closure_6;
  let first2;
  let first3;
  let tmp18;
  let tmp20;
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
              const tmp54 = closure_2_9;
              if (tmp54) {
                if (!ref.current) {
                  ref.current = true;
                  FavoriteStore(true);
                  closure_2_6(false);
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
            closure_128_7.current = false;
            const tmp28 = closure_2;
            if (closure_128_8.current) {
              closure_128_5(false);
            }
            throw tmp28;
          } else {
            if (2 === c1) {
              c3 = 1;
              if (closure_128_8.current) {
                closure_128_6(true);
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_7.current = false;
              if (closure_128_8.current) {
                closure_128_5(false);
              }
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (closure_128_8.current) {
                closure_128_0();
              }
              c3 = 1;
            }
            c3 = 0;
            closure_128_7.current = false;
            if (closure_128_8.current) {
              closure_128_5(false);
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
  const items = [FavoriteStore];
  const stateFromStores = obj.useStateFromStores(items, () => FavoriteStore.autoAddJoinedThreads);
  let obj2 = require("get initialized");
  const items1 = [FavoriteStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => FavoriteStore.pruneInactiveThreads);
  let obj3 = require("get initialized");
  const items2 = [FavoriteStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => FavoriteStore.pruneInactiveThreadsDays);
  let obj4 = require("get initialized");
  const items3 = [FavoriteStore];
  const stateFromStores3 = obj4.useStateFromStores(items3, () => FavoriteStore.pruneInactiveThreadsScope);
  const tmp5 = first2(first3.useState(stateFromStores), 2);
  autoAdd = tmp5[0];
  const tmp7 = tmp5[1];
  const tmp8 = first2(first3.useState(stateFromStores1), 2);
  const first1 = tmp8[0];
  const tmp10 = tmp8[1];
  const tmp11 = first2(first3.useState(stateFromStores2), 2);
  first2 = tmp11[0];
  const tmp13 = tmp11[1];
  const tmp14 = first2(first3.useState(stateFromStores3), 2);
  first3 = tmp14[0];
  const tmp16 = tmp14[1];
  [tmp18, FavoriteStore] = first2(first3.useState(false), 2);
  const tmp17 = first2(first3.useState(false), 2);
  [tmp20, closure_6] = first2(first3.useState(false), 2);
  const tmp19 = first2(first3.useState(false), 2);
  let closure_7 = first3.useRef(false);
  let closure_8 = first3.useRef(true);
  const effect = first3.useEffect(() => {
    closure_8.current = true;
    return () => {
      closure_1_8.current = false;
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
  let closure_9 = tmp22;
  let obj5 = {
    autoAdd,
    setAutoAdd: tmp7,
    prune: first1,
    setPrune: tmp10,
    days: first2,
    setDays: tmp13,
    canSave: tmp22,
    scope: first3,
    setScope: tmp16,
    loading: tmp18,
    error: tmp20,
    save() {
      return obj(...arguments);
    }
  };
  return obj5;
};
