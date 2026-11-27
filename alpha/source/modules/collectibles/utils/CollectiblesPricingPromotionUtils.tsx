// Module ID: 11251
// Function ID: 11252
// Name: CollectiblesPricingPromotionUtils
// Dependencies: [7594, 11127, 1387, 1071, 6322, 11252, 11254, 11253, 504, 2174, 2]
// Exports: getPricingPromotionForCollectiblesProduct, useCollectiblesPricingPromotionForProduct

// Module 11251 (CollectiblesPricingPromotionUtils)
import Constants from "Constants" /* 1071 */;
import SKUPricesStore from "SKUPricesStore" /* 7594 */;
import StorefrontPromotionStore from "StorefrontPromotionStore" /* 11127 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

let closure_6 = Constants.COLLECTIBLES_APPLICATION_ID;
const collectibles_pricing_promotion_eligibility = "collectibles_pricing_promotion_eligibility";
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPricingPromotionUtils.tsx");

export function getPricingPromotionForCollectiblesProduct(arg0) {
  let now;
  let pricingPromotionIds;
  let promotions;
  ({ product: require, hasShopDiscount: importDefault, storefrontPrices: dependencyMap, pricingPromotionIds } = arg0);
  ({ promotions, now } = arg0);
  if (now === undefined) {
    const _Date = Date;
    now = Date.now();
  }
  let tmp2 = null;
  if (null != pricingPromotionIds) {
    tmp2 = null;
    if (0 !== pricingPromotionIds.length) {
      tmp2 = null;
      if (null != promotions) {
        let found = promotions.find((id) => {
          let hasItem = pricingPromotionIds.includes(id.id);
          if (hasItem) {
            const obj = collectiblesStorefrontPricingIntegrationEnabled(dependencyMap[5]);
            hasItem = obj.isStorefrontPromotionActive(id, now);
          }
          if (hasItem) {
            const obj3 = { product, hasShopDiscount };
            const obj2 = collectiblesStorefrontPricingIntegrationEnabled(dependencyMap[4]);
            const productFiatPrice = obj2.getProductFiatPrice(obj3);
            const obj5 = { storefrontPrices, nonPromoPrice: productFiatPrice };
            const obj4 = collectiblesStorefrontPricingIntegrationEnabled(dependencyMap[5]);
            let tmp14 = null != obj4.getCollectiblesPromoPrice(obj5);
            const obj6 = collectiblesStorefrontPricingIntegrationEnabled(dependencyMap[6]);
            let isOrbsBackPromotionResult = obj6.isOrbsBackPromotion(id);
            if (isOrbsBackPromotionResult) {
              const obj7 = collectiblesStorefrontPricingIntegrationEnabled(dependencyMap[6]);
              isOrbsBackPromotionResult = obj7.isSequencedOfferRewardAvailable(id);
            }
            if (!tmp14) {
              tmp14 = isOrbsBackPromotionResult;
            }
            hasItem = tmp14;
          }
          return hasItem;
        });
        if (found == null) {
          found = null;
        }
        tmp2 = found;
      }
    }
  }
  return tmp2;
}
export function useCollectiblesPricingPromotionForProduct(skuId) {
  let closure_129_0;
  let closure_129_1;
  let closure_129_2;
  let collectiblesStorefrontPricingIntegrationEnabled;
  let currentUser;
  let now;
  let pricingPromotionIds;
  let promotions;
  let promotionsForApplication;
  let obj = collectiblesStorefrontPricingIntegrationEnabled(11253);
  collectiblesStorefrontPricingIntegrationEnabled = obj.useCollectiblesStorefrontPricingIntegrationEnabled(collectibles_pricing_promotion_eligibility);
  skuId = undefined;
  const tmp3 = collectibles_pricing_promotion_eligibility;
  if (skuId != null) {
    skuId = skuId.skuId;
  }
  const tmpResult = collectiblesStorefrontPricingIntegrationEnabled(11252);
  const collectiblesStorefrontPrices = tmpResult.useCollectiblesStorefrontPrices(skuId, tmp3);
  const items = [SKUPricesStore];
  const tmpResult4 = collectiblesStorefrontPricingIntegrationEnabled(504);
  const stateFromStores = tmpResult4.useStateFromStores(items, () => {
    let promotionIdsForSkuId;
    if (collectiblesStorefrontPricingIntegrationEnabled) {
      promotionIdsForSkuId = SKUPricesStore.getPromotionIdsForSkuId(skuId);
    }
    return promotionIdsForSkuId;
  });
  const items1 = [StorefrontPromotionStore];
  const tmpResult5 = collectiblesStorefrontPricingIntegrationEnabled(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(items1, () => promotionsForApplication.getPromotionsForApplication(closure_1_6));
  collectiblesStorefrontPricingIntegrationEnabled(504);
  [][0] = UserStore;
  let tmp11 = null;
  if (collectiblesStorefrontPricingIntegrationEnabled) {
    tmp11 = null;
    if (null != skuId) {
      let obj2 = { product: skuId, hasShopDiscount: tmp10, storefrontPrices: collectiblesStorefrontPrices, pricingPromotionIds: stateFromStores, promotions: stateFromStores1 };
      ({ product: closure_129_0, hasShopDiscount: closure_129_1, storefrontPrices: closure_129_2, pricingPromotionIds } = obj2);
      ({ promotions, now } = obj2);
      if (now === undefined) {
        const _Date = Date;
        now = Date.now();
      }
      let tmp13 = null;
      if (null != pricingPromotionIds) {
        tmp13 = null;
        if (0 !== pricingPromotionIds.length) {
          tmp13 = null;
          if (null != promotions) {
            let found = promotions.find((id) => {
              let hasItem = pricingPromotionIds.includes(id.id);
              if (hasItem) {
                const obj = collectiblesStorefrontPricingIntegrationEnabled(dependencyMap[5]);
                hasItem = obj.isStorefrontPromotionActive(id, now);
              }
              if (hasItem) {
                const obj3 = { product, hasShopDiscount };
                const obj2 = collectiblesStorefrontPricingIntegrationEnabled(dependencyMap[4]);
                const productFiatPrice = obj2.getProductFiatPrice(obj3);
                const obj5 = { storefrontPrices, nonPromoPrice: productFiatPrice };
                const obj4 = collectiblesStorefrontPricingIntegrationEnabled(dependencyMap[5]);
                let tmp14 = null != obj4.getCollectiblesPromoPrice(obj5);
                const obj6 = collectiblesStorefrontPricingIntegrationEnabled(dependencyMap[6]);
                let isOrbsBackPromotionResult = obj6.isOrbsBackPromotion(id);
                if (isOrbsBackPromotionResult) {
                  const obj7 = collectiblesStorefrontPricingIntegrationEnabled(dependencyMap[6]);
                  isOrbsBackPromotionResult = obj7.isSequencedOfferRewardAvailable(id);
                }
                if (!tmp14) {
                  tmp14 = isOrbsBackPromotionResult;
                }
                hasItem = tmp14;
              }
              return hasItem;
            });
            if (found == null) {
              found = null;
            }
            tmp13 = found;
          }
        }
      }
      tmp11 = tmp13;
    }
  }
  return tmp11;
}
