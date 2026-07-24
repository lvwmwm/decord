// Module ID: 14170
// Function ID: 108993
// Name: getBenefitKey
// Dependencies: [14144, 1851, 1212, 2]
// Exports: formatPlanInterval, formatPlanIntervalDuration, getBenefitKey, isChannelBenefit, isIntangibleBenefit

// Module 14170 (getBenefitKey)
import { GuildRoleSubscriptionBenefitTypes as closure_2 } from "MAX_SUBSCRIPTION_TIERS";
import { SubscriptionIntervalTypes } from "GuildFeatures";

const result = require("getSystemLocale").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx");

export const getBenefitKey = function getBenefitKey(id) {
  if ("roles" in id) {
    const _HermesInternal2 = HermesInternal;
    let combined = "emoji-" + id.id;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + id.ref_type + "-" + id.emoji_id + "-" + id.name + "-" + id.ref_id;
  }
  return combined;
};
export const formatPlanInterval = function formatPlanInterval(first2) {
  const interval = first2.interval;
  const intl = require(1212) /* getSystemLocale */.intl;
  if (SubscriptionIntervalTypes.DAY === interval) {
    let cuSp8Q = require(1212) /* getSystemLocale */.t["3rUmPQ"];
  } else if (SubscriptionIntervalTypes.MONTH === interval) {
    cuSp8Q = require(1212) /* getSystemLocale */.t.zuN545;
  } else if (SubscriptionIntervalTypes.YEAR === interval) {
    cuSp8Q = require(1212) /* getSystemLocale */.t.cuSp8Q;
  }
  return intl.format(cuSp8Q, { count: first2.interval_count });
};
export const formatPlanIntervalDuration = function formatPlanIntervalDuration(interval) {
  let interval_count;
  ({ interval, interval_count } = interval);
  if (SubscriptionIntervalTypes.DAY === interval) {
    if (interval_count > 0) {
      if (interval_count % 7 === 0) {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        let obj = { weeks: interval_count / 7 };
        let formatToPlainStringResult = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.iVZYyl, obj);
      }
      return formatToPlainStringResult;
    }
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = { days: interval_count };
    formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.jzH70Z, obj);
  } else if (SubscriptionIntervalTypes.MONTH === interval) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { months: interval_count };
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.erUSmA, obj1);
  } else if (SubscriptionIntervalTypes.YEAR === interval) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { years: interval_count };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.IfYQVC, obj);
  }
};
export const isChannelBenefit = function isChannelBenefit(ref_type) {
  return ref_type.ref_type === constants.CHANNEL;
};
export const isIntangibleBenefit = function isIntangibleBenefit(ref_type) {
  return ref_type.ref_type === constants.INTANGIBLE;
};
