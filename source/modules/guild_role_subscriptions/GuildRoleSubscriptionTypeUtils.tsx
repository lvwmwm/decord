// Module ID: 13996
// Function ID: 106442
// Name: getBenefitKey
// Dependencies: []
// Exports: formatPlanInterval, formatPlanIntervalDuration, getBenefitKey, isChannelBenefit, isIntangibleBenefit

// Module 13996 (getBenefitKey)
let closure_2 = require(dependencyMap[0]).GuildRoleSubscriptionBenefitTypes;
const SubscriptionIntervalTypes = require(dependencyMap[1]).SubscriptionIntervalTypes;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx");

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
  const intl = require(dependencyMap[2]).intl;
  if (SubscriptionIntervalTypes.DAY === interval) {
    let cuSp8Q = require(dependencyMap[2]).t.3rUmPQ;
  } else if (SubscriptionIntervalTypes.MONTH === interval) {
    cuSp8Q = require(dependencyMap[2]).t.zuN545;
  } else if (SubscriptionIntervalTypes.YEAR === interval) {
    cuSp8Q = require(dependencyMap[2]).t.cuSp8Q;
  }
  return intl.format(cuSp8Q, { count: first2.interval_count });
};
export const formatPlanIntervalDuration = function formatPlanIntervalDuration(interval) {
  let interval_count;
  ({ interval, interval_count } = interval);
  if (SubscriptionIntervalTypes.DAY === interval) {
    if (interval_count > 0) {
      if (interval_count % 7 === 0) {
        const intl4 = require(dependencyMap[2]).intl;
        let obj = { weeks: interval_count / 7 };
        let formatToPlainStringResult = intl4.formatToPlainString(require(dependencyMap[2]).t.iVZYyl, obj);
      }
      return formatToPlainStringResult;
    }
    const intl3 = require(dependencyMap[2]).intl;
    obj = { days: interval_count };
    formatToPlainStringResult = intl3.formatToPlainString(require(dependencyMap[2]).t.jzH70Z, obj);
  } else if (SubscriptionIntervalTypes.MONTH === interval) {
    const intl2 = require(dependencyMap[2]).intl;
    const obj1 = { months: interval_count };
    return intl2.formatToPlainString(require(dependencyMap[2]).t.erUSmA, obj1);
  } else if (SubscriptionIntervalTypes.YEAR === interval) {
    const intl = require(dependencyMap[2]).intl;
    obj = { years: interval_count };
    return intl.formatToPlainString(require(dependencyMap[2]).t.IfYQVC, obj);
  }
};
export const isChannelBenefit = function isChannelBenefit(ref_type) {
  return ref_type.ref_type === constants.CHANNEL;
};
export const isIntangibleBenefit = function isIntangibleBenefit(ref_type) {
  return ref_type.ref_type === constants.INTANGIBLE;
};
