// Module ID: 7416
// Function ID: 7417
// Name: OrbCheckoutUtils
// Dependencies: [1072, 1074, 7417, 1113, 7418, 4834, 2]
// Exports: getOrbCheckoutDisclaimerMessage, getOrbPriceFromPrices, resolveOrbCheckoutErrorMessage

// Module 7416 (OrbCheckoutUtils)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl10 from "intl" /* 1113 */;
import BillingError from "BillingError" /* 4834 */;
import OrderConstants from "OrderConstants" /* 7417 */;
import OrderActionCreators from "OrderActionCreators" /* 7418 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ CurrencyCodes: c2, MarketingURLs: c3, PriceSetAssignmentPurchaseTypes: closure_4 } = Constants);
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
const ConstraintReasonCode = OrderConstants.ConstraintReasonCode;
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutUtils.tsx");

export function getOrbPriceFromPrices(prices, memo1) {
  const tmp = memo1;
  if (tmp) {
    let tmp3;
    if (null != prices[React3.PREMIUM_TIER_2]) {
      tmp3 = prices[React3.PREMIUM_TIER_2];
    }
    prices = undefined;
    if (tmp3 != null) {
      const countryPrices = tmp3.countryPrices;
      if (countryPrices != null) {
        prices = countryPrices.prices;
      }
    }
    if (prices == null) {
      prices = [];
    }
    let found = prices.find((currency) => currency.currency === constants.DISCORD_ORB);
    if (found == null) {
      found = null;
    }
    return found;
  }
  tmp3 = prices[React3.DEFAULT];
}
export function getOrbCheckoutDisclaimerMessage(skuId) {
  let intl2;
  const intl = intl10.intl;
  const format = intl.format;
  const obj = { buyButtonLabel: intl2.string(intl10.t["zLch/S"]), paidServiceTermURL: null, virtualGoodsURL: null };
  const v5qdUrO = intl10.t["5qdUrO"];
  intl2 = intl10.intl;
  ({ PAID_TERMS: obj.paidServiceTermURL, PAID_TERMS_VIRTUAL_GOODS: obj.virtualGoodsURL } = _false);
  const formatResult = format(v5qdUrO, obj);
  const intl3 = intl10.intl;
  let stringResult = intl3.string(intl10.t["Sxed/G"]);
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const intl5 = tmp(1113).intl;
    stringResult = intl5.string(tmp(1113).t.APcKRo);
  } else if (skuId === tmp6.FRACTIONAL_PREMIUM) {
    const intl4 = tmp(1113).intl;
    stringResult = intl4.string(tmp(1113).t.FhJ74j);
  }
  const items = [formatResult, " ", stringResult];
  return items;
}
export function resolveOrbCheckoutErrorMessage(code, arg1) {
  let tmp = null;
  if (null != code) {
    let stringResult1;
    if (code instanceof OrderActionCreators.OrderSigningFailedWithConstraintsError) {
      if (null != arg1) {
        let stringResult;
        if (ConstraintReasonCode.INSUFFICIENT_ORB_BALANCE === arg1) {
          const intl9 = tmp2(1113).intl;
          stringResult = intl9.string(tmp2(1113).t.keFvXM);
        } else if (ConstraintReasonCode.SKU_ALREADY_OWNED === arg1) {
          const intl8 = tmp2(1113).intl;
          stringResult = intl8.string(tmp2(1113).t.m371Mx);
        } else if (ConstraintReasonCode.BUNDLE_PARTIALLY_OWNED === arg1) {
          const intl7 = tmp2(1113).intl;
          stringResult = intl7.string(tmp2(1113).t.v9oC0p);
        } else {
          const intl6 = tmp2(1113).intl;
          stringResult = intl6.string(tmp2(1113).t.fqJZ11);
        }
        stringResult1 = stringResult;
      }
      tmp = stringResult1;
    }
    if (code instanceof OrderActionCreators.OrderProcessingPendingError) {
      const intl5 = tmp2(1113).intl;
      stringResult1 = intl5.string(tmp2(1113).t["2BmwgV"]);
    } else if (code.code === BillingError.ErrorCodes.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE) {
      const intl4 = tmp2(1113).intl;
      stringResult1 = intl4.string(tmp2(1113).t.keFvXM);
    } else if (code.code === BillingError.ErrorCodes.ALREADY_PURCHASED) {
      const intl3 = tmp2(1113).intl;
      stringResult1 = intl3.string(tmp2(1113).t.m371Mx);
    } else if (code.code === BillingError.ErrorCodes.BILLING_ORDER_NOT_SIGNABLE) {
      const intl2 = tmp2(1113).intl;
      stringResult1 = intl2.string(tmp2(1113).t.ZHgEG7);
    } else {
      const intl = tmp2(1113).intl;
      stringResult1 = intl.string(tmp2(1113).t.fqJZ11);
    }
  }
  return tmp;
}
