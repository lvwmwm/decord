// Module ID: 13988
// Function ID: 106315
// Name: useManageSubscriptionCardData
// Dependencies: []
// Exports: default

// Module 13988 (useManageSubscriptionCardData)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const SubscriptionStatusTypes = arg1(dependencyMap[4]).SubscriptionStatusTypes;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx");

export default function useManageSubscriptionCardData(subscription) {
  let hasActiveTrial;
  let status;
  let obj = callback(dependencyMap[8]);
  const callback = obj.getRoleSubscriptionPlanId(subscription);
  let obj1 = callback(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => fetchSubscriptionsSettings.getSubscriptionListingForPlan(closure_0));
  const importDefault = stateFromStores;
  const items1 = [closure_6];
  const stateFromStores1 = callback(dependencyMap[9]).useStateFromStores(items1, () => {
    let subscriptionGroupListingForSubscriptionListing = null;
    if (null != stateFromStores) {
      subscriptionGroupListingForSubscriptionListing = fetchSubscriptionsSettings.getSubscriptionGroupListingForSubscriptionListing(stateFromStores.id);
    }
    return subscriptionGroupListingForSubscriptionListing;
  });
  const dependencyMap = stateFromStores1;
  const obj3 = callback(dependencyMap[9]);
  const items2 = [closure_5];
  const stateFromStores2 = callback(dependencyMap[9]).useStateFromStores(items2, () => {
    let guild_id;
    if (null != stateFromStores1) {
      guild_id = stateFromStores1.guild_id;
    }
    return guild.getGuild(guild_id);
  });
  const callback2 = stateFromStores2;
  const tmp4 = callback2(React.useState(false), 2);
  const first = tmp4[0];
  const React = first;
  closure_5 = tmp4[1];
  const obj4 = callback(dependencyMap[9]);
  const fetchSubscriptionsSettings = callback(dependencyMap[10]).useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
  closure_6 = fetchSubscriptionsSettings;
  const items3 = [first, stateFromStores2, fetchSubscriptionsSettings];
  const effect = React.useEffect(() => {
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
    const obj7 = importDefault(dependencyMap[5])(subscription.currentPeriodEnd);
    if (null != subscription.price) {
      str2 = callback(dependencyMap[6]).formatPrice(subscription.price, subscription.currency);
      const obj8 = callback(dependencyMap[6]);
    }
    const formatResult = importDefault(dependencyMap[5])(subscription.currentPeriodEnd).format("M/D/YY");
    let PAST_DUE = SubscriptionStatusTypes.PAST_DUE;
    obj1 = { memberSince: importDefault(dependencyMap[5])(subscription.createdAt).format("M/D/YY"), nextRenewalDate: formatResult };
    ({ status, hasActiveTrial } = subscription);
    const intl = callback(dependencyMap[7]).intl;
    const string = intl.string;
    let UAfot2 = callback(dependencyMap[7]).t;
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
    const obj9 = importDefault(dependencyMap[5])(subscription.createdAt);
  }
};
