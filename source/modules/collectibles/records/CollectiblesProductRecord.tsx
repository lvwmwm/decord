// Module ID: 6771
// Function ID: 53300
// Name: _callSuper
// Dependencies: []

// Module 6771 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_6(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  arg1 = arg2;
  let prototype = arg0;
  if (0) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_8(closure_7(prototype), "fromServer", arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ createCollectiblesItemsFromServerResponse: closure_11, transformSKUToCollectiblesItem: closure_12 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
let closure_13 = arg1(dependencyMap[10]).REWARD_CATEGORY_AND_REWARD_SKU_IDS;
const importDefaultResult = importDefault(dependencyMap[9]);
({ PREMIUM_TYPE_NONE: closure_14, PriceSetAssignmentPurchaseTypes: closure_15 } = arg1(dependencyMap[11]));
const tmp5 = (importDefaultResult) => {
  class CollectiblesProductRecord {
    constructor(arg0) {
      tmp = closure_4(this, CollectiblesProductRecord);
      items = [];
      items[0] = importDefaultResult;
      tmp2 = closure_17(this, CollectiblesProductRecord, items);
      ({ summary: tmp2.summary, type: tmp2.type, premiumType: tmp2.premiumType, items: tmp2.items, categorySkuId: tmp2.categorySkuId, isCategoryReward: tmp2.isCategoryReward, prices: tmp2.prices, bundledProducts: tmp2.bundledProducts, previewAssets: tmp2.previewAssets, googleSkuIds: tmp2.googleSkuIds, variants: tmp2.variants, eligibleOffers: tmp2.eligibleOffers, badgeOverride: tmp2.badgeOverride, hideBadge: tmp2.hideBadge } = importDefaultResult);
      return tmp2;
    }
  }
  const arg1 = CollectiblesProductRecord;
  callback3(CollectiblesProductRecord, importDefaultResult);
  let obj = {
    key: "fromServer",
    value(arg0) {
      let badge_override;
      let bundled_products;
      let category_sku_id;
      let hide_badge;
      let premium_type;
      let preview_assets;
      let prices;
      let type;
      let variants;
      ({ premium_type, bundled_products, preview_assets, variants } = arg0);
      let obj = { <string:3735083697>: true, <string:1891261412>: 6, <string:458817142>: 132, <string:3668263302>: null, <string:4255978754>: "\u{1F9D1}\u200D\u{1F680}", <string:2460818162>: true, <string:2502324925>: 12.1, <string:2984226749>: 133, <string:4075993261>: null };
      ({ type, category_sku_id, prices, badge_override, hide_badge } = arg0);
      Object.setPrototypeOf(null);
      const merged = Object.assign(arg0, obj);
      const CollectiblesProductRecord = merged;
      let tmp3 = CollectiblesProductRecord;
      obj = {};
      const items = [merged];
      const merged1 = Object.assign(callback6(CollectiblesProductRecord, "fromServer", this, 2)(items));
      obj["type"] = type;
      let tmp5 = null;
      if (premium_type !== closure_14) {
        tmp5 = premium_type;
      }
      obj["premiumType"] = tmp5;
      obj["categorySkuId"] = category_sku_id;
      obj["isCategoryReward"] = closure_13.some((rewardSkuId) => rewardSkuId.rewardSkuId === merged.sku_id);
      obj["prices"] = callback(closure_2[12])(prices);
      obj["items"] = callback3(merged.items);
      let mapped;
      if (null != bundled_products) {
        mapped = bundled_products.map(fromServer.fromServer);
      }
      obj["bundledProducts"] = mapped;
      let tmp8;
      if (null != preview_assets) {
        obj = {};
        ({ fg_static: obj3.fgStatic, fg_animated: obj3.fgAnimated, bg_static: obj3.bgStatic, bg_animated: obj3.bgAnimated } = preview_assets);
        tmp8 = obj;
      }
      obj["previewAssets"] = tmp8;
      let mapped1;
      if (null != variants) {
        mapped1 = variants.map(fromServer2.fromServer);
      }
      obj["variants"] = mapped1;
      obj["googleSkuIds"] = merged.google_sku_ids;
      obj["eligibleOffers"] = merged.eligible_offers;
      obj["badgeOverride"] = badge_override;
      obj["hideBadge"] = hide_badge;
      tmp3 = new tmp3(obj);
      return tmp3;
    }
  };
  const items = [obj, ];
  obj = {
    key: "fromStorefrontProductRecord",
    value(skus) {
      let previewAssetPaths;
      const CollectiblesProductRecord = skus;
      const first = skus.skus[0];
      if (null != first) {
        const tenantMetadata = first.tenantMetadata;
        let collectibles;
        if (null != tenantMetadata) {
          collectibles = tenantMetadata.collectibles;
        }
        if (null != collectibles) {
          if (skus.skus.length > 1) {
            let type = CollectiblesProductRecord(closure_2[13]).CollectiblesItemType.VARIANTS_GROUP;
          } else {
            type = collectibles.type;
          }
          let obj = callback4(first);
          if (null == obj) {
            obj = {};
          }
          let items = obj.items;
          let tmp6 = CollectiblesProductRecord;
          obj = {};
          ({ id: obj2.storeListingId, id: obj2.skuId } = first);
          ({ name: obj2.name, summary: obj2.summary, primaryCollectionStyles: obj2.styles } = skus);
          obj.type = type;
          let premiumType = null;
          if (collectibles.premiumType !== closure_14) {
            premiumType = collectibles.premiumType;
          }
          obj.premiumType = premiumType;
          if (null == items) {
            items = [obj.item];
            items = items.filter((arg0) => null != arg0);
          }
          obj.items = items;
          let categorySkuId = skus.primaryCollectionId;
          if (null == categorySkuId) {
            categorySkuId = collectibles.categorySkuId;
          }
          let str2 = "";
          if (null != categorySkuId) {
            str2 = categorySkuId;
          }
          obj.categorySkuId = str2;
          obj.isCategoryReward = closure_13.some((rewardSkuId) => rewardSkuId.rewardSkuId === first.id);
          ({ prices: obj2.prices, previewAssetPaths } = first);
          let tmp10;
          if (null != previewAssetPaths) {
            tmp10 = previewAssetPaths;
          }
          obj.previewAssets = tmp10;
          let found;
          if (type === CollectiblesProductRecord(closure_2[13]).CollectiblesItemType.VARIANTS_GROUP) {
            skus = skus.skus;
            const mapped = skus.map((tenantMetadata) => {
              let previewAssetPaths;
              tenantMetadata = tenantMetadata.tenantMetadata;
              let collectibles;
              if (null != tenantMetadata) {
                collectibles = tenantMetadata.collectibles;
              }
              if (null == collectibles) {
                return null;
              } else {
                let obj = callback2(tenantMetadata);
                if (null == obj) {
                  obj = {};
                }
                let items = obj.items;
                const first = callback(tenantMetadata.selectedOptions, 1)[0];
                let tmp4 = closure_16;
                obj = { baseVariantName: tenantMetadata.name, baseVariantSkuId: first.id };
                let optionValue;
                if (null != first) {
                  optionValue = first.optionValue;
                }
                let str2 = "";
                if (null != optionValue) {
                  str2 = optionValue;
                }
                obj.variantLabel = str2;
                const optionSelectorDisplayValue = collectibles.optionSelectorDisplayValue;
                let str3 = "";
                if (null != optionSelectorDisplayValue) {
                  str3 = optionSelectorDisplayValue;
                }
                obj.variantValue = str3;
                ({ id: obj2.storeListingId, id: obj2.skuId, name: obj2.name, summary: obj2.summary } = tenantMetadata);
                obj.styles = undefined;
                obj.type = collectibles.type;
                let premiumType = null;
                if (collectibles.premiumType !== closure_14) {
                  premiumType = collectibles.premiumType;
                }
                obj.premiumType = premiumType;
                if (null == items) {
                  items = [obj.item];
                  items = items.filter((arg0) => null != arg0);
                }
                obj.items = items;
                let categorySkuId = tenantMetadata.primaryCollectionId;
                if (null == categorySkuId) {
                  categorySkuId = collectibles.categorySkuId;
                }
                let str4 = "";
                if (null != categorySkuId) {
                  str4 = categorySkuId;
                }
                obj.categorySkuId = str4;
                obj.isCategoryReward = closure_13.some((rewardSkuId) => rewardSkuId.rewardSkuId === rewardSkuId.id);
                ({ prices: obj2.prices, previewAssetPaths } = tenantMetadata);
                let tmp12;
                if (null != previewAssetPaths) {
                  tmp12 = previewAssetPaths;
                }
                obj.previewAssets = tmp12;
                let googleSkuIds = tenantMetadata.googleSkuIds;
                if (null == googleSkuIds) {
                  obj = {};
                  obj[closure_15.MOBILE] = "";
                  obj[closure_15.MOBILE_PREMIUM_TIER_2] = "";
                  googleSkuIds = obj;
                }
                obj.googleSkuIds = googleSkuIds;
                obj.eligibleOffers = undefined;
                obj.variants = undefined;
                obj.bundledProducts = undefined;
                const prototype = tmp4.prototype;
                tmp4 = new tmp4(obj);
                return tmp4;
              }
            });
            found = mapped.filter((arg0) => null != arg0);
          }
          obj.variants = found;
          let googleSkuIds = first.googleSkuIds;
          if (null == googleSkuIds) {
            obj = {};
            obj[closure_15.MOBILE] = "";
            obj[closure_15.MOBILE_PREMIUM_TIER_2] = "";
            googleSkuIds = obj;
          }
          obj.googleSkuIds = googleSkuIds;
          obj.eligibleOffers = undefined;
          const bundledSkus = first.bundledSkus;
          let found1;
          if (null != bundledSkus) {
            const mapped1 = bundledSkus.map((tenantMetadata) => {
              tenantMetadata = tenantMetadata.tenantMetadata;
              let collectibles;
              if (null != tenantMetadata) {
                collectibles = tenantMetadata.collectibles;
              }
              let tmp3 = null;
              if (null != collectibles) {
                tmp3 = closure_10;
                const obj = { type: collectibles.type };
                let premiumType = null;
                if (collectibles.premiumType !== closure_14) {
                  premiumType = collectibles.premiumType;
                }
                obj.premiumType = premiumType;
                ({ name: obj.name, id: obj.skuId, summary: obj.summary, prices: obj.prices } = tenantMetadata);
                const prototype = tmp3.prototype;
                tmp3 = new tmp3(obj);
              }
              return tmp3;
            });
            found1 = mapped1.filter((arg0) => null != arg0);
          }
          obj.bundledProducts = found1;
          const prototype = tmp6.prototype;
          tmp6 = new tmp6(obj);
          return tmp6;
        }
      }
    }
  };
  items[1] = obj;
  return callback(CollectiblesProductRecord, null, items);
}(importDefaultResult);
const tmp6 = (arg0) => {
  class CollectiblesVariantProductRecord {
    constructor(arg0) {
      tmp = closure_4(this, CollectiblesVariantProductRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_17(this, CollectiblesVariantProductRecord, items);
      ({ baseVariantName: tmp2.baseVariantName, baseVariantSkuId: tmp2.baseVariantSkuId, variantLabel: tmp2.variantLabel, variantValue: tmp2.variantValue } = arg0);
      return tmp2;
    }
  }
  const arg1 = CollectiblesVariantProductRecord;
  callback3(CollectiblesVariantProductRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        let base_variant_name;
        let base_variant_sku_id;
        let variant_label;
        let variant_value;
        let obj = { "Bool(true)": null, "Bool(true)": 4, "Bool(true)": 4, "Bool(true)": "rgba(0, 0, 0, 0.75)" };
        ({ base_variant_name, base_variant_sku_id, variant_label, variant_value } = arg0);
        Object.setPrototypeOf(null);
        obj = {};
        const merged = Object.assign(arg0, obj);
        const items = [merged];
        const merged1 = Object.assign(callback3(CollectiblesVariantProductRecord, "fromServer", this, 2)(items));
        obj["baseVariantName"] = base_variant_name;
        obj["baseVariantSkuId"] = base_variant_sku_id;
        obj["variantLabel"] = variant_label;
        obj["variantValue"] = variant_value;
        return new CollectiblesVariantProductRecord(obj);
      }
    }
  ];
  return callback(CollectiblesVariantProductRecord, null, items);
}(tmp5);
const tmp4 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/collectibles/records/CollectiblesProductRecord.tsx");

export default tmp5;
export const CollectiblesVariantProductRecord = tmp6;
