// Module ID: 9378
// Function ID: 9379
// Name: CollectiblesPricingPromotionUtils
// Dependencies: [7187, 9348, 1385, 1072, 8430, 9379, 9380, 504, 2171, 2]
// Exports: useCollectiblesPricingPromotionForProduct

// Module 9378 (CollectiblesPricingPromotionUtils)
import Constants from "Constants" /* 1072 */;
import CollectiblesPromoPriceUtils from "CollectiblesPromoPriceUtils" /* 9379 */;
import SKUPricesStore from "SKUPricesStore" /* 7187 */;
import StorefrontPromotionStore from "StorefrontPromotionStore" /* 9348 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

function getPricingPromotionForCollectiblesProduct(pricingPromotionIds) {
  let hasShopDiscount;
  let now;
  let product;
  let promotions;
  let storefrontPrices;
  pricingPromotionIds = pricingPromotionIds.pricingPromotionIds;
  ({ promotions, now } = pricingPromotionIds);
  ({ product, hasShopDiscount, storefrontPrices } = pricingPromotionIds);
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
        let obj = pricingPromotionIds(8430);
        const obj2 = { product, hasShopDiscount };
        const productFiatPrice = obj.getProductFiatPrice(obj2);
        let tmp6 = null;
        const obj4 = { storefrontPrices, nonPromoPrice: productFiatPrice };
        const obj3 = pricingPromotionIds(9379);
        if (null != obj3.getCollectiblesPromoPrice(obj4)) {
          let found = promotions.find((id) => {
            let hasItem = pricingPromotionIds.includes(id.id);
            if (hasItem) {
              const obj = CollectiblesPromoPriceUtils;
              hasItem = obj.isStorefrontPromotionActive(id, now);
            }
            return hasItem;
          });
          if (found == null) {
            found = null;
          }
          tmp6 = found;
        }
        tmp2 = tmp6;
      }
    }
  }
  return tmp2;
}
let closure_6 = Constants.COLLECTIBLES_APPLICATION_ID;
const collectibles_pricing_promotion_eligibility = "collectibles_pricing_promotion_eligibility";
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPricingPromotionUtils.tsx");

export { getPricingPromotionForCollectiblesProduct };
export function useCollectiblesPricingPromotionForProduct(skuId) {
  let collectiblesStorefrontPricingIntegrationEnabled;
  let currentUser;
  let promotionsForApplication;
  let obj = collectiblesStorefrontPricingIntegrationEnabled(9380);
  collectiblesStorefrontPricingIntegrationEnabled = obj.useCollectiblesStorefrontPricingIntegrationEnabled(collectibles_pricing_promotion_eligibility);
  skuId = undefined;
  const tmp3 = collectibles_pricing_promotion_eligibility;
  if (skuId != null) {
    skuId = skuId.skuId;
  }
  const tmpResult = collectiblesStorefrontPricingIntegrationEnabled(9379);
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
      const obj2 = { product: skuId, hasShopDiscount: tmp10, storefrontPrices: collectiblesStorefrontPrices, pricingPromotionIds: stateFromStores, promotions: stateFromStores1 };
      tmp11 = getPricingPromotionForCollectiblesProduct(obj2);
    }
  }
  return tmp11;
}
