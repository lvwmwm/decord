// Module ID: 6859
// Function ID: 6860
// Name: OrbCheckoutUtils
// Dependencies: [1071, 1073, 1112, 6860, 6351, 6862, 2]
// Exports: getOrbCheckoutDisclaimerMessage, getOrbConstraintMessage, getOrbPriceFromPrices, resolveOrbCheckoutErrorMessage

// Module 6859 (OrbCheckoutUtils)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1073 */;
import intl7 from "intl" /* 1112 */;
import BillingError from "BillingError" /* 6351 */;
import OrderConstraintUtils from "OrderConstraintUtils" /* 6860 */;
import OrderActionCreators from "OrderActionCreators" /* 6862 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ CurrencyCodes: c2, MarketingURLs: c3, PriceSetAssignmentPurchaseTypes: closure_4 } = Constants);
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutUtils.tsx");

export function getOrbPriceFromPrices(prices, isPremiumResult) {
  const tmp = isPremiumResult;
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
  const intl = intl7.intl;
  const format = intl.format;
  const obj = { buyButtonLabel: intl2.string(intl7.t["zLch/S"]), paidServiceTermURL: null, virtualGoodsURL: null };
  const v5qdUrO = intl7.t["5qdUrO"];
  intl2 = intl7.intl;
  ({ PAID_TERMS: obj.paidServiceTermURL, PAID_TERMS_VIRTUAL_GOODS: obj.virtualGoodsURL } = _false);
  const formatResult = format(v5qdUrO, obj);
  const intl3 = intl7.intl;
  let stringResult = intl3.string(intl7.t["Sxed/G"]);
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const intl5 = tmp(1112).intl;
    stringResult = intl5.string(tmp(1112).t.APcKRo);
  } else if (skuId === tmp6.FRACTIONAL_PREMIUM) {
    const intl4 = tmp(1112).intl;
    stringResult = intl4.string(tmp(1112).t.FhJ74j);
  }
  const items = [formatResult, " ", stringResult];
  return items;
}
export function getOrbConstraintMessage(result) {
  const getOrderConstraintMessage = OrderConstraintUtils.getOrderConstraintMessage;
  OrderConstraintUtils;
  const intl = intl7.intl;
  return getOrderConstraintMessage(result, intl.string(intl7.t.fqJZ11));
}
export function resolveOrbCheckoutErrorMessage(orbRedemptionError, result) {
  let tmp = null;
  if (null != orbRedemptionError) {
    let message;
    if (orbRedemptionError.code === BillingError.ErrorCodes.BILLING_PURCHASE_BLOCKED_BY_RESTRICTION) {
      message = orbRedemptionError.message;
    } else {
      if (orbRedemptionError instanceof OrderActionCreators.OrderSigningFailedWithConstraintsError) {
        if (null != result) {
          const getOrderConstraintMessage = OrderConstraintUtils.getOrderConstraintMessage;
          OrderConstraintUtils;
          const intl6 = tmp2(1112).intl;
          message = getOrderConstraintMessage(result, intl6.string(tmp2(1112).t.fqJZ11));
        }
      }
      if (orbRedemptionError instanceof OrderActionCreators.OrderProcessingPendingError) {
        const intl5 = tmp2(1112).intl;
        message = intl5.string(tmp2(1112).t["2BmwgV"]);
      } else if (orbRedemptionError.code === BillingError.ErrorCodes.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE) {
        const intl4 = tmp2(1112).intl;
        message = intl4.string(tmp2(1112).t.keFvXM);
      } else if (orbRedemptionError.code === BillingError.ErrorCodes.ALREADY_PURCHASED) {
        const intl3 = tmp2(1112).intl;
        message = intl3.string(tmp2(1112).t.m371Mx);
      } else if (orbRedemptionError.code === BillingError.ErrorCodes.BILLING_ORDER_NOT_SIGNABLE) {
        const intl2 = tmp2(1112).intl;
        message = intl2.string(tmp2(1112).t.ZHgEG7);
      } else {
        const intl = tmp2(1112).intl;
        message = intl.string(tmp2(1112).t.fqJZ11);
      }
    }
    tmp = message;
  }
  return tmp;
}
