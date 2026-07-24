// Module ID: 12389
// Function ID: 96336
// Name: useFormatStringWithCommonPremiumParams
// Dependencies: [3781, 1851, 566, 3776, 5616, 1212, 1920, 2]
// Exports: getHelpArticleLinkProps, useFormatStringWithCommonPremiumParams

// Module 12389 (useFormatStringWithCommonPremiumParams)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";

let closure_4;
let closure_5;
const require = arg1;
({ PremiumSubscriptionSKUs: closure_4, SubscriptionPlans: closure_5 } = GuildFeatures);
const result = require("initialize").fileFinishedImporting("modules/premium/promotions/PromotionStringUtils.tsx");

export const useFormatStringWithCommonPremiumParams = function useFormatStringWithCommonPremiumParams(body) {
  let str = "...";
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.isLoadedForSKU(outer1_4.TIER_2));
  if (-1 !== body.indexOf("{price}")) {
    if (stateFromStores) {
      const defaultPrice = importDefault(3776).getDefaultPrice(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
      const obj2 = importDefault(3776);
      str = require(5616) /* formatSingleCurrencyPrice */.formatPrice(defaultPrice.amount, defaultPrice.currency);
      const obj3 = require(5616) /* formatSingleCurrencyPrice */;
    }
  }
  const replaced = body.replace(/\{price\}/g, str);
};
export const getHelpArticleLinkProps = function getHelpArticleLinkProps(helpArticle, helpArticleId) {
  let id;
  if (null != helpArticle) {
    id = helpArticle.id;
  }
  id = helpArticleId;
  if (null != id) {
    id = helpArticleId;
    if ("" !== helpArticle.id) {
      id = helpArticle.id;
    }
  }
  if ("" === id) {
    return null;
  } else {
    let linkText;
    if (null != helpArticle) {
      linkText = helpArticle.linkText;
    }
    if (null != linkText) {
      if ("" !== helpArticle.linkText) {
        linkText = helpArticle.linkText;
      }
      const obj = { url: importDefault(1920).getArticleURL(id), linkText };
      return obj;
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    linkText = intl.string(require(1212) /* getSystemLocale */.t["sBp+u0"]);
  }
};
