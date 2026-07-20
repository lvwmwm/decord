// Module ID: 13294
// Function ID: 101052
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13294 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[6]);
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (importDefaultResult) => {
  class StoreListingRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, StoreListingRecord);
      obj = closure_5(StoreListingRecord);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, applicationId: tmp6.applicationId, skuId: tmp6.skuId, skuFlags: tmp6.skuFlags, summary: tmp6.summary, tagline: tmp6.tagline, flavorText: tmp6.flavorText, description: tmp6.description, carouselItems } = importDefaultResult);
      if (null == carouselItems) {
        carouselItems = [];
      }
      tmp2Result.carouselItems = carouselItems;
      childSkuIds = importDefaultResult.childSkuIds;
      if (null == childSkuIds) {
        childSkuIds = [];
      }
      tmp2Result.childSkuIds = childSkuIds;
      alternativeSkuIds = importDefaultResult.alternativeSkuIds;
      if (null == alternativeSkuIds) {
        alternativeSkuIds = [];
      }
      tmp2Result.alternativeSkuIds = alternativeSkuIds;
      assets = importDefaultResult.assets;
      if (null == assets) {
        assets = [];
      }
      tmp2Result.assets = assets;
      ({ staffNotes: tmp6.staffNotes, guild: tmp6.guild, thumbnail } = importDefaultResult);
      tmp7 = null;
      if (null != thumbnail) {
        tmp7 = thumbnail;
      }
      tmp2Result.thumbnail = tmp7;
      boxArt = importDefaultResult.boxArt;
      tmp8 = null;
      if (null != boxArt) {
        tmp8 = boxArt;
      }
      tmp2Result.boxArt = tmp8;
      previewVideo = importDefaultResult.previewVideo;
      tmp9 = null;
      if (null != previewVideo) {
        tmp9 = previewVideo;
      }
      tmp2Result.previewVideo = tmp9;
      headerBackground = importDefaultResult.headerBackground;
      tmp10 = null;
      if (null != headerBackground) {
        tmp10 = headerBackground;
      }
      tmp2Result.headerBackground = tmp10;
      headerLogoDarkTheme = importDefaultResult.headerLogoDarkTheme;
      tmp11 = null;
      if (null != headerLogoDarkTheme) {
        tmp11 = headerLogoDarkTheme;
      }
      tmp2Result.headerLogoDarkTheme = tmp11;
      headerLogoLightTheme = importDefaultResult.headerLogoLightTheme;
      tmp12 = null;
      if (null != headerLogoLightTheme) {
        tmp12 = headerLogoLightTheme;
      }
      tmp2Result.headerLogoLightTheme = tmp12;
      heroBackground = importDefaultResult.heroBackground;
      tmp13 = null;
      if (null != heroBackground) {
        tmp13 = heroBackground;
      }
      tmp2Result.heroBackground = tmp13;
      heroVideo = importDefaultResult.heroVideo;
      tmp14 = null;
      if (null != heroVideo) {
        tmp14 = heroVideo;
      }
      tmp2Result.heroVideo = tmp14;
      entitlementBranchId = importDefaultResult.entitlementBranchId;
      tmp15 = null;
      if (null != entitlementBranchId) {
        tmp15 = entitlementBranchId;
      }
      tmp2Result.entitlementBranchId = tmp15;
      tmp2Result.benefits = importDefaultResult.benefits;
      tmp2Result.published = Boolean(importDefaultResult.published);
      return tmp2Result;
    }
  }
  const arg1 = StoreListingRecord;
  callback2(StoreListingRecord, importDefaultResult);
  let obj = {
    key: "isSlimDirectoryVersion",
    value() {
      return null == this.description;
    }
  };
  const items = [obj];
  obj = {
    key: "createFromServer",
    value(id) {
      const staff_notes = id.staff_notes;
      let tmp = StoreListingRecord;
      let obj = { id: id.id, applicationId: id.sku.application_id, skuId: id.sku.id, skuFlags: id.sku.flags, summary: id.summary, tagline: id.tagline, flavorText: id.flavor_text, description: id.description };
      let mapped = null;
      if (null != id.child_skus) {
        const child_skus = id.child_skus;
        mapped = child_skus.map((id) => id.id);
      }
      obj.childSkuIds = mapped;
      let mapped1 = null;
      if (null != id.alternative_skus) {
        const alternative_skus = id.alternative_skus;
        mapped1 = alternative_skus.map((id) => id.id);
      }
      obj.alternativeSkuIds = mapped1;
      let mapped2 = null;
      if (null != id.carousel_items) {
        const carousel_items = id.carousel_items;
        mapped2 = carousel_items.map((assetId) => ({ assetId: assetId.asset_id, youtubeVideoId: assetId.youtube_video_id }));
      }
      obj.carouselItems = mapped2;
      let mapped3 = null;
      if (null != id.assets) {
        const assets = id.assets;
        mapped3 = assets.map(StoreListingRecord(closure_1[7]).transformStoreAssetFromServer);
      }
      obj.assets = mapped3;
      let tmp8 = null;
      if (null != staff_notes) {
        obj = { content: staff_notes.content };
        let tmp9 = null;
        if (null != staff_notes.user) {
          const prototype = ctor.prototype;
          tmp9 = new ctor(staff_notes.user);
        }
        obj.user = tmp9;
        tmp8 = obj;
      }
      obj.staffNotes = tmp8;
      let tmp13 = null;
      if (null != id.guild) {
        obj = { id: id.guild.id, name: id.guild.name, icon: id.guild.icon, approximateMemberCount: id.guild.approximate_member_count, approximatePresenceCount: id.guild.approximate_presence_count };
        tmp13 = obj;
      }
      obj.guild = tmp13;
      let result = null;
      if (null != id.thumbnail) {
        result = StoreListingRecord(closure_1[7]).transformStoreAssetFromServer(id.thumbnail);
        const obj4 = StoreListingRecord(closure_1[7]);
      }
      obj.thumbnail = result;
      let result1 = null;
      if (null != id.preview_video) {
        result1 = StoreListingRecord(closure_1[7]).transformStoreAssetFromServer(id.preview_video);
        const obj5 = StoreListingRecord(closure_1[7]);
      }
      obj.previewVideo = result1;
      let result2 = null;
      if (null != id.header_background) {
        result2 = StoreListingRecord(closure_1[7]).transformStoreAssetFromServer(id.header_background);
        const obj6 = StoreListingRecord(closure_1[7]);
      }
      obj.headerBackground = result2;
      let result3 = null;
      if (null != id.header_logo_dark_theme) {
        result3 = StoreListingRecord(closure_1[7]).transformStoreAssetFromServer(id.header_logo_dark_theme);
        const obj7 = StoreListingRecord(closure_1[7]);
      }
      obj.headerLogoDarkTheme = result3;
      let result4 = null;
      if (null != id.header_logo_light_theme) {
        result4 = StoreListingRecord(closure_1[7]).transformStoreAssetFromServer(id.header_logo_light_theme);
        const obj8 = StoreListingRecord(closure_1[7]);
      }
      obj.headerLogoLightTheme = result4;
      let result5 = null;
      if (null != id.box_art) {
        result5 = StoreListingRecord(closure_1[7]).transformStoreAssetFromServer(id.box_art);
        const obj9 = StoreListingRecord(closure_1[7]);
      }
      obj.boxArt = result5;
      let result6 = null;
      if (null != id.hero_background) {
        result6 = StoreListingRecord(closure_1[7]).transformStoreAssetFromServer(id.hero_background);
        const obj10 = StoreListingRecord(closure_1[7]);
      }
      obj.heroBackground = result6;
      let result7 = null;
      if (null != id.hero_video) {
        result7 = StoreListingRecord(closure_1[7]).transformStoreAssetFromServer(id.hero_video);
        const obj11 = StoreListingRecord(closure_1[7]);
      }
      obj.heroVideo = result7;
      ({ entitlement_branch_id: obj.entitlementBranchId, benefits: obj.benefits, published: obj.published } = id);
      tmp = new tmp(obj);
      return tmp;
    }
  };
  const items1 = [obj];
  return callback(StoreListingRecord, items, items1);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("records/StoreListingRecord.tsx");

export default tmp3;
