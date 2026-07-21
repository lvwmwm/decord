// Module ID: 12243
// Function ID: 93905
// Name: useFormatStringWithCommonPremiumParams
// Dependencies: []
// Exports: getHelpArticleLinkProps, useFormatStringWithCommonPremiumParams

// Module 12243 (useFormatStringWithCommonPremiumParams)
let closure_3 = importDefault(dependencyMap[0]);
({ PremiumSubscriptionSKUs: closure_4, SubscriptionPlans: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/promotions/PromotionStringUtils.tsx");

export const useFormatStringWithCommonPremiumParams = function useFormatStringWithCommonPremiumParams(body) {
  let str = "...";
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => loadedForSKU.isLoadedForSKU(TIER_2.TIER_2));
  if (-1 !== body.indexOf("{price}")) {
    if (stateFromStores) {
      const defaultPrice = importDefault(dependencyMap[3]).getDefaultPrice(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
      const obj2 = importDefault(dependencyMap[3]);
      str = arg1(dependencyMap[4]).formatPrice(defaultPrice.amount, defaultPrice.currency);
      const obj3 = arg1(dependencyMap[4]);
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
      const obj = { url: importDefault(dependencyMap[6]).getArticleURL(id), linkText };
      return obj;
    }
    const intl = helpArticleId(dependencyMap[5]).intl;
    linkText = intl.string(helpArticleId(dependencyMap[5]).t.sBp+u0);
  }
};
