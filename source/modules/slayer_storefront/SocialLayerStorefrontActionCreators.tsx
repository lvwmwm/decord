// Module ID: 7454
// Function ID: 59772
// Name: _fetchSocialLayerStorefront
// Dependencies: []
// Exports: fetchSocialLayerSKUPurchaseEligibility, fetchSocialLayerStorefront, fetchSocialLayerStorefrontAffinity, fetchSocialLayerStorefrontAnnouncement, fetchSocialLayerStorefrontById, fetchSocialLayerStorefrontConfig, fetchSocialLayerStorefrontEntries, fetchSocialLayerStorefrontForApplication, fetchSocialLayerStorefrontSku, fetchSocialLayerStorefrontSkuForApplication, setSocialLayerStorefrontState

// Module 7454 (_fetchSocialLayerStorefront)
function _fetchSocialLayerStorefront(arg0, Endpoints, arg2) {
  return _fetchSocialLayerStorefront2(...arguments);
}
async function _fetchSocialLayerStorefront2(arg0, arg1, arg2) {
  const fn = function*(guildOrApplicationId, url) {
    let obj = arg2;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const eager = obj.eager;
    const forceFetch = obj.forceFetch;
    const storefrontFetchState = storefrontFetchState.getStorefrontFetchState(guildOrApplicationId);
    let state;
    if (null != storefrontFetchState) {
      state = storefrontFetchState.state;
    }
    let state1;
    if (null != storefrontFetchState) {
      state1 = storefrontFetchState.state;
    }
    let tmp7 = "error" === state1 && null != storefrontFetchState.fetchedAt;
    if (tmp7) {
      const _Date = Date;
      tmp7 = Date.now() - storefrontFetchState.fetchedAt < closure_7;
    }
    let state2;
    if (null != storefrontFetchState) {
      state2 = storefrontFetchState.state;
    }
    let tmp11 = "fetched" === state2 && null != storefrontFetchState.fetchedAt;
    if (tmp11) {
      const _Date2 = Date;
      tmp11 = Date.now() - storefrontFetchState.fetchedAt < closure_8;
    }
    if ("loading" !== state) {
      let obj1 = callback2(closure_2[5]);
      obj = { type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildOrApplicationId };
      obj1.dispatch(obj);
      if ("application" === guildOrApplicationId.type) {
        let applicationId = guildOrApplicationId.applicationId;
      } else {
        let obj3 = callback(closure_2[6]);
        applicationId = obj3.getSocialLayerStorefrontApplicationId(guildOrApplicationId.guildId);
      }
      obj = {};
      let result = tmp23;
      if (null != applicationId) {
        let obj5 = callback(closure_2[7]);
        result = obj5.isTestModeForApplication(tmp22);
      }
      if (result) {
        obj.test_mode = true;
      }
      const promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
      if (null != promotionIdOverride) {
        obj.promotion_id_override = promotionIdOverride;
      }
      let tmp35 = tmp34;
      if ("guild" === guildOrApplicationId.type) {
        tmp35 = null == applicationId;
      }
      let result1 = tmp35;
      if (tmp35) {
        let obj6 = callback(closure_2[7]);
        result1 = obj6.isAnyApplicationInTestMode();
      }
      const HTTP = callback(closure_2[8]).HTTP;
      obj1 = { url, query: obj, rejectWithError: true, retries: 3 };
      const tmp43 = yield HTTP.get(obj1);
      const body = tmp43.body;
      const result2 = callback(closure_2[6]).transformSlayerApplicationStorefrontServer(body);
      if (null != result2.storefrontPricing) {
        const obj2 = { type: "SKUS_PRICING_FETCH_SUCCESS" };
        obj3 = { type: "application", applicationId: tmp49.applicationId };
        obj2.priceId = obj3;
        obj2.data = tmp49.storefrontPricing;
        callback2(closure_2[5]).dispatch(obj2);
        const obj10 = callback2(closure_2[5]);
      }
      const obj9 = callback(closure_2[6]);
      const obj4 = { type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildOrApplicationId, storefront: result2 };
      callback2(closure_2[5]).dispatch(obj4);
      const obj13 = callback2(closure_2[5]);
      obj5 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: result2.applicationId };
      const obj15 = callback2(closure_2[5]);
      obj5.storefrontMetadata = callback(closure_2[6]).transformStorefrontMetadataServer(body);
      obj15.dispatch(obj5);
      const obj17 = callback(closure_2[6]);
      obj6 = { type: "STORE_LISTINGS_FETCH_SUCCESS" };
      const store_listings = tmp43.body.store_listings;
      obj6.storeListings = null != store_listings ? store_listings : [];
      callback2(closure_2[5]).dispatch(obj6);
      let result3 = result1;
      if (result1) {
        result3 = callback(closure_2[7]).isTestModeForApplication(result2.applicationId);
        const obj20 = callback(closure_2[7]);
      }
      if (result3) {
        const obj7 = { forceFetch: true };
        yield closure_17(guildOrApplicationId, url, obj7);
      }
      const obj18 = callback2(closure_2[5]);
    }
  };
  fn.next();
  return fn;
}
function _fetchSocialLayerStorefrontSkuWithUrl(first, Endpoints, arg2) {
  return _fetchSocialLayerStorefrontSkuWithUrl2(...arguments);
}
async function _fetchSocialLayerStorefrontSkuWithUrl2(arg0, arg1, arg2) {
  const fn = function*(skuId, url) {
    let countryCode;
    let paymentGateway;
    let obj = arg2;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const withGoogleSkuIds = obj.withGoogleSkuIds;
    let tmp4 = tmp3;
    if (undefined !== withGoogleSkuIds) {
      tmp4 = withGoogleSkuIds;
    }
    ({ countryCode, paymentGateway } = obj);
    let obj1 = callback2(closure_2[5]);
    obj = { type: "STORE_LISTINGS_FETCH_START", skuId };
    obj1.dispatch(obj);
    obj = {};
    if (tmp4) {
      obj.with_google_sku_ids = true;
    }
    let obj4 = callback(closure_2[9]);
    if (!obj4.isNullOrEmpty(countryCode)) {
      obj.country_code = countryCode;
    }
    if (null != paymentGateway) {
      obj.payment_gateway = paymentGateway;
    }
    const promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
    if (null != promotionIdOverride) {
      obj.promotion_id_override = promotionIdOverride;
    }
    const HTTP = callback(closure_2[8]).HTTP;
    obj1 = { url, query: obj, rejectWithError: true };
    const tmp11 = yield HTTP.get(obj1);
    if (null != tmp11.body) {
      if (tmp12.ok) {
        const store_listing = tmp12.body.store_listing;
        const storefront_metadata = tmp12.body.storefront_metadata;
        const obj2 = { type: "SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS" };
        const _Object = Object;
        const assets = tmp12.body.assets;
        obj2.assets = Object.fromEntries(assets.map((id) => {
          const items = [id.id, id];
          return items;
        }));
        callback2(closure_2[5]).dispatch(obj2);
        if (null != storefront_metadata) {
          const obj3 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: store_listing.sku.application_id };
          const obj9 = callback2(closure_2[5]);
          obj3.storefrontMetadata = callback(closure_2[6]).transformStorefrontMetadataServer(storefront_metadata);
          obj9.dispatch(obj3);
          const obj11 = callback(closure_2[6]);
        }
        const obj7 = callback2(closure_2[5]);
        obj4 = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: store_listing };
        callback2(closure_2[5]).dispatch(obj4);
        const obj12 = callback2(closure_2[5]);
      }
    }
    const error = new Error("Failed to fetch social layer storefront SKU");
    throw error;
  };
  fn.next();
  return fn;
}
function getOrCreateBackoff(get) {
  let value = get.get(arg1);
  if (null == value) {
    let tmp4 = importDefault(dependencyMap[10]);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(closure_13, closure_14);
    const result = get.set(arg1, tmp4);
    value = tmp4;
  }
  return value;
}
async function _fetchSocialLayerStorefrontEntries(arg0, arg1) {
  const storefrontEntries = storefrontEntries.getStorefrontEntries(arg0);
  let state;
  if (null != storefrontEntries) {
    state = storefrontEntries.state;
  }
  if ("loading" !== state) {
    const obj6 = callback3(closure_15, tmp);
    let state1;
    if (null != storefrontEntries) {
      state1 = storefrontEntries.state;
    }
    if ("error" !== state1) {
      let state2;
      if (null != storefrontEntries) {
        state2 = storefrontEntries.state;
      }
      if ("fetched" !== state2) {
        let obj = callback2(closure_2[5]);
        obj = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD", applicationId: tmp };
        obj.dispatch(obj);
        const HTTP = callback(closure_2[8]).HTTP;
        obj = { li: 994899974124757700000000000000000000000000000000000000000000000000000000000000000000000, ld: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002004549023389057, lo: 131072.0539264679, url: closure_6.SOCIAL_LAYER_STOREFRONTS_ALL(tmp) };
        const body = yield HTTP.get(obj).body;
        obj6.succeed();
        const obj1 = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS", applicationId: tmp, entries: body.map(callback(closure_2[6]).transformSlayerApplicationStorefrontSummaryServer) };
        callback2(closure_2[5]).dispatch(obj1);
        const obj4 = callback2(closure_2[5]);
      } else {
        const _Date2 = Date;
      }
    } else {
      const _Date = Date;
    }
  }
}
async function _fetchSocialLayerStorefrontById(applicationId, arg1, arg2) {
  const storefrontById = storefrontById.getStorefrontById(arg1);
  let state;
  if (null != storefrontById) {
    state = storefrontById.state;
  }
  if ("loading" !== state) {
    const obj17 = callback3(closure_16, tmp);
    let state1;
    if (null != storefrontById) {
      state1 = storefrontById.state;
    }
    if ("error" === state1) {
      if (null != storefrontById.fetchedAt) {
        const _Date = Date;
      }
    }
    let state2;
    if (null != storefrontById) {
      state2 = storefrontById.state;
    }
    if ("fetched" === state2) {
      if (null != storefrontById.fetchedAt) {
        const _Date2 = Date;
      }
    }
    let obj = callback2(closure_2[5]);
    obj = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD", storefrontId: tmp };
    obj.dispatch(obj);
    obj = {};
    let obj3 = callback(closure_2[7]);
    if (obj3.isTestModeForApplication(applicationId)) {
      obj.test_mode = true;
    }
    const promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
    if (null != promotionIdOverride) {
      obj.promotion_id_override = promotionIdOverride;
    }
    const HTTP = callback(closure_2[8]).HTTP;
    const obj1 = { url: closure_6.SOCIAL_LAYER_STOREFRONT_BY_ID(applicationId, tmp), query: obj, rejectWithError: true, retries: 3 };
    const tmp26 = yield HTTP.get(obj1);
    const body = tmp26.body;
    let obj5 = callback(closure_2[6]);
    const result = obj5.transformSlayerApplicationStorefrontServer(body);
    if (null != result.storefrontPricing) {
      let obj6 = callback2(closure_2[5]);
      const obj2 = { type: "SKUS_PRICING_FETCH_SUCCESS" };
      obj3 = { type: "application", applicationId: tmp32.applicationId };
      obj2.priceId = obj3;
      obj2.data = tmp32.storefrontPricing;
      obj6.dispatch(obj2);
    }
    const obj4 = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS", storefrontId: tmp, storefront: result };
    callback2(closure_2[5]).dispatch(obj4);
    const obj10 = callback2(closure_2[5]);
    obj5 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: result.applicationId };
    const obj12 = callback2(closure_2[5]);
    obj5.storefrontMetadata = callback(closure_2[6]).transformStorefrontMetadataServer(body);
    obj12.dispatch(obj5);
    const obj14 = callback(closure_2[6]);
    obj6 = { type: "STORE_LISTINGS_FETCH_SUCCESS" };
    const store_listings = tmp26.body.store_listings;
    obj6.storeListings = null != store_listings ? store_listings : [];
    callback2(closure_2[5]).dispatch(obj6);
    obj17.succeed();
    const obj15 = callback2(closure_2[5]);
  }
}
function setSocialLayerStorefrontPreview(applicationId, storefrontId) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "SOCIAL_LAYER_STOREFRONT_SET_PREVIEW", applicationId, storefrontId };
  obj.dispatch(obj);
}
async function _fetchSocialLayerStorefrontAnnouncement(guildId, arg1) {
  let obj = callback2(closure_2[5]);
  obj = { type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId };
  obj.dispatch(obj);
  const HTTP = callback(closure_2[8]).HTTP;
  obj = { url: closure_6.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(guildId), rejectWithError: true };
  const body = yield HTTP.get(obj).body;
  if ("guild-discord-announcement" === body.type) {
    const obj1 = { type: "guild-discord-announcement" };
    ({ id: obj5.id, application_id: obj5.applicationId, application_name: obj5.applicationName, asset_fully_qualified_url: obj5.assetFullyQualifiedURL, video_asset_fully_qualified_url: obj5.videoAssetFullyQualifiedURL, popover_title: obj5.popoverTitle, popover_body: obj5.popoverBody, popover_cta: obj5.popoverCta } = body);
    let obj2 = obj1;
  } else {
    obj2 = { type: "guild-application-announcement" };
    ({ id: obj4.id, application_id: obj4.applicationId, application_name: obj4.applicationName, asset_id: obj4.assetId, background_image_asset_id: obj4.backgroundImageAssetId } = body);
  }
  const obj3 = { type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS", guildId, announcement: obj2 };
  callback2(closure_2[5]).dispatch(obj3);
}
async function _fetchSocialLayerStorefrontConfig() {
  const configFetchState = configFetchState.getConfigFetchState();
  if ("loading" !== configFetchState.state) {
    if ("success" !== configFetchState.state) {
      if ("error" !== configFetchState.state) {
        let obj = callback2(closure_2[5]);
        obj = { type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" };
        obj.dispatch(obj);
        const HTTP = callback(closure_2[8]).HTTP;
        obj = { url: constants.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: true };
        const body = yield HTTP.get(obj).body;
        let tmp13 = null;
        if (null != body.promotion_end_datetime) {
          const _Date3 = Date;
          const date = new Date(tmp11.promotion_end_datetime);
          const _Number = Number;
          if (!Number.isNaN(date.getTime())) {
            tmp13 = tmp18;
          }
          const tmp18 = date;
        }
        const obj1 = { type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS" };
        const obj2 = { promotionalSkuIds: body.promotional_sku_ids, promotionEndDatetime: tmp13 };
        const storefronts = tmp11.storefronts;
        let mapped;
        if (null != storefronts) {
          mapped = arr.map((guildId) => {
            let date = null;
            if (null != guildId.promotion_end_datetime) {
              const _Date = Date;
              date = new Date(guildId.promotion_end_datetime);
            }
            let isNaNResult = null == date;
            if (!isNaNResult) {
              const _Number = Number;
              isNaNResult = Number.isNaN(date.getTime());
            }
            let tmp7 = null;
            if (!isNaNResult) {
              tmp7 = date;
            }
            const obj = { guildId: guildId.guild_id, applicationId: guildId.application_id, gameId: guildId.game_id, collectiblesShopNavigationEnabled: true === guildId.collectibles_shop_navigation_enabled };
            let excluded_platforms = guildId.excluded_platforms;
            if (null == excluded_platforms) {
              excluded_platforms = [];
            }
            obj.excludedPlatforms = excluded_platforms;
            obj.disableMobileAccountLinking = true === guildId.disable_mobile_account_linking;
            obj.promotionEndDatetime = tmp7;
            obj.allowOrbsSpending = true === guildId.allow_orbs_spending;
            return obj;
          });
        }
        obj2.storefronts = null != mapped ? mapped : [];
        let tmp27 = null;
        if (null != body.announcement_modal_config) {
          const obj3 = { version: body.announcement_modal_config.version, applicationId: body.announcement_modal_config.application_id };
          tmp27 = obj3;
        }
        obj2.announcementModalConfig = tmp27;
        obj1.config = obj2;
        callback2(closure_2[5]).dispatch(obj1);
        const arr = storefronts;
        const obj5 = callback2(closure_2[5]);
      } else {
        const _Date2 = Date;
      }
    } else {
      const _Date = Date;
    }
  }
}
async function _fetchSocialLayerStorefrontAffinity() {
  let obj = callback2(closure_2[5]);
  obj.dispatch({ type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START" });
  const HTTP = callback(closure_2[8]).HTTP;
  obj = { url: constants.SOCIAL_LAYER_STOREFRONT_ELIGIBILITY, rejectWithError: true };
  const body = yield HTTP.get(obj).body;
  obj = { type: "SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS" };
  const obj3 = callback2(closure_2[5]);
  obj.affinity = callback(closure_2[6]).transformSocialLayerStorefrontAffinityServer(body);
  obj3.dispatch(obj);
  return body;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
let closure_7 = 30 * importDefault(dependencyMap[4]).Millis.SECOND;
let closure_8 = 30 * importDefault(dependencyMap[4]).Millis.MINUTE;
let closure_9 = 60 * importDefault(dependencyMap[4]).Millis.MINUTE;
let closure_10 = 30 * importDefault(dependencyMap[4]).Millis.SECOND;
let closure_11 = 5 * importDefault(dependencyMap[4]).Millis.SECOND;
let closure_12 = 5 * importDefault(dependencyMap[4]).Millis.MINUTE;
let closure_13 = 30 * importDefault(dependencyMap[4]).Millis.SECOND;
let closure_14 = 5 * importDefault(dependencyMap[4]).Millis.MINUTE;
const map = new Map();
const map1 = new Map();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx");

export { _fetchSocialLayerStorefront };
export const fetchSocialLayerStorefrontForApplication = function fetchSocialLayerStorefrontForApplication(applicationId, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  obj = { type: "application", applicationId };
  return _fetchSocialLayerStorefront(obj, Endpoints.SOCIAL_LAYER_STOREFRONT_BY_APPLICATION_ID(applicationId), obj);
};
export const fetchSocialLayerStorefront = function fetchSocialLayerStorefront(guildId, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  obj = { type: "guild", guildId };
  return _fetchSocialLayerStorefront(obj, Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT(guildId), obj);
};
export const fetchSocialLayerStorefrontSkuForApplication = function fetchSocialLayerStorefrontSkuForApplication(applicationId, first1, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return _fetchSocialLayerStorefrontSkuWithUrl(first1, Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(applicationId, first1), obj);
};
export const fetchSocialLayerStorefrontSku = function fetchSocialLayerStorefrontSku(arg0, first, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  return _fetchSocialLayerStorefrontSkuWithUrl(first, Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU(arg0, first), obj);
};
export const setSocialLayerStorefrontState = function setSocialLayerStorefrontState(applicationId, pageIndex, skuId) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "SET_SOCIAL_LAYER_STOREFRONT_STATE", applicationId, pageIndex, skuId };
  obj.dispatch(obj);
};
export const fetchSocialLayerStorefrontEntries = function fetchSocialLayerStorefrontEntries() {
  return _fetchSocialLayerStorefrontEntries(...arguments);
};
export const fetchSocialLayerStorefrontById = function fetchSocialLayerStorefrontById() {
  return _fetchSocialLayerStorefrontById(...arguments);
};
export { setSocialLayerStorefrontPreview };
export const fetchSocialLayerStorefrontAnnouncement = function fetchSocialLayerStorefrontAnnouncement() {
  return _fetchSocialLayerStorefrontAnnouncement(...arguments);
};
export const fetchSocialLayerStorefrontConfig = function fetchSocialLayerStorefrontConfig() {
  return _fetchSocialLayerStorefrontConfig(...arguments);
};
export const fetchSocialLayerSKUPurchaseEligibility = function fetchSocialLayerSKUPurchaseEligibility(arg0, skuId) {
  const sKUEligibility = sKUEligibility.getSKUEligibility(skuId);
  let tmp2 = "checking" !== sKUEligibility;
  if (tmp2) {
    tmp2 = "eligible" !== sKUEligibility;
  }
  if (tmp2) {
    tmp2 = "ineligible" !== sKUEligibility;
  }
  if (tmp2) {
    let obj = importDefault(dependencyMap[5]);
    obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId };
    obj.dispatch(obj);
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      if ("checking" === sKUEligibility.getSKUEligibility(arg1)) {
        let obj = callback(closure_2[5]);
        obj = { skuId: arg1 };
        obj.dispatch(obj);
      }
    }, closure_11);
    const HTTP = skuId(dependencyMap[8]).HTTP;
    obj = { url: Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(arg0, skuId), rejectWithError: true };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      let obj = callback(closure_2[5]);
      obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE", skuId: arg1, interactionId: body.body.interaction_id };
      obj.dispatch(obj);
    }).catch((status) => {
      let obj = callback(closure_2[5]);
      obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE", skuId: arg1 };
      status = undefined;
      if (null != status) {
        status = status.status;
      }
      obj.httpStatus = status;
      obj.dispatch(obj);
    });
    const nextPromise = HTTP.post(obj).then((body) => {
      let obj = callback(closure_2[5]);
      obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE", skuId: arg1, interactionId: body.body.interaction_id };
      obj.dispatch(obj);
    });
  }
};
export const fetchSocialLayerStorefrontAffinity = function fetchSocialLayerStorefrontAffinity() {
  return _fetchSocialLayerStorefrontAffinity(...arguments);
};
