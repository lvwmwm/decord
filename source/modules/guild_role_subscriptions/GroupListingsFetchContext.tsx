// Module ID: 14102
// Function ID: 108502
// Name: useGroupListingsFetchContext
// Dependencies: [57, 31, 4808, 3752, 33, 624, 5636, 2]
// Exports: GroupListingsFetchContextProvider, useGroupListingsFetchContext

// Module 14102 (useGroupListingsFetchContext)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
let context = importAllResult.createContext(undefined);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/GroupListingsFetchContext.tsx");

export const useGroupListingsFetchContext = function useGroupListingsFetchContext(useGroupListingsForGuild) {
  const context = importAllResult.useContext(closure_9);
  if (null == context) {
    let _Error = Error;
    let str = "useGroupListingsFetchContext";
    if (null != useGroupListingsForGuild) {
      str = useGroupListingsForGuild;
    }
    const _HermesInternal = HermesInternal;
    const prototype = _Error.prototype;
    _Error = new _Error("" + str + " must be used within a GroupListingsFetchContextProvider");
    throw _Error;
  } else {
    const fetchGroupListingsForGuild = context.fetchGroupListingsForGuild;
    const items = [fetchGroupListingsForGuild];
    const effect = importAllResult.useEffect(() => {
      fetchGroupListingsForGuild();
    }, items);
    return context.listingsLoaded;
  }
};
export const GroupListingsFetchContextProvider = function GroupListingsFetchContextProvider(guildId) {
  let children;
  let refetchOnMount;
  guildId = guildId.guildId;
  const includeSoftDeleted = guildId.includeSoftDeleted;
  const countryCode = guildId.countryCode;
  const dontFetchWhileTrue = guildId.dontFetchWhileTrue;
  ({ children, refetchOnMount } = guildId);
  let value = guildId(countryCode[5]);
  const items = [first];
  const stateFromStores = value.useStateFromStores(items, () => first.isConnected());
  const items1 = [closure_6];
  const stateFromStores1 = guildId(countryCode[5]).useStateFromStores(items1, () => {
    if (null != guildId) {
      let FETCHED = subscriptionGroupListingsForGuildFetchState.getSubscriptionGroupListingsForGuildFetchState(guildId);
    } else {
      FETCHED = outer1_7.FETCHED;
    }
    return FETCHED;
  });
  const tmp3 = dontFetchWhileTrue(stateFromStores.useState(true === refetchOnMount), 2);
  first = tmp3[0];
  closure_6 = tmp3[1];
  const items2 = [stateFromStores, guildId, includeSoftDeleted, countryCode, dontFetchWhileTrue, first];
  let tmp6 = stateFromStores1 === FetchState.FETCHED;
  const callback = stateFromStores.useCallback(() => {
    if (null != guildId) {
      if (stateFromStores) {
        if (true !== dontFetchWhileTrue) {
          let tmp5 = first;
          if (!first) {
            tmp5 = tmp4 === outer1_7.NOT_FETCHED;
          }
          if (tmp5) {
            subscriptionGroupListingsForGuildFetchState(false);
            let obj = includeSoftDeleted(countryCode[6]);
            obj = { includeSoftDeleted, countryCode };
            const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(guildId, obj);
          }
        }
      }
    }
  }, items2);
  if (tmp6) {
    tmp6 = !first;
  }
  value = { listingsLoaded: tmp6, fetchGroupListingsForGuild: callback };
  return <redux.Provider value={value}>{children}</redux.Provider>;
};
