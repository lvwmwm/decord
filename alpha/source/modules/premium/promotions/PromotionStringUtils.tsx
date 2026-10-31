// Module ID: 15310
// Function ID: 15311
// Name: PromotionStringUtils
// Dependencies: [2051, 1385, 504, 2047, 7413, 1113, 2061, 2]
// Exports: getHelpArticleLinkProps, useFormatStringWithCommonPremiumParams

// Module 15310 (PromotionStringUtils)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2047 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2051 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const PriceUtils = tmp(7413);
({ PremiumSubscriptionSKUs: closure_4, SubscriptionPlans: hasOwnProperty } = PremiumConstants);
const result = size.fileFinishedImporting("modules/premium/promotions/PromotionStringUtils.tsx");

export function useFormatStringWithCommonPremiumParams(body) {
  let TIER_2;
  let loadedForSKU;
  let str = "...";
  const items = [SubscriptionPlanStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => loadedForSKU.isLoadedForSKU(TIER_2.TIER_2));
  if (-1 !== body.indexOf("{price}")) {
    if (stateFromStores) {
      try {
        const obj2 = PremiumUtilsDefault;
        const defaultPrice = obj2.getDefaultPrice(hasOwnProperty.PREMIUM_MONTH_TIER_2);
        const tmpResult = PriceUtils;
        str = tmpResult.formatPrice(defaultPrice.amount, defaultPrice.currency);
      } catch (err) {
      }
    }
  }
  return body.replace(/\{price\}/g, str);
}
export function getHelpArticleLinkProps(helpArticle, helpArticleId) {
  let obj2;
  let id1;
  if (helpArticle != null) {
    id1 = helpArticle.id;
  }
  let id = helpArticleId;
  if (null != id1) {
    id = helpArticleId;
    if ("" !== helpArticle.id) {
      id = helpArticle.id;
    }
  }
  if ("" === id) {
    return null;
  } else {
    let linkText1;
    if (helpArticle != null) {
      linkText1 = helpArticle.linkText;
    }
    if (null != linkText1) {
      let linkText;
      if ("" !== helpArticle.linkText) {
        linkText = helpArticle.linkText;
      }
      const obj = { url: obj2.getArticleURL(id), linkText };
      obj2 = HelpdeskUtilsDefault;
      return obj;
    }
    const intl = intl2.intl;
    linkText = intl.string(intl2.t["sBp+u0"]);
  }
}
