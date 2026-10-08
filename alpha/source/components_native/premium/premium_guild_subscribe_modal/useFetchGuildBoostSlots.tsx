// Module ID: 13699
// Function ID: 13700
// Name: useFetchGuildBoostSlots
// Dependencies: [5, 32, 19, 7107, 1998, 558, 576, 504, 1105, 7127, 8000, 2]

// Module 13699 (useFetchGuildBoostSlots)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7107 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, ref, tmp5, tmp8, tmp9;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchGuildBoostSlots() {
  let first;
  let hasFetched;
  let state;
  let stateFromStores;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp = first;
  let obj = first(stateFromStores[6]);
  const cResult = obj.c(9);
  let obj2 = react;
  const tmp4 = ref(react.useState(true), 2);
  first = tmp4[0];
  let closure_1 = tmp4[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildBoostSlotStore];
    const fn = function l() {
      return hasFetched.hasFetched;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = fn;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(stateFromStores[7]);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    const fn2 = function v() {
      return state.getState();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp11 = fn2;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult2 = tmp(stateFromStores[7]);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp11);
  ref = obj2.useRef(stateFromStores1);
  if (cResult[4] === stateFromStores1) {
    if (cResult[5] === stateFromStores) {
      let tmp14;
      let tmp15;
      if (cResult[6] === first) {
        tmp14 = cResult[7];
        tmp15 = cResult[8];
      }
      const effect = obj2.useEffect(tmp14, tmp15);
      return first;
    }
  }
  class B {
    constructor() {
      tmp = closure_0;
      if (tmp) {
        tmp6 = closure_3;
        closure_0 = closure_3(function*(arg0, value) {
          let v1;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: null };
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
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  let resolved;
                  const items = [, , ];
                  const obj7 = closure_2_1(stateFromStores[9]);
                  items[0] = obj7.init();
                  const tmp18 = c2;
                  if (tmp18) {
                    resolved = Promise.resolve();
                  } else {
                    const obj2 = tmp(stateFromStores[10]);
                    resolved = obj2.fetchGuildBoostSlots();
                  }
                  items[1] = resolved;
                  const obj3 = tmp(stateFromStores[10]);
                  items[2] = obj3.fetchAppliedGuildBoostsForUser();
                  c1 = 1;
                  c2 = 1;
                  const obj6 = { value: all(items), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c1(false);
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp11) {
              c2 = 3;
              throw tmp11;
            }
          }
        });
        tmp7 = closure_4;
        tmp8 = closure_3;
        closure_4.current = closure_3;
        tmp9 = (function fetch() {
          return closure_0(...arguments);
        })();
      } else {
        tmp3 = closure_4;
        if (closure_3 !== closure_4.current) {
          tmp4 = closure_0;
          tmp5 = closure_2;
        }
      }
      return;
    }
  }
  const items2 = [stateFromStores1, stateFromStores, first];
  cResult[4] = stateFromStores1;
  cResult[5] = stateFromStores;
  cResult[6] = first;
  cResult[7] = B;
  cResult[8] = items2;
  tmp15 = items2;
  tmp14 = B;
}) : (function useFetchGuildBoostSlots() {
  let hasFetched;
  let state;
  let stateFromStores;
  let tmp = ref(react.useState(true), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  let obj = first(stateFromStores[7]);
  let items = [GuildBoostSlotStore];
  stateFromStores = obj.useStateFromStores(items, () => hasFetched.hasFetched);
  let obj2 = first(stateFromStores[7]);
  const items1 = [AppStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState());
  ref = react.useRef(stateFromStores1);
  const items2 = [stateFromStores1, stateFromStores, first];
  const effect = react.useEffect(() => {
    let obj;
    function fetch() {
      return obj(...arguments);
    }
    const tmp = obj;
    if (tmp) {
      obj = function _fetch2() {
        obj = _asyncToGenerator(async (arg0, value) => {
          let v1;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj4 = { value, done: true };
              return obj4;
            } else {
              return { value: "IconComponent", done: null };
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
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  let resolved;
                  let closure_0 = tmp;
                  const items = [, , ];
                  const obj7 = closure_2_1(stateFromStores[9]);
                  items[0] = obj7.init();
                  const tmp18 = c2;
                  if (tmp18) {
                    resolved = Promise.resolve();
                  } else {
                    const obj2 = closure_2_0(stateFromStores[10]);
                    resolved = obj2.fetchGuildBoostSlots();
                  }
                  items[1] = resolved;
                  const obj3 = closure_2_0(stateFromStores[10]);
                  items[2] = obj3.fetchAppliedGuildBoostsForUser();
                  c1 = 1;
                  c2 = 1;
                  const obj6 = { value: all(items), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c1(false);
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp11) {
              c2 = 3;
              throw tmp11;
            }
          }
        });
        return obj(...arguments);
      };
      ref.current = stateFromStores1;
      fetch();
    } else {
      const tmp3 = ref;
    }
  }, items2);
  return first;
});
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx");

export default tmp2;
