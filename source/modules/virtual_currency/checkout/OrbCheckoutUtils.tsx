// Module ID: 5621
// Function ID: 47962
// Name: getOrbPriceFromPrices
// Dependencies: []
// Exports: getOrbCheckoutDisclaimerMessage, getOrbPriceFromPrices, resolveOrbCheckoutErrorMessage

// Module 5621 (getOrbPriceFromPrices)
const _module = require(dependencyMap[0]);
({ CurrencyCodes: closure_2, MarketingURLs: closure_3, PriceSetAssignmentPurchaseTypes: closure_4 } = _module);
const EXTERNAL_PRODUCT_SKU_IDS = require(dependencyMap[1]).EXTERNAL_PRODUCT_SKU_IDS;
const ConstraintReasonCode = require(dependencyMap[2]).ConstraintReasonCode;
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutUtils.tsx");

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
    const found = substr.find((currency) => currency.currency === constants.DISCORD_ORB);
    let tmp7 = null;
    if (null != found) {
      tmp7 = found;
    }
    return tmp7;
  }
  tmp3 = prices[closure_4.DEFAULT];
};
export const getOrbCheckoutDisclaimerMessage = function getOrbCheckoutDisclaimerMessage(skuId) {
  const intl = require(dependencyMap[3]).intl;
  const obj = {};
  const intl2 = require(dependencyMap[3]).intl;
  obj.buyButtonLabel = intl2.string(require(dependencyMap[3]).t.zLch/S);
  ({ PAID_TERMS: obj.paidServiceTermURL, PAID_TERMS_VIRTUAL_GOODS: obj.virtualGoodsURL } = closure_3);
  const intl3 = require(dependencyMap[3]).intl;
  let stringResult = intl3.string(require(dependencyMap[3]).t.Sxed/G);
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const intl5 = require(dependencyMap[3]).intl;
    stringResult = intl5.string(require(dependencyMap[3]).t.APcKRo);
  } else if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM) {
    const intl4 = require(dependencyMap[3]).intl;
    stringResult = intl4.string(require(dependencyMap[3]).t.FhJ74j);
  }
  const items = [intl.format(require(dependencyMap[3]).t.5qdUrO, obj), " ", stringResult];
  return items;
};
export const resolveOrbCheckoutErrorMessage = function resolveOrbCheckoutErrorMessage(code) {
  if (null == code) {
    return null;
  } else {
    if (!(code instanceof require(dependencyMap[4]).OrderSigningFailedWithConstraintsError)) {
      if (code instanceof require(dependencyMap[4]).OrderProcessingPendingError) {
        const intl5 = require(dependencyMap[3]).intl;
        let stringResult = intl5.string(require(dependencyMap[3]).t.2BmwgV);
      } else if (code.code === require(dependencyMap[5]).ErrorCodes.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE) {
        const intl4 = require(dependencyMap[3]).intl;
        stringResult = intl4.string(require(dependencyMap[3]).t.keFvXM);
      } else if (code.code === require(dependencyMap[5]).ErrorCodes.ALREADY_PURCHASED) {
        const intl3 = require(dependencyMap[3]).intl;
        stringResult = intl3.string(require(dependencyMap[3]).t.m371Mx);
      } else if (code.code === require(dependencyMap[5]).ErrorCodes.BILLING_ORDER_NOT_SIGNABLE) {
        const intl2 = require(dependencyMap[3]).intl;
        stringResult = intl2.string(require(dependencyMap[3]).t.ZHgEG7);
      } else {
        const intl = require(dependencyMap[3]).intl;
        stringResult = intl.string(require(dependencyMap[3]).t.fqJZ11);
      }
    }
    if (ConstraintReasonCode.INSUFFICIENT_ORB_BALANCE === arg1) {
      const intl9 = require(dependencyMap[3]).intl;
      let stringResult1 = intl9.string(require(dependencyMap[3]).t.keFvXM);
    } else {
      if (ConstraintReasonCode.SKU_ALREADY_OWNED === arg1) {
        const intl8 = require(dependencyMap[3]).intl;
        stringResult1 = intl8.string(require(dependencyMap[3]).t.m371Mx);
      } else if (ConstraintReasonCode.BUNDLE_PARTIALLY_OWNED !== arg1) {
        const intl6 = require(dependencyMap[3]).intl;
        stringResult1 = intl6.string(require(dependencyMap[3]).t.fqJZ11);
      }
      const intl7 = require(dependencyMap[3]).intl;
      stringResult1 = intl7.string(require(dependencyMap[3]).t.v9oC0p);
    }
  }
};
