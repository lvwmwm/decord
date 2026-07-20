// Module ID: 4161
// Function ID: 35284
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4161 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = arg1(dependencyMap[7]).THE_GAME_AWARD_WINNER_SKUS;
const importDefaultResult = importDefault(dependencyMap[5]);
({ GIFTABLE_CURRENCIES: closure_10, OperatingSystems: closure_11, SKUFlags: closure_12, SKUTypes: closure_13 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
const tmp4 = (importDefaultResult) => {
  class SKURecord {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, SKURecord);
      obj = closure_6(SKURecord);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, type: tmp6.type, applicationId: tmp6.applicationId, application: tmp6.application, eligiblePaymentGateways: tmp6.eligiblePaymentGateways, googleSkuIds: tmp6.googleSkuIds, productLine: tmp6.productLine, name: tmp6.name, preorderReleaseAt: tmp6.preorderReleaseAt, preorderApproximateReleaseDate: tmp6.preorderApproximateReleaseDate, releaseDate: tmp6.releaseDate, summary: tmp6.summary, features: tmp6.features, genres: tmp6.genres, dependentSkuId: tmp6.dependentSkuId, manifests: tmp6.manifests, availableRegions: tmp6.availableRegions, accessType: tmp6.accessType, systemRequirements: tmp6.systemRequirements, contentRating: tmp6.contentRating, contentRatingAgency: tmp6.contentRatingAgency, legalNotice: tmp6.legalNotice, price: tmp6.price, prices: tmp6.prices, premium: tmp6.premium, showAgeGate: tmp6.showAgeGate, restricted: tmp6.restricted, slug: tmp6.slug, exclusive: tmp6.exclusive, locales: tmp6.locales, flags: tmp6.flags } = importDefaultResult);
      tmp2Result.externalPurchaseUrl = importDefaultResult.externalPurchaseUrl || null;
      ({ deleted: tmp6.deleted, bundledSkuIds: tmp6.bundledSkuIds, bundledSkus: tmp6.bundledSkus, tenantMetadata: tmp6.tenantMetadata, selectedOptions: tmp6.selectedOptions, productId: tmp6.productId, thumbnailAssetId: tmp6.thumbnailAssetId, description: tmp6.description, orbsReward: tmp6.orbsReward, eligibleOffers: tmp6.eligibleOffers, previewAssetPaths: tmp6.previewAssetPaths } = importDefaultResult);
      return tmp2Result;
    }
  }
  const arg1 = SKURecord;
  callback2(SKURecord, importDefaultResult);
  let obj = {
    key: "supportedOperatingSystems",
    get() {
      if (null != this.systemRequirements) {
        const _Object = Object;
        let keys = Object.keys(tmp.systemRequirements);
      } else {
        keys = [];
      }
      if (keys.length <= 0) {
        const items = [constants.WINDOWS];
        keys = items;
      }
      return keys;
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "isOnSale",
    get() {
      return null != this.price && null != this.price.saleAmount;
    }
  };
  items[1] = obj;
  obj = {
    key: "isGiftable",
    value() {
      let price = arg0;
      const self = this;
      if (arg0 === undefined) {
        price = self.price;
      }
      let hasItem = self.type === constants3.DURABLE_PRIMARY && self.available && self.requiresPayment;
      if (hasItem) {
        hasItem = null != price;
      }
      if (hasItem) {
        hasItem = set2.has(price.currency);
      }
      if (hasItem) {
        hasItem = null == self.externalPurchaseUrl;
      }
      return hasItem;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getPrice",
    value() {
      let tmp = arg0;
      let flag = arg1;
      if (arg0 === undefined) {
        tmp = null;
      }
      if (flag === undefined) {
        flag = true;
      }
      const price = this.price;
      if (null == price) {
        return null;
      } else {
        if (null != tmp) {
          const premium = price.premium;
          let tmp2;
          if (null != premium) {
            tmp2 = premium[tmp];
          }
          if (null != tmp2) {
            let obj = { amount: tmp2.amount, currency: price.currency };
            return obj;
          }
        }
        if (flag) {
          if (null != price.saleAmount) {
            obj = {};
            ({ saleAmount: obj2.amount, currency: obj2.currency } = price);
          }
          return obj;
        }
        obj = {};
        ({ amount: obj.amount, currency: obj.currency } = price);
      }
    }
  };
  items[4] = {
    key: "getDisplaySalePercentage",
    value() {
      const self = this;
      let combined = null;
      if (null != this.price) {
        combined = null;
        if (null != self.price.salePercentage) {
          const _HermesInternal = HermesInternal;
          combined = "-" + self.price.salePercentage + "%";
        }
      }
      return combined;
    }
  };
  items[5] = {
    key: "requiresPayment",
    get() {
      const price = this.getPrice();
      let tmp2 = !this.premium;
      if (tmp2) {
        tmp2 = null != price;
      }
      if (tmp2) {
        tmp2 = price.amount > 0;
      }
      return tmp2;
    }
  };
  items[6] = {
    key: "isTheGameAwardsWinner",
    get() {
      return set.has(this.id);
    }
  };
  items[7] = {
    key: "available",
    get() {
      let hasFlagResult = SKURecord(closure_2[9]).hasFlag(this.flags, constants2.AVAILABLE);
      if (!hasFlagResult) {
        hasFlagResult = null != this.externalPurchaseUrl;
      }
      return hasFlagResult;
    }
  };
  items[8] = {
    key: "isAvailableForDistribution",
    value() {
      const self = this;
      let available = this.available;
      if (available) {
        available = null != self.getPrice();
      }
      if (available) {
        available = null == self.externalPurchaseUrl;
      }
      if (available) {
        let hasFlagResult = !self.premium;
        if (!hasFlagResult) {
          hasFlagResult = SKURecord(closure_2[9]).hasFlag(self.flags, constants2.PREMIUM_AND_DISTRIBUTION);
          const obj = SKURecord(closure_2[9]);
        }
        available = hasFlagResult;
      }
      return available;
    }
  };
  items[9] = {
    key: "isAvailable",
    value() {
      return SKURecord(closure_2[9]).hasFlag(this.flags, constants2.AVAILABLE);
    }
  };
  items[10] = {
    key: "isPremiumPerk",
    value() {
      const self = this;
      let premium = this.premium;
      if (premium) {
        let hasFlagResult = SKURecord(closure_2[9]).hasFlag(self.flags, constants2.PREMIUM_PURCHASE);
        if (!hasFlagResult) {
          hasFlagResult = SKURecord(closure_2[9]).hasFlag(self.flags, constants2.PREMIUM_AND_DISTRIBUTION);
          const obj2 = SKURecord(closure_2[9]);
        }
        premium = hasFlagResult;
        const obj = SKURecord(closure_2[9]);
      }
      return premium;
    }
  };
  items[11] = {
    key: "hasFeature",
    value(arg0) {
      const features = this.features;
      return features.has(arg0);
    }
  };
  items[12] = {
    key: "isPreorder",
    value() {
      return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate;
    }
  };
  const items1 = [
    {
      key: "createFromServer",
      value(id) {
        let deleted;
        let eligible_offers;
        let name;
        const price = id.price;
        let tmp = SKURecord;
        let obj = { id: id.id, type: id.type, applicationId: id.application_id };
        let fromServer = null;
        if (null != id.application) {
          fromServer = closure_8.createFromServer(id.application);
        }
        obj.application = fromServer;
        const eligible_payment_gateways = id.eligible_payment_gateways;
        let tmp4 = null;
        if (null != eligible_payment_gateways) {
          tmp4 = eligible_payment_gateways;
        }
        obj.eligiblePaymentGateways = tmp4;
        const google_sku_ids = id.google_sku_ids;
        let tmp5 = null;
        if (null != google_sku_ids) {
          tmp5 = google_sku_ids;
        }
        obj.googleSkuIds = tmp5;
        ({ product_line: obj.productLine, name } = id);
        let str = "";
        let str2 = "";
        if (null != name) {
          str2 = name;
        }
        obj.name = str2;
        let tmp6 = null;
        if (null != id.release_date) {
          tmp6 = callback(closure_2[10])(id.release_date);
        }
        obj.releaseDate = tmp6;
        let tmp9 = null;
        if (null != id.preorder_release_at) {
          tmp9 = callback(closure_2[10])(id.preorder_release_at);
        }
        obj.preorderReleaseAt = tmp9;
        ({ preorder_approximate_release_date: obj.preorderApproximateReleaseDate, summary: obj.summary } = id);
        obj.features = new Set(id.features);
        const set = new Set(id.features);
        obj.genres = new Set(id.genres);
        ({ dependent_sku_id: obj.dependentSkuId, manifests: obj.manifests, available_regions: obj.availableRegions, access_type: obj.accessType, system_requirements: obj.systemRequirements, content_rating: obj.contentRating, content_rating_agency: obj.contentRatingAgency, legal_notice: obj.legalNotice } = id);
        let tmp14 = null;
        if (null != price) {
          obj = {};
          ({ amount: obj2.amount, currency: obj2.currency, sale_amount: obj2.saleAmount, sale_percentage: obj2.salePercentage, premium: obj2.premium } = price);
          tmp14 = obj;
        }
        obj.price = tmp14;
        obj.prices = callback(closure_2[11])(id.prices);
        const premium = id.premium;
        obj.premium = null != premium && premium;
        obj.showAgeGate = id.show_age_gate || false;
        obj.restricted = id.restricted || false;
        const slug = id.slug;
        if (null != slug) {
          str = slug;
        }
        obj.slug = str;
        obj.exclusive = id.exclusive || false;
        let locales = id.locales;
        if (null == locales) {
          locales = [13];
        }
        obj.locales = locales;
        ({ flags: obj.flags, external_purchase_url: obj.externalPurchaseUrl, deleted } = id);
        obj.deleted = null != deleted && deleted;
        let bundled_sku_ids = id.bundled_sku_ids;
        if (null == bundled_sku_ids) {
          bundled_sku_ids = [];
        }
        obj.bundledSkuIds = bundled_sku_ids;
        const bundled_skus = id.bundled_skus;
        let mapped;
        if (null != bundled_skus) {
          mapped = bundled_skus.map((arg0) => closure_0.createFromServer(arg0));
        }
        if (null == mapped) {
          mapped = [];
        }
        obj.bundledSkus = mapped;
        obj.tenantMetadata = callback(closure_2[12])(id.tenant_metadata);
        const selected_options = id.selected_options;
        let mapped1;
        if (null != selected_options) {
          mapped1 = selected_options.map((optionName) => ({ optionName: optionName.option_name, optionValue: optionName.option_value }));
        }
        if (null == mapped1) {
          mapped1 = [];
        }
        obj.selectedOptions = mapped1;
        ({ product_id: obj.productId, thumbnail_asset_id: obj.thumbnailAssetId, description: obj.description, orbs_reward: obj.orbsReward, eligible_offers } = id);
        if (null == eligible_offers) {
          eligible_offers = [];
        }
        obj.eligibleOffers = eligible_offers;
        let tmp15 = null;
        if (null != id.preview_asset_paths) {
          obj = { fgStatic: id.preview_asset_paths.fg_static, fgAnimated: id.preview_asset_paths.fg_animated, bgStatic: id.preview_asset_paths.bg_static, bgAnimated: id.preview_asset_paths.bg_animated };
          tmp15 = obj;
        }
        obj.previewAssetPaths = tmp15;
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(SKURecord, items, items1);
}(importDefaultResult);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/skus/SKURecord.tsx");

export default tmp4;
