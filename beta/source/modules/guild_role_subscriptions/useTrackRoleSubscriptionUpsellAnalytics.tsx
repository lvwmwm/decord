// Module ID: 16187
// Function ID: 16188
// Name: useTrackRoleSubscriptionUpsellAnalytics
// Dependencies: [19, 4462, 1074, 14758, 16188, 504, 6583, 1101, 1241, 5016, 2]
// Exports: default

// Module 16187 (useTrackRoleSubscriptionUpsellAnalytics)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import react from "react" /* 19 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4462 */;
import size from "module_2" /* 2 */;

let subscriptionListing;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrackRoleSubscriptionUpsellAnalytics.tsx");

export default function useTrackRoleSubscriptionUpsellAnalytics(guildId) {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const _location = guildId.location;
  const relevantSubscriptionListingIds = guildId.relevantSubscriptionListingIds;
  let analyticsLocations;
  let ref;
  let obj = guildId(_location[3]);
  const groupListingsFetchContext = obj.useGroupListingsFetchContext("useTrackRoleSubscriptionUpsellAnalytics");
  const tmp2 = null != groupListingId(_location[4])(groupListingId).activeSubscription;
  const is_premium_member = tmp2;
  let obj2 = guildId(_location[5]);
  let items = [groupListingsFetchContext];
  const items1 = [relevantSubscriptionListingIds];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    let items = relevantSubscriptionListingIds;
    if (relevantSubscriptionListingIds == null) {
      items = [];
    }
    return items.filter((item) => {
      subscriptionListing = subscriptionListing.getSubscriptionListing(item);
      let published;
      if (subscriptionListing != null) {
        published = subscriptionListing.published;
      }
      return true === published;
    });
  }, items1);
  const tmp4 = groupListingId(_location[6]);
  const obj3 = guildId(_location[7]);
  let lastRouteChangeSourceLocationStack = obj3.getLastRouteChangeSourceLocationStack();
  if (lastRouteChangeSourceLocationStack == null) {
    lastRouteChangeSourceLocationStack = [];
  }
  analyticsLocations = tmp4(lastRouteChangeSourceLocationStack).analyticsLocations;
  ref = relevantSubscriptionListingIds.useRef(false);
  const items2 = [guildId, groupListingId, groupListingsFetchContext, _location, stateFromStoresArray, tmp2, analyticsLocations];
  const effect = relevantSubscriptionListingIds.useEffect(() => {
    const tmp = groupListingsFetchContext && null != groupListingId && null != stateFromStoresArray && !ref.current;
    if (tmp) {
      ref.current = true;
      const obj = { role_subscription_group_listing_id: groupListingId, role_subscription_listing_ids: stateFromStoresArray, is_premium_member, location_stack: analyticsLocations, location: _location };
      const track = AnalyticsUtilsDefault.track;
      const ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED = AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
      track(ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, obj);
    }
  }, items2);
};
