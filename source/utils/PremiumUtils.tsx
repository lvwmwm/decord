// Module ID: 3774
// Function ID: 29044
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: calculateYearlyPlanMonthlyRateAmount, calculateYearlyPlanMonthsSaved, castPremiumSubscriptionAsSkuId, coerceExistingItemsToNewItemInterval, formatInterval, formatIntervalDuration, formatTrialCtaIntervalDurationFromTrialOffer, formatTrialOfferIntervalDuration, getBillingInformationString, getBillingReviewSubheader, getCountryPrices, getDaysRemainingUntilSubscriptionCurrentPeriodEnds, getDaysSincePremium, getDiscountIntervalString, getDisplayNameFromSku, getExternalPlanDisplayName, getFormattedRateForPlan, getInterval, getIntervalForInvoice, getIntervalString, getItemsWithUpsertedPremiumGuildPlan, getItemsWithUpsertedPremiumPlanId, getMaxFileSizeForPremiumType, getOfferNoticeThreshold, getPlanDescriptionFromInvoice, getPlanIdForPremiumType, getPlanIdFromInvoice, getPremiumBranding, getPremiumGuildHeaderDescription, getPremiumPlanOptions, getPremiumSkuIdForSubscription, getPremiumTypeDisplayName, getPremiumTypeFromPlanId, getPremiumTypeFromSubscription, getSavingsPercent, getStatusFromInvoice, getSubscriptionWithNewPlansTotalServerPrice, getSwitchingPlansDisabledMessage, getTierDisplayNameByPlanId, getUnactivatedFractionalPremiumDurationString, hasPremiumSubscriptionToDisplay, isBoostOnlySubscription, isNewUser, isNitroLockedState, isPremiumEligible, isPremiumGroupSubscriptionPlan, isPremiumSubscriptionPlan, isSwitchingPlansDisabled, useHasPremiumSubscriptionToDisplay, useHasTier2Premium, usePlanSelectPriceState

