// Module ID: 6802
// Function ID: 53715
// Name: CollectiblesPurchaseRecord
// Dependencies: [6, 7, 6777, 6778, 6776, 655, 653, 4171, 2]

// Module 6802 (CollectiblesPurchaseRecord)
import ME from "ME";
import getPricesFromServer from "getPricesFromServer";
import CollectiblesBundledProductRecord from "CollectiblesBundledProductRecord";
import { createCollectiblesItemsFromServerResponse as closure_5 } from "_createForOfIteratorHelperLoose";
import { CollectiblesVariantProductRecord as closure_6 } from "_callSuper";
import { REWARD_CATEGORY_AND_REWARD_SKU_IDS as closure_7 } from "items";
import { PREMIUM_TYPE_NONE } from "ME";

const tmp2 = (() => {
  class CollectiblesPurchaseRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CollectiblesPurchaseRecord);
      ({ skuId: this.skuId, name: this.name, type: this.type, premiumType: this.premiumType, items: this.items, categorySkuId: this.categorySkuId, isCategoryReward: this.isCategoryReward, prices: this.prices, bundledProducts: this.bundledProducts, googleSkuIds: this.googleSkuIds, variants: this.variants, eligibleOffers: this.eligibleOffers, baseVariantName: this.baseVariantName, baseVariantSkuId: this.baseVariantSkuId, variantLabel: this.variantLabel, variantValue: this.variantValue, purchasedAt: this.purchasedAt, purchaseType: this.purchaseType, expiresAt: this.expiresAt } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(sku_id) {
        let base_variant_name;
        let base_variant_sku_id;
        let bundled_products;
        let category_sku_id;
        let expires_at;
        let name;
        let premium_type;
        let prices;
        let purchase_type;
        let purchased_at;
        let type;
        let variant_label;
        let variant_value;
        let variants;
        sku_id = sku_id.sku_id;
        ({ premium_type, bundled_products, variants, purchased_at, expires_at } = sku_id);
        let obj = { type: 0, sku_id: 0, name: 0, premium_type: 0, category_sku_id: 0, prices: 0, bundled_products: 0, variants: 0, base_variant_name: 0, base_variant_sku_id: 0, variant_label: 0, variant_value: 0, purchased_at: 0, purchase_type: 0, expires_at: 0 };
        ({ type, name, category_sku_id, prices, base_variant_name, base_variant_sku_id, variant_label, variant_value, purchase_type } = sku_id);
        Object.setPrototypeOf(null);
        const merged = Object.assign(sku_id, obj);
        let tmp3 = sku_id;
        obj = { type, name, skuId: sku_id };
        let tmp4 = null;
        if (premium_type !== outer1_8) {
          tmp4 = premium_type;
        }
        obj.premiumType = tmp4;
        obj.categorySkuId = category_sku_id;
        obj.isCategoryReward = outer1_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === sku_id);
        obj.prices = CollectiblesPurchaseRecord(outer1_1[7])(prices);
        obj.items = outer1_5(merged.items);
        let mapped;
        if (null != bundled_products) {
          mapped = bundled_products.map(outer1_4.fromServer);
        }
        obj.bundledProducts = mapped;
        let mapped1;
        if (null != variants) {
          mapped1 = variants.map(outer1_6.fromServer);
        }
        obj.variants = mapped1;
        ({ google_sku_ids: obj2.googleSkuIds, eligible_offers: obj2.eligibleOffers } = merged);
        obj.baseVariantName = base_variant_name;
        obj.baseVariantSkuId = base_variant_sku_id;
        obj.variantLabel = variant_label;
        obj.variantValue = variant_value;
        obj.purchaseType = purchase_type;
        let date = purchased_at;
        if (null != purchased_at) {
          const _Date = Date;
          date = new Date(purchased_at);
        }
        obj.purchasedAt = date;
        let date1 = null;
        if (null != expires_at) {
          const _Date2 = Date;
          date1 = new Date(expires_at);
        }
        obj.expiresAt = date1;
        tmp3 = new tmp3(obj);
        return tmp3;
      }
    }
  ];
  return callback(CollectiblesPurchaseRecord, null, items);
})();
const result = require("CollectiblesBundledProductRecord").fileFinishedImporting("modules/collectibles/records/CollectiblesPurchaseRecord.tsx");

export default tmp2;
