// Module ID: 15140
// Function ID: 114256
// Name: useTrackRoleSubscriptionUpsellAnalytics
// Dependencies: []
// Exports: default

// Module 15140 (useTrackRoleSubscriptionUpsellAnalytics)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx");

export default function useTrackRoleSubscriptionUpsellAnalytics(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const groupListingId = guildId.groupListingId;
  const importDefault = groupListingId;
  const _location = guildId.location;
  const dependencyMap = _location;
  const relevantSubscriptionListingIds = guildId.relevantSubscriptionListingIds;
  const React = relevantSubscriptionListingIds;
  let analyticsLocations;
  let closure_8;
  const groupListingsFetchContext = arg1(dependencyMap[3]).useGroupListingsFetchContext("useTrackRoleSubscriptionUpsellAnalytics");
  let closure_4 = groupListingsFetchContext;
  const tmp2 = null != importDefault(dependencyMap[4])(groupListingId).activeSubscription;
  const AnalyticEvents = tmp2;
  const obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const items1 = [relevantSubscriptionListingIds];
  const stateFromStoresArray = arg1(dependencyMap[5]).useStateFromStoresArray(items, () => null != relevantSubscriptionListingIds ? relevantSubscriptionListingIds : [].filter((arg0) => {
    const subscriptionListing = subscriptionListing.getSubscriptionListing(arg0);
    let published;
    if (null != subscriptionListing) {
      published = subscriptionListing.published;
    }
    return true === published;
  }), items1);
  const obj2 = arg1(dependencyMap[5]);
  const tmp4 = importDefault(dependencyMap[6]);
  let lastRouteChangeSourceLocationStack = arg1(dependencyMap[7]).getLastRouteChangeSourceLocationStack();
  if (null == lastRouteChangeSourceLocationStack) {
    lastRouteChangeSourceLocationStack = [];
  }
  analyticsLocations = tmp4(lastRouteChangeSourceLocationStack).analyticsLocations;
  closure_8 = React.useRef(false);
  const items2 = [guildId, groupListingId, groupListingsFetchContext, _location, stateFromStoresArray, tmp2, analyticsLocations];
  const effect = React.useEffect(() => {
    let tmp = groupListingsFetchContext;
    if (groupListingsFetchContext) {
      tmp = null != groupListingId;
    }
    if (tmp) {
      tmp = null != stateFromStoresArray;
    }
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      let obj = groupListingId(_location[8]);
      obj = { role_subscription_group_listing_id: groupListingId, role_subscription_listing_ids: stateFromStoresArray, is_premium_member: tmp2, location_stack: analyticsLocations, location: _location };
      const merged = Object.assign(guildId(_location[9]).collectGuildAnalyticsMetadata(guildId));
      obj.track(tmp2.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, obj);
      const obj3 = guildId(_location[9]);
    }
  }, items2);
};
