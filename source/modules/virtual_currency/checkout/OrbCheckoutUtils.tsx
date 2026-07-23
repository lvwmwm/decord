// Module ID: 5625
// Function ID: 48005
// Name: getOrbPriceFromPrices
// Dependencies: [653, 655, 5626, 1212, 5627, 3798, 2]
// Exports: getOrbCheckoutDisclaimerMessage, getOrbPriceFromPrices, resolveOrbCheckoutErrorMessage

// Module 5625 (getOrbPriceFromPrices)
import ME from "ME";
import { EXTERNAL_PRODUCT_SKU_IDS } from "items";
import { ConstraintReasonCode } from "ConstraintReasonCode";

let closure_2;
let closure_3;
let closure_4;
({ CurrencyCodes: closure_2, MarketingURLs: closure_3, PriceSetAssignmentPurchaseTypes: closure_4 } = ME);
const result = require("ConstraintReasonCode").fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutUtils.tsx");

export const getOrbPriceFromPrices = function getOrbPriceFromPrices(prices, memo) {
  if (memo) {
    if (null != prices[closure_4.PREMIUM_TIER_2]) {
      let tmp3 = prices[closure_4.PREMIUM_TIER_2];
    }
    let substr;
    if (null != tmp3) {
      const countryPrices = tmp3.countryPrices;
      if (null != countryPrices) {
        prices = countryPrices.prices;
        if (null != prices) {
          substr = prices.slice(0, 2);
        }
      }
    }
    if (null == substr) {
      substr = [];
    }
    const found = substr.find((currency) => currency.currency === outer1_2.DISCORD_ORB);
    let tmp7 = null;
    if (null != found) {
      tmp7 = found;
    }
    return tmp7;
  }
  tmp3 = prices[closure_4.DEFAULT];
};
export const getOrbCheckoutDisclaimerMessage = function getOrbCheckoutDisclaimerMessage(skuId) {
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.buyButtonLabel = intl2.string(require(1212) /* getSystemLocale */.t["zLch/S"]);
  ({ PAID_TERMS: obj.paidServiceTermURL, PAID_TERMS_VIRTUAL_GOODS: obj.virtualGoodsURL } = closure_3);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  let stringResult = intl3.string(require(1212) /* getSystemLocale */.t["Sxed/G"]);
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl5.string(require(1212) /* getSystemLocale */.t.APcKRo);
  } else if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl4.string(require(1212) /* getSystemLocale */.t.FhJ74j);
  }
  const items = [intl.format(require(1212) /* getSystemLocale */.t["5qdUrO"], obj), " ", stringResult];
  return items;
};
export const resolveOrbCheckoutErrorMessage = function resolveOrbCheckoutErrorMessage(code) {
  if (null == code) {
    return null;
  } else {
    if (!(code instanceof require(5627) /* _callSuper */.OrderSigningFailedWithConstraintsError)) {
      if (code instanceof require(5627) /* _callSuper */.OrderProcessingPendingError) {
        const intl5 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl5.string(require(1212) /* getSystemLocale */.t["2BmwgV"]);
      } else if (code.code === require(3798) /* _isNativeReflectConstruct */.ErrorCodes.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE) {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        stringResult = intl4.string(require(1212) /* getSystemLocale */.t.keFvXM);
      } else if (code.code === require(3798) /* _isNativeReflectConstruct */.ErrorCodes.ALREADY_PURCHASED) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        stringResult = intl3.string(require(1212) /* getSystemLocale */.t.m371Mx);
      } else if (code.code === require(3798) /* _isNativeReflectConstruct */.ErrorCodes.BILLING_ORDER_NOT_SIGNABLE) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        stringResult = intl2.string(require(1212) /* getSystemLocale */.t.ZHgEG7);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t.fqJZ11);
      }
    }
    if (ConstraintReasonCode.INSUFFICIENT_ORB_BALANCE === arg1) {
      const intl9 = require(1212) /* getSystemLocale */.intl;
      let stringResult1 = intl9.string(require(1212) /* getSystemLocale */.t.keFvXM);
    } else {
      if (ConstraintReasonCode.SKU_ALREADY_OWNED === arg1) {
        const intl8 = require(1212) /* getSystemLocale */.intl;
        stringResult1 = intl8.string(require(1212) /* getSystemLocale */.t.m371Mx);
      } else if (ConstraintReasonCode.BUNDLE_PARTIALLY_OWNED !== arg1) {
        const intl6 = require(1212) /* getSystemLocale */.intl;
        stringResult1 = intl6.string(require(1212) /* getSystemLocale */.t.fqJZ11);
      }
      const intl7 = require(1212) /* getSystemLocale */.intl;
      stringResult1 = intl7.string(require(1212) /* getSystemLocale */.t.v9oC0p);
    }
  }
};
