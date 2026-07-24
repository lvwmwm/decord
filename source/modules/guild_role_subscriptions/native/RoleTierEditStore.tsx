// Module ID: 16471
// Function ID: 128294
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 682, 677, 5637, 3743, 4559, 14151, 2]
// Exports: resetImperatively, useCurrentTierEditScene, useGroupCoverState, useGroupDescriptionState, useGroupIsFullGateState, usePriceTiersAvailableInGuild, useResetTierEditState

// Module 16471 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import isIterable from "isIterable";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function keyUpdater(arg0, groupCover) {
  let closure_0 = arg0;
  let closure_1 = groupCover;
  return (arg0) => {
    const callback = arg0;
    callback(outer1_3[2]).batchUpdates(() => callback({ [outer1_1]: callback }));
  };
}
function usePriceTiers(guildId) {
  const _require = guildId;
  function onRefresh(arg0, arg1) {
    let tmp = null == first;
    if (tmp) {
      tmp = closure_2 !== outer1_6.LOADING;
    }
    if (tmp) {
      callback(arg0);
    }
  }
  let tmp = onRefresh(withEqualityFn((arg0) => {
    const items = [, , ];
    ({ priceTiers: arr[0], priceTierState: arr[1], loadPriceTiers: arr[2] } = arg0);
    return items;
  }, _require(3743).shallow), 3);
  const first = tmp[0];
  const importAll = tmp3;
  const dependencyMap = tmp[2];
  first(4559)(() => {
    onRefresh(closure_0);
  });
  return { tiers: first, state: tmp[1], onRefresh, guildId };
}
let obj = { IDLE: 0, [0]: "IDLE", LOADING: 1, [1]: "LOADING", ERROR: 2, [2]: "ERROR" };
let closure_7 = Object.freeze({ currentScene: null, groupCover: null, groupDescription: "", groupIsFullGate: false });
const withEqualityFn = useStoreWithEqualityFn.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  const obj = {};
  const merged = Object.assign(closure_7);
  obj["setScene"] = function setScene(arg0) {
    const callback = arg0;
    callback(outer1_3[2]).batchUpdates(() => callback({ currentScene: callback }));
  };
  obj["setGroupCover"] = keyUpdater(arg0, "groupCover");
  obj["setGroupDescription"] = keyUpdater(arg0, "groupDescription");
  obj["setGroupIsFullGate"] = keyUpdater(arg0, "groupIsFullGate");
  obj["priceTiers"] = null;
  obj["priceTierState"] = obj.IDLE;
  obj["loadPriceTiers"] = function loadPriceTiers(arg0) {
    let closure_0 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return outer1_5(tmp)();
  };
  obj["reset"] = function reset() {
    callback(outer1_3[2]).batchUpdates(() => outer1_0(outer2_7));
  };
  return obj;
});
const result = require("batchUpdates").fileFinishedImporting("modules/guild_role_subscriptions/native/RoleTierEditStore.tsx");

export const LoadingState = obj;
export const useRoleTierEditStore = withEqualityFn;
export const resetImperatively = function resetImperatively() {
  withEqualityFn.getState().reset();
};
export const useCurrentTierEditScene = function useCurrentTierEditScene() {
  const items = [, ];
  ({ currentScene: arr[0], setScene: arr[1] } = withEqualityFn());
  return items;
};
export const useResetTierEditState = function useResetTierEditState() {
  return withEqualityFn((reset) => reset.reset);
};
export { usePriceTiers };
export const usePriceTiersAvailableInGuild = function usePriceTiersAvailableInGuild(guildId) {
  let done;
  let onRefresh;
  let state;
  const tmp = usePriceTiers(guildId);
  const tiers = tmp.tiers;
  ({ state, onRefresh } = tmp);
  let obj = set(14151);
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId);
  set = new Set();
  const tmp3 = _createForOfIteratorHelperLoose(subscriptionListingsForGuild);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let addResult = set.add(iter.value.subscription_plans[0].price);
      let iter2 = tmp3();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  obj = {};
  let found;
  if (null != tiers) {
    found = tiers.filter((arg0) => !set.has(arg0));
  }
  obj.tiers = found;
  obj.state = state;
  obj.onRefresh = onRefresh;
  return obj;
};
export const useGroupCoverState = function useGroupCoverState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupCover: arr[0], setGroupCover: arr[1] } = arg0);
    return items;
  }, require(3743) /* isIterable */.shallow);
};
export const useGroupDescriptionState = function useGroupDescriptionState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupDescription: arr[0], setGroupDescription: arr[1] } = arg0);
    return items;
  }, require(3743) /* isIterable */.shallow);
};
export const useGroupIsFullGateState = function useGroupIsFullGateState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupIsFullGate: arr[0], setGroupIsFullGate: arr[1] } = arg0);
    return items;
  }, require(3743) /* isIterable */.shallow);
};
