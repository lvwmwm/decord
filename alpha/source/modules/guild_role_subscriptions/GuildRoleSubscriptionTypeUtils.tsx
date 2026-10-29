// Module ID: 17097
// Function ID: 17098
// Name: GuildRoleSubscriptionTypeUtils
// Dependencies: [17071, 1391, 1095, 1125, 7399, 2]
// Exports: formatMonthlyPriceLabel, formatPlanInterval, formatPlanIntervalDuration, getBenefitKey, isChannelBenefit, isIntangibleBenefit

// Module 17097 (GuildRoleSubscriptionTypeUtils)
import Constants from "Constants" /* 1095 */;
import intl5 from "intl" /* 1125 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import PriceUtils from "PriceUtils" /* 7399 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17071 */;
import size from "module_2" /* 2 */;

const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionBenefitTypes;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const CurrencyCodes = Constants.CurrencyCodes;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx");

export function getBenefitKey(id) {
  let combined;
  if ("roles" in id) {
    const _HermesInternal2 = HermesInternal;
    combined = "emoji-" + id.id;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + id.ref_type + "-" + id.emoji_id + "-" + id.name + "-" + id.ref_id;
  }
  return combined;
}
export function formatPlanInterval(first3) {
  let cuSp8Q;
  const interval = first3.interval;
  const count = first3.interval_count;
  const intl = intl5.intl;
  const format = intl.format;
  if (SubscriptionIntervalTypes.DAY === interval) {
    cuSp8Q = tmp(1125).t["3rUmPQ"];
  } else if (SubscriptionIntervalTypes.MONTH === interval) {
    cuSp8Q = tmp(1125).t.zuN545;
  } else if (SubscriptionIntervalTypes.YEAR === interval) {
    cuSp8Q = tmp(1125).t.cuSp8Q;
  }
  return format(cuSp8Q, { count });
}
export function formatMonthlyPriceLabel(price_tier) {
  let cuSp8Q;
  let format;
  let obj2;
  const intl = intl5.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { price: obj2.formatPrice(price_tier, CurrencyCodes.USD), interval: format(cuSp8Q, { count: 1 }) };
  const CgmBaG = intl5.t.CgmBaG;
  const MONTH = SubscriptionIntervalTypes.MONTH;
  obj2 = PriceUtils;
  const intl2 = intl5.intl;
  format = intl2.format;
  if (SubscriptionIntervalTypes.DAY === MONTH) {
    cuSp8Q = tmp(1125).t["3rUmPQ"];
  } else if (SubscriptionIntervalTypes.MONTH === MONTH) {
    cuSp8Q = tmp(1125).t.zuN545;
  } else if (SubscriptionIntervalTypes.YEAR === MONTH) {
    cuSp8Q = tmp(1125).t.cuSp8Q;
  }
  return formatToPlainString(CgmBaG, obj);
}
export function formatPlanIntervalDuration(interval) {
  let interval_count;
  ({ interval, interval_count } = interval);
  if (SubscriptionIntervalTypes.DAY === interval) {
    if (interval_count > 0) {
      let formatToPlainStringResult;
      if (interval_count % 7 === 0) {
        const intl4 = intl5.intl;
        const obj2 = { weeks: interval_count / 7 };
        formatToPlainStringResult = intl4.formatToPlainString(intl5.t.iVZYyl, obj2);
      }
      return formatToPlainStringResult;
    }
    const intl3 = intl5.intl;
    const obj3 = { days: interval_count };
    formatToPlainStringResult = intl3.formatToPlainString(intl5.t.jzH70Z, obj3);
  } else if (SubscriptionIntervalTypes.MONTH === interval) {
    const intl2 = intl5.intl;
    const obj4 = { months: interval_count };
    return intl2.formatToPlainString(intl5.t.erUSmA, obj4);
  } else if (SubscriptionIntervalTypes.YEAR === interval) {
    const intl = intl5.intl;
    const obj = { years: interval_count };
    return intl.formatToPlainString(intl5.t.IfYQVC, obj);
  }
}
export function isChannelBenefit(ref_type) {
  return ref_type.ref_type === constants.CHANNEL;
}
export function isIntangibleBenefit(ref_type) {
  return ref_type.ref_type === constants.INTANGIBLE;
}
