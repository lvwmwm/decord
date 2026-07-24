// Module ID: 14162
// Function ID: 108866
// Name: useManageSubscriptionCardData
// Dependencies: [57, 31, 1838, 3752, 653, 3712, 5616, 1212, 14153, 566, 14151, 2]
// Exports: default

// Module 14162 (useManageSubscriptionCardData)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SubscriptionStatusTypes } from "ME";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx");

export default function useManageSubscriptionCardData(subscription) {
  let hasActiveTrial;
  let status;
  let obj = _require(stateFromStores1[8]);
  _require = obj.getRoleSubscriptionPlanId(subscription);
  let obj1 = _require(stateFromStores1[9]);
  const items = [fetchSubscriptionsSettings];
  const stateFromStores = obj1.useStateFromStores(items, () => fetchSubscriptionsSettings.getSubscriptionListingForPlan(closure_0));
  const items1 = [fetchSubscriptionsSettings];
  stateFromStores1 = _require(stateFromStores1[9]).useStateFromStores(items1, () => {
    let subscriptionGroupListingForSubscriptionListing = null;
    if (null != stateFromStores) {
      subscriptionGroupListingForSubscriptionListing = fetchSubscriptionsSettings.getSubscriptionGroupListingForSubscriptionListing(stateFromStores.id);
    }
    return subscriptionGroupListingForSubscriptionListing;
  });
  const obj3 = _require(stateFromStores1[9]);
  const items2 = [_createForOfIteratorHelperLoose];
  const stateFromStores2 = _require(stateFromStores1[9]).useStateFromStores(items2, () => {
    let guild_id;
    if (null != stateFromStores1) {
      guild_id = stateFromStores1.guild_id;
    }
    return guild.getGuild(guild_id);
  });
  const tmp4 = stateFromStores2(first.useState(false), 2);
  first = tmp4[0];
  _createForOfIteratorHelperLoose = tmp4[1];
  const obj4 = _require(stateFromStores1[9]);
  fetchSubscriptionsSettings = _require(stateFromStores1[10]).useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
  const items3 = [first, stateFromStores2, fetchSubscriptionsSettings];
  const effect = first.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null != stateFromStores2;
    }
    if (tmp) {
      tmp = null == fetchSubscriptionsSettings.getSubscriptionSettings(stateFromStores2.id);
    }
    if (tmp) {
      fetchSubscriptionsSettings(stateFromStores2.id);
    }
  }, items3);
  if (null == stateFromStores) {
    obj = {
      guild: stateFromStores2,
      expanded: first,
      handleToggleExpanded() {
          return guild((arg0) => !arg0);
        },
      listing: stateFromStores,
      groupListing: stateFromStores1,
      subscriptionInfo: undefined
    };
    return obj;
  } else {
    obj = { subscription };
    subscription = obj.subscription;
    let str2 = "";
    const obj7 = stateFromStores(stateFromStores1[5])(subscription.currentPeriodEnd);
    if (null != subscription.price) {
      str2 = _require(stateFromStores1[6]).formatPrice(subscription.price, subscription.currency);
      const obj8 = _require(stateFromStores1[6]);
    }
    const formatResult = stateFromStores(stateFromStores1[5])(subscription.currentPeriodEnd).format("M/D/YY");
    let PAST_DUE = SubscriptionStatusTypes.PAST_DUE;
    obj1 = { memberSince: stateFromStores(stateFromStores1[5])(subscription.createdAt).format("M/D/YY"), nextRenewalDate: formatResult };
    ({ status, hasActiveTrial } = subscription);
    const intl = _require(stateFromStores1[7]).intl;
    const string = intl.string;
    let UAfot2 = _require(stateFromStores1[7]).t;
    if (subscription.status === SubscriptionStatusTypes.CANCELED) {
      UAfot2 = UAfot2.UAfot2;
      let stringResult = string(UAfot2);
    } else {
      stringResult = string(UAfot2.CVjLcM);
    }
    obj1.nextRenewalLabel = stringResult;
    obj1.subscriptionPrice = str2;
    obj1.isCancelled = subscription.status === SubscriptionStatusTypes.CANCELED;
    PAST_DUE = status === PAST_DUE;
    obj1.isPastDue = PAST_DUE;
    obj1.isTrial = hasActiveTrial;
    const obj9 = stateFromStores(stateFromStores1[5])(subscription.createdAt);
  }
};
