// Module ID: 14758
// Function ID: 14759
// Name: GroupListingsFetchContext
// Dependencies: [32, 19, 5589, 4462, 21, 563, 6673, 2]
// Exports: GroupListingsFetchContextProvider, useGroupListingsFetchContext

// Module 14758 (GroupListingsFetchContext)
import Fragment from "Fragment" /* 21 */;
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore" /* 4462 */;
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators" /* 6673 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import size from "module_2" /* 2 */;

const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;

const FetchState = GuildRoleSubscriptionsStore2.FetchState;
const jsx = Fragment.jsx;
const redux = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GroupListingsFetchContext.tsx");

export const useGroupListingsFetchContext = function useGroupListingsFetchContext(useGroupListingsForGuild) {
  const context = react.useContext(redux);
  const obj = react;
  if (null == context) {
    let str = useGroupListingsForGuild;
    const _Error = Error;
    if (useGroupListingsForGuild == null) {
      str = "useGroupListingsFetchContext";
    }
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const _Error1 = new _Error("" + str + " must be used within a GroupListingsFetchContextProvider");
    throw _Error1;
  } else {
    const fetchGroupListingsForGuild = context.fetchGroupListingsForGuild;
    const items = [fetchGroupListingsForGuild];
    const listingsLoaded = context.listingsLoaded;
    const effect = obj.useEffect(() => {
      fetchGroupListingsForGuild();
    }, items);
    return listingsLoaded;
  }
};
export const GroupListingsFetchContextProvider = function GroupListingsFetchContextProvider(guildId) {
  let children;
  let refetchOnMount;
  guildId = guildId.guildId;
  const includeSoftDeleted = guildId.includeSoftDeleted;
  const countryCode = guildId.countryCode;
  const dontFetchWhileTrue = guildId.dontFetchWhileTrue;
  let first;
  let closure_6;
  ({ children, refetchOnMount } = guildId);
  let obj = guildId(countryCode[5]);
  const items = [first];
  const stateFromStores = obj.useStateFromStores(items, () => first.isConnected());
  let obj2 = guildId(countryCode[5]);
  const items1 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let FETCHED;
    if (null != guildId) {
      FETCHED = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(tmp);
    } else {
      FETCHED = FetchState.FETCHED;
    }
    return FETCHED;
  });
  const tmp3 = dontFetchWhileTrue(stateFromStores.useState(true === refetchOnMount), 2);
  first = tmp3[0];
  closure_6 = tmp3[1];
  const items2 = [stateFromStores, guildId, includeSoftDeleted, countryCode, dontFetchWhileTrue, first];
  let tmp6 = stateFromStores1 === FetchState.FETCHED;
  const callback = stateFromStores.useCallback(() => {
    const tmp = guildId;
    if (null != guildId) {
      const tmp14 = stateFromStores;
      if (tmp14) {
        if (true !== dontFetchWhileTrue) {
          const tmp5 = first || tmp4 === FetchState.NOT_FETCHED;
          if (tmp5) {
            closure_6(false);
            const obj2 = { includeSoftDeleted, countryCode };
            const obj = GuildRoleSubscriptionsActionCreatorsAll;
            const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(tmp, obj2);
          }
        }
      }
    }
  }, items2);
  if (tmp6) {
    tmp6 = !first;
  }
  return <redux.Provider value={{ listingsLoaded: tmp6, fetchGroupListingsForGuild: callback }}>{children}</redux.Provider>;
};