// Module 3774 (_createForOfIteratorHelperLoose)
let SubscriptionPlans;
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getPremiumPlanItem(items) {
  items = items.items;
  return items.find((planId) => set.has(planId.planId));
}
function getDefaultPrice(PREMIUM_MONTH_TIER_2, arg1, arg2, arg3, arg4) {
  let flag = arg1;
  let flag2 = arg2;
  let flag3 = arg4;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag3 === undefined) {
    flag3 = true;
  }
  const defaultPaymentSourceId = paymentSource.defaultPaymentSourceId;
  let paymentSourceId;
  if (null != defaultPaymentSourceId) {
    paymentSourceId = defaultPaymentSourceId;
  }
  const premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
  if (tmp4) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  const obj = { paymentSourceId, currency: arg3 };
  return getPrice(PREMIUM_MONTH_TIER_2, flag, flag2, obj, flag3);
}
function withContextPlanPrices(arg0, arr) {
  let tmp = arg0;
  if (null != arr) {
    const obj = {};
    const merged = Object.assign(arg0);
    const _Object = Object;
    obj["contextPlanPrices"] = Object.fromEntries(arr.map((arg0) => {
      const items = [, ];
      ({ id: arr[0], price: arr[1] } = arg0);
      return items;
    }));
    tmp = obj;
  }
  return tmp;
}
function getPrice(planId) {
  let contextPlanPrices;
  let currency;
  let paymentSourceId;
  let flag = arg1;
  let flag2 = arg2;
  let obj = arg3;
  let flag3 = arg4;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (obj === undefined) {
    obj = {};
  }
  if (flag3 === undefined) {
    flag3 = true;
  }
  ({ paymentSourceId, currency, contextPlanPrices } = obj);
  if (null != contextPlanPrices) {
    if (null != contextPlanPrices[planId]) {
      if (!tmp2) {
        obj = {};
        ({ amount: obj2.amount, currency: obj2.currency, exponent: obj2.exponent } = tmp);
        obj.tax = 0;
        obj.taxInclusive = false;
        return obj;
      }
    }
    const tmp2 = null != currency && null != contextPlanPrices[planId] && contextPlanPrices[planId].currency !== currency;
  }
  if (null != store.get(planId)) {
    let str3 = closure_13.DEFAULT;
    if (flag2) {
      str3 = closure_13.GIFT;
    } else if (flag) {
      str3 = closure_13.PREMIUM_TIER_1;
    }
    obj = { paymentSourceId, purchaseType: str3, currency };
    const tmp13 = experimentalGetPrice(planId, obj);
    if (null == tmp13) {
      const _Error = Error;
      const error = new Error("Couldn't find price");
      if (flag3) {
        const obj1 = {};
        let obj2 = { paymentSourceId };
        obj1.extra = obj2;
        const obj3 = { purchaseType: str3.toString(), planId };
        let str5 = "unknown";
        if (null != currency) {
          str5 = currency;
        }
        obj3.currency = str5;
        obj1.tags = obj3;
        const result = arg1(dependencyMap[13]).captureBillingException(error, obj1);
        const obj8 = arg1(dependencyMap[13]);
      }
      throw error;
    } else {
      return tmp13;
    }
  } else {
    const _Error2 = Error;
    const error1 = new Error("Plan not found");
    if (flag3) {
      obj2 = arg1(dependencyMap[13]);
      const obj4 = {};
      const obj5 = { planId };
      let str = "unknown";
      if (null != currency) {
        str = currency;
      }
      obj5.currency = str;
      obj4.tags = obj5;
      const obj6 = {};
      const merged = Object.assign(obj);
      obj6["isGift"] = flag2;
      obj4.extra = obj6;
      const result1 = obj2.captureBillingException(error1, obj4);
    }
    throw error1;
  }
}
function getPurchaseTypePrices(planId, DEFAULT) {
  const value = store.get(planId);
  if (null == value) {
    const _Error3 = Error;
    const error = new Error("Plan not found");
    let obj = DEFAULT(dependencyMap[13]);
    obj = {};
    obj = { planId, purchaseType: DEFAULT.toString() };
    obj.tags = obj;
    const result = obj.captureBillingException(error, obj);
    throw error;
  } else if (null == value.prices) {
    const _Error2 = Error;
    const _HermesInternal3 = HermesInternal;
    const error1 = new Error("No prices returned for " + planId + ", is your user in the experiment?");
    throw error1;
  } else if (null == value.prices[DEFAULT]) {
    const _JSON = JSON;
    const _Object = Object;
    const _HermesInternal = HermesInternal;
    importDefaultResult.info("Purchase types: " + JSON.stringify(Object.keys(value.prices)));
    const _Error = Error;
    const _HermesInternal2 = HermesInternal;
    const error2 = new Error("No prices returned for purchase type " + DEFAULT + " for plan " + planId);
    throw error2;
  } else {
    return tmp22;
  }
}
function experimentalGetPrices(planId, arg1) {
  let paymentSourceId;
  let purchaseType;
  let tmp = arg1;
  if (arg1 === undefined) {
    let obj = { purchaseType: closure_13.DEFAULT };
    tmp = obj;
  }
  ({ paymentSourceId, purchaseType } = tmp);
  const tmp3 = getPurchaseTypePrices(planId, purchaseType);
  if (null != paymentSourceId) {
    if (null == tmp3.paymentSourcePrices[paymentSourceId]) {
      const _JSON = JSON;
      const _Object = Object;
      const _HermesInternal = HermesInternal;
      importDefaultResult.info("Payment sources IDs: " + JSON.stringify(Object.keys(tmp3.paymentSourcePrices)));
      const _HermesInternal2 = HermesInternal;
      importDefaultResult.info("prices: " + arr);
      const _Error = Error;
      const error = new Error("Missing prices for payment source on subscription plan");
      let obj1 = arg1(dependencyMap[13]);
      obj = {};
      obj = { paymentSourceId };
      obj.extra = obj;
      obj1 = { purchaseType: purchaseType.toString(), planId };
      obj.tags = obj1;
      const result = obj1.captureBillingException(error, obj);
    } else if (0 !== arr.length) {
      return arr;
    }
  }
  if (null == tmp3.countryPrices.prices) {
    const _JSON2 = JSON;
    const _HermesInternal3 = HermesInternal;
    importDefaultResult.info("countryPrices: " + JSON.stringify(tmp3.countryPrices));
    const _Error2 = Error;
    const error1 = new Error("Missing prices for country");
    const obj2 = {};
    const obj3 = { countryCode: tmp3.countryPrices.countryCode, planId };
    obj2.tags = obj3;
    const result1 = arg1(dependencyMap[13]).captureBillingException(error1, obj2);
    throw error1;
  } else {
    return tmp3.countryPrices.prices;
  }
}
function experimentalGetPrice(id, arg1) {
  let currency;
  let paymentSourceId;
  let purchaseType;
  let tmp = arg1;
  if (arg1 === undefined) {
    let obj = { purchaseType: closure_13.DEFAULT };
    tmp = obj;
  }
  ({ paymentSourceId, purchaseType, currency } = tmp);
  arg1 = currency;
  const arr = experimentalGetPrices(id, { paymentSourceId, purchaseType });
  if (0 === arr.length) {
    const _HermesInternal = HermesInternal;
    importDefaultResult.warn("No prices found for planId: " + id + ", paymentSourceId: " + paymentSourceId + ", purchaseType: " + purchaseType);
  }
  if (null != currency) {
    let found = arr.find((currency) => currency.currency === currency.toLowerCase());
    if (null == found) {
      let found1;
      if (null != paymentSourceId) {
        obj = { purchaseType };
        found1 = experimentalGetPrices(id, obj).find((currency) => currency.currency === currency.toLowerCase());
        const arr2 = experimentalGetPrices(id, obj);
      }
      found = found1;
    }
    return found;
  } else {
    return arr[0];
  }
}
function getServerPriceFromClientPrice(amount) {
  return { amount: amount.amount, currency: amount.currency, exponent: amount.exponent };
}
function getItemPlansTotalServerPrice(items, currency, id) {
  let iter2;
  let obj = { currency };
  const baseSubscriptionItemForSubscriptionItems = currency(dependencyMap[14]).getBaseSubscriptionItemForSubscriptionItems(items);
  let premiumType;
  if (null != baseSubscriptionItemForSubscriptionItems) {
    premiumType = closure_42[baseSubscriptionItemForSubscriptionItems.planId].premiumType;
  }
  const obj2 = currency(dependencyMap[14]);
  const obj3 = currency(dependencyMap[15]);
  const isPremiumAtLeastResult = currency(dependencyMap[15]).isPremiumAtLeast(premiumType, closure_39.TIER_0);
  const obj4 = currency(dependencyMap[15]);
  const tmp6 = _createForOfIteratorHelperLoose(items);
  let iter = tmp6();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp7 = closure_31;
      let tmp8 = isPremiumAtLeastResult1;
      if (!closure_31.has(value.planId)) {
        let tmp9 = closure_32;
        let tmp10 = !closure_32.has(value.planId) && isPremiumAtLeastResult;
        tmp8 = tmp10;
      }
      if (undefined === id) {
        let tmp15 = closure_60;
        let tmp16 = tmp8;
        let flag2 = false;
        let tmp17 = currency;
        let tmp14 = closure_60(value.planId, tmp8, false, currency);
      } else {
        let tmp11 = closure_62;
        obj = { paymentSourceId: id, currency };
        let tmp12 = tmp8;
        let flag = false;
        let tmp13 = obj;
        tmp14 = closure_62(value.planId, tmp8, false, obj);
      }
      obj.amount = obj.amount + tmp14.amount * value.quantity;
      iter2 = tmp6();
      iter = iter2;
    } while (!iter2.done);
  }
  return getServerPriceFromClientPrice(obj);
}
function getInterval(basePlanId) {
  if (null != closure_42[basePlanId]) {
    let obj = {};
    ({ interval: obj4.intervalType, intervalCount: obj4.intervalCount } = tmp);
    return obj;
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    obj = arg1(dependencyMap[13]);
    obj = {};
    const obj1 = { planId: basePlanId };
    obj.tags = obj1;
    const result = obj.captureBillingException(error, obj);
    throw error;
  }
}
function getIntervalString(interval, arg1) {
  let num = arg3;
  let flag = arg4;
  let TIER_2 = arg5;
  if (arg3 === undefined) {
    num = 1;
  }
  if (flag === undefined) {
    flag = false;
  }
  if (TIER_2 === undefined) {
    TIER_2 = closure_39.TIER_2;
  }
  if (!arg1) {
    if (!arg2) {
      if (constants6.MONTH === interval) {
        if (1 !== num) {
          const intl3 = arg1(dependencyMap[17]).intl;
          let obj = { intervalCount: num };
          let formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[17]).t.0UlZnH, obj);
        } else {
          const intl2 = arg1(dependencyMap[17]).intl;
          formatToPlainStringResult = intl2.string(arg1(dependencyMap[17]).t.DKzs96);
        }
        return formatToPlainStringResult;
      } else if (constants6.YEAR === interval) {
        const intl = arg1(dependencyMap[17]).intl;
        return intl.string(arg1(dependencyMap[17]).t./Q4HRN);
      } else {
        const _Error = Error;
        const error = new Error("Unexpected interval");
        throw error;
      }
    }
  }
  if (constants6.MONTH === interval) {
    const intl7 = arg1(dependencyMap[17]).intl;
    if (TIER_2 === closure_39.TIER_0) {
      let poEovT2 = arg1(dependencyMap[17]).t.NPKsLz;
    } else {
      poEovT2 = arg1(dependencyMap[17]).t.poEovT;
    }
    obj = {};
    const intl8 = arg1(dependencyMap[17]).intl;
    obj.timeInterval = intl8.string(arg1(dependencyMap[17]).t.FPybU7);
    let formatToPlainStringResult1 = intl7.formatToPlainString(poEovT2, obj);
    if (!flag) {
      const intl9 = arg1(dependencyMap[17]).intl;
      formatToPlainStringResult1 = intl9.string(arg1(dependencyMap[17]).t.Mh9bTt);
    }
    return formatToPlainStringResult1;
  } else if (constants6.YEAR === interval) {
    const intl4 = arg1(dependencyMap[17]).intl;
    if (TIER_2 === closure_39.TIER_0) {
      let poEovT = arg1(dependencyMap[17]).t.NPKsLz;
    } else {
      poEovT = arg1(dependencyMap[17]).t.poEovT;
    }
    obj = {};
    const intl5 = arg1(dependencyMap[17]).intl;
    obj.timeInterval = intl5.string(arg1(dependencyMap[17]).t.tfqrhj);
    let formatToPlainStringResult2 = intl4.formatToPlainString(poEovT, obj);
    if (!flag) {
      const intl6 = arg1(dependencyMap[17]).intl;
      formatToPlainStringResult2 = intl6.string(arg1(dependencyMap[17]).t.DRgqMo);
    }
    return formatToPlainStringResult2;
  } else {
    const _Error2 = Error;
    const error1 = new Error("Unexpected interval");
    throw error1;
  }
}
function getIntervalStringAsNoun(interval) {
  if (constants6.MONTH === interval) {
    const intl2 = arg1(dependencyMap[17]).intl;
    return intl2.string(arg1(dependencyMap[17]).t.FPybU7);
  } else if (constants6.YEAR === interval) {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(arg1(dependencyMap[17]).t.tfqrhj);
  } else {
    const _Error = Error;
    const error = new Error("Unexpected interval");
    throw error;
  }
}
function getPremiumType(planId) {
  if (null != closure_42[planId]) {
    return tmp.premiumType;
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    let obj = arg1(dependencyMap[13]);
    obj = {};
    obj = { planId };
    obj.tags = obj;
    const result = obj.captureBillingException(error, obj);
    throw error;
  }
}
function getDisplayName(planId, arg1, arg2, duration) {
  let flag = arg1;
  let flag2 = arg2;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === planId) {
    const intl15 = arg1(dependencyMap[17]).intl;
    if (flag) {
      let obj = { duration };
      let formatResult = intl15.format(tmp47(tmp48[17]).t.TZXHNj, obj);
    } else {
      const string8 = intl15.string;
      const t8 = tmp47(tmp48[17]).t;
      if (flag2) {
        formatResult = string8(t8.81iAgs);
      } else {
        formatResult = string8(t8.0efVPy);
      }
    }
    return formatResult;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === planId) {
    const intl14 = arg1(dependencyMap[17]).intl;
    if (flag) {
      obj = { duration };
      let formatResult1 = intl14.format(tmp44(tmp45[17]).t.eqRhC7, obj);
    } else {
      const string7 = intl14.string;
      const t7 = tmp44(tmp45[17]).t;
      if (flag2) {
        formatResult1 = string7(t7.UvzqY1);
      } else {
        formatResult1 = string7(t7.eoVuBn);
      }
    }
    return formatResult1;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === planId) {
    const intl13 = arg1(dependencyMap[17]).intl;
    const string6 = intl13.string;
    const t6 = arg1(dependencyMap[17]).t;
    if (flag2) {
      let string6Result = string6(t6.g/dH5g);
    } else {
      string6Result = string6(t6.7O6qSq);
    }
    return string6Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === planId) {
    const intl12 = arg1(dependencyMap[17]).intl;
    const string5 = intl12.string;
    const t5 = arg1(dependencyMap[17]).t;
    if (flag2) {
      let string5Result = string5(t5.pdZJaq);
    } else {
      string5Result = string5(t5.Md5xbi);
    }
    return string5Result;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 === planId) {
    const intl11 = arg1(dependencyMap[17]).intl;
    if (flag) {
      const obj1 = { duration };
      let formatResult2 = intl11.format(tmp35(tmp36[17]).t.aI6QXz, obj1);
    } else {
      const string4 = intl11.string;
      const t4 = tmp35(tmp36[17]).t;
      if (flag2) {
        formatResult2 = string4(t4.SmVbHc);
      } else {
        formatResult2 = string4(t4.FKYNC6);
      }
    }
    return formatResult2;
  } else if (SubscriptionPlans.PREMIUM_GROUP_MONTH === planId) {
    const intl10 = arg1(dependencyMap[17]).intl;
    if (flag2) {
      let stringResult = intl10.string(arg1(tmp31[17]).t.SmVbHc);
    } else {
      const obj2 = { premiumGroupProductName: callback() };
      stringResult = intl10.formatToPlainString(importDefault(tmp31[18]).8bPDtb, obj2);
    }
    return stringResult;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === planId) {
    const intl9 = arg1(dependencyMap[17]).intl;
    if (flag) {
      const obj3 = { duration };
      let formatResult3 = intl9.format(tmp27(tmp28[17]).t.1wBcPi, obj3);
    } else {
      const string3 = intl9.string;
      const t3 = tmp27(tmp28[17]).t;
      if (flag2) {
        formatResult3 = string3(t3.JIq4O1);
      } else {
        formatResult3 = string3(t3.cfu/5d);
      }
    }
    return formatResult3;
  } else if (SubscriptionPlans.PREMIUM_3_MONTH_TIER_2 === planId) {
    const intl8 = arg1(dependencyMap[17]).intl;
    return intl8.string(arg1(dependencyMap[17]).t.wCbINr);
  } else if (SubscriptionPlans.PREMIUM_6_MONTH_TIER_2 === planId) {
    const intl7 = arg1(dependencyMap[17]).intl;
    return intl7.string(arg1(dependencyMap[17]).t.e3/ArU);
  } else if (SubscriptionPlans.PREMIUM_MONTH_GUILD === planId) {
    const intl6 = arg1(dependencyMap[17]).intl;
    const string2 = intl6.string;
    const t2 = arg1(dependencyMap[17]).t;
    if (flag2) {
      let string2Result = string2(t2.6ZR3By);
    } else {
      string2Result = string2(t2.h80cx/);
    }
    return string2Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_GUILD === planId) {
    const intl5 = arg1(dependencyMap[17]).intl;
    const string = intl5.string;
    const t = arg1(dependencyMap[17]).t;
    if (flag2) {
      let stringResult1 = string(t.YDpAzZ);
    } else {
      stringResult1 = string(t.ZHkls0);
    }
    return stringResult1;
  } else if (SubscriptionPlans.PREMIUM_3_MONTH_GUILD === planId) {
    const intl4 = arg1(dependencyMap[17]).intl;
    return intl4.string(arg1(dependencyMap[17]).t.EZHHB6);
  } else if (SubscriptionPlans.PREMIUM_6_MONTH_GUILD === planId) {
    const intl3 = arg1(dependencyMap[17]).intl;
    return intl3.string(arg1(dependencyMap[17]).t.X2KDO2);
  } else if (SubscriptionPlans.PREMIUM_MONTH_LEGACY === planId) {
    const intl2 = arg1(dependencyMap[17]).intl;
    return intl2.string(arg1(dependencyMap[17]).t.PD6k79);
  } else if (SubscriptionPlans.PREMIUM_YEAR_LEGACY === planId) {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(arg1(dependencyMap[17]).t.LtJgTC);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    obj = arg1(dependencyMap[13]);
    const obj4 = {};
    const obj5 = { planId };
    obj4.tags = obj5;
    const result = obj.captureBillingException(error, obj4);
    throw error;
  }
}
function getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0) {
  let premiumType;
  if (null != closure_42[PREMIUM_MONTH_TIER_0]) {
    premiumType = tmp.premiumType;
  }
  let tmp3 = null;
  if (null != premiumType) {
    tmp3 = closure_37[premiumType];
  }
  if (null != tmp3) {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(tmp3);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    let obj = arg1(dependencyMap[13]);
    obj = {};
    obj = { planId: PREMIUM_MONTH_TIER_0 };
    obj.tags = obj;
    const result = obj.captureBillingException(error, obj);
    throw error;
  }
}
function getPlanDescription(arg0) {
  let activeDiscountInfo;
  let fractionalPremiumInfo;
  let hasDiscountApplied;
  let hasFractionalPremiumWithSub;
  let includePremiumGuilds;
  let planId;
  let price;
  let renewalInvoiceWithEntitlementsPreview;
  let renewalInvoiceWithoutEntitlementsPreview;
  let subscription;
  ({ subscription, planId, price, activeDiscountInfo, renewalInvoiceWithoutEntitlementsPreview, renewalInvoiceWithEntitlementsPreview, hasFractionalPremiumWithSub } = arg0);
  let format7Result = closure_42[planId];
  ({ includePremiumGuilds, hasDiscountApplied, fractionalPremiumInfo } = arg0);
  let tmp2 = formatPriceString(getDefaultPrice(format7Result.id), format7Result.interval);
  let tmp3 = null != renewalInvoiceWithEntitlementsPreview;
  if (tmp3) {
    tmp3 = 0 === renewalInvoiceWithEntitlementsPreview.subtotal;
  }
  let tmp4 = isBaseSubscriptionCanceled(subscription);
  if (!tmp4) {
    let tmp5 = null == subscription.paymentSourceId && !subscription.isPurchasedExternally;
    if (tmp5) {
      const currentUser = authStore.getCurrentUser();
      tmp5 = !(null != currentUser && currentUser.hasFreePremium());
      const tmp7 = null != currentUser && currentUser.hasFreePremium();
    }
    if (tmp5) {
      tmp5 = !tmp3;
    }
    tmp4 = tmp5;
  }
  let tmp9 = subscription.status === constants3.UNPAID && null !== subscription.latestInvoice;
  if (tmp9) {
    const latestInvoice = subscription.latestInvoice;
    let status;
    if (null != latestInvoice) {
      status = latestInvoice.status;
    }
    tmp9 = status === constants.OPEN;
  }
  if (tmp4) {
    status = constants3.CANCELED;
  } else if (tmp9) {
    status = constants3.UNPAID;
  } else {
    status = subscription.status;
  }
  let taxInclusive;
  if (null != renewalInvoiceWithoutEntitlementsPreview) {
    taxInclusive = renewalInvoiceWithoutEntitlementsPreview.taxInclusive;
  }
  if (null == taxInclusive) {
    const latestInvoice2 = subscription.latestInvoice;
    let taxInclusive1;
    if (null != latestInvoice2) {
      taxInclusive1 = latestInvoice2.taxInclusive;
    }
    taxInclusive = taxInclusive1;
  }
  let num2 = 0;
  if (includePremiumGuilds) {
    num2 = getNumPremiumGuildSubscriptions(subscription.additionalPlans);
  }
  const sum = closure_28 + num2;
  const intl = arg1(dependencyMap[17]).intl;
  if (null != price && null == subscription.paymentGateway) {
    const format = intl.format;
    let t = tmp20(tmp21[17]).t;
    if (tmp16) {
      t = { price };
      let formatResult = format(t.cd+hqB, t);
    } else {
      let obj = { price };
      formatResult = format(t.NUkcpF, obj);
    }
  } else {
    let stringResult = intl.string(tmp20(tmp21[17]).t.zYx3Y6);
    const intl2 = arg1(dependencyMap[17]).intl;
    if (tmp8) {
      const format2 = intl2.format;
      let t1 = tmp25(tmp26[17]).t;
      if (tmp16) {
        t1 = { price };
        let format2Result = format2(t1.VsKcFB, t1);
      } else {
        obj = { price };
        format2Result = format2(t1.hJ5xEX, obj);
      }
    } else {
      let stringResult1 = intl2.string(tmp25(tmp26[17]).t.8rSipI);
      const intl3 = arg1(dependencyMap[17]).intl;
      const format3 = intl3.format;
      let t2 = arg1(dependencyMap[17]).t;
      if (tmp8) {
        if (tmp16) {
          t2 = { price, num: sum };
          let format3Result = format3(t2.jRy6/J, t2);
        } else {
          const obj1 = { price, num: sum };
          format3Result = format3(t2.tTNE8M, obj1);
        }
      } else {
        const obj2 = { num: sum };
        let format3Result1 = format3(t2.U+z/HJ, obj2);
        if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 !== planId) {
          format7Result = SubscriptionPlans;
          if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 !== planId) {
            format7Result = SubscriptionPlans;
            if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 !== planId) {
              format7Result = SubscriptionPlans;
              if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 !== planId) {
                format7Result = SubscriptionPlans;
                if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 !== planId) {
                  if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 !== planId) {
                    if (SubscriptionPlans.PREMIUM_3_MONTH_TIER_2 !== planId) {
                      if (SubscriptionPlans.PREMIUM_6_MONTH_TIER_2 !== planId) {
                        if (SubscriptionPlans.PREMIUM_GROUP_MONTH !== planId) {
                          const _Error = Error;
                          const _HermesInternal = HermesInternal;
                          const error = new Error("Invalid planId " + planId);
                          throw error;
                        }
                      }
                    }
                  }
                }
                if (constants3.CANCELED === status) {
                  const intl12 = arg1(dependencyMap[17]).intl;
                  const format5 = intl12.format;
                  let t3 = arg1(dependencyMap[17]).t;
                  if (tmp8) {
                    if (tmp16) {
                      t3 = { price, num: sum };
                      let format5Result = format5(t3.xoFgRh, t3);
                    } else {
                      const obj3 = { price, num: sum };
                      format5Result = format5(t3.nXdbKo, obj3);
                    }
                  } else {
                    const obj4 = { num: sum };
                    return format5(t3.EcSdRH, obj4);
                  }
                } else {
                  format7Result = constants3;
                  if (constants3.ACCOUNT_HOLD === status) {
                    const intl11 = arg1(dependencyMap[17]).intl;
                    const format4 = intl11.format;
                    let t4 = arg1(dependencyMap[17]).t;
                    if (tmp8) {
                      if (tmp16) {
                        t4 = { price, num: sum };
                        let format4Result = format4(t4.5C/0QG, t4);
                      } else {
                        const obj5 = { price, num: sum };
                        format4Result = format4(t4.xfYkhu, obj5);
                      }
                    } else {
                      const obj6 = { num: sum };
                      return format4(t4.ivjxcn, obj6);
                    }
                  } else {
                    format7Result = constants3;
                    if (constants3.UNPAID === status) {
                      const intl10 = arg1(dependencyMap[17]).intl;
                      const obj7 = { num: sum };
                      return intl10.format(arg1(dependencyMap[17]).t.0HopYf, obj7);
                    } else {
                      format7Result = constants3;
                      if (constants3.PAUSE_PENDING === status) {
                        let diffResult = null;
                        if (null != subscription.pauseEndsAt) {
                          let obj17 = importDefault(dependencyMap[19])(subscription.pauseEndsAt);
                          diffResult = obj17.diff(subscription.currentPeriodEnd, "days");
                        }
                        if (null != diffResult) {
                          const intl9 = arg1(dependencyMap[17]).intl;
                          const obj8 = { pauseDate: subscription.currentPeriodEnd, pauseDuration: diffResult };
                          let formatResult1 = intl9.format(arg1(dependencyMap[17]).t.WUfOD5, obj8);
                        } else {
                          const intl8 = arg1(dependencyMap[17]).intl;
                          const obj9 = { pauseDate: subscription.currentPeriodEnd };
                          formatResult1 = intl8.format(arg1(dependencyMap[17]).t.VlWufv, obj9);
                        }
                        return formatResult1;
                      } else {
                        format7Result = constants3;
                        if (constants3.PAUSED === status) {
                          if (!hasFractionalPremiumWithSub) {
                            const intl7 = arg1(dependencyMap[17]).intl;
                            const obj10 = { resumeDate: subscription.pauseEndsAt };
                            format3Result1 = intl7.format(arg1(dependencyMap[17]).t.6RTdZA, obj10);
                          }
                          return format3Result1;
                        } else {
                          format7Result = constants3;
                          if (constants3.BILLING_RETRY === status) {
                            const intl6 = arg1(dependencyMap[17]).intl;
                            const obj11 = {};
                            let obj14 = importDefault(dependencyMap[19])(subscription.currentPeriodStart);
                            obj11.endDate = obj14.add(closure_29, "days").toDate();
                            return intl6.format(arg1(dependencyMap[17]).t.IlJ/HV, obj11);
                          } else {
                            format7Result = constants3;
                            if (constants3.PAST_DUE === status) {
                              const intl5 = arg1(dependencyMap[17]).intl;
                              let obj12 = {};
                              obj12 = arg1(dependencyMap[20]);
                              obj12.endDate = obj12.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL");
                              obj12.onClick = function onClick() {
                                callback(closure_2[21])("https://support.discord.com/hc/articles/23082866222871");
                              };
                              return intl5.format(arg1(dependencyMap[17]).t.d+0vwo, obj12);
                            } else {
                              format7Result = format3Result1;
                              if (!hasDiscountApplied) {
                                return format3Result1;
                              } else if (planId === SubscriptionPlans.PREMIUM_YEAR_TIER_2) {
                                const intl4 = arg1(dependencyMap[17]).intl;
                                const obj13 = {};
                                let percentage;
                                if (null != activeDiscountInfo) {
                                  percentage = activeDiscountInfo.percentage;
                                }
                                if (null == percentage) {
                                  percentage = closure_16;
                                }
                                obj13.percent = percentage;
                                obj13.regularPrice = tmp2;
                                tmp2 = getExpectedRenewalDate(subscription, fractionalPremiumInfo);
                                obj13.renewalDate = tmp2;
                                let formatResult2 = intl4.format(arg1(dependencyMap[17]).t.z2oQtA, obj13);
                              } else {
                                format7Result = arg1;
                                format7Result = dependencyMap;
                                const intl27 = arg1(dependencyMap[17]).intl;
                                const formatToPlainString = intl27.formatToPlainString;
                                t = arg1(dependencyMap[17]).t;
                                if (tmp16) {
                                  obj14 = {};
                                  let percentage1;
                                  if (null != activeDiscountInfo) {
                                    percentage1 = activeDiscountInfo.percentage;
                                  }
                                  if (null == percentage1) {
                                    percentage1 = closure_21;
                                  }
                                  obj14.percent = percentage1;
                                  obj14.regularPrice = tmp2;
                                  let duration;
                                  if (null != activeDiscountInfo) {
                                    duration = activeDiscountInfo.duration;
                                  }
                                  if (null == duration) {
                                    duration = closure_20;
                                  }
                                  obj14.numMonths = duration;
                                  formatResult2 = formatToPlainString(t.3ZiutU, obj14);
                                } else {
                                  const obj15 = {};
                                  let percentage2;
                                  if (null != activeDiscountInfo) {
                                    percentage2 = activeDiscountInfo.percentage;
                                  }
                                  if (null == percentage2) {
                                    percentage2 = closure_21;
                                  }
                                  obj15.percent = percentage2;
                                  obj15.regularPrice = tmp2;
                                  let duration1;
                                  if (null != activeDiscountInfo) {
                                    duration1 = activeDiscountInfo.duration;
                                  }
                                  if (null == duration1) {
                                    duration1 = closure_20;
                                  }
                                  obj15.numMonths = duration1;
                                  formatResult2 = formatToPlainString(t.G6+XOT, obj15);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            if (constants3.CANCELED === status) {
              format7Result = arg1;
              format7Result = dependencyMap;
              const intl19 = arg1(dependencyMap[17]).intl;
              if (tmp8) {
                const format7 = intl19.format;
                let t5 = format7Result(format7Result[17]).t;
                if (tmp16) {
                  t5 = { price };
                  format7Result = format7(t5.cXy8Bp, t5);
                } else {
                  const obj16 = { price };
                  format7Result = format7(t5.C/XsHt, obj16);
                }
              } else {
                return intl19.string(format7Result(format7Result[17]).t.K6tYFa);
              }
            } else {
              format7Result = constants3;
              if (constants3.ACCOUNT_HOLD === status) {
                format7Result = arg1;
                format7Result = dependencyMap;
                const intl18 = arg1(dependencyMap[17]).intl;
                const format6 = intl18.format;
                let t6 = arg1(dependencyMap[17]).t;
                if (tmp8) {
                  if (tmp16) {
                    t6 = { price };
                    format7Result = format6(t6.HBkIBi, t6);
                  } else {
                    obj17 = { price };
                    format7Result = format6(t6.ZsO1Sx, obj17);
                  }
                } else {
                  return format6(t6.0+/WH7, {});
                }
              } else {
                format7Result = constants3;
                if (constants3.UNPAID === status) {
                  const intl17 = arg1(dependencyMap[17]).intl;
                  return intl17.format(arg1(dependencyMap[17]).t.McIzwj, {});
                } else {
                  format7Result = constants3;
                  if (constants3.PAUSE_PENDING === status) {
                    let diffResult1 = null;
                    if (null != subscription.pauseEndsAt) {
                      diffResult1 = importDefault(dependencyMap[19])(subscription.pauseEndsAt).diff(subscription.currentPeriodEnd, "days");
                      const obj31 = importDefault(dependencyMap[19])(subscription.pauseEndsAt);
                    }
                    if (null != diffResult1) {
                      const intl16 = arg1(dependencyMap[17]).intl;
                      const obj18 = { pauseDate: subscription.currentPeriodEnd, pauseDuration: diffResult1 };
                      let formatResult3 = intl16.format(arg1(dependencyMap[17]).t.WUfOD5, obj18);
                    } else {
                      const intl15 = arg1(dependencyMap[17]).intl;
                      const obj19 = { pauseDate: subscription.currentPeriodEnd };
                      formatResult3 = intl15.format(arg1(dependencyMap[17]).t.VlWufv, obj19);
                    }
                    return formatResult3;
                  } else {
                    format7Result = constants3;
                    if (constants3.PAUSED === status) {
                      if (!hasFractionalPremiumWithSub) {
                        const intl14 = arg1(dependencyMap[17]).intl;
                        const obj20 = { resumeDate: subscription.pauseEndsAt };
                        stringResult1 = intl14.format(arg1(dependencyMap[17]).t.6RTdZA, obj20);
                      }
                      return stringResult1;
                    } else {
                      format7Result = constants3;
                      if (constants3.PAST_DUE === status) {
                        const intl13 = arg1(dependencyMap[17]).intl;
                        const obj21 = {
                          endDate: arg1(dependencyMap[20]).dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL"),
                          onClick() {
                                                  callback(closure_2[21])("https://support.discord.com/hc/articles/23082866222871");
                                                }
                        };
                        return intl13.format(arg1(dependencyMap[17]).t.d+0vwo, obj21);
                      } else {
                        return stringResult1;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        format7Result = constants3;
        if (constants3.CANCELED === status) {
          format7Result = arg1;
          format7Result = dependencyMap;
          const intl26 = arg1(dependencyMap[17]).intl;
          if (tmp8) {
            const format9 = intl26.format;
            let t7 = format7Result(format7Result[17]).t;
            if (tmp16) {
              t7 = { price };
              format7Result = format9(t7.USi/nc, t7);
            } else {
              const obj22 = { price };
              format7Result = format9(t7.FS//l2, obj22);
            }
          } else {
            return intl26.string(format7Result(format7Result[17]).t.JshLzq);
          }
        } else {
          format7Result = constants3;
          if (constants3.ACCOUNT_HOLD === status) {
            format7Result = arg1;
            format7Result = dependencyMap;
            const intl25 = arg1(dependencyMap[17]).intl;
            const format8 = intl25.format;
            let t8 = arg1(dependencyMap[17]).t;
            if (tmp8) {
              if (tmp16) {
                t8 = { price };
                format7Result = format8(t8.5mv+2i, t8);
              } else {
                const obj23 = { price };
                format7Result = format8(t8.nkAEfZ, obj23);
              }
            } else {
              return format8(t8.SsLIXS, {});
            }
          } else {
            format7Result = constants3;
            if (constants3.UNPAID === status) {
              format7Result = arg1;
              format7Result = dependencyMap;
              const intl24 = arg1(dependencyMap[17]).intl;
              return intl24.format(arg1(dependencyMap[17]).t.cmkbFB, {});
            } else {
              format7Result = constants3;
              if (constants3.PAUSE_PENDING === status) {
                format7Result = null;
                if (null != subscription.pauseEndsAt) {
                  format7Result = importDefault;
                  format7Result = dependencyMap;
                  format7Result = importDefault(dependencyMap[19])(subscription.pauseEndsAt).diff(subscription.currentPeriodEnd, "days");
                  const obj41 = importDefault(dependencyMap[19])(subscription.pauseEndsAt);
                }
                if (null != format7Result) {
                  format7Result = arg1;
                  format7Result = dependencyMap;
                  const intl23 = arg1(dependencyMap[17]).intl;
                  const obj24 = { pauseDate: subscription.currentPeriodEnd, pauseDuration: format7Result };
                  format7Result = intl23.format(arg1(dependencyMap[17]).t.WUfOD5, obj24);
                } else {
                  format7Result = arg1;
                  format7Result = dependencyMap;
                  const intl22 = arg1(dependencyMap[17]).intl;
                  const obj25 = { pauseDate: subscription.currentPeriodEnd };
                  format7Result = intl22.format(arg1(dependencyMap[17]).t.VlWufv, obj25);
                }
                return format7Result;
              } else {
                format7Result = constants3;
                if (constants3.PAUSED === status) {
                  if (!hasFractionalPremiumWithSub) {
                    format7Result = arg1;
                    format7Result = dependencyMap;
                    const intl21 = arg1(dependencyMap[17]).intl;
                    const obj26 = { resumeDate: subscription.pauseEndsAt };
                    stringResult = intl21.format(arg1(dependencyMap[17]).t.6RTdZA, obj26);
                  }
                  return stringResult;
                } else {
                  format7Result = constants3;
                  if (constants3.PAST_DUE === status) {
                    format7Result = arg1;
                    format7Result = dependencyMap;
                    const intl20 = arg1(dependencyMap[17]).intl;
                    const obj27 = {};
                    format7Result = getBillingGracePeriodDaysAndExpiresDate;
                    obj27.endDate = arg1(dependencyMap[20]).dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL");
                    obj27.onClick = function onClick() {
                      callback(closure_2[21])("https://support.discord.com/hc/articles/23082866222871");
                    };
                    return intl20.format(arg1(dependencyMap[17]).t.d+0vwo, obj27);
                  } else {
                    return stringResult;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function getPremiumPlanOptions(isPremium) {
  let defaultPlanId;
  let skuId;
  ({ skuId, defaultPlanId } = isPremium);
  if (null != skuId) {
    if (isPremium.isPremium) {
      let tmp;
      if (undefined !== defaultPlanId) {
        if (skuId === closure_42[defaultPlanId].skuId) {
          tmp = defaultPlanId;
        }
      }
      if (closure_38.TIER_0 === skuId) {
        const items = [SubscriptionPlans.PREMIUM_YEAR_TIER_0, SubscriptionPlans.PREMIUM_MONTH_TIER_0];
        let items2 = items;
      } else if (closure_38.TIER_1 === skuId) {
        const items1 = [SubscriptionPlans.PREMIUM_MONTH_TIER_1];
        items2 = items1;
      } else if (closure_38.TIER_2 === skuId) {
        items2 = [SubscriptionPlans.PREMIUM_YEAR_TIER_2, SubscriptionPlans.PREMIUM_MONTH_TIER_2];
      } else if (closure_38.GUILD === skuId) {
        return [];
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unexpected SKU: " + skuId);
        throw error;
      }
      if (undefined !== tmp) {
        items2.splice(items2.indexOf(tmp), 1);
        items2.unshift(tmp);
      }
      return items2;
    }
  }
  return [];
}
function getSkuIdForPlan(planId) {
  if (null == closure_42[planId]) {
    const _Error = Error;
    const error = new Error("Unsupported plan");
    let obj = arg1(dependencyMap[13]);
    obj = {};
    obj = { planId };
    obj.tags = obj;
    const result = obj.captureBillingException(error, obj);
    throw error;
  } else {
    return tmp.skuId;
  }
}
function getNumPremiumGuildSubscriptions(additionalPlans) {
  const items = [closure_38.GUILD];
  const planIdsForSkus = store.getPlanIdsForSkus(items);
  const arg1 = planIdsForSkus;
  importDefault(dependencyMap[16])(null != planIdsForSkus, "Missing guildSubscriptionPlanIds");
  const found = additionalPlans.find((planId) => planIdsForSkus.includes(planId.planId));
  let num = 0;
  if (null != found) {
    num = found.quantity;
  }
  return num;
}
function subscriptionHasPremiumGuildPlan(subscription) {
  return getNumPremiumGuildSubscriptions(subscription.additionalPlans) > 0;
}
function isPremiumBaseSubscriptionPlan(arg0) {
  return set.has(arg0);
}
function isPremiumGuildSubscriptionPlan(arg0) {
  return set.has(arg0);
}
function getBillingGracePeriodDaysAndExpiresDate(subscription) {
  if (subscription.isPurchasedViaApple) {
    const metadata = subscription.metadata;
    let prop;
    if (null != metadata) {
      prop = metadata.apple_grace_period_expires_date;
    }
    if (null != prop) {
      const obj11 = importDefault(dependencyMap[19])(subscription.metadata.apple_grace_period_expires_date);
      let obj = {};
      const obj13 = importDefault(dependencyMap[19]);
      obj.days = importDefault(dependencyMap[19]).duration(obj11.diff(subscription.currentPeriodStart)).days();
      obj.expiresDate = obj11;
      return obj;
    }
  }
  if (subscription.isPurchasedViaGoogle) {
    const metadata2 = subscription.metadata;
    let prop1;
    if (null != metadata2) {
      prop1 = metadata2.google_grace_period_expires_date;
    }
    if (null != prop1) {
      const metadata3 = subscription.metadata;
      let prop2;
      if (null != metadata3) {
        prop2 = metadata3.google_original_expires_date;
      }
      if (null != prop2) {
        const obj7 = importDefault(dependencyMap[19])(subscription.metadata.google_grace_period_expires_date);
        obj = {};
        const tmp22 = importDefault(dependencyMap[19])(subscription.metadata.google_original_expires_date);
        const obj9 = importDefault(dependencyMap[19]);
        obj.days = importDefault(dependencyMap[19]).duration(obj7.diff(tmp22)).days();
        obj.expiresDate = obj7;
        return obj;
      }
    }
  }
  if (subscription.isPurchasedExternally) {
    const tmp17 = subscription.isPurchasedViaApple ? closure_17 : closure_18;
    let obj1 = { days: tmp17, expiresDate: importDefault(dependencyMap[19])(subscription.currentPeriodStart).add(tmp17, "days") };
    return obj1;
  } else {
    const metadata4 = subscription.metadata;
    let prop3;
    if (null != metadata4) {
      prop3 = metadata4.grace_period_expires_date;
    }
    if (null != prop3) {
      const obj2 = {};
      const metadata5 = subscription.metadata;
      let prop4;
      if (null != metadata5) {
        prop4 = metadata5.grace_period_expires_date;
      }
      const tmp13 = importDefault(dependencyMap[19]);
      obj2.days = importDefault(dependencyMap[19])(prop4).diff(subscription.currentPeriodStart, "days");
      obj2.expiresDate = importDefault(dependencyMap[19])(subscription.metadata.grace_period_expires_date);
      return obj2;
    } else {
      const tmp8 = null == subscription.paymentSourceId ? closure_19 : closure_30;
      obj = { days: tmp8 };
      obj1 = importDefault(dependencyMap[19])(subscription.currentPeriodStart);
      obj.expiresDate = obj1.add(tmp8, "days");
      return obj;
    }
  }
}
function getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo) {
  const date = new Date(premiumSubscription.currentPeriodEnd);
  let tmp3 = date;
  if (!tmp2) {
    tmp3 = extendDateWithUnconsumedFractionalPremium(date, fractionalPremiumInfo.unactivatedUnits);
  }
  return tmp3;
}
function getBillingInformationString(status, subscriptionPeriodStart, first1, flag, fractionalPremiumInfo) {
  let tmp = first1;
  let tmp2 = fractionalPremiumInfo;
  if (first1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  if (tmp2 === undefined) {
    let obj = { fractionalState: constants5.NONE, startsAt: importDefault(dependencyMap[19])(0), endsAt: importDefault(dependencyMap[19])(0), currentEntitlementId: "", currentEntitlementEndsAt: importDefault(dependencyMap[19])(0), unactivatedUnits: [] };
    tmp2 = obj;
  }
  let tmp3 = subscriptionPeriodStart;
  if (null !== tmp) {
    tmp3 = subscriptionPeriodStart;
    if (status.status === constants3.PAST_DUE) {
      tmp3 = tmp;
    }
  }
  const formatPrice = subscriptionPeriodStart(dependencyMap[22]).formatPrice;
  if (flag) {
    const invoiceItems = tmp3.invoiceItems;
    const found = invoiceItems.filter((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
    const mapped = found.map((amount) => amount.amount);
    let formatPriceResult = formatPrice(mapped.reduce((arg0, arg1) => arg1 + arg0, 0), tmp3.currency);
  } else {
    formatPriceResult = formatPrice(tmp3.total, tmp3.currency);
  }
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    if (currentUser.isOnReverseTrial()) {
      if (null != tmp2.currentEntitlementEndsAt) {
        const currentEntitlementEndsAt = tmp2.currentEntitlementEndsAt;
        let currentPeriodEnd = currentEntitlementEndsAt.toDate();
      } else {
        currentPeriodEnd = status.currentPeriodEnd;
      }
      const intl16 = subscriptionPeriodStart(dependencyMap[17]).intl;
      obj = { trialEnd: currentPeriodEnd };
      return intl16.format(subscriptionPeriodStart(dependencyMap[17]).t.7ZS2m1, obj);
    }
  }
  if (status.status === constants3.CANCELED) {
    const intl15 = subscriptionPeriodStart(dependencyMap[17]).intl;
    const obj1 = { endDate: subscriptionPeriodStart.subscriptionPeriodStart };
    return intl15.format(subscriptionPeriodStart(dependencyMap[17]).t.Whp/qk, obj1);
  } else if (status.status === constants3.PAUSE_PENDING) {
    const intl14 = subscriptionPeriodStart(dependencyMap[17]).intl;
    ({ currentPeriodEnd: obj23.pauseDate, pauseEndsAt: obj23.resumeDate } = status);
    return intl14.format(subscriptionPeriodStart(dependencyMap[17]).t.uBLUGU, {});
  } else if (status.status === constants3.PAUSED) {
    if (tmp2.fractionalState !== constants5.NONE) {
      const intl13 = subscriptionPeriodStart(dependencyMap[17]).intl;
      const obj3 = {};
      const endsAt = tmp2.endsAt;
      obj3.renewalDate = endsAt.toDate();
      obj3.price = formatPriceResult;
      let formatResult = intl13.format(subscriptionPeriodStart(dependencyMap[17]).t.Q18lRK, obj3);
    } else if (null == status.pauseEndsAt) {
      let num16 = 17;
      const intl11 = subscriptionPeriodStart(dependencyMap[17]).intl;
      if (flag) {
        const obj4 = {};
        const intl12 = tmp59(tmp60[num16]).intl;
        num16 = intl12.string(tmp59(tmp60[num16]).t.Ipxkog);
        obj4.planName = num16;
        obj4.price = formatPriceResult;
        let formatResult1 = intl11.format(tmp59(tmp60[num16]).t.KTYQCg, obj4);
      } else {
        formatResult1 = intl11.string(tmp59(tmp60[num16]).t.fMz6Lg);
      }
    } else {
      const intl17 = subscriptionPeriodStart(dependencyMap[17]).intl;
      const format3 = intl17.format;
      const t3 = subscriptionPeriodStart(dependencyMap[17]).t;
      if (flag) {
        const obj5 = {};
        const intl10 = tmp80(tmp81[17]).intl;
        obj5.planName = intl10.string(tmp80(tmp81[17]).t.Ipxkog);
        obj5.resumeDate = status.pauseEndsAt;
        obj5.price = formatPriceResult;
        formatResult = format3(t3.zcgtzf, obj5);
      } else {
        let obj6 = { resumeDate: status.pauseEndsAt };
        formatResult = format3(t3.V8+l6k, obj6);
      }
    }
    return formatResult;
  } else if (status.status === constants3.PAST_DUE) {
    let expiresDate = getBillingGracePeriodDaysAndExpiresDate(status).expiresDate;
    let isPurchasedViaGoogle = status.isPurchasedViaGoogle;
    if (isPurchasedViaGoogle) {
      const metadata = status.metadata;
      let prop;
      if (null != metadata) {
        prop = metadata.google_grace_period_expires_date;
      }
      isPurchasedViaGoogle = null != prop;
    }
    if (isPurchasedViaGoogle) {
      expiresDate = importDefault(dependencyMap[19])(status.metadata.google_grace_period_expires_date);
    }
    let isPurchasedViaApple = status.isPurchasedViaApple;
    if (isPurchasedViaApple) {
      const metadata2 = status.metadata;
      let prop1;
      if (null != metadata2) {
        prop1 = metadata2.apple_grace_period_expires_date;
      }
      isPurchasedViaApple = null != prop1;
    }
    if (isPurchasedViaApple) {
      expiresDate = importDefault(dependencyMap[19])(status.metadata.apple_grace_period_expires_date);
    }
    const intl9 = subscriptionPeriodStart(dependencyMap[17]).intl;
    const format2 = intl9.format;
    const t2 = subscriptionPeriodStart(dependencyMap[17]).t;
    if (status.isPurchasedExternally) {
      const obj7 = { endDate: expiresDate.toDate(), paymentGatewayName: closure_49[status.paymentGateway], paymentSourceLink: getExternalSubscriptionMethodUrl(status.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT") };
      let format2Result = format2(t2.U2hb3W, obj7);
    } else {
      let obj8 = { endDate: expiresDate.toDate(), price: formatPriceResult };
      format2Result = format2(t2.qEIzyi, obj8);
    }
    return format2Result;
  } else if (status.status === constants3.BILLING_RETRY) {
    const intl8 = subscriptionPeriodStart(dependencyMap[17]).intl;
    const obj9 = {};
    let obj14 = importDefault(dependencyMap[19])(status.currentPeriodStart);
    obj9.endDate = obj14.add(closure_29, "days").toDate();
    obj9.price = formatPriceResult;
    return intl8.format(subscriptionPeriodStart(dependencyMap[17]).t.EMTLOT, obj9);
  } else if (status.status === constants3.ACCOUNT_HOLD) {
    if (status.isPurchasedViaGoogle) {
      obj6 = subscriptionPeriodStart(dependencyMap[23]);
      if (!obj6.isGooglePlayBillingSupported()) {
        const intl6 = subscriptionPeriodStart(dependencyMap[17]).intl;
        const obj10 = {};
        obj8 = importDefault(dependencyMap[19])(status.currentPeriodStart);
        obj10.endDate = obj8.add(closure_26, "days").toDate();
        obj10.paymentGatewayName = closure_49[status.paymentGateway];
        obj10.paymentSourceLink = getExternalSubscriptionMethodUrl(status.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
        let formatResult2 = intl6.format(subscriptionPeriodStart(dependencyMap[17]).t.dtcxw+, obj10);
        const addResult1 = obj8.add(closure_26, "days");
      }
      return formatResult2;
    }
    const intl7 = subscriptionPeriodStart(dependencyMap[17]).intl;
    let obj11 = {};
    obj11 = importDefault(dependencyMap[19])(status.currentPeriodStart);
    obj11.endDate = obj11.add(closure_26, "days").toDate();
    obj11.price = formatPriceResult;
    formatResult2 = intl7.format(subscriptionPeriodStart(dependencyMap[17]).t.EMTLOT, obj11);
    const addResult2 = obj11.add(closure_26, "days");
  } else if (isSubscriptionPrepaidPaymentSource(status)) {
    const intl5 = subscriptionPeriodStart(dependencyMap[17]).intl;
    const obj12 = { prepaidEndDate: status.currentPeriodEnd };
    return intl5.format(subscriptionPeriodStart(dependencyMap[17]).t.awpB0C, obj12);
  } else if (status.status === constants3.UNPAID) {
    const intl4 = subscriptionPeriodStart(dependencyMap[17]).intl;
    const obj13 = { maxProcessingTimeInDays: closure_27 };
    return intl4.format(subscriptionPeriodStart(dependencyMap[17]).t.CzTKom, obj13);
  } else if (status.isPurchasedExternally) {
    const intl3 = subscriptionPeriodStart(dependencyMap[17]).intl;
    obj14 = { renewalDate: subscriptionPeriodStart.subscriptionPeriodStart, paymentGatewayName: closure_49[status.paymentGateway], subscriptionManagementLink: getExternalSubscriptionMethodUrl(status.paymentGateway, "SUBSCRIPTION_MANAGEMENT") };
    return intl3.format(subscriptionPeriodStart(dependencyMap[17]).t.ZlWXgR, obj14);
  } else {
    const _Date = Date;
    const date = new Date(subscriptionPeriodStart.subscriptionPeriodStart);
    let tmp14 = date;
    if (!tmp13) {
      tmp14 = extendDateWithUnconsumedFractionalPremium(date, tmp2.unactivatedUnits);
    }
    const intl = subscriptionPeriodStart(dependencyMap[17]).intl;
    const format = intl.format;
    const t = subscriptionPeriodStart(dependencyMap[17]).t;
    if (flag) {
      const obj15 = {};
      const intl2 = tmp16(tmp17[17]).intl;
      obj15.planName = intl2.string(tmp16(tmp17[17]).t.Ipxkog);
      obj15.renewalDate = tmp14;
      obj15.price = formatPriceResult;
      let formatResult3 = format(t.Vl3cED, obj15);
    } else {
      const obj16 = { renewalDate: tmp14, price: formatPriceResult };
      formatResult3 = format(t.Q18lRK, obj16);
    }
    return formatResult3;
  }
}
function extendDateWithUnconsumedFractionalPremium(date, unactivatedUnits, diff, excludeReverseTrialFromCountdown) {
  let tmp2;
  if (!excludeReverseTrialFromCountdown) {
    tmp2 = date;
  }
  const tmpResult = importDefault(dependencyMap[19])(tmp2);
  let addResult = tmpResult;
  if (unactivatedUnits.length > 0) {
    addResult = tmpResult.add(getFractionalPremiumUnitsHours(unactivatedUnits), "hours");
  }
  let addResult1 = addResult;
  if (!excludeReverseTrialFromCountdown) {
    addResult1 = addResult;
    if (undefined !== diff) {
      const diffResult = diff.diff(importDefault(dependencyMap[19])(), "hours", true);
      addResult1 = addResult;
      if (diffResult > 0) {
        addResult1 = addResult.add(diffResult, "hours");
      }
    }
  }
  return addResult1.toDate();
}
function getUnactivatedFractionalPremiumDurationString(unactivatedUnits) {
  const tmp = getFractionalPremiumUnitsHours(unactivatedUnits.unactivatedUnits);
  if (tmp > 0) {
    if (unactivatedUnits.fractionalState === constants5.NONE) {
      const obj = { days: arg1(dependencyMap[17]).t.fYmirx, hours: arg1(dependencyMap[17]).t.C3RO+g, minutes: arg1(dependencyMap[17]).t.r77oHc };
      const obj2 = arg1(dependencyMap[24]);
      const result = obj2.roundFPCountdownUnits(arg1(dependencyMap[20]).diffAsUnits(0, tmp * importDefault(dependencyMap[25]).Millis.HOUR));
      const obj3 = arg1(dependencyMap[20]);
      return arg1(dependencyMap[20]).unitsAsStrings(result, obj);
    }
  }
  return "";
}
function isSwitchingPlansDisabled(renewalMutations) {
  let tmp = null != renewalMutations.renewalMutations || null != renewalMutations.trialEndsAt;
  if (!tmp) {
    tmp = renewalMutations.status === constants3.PAST_DUE;
  }
  return tmp;
}
function getSwitchingPlansDisabledMessage(renewalMutations) {
  let stringResult = null;
  if (null == renewalMutations.renewalMutations) {
    if (null != renewalMutations.trialEndsAt) {
      const intl3 = arg1(dependencyMap[17]).intl;
      stringResult = intl3.string(arg1(dependencyMap[17]).t.a9Mdb3);
    }
    return stringResult;
  } else if (renewalMutations.renewalMutations.planId !== renewalMutations.planId) {
    const intl2 = arg1(dependencyMap[17]).intl;
    let stringResult1 = intl2.string(arg1(dependencyMap[17]).t.0rzJ4J);
  } else {
    const intl = arg1(dependencyMap[17]).intl;
    stringResult1 = intl.string(arg1(dependencyMap[17]).t.9dLQ0/);
  }
}
function isSubscriptionPrepaidPaymentSource(paymentSourceId) {
  let tmp = null != paymentSourceId.paymentSourceId;
  if (tmp) {
    tmp = isPrepaidPaymentSource(paymentSourceId.paymentSourceId);
  }
  return tmp;
}
function isPrepaidPaymentSource(paymentSourceId) {
  if (null == paymentSourceId) {
    return false;
  } else {
    const paymentSource = paymentSource.getPaymentSource(paymentSourceId);
    let hasItem = null != paymentSource;
    if (hasItem) {
      hasItem = set3.has(paymentSource.type);
    }
    return hasItem;
  }
}
function getCoercedPremiumGuildSubscriptionStatus(subscription) {
  let renewalMutations;
  let status;
  ({ renewalMutations, status } = subscription);
  let tmp2 = null;
  if (null != renewalMutations) {
    tmp2 = getNumPremiumGuildSubscriptions(renewalMutations.additionalPlans);
  }
  let CANCELED = status;
  if (0 === tmp2) {
    CANCELED = status;
    if (0 !== tmp) {
      CANCELED = constants3.CANCELED;
    }
  }
  return CANCELED;
}
function isPremiumGuildSubscriptionCanceled(isPurchasedExternally) {
  if (isPurchasedExternally.isPurchasedExternally) {
    let tmp3 = isPurchasedExternally.status === constants3.CANCELED;
  } else {
    tmp3 = getCoercedPremiumGuildSubscriptionStatus(isPurchasedExternally) === constants3.CANCELED;
  }
  return tmp3;
}
function getFormattedPriceForPlan(id, arg1, arg2) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  if (null != arg1) {
    let tmp5 = getPrice(id.id, false, tmp, arg1);
  } else {
    tmp5 = getDefaultPrice(id.id, false, tmp);
  }
  while (true) {
    let tmp10 = arg1;
    let tmp11 = dependencyMap;
    let num = 22;
    let obj = arg1(dependencyMap[22]);
    let formatPriceResult = obj.formatPrice(tmp5.amount, tmp5.currency);
    let tmp12 = constants7;
    let tmp13 = id.currency !== constants7.USD;
    if (!tmp13) {
      break;
    } else {
      let flag4 = true;
      let tmp14 = arg2;
      tmp13 = true === arg2;
      // break
    }
    let combined = formatPriceResult;
    if (tmp13) {
      let str = "*";
      combined = formatPriceResult.concat("*");
    }
    return combined;
  }
}
function getPlanIdFromInvoice(subscription, first) {
  if (subscription.status !== constants3.CANCELED) {
    if (subscription.status !== constants3.PAUSE_PENDING) {
      importDefault(dependencyMap[16])(null != first, "Expected invoicePreview");
      const invoiceItems = first.invoiceItems;
      const found = invoiceItems.find((subscriptionPlanId) => callback(subscriptionPlanId.subscriptionPlanId));
      if (null != found) {
        if (!isNoneSubscription(found.subscriptionPlanId)) {
          let planId = found.subscriptionPlanId;
        }
        return planId;
      }
      planId = subscription.planId;
    }
  }
  return subscription.planId;
}
function getStatusFromInvoice(subscription, first) {
  const status = subscription.status;
  if (subscription.status !== constants3.CANCELED) {
    if (subscription.status !== constants3.PAUSE_PENDING) {
      importDefault(dependencyMap[16])(null != first, "Expected invoicePreview");
      const invoiceItems = first.invoiceItems;
      const found = invoiceItems.find((subscriptionPlanId) => callback(subscriptionPlanId.subscriptionPlanId));
      let tmp6 = null == found;
      if (!tmp6) {
        tmp6 = isNoneSubscription(found.subscriptionPlanId);
      }
      let CANCELED = status;
      if (tmp6) {
        CANCELED = constants3.CANCELED;
      }
      return CANCELED;
    }
  }
  return status;
}
function isBaseSubscriptionCanceled(subscription) {
  const renewalMutations = subscription.renewalMutations;
  let tmp = subscription.status === constants3.CANCELED;
  if (!tmp) {
    let tmp3 = null != renewalMutations;
    if (tmp3) {
      tmp3 = isNoneSubscription(renewalMutations.planId);
    }
    if (tmp3) {
      tmp3 = !subscription.isPurchasedExternally;
    }
    tmp = tmp3;
  }
  return tmp;
}
function isSubscriptionStatusFailedPayment(arg0) {
  let tmp = arg0 === constants3.PAST_DUE;
  if (!tmp) {
    tmp = arg0 === constants3.ACCOUNT_HOLD;
  }
  if (!tmp) {
    tmp = arg0 === constants3.BILLING_RETRY;
  }
  return tmp;
}
function getFormattedPlanPriceFromInvoice(renewalInvoicePreview, subscription, value) {
  const result = renewalInvoicePreview.findInvoiceItemByPlanId(value.id);
  if (null == result) {
    const obj = {};
    ({ paymentSourceId: obj.paymentSourceId, currency: obj.currency } = subscription);
    let amount = getPrice(value.id, false, false, obj).amount;
  } else {
    amount = result.amount;
  }
  const obj2 = subscription(dependencyMap[22]);
  return obj2.formatRate(subscription(dependencyMap[22]).formatPrice(amount, renewalInvoicePreview.currency), value.interval, value.intervalCount);
}
function getPremiumGuildIntervalPrice(planId, paymentSourceId, currency, user) {
  if (null != paymentSourceId) {
    let obj = { paymentSourceId, currency };
  } else {
    obj = {};
    obj.country = obj.ipCountryCodeWithFallback;
    obj.currency = currency;
  }
  const value = store.get(planId);
  if (null == value) {
    const _Error2 = Error;
    const error = new Error("Unsupported plan");
    obj = {};
    const obj1 = { planId };
    obj.tags = obj1;
    const result = paymentSourceId(dependencyMap[13]).captureBillingException(error, obj);
    throw error;
  } else {
    const forSkuAndInterval = store.getForSkuAndInterval(closure_38.GUILD, value.interval, value.intervalCount);
    if (null == forSkuAndInterval) {
      const _Error = Error;
      const error1 = new Error("Unsupported plan");
      let obj3 = paymentSourceId(dependencyMap[13]);
      let obj2 = {};
      obj3 = { planId };
      obj2.tags = obj3;
      const result1 = obj3.captureBillingException(error1, obj2);
      throw error1;
    } else {
      const id = forSkuAndInterval.id;
      obj2 = paymentSourceId(dependencyMap[15]);
      return getPrice(id, obj2.isPremium(user), false, obj);
    }
  }
}
function getBillingReviewSubheader(arg0, id) {
  id = id.id;
  if (null != arg0) {
    if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === id) {
      const intl15 = id(dependencyMap[17]).intl;
      return intl15.string(id(dependencyMap[17]).t.0ggVqN);
    } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === id) {
      const intl14 = id(dependencyMap[17]).intl;
      return intl14.string(id(dependencyMap[17]).t.jm+ZQw);
    } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === id) {
      const intl13 = id(dependencyMap[17]).intl;
      return intl13.string(id(dependencyMap[17]).t.uph4Jx);
    } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === id) {
      const intl12 = id(dependencyMap[17]).intl;
      return intl12.string(id(dependencyMap[17]).t.D/l7Yt);
    } else {
      if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 !== id) {
        if (SubscriptionPlans.PREMIUM_GROUP_MONTH !== id) {
          if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === id) {
            const intl10 = id(dependencyMap[17]).intl;
            return intl10.string(id(dependencyMap[17]).t.G0mISV);
          }
        }
      }
      const intl11 = id(dependencyMap[17]).intl;
      return intl11.string(id(dependencyMap[17]).t.5l1MuV);
    }
  }
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === id) {
    const intl9 = id(dependencyMap[17]).intl;
    const string6 = intl9.string;
    const t6 = id(dependencyMap[17]).t;
    if (arg2) {
      let string6Result = string6(t6.cRCCJ3);
    } else {
      string6Result = string6(t6./G3aKw);
    }
    return string6Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === id) {
    const intl8 = id(dependencyMap[17]).intl;
    const string5 = intl8.string;
    const t5 = id(dependencyMap[17]).t;
    if (arg2) {
      let string5Result = string5(t5.cRCCJ3);
    } else {
      string5Result = string5(t5.2eQpsL);
    }
    return string5Result;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_1 === id) {
    const intl7 = id(dependencyMap[17]).intl;
    const string4 = intl7.string;
    const t4 = id(dependencyMap[17]).t;
    if (arg2) {
      let string4Result = string4(t4.cRCCJ3);
    } else {
      string4Result = string4(t4.gueLg5);
    }
    return string4Result;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_1 === id) {
    const intl6 = id(dependencyMap[17]).intl;
    const string3 = intl6.string;
    const t3 = id(dependencyMap[17]).t;
    if (arg2) {
      let string3Result = string3(t3.cRCCJ3);
    } else {
      string3Result = string3(t3.MhH/vW);
    }
    return string3Result;
  } else if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 === id) {
    const intl5 = id(dependencyMap[17]).intl;
    const string2 = intl5.string;
    const t2 = id(dependencyMap[17]).t;
    if (arg2) {
      let string2Result = string2(t2.cRCCJ3);
    } else {
      string2Result = string2(t2.LQVQIq);
    }
    return string2Result;
  } else if (SubscriptionPlans.PREMIUM_GROUP_MONTH === id) {
    const intl4 = id(dependencyMap[17]).intl;
    let obj = { premiumGroupProductName: callback() };
    return intl4.formatToPlainString(importDefault(dependencyMap[18]).LwdrNi, obj);
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === id) {
    const intl3 = id(dependencyMap[17]).intl;
    const string = intl3.string;
    const t = id(dependencyMap[17]).t;
    if (arg2) {
      let stringResult = string(t.cRCCJ3);
    } else {
      stringResult = string(t.0nfg1x);
    }
    return stringResult;
  } else {
    if (SubscriptionPlans.PREMIUM_3_MONTH_TIER_2 !== id) {
      if (SubscriptionPlans.PREMIUM_6_MONTH_TIER_2 !== id) {
        if (SubscriptionPlans.NONE_MONTH !== id) {
          if (SubscriptionPlans.NONE_YEAR !== id) {
            if (SubscriptionPlans.NONE_3_MONTH !== id) {
              if (SubscriptionPlans.NONE_6_MONTH !== id) {
                if (SubscriptionPlans.PREMIUM_MONTH_GUILD !== id) {
                  if (SubscriptionPlans.PREMIUM_YEAR_GUILD !== id) {
                    if (SubscriptionPlans.PREMIUM_3_MONTH_GUILD !== id) {
                      if (SubscriptionPlans.PREMIUM_6_MONTH_GUILD !== id) {
                        const _Error = Error;
                        const error = new Error("User is purchasing an unsupported plan");
                        obj = id(dependencyMap[13]);
                        obj = {};
                        const obj1 = { planId: id };
                        obj.tags = obj1;
                        const result = obj.captureBillingException(error, obj);
                        throw error;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const intl = id(dependencyMap[17]).intl;
        return intl.string(id(dependencyMap[17]).t.eUEeCt);
      }
    }
    const intl2 = id(dependencyMap[17]).intl;
    const obj2 = { intervalCount: id.intervalCount };
    return intl2.formatToPlainString(id(dependencyMap[17]).t.BCD4fT, obj2);
  }
}
function getIntervalForInvoice(arg0) {
  const value = store.get(arg0.invoiceItems[0].subscriptionPlanId);
  importDefault(dependencyMap[16])(null != value, "Missing subscriptionPlan");
  return { intervalType: value.interval, intervalCount: value.intervalCount };
}
function getDefaultCurrency() {
  const currency = getDefaultPrice(SubscriptionPlans.PREMIUM_MONTH_TIER_2, false, false, undefined, false).currency;
}
function formatTrialCtaIntervalDuration(intervalType) {
  let MONTH = intervalType.intervalType;
  if (MONTH === undefined) {
    MONTH = constants6.MONTH;
  }
  let num = intervalType.intervalCount;
  if (num === undefined) {
    num = 1;
  }
  let obj = arg1(dependencyMap[22]);
  const formatPriceResult = obj.formatPrice(0, getDefaultCurrency(), { "Bool(true)": -536870861, "Bool(true)": -299892737 });
  if (constants6.DAY === MONTH) {
    if (num >= 7) {
      if (num % 7 === 0) {
        const intl4 = arg1(dependencyMap[17]).intl;
        obj = { weeks: num / 7, price: formatPriceResult };
        let formatToPlainStringResult = intl4.formatToPlainString(arg1(dependencyMap[17]).t.C6i5Jt, obj);
      }
      return formatToPlainStringResult;
    }
    const intl3 = arg1(dependencyMap[17]).intl;
    obj = { days: num, price: formatPriceResult };
    formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[17]).t.cR9ifw, obj);
  } else if (constants6.MONTH === MONTH) {
    const intl2 = arg1(dependencyMap[17]).intl;
    const obj1 = { months: num, price: formatPriceResult };
    return intl2.formatToPlainString(arg1(dependencyMap[17]).t.8FZfNo, obj1);
  } else if (constants6.YEAR === MONTH) {
    const intl = arg1(dependencyMap[17]).intl;
    const obj2 = { years: num, price: formatPriceResult };
    return intl.formatToPlainString(arg1(dependencyMap[17]).t.xzAcST, obj2);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported interval duration.");
    throw error;
  }
}
function getExternalSubscriptionMethodUrl(paymentGateway, PAYMENT_SOURCE_MANAGEMENT) {
  if (constants2.APPLE_PARTNER !== paymentGateway) {
    if (constants2.APPLE_ADVANCED_COMMERCE !== paymentGateway) {
      if (constants2.APPLE !== paymentGateway) {
        if (constants2.GOOGLE === paymentGateway) {
          return closure_52[PAYMENT_SOURCE_MANAGEMENT];
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Invalid external payment gateway " + paymentGateway);
          throw error;
        }
      }
    }
  }
  return closure_51[PAYMENT_SOURCE_MANAGEMENT];
}
function getItemsFromNewAdditionalPlans(renewalMutations, items) {
  items = renewalMutations;
  items = [];
  renewalMutations = renewalMutations.renewalMutations;
  let items1;
  if (null != renewalMutations) {
    items1 = renewalMutations.items;
  }
  if (null == items1) {
    items1 = renewalMutations.items;
  }
  const found = items1.find((planId) => set.has(planId.planId));
  if (null != found) {
    items.push(found);
  }
  const items2 = [...items];
  items.push.apply(items2);
  return items.map((planId) => {
    const tmp = callback(planId.items);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      const value = iter2.value;
      while (planId.planId !== value.planId) {
        let iter3 = tmp();
        iter2 = iter3;
      }
      const obj = {};
      const merged = Object.assign(value);
      const merged1 = Object.assign(planId);
      return obj;
    }
    return planId;
  });
}
function getItemsWithoutPremiumPlanItem(items) {
  return items.filter((planId) => !set.has(planId.planId));
}
function getItemsWithUpsertedPlanIdForGroup(renewalMutations, planId, quantity, closure_31) {
  const importDefault = quantity;
  const dependencyMap = closure_31;
  if (closure_31.has(planId)) {
    let closure_3 = false;
    renewalMutations = renewalMutations.renewalMutations;
    let items;
    if (null != renewalMutations) {
      items = renewalMutations.items;
    }
    if (null == items) {
      items = renewalMutations.items;
    }
    const mapped = items.map((planId) => {
      let tmp = planId;
      if (arg3.has(planId.planId)) {
        let closure_3 = true;
        const obj = {};
        const merged = Object.assign(planId);
        obj["quantity"] = arg2;
        obj["planId"] = arg1;
        tmp = obj;
      }
      return tmp;
    });
    if (!closure_3) {
      let obj = { planId, quantity };
      const items1 = renewalMutations.items;
      const found = items1.find((planId) => planId.planId === arg1);
      if (null != found) {
        obj.id = found.id;
      }
      mapped.push(obj);
    }
    return mapped.filter((quantity) => 0 !== quantity.quantity);
  } else {
    const CheckoutError = planId(dependencyMap[27]).CheckoutError;
    obj = { message: "Expected planId in group" };
    obj = { newPlanId: planId, planGroup: closure_31 };
    obj.extraSentryInformation = obj;
    const prototype = CheckoutError.prototype;
    const checkoutError = new CheckoutError(obj);
    throw checkoutError;
  }
}
function getGuildBoostPlanItem(items) {
  let found = null;
  if (null != items) {
    items = items.items;
    found = items.find((planId) => set.has(planId.planId));
  }
  return found;
}
function isBoostOnlySubscription(subscription) {
  let tmp = null != subscription;
  if (tmp) {
    tmp = null == getPremiumPlanItem(subscription);
  }
  if (tmp) {
    tmp = null != getGuildBoostPlanItem(subscription);
  }
  return tmp;
}
function getPremiumSkuIdForSubscription(items) {
  let tmp = null;
  if (null != items) {
    tmp = getPremiumPlanItem(items);
  }
  let tmp3 = null;
  if (null != tmp) {
    tmp3 = getSkuIdForPlan(tmp.planId);
  }
  return tmp3;
}
function getPremiumTypeFromSubscription(subscription) {
  if (null != subscription) {
    const tmp2 = getPremiumPlanItem(subscription);
    if (null != tmp2) {
      return getPremiumType(tmp2.planId);
    }
  }
}
function isNewUser(createdAt) {
  let tmp = null != createdAt;
  if (tmp) {
    const _Date = Date;
    createdAt = createdAt.createdAt;
    const timestamp = Date.now();
    tmp = timestamp - createdAt.getTime() < 2592000000;
  }
  return tmp;
}
function canUseQuestOrbMultiplier(perks) {
  return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).QUEST_ORB_MULTIPLIER, perks);
}
function canUseCollectibles(user) {
  return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).COLLECTIBLES, user);
}
function formatPriceString(defaultPrice, interval) {
  const obj = interval(dependencyMap[22]);
  return "" + interval(dependencyMap[22]).formatPrice(defaultPrice.amount, defaultPrice.currency) + "/" + getIntervalStringAsNoun(interval);
}
function castPremiumSubscriptionAsSkuId(skuIdForPlan) {
  return skuIdForPlan;
}
function isTrialOffer(trial_id) {
  let tmp = null != trial_id;
  if (tmp) {
    tmp = "trial_id" in trial_id;
  }
  return tmp;
}
function isDiscountOffer(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = "discountId" in arg0;
  }
  return tmp;
}
function formatInterval(interval) {
  if (interval === constants6.YEAR) {
    const intl2 = arg1(dependencyMap[17]).intl;
    return intl2.string(arg1(dependencyMap[17]).t.tfqrhj);
  } else if (interval === constants6.MONTH) {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(arg1(dependencyMap[17]).t.FPybU7);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid interval type: " + interval);
    throw error;
  }
}
function isPremiumEligible(isProvisional) {
  return null != isProvisional && !isProvisional.isProvisional && !isProvisional.bot;
}
function getFractionalPremiumUnitsHours(unactivatedUnits) {
  return getFractionalPremiumUnitsHoursFromSkuIds(unactivatedUnits.map((skuId) => skuId.skuId));
}
function getFractionalPremiumUnitsHoursFromSkuIds(flatMapResult) {
  return flatMapResult.reduce((arg0, arg1) => {
    const tmp = callback(closure_23[arg1], 2);
    const first = tmp[0];
    let num = 1;
    if (constants.HOUR !== first) {
      num = 1;
      if (constants.DAY === first) {
        num = 24;
      }
    }
    return arg0 + num * tmp[1];
  }, 0);
}
function getMonthlyPrice(isGift) {
  let flag = isGift.isGift;
  if (flag === undefined) {
    flag = false;
  }
  let priceOptions = isGift.priceOptions;
  if (priceOptions === undefined) {
    priceOptions = {};
  }
  let tmp2 = null;
  if (null != closure_33[isGift.subscriptionPlan.skuId]) {
    tmp2 = getPrice(tmp, false, flag, priceOptions);
  }
  return tmp2;
}
function calculateMonthlyPriceEquivalentTotal(priceOptions) {
  let isGift;
  let subscriptionPlan;
  ({ subscriptionPlan, isGift } = priceOptions);
  if (isGift === undefined) {
    isGift = false;
  }
  priceOptions = priceOptions.priceOptions;
  if (priceOptions === undefined) {
    priceOptions = {};
  }
  if (subscriptionPlan.interval === constants6.DAY) {
    return null;
  } else {
    if (subscriptionPlan.interval === constants6.MONTH) {
      if (1 === subscriptionPlan.intervalCount) {
        return null;
      }
    }
    const obj = { subscriptionPlan, isGift, priceOptions };
    const tmp2 = getMonthlyPrice(obj);
    if (null == tmp2) {
      return null;
    } else {
      if (subscriptionPlan.interval === constants6.MONTH) {
        let intervalCount = subscriptionPlan.intervalCount;
      } else {
        intervalCount = 12 * subscriptionPlan.intervalCount;
      }
      return tmp2.amount * intervalCount;
    }
  }
}
function calculateDiscountPercentageForYearlyPlan(subscriptionPlan, arg1, isGift) {
  let flag = arg1;
  let obj = isGift;
  if (arg1 === undefined) {
    flag = false;
  }
  if (obj === undefined) {
    obj = {};
  }
  if (subscriptionPlan.interval === constants6.YEAR) {
    obj = { subscriptionPlan, isGift: tmp, priceOptions: tmp2 };
    const tmp7 = getMonthlyPrice(obj);
    if (null != tmp7) {
      if (0 !== tmp8.amount) {
        const _Math = Math;
        return Math.floor(100 * (1 - getPrice(subscriptionPlan.id, false, tmp, tmp2).amount / (12 * tmp7.amount)));
      }
    }
  }
}
function calculateYearlyPlanDollarSavingsAmount(id, flag, priceOptions) {
  let obj = priceOptions;
  if (flag === undefined) {
    flag = false;
  }
  if (obj === undefined) {
    obj = {};
  }
  obj = { subscriptionPlan: id, isGift: flag };
  obj.priceOptions = obj;
  const tmp = calculateMonthlyPriceEquivalentTotal(obj);
  if (null != tmp) {
    if (tmp > 0) {
      const tmp5 = getPrice(id.id, false, flag, obj);
      const diff = tmp - tmp5.amount;
      let tmp7 = null;
      if (diff > 0) {
        obj = { amount: diff, currency: tmp5.currency };
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  return null;
}
function calculateYearlyPlanMonthsSaved(interval, flag, isGift) {
  let obj = isGift;
  if (flag === undefined) {
    flag = false;
  }
  if (obj === undefined) {
    obj = {};
  }
  if (interval.interval !== constants6.YEAR) {
    return null;
  } else {
    obj = { subscriptionPlan: interval, isGift: flag };
    obj.priceOptions = obj;
    const tmp2 = getMonthlyPrice(obj);
    if (null != tmp2) {
      if (0 !== tmp2.amount) {
        const tmp5 = calculateYearlyPlanDollarSavingsAmount(interval, flag, obj);
        if (null == tmp5) {
          return null;
        } else {
          const _Math = Math;
          const result = Math.floor(tmp5.amount / tmp2.amount * 2) / 2;
          let tmp8 = null;
          if (result > 0) {
            tmp8 = result;
          }
          return tmp8;
        }
      }
    }
    return null;
  }
}
function calculateYearlyPlanMonthlyRateAmount(interval) {
  let flag = arg1;
  let obj = arg2;
  if (arg1 === undefined) {
    flag = false;
  }
  if (obj === undefined) {
    obj = {};
  }
  if (interval.interval !== constants6.YEAR) {
    return null;
  } else {
    const tmp4 = getPrice(interval.id, false, flag, obj);
    let tmp5 = null;
    if (0 !== tmp4.amount) {
      obj = {};
      const _Math = Math;
      obj.amount = Math.round(tmp4.amount / 12);
      obj.currency = tmp4.currency;
      tmp5 = obj;
    }
    return tmp5;
  }
}
function getDaysSincePremium(arg0) {
  let num = 0;
  if (null != arg0) {
    const _Math = Math;
    const _Date = Date;
    const date = new Date();
    const _Date2 = Date;
    const date1 = new Date(arg0);
    num = Math.max(arg1(dependencyMap[20]).differenceInCalendarDays(date, date1), 0);
    const obj = arg1(dependencyMap[20]);
  }
  return num;
}
function getDaysRemainingUntilSubscriptionCurrentPeriodEnds(currentPeriodEnd) {
  const obj = arg1(dependencyMap[20]);
  const date = new Date(currentPeriodEnd.currentPeriodEnd);
  return Math.max(1, Math.ceil(obj.differenceInDays(date, new Date())));
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const isNoneSubscription = arg1(dependencyMap[2]).isNoneSubscription;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ InvoiceStatusTypes: closure_11, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: closure_13, SubscriptionStatusTypes: closure_14 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[9]);
({ DISCOUNTS: closure_15, ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: closure_16, DEFAULT_APPLE_GRACE_PERIOD_DAYS: closure_17, DEFAULT_GOOGLE_GRACE_PERIOD_DAYS: closure_18, DEFAULT_MAX_GRACE_PERIOD_DAYS: closure_19, DISCOUNT_DURATION_FALLBACK: closure_20, DISCOUNT_PERCENTAGE_FALLBACK: closure_21, DiscountUserUsageLimitIntervalTypes: closure_22, FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS: closure_23, FractionalPremiumIntervalTypes: closure_24, FractionalPremiumStates: closure_25, MAX_ACCOUNT_HOLD_DAYS: closure_26, MAX_PAYMENT_PROCESSING_TIME_DAYS: closure_27, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_28, PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS: closure_29, PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS: closure_30, PREMIUM_GUILD_SUBSCRIPTION_PLANS: closure_31, PREMIUM_PLANS: closure_32, PREMIUM_SKU_TO_MONTHLY_PLAN: closure_33, PREMIUM_TIER_2_PLANS: closure_34, PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID: closure_35, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: closure_36, PREMIUM_TYPE_DISPLAY_NAME: closure_37, PremiumSubscriptionSKUs: closure_38, PremiumTypes: closure_39, PremiumUserLimits: closure_40, SubscriptionIntervalTypes: closure_41, SubscriptionPlanInfo: closure_42, SubscriptionPlans } = tmp3);
({ TRIAL_FOR_EVERYONE_OFFER_EXPIRES_APPROACHING_THRESHOLD: closure_44, USER_PREMIUM_OFFER_EXPIRES_APPROACHING_4_DAY_THRESHOLD: closure_45, USER_PREMIUM_OFFER_EXPIRES_APPROACHING_7_DAY_THRESHOLD: closure_46 } = tmp3);
let closure_47 = arg1(dependencyMap[10]).getPremiumGroupProductName;
const tmp2 = arg1(dependencyMap[8]);
({ CurrencyCodes: closure_48, PaymentGatewayToFriendlyName: closure_49, PREPAID_PAYMENT_SOURCES: closure_50 } = arg1(dependencyMap[11]));
let closure_51 = {};
let closure_52 = { "Null": "cmn", "Null": "hak", "Null": "nan" };
let importDefaultResult = importDefault(dependencyMap[12]);
importDefaultResult = new importDefaultResult("PremiumUtils.tsx");
let obj = { BUNDLE: "bundle", TIER_0: "tier_0", TIER_1: "tier_1", TIER_2: "tier_2", PREMIUM_GUILD: "premium_guild" };
obj = { MID: "mid", HIGH: "high" };
const items = [, , , , , , , , , , , , ];
({ NONE_MONTH: arr[0], NONE_3_MONTH: arr[1], NONE_6_MONTH: arr[2], NONE_YEAR: arr[3], PREMIUM_MONTH_TIER_0: arr[4], PREMIUM_MONTH_TIER_1: arr[5], PREMIUM_MONTH_TIER_2: arr[6], PREMIUM_YEAR_TIER_0: arr[7], PREMIUM_YEAR_TIER_1: arr[8], PREMIUM_YEAR_TIER_2: arr[9], PREMIUM_3_MONTH_TIER_2: arr[10], PREMIUM_6_MONTH_TIER_2: arr[11], PREMIUM_GROUP_MONTH: arr[12] } = SubscriptionPlans);
const set = new Set(items);
obj = {
  isNewUser,
  isPremiumAtLeast: arg1(dependencyMap[15]).isPremiumAtLeast,
  isPremium: arg1(dependencyMap[15]).isPremium,
  isPremiumExactly: arg1(dependencyMap[15]).isPremiumExactly,
  isPremiumEligible,
  getPrice,
  getDefaultPrice,
  getInterval,
  getIntervalString,
  getIntervalStringAsNoun,
  getPremiumType,
  getTierDisplayNameByPlanId,
  getDisplayName,
  getPremiumPlanOptions,
  formatInterval,
  getPlanDescription,
  isPremiumSku(skuId) {
    let tmp = skuId === closure_38.TIER_0;
    if (!tmp) {
      tmp = skuId === closure_38.TIER_1;
    }
    if (!tmp) {
      tmp = skuId === closure_38.TIER_2;
    }
    return tmp;
  },
  getIntervalMonths(arg0, arg1) {
    if (arg0 === constants6.MONTH) {
      return arg1;
    } else if (arg0 === constants6.YEAR) {
      return 12 * arg1;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("" + arg0 + " interval subscription period not implemented");
      throw error;
    }
  },
  getUserMaxFileSize: arg1(dependencyMap[33]).getUserMaxFileSize,
  getSkuIdForPlan,
  getSkuIdForPremiumType(premiumType) {
    if (closure_39.TIER_0 === premiumType) {
      return closure_38.TIER_0;
    } else if (closure_39.TIER_1 === premiumType) {
      return closure_38.TIER_1;
    } else if (closure_39.TIER_2 === premiumType) {
      return closure_38.TIER_2;
    }
  },
  getNumIncludedPremiumGuildSubscriptionSlots(planId) {
    let num = 0;
    if (getPremiumType(planId) === closure_39.TIER_2) {
      num = closure_28;
    }
    return num;
  },
  getBillingInformationString,
  getExpectedRenewalDate,
  extendDateWithUnconsumedFractionalPremium,
  getUnactivatedFractionalPremiumDurationString,
  isSwitchingPlansDisabled,
  getSwitchingPlansDisabledMessage,
  isNoneSubscription,
  getPlanIdFromInvoice,
  getStatusFromInvoice,
  isBaseSubscriptionCanceled,
  getPremiumGuildIntervalPrice,
  hasAccountCredit(entitlements) {
    let someResult = null != entitlements;
    if (someResult) {
      someResult = 0 !== entitlements.size;
    }
    if (someResult) {
      const _Array = Array;
      someResult = Array.from(entitlements).some((subscriptionPlanId) => {
        let tmp = null != subscriptionPlanId.subscriptionPlanId;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !subscriptionPlanId.consumed;
        }
        return tmp;
      });
      const arr = Array.from(entitlements);
    }
    return someResult;
  },
  hasUnconsumedGiftForSubscriptionPlan(size) {
    let someResult = null != size;
    if (someResult) {
      someResult = 0 !== size.size;
    }
    if (someResult) {
      someResult = null != arg1;
    }
    if (someResult) {
      const _Array = Array;
      someResult = Array.from(size).some((subscriptionPlanId) => {
        subscriptionPlanId = subscriptionPlanId.subscriptionPlanId;
        let tmp = null != subscriptionPlanId;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !subscriptionPlanId.consumed;
        }
        if (tmp) {
          tmp = subscriptionPlanId === arg1;
        }
        return tmp;
      });
      const arr = Array.from(size);
    }
    return someResult;
  },
  getBillingReviewSubheader,
  getIntervalForInvoice,
  getPremiumPlanItem,
  getGuildBoostPlanItem,
  isBoostOnlySubscription,
  getPremiumSkuIdForSubscription,
  getPremiumTypeFromSubscription,
  getUnactivatedFractionalPremiumHours: getFractionalPremiumUnitsHours,
  castPremiumSubscriptionAsSkuId,
  calculateDiscountPercentageForYearlyPlan,
  calculateYearlyPlanDollarSavingsAmount,
  calculateYearlyPlanMonthsSaved,
  calculateYearlyPlanMonthlyRateAmount,
  getDaysSincePremium,
  getDaysRemainingUntilSubscriptionCurrentPeriodEnds,
  canUseAnimatedEmojis(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).ANIMATED_EMOJIS, currentUser);
  },
  canUseEmojisEverywhere(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).EMOJIS_EVERYWHERE, currentUser);
  },
  canUseSoundboardEverywhere(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).SOUNDBOARD_EVERYWHERE, currentUser);
  },
  canUseCustomCallSounds(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).CUSTOM_CALL_SOUNDS, currentUser);
  },
  canUploadLargeFiles(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).UPLOAD_LARGE_FILES, currentUser);
  },
  canUseBadges(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).PROFILE_BADGES, currentUser);
  },
  canUseHighVideoUploadQuality(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).INCREASED_VIDEO_UPLOAD_QUALITY, currentUser);
  },
  canEditDiscriminator(stateFromStores) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).CUSTOM_DISCRIMINATOR, stateFromStores);
  },
  hasBoostDiscount(stateFromStores) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).BOOST_DISCOUNT, stateFromStores);
  },
  canUseAnimatedAvatar(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).ANIMATED_AVATAR, currentUser);
  },
  canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).INSTALL_PREMIUM_APPLICATIONS, isPremiumWithFractionalPremiumOnly);
  },
  canUseIncreasedMessageLength(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).INCREASED_MESSAGE_LENGTH, currentUser);
  },
  canUseIncreasedGuildCap(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).INCREASED_GUILD_LIMIT, currentUser);
  },
  canRedeemPremiumPerks(isPremiumWithFractionalPremiumOnly) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).REDEEM_PREMIUM_PERKS, isPremiumWithFractionalPremiumOnly);
  },
  canUsePremiumProfileCustomization(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).PROFILE_PREMIUM_FEATURES, currentUser);
  },
  canUsePremiumAppIcons(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).APP_ICONS, currentUser);
  },
  canUsePremiumGuildMemberProfile(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).PREMIUM_GUILD_MEMBER_PROFILE, currentUser);
  },
  canUseClientThemes(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).CLIENT_THEMES, currentUser);
  },
  canStreamQuality(HIGH, user) {
    if (HIGH === obj.HIGH) {
      let canUserUseResult = user(dependencyMap[29]).canUserUse(user(dependencyMap[29]).STREAM_HIGH_QUALITY, user);
      const obj2 = user(dependencyMap[29]);
    } else {
      const obj = user(dependencyMap[29]);
      canUserUseResult = obj.canUserUse(user(dependencyMap[29]).STREAM_MID_QUALITY, user);
    }
    return canUserUseResult;
  },
  canUseQuestOrbMultiplier,
  hasFreeBoosts(stateFromStores) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).FREE_BOOSTS, stateFromStores);
  },
  canUseCustomStickersEverywhere(currentUser) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).STICKERS_EVERYWHERE, currentUser);
  },
  canUseCustomBackgrounds(id) {
    return arg1(dependencyMap[29]).canUserUse(arg1(dependencyMap[29]).VIDEO_FILTER_ASSETS, id);
  },
  canUseCollectibles,
  canUseMonthlyOrbs(perks) {
    const tmp = !arg1(dependencyMap[30]).getIsCrepeEnabled("canUseMonthlyOrbs");
    let hasPerkResult = !tmp;
    if (!tmp) {
      perks = undefined;
      if (null != perks) {
        perks = perks.perks;
      }
      hasPerkResult = arg1(dependencyMap[31]).hasPerk(perks, arg1(dependencyMap[32]).Perk.MONTHLY_ORBS);
      const obj2 = arg1(dependencyMap[31]);
    }
    return hasPerkResult;
  },
  canUseShopDiscounts(currentUser) {
    let isCrepeEnabled = arg1(dependencyMap[30]).getIsCrepeEnabled("canUseShopDiscounts");
    if (isCrepeEnabled) {
      let perks;
      if (null != currentUser) {
        perks = currentUser.perks;
      }
      isCrepeEnabled = arg1(dependencyMap[31]).hasPerk(perks, arg1(dependencyMap[32]).Perk.SHOP_DISCOUNTS);
      const obj2 = arg1(dependencyMap[31]);
    }
    if (!isCrepeEnabled) {
      isCrepeEnabled = canUseCollectibles(currentUser);
    }
    return isCrepeEnabled;
  },
  canUseMoreQuestOrbs(perks) {
    let isCrepeEnabled = arg1(dependencyMap[30]).getIsCrepeEnabled("canUseMoreQuestOrbs");
    if (isCrepeEnabled) {
      perks = undefined;
      if (null != perks) {
        perks = perks.perks;
      }
      isCrepeEnabled = arg1(dependencyMap[31]).hasPerk(perks, arg1(dependencyMap[32]).Perk.MORE_QUEST_ORBS);
      const obj2 = arg1(dependencyMap[31]);
    }
    if (!isCrepeEnabled) {
      isCrepeEnabled = canUseQuestOrbMultiplier(perks);
    }
    return isCrepeEnabled;
  },
  formatPriceString,
  StreamQuality: obj
};
const frozen = Object.freeze(obj);
const tmp4 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("utils/PremiumUtils.tsx");

