// Module ID: 16284
// Function ID: 125662
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: resetImperatively, useCurrentTierEditScene, useGroupCoverState, useGroupDescriptionState, useGroupIsFullGateState, usePriceTiersAvailableInGuild, useResetTierEditState

// Module 16284 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  groupCover = arg0;
  const importDefault = groupCover;
  return (arg0) => {
    arg0(closure_3[2]).batchUpdates(() => arg0({ [closure_1]: arg0 }));
  };
}
function usePriceTiers(guildId) {
  const arg1 = guildId;
  function onRefresh(arg0) {
    let tmp = null == first;
    if (tmp) {
      tmp = tmp3 !== constants.LOADING;
    }
    if (tmp) {
      callback(arg0);
    }
  }
  const callback = onRefresh;
  const tmp = callback(withEqualityFn((arg0) => {
    const items = [, , ];
    ({ priceTiers: arr[0], priceTierState: arr[1], loadPriceTiers: arr[2] } = arg0);
    return items;
  }, arg1(closure_3[5]).shallow), 3);
  const first = tmp[0];
  const importDefault = first;
  const importAll = tmp3;
  closure_3 = tmp[2];
  importDefault(closure_3[6])(() => {
    onRefresh(arg0);
  });
  return { tiers: first, state: tmp[1], onRefresh, guildId };
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const obj = { IDLE: 0, [0]: "IDLE", LOADING: 1, [1]: "LOADING", ERROR: 2, [2]: "ERROR" };
let closure_7 = Object.freeze({});
const withEqualityFn = arg1(dependencyMap[3]).createWithEqualityFn((arg0) => {
  const arg1 = arg0;
  const obj = {};
  const merged = Object.assign(closure_7);
  obj["setScene"] = function setScene(arg0) {
    arg0(closure_3[2]).batchUpdates(() => arg0({ currentScene: arg0 }));
  };
  obj["setGroupCover"] = keyUpdater(arg0, "groupCover");
  obj["setGroupDescription"] = keyUpdater(arg0, "groupDescription");
  obj["setGroupIsFullGate"] = keyUpdater(arg0, "groupIsFullGate");
  obj["priceTiers"] = null;
  obj["priceTierState"] = obj.IDLE;
  obj["loadPriceTiers"] = function loadPriceTiers(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  };
  obj["reset"] = function reset() {
    arg0(closure_3[2]).batchUpdates(() => callback(closure_7));
  };
  return obj;
});
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_role_subscriptions/native/RoleTierEditStore.tsx");

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
  let obj = arg1(dependencyMap[7]);
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId);
  const set = new Set();
  const arg1 = set;
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
  }, arg1(dependencyMap[5]).shallow);
};
export const useGroupDescriptionState = function useGroupDescriptionState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupDescription: arr[0], setGroupDescription: arr[1] } = arg0);
    return items;
  }, arg1(dependencyMap[5]).shallow);
};
export const useGroupIsFullGateState = function useGroupIsFullGateState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupIsFullGate: arr[0], setGroupIsFullGate: arr[1] } = arg0);
    return items;
  }, arg1(dependencyMap[5]).shallow);
};
