// Module ID: 17569
// Function ID: 17570
// Name: useFavoritesCleanup
// Dependencies: [5, 32, 19, 4823, 4903, 6771, 4826, 17570, 504, 10858, 10845, 2]
// Exports: default

// Module 17569 (useFavoritesCleanup)
import FavoritesCleanup from "FavoritesCleanup" /* 10858 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import ReadStateStore from "ReadStateStore" /* 6771 */;
import FavoriteStore from "FavoriteStore" /* 4826 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, c5, channel, closure_0, closure_2, set;

const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesCleanup.tsx");

export default function useFavoritesCleanup(arg0) {
  let closure_5;
  let closure_6;
  let closure_8;
  let first;
  let first1;
  let first2;
  let first3;
  let first4;
  let first5;
  let first6;
  let tmp10;
  let tmp12;
  let tmp22;
  let tmp4;
  let tmp7;
  _require = arg0;
  let obj = function _review() {
    let ref;
    obj = _asyncToGenerator(async function(arg0, value) {
      let obj5;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              closure_0 = undefined;
              const tmp75 = isMatch;
              if (tmp75) {
                if (!ref.current) {
                  ref.current = true;
                  _slicedToArray(true);
                  closure_2_5(false);
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: obj5.loadFavoriteThreadsForCleanup(first1), done: false };
                  obj5 = closure_0(closure_2[9]);
                  return obj6;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_11.current = false;
            const tmp50 = closure_2;
            if (closure_129_12.current) {
              closure_129_4(false);
            }
            throw tmp50;
          } else {
            if (2 === c4) {
              c3 = 1;
              if (closure_129_12.current) {
                closure_129_5(true);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_11.current = false;
              if (closure_129_12.current) {
                closure_129_4(false);
              }
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else if (closure_129_12.current) {
              const obj8 = { days: closure_129_13, categoryId: closure_129_1 };
              obj = closure_0(closure_2[9]);
              const favoritesCleanupCandidates = obj.getFavoritesCleanupCandidates(obj8);
              closure_0 = favoritesCleanupCandidates.map((id) => id.id);
              const _Set = Set;
              const self = this;
              const self2 = this;
              set = new Set(closure_0);
              closure_129_8(set);
              closure_129_10(closure_0);
              const obj3 = closure_0(closure_2[9]);
              const favoriteThreadIdsForCleanup = obj3.getFavoriteThreadIdsForCleanup(closure_129_1);
              closure_129_6(favoriteThreadIdsForCleanup.filter((item) => {
                channel = channel.getChannel(item);
                let threadMetadata;
                if (channel != null) {
                  threadMetadata = channel.threadMetadata;
                }
                return null == threadMetadata;
              }).length);
              closure_129_3("review");
              c3 = 1;
            } else {
              c3 = 0;
              closure_129_11.current = false;
              if (closure_129_12.current) {
                closure_129_4(false);
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
            c3 = 0;
            closure_129_11.current = false;
            if (closure_129_12.current) {
              closure_129_4(false);
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp66) {
          closure_2 = tmp66;
          if (0 === c3) {
            c5 = 3;
            throw tmp66;
          } else if (1 === tmp68) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _remove() {
    let categoryId;
    let length;
    let ref;
    obj = _asyncToGenerator(async (arg0, value) => {
      let obj5;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj3 = { value, done: true };
              return obj3;
            } else if (!ref.current) {
              const arr = length;
              if (0 !== length.length) {
                ref.current = true;
                _slicedToArray(true);
                closure_2_5(false);
                c3 = 2;
                const obj4 = { days, categoryId };
                c1 = 3;
                c4 = 1;
                const obj6 = { value: obj5.removeInactiveFavoriteThreads(arr.map((id) => id.id), obj4), done: false };
                obj5 = tmp(closure_2[10]);
                return obj6;
              }
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_11.current = false;
            const tmp28 = closure_2;
            if (closure_128_12.current) {
              closure_128_4(false);
            }
            throw tmp28;
          } else {
            if (2 === c1) {
              c3 = 1;
              if (closure_128_12.current) {
                closure_128_5(true);
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_11.current = false;
              if (closure_128_12.current) {
                closure_128_4(false);
              }
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (closure_128_12.current) {
                closure_128_0();
              }
              c3 = 1;
            }
            c3 = 0;
            closure_128_11.current = false;
            if (closure_128_12.current) {
              closure_128_4(false);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp35) {
          closure_2 = tmp35;
          if (0 === c3) {
            c4 = 3;
            throw tmp35;
          } else if (1 === tmp37) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = first2;
  obj = first1(first2[7])();
  [first, tmp4] = react.useState("30");
  [first1, tmp7] = react.useState(null);
  [first2, tmp10] = react.useState("filter");
  let closure_3 = tmp10;
  const tmp11 = _slicedToArray(react.useState(false), 2);
  [tmp12, _slicedToArray] = tmp11;
  [first3, react] = react.useState(false);
  [first4, closure_6] = react.useState(0);
  const useState = react.useState;
  set = new Set();
  [first5, closure_8] = useState(set);
  [first6, tmp22] = react.useState([]);
  let closure_10 = tmp22;
  let closure_11 = react.useRef(false);
  let closure_12 = react.useRef(true);
  const effect = react.useEffect(() => {
    closure_12.current = true;
    return () => {
      closure_1_12.current = false;
    };
  }, []);
  const NumberResult = Number(first);
  const days = NumberResult;
  let obj2 = /^\d+$/;
  let isMatch = obj2.test(first);
  if (isMatch) {
    const _Number = Number;
    isMatch = Number.isSafeInteger(NumberResult);
  }
  if (isMatch) {
    isMatch = NumberResult >= 1;
  }
  if (isMatch) {
    isMatch = NumberResult <= 36500;
  }
  let obj3 = require("get initialized");
  let items = [first6, closure_6, first5, closure_8];
  const items1 = [first2, NumberResult, first1, first5];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items, () => {
    let items;
    if ("filter" === first2) {
      items = [];
    } else {
      const obj2 = { days, categoryId: first1 };
      obj = FavoritesCleanup;
      const favoritesCleanupCandidates = obj.getFavoritesCleanupCandidates(obj2);
      items = favoritesCleanupCandidates.filter((id) => set.has(id.id));
    }
    return items;
  }, items1);
  const found = stateFromStoresArray.filter((id) => first6.includes(id.id));
  let closure_17 = tmp26;
  let obj4 = {
    categories: obj.flatMap((id) => {
      let items;
      if (null == id.id) {
        items = [];
      } else {
        obj = { id: null, name: null };
        ({ id: obj.id, name: obj.name } = id);
        items = [obj];
      }
      return items;
    }),
    days: first,
    setDays: tmp4,
    validDays: isMatch,
    categoryId: first1,
    setCategoryId: tmp7,
    stage: first2,
    setStage: tmp10,
    loading: tmp12,
    error: first3,
    unknownCount: first4,
    candidates: stateFromStoresArray,
    selectedIds: first6,
    setSelectedIds: tmp22,
    selectedThreads: found,
    allSelected: tmp26,
    toggleSelection() {
      let items;
      const tmp = closure_10;
      if (closure_17) {
        items = [];
      } else {
        items = stateFromStoresArray.map((id) => id.id);
      }
      tmp(items);
    },
    review() {
      return obj(...arguments);
    },
    remove() {
      return obj(...arguments);
    }
  };
  return obj4;
};