export default frozen;
export const Branding = obj;
export const StreamQuality = obj;
export const getPremiumBranding = function getPremiumBranding(renewalMutations) {
  const planId = renewalMutations.planId;
  if (set2.has(planId)) {
    if (subscriptionHasPremiumGuildPlan(renewalMutations)) {
      let TIER_0 = obj.BUNDLE;
    }
    return TIER_0;
  }
  if (planId !== SubscriptionPlans.PREMIUM_MONTH_TIER_0) {
    if (planId !== SubscriptionPlans.PREMIUM_YEAR_TIER_0) {
      if (planId !== SubscriptionPlans.PREMIUM_MONTH_TIER_1) {
        if (planId !== SubscriptionPlans.PREMIUM_YEAR_TIER_1) {
          if (planId !== SubscriptionPlans.PREMIUM_MONTH_TIER_2) {
            if (planId !== SubscriptionPlans.PREMIUM_YEAR_TIER_2) {
              if (planId !== SubscriptionPlans.PREMIUM_3_MONTH_TIER_2) {
                if (planId !== SubscriptionPlans.PREMIUM_6_MONTH_TIER_2) {
                  TIER_0 = obj.PREMIUM_GUILD;
                }
              }
            }
          }
          TIER_0 = obj.TIER_2;
        }
      }
      TIER_0 = obj.TIER_1;
    }
  }
  TIER_0 = obj.TIER_0;
};
export { getPremiumPlanItem };
export { getDefaultPrice };
export { withContextPlanPrices };
export const usePlanSelectPriceState = function usePlanSelectPriceState(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [arg1];
  const memo = React.useMemo(() => {
    let available_plans = null;
    if (null != arg1) {
      available_plans = null;
      if (null != arg1.checkoutContext) {
        available_plans = null;
        if (null != arg1.checkoutContext.available_plans) {
          available_plans = arg1.checkoutContext.available_plans;
        }
      }
    }
    return available_plans;
  }, items);
  let closure_3 = memo;
  const items1 = [arg0, arg1, memo, arg2];
  return React.useMemo(() => {
    const obj = { priceOptions: callback(arg0, memo) };
    let tmp = null != arg0.currency;
    if (tmp) {
      tmp = null != arg1;
    }
    if (tmp) {
      tmp = arg1.currency !== arg0.currency;
    }
    if (tmp) {
      tmp = null == arg2;
    }
    obj.planPricesLoading = tmp;
    return obj;
  }, items1);
};
export { getPrice };
export const getCountryPrices = function getCountryPrices(planId, DEFAULT) {
  if (DEFAULT === undefined) {
    DEFAULT = closure_13.DEFAULT;
  }
  return getPurchaseTypePrices(planId, DEFAULT).countryPrices;
};
export { experimentalGetPrices };
export { experimentalGetPrice };
export { getServerPriceFromClientPrice };
export { getItemPlansTotalServerPrice };
export const getSubscriptionWithNewPlansTotalServerPrice = function getSubscriptionWithNewPlansTotalServerPrice(renewalMutations, items) {
  if (null === items) {
    importDefault(dependencyMap[16])(null !== renewalMutations, "Subscription can't be null");
    items = [];
  }
  if (null !== renewalMutations) {
    let tmp6 = getItemsFromNewAdditionalPlans(renewalMutations, items);
  } else {
    tmp6 = getItemsWithoutPremiumPlanItem(items);
  }
  return getItemPlansTotalServerPrice(tmp6, arg2, arg3);
};
export { getInterval };
export const getDiscountIntervalString = function getDiscountIntervalString(arg0) {
  if (constants4.MONTH === arg0) {
    const intl2 = arg1(dependencyMap[17]).intl;
    return intl2.string(arg1(dependencyMap[17]).t.FPybU7);
  } else if (constants4.YEAR === arg0) {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(arg1(dependencyMap[17]).t.tfqrhj);
  } else {
    if (constants4.DAY !== arg0) {
      const WEEK = constants4.WEEK;
    }
    const _Error = Error;
    const error = new Error("Unexpected interval");
    throw error;
  }
};
export { getIntervalString };
export { getIntervalStringAsNoun };
export { getPremiumType };
export { getDisplayName };
export const getDisplayNameFromSku = function getDisplayNameFromSku(sku_id1) {
  if (closure_38.TIER_0 === sku_id1) {
    const intl3 = arg1(dependencyMap[17]).intl;
    return intl3.string(arg1(dependencyMap[17]).t.t9uG/o);
  } else if (closure_38.TIER_1 === sku_id1) {
    const intl2 = arg1(dependencyMap[17]).intl;
    return intl2.string(arg1(dependencyMap[17]).t.FSOz78);
  } else if (closure_38.TIER_2 === sku_id1) {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(arg1(dependencyMap[17]).t.lG6a5x);
  } else {
    const _Error = Error;
    const error = new Error("Unsupported sku");
    let obj = arg1(dependencyMap[13]);
    obj = {};
    obj = { skuId: sku_id1 };
    obj.tags = obj;
    const result = obj.captureBillingException(error, obj);
    throw error;
  }
};
export { getTierDisplayNameByPlanId };
export const getPremiumTypeDisplayName = function getPremiumTypeDisplayName(TIER_0, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (closure_39.TIER_0 === TIER_0) {
    let str2 = "Basic";
    if (!flag) {
      const intl3 = arg1(dependencyMap[17]).intl;
      str2 = intl3.string(arg1(dependencyMap[17]).t.t9uG/o);
    }
    return str2;
  } else if (closure_39.TIER_1 === TIER_0) {
    let str = "Classic";
    if (!flag) {
      const intl2 = arg1(dependencyMap[17]).intl;
      str = intl2.string(arg1(dependencyMap[17]).t.FSOz78);
    }
    return str;
  } else if (closure_39.TIER_2 === TIER_0) {
    const intl = arg1(dependencyMap[17]).intl;
    return intl.string(arg1(dependencyMap[17]).t.lG6a5x);
  }
};
export const getPlanDescriptionFromInvoice = function getPlanDescriptionFromInvoice(hasDiscountApplied) {
  let activeDiscountInfo;
  let hasFractionalPremiumWithSub;
  let includePremiumGuilds;
  let planId;
  let renewalInvoicePreview;
  let renewalInvoiceWithEntitlementsPreview;
  let subscription;
  ({ renewalInvoicePreview, subscription, includePremiumGuilds } = hasDiscountApplied);
  ({ renewalInvoiceWithEntitlementsPreview, planId } = hasDiscountApplied);
  if (includePremiumGuilds === undefined) {
    includePremiumGuilds = false;
  }
  let flag = hasDiscountApplied.hasDiscountApplied;
  if (flag === undefined) {
    flag = false;
  }
  ({ hasFractionalPremiumWithSub, activeDiscountInfo } = hasDiscountApplied);
  if (hasFractionalPremiumWithSub === undefined) {
    hasFractionalPremiumWithSub = false;
  }
  const value = store.get(planId);
  importDefault(dependencyMap[16])(null != value, "Missing plan");
  const obj = { subscription, planId: value.id, price: getFormattedPlanPriceFromInvoice(renewalInvoicePreview, subscription, value), includePremiumGuilds, hasDiscountApplied: flag, activeDiscountInfo, renewalInvoiceWithoutEntitlementsPreview: renewalInvoicePreview, renewalInvoiceWithEntitlementsPreview, hasFractionalPremiumWithSub, fractionalPremiumInfo: hasDiscountApplied.fractionalPremiumInfo };
  return getPlanDescription(obj);
};
export const getExternalPlanDisplayName = function getExternalPlanDisplayName(renewalMutations) {
  let additionalPlans;
  let planId;
  ({ planId, additionalPlans } = renewalMutations);
  let tmp = null;
  if (!isNoneSubscription(planId)) {
    tmp = getDisplayName(planId);
  }
  let found;
  if (null != additionalPlans) {
    found = additionalPlans.find((planId) => set.has(planId.planId));
  }
  planId = undefined;
  if (null != found) {
    planId = found.planId;
  }
  if (planId === SubscriptionPlans.PREMIUM_MONTH_GUILD) {
    let Pi5yMJ = arg1(dependencyMap[17]).t.Pi5yMJ;
  } else {
    let planId1;
    if (null != found) {
      planId1 = found.planId;
    }
    Pi5yMJ = null;
  }
  if (null != Pi5yMJ) {
    const intl = arg1(dependencyMap[17]).intl;
    let obj = {};
    let quantity;
    if (null != found) {
      quantity = found.quantity;
    }
    obj.num = quantity;
    const formatToPlainStringResult = intl.formatToPlainString(Pi5yMJ, obj);
  }
  if (null != tmp) {
    if (null != formatToPlainStringResult) {
      const intl2 = arg1(dependencyMap[17]).intl;
      obj = { premiumDescription: tmp, premiumGuildDescription: formatToPlainStringResult };
      return intl2.formatToPlainString(arg1(dependencyMap[17]).t.FN5T9r, obj);
    }
  }
  if (null != tmp) {
    return tmp;
  } else if (null != formatToPlainStringResult) {
    return formatToPlainStringResult;
  } else {
    const _Error = Error;
    const error = new Error("Subscription without premium or premium guild subscription");
    throw error;
  }
};
export { getPremiumPlanOptions };
export const getPlanIdForPremiumType = function getPlanIdForPremiumType(first, first1) {
  const items = [constants6.MONTH, constants6.YEAR];
  if (set.has(first1)) {
    if (closure_39.TIER_0 === first) {
      if (first1 === constants6.MONTH) {
        let PREMIUM_YEAR_TIER_0 = SubscriptionPlans.PREMIUM_MONTH_TIER_0;
      } else {
        PREMIUM_YEAR_TIER_0 = SubscriptionPlans.PREMIUM_YEAR_TIER_0;
      }
      return PREMIUM_YEAR_TIER_0;
    } else if (closure_39.TIER_1 === first) {
      if (first1 === constants6.MONTH) {
        let PREMIUM_YEAR_TIER_1 = SubscriptionPlans.PREMIUM_MONTH_TIER_1;
      } else {
        PREMIUM_YEAR_TIER_1 = SubscriptionPlans.PREMIUM_YEAR_TIER_1;
      }
      return PREMIUM_YEAR_TIER_1;
    } else if (closure_39.TIER_2 === first) {
      if (first1 === constants6.MONTH) {
        let PREMIUM_YEAR_TIER_2 = SubscriptionPlans.PREMIUM_MONTH_TIER_2;
      } else {
        PREMIUM_YEAR_TIER_2 = SubscriptionPlans.PREMIUM_YEAR_TIER_2;
      }
      return PREMIUM_YEAR_TIER_2;
    } else {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error = new Error("Unsupported premium type: " + first);
      throw error;
    }
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Unsupported plan interval for premium type: " + first1);
    throw error1;
  }
  const set = new Set(items);
};
export { getNumPremiumGuildSubscriptions };
export { subscriptionHasPremiumGuildPlan };
export { isPremiumBaseSubscriptionPlan };
export { isPremiumGuildSubscriptionPlan };
export const isPremiumSubscriptionPlan = function isPremiumSubscriptionPlan(arg0) {
  let tmp = isPremiumBaseSubscriptionPlan(arg0);
  if (!tmp) {
    tmp = isPremiumGuildSubscriptionPlan(arg0);
  }
  return tmp;
};
export const isPremiumGroupSubscriptionPlan = function isPremiumGroupSubscriptionPlan(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 === SubscriptionPlans.PREMIUM_GROUP_MONTH;
  }
  return tmp;
};
export { getBillingGracePeriodDaysAndExpiresDate };
export { getExpectedRenewalDate };
export { getBillingInformationString };
export { extendDateWithUnconsumedFractionalPremium };
export { getUnactivatedFractionalPremiumDurationString };
export { isSwitchingPlansDisabled };
export { getSwitchingPlansDisabledMessage };
export { isSubscriptionPrepaidPaymentSource };
export { isPrepaidPaymentSource };
export { getCoercedPremiumGuildSubscriptionStatus };
export { isPremiumGuildSubscriptionCanceled };
export const getPremiumGuildHeaderDescription = function getPremiumGuildHeaderDescription(subscription) {
  let fractionalPremiumInfo;
  let price;
  let renewalInvoicePreview;
  let user;
  subscription = subscription.subscription;
  ({ user, price, renewalInvoicePreview, fractionalPremiumInfo } = subscription);
  const renewalMutations = subscription.renewalMutations;
  const value = store.get(subscription.planId);
  importDefault(dependencyMap[16])(null != value, "Missing plan");
  const tmp4 = getNumPremiumGuildSubscriptions(subscription.additionalPlans);
  let additionalPlans;
  if (null != renewalMutations) {
    additionalPlans = renewalMutations.additionalPlans;
  }
  let tmp6 = tmp4;
  if (null != additionalPlans) {
    tmp6 = getNumPremiumGuildSubscriptions(renewalMutations.additionalPlans);
  }
  const bound = Math.max(0, tmp4 - tmp6);
  let tmp10;
  if (!subscription.isPurchasedExternally) {
    tmp10 = price;
    if (null == price) {
      let amount = null;
      if (null != renewalInvoicePreview) {
        const invoiceItems = renewalInvoicePreview.invoiceItems;
        const found = invoiceItems.find((subscriptionPlanId) => set.has(subscriptionPlanId.subscriptionPlanId));
        if (null != found) {
          amount = found.amount;
        }
      }
      if (null == amount) {
        let tmp14 = tmp4;
        if (tmp9) {
          tmp14 = tmp6;
        }
        amount = getPremiumGuildIntervalPrice(tmp.planId, tmp.paymentSourceId, tmp.currency, user).amount * tmp14;
      }
      while (true) {
        let tmp19 = amount;
        let formatPriceResult;
        if (null == amount) {
          break;
        } else {
          let tmp21 = arg1;
          let tmp22 = dependencyMap;
          let num = 22;
          let obj = arg1(dependencyMap[22]);
          let tmp23 = amount;
          let tmp24 = subscription;
          formatPriceResult = obj.formatPrice(amount, tmp.currency);
          // break
        }
        tmp10 = formatPriceResult;
      }
    }
  }
  let str = "";
  if (null != tmp10) {
    let obj1 = arg1(dependencyMap[22]);
    str = obj1.formatRate(tmp10, value.interval, value.intervalCount);
  }
  let taxInclusive;
  if (null != renewalInvoicePreview) {
    taxInclusive = renewalInvoicePreview.taxInclusive;
  }
  if (null == taxInclusive) {
    const latestInvoice = tmp.latestInvoice;
    let taxInclusive1;
    if (null != latestInvoice) {
      taxInclusive1 = latestInvoice.taxInclusive;
    }
    taxInclusive = taxInclusive1;
  }
  if (isPremiumGuildSubscriptionCanceled(subscription)) {
    const intl8 = arg1(dependencyMap[17]).intl;
    const format3 = intl8.format;
    const t4 = arg1(dependencyMap[17]).t;
    if (tmp25) {
      obj = { quantity: tmp4 };
      let format3Result = format3(t4.3/WTrI, obj);
    } else if (tmp31) {
      obj = { quantity: tmp4, rate: str };
      format3Result = format3(t4.0ozBSB, obj);
    } else {
      obj1 = { quantity: tmp4, rate: str };
      format3Result = format3(t4.yjsv/s, obj1);
    }
    return format3Result;
  } else {
    const status = tmp.status;
    if (constants3.ACCOUNT_HOLD === status) {
      const intl7 = arg1(dependencyMap[17]).intl;
      const format2 = intl7.format;
      const t3 = arg1(dependencyMap[17]).t;
      if (tmp25) {
        const obj2 = { quantity: tmp4, boostQuantity: tmp4 };
        let format2Result = format2(t3.Nlf3nc, obj2);
      } else if (tmp31) {
        const obj3 = { quantity: tmp4, boostQuantity: tmp4, rate: str };
        format2Result = format2(t3.oiRy7v, obj3);
      } else {
        const obj4 = { quantity: tmp4, boostQuantity: tmp4, rate: str };
        format2Result = format2(t3.0QxOAi, obj4);
      }
      return format2Result;
    } else {
      if (constants3.PAUSE_PENDING !== status) {
        if (constants3.PAUSED !== status) {
          if (constants3.PAST_DUE === status) {
            if (tmp.isBoostOnly) {
              const intl4 = arg1(dependencyMap[17]).intl;
              const obj5 = {};
              let obj8 = arg1(dependencyMap[20]);
              obj5.endDate = obj8.dateFormat(getBillingGracePeriodDaysAndExpiresDate(subscription).expiresDate, "LL");
              obj5.onClick = function onClick() {
                callback(closure_2[21])("https://support.discord.com/hc/articles/23082866222871");
              };
              return intl4.format(arg1(dependencyMap[17]).t.d+0vwo, obj5);
            }
          }
          const tmp37 = arg1(dependencyMap[17]);
          if (tmp9) {
            if (tmp25) {
              const intl3 = tmp37.intl;
              const obj6 = { activeQuantity: tmp6, pendingQuantity: bound };
              return intl3.format(tmp35(tmp36[17]).t.krRy+d, obj6);
            } else {
              const t2 = tmp37.t;
              const intl2 = arg1(dependencyMap[17]).intl;
              const obj7 = { activeQuantity: tmp6, pendingQuantity: bound, rate: str };
              return intl2.format(tmp31 ? t2.4nc7+E : t2.BmaudS, obj7);
            }
          } else {
            const intl = tmp37.intl;
            const format = intl.format;
            const t = tmp35(tmp36[17]).t;
            if (tmp25) {
              obj8 = { quantity: tmp4 };
              let formatResult = format(t.5iud9s, obj8);
            } else if (tmp31) {
              const obj9 = { quantity: tmp4, rate: str };
              formatResult = format(t.eDwrLA, obj9);
            } else {
              const obj10 = { quantity: tmp4, rate: str };
              formatResult = format(t.ijSDcI, obj10);
            }
            return formatResult;
          }
        }
      }
      if (null != fractionalPremiumInfo) {
        if (!fractionalPremiumInfo.isFractionalPremiumActive) {
          const intl5 = arg1(dependencyMap[17]).intl;
          let stringResult = intl5.string(arg1(dependencyMap[17]).t.CduWAm);
        }
        return stringResult;
      }
      const intl6 = arg1(dependencyMap[17]).intl;
      const obj11 = { quantity: tmp4 };
      stringResult = intl6.format(arg1(dependencyMap[17]).t.5iud9s, obj11);
    }
  }
};
export { getFormattedPriceForPlan };
export const getFormattedRateForPlan = function getFormattedRateForPlan(interval) {
  const tmp = getFormattedPriceForPlan(interval, arg1, arg2);
  return arg1(dependencyMap[22]).formatRate(tmp, interval.interval, interval.intervalCount);
};
export { getPlanIdFromInvoice };
export { getStatusFromInvoice };
export { isBaseSubscriptionCanceled };
export { isSubscriptionStatusFailedPayment };
export { getFormattedPlanPriceFromInvoice };
export { getPremiumGuildIntervalPrice };
export { getBillingReviewSubheader };
export { getIntervalForInvoice };
export { getDefaultCurrency };
export const formatTrialOfferIntervalDuration = function formatTrialOfferIntervalDuration(intervalType) {
  let MONTH = intervalType.intervalType;
  if (MONTH === undefined) {
    MONTH = constants6.MONTH;
  }
  let num = intervalType.intervalCount;
  if (num === undefined) {
    num = 1;
  }
  let flag = intervalType.capitalize;
  if (flag === undefined) {
    flag = false;
  }
  if (constants6.DAY === MONTH) {
    let num4 = 7;
    if (num >= 7) {
      if (num % num4 === 0) {
        const intl4 = arg1(dependencyMap[17]).intl;
        const formatToPlainString4 = intl4.formatToPlainString;
        let t = arg1(dependencyMap[17]).t;
        if (flag) {
          t = {};
          num4 = num / num4;
          t.weeks = num4;
          let formatToPlainString4Result = formatToPlainString4(t.fRNBRX, t);
        } else {
          let obj = { weeks: num / num4 };
          formatToPlainString4Result = formatToPlainString4(t.EIpHEj, obj);
        }
      }
    }
    const intl3 = arg1(dependencyMap[17]).intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = arg1(dependencyMap[17]).t;
    if (flag) {
      obj = { days: num };
      let formatToPlainString3Result = formatToPlainString3(t3.6Cdzoy, obj);
    } else {
      const obj1 = { days: num };
      formatToPlainString3Result = formatToPlainString3(t3.kbBj/h, obj1);
    }
    return formatToPlainString3Result;
  } else if (constants6.MONTH === MONTH) {
    const intl2 = arg1(dependencyMap[17]).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = arg1(dependencyMap[17]).t;
    if (flag) {
      const obj2 = { months: num };
      let formatToPlainString2Result = formatToPlainString2(t2.x5MgxS, obj2);
    } else {
      const obj3 = { months: num };
      formatToPlainString2Result = formatToPlainString2(t2.4SEnCZ, obj3);
    }
    return formatToPlainString2Result;
  } else if (constants6.YEAR === MONTH) {
    const intl = arg1(dependencyMap[17]).intl;
    const formatToPlainString = intl.formatToPlainString;
    t = arg1(dependencyMap[17]).t;
    if (flag) {
      const obj4 = { years: num };
      let formatToPlainStringResult = formatToPlainString(t.h+63yl, obj4);
    } else {
      obj = { years: num };
      formatToPlainStringResult = formatToPlainString(t.9DFiHk, obj);
    }
    return formatToPlainStringResult;
  } else {
    const _Error = Error;
    const error = new Error("Unsupported interval duration.");
    throw error;
  }
};
export { formatTrialCtaIntervalDuration };
export const formatTrialCtaIntervalDurationFromTrialOffer = function formatTrialCtaIntervalDurationFromTrialOffer(subscription_trial) {
  if (null != subscription_trial) {
    if (null != subscription_trial.subscription_trial) {
      if (subscription_trial.subscription_trial.sku_id === arg1) {
        const obj = {};
        ({ interval: obj.intervalType, interval_count: obj.intervalCount } = subscription_trial.subscription_trial);
        return formatTrialCtaIntervalDuration(obj);
      }
    }
  }
  return null;
};
export const formatIntervalDuration = function formatIntervalDuration(intervalType) {
  let MONTH = intervalType.intervalType;
  if (MONTH === undefined) {
    MONTH = constants6.MONTH;
  }
  let num = intervalType.intervalCount;
  if (num === undefined) {
    num = 1;
  }
  let flag = intervalType.capitalize;
  if (flag === undefined) {
    flag = false;
  }
  if (constants6.DAY === MONTH) {
    let num4 = 7;
    if (num >= 7) {
      if (num % num4 === 0) {
        const intl4 = arg1(dependencyMap[17]).intl;
        const formatToPlainString4 = intl4.formatToPlainString;
        let t = arg1(dependencyMap[17]).t;
        if (flag) {
          t = {};
          num4 = num / num4;
          t.weeks = num4;
          let formatToPlainString4Result = formatToPlainString4(t.iVZYyl, t);
        } else {
          let obj = { weeks: num / num4 };
          formatToPlainString4Result = formatToPlainString4(t.EmoBD2, obj);
        }
      }
    }
    const intl3 = arg1(dependencyMap[17]).intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = arg1(dependencyMap[17]).t;
    if (flag) {
      obj = { days: num };
      let formatToPlainString3Result = formatToPlainString3(t3.jzH70Z, obj);
    } else {
      const obj1 = { days: num };
      formatToPlainString3Result = formatToPlainString3(t3.k2UNz+, obj1);
    }
    return formatToPlainString3Result;
  } else if (constants6.MONTH === MONTH) {
    const intl2 = arg1(dependencyMap[17]).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = arg1(dependencyMap[17]).t;
    if (flag) {
      const obj2 = { months: num };
      let formatToPlainString2Result = formatToPlainString2(t2.erUSmA, obj2);
    } else {
      const obj3 = { months: num };
      formatToPlainString2Result = formatToPlainString2(t2.kridzK, obj3);
    }
    return formatToPlainString2Result;
  } else if (constants6.YEAR === MONTH) {
    const intl = arg1(dependencyMap[17]).intl;
    const formatToPlainString = intl.formatToPlainString;
    t = arg1(dependencyMap[17]).t;
    if (flag) {
      const obj4 = { years: num };
      let formatToPlainStringResult = formatToPlainString(t.IfYQVC, obj4);
    } else {
      obj = { years: num };
      formatToPlainStringResult = formatToPlainString(t.PClsrw, obj);
    }
    return formatToPlainStringResult;
  } else {
    const _Error = Error;
    const error = new Error("Unsupported interval duration.");
    throw error;
  }
};
export { getExternalSubscriptionMethodUrl };
export const hasPremiumSubscriptionToDisplay = function hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription) {
  let isPremiumResult = premiumTypeSubscription(dependencyMap[15]).isPremium(currentUser);
  if (!isPremiumResult) {
    let status;
    if (null != premiumTypeSubscription) {
      status = premiumTypeSubscription.status;
    }
    isPremiumResult = isSubscriptionStatusFailedPayment(status);
    const tmp2 = isSubscriptionStatusFailedPayment;
  }
  return isPremiumResult;
};
export const useHasPremiumSubscriptionToDisplay = function useHasPremiumSubscriptionToDisplay() {
  const items = [closure_10];
  const stateFromStores = arg1(dependencyMap[26]).useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj = arg1(dependencyMap[26]);
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[26]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj2 = arg1(dependencyMap[26]);
  let isPremiumResult = arg1(dependencyMap[15]).isPremium(stateFromStores1);
  if (!isPremiumResult) {
    let status;
    if (null != stateFromStores) {
      status = stateFromStores.status;
    }
    isPremiumResult = isSubscriptionStatusFailedPayment(status);
    const tmp4 = isSubscriptionStatusFailedPayment;
  }
  return isPremiumResult;
};
export { getItemsFromNewAdditionalPlans };
export { getItemsWithoutPremiumPlanItem };
export { getItemsWithUpsertedPlanIdForGroup };
export const getItemsWithUpsertedPremiumPlanId = function getItemsWithUpsertedPremiumPlanId(renewalMutations, basePlanId) {
  return getItemsWithUpsertedPlanIdForGroup(renewalMutations, basePlanId, 1, closure_32);
};
export const getItemsWithUpsertedPremiumGuildPlan = function getItemsWithUpsertedPremiumGuildPlan(renewalMutations, quantity, planId) {
  return getItemsWithUpsertedPlanIdForGroup(renewalMutations, planId, quantity, closure_31);
};
export const coerceExistingItemsToNewItemInterval = function coerceExistingItemsToNewItemInterval(items) {
  let found = items.find((arg0) => !("id" in arg0));
  if (null == found) {
    found = items.find((planId) => set.has(planId.planId));
  }
  const arg1 = found;
  let mapped = items;
  if (null != found) {
    const value = store.get(found.planId);
    const importDefault = value;
    importDefault(dependencyMap[16])(null != value, "Missing plan");
    mapped = items.map((planId) => {
      if (planId === found) {
        return planId;
      } else {
        const value = store.get(planId.planId);
        value(closure_2[16])(null != value, "Missing plan");
        if (value.interval === value.interval) {
          if (value.intervalCount === value.intervalCount) {
            return planId;
          }
        }
        const forSkuAndInterval = store.getForSkuAndInterval(value.skuId, value.interval, value.intervalCount);
        value(closure_2[16])(null != forSkuAndInterval, "Missing planForInterval");
        const obj = {};
        const merged = Object.assign(planId);
        obj["planId"] = forSkuAndInterval.id;
        return obj;
      }
    });
  }
  return mapped;
};
export const getMaxFileSizeForPremiumType = function getMaxFileSizeForPremiumType(TIER_0, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    let obj = { useSpace: true };
    tmp = obj;
  }
  obj = { useKibibytes: true, useSpace: tmp.useSpace };
  return arg1(dependencyMap[28]).formatSize(closure_40[TIER_0].fileSize / 1024, obj);
};
export { getGuildBoostPlanItem };
export { isBoostOnlySubscription };
export { getPremiumSkuIdForSubscription };
export { getPremiumTypeFromSubscription };
export { isNewUser };
export { formatPriceString };
export { castPremiumSubscriptionAsSkuId };
export const getPremiumTypeFromPlanId = function getPremiumTypeFromPlanId(arg0) {
  if (SubscriptionPlans.PREMIUM_MONTH_TIER_0 === arg0) {
    let obj = { premiumType: closure_39.TIER_0, planInterval: constants6.MONTH };
    return obj;
  } else if (SubscriptionPlans.PREMIUM_YEAR_TIER_0 === arg0) {
    obj = { premiumType: closure_39.TIER_0, planInterval: constants6.YEAR };
    return obj;
  } else {
    if (SubscriptionPlans.PREMIUM_MONTH_TIER_2 !== arg0) {
      if (SubscriptionPlans.PREMIUM_GROUP_MONTH !== arg0) {
        if (SubscriptionPlans.PREMIUM_YEAR_TIER_2 === arg0) {
          obj = { premiumType: closure_39.TIER_2, planInterval: constants6.YEAR };
          return obj;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unsupported gifting planId: " + arg0);
          throw error;
        }
      }
    }
    const obj1 = { premiumType: closure_39.TIER_2, planInterval: constants6.MONTH };
    return obj1;
  }
};
export const isNitroLockedState = function isNitroLockedState(arg0) {
  return "isNitroLocked" in arg0;
};
export const isPremiumAtLeast = arg1(dependencyMap[15]).isPremiumAtLeast;
export const isPremiumAtMost = arg1(dependencyMap[15]).isPremiumAtMost;
export const isPremium = arg1(dependencyMap[15]).isPremium;
export const isPremiumExactly = arg1(dependencyMap[15]).isPremiumExactly;
export const useHasTier2Premium = function useHasTier2Premium() {
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[26]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = arg1(dependencyMap[26]);
  return arg1(dependencyMap[15]).isPremiumExactly(stateFromStores, closure_39.TIER_2);
};
export const getOfferNoticeThreshold = function getOfferNoticeThreshold(trial_id) {
  if (isTrialOffer(trial_id)) {
    trial_id = trial_id.trial_id;
    if (closure_35 === trial_id) {
      return closure_45;
    } else if (closure_36 === trial_id) {
      return closure_44;
    } else {
      return tmp;
    }
  } else {
    return tmp;
  }
};
export { isTrialOffer };
export { isDiscountOffer };
export { formatInterval };
export { isPremiumEligible };
export { getFractionalPremiumUnitsHours };
export { getFractionalPremiumUnitsHoursFromSkuIds };
export { getMonthlyPrice };
export const getSavingsPercent = function getSavingsPercent(subscriptionPlan) {
  subscriptionPlan = subscriptionPlan.subscriptionPlan;
  let tmp3 = closure_15[subscriptionPlan.planId];
  if (null != subscriptionPlan) {
    tmp3 = calculateDiscountPercentageForYearlyPlan(subscriptionPlan, tmp, tmp2);
  }
  return tmp3;
};
export { calculateMonthlyPriceEquivalentTotal };
export { calculateDiscountPercentageForYearlyPlan };
export { calculateYearlyPlanDollarSavingsAmount };
export { calculateYearlyPlanMonthsSaved };
export { calculateYearlyPlanMonthlyRateAmount };
export { getDaysSincePremium };
export { getDaysRemainingUntilSubscriptionCurrentPeriodEnds };
