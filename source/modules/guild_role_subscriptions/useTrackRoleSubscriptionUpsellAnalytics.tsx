// Module ID: 15263
// Function ID: 116468
// Name: useTrackRoleSubscriptionUpsellAnalytics
// Dependencies: [31, 3752, 653, 14102, 15264, 566, 5464, 1198, 675, 4324, 2]
// Exports: default

// Module 15263 (useTrackRoleSubscriptionUpsellAnalytics)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx");

export default function useTrackRoleSubscriptionUpsellAnalytics(guildId) {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const _location = guildId.location;
  const relevantSubscriptionListingIds = guildId.relevantSubscriptionListingIds;
  let analyticsLocations;
  let closure_8;
  const groupListingsFetchContext = guildId(_location[3]).useGroupListingsFetchContext("useTrackRoleSubscriptionUpsellAnalytics");
  const tmp2 = null != groupListingId(_location[4])(groupListingId).activeSubscription;
  const AnalyticEvents = tmp2;
  let obj = guildId(_location[3]);
  const items = [groupListingsFetchContext];
  const items1 = [relevantSubscriptionListingIds];
  const stateFromStoresArray = guildId(_location[5]).useStateFromStoresArray(items, () => null != relevantSubscriptionListingIds ? relevantSubscriptionListingIds : [].filter((arg0) => {
    const subscriptionListing = groupListingsFetchContext.getSubscriptionListing(arg0);
    let published;
    if (null != subscriptionListing) {
      published = subscriptionListing.published;
    }
    return true === published;
  }), items1);
  const obj2 = guildId(_location[5]);
  const tmp4 = groupListingId(_location[6]);
  let lastRouteChangeSourceLocationStack = guildId(_location[7]).getLastRouteChangeSourceLocationStack();
  if (null == lastRouteChangeSourceLocationStack) {
    lastRouteChangeSourceLocationStack = [];
  }
  analyticsLocations = tmp4(lastRouteChangeSourceLocationStack).analyticsLocations;
  closure_8 = relevantSubscriptionListingIds.useRef(false);
  const items2 = [guildId, groupListingId, groupListingsFetchContext, _location, stateFromStoresArray, tmp2, analyticsLocations];
  const effect = relevantSubscriptionListingIds.useEffect(() => {
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
