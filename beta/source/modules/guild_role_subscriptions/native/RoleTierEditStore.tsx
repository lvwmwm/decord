// Module ID: 17557
// Function ID: 17558
// Name: RoleTierEditStore
// Dependencies: [32, 5, 1248, 1243, 6674, 4452, 5298, 14757, 2]
// Exports: resetImperatively, useCurrentTierEditScene, useGroupCoverState, useGroupDescriptionState, useGroupIsFullGateState, usePriceTiersAvailableInGuild, useResetTierEditState

// Module 17557 (RoleTierEditStore)
import react_native from "react-native" /* 1248 */;
import _slicedToArray2 from "_slicedToArray" /* 4452 */;
import GuildRoleSubscriptionsHttpApiAll from "GuildRoleSubscriptionsHttpApi" /* 6674 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 14757 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_1243 from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, set;

function usePriceTiers(guildId) {
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
  tiers(5298)(() => {
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
}
const LoadingState = { IDLE: 0, [0]: "IDLE", LOADING: 1, [1]: "LOADING", ERROR: 2, [2]: "ERROR" };
let closure_7 = Object.freeze({ currentScene: null, groupCover: null, groupDescription: "", groupIsFullGate: false });
const withEqualityFn = module_1243.createWithEqualityFn((arg0) => {
  let obj;
  const setGroupCover = (arg0) => {
    closure_0 = arg0;
    let obj = closure_0(closure_1_3[2]);
    obj.batchUpdates(() => {
      const obj = { [closure_2_1]: closure_0 };
      return closure_0(obj);
    });
  };
  obj = {
    setScene(currentScene) {
      let obj = currentScene(dependencyMap[2]);
      obj.batchUpdates(() => {
        const obj = { currentScene };
        return currentScene(obj);
      });
    },
    setGroupCover,
    setGroupDescription: setGroupCover,
    setGroupIsFullGate: setGroupCover,
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
            return { value: "HermesInternal", done: null };
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
              return { value: "HermesInternal", done: null };
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
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleTierEditStore.tsx");

export { LoadingState };
export const useRoleTierEditStore = withEqualityFn;
export const resetImperatively = function resetImperatively() {
  withEqualityFn.getState().reset();
};
export const useCurrentTierEditScene = function useCurrentTierEditScene() {
  const items = [, ];
  ({ currentScene: arr[0], setScene: arr[1] } = withEqualityFn());
  withEqualityFn();
  return items;
};
export const useResetTierEditState = function useResetTierEditState() {
  return withEqualityFn((reset) => reset.reset);
};
export { usePriceTiers };
export const usePriceTiersAvailableInGuild = function usePriceTiersAvailableInGuild(guildId) {
  let onRefresh;
  let state;
  const tmp = usePriceTiers(guildId);
  const tiers = tmp.tiers;
  ({ state, onRefresh } = tmp);
  const obj = GuildRoleSubscriptionsHooks;
  const subscriptionListingsForGuild = obj.useSubscriptionListingsForGuild(guildId);
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
};
export const useGroupCoverState = function useGroupCoverState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupCover: arr[0], setGroupCover: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow);
};
export const useGroupDescriptionState = function useGroupDescriptionState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupDescription: arr[0], setGroupDescription: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow);
};
export const useGroupIsFullGateState = function useGroupIsFullGateState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupIsFullGate: arr[0], setGroupIsFullGate: arr[1] } = arg0);
    return items;
  }, _slicedToArray2.shallow);
};
