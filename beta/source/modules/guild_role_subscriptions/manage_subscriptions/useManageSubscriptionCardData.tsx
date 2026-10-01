// Module ID: 14768
// Function ID: 14769
// Name: useManageSubscriptionCardData
// Dependencies: [32, 19, 2067, 4462, 1074, 4421, 6655, 1115, 14759, 504, 14757, 2]
// Exports: default

// Module 14768 (useManageSubscriptionCardData)
import Constants from "Constants" /* 1074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4462 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5;

const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx");

export default function useManageSubscriptionCardData(currentPeriodEnd) {
  let PAST_DUE;
  let closure_0;
  let expanded;
  let fetchSubscriptionsSettings;
  let hasActiveTrial;
  let obj8;
  let stateFromStores1;
  let status;
  let stringResult;
  let tmp = _require;
  const obj = require("subscriptionUtils");
  _require = obj.getRoleSubscriptionPlanId(currentPeriodEnd);
  const items = [fetchSubscriptionsSettings];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => GuildRoleSubscriptionsStore.getSubscriptionListingForPlan(closure_0));
  const items1 = [fetchSubscriptionsSettings];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let subscriptionGroupListingForSubscriptionListing = null;
    if (null != stateFromStores) {
      subscriptionGroupListingForSubscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(tmp.id);
    }
    return subscriptionGroupListingForSubscriptionListing;
  });
  const items2 = [closure_5];
  const obj4 = require("get initialized");
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return getGuild(guild_id);
  });
  const tmp6 = stateFromStores2(expanded.useState(false), 2);
  expanded = tmp6[0];
  closure_5 = tmp6[1];
  const obj5 = require("GuildRoleSubscriptionsHooks");
  fetchSubscriptionsSettings = obj5.useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
  const items3 = [expanded, stateFromStores2, fetchSubscriptionsSettings];
  const effect = expanded.useEffect(() => {
    const tmp = first && null != stateFromStores2 && null == GuildRoleSubscriptionsStore.getSubscriptionSettings(stateFromStores2.id);
    if (tmp) {
      fetchSubscriptionsSettings(stateFromStores2.id);
    }
  }, items3);
  let tmp9;
  if (null != stateFromStores) {
    let str2 = "";
    const obj6 = stateFromStores(stateFromStores1[5])(currentPeriodEnd.currentPeriodEnd);
    const formatResult = obj6.format("M/D/YY");
    const tmp10 = stateFromStores;
    if (null != currentPeriodEnd.price) {
      const tmpResult = tmp(stateFromStores1[6]);
      str2 = tmpResult.formatPrice(currentPeriodEnd.price, currentPeriodEnd.currency);
    }
    const obj7 = { memberSince: obj8.format("M/D/YY"), nextRenewalDate: formatResult, nextRenewalLabel: stringResult, subscriptionPrice: str2, isCancelled: currentPeriodEnd.status === SubscriptionStatusTypes.CANCELED, isPastDue: status === PAST_DUE, isTrial: hasActiveTrial };
    status = currentPeriodEnd.status;
    PAST_DUE = SubscriptionStatusTypes.PAST_DUE;
    hasActiveTrial = currentPeriodEnd.hasActiveTrial;
    obj8 = tmp10(stateFromStores1[5])(currentPeriodEnd.createdAt);
    const intl = tmp(tmp2[7]).intl;
    const string = intl.string;
    const t = tmp(tmp2[7]).t;
    if (currentPeriodEnd.status === SubscriptionStatusTypes.CANCELED) {
      stringResult = string(t.UAfot2);
    } else {
      stringResult = string(t.CVjLcM);
    }
    tmp9 = obj7;
  }
  return {
    guild: stateFromStores2,
    expanded,
    handleToggleExpanded() {
      return closure_5((arg0) => !arg0);
    },
    listing: stateFromStores,
    groupListing: stateFromStores1,
    subscriptionInfo: tmp9
  };
};
