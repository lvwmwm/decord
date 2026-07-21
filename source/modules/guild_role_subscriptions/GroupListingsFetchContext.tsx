// Module ID: 13978
// Function ID: 106274
// Name: useGroupListingsFetchContext
// Dependencies: []
// Exports: GroupListingsFetchContextProvider, useGroupListingsFetchContext

// Module 13978 (useGroupListingsFetchContext)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const FetchState = arg1(dependencyMap[3]).FetchState;
const jsx = arg1(dependencyMap[4]).jsx;
const context = importAllResult.createContext(undefined);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_role_subscriptions/GroupListingsFetchContext.tsx");

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
    const arg1 = fetchGroupListingsForGuild;
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
  const arg1 = guildId;
  const includeSoftDeleted = guildId.includeSoftDeleted;
  const importAll = includeSoftDeleted;
  const countryCode = guildId.countryCode;
  const dependencyMap = countryCode;
  const dontFetchWhileTrue = guildId.dontFetchWhileTrue;
  let callback = dontFetchWhileTrue;
  ({ children, refetchOnMount } = guildId);
  let value = arg1(dependencyMap[5]);
  const items = [closure_5];
  const stateFromStores = value.useStateFromStores(items, () => first.isConnected());
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    if (null != guildId) {
      let FETCHED = subscriptionGroupListingsForGuildFetchState.getSubscriptionGroupListingsForGuildFetchState(guildId);
    } else {
      FETCHED = constants.FETCHED;
    }
    return FETCHED;
  });
  const tmp3 = callback(stateFromStores.useState(true === refetchOnMount), 2);
  const first = tmp3[0];
  closure_5 = first;
  closure_6 = tmp3[1];
  const items2 = [stateFromStores, guildId, includeSoftDeleted, countryCode, dontFetchWhileTrue, first];
  let tmp6 = stateFromStores1 === FetchState.FETCHED;
  callback = importAllResult.useCallback(() => {
    if (null != guildId) {
      if (stateFromStores) {
        if (true !== dontFetchWhileTrue) {
          let tmp5 = first;
          if (!first) {
            tmp5 = tmp4 === constants.NOT_FETCHED;
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
