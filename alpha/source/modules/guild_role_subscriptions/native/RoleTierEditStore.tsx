// Module ID: 18421
// Function ID: 18422
// Name: RoleTierEditStore
// Dependencies: [32, 5, 1272, 1267, 6952, 558, 576, 4692, 5393, 15420, 2]
// Exports: resetImperatively

// Module 18421 (RoleTierEditStore)
import react from "react" /* 576 */;
import react_native from "react-native" /* 1272 */;
import GuildRoleSubscriptionsHttpApiAll from "GuildRoleSubscriptionsHttpApi" /* 6952 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15420 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_1267 from "module_1267" /* 1267 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, dependencyMap, set;

let tmp;
const _slicedToArray2 = tmp(4692);
let _slicedToArray = _slicedToArray_mod;
const LoadingState = { IDLE: 0, [0]: "IDLE", LOADING: 1, [1]: "LOADING", ERROR: 2, [2]: "ERROR" };
let closure_7 = Object.freeze({ currentScene: null, groupCover: null, groupDescription: "", groupIsFullGate: false });
const withEqualityFn = module_1267.createWithEqualityFn((arg0) => {
  let obj;
  function nestedUpdate(arg0) {
    closure_0 = arg0;
    let obj = closure_0(closure_1_3[2]);
    obj.batchUpdates(() => {
      const obj = { [closure_2_1]: closure_0 };
      return closure_0(obj);
    });
  }
  obj = {
    setScene(currentScene) {
      let obj = currentScene(dependencyMap[2]);
      obj.batchUpdates(() => {
        const obj = { currentScene };
        return currentScene(obj);
      });
    },
    setGroupCover: nestedUpdate,
    setGroupDescription: nestedUpdate,
    setGroupIsFullGate: nestedUpdate,
    priceTiers: null,
    priceTierState: obj.IDLE,
    loadPriceTiers(arg0) {
      closure_0 = arg0;
      return (async (arg0, value) => {
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
          let c2;
          try {
            let priceTiers;
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                let closure_1 = tmp;
                priceTiers = undefined;
                c2 = 1;
                const obj4 = priceTiers(dependencyMap[2]);
                obj4.batchUpdates(() => {
                  const obj = { priceTierState: constants.LOADING };
                  return priceTiers(obj);
                });
                c3 = 2;
                c4 = 1;
                const obj7 = { value: obj5.getPriceTiers(priceTiers), done: false };
                obj5 = GuildRoleSubscriptionsHttpApiAll;
                return obj7;
              }
            } else {
              if (1 === c3) {
                c2 = 0;
                const obj3 = priceTiers(dependencyMap[2]);
                obj3.batchUpdates(() => {
                  const obj = { priceTierState: constants.ERROR };
                  return priceTiers(obj);
                });
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                priceTiers = value;
                let obj = priceTiers(dependencyMap[2]);
                obj.batchUpdates(() => {
                  const obj = { priceTiers, priceTierState: constants.IDLE };
                  return priceTiers(obj);
                });
                c2 = 0;
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp21) {
            if (0 === c2) {
              c4 = 3;
              throw tmp21;
            } else {
              c3 = 1;
            }
          }
        }
      })();
    },
    reset() {
      const obj = react_native;
      obj.batchUpdates(() => closure_1_0(closure_2_7));
    }
  };
  const merged = Object.assign(closure_7);
  const groupCover = "groupCover";
  const groupDescription = "groupDescription";
  let closure_0 = arg0;
  const groupIsFullGate = "groupIsFullGate";
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentTierEditScene() {
  let currentScene;
  let setScene;
  const obj = react;
  const cResult = obj.c(3);
  ({ currentScene, setScene } = withEqualityFn());
  withEqualityFn();
  if (cResult[0] === currentScene) {
    let tmp3;
    if (cResult[1] === setScene) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const items = [currentScene, setScene];
  cResult[0] = currentScene;
  cResult[1] = setScene;
  cResult[2] = items;
  tmp3 = items;
}) : (function useCurrentTierEditScene() {
  const items = [, ];
  ({ currentScene: arr[0], setScene: arr[1] } = withEqualityFn());
  withEqualityFn();
  return items;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useResetTierEditState() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(reset) {
      return reset.reset;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return withEqualityFn(first);
}) : (function useResetTierEditState() {
  return withEqualityFn((reset) => reset.reset);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePriceTiers(guildId) {
  let closure_3;
  let closure_4;
  let first;
  _require = guildId;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0) {
      const items = [, , ];
      ({ priceTiers: arr[0], priceTierState: arr[1], loadPriceTiers: arr[2] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = _slicedToArray(withEqualityFn(first, tmp(4692).shallow), 3);
  const first1 = tmp5[0];
  let closure_2 = tmp7;
  dependencyMap = tmp8;
  if (cResult[1] === tmp5[2]) {
    if (cResult[2] === tmp5[1]) {
      let tmp9;
      if (cResult[3] === first1) {
        tmp9 = cResult[4];
      }
      _slicedToArray = tmp9;
      if (cResult[5] === guildId) {
        let tmp10;
        if (cResult[6] === tmp9) {
          tmp10 = cResult[7];
        }
        first1(5393)(tmp10);
        if (cResult[8] === guildId) {
          if (cResult[9] === tmp9) {
            if (cResult[10] === tmp5[1]) {
              let tmp13;
              if (cResult[11] === first1) {
                tmp13 = cResult[12];
              }
              return tmp13;
            }
          }
        }
        const obj2 = { tiers: first1, state: tmp5[1], onRefresh: tmp9, guildId };
        cResult[8] = guildId;
        cResult[9] = tmp9;
        cResult[10] = tmp5[1];
        cResult[11] = first1;
        cResult[12] = obj2;
        tmp13 = obj2;
      }
      const fn2 = function h() {
        closure_4(guildId);
      };
      cResult[5] = guildId;
      cResult[6] = tmp9;
      cResult[7] = fn2;
      tmp10 = fn2;
    }
  }
  function onRefresh(arg0) {
    const tmp = null == first1 && closure_2 !== obj.LOADING;
    if (tmp) {
      closure_3(arg0);
    }
  }
  cResult[1] = tmp5[2];
  cResult[2] = tmp5[1];
  cResult[3] = first1;
  cResult[4] = onRefresh;
  tmp9 = onRefresh;
}) : (function usePriceTiers(guildId) {
  let closure_3;
  let tiers;
  let tmp3;
  _require = guildId;
  [tiers, tmp3, dependencyMap] = withEqualityFn((arg0) => {
    const items = [, , ];
    ({ priceTiers: arr[0], priceTierState: arr[1], loadPriceTiers: arr[2] } = arg0);
    return items;
  }, require("_slicedToArray").shallow);
  let closure_2 = tmp3;
  tiers(5393)(() => {
    let tmp2 = null == first;
    const tmp = guildId;
    if (tmp2) {
      tmp2 = closure_2 !== obj.LOADING;
    }
    if (tmp2) {
      closure_3(tmp);
    }
  });
  const obj = {
    tiers,
    state: tmp3,
    onRefresh(arg0) {
      const tmp = null == first && closure_2 !== obj.LOADING;
      if (tmp) {
        closure_3(arg0);
      }
    },
    guildId
  };
  return obj;
});
let closure_9 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePriceTiersAvailableInGuild(arg0) {
  let onRefresh;
  let state;
  let tiers;
  const obj = react;
  const cResult = obj.c(9);
  ({ tiers, state, onRefresh } = closure_9(arg0));
  closure_9(arg0);
  const obj2 = GuildRoleSubscriptionsHooks;
  const subscriptionListingsForGuild = obj2.useSubscriptionListingsForGuild(arg0);
  if (cResult[0] !== subscriptionListingsForGuild) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    let closure_0 = set;
    for (const item10029 of subscriptionListingsForGuild) {
      let addResult = set.add(item10029.subscription_plans[0].price);
      continue;
    }
    cResult[0] = subscriptionListingsForGuild;
    cResult[1] = set;
  } else {
    closure_0 = cResult[1];
  }
  if (cResult[2] === tiers) {
    let tmp10;
    if (cResult[3] === tmp4) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === onRefresh) {
      if (cResult[6] === state) {
        let tmp12;
        if (cResult[7] === tmp10) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
    const obj3 = { tiers: tmp10, state, onRefresh };
    cResult[5] = onRefresh;
    cResult[6] = state;
    cResult[7] = tmp10;
    cResult[8] = obj3;
    tmp12 = obj3;
  }
  let found;
  if (tiers != null) {
    found = tiers.filter((item) => !set.has(item));
  }
  cResult[2] = tiers;
  cResult[3] = tmp4;
  cResult[4] = found;
  tmp10 = found;
}) : (function usePriceTiersAvailableInGuild(arg0) {
  let onRefresh;
  let state;
  const tmp = closure_9(arg0);
  const tiers = tmp.tiers;
  ({ state, onRefresh } = tmp);
  const obj = GuildRoleSubscriptionsHooks;
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(arg0);
  set = new Set();
  for (const item10022 of subscriptionListingsForGuild) {
    let addResult = set.add(item10022.subscription_plans[0].price);
    continue;
  }
  let tiers1;
  if (tiers != null) {
    tiers1 = tiers.filter((item) => !set.has(item));
  }
  return { tiers: tiers1, state, onRefresh };
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGroupCoverState() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ groupCover: arr[0], setGroupCover: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return withEqualityFn(first, _slicedToArray2.shallow);
}) : (function useGroupCoverState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupCover: arr[0], setGroupCover: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGroupDescriptionState() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ groupDescription: arr[0], setGroupDescription: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return withEqualityFn(first, _slicedToArray2.shallow);
}) : (function useGroupDescriptionState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupDescription: arr[0], setGroupDescription: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGroupIsFullGateState() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ groupIsFullGate: arr[0], setGroupIsFullGate: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return withEqualityFn(first, _slicedToArray2.shallow);
}) : (function useGroupIsFullGateState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupIsFullGate: arr[0], setGroupIsFullGate: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleTierEditStore.tsx");

export { LoadingState };
export const useRoleTierEditStore = withEqualityFn;
export const resetImperatively = function resetImperatively() {
  withEqualityFn.getState().reset();
};
export const useCurrentTierEditScene = tmp3;
export const useResetTierEditState = tmp4;
export const usePriceTiers = tmp5;
export const usePriceTiersAvailableInGuild = tmp6;
export const useGroupCoverState = tmp7;
export const useGroupDescriptionState = tmp8;
export const useGroupIsFullGateState = tmp9;
