// Module ID: 6770
// Function ID: 53287
// Name: _isNativeReflectConstruct
// Dependencies: [3992977434, 3707764757, 1409286145, 369098759, 3154116608, 2080374788, 33554458, 1174405120, 194056, 112259, 174132, 114919]

// Module 6770 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function allowEmptyItems(arg0) {
  let tmp = arg0 === arg1(dependencyMap[8]).CollectiblesItemType.VARIANTS_GROUP;
  if (!tmp) {
    tmp = arg0 === arg1(dependencyMap[8]).CollectiblesItemType.EXTERNAL_SKU;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const tmp2 = (arg0) => {
  class CollectiblesCategoryRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, CollectiblesCategoryRecord);
      items = [];
      items[0] = arg0;
      obj = closure_5(CollectiblesCategoryRecord);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ products: tmp6.products, heroRanking: tmp6.heroRanking, unpublishedAt: tmp6.unpublishedAt } = arg0);
      isArray = Array.isArray(arg0.products);
      if (isArray) {
        num = 0;
        isArray = arg0.products.length > 0;
      }
      if (isArray) {
        products = arg0.products;
        isArray = undefined === products.find((product) => !callback(closure_1[9]).isOrbsExclusiveProduct(product));
      }
      tmp2Result.isOrbsExclusive = isArray;
      ({ heroBannerUrl: tmp6.heroBannerUrl, heroBannerAnimatedUrl: tmp6.heroBannerAnimatedUrl, heroRiveUrl: tmp6.heroRiveUrl, heroLogoUrl: tmp6.heroLogoUrl, catalogBannerUrl: tmp6.catalogBannerUrl, catalogBannerAnimatedUrl: tmp6.catalogBannerAnimatedUrl, catalogBannerRiveUrl: tmp6.catalogBannerRiveUrl, featuredBlockUrl: tmp6.featuredBlockUrl, logoUrl: tmp6.logoUrl, pdpBgUrl: tmp6.pdpBgUrl, mobileBannerUrl: tmp6.mobileBannerUrl, mobileBgUrl: tmp6.mobileBgUrl, heroLogoDisplayConfig: tmp6.heroLogoDisplayConfig, heroBannerDisplayConfig: tmp6.heroBannerDisplayConfig } = arg0);
      return tmp2Result;
    }
  }
  const arg1 = CollectiblesCategoryRecord;
  callback2(CollectiblesCategoryRecord, arg0);
  let obj = {
    key: "fromServer",
    value(arg0) {
      let catalog_banner_animated_url;
      let catalog_banner_rive_url;
      let catalog_banner_url;
      let featured_block_url;
      let hero_banner_animated_url;
      let hero_banner_display_config;
      let hero_banner_url;
      let hero_logo_display_config;
      let hero_logo_url;
      let hero_ranking;
      let hero_rive_url;
      let logo_url;
      let mobile_banner_url;
      let mobile_bg_url;
      let pdp_bg_url;
      let products;
      let unpublished_at;
      ({ products, unpublished_at } = arg0);
      let obj = { "Bool(true)": -624361470, "Bool(true)": -1795686399, "Bool(true)": -668073983, "Bool(true)": 1230569473, "Bool(true)": 1194590210, "Bool(true)": 1143537666, "Bool(true)": 1062600706, "Bool(true)": -2090532862, "Bool(true)": 1143537665, "Bool(true)": 1205731330, "Bool(true)": 765722626, "Bool(true)": -1665728511, "Bool(true)": 1117257729, -9223372036854775808: 1237188610, 0: 1205141506, 0: -732102654, 1725646397713083: 1234042881 };
      ({ hero_ranking, hero_logo_display_config, hero_banner_display_config, hero_banner_url, hero_banner_animated_url, hero_rive_url, hero_logo_url, catalog_banner_url, catalog_banner_animated_url, catalog_banner_rive_url, featured_block_url, logo_url, pdp_bg_url, mobile_banner_url, mobile_bg_url } = arg0);
      Object.setPrototypeOf(null);
      let tmp3 = CollectiblesCategoryRecord;
      obj = {};
      const CollectiblesCategoryRecord = this;
      const merged = Object.assign(arg0, obj);
      let fn = callback3(callback2(CollectiblesCategoryRecord), "fromServer", this);
      if ("function" === typeof fn) {
        fn = (items) => fn.apply(self, items);
      }
      const items = [merged];
      const merged1 = Object.assign(fn(items));
      obj["products"] = products.reduce((arr) => {
        const fromServerResult = closure_8.fromServer(arg1);
        if (callback(fromServerResult.type)) {
          arr.push(fromServerResult);
        }
        return arr;
      }, []);
      let date = null;
      if (null != unpublished_at) {
        const _Date = Date;
        date = new Date(unpublished_at);
      }
      obj["unpublishedAt"] = date;
      obj["heroRanking"] = hero_ranking;
      obj["heroBannerUrl"] = hero_banner_url;
      obj["heroBannerAnimatedUrl"] = hero_banner_animated_url;
      obj["heroRiveUrl"] = hero_rive_url;
      obj["heroLogoUrl"] = hero_logo_url;
      obj["catalogBannerUrl"] = catalog_banner_url;
      obj["catalogBannerAnimatedUrl"] = catalog_banner_animated_url;
      obj["catalogBannerRiveUrl"] = catalog_banner_rive_url;
      obj["featuredBlockUrl"] = featured_block_url;
      obj["logoUrl"] = logo_url;
      obj["pdpBgUrl"] = pdp_bg_url;
      obj["mobileBannerUrl"] = mobile_banner_url;
      obj["mobileBgUrl"] = mobile_bg_url;
      obj["heroLogoDisplayConfig"] = CollectiblesCategoryRecord(fn[10]).getAssetDisplayConfig(hero_logo_display_config);
      const obj3 = CollectiblesCategoryRecord(fn[10]);
      obj["heroBannerDisplayConfig"] = CollectiblesCategoryRecord(fn[10]).getAssetDisplayConfig(hero_banner_display_config);
      tmp3 = new tmp3(obj);
      return tmp3;
    }
  };
  const items = [obj, ];
  obj = {
    key: "fromStorefrontCollectionRecord",
    value(id) {
      const products = id.products;
      const obj = {
        storeListingId: id.id,
        skuId: id.id,
        name: id.name,
        summary: id.description,
        unpublishedAt: id.unpublishedAt,
        styles: id.styles,
        products: products.reduce((arr) => {
          const result = closure_8.fromStorefrontProductRecord(arg1);
          if (null != result) {
            if (callback(result.type)) {
              arr.push(result);
            }
          }
          return arr;
        }, []),
        heroRanking: id.heroRanking,
        heroBannerUrl: id.heroBannerUrl,
        heroBannerAnimatedUrl: id.heroBannerAnimatedUrl,
        heroRiveUrl: id.heroRiveUrl,
        heroLogoUrl: id.heroLogoUrl,
        catalogBannerUrl: id.catalogBannerUrl,
        catalogBannerAnimatedUrl: id.catalogBannerAnimatedUrl,
        catalogBannerRiveUrl: id.catalogBannerRiveUrl,
        featuredBlockUrl: id.featuredBlockUrl,
        logoUrl: id.logoUrl,
        pdpBgUrl: id.pdpBgUrl,
        mobileBannerUrl: id.mobileBannerUrl,
        mobileBgUrl: id.mobileBgUrl,
        heroLogoDisplayConfig: id.heroLogoDisplayConfig,
        heroBannerDisplayConfig: id.heroDisplayConfig
      };
      return new CollectiblesCategoryRecord({
        storeListingId: id.id,
        skuId: id.id,
        name: id.name,
        summary: id.description,
        unpublishedAt: id.unpublishedAt,
        styles: id.styles,
        products: products.reduce((arr) => {
          const result = closure_8.fromStorefrontProductRecord(arg1);
          if (null != result) {
            if (callback(result.type)) {
              arr.push(result);
            }
          }
          return arr;
        }, []),
        heroRanking: id.heroRanking,
        heroBannerUrl: id.heroBannerUrl,
        heroBannerAnimatedUrl: id.heroBannerAnimatedUrl,
        heroRiveUrl: id.heroRiveUrl,
        heroLogoUrl: id.heroLogoUrl,
        catalogBannerUrl: id.catalogBannerUrl,
        catalogBannerAnimatedUrl: id.catalogBannerAnimatedUrl,
        catalogBannerRiveUrl: id.catalogBannerRiveUrl,
        featuredBlockUrl: id.featuredBlockUrl,
        logoUrl: id.logoUrl,
        pdpBgUrl: id.pdpBgUrl,
        mobileBannerUrl: id.mobileBannerUrl,
        mobileBgUrl: id.mobileBgUrl,
        heroLogoDisplayConfig: id.heroLogoDisplayConfig,
        heroBannerDisplayConfig: id.heroDisplayConfig
      });
    }
  };
  items[1] = obj;
  return callback(CollectiblesCategoryRecord, null, items);
}(importDefault(dependencyMap[7]));
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/collectibles/records/CollectiblesCategoryRecord.tsx");

export default tmp2;
