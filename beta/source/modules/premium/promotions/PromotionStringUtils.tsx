// Module ID: 12969
// Function ID: 12970
// Name: PromotionStringUtils
// Dependencies: [4493, 1374, 504, 4488, 6655, 1115, 2111, 2]
// Exports: getHelpArticleLinkProps, useFormatStringWithCommonPremiumParams

// Module 12969 (PromotionStringUtils)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4493 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const PriceUtils = tmp(6655);
({ PremiumSubscriptionSKUs: closure_4, SubscriptionPlans: hasOwnProperty } = PremiumConstants);
const result = size.fileFinishedImporting("modules/premium/promotions/PromotionStringUtils.tsx");

export const useFormatStringWithCommonPremiumParams = function useFormatStringWithCommonPremiumParams(body) {
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
};
export const getHelpArticleLinkProps = function getHelpArticleLinkProps(helpArticle, helpArticleId) {
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
};
