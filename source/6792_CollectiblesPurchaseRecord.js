// Module ID: 6792
// Function ID: 53603
// Name: CollectiblesPurchaseRecord
// Dependencies: []

// Module 6792 (CollectiblesPurchaseRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createCollectiblesItemsFromServerResponse;
let closure_6 = arg1(dependencyMap[4]).CollectiblesVariantProductRecord;
let closure_7 = arg1(dependencyMap[5]).REWARD_CATEGORY_AND_REWARD_SKU_IDS;
const PREMIUM_TYPE_NONE = arg1(dependencyMap[6]).PREMIUM_TYPE_NONE;
const tmp2 = () => {
  class CollectiblesPurchaseRecord {
    constructor(arg0) {
      tmp = closure_2(this, CollectiblesPurchaseRecord);
      ({ skuId: this.skuId, name: this.name, type: this.type, premiumType: this.premiumType, items: this.items, categorySkuId: this.categorySkuId, isCategoryReward: this.isCategoryReward, prices: this.prices, bundledProducts: this.bundledProducts, googleSkuIds: this.googleSkuIds, variants: this.variants, eligibleOffers: this.eligibleOffers, baseVariantName: this.baseVariantName, baseVariantSkuId: this.baseVariantSkuId, variantLabel: this.variantLabel, variantValue: this.variantValue, purchasedAt: this.purchasedAt, purchaseType: this.purchaseType, expiresAt: this.expiresAt } = arg0);
      return;
    }
  }
  const importDefault = CollectiblesPurchaseRecord;
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
        const CollectiblesPurchaseRecord = sku_id;
        ({ premium_type, bundled_products, variants, purchased_at, expires_at } = sku_id);
        let obj = { createViewConfig: "JPEGInterchangeFormatLength", _mergeFormats: "isArrayBuffer", has_advertising_id: "MOBILE_BOTTOM_SHEET", clearAllTrackedExposures: "ON", bogoRewardEnabled: "GameDepthTier9LargeBadge", extractExceptionKeysForMessage: "RangeError", data: "%MapIteratorPrototype%", mfa_enabled: "isArray", gradientWrapper: "MUR", getVisibleGuildIds: "absolute", channelTypes: "[object Function]", pt-CV: "%Float64ArrayPrototype%", tig: "setUploadedFilename", messageUnreadCount: null, minus: null };
        ({ type, name, category_sku_id, prices, base_variant_name, base_variant_sku_id, variant_label, variant_value, purchase_type } = sku_id);
        Object.setPrototypeOf(null);
        const merged = Object.assign(sku_id, obj);
        let tmp3 = CollectiblesPurchaseRecord;
        obj = { type, name, skuId: sku_id };
        let tmp4 = null;
        if (premium_type !== closure_8) {
          tmp4 = premium_type;
        }
        obj.premiumType = tmp4;
        obj.categorySkuId = category_sku_id;
        obj.isCategoryReward = closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === sku_id);
        obj.prices = CollectiblesPurchaseRecord(closure_1[7])(prices);
        obj.items = callback2(merged.items);
        let mapped;
        if (null != bundled_products) {
          mapped = bundled_products.map(fromServer.fromServer);
        }
        obj.bundledProducts = mapped;
        let mapped1;
        if (null != variants) {
          mapped1 = variants.map(fromServer2.fromServer);
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
}();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/records/CollectiblesPurchaseRecord.tsx");

export default tmp2;
