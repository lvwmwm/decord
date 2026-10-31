// Module ID: 17191
// Function ID: 17192
// Name: GroupListingsFetchContext
// Dependencies: [32, 19, 6568, 4939, 21, 563, 7429, 2]
// Exports: GroupListingsFetchContextProvider, useGroupListingsFetchContext

// Module 17191 (GroupListingsFetchContext)
import Fragment from "Fragment" /* 21 */;
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore" /* 4939 */;
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators" /* 7429 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6568 */;
import size from "module_2" /* 2 */;

const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;

const FetchState = GuildRoleSubscriptionsStore2.FetchState;
let jsx = Fragment.jsx;
const redux = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GroupListingsFetchContext.tsx");

export function useGroupListingsFetchContext(useGroupListingsForGuild) {
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
}
export function GroupListingsFetchContextProvider(guildId) {
  let children;
  let listingsLoaded;
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
  const fetchGroupListingsForGuild = stateFromStores.useCallback(() => {
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
  jsx = tmp6;
  const items3 = [tmp6, fetchGroupListingsForGuild];
  return <redux.Provider value={stateFromStores.useMemo(() => ({ listingsLoaded, fetchGroupListingsForGuild }), items3)}>{children}</redux.Provider>;
}
