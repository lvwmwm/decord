// Module ID: 7539
// Function ID: 60062
// Name: _fetchSocialLayerStorefront
// Dependencies: [5, 7368, 5611, 653, 664, 686, 5609, 7369, 507, 1832, 561, 2]
// Exports: fetchSocialLayerSKUPurchaseEligibility, fetchSocialLayerStorefront, fetchSocialLayerStorefrontAnnouncement, fetchSocialLayerStorefrontById, fetchSocialLayerStorefrontConfig, fetchSocialLayerStorefrontEntries, fetchSocialLayerStorefrontForApplication, fetchSocialLayerStorefrontLaunchAnnouncement, fetchSocialLayerStorefrontSku, fetchSocialLayerStorefrontSkuForApplication, setSocialLayerStorefrontState

// Module 7539 (_fetchSocialLayerStorefront)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function _fetchSocialLayerStorefront(arg0, Endpoints, arg2) {
  return _fetchSocialLayerStorefront2(...arguments);
}
async function _fetchSocialLayerStorefront2(arg0, arg1, arg2) {
  let iter = (function*(guildOrApplicationId, url) {
    let obj = arg2;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const eager = obj.eager;
    const forceFetch = obj.forceFetch;
    const storefrontFetchState = outer2_5.getStorefrontFetchState(guildOrApplicationId);
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
      tmp7 = Date.now() - storefrontFetchState.fetchedAt < outer2_7;
    }
    let state2;
    if (null != storefrontFetchState) {
      state2 = storefrontFetchState.state;
    }
    let tmp11 = "fetched" === state2 && null != storefrontFetchState.fetchedAt;
    if (tmp11) {
      const _Date2 = Date;
      tmp11 = Date.now() - storefrontFetchState.fetchedAt < outer2_8;
    }
    if ("loading" !== state) {
      let obj1 = outer2_1(outer2_2[5]);
      obj = { type: "SOCIAL_LAYER_STOREFRONT_LOAD", guildOrApplicationId };
      obj1.dispatch(obj);
      if ("application" === guildOrApplicationId.type) {
        let applicationId = guildOrApplicationId.applicationId;
      } else {
        let obj3 = outer2_0(outer2_2[6]);
        applicationId = obj3.getSocialLayerStorefrontApplicationId(guildOrApplicationId.guildId);
      }
      obj = {};
      let result = tmp23;
      if (null != applicationId) {
        let obj5 = outer2_0(outer2_2[7]);
        result = obj5.isTestModeForApplication(tmp22);
      }
      if (result) {
        obj.test_mode = true;
      }
      const promotionIdOverride = outer2_4.getPromotionIdOverride();
      if (null != promotionIdOverride) {
        obj.promotion_id_override = promotionIdOverride;
      }
      let tmp35 = tmp34;
      if ("guild" === guildOrApplicationId.type) {
        tmp35 = null == applicationId;
      }
      let result1 = tmp35;
      if (tmp35) {
        let obj6 = outer2_0(outer2_2[7]);
        result1 = obj6.isAnyApplicationInTestMode();
      }
      const HTTP = outer2_0(outer2_2[8]).HTTP;
      obj1 = { url, query: obj, rejectWithError: true, retries: 3 };
      const tmp43 = yield HTTP.get(obj1);
      const body = tmp43.body;
      const result2 = outer2_0(outer2_2[6]).transformSlayerApplicationStorefrontServer(body);
      if (null != result2.storefrontPricing) {
        const obj2 = { type: "SKUS_PRICING_FETCH_SUCCESS" };
        obj3 = { type: "application", applicationId: tmp49.applicationId };
        obj2.priceId = obj3;
        obj2.data = tmp49.storefrontPricing;
        outer2_1(outer2_2[5]).dispatch(obj2);
        const obj10 = outer2_1(outer2_2[5]);
      }
      const obj9 = outer2_0(outer2_2[6]);
      const obj4 = { type: "SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS", guildOrApplicationId, storefront: result2 };
      outer2_1(outer2_2[5]).dispatch(obj4);
      const obj13 = outer2_1(outer2_2[5]);
      obj5 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: result2.applicationId };
      const obj15 = outer2_1(outer2_2[5]);
      obj5.storefrontMetadata = outer2_0(outer2_2[6]).transformStorefrontMetadataServer(body);
      obj15.dispatch(obj5);
      const obj17 = outer2_0(outer2_2[6]);
      obj6 = { type: "STORE_LISTINGS_FETCH_SUCCESS" };
      const store_listings = tmp43.body.store_listings;
      obj6.storeListings = null != store_listings ? store_listings : [];
      outer2_1(outer2_2[5]).dispatch(obj6);
      let result3 = result1;
      if (result1) {
        result3 = outer2_0(outer2_2[7]).isTestModeForApplication(result2.applicationId);
        const obj20 = outer2_0(outer2_2[7]);
      }
      if (result3) {
        const obj7 = { forceFetch: true };
        yield outer2_17(guildOrApplicationId, url, obj7);
      }
      const obj18 = outer2_1(outer2_2[5]);
    }
  })();
  iter.next();
  return iter;
}
function _fetchSocialLayerStorefrontSkuWithUrl(first, Endpoints, arg2) {
  return _fetchSocialLayerStorefrontSkuWithUrl2(...arguments);
}
async function _fetchSocialLayerStorefrontSkuWithUrl2(arg0, arg1, arg2) {
  let iter = (function*(skuId, url) {
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
    let obj1 = outer2_1(outer2_2[5]);
    obj = { type: "STORE_LISTINGS_FETCH_START", skuId };
    obj1.dispatch(obj);
    obj = {};
    if (tmp4) {
      obj.with_google_sku_ids = true;
    }
    let obj4 = outer2_0(outer2_2[9]);
    if (!obj4.isNullOrEmpty(countryCode)) {
      obj.country_code = countryCode;
    }
    if (null != paymentGateway) {
      obj.payment_gateway = paymentGateway;
    }
    const promotionIdOverride = outer2_4.getPromotionIdOverride();
    if (null != promotionIdOverride) {
      obj.promotion_id_override = promotionIdOverride;
    }
    const HTTP = outer2_0(outer2_2[8]).HTTP;
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
        outer2_1(outer2_2[5]).dispatch(obj2);
        if (null != storefront_metadata) {
          const obj3 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: store_listing.sku.application_id };
          const obj9 = outer2_1(outer2_2[5]);
          obj3.storefrontMetadata = outer2_0(outer2_2[6]).transformStorefrontMetadataServer(storefront_metadata);
          obj9.dispatch(obj3);
          const obj11 = outer2_0(outer2_2[6]);
        }
        const obj7 = outer2_1(outer2_2[5]);
        obj4 = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: store_listing };
        outer2_1(outer2_2[5]).dispatch(obj4);
        const obj12 = outer2_1(outer2_2[5]);
      }
    }
    const error = new Error("Failed to fetch social layer storefront SKU");
    throw error;
  })();
  iter.next();
  return iter;
}
function getOrCreateBackoff(get) {
  let value = get.get(arg1);
  if (null == value) {
    let tmp4 = importDefault(561);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(closure_13, closure_14);
    const result = get.set(arg1, tmp4);
    value = tmp4;
  }
  return value;
}
async function _fetchSocialLayerStorefrontEntries(arg0, arg1) {
  const storefrontEntries = outer2_5.getStorefrontEntries(arg0);
  let state;
  if (null != storefrontEntries) {
    state = storefrontEntries.state;
  }
  if ("loading" !== state) {
    const obj6 = outer2_21(outer2_15, tmp);
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
        let obj = outer2_1(outer2_2[5]);
        obj = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD", applicationId: tmp };
        obj.dispatch(obj);
        const HTTP = outer2_0(outer2_2[8]).HTTP;
        obj = { url: outer2_6.SOCIAL_LAYER_STOREFRONTS_ALL(tmp), rejectWithError: true, retries: 3 };
        const body = yield HTTP.get(obj).body;
        obj6.succeed();
        const obj1 = { type: "SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS", applicationId: tmp, entries: body.map(outer2_0(outer2_2[6]).transformSlayerApplicationStorefrontSummaryServer) };
        outer2_1(outer2_2[5]).dispatch(obj1);
        const obj4 = outer2_1(outer2_2[5]);
      } else {
        const _Date2 = Date;
      }
    } else {
      const _Date = Date;
    }
  }
}
async function _fetchSocialLayerStorefrontById(arg0, arg1, arg2) {
  const storefrontById = outer2_5.getStorefrontById(arg1);
  let state;
  if (null != storefrontById) {
    state = storefrontById.state;
  }
  if ("loading" !== state) {
    const obj17 = outer2_21(outer2_16, tmp);
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
    let obj = outer2_1(outer2_2[5]);
    obj = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD", storefrontId: tmp };
    obj.dispatch(obj);
    obj = {};
    let obj3 = outer2_0(outer2_2[7]);
    if (obj3.isTestModeForApplication(arg0)) {
      obj.test_mode = true;
    }
    const promotionIdOverride = outer2_4.getPromotionIdOverride();
    if (null != promotionIdOverride) {
      obj.promotion_id_override = promotionIdOverride;
    }
    const HTTP = outer2_0(outer2_2[8]).HTTP;
    const obj1 = { url: outer2_6.SOCIAL_LAYER_STOREFRONT_BY_ID(arg0, tmp), query: obj, rejectWithError: true, retries: 3 };
    const tmp26 = yield HTTP.get(obj1);
    const body = tmp26.body;
    let obj5 = outer2_0(outer2_2[6]);
    const result = obj5.transformSlayerApplicationStorefrontServer(body);
    if (null != result.storefrontPricing) {
      let obj6 = outer2_1(outer2_2[5]);
      const obj2 = { type: "SKUS_PRICING_FETCH_SUCCESS" };
      obj3 = { type: "application", applicationId: tmp32.applicationId };
      obj2.priceId = obj3;
      obj2.data = tmp32.storefrontPricing;
      obj6.dispatch(obj2);
    }
    const obj4 = { type: "SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS", storefrontId: tmp, storefront: result };
    outer2_1(outer2_2[5]).dispatch(obj4);
    const obj10 = outer2_1(outer2_2[5]);
    obj5 = { type: "SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS", applicationId: result.applicationId };
    const obj12 = outer2_1(outer2_2[5]);
    obj5.storefrontMetadata = outer2_0(outer2_2[6]).transformStorefrontMetadataServer(body);
    obj12.dispatch(obj5);
    const obj14 = outer2_0(outer2_2[6]);
    obj6 = { type: "STORE_LISTINGS_FETCH_SUCCESS" };
    const store_listings = tmp26.body.store_listings;
    obj6.storeListings = null != store_listings ? store_listings : [];
    outer2_1(outer2_2[5]).dispatch(obj6);
    obj17.succeed();
    const obj15 = outer2_1(outer2_2[5]);
  }
}
function setSocialLayerStorefrontPreview(applicationId, storefrontId) {
  let obj = importDefault(686);
  obj = { type: "SOCIAL_LAYER_STOREFRONT_SET_PREVIEW", applicationId, storefrontId };
  obj.dispatch(obj);
}
async function _fetchSocialLayerStorefrontAnnouncement(arg0, arg1) {
  let obj = outer2_1(outer2_2[5]);
  obj = { type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START", guildId: arg0 };
  obj.dispatch(obj);
  const HTTP = outer2_0(outer2_2[8]).HTTP;
  obj = { url: outer2_6.SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT(arg0), rejectWithError: true };
  const body = yield HTTP.get(obj).body;
  if ("guild-discord-announcement" === body.type) {
    const obj1 = { type: "guild-discord-announcement" };
    ({ id: obj5.id, application_id: obj5.applicationId, application_name: obj5.applicationName, asset_fully_qualified_url: obj5.assetFullyQualifiedURL, video_asset_fully_qualified_url: obj5.videoAssetFullyQualifiedURL, popover_title: obj5.popoverTitle, popover_body: obj5.popoverBody, popover_cta: obj5.popoverCta } = body);
    let obj2 = obj1;
  } else {
    obj2 = { type: "guild-application-announcement" };
    ({ id: obj4.id, application_id: obj4.applicationId, application_name: obj4.applicationName, asset_id: obj4.assetId, background_image_asset_id: obj4.backgroundImageAssetId } = body);
  }
  const obj3 = { type: "SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS", guildId: arg0, announcement: obj2 };
  outer2_1(outer2_2[5]).dispatch(obj3);
}
async function _fetchSocialLayerStorefrontConfig() {
  const configFetchState = outer2_5.getConfigFetchState();
  if ("loading" !== configFetchState.state) {
    if ("success" !== configFetchState.state) {
      if ("error" !== configFetchState.state) {
        let obj = outer2_1(outer2_2[5]);
        obj = { type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START" };
        obj.dispatch(obj);
        const HTTP = outer2_0(outer2_2[8]).HTTP;
        obj = { url: outer2_6.SOCIAL_LAYER_STOREFRONT_CONFIG, rejectWithError: true };
        const body = yield HTTP.get(obj).body;
        let tmp13 = null;
        if (null != body.promotion_end_datetime) {
          const _Date3 = Date;
          let date = new Date(tmp11.promotion_end_datetime);
          let _Number = Number;
          if (!Number.isNaN(date.getTime())) {
            tmp13 = tmp18;
          }
          tmp18 = date;
        }
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
        const tmp24 = null != mapped ? mapped : [];
        let tmp26 = null;
        if (null != body.announcement_modal_config) {
          const obj1 = { version: tmp11.announcement_modal_config.version, applicationId: tmp11.announcement_modal_config.application_id };
          tmp26 = obj1;
        }
        const obj2 = { type: "SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS" };
        const obj3 = { promotionalSkuIds: body.promotional_sku_ids, promotionEndDatetime: tmp13, storefronts: tmp24, announcementModalConfig: tmp26 };
        obj2.config = obj3;
        outer2_1(outer2_2[5]).dispatch(obj2);
        arr = storefronts;
        const obj6 = outer2_1(outer2_2[5]);
      } else {
        const _Date2 = Date;
      }
    } else {
      let _Date = Date;
    }
  }
}
async function _fetchSocialLayerStorefrontLaunchAnnouncement() {
  let light_theme_logo_url;
  const HTTP = outer2_0(outer2_2[8]).HTTP;
  let obj = { url: outer2_6.SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT, rejectWithError: true };
  const body = yield HTTP.get(obj).body;
  let tmp = null;
  if (null != body) {
    tmp = body;
  }
  let tmp3 = null;
  if (null != tmp) {
    obj = {};
    ({ application_id: obj4.applicationId, light_theme_logo_url } = tmp2);
    let tmp4 = null;
    if (null != light_theme_logo_url) {
      tmp4 = light_theme_logo_url;
    }
    obj.lightThemeLogoUrl = tmp4;
    const dark_theme_logo_url = tmp2.dark_theme_logo_url;
    let tmp7 = null;
    if (null != dark_theme_logo_url) {
      tmp7 = dark_theme_logo_url;
    }
    obj.darkThemeLogoUrl = tmp7;
    const background_url = tmp2.background_url;
    let tmp10 = null;
    if (null != background_url) {
      tmp10 = background_url;
    }
    obj.backgroundUrl = tmp10;
    const titles = tmp2.titles;
    let tmp13 = null;
    if (null != titles) {
      tmp13 = titles;
    }
    obj.titles = tmp13;
    const subtitle = tmp2.subtitle;
    let tmp16 = null;
    if (null != subtitle) {
      tmp16 = subtitle;
    }
    obj.subtitle = tmp16;
    const features = tmp2.features;
    let mapped;
    if (null != features) {
      mapped = arr.map((assetUrl) => ({ assetUrl: assetUrl.asset_url, title: assetUrl.title, subtitle: assetUrl.subtitle }));
    }
    let tmp21 = null;
    if (null != mapped) {
      tmp21 = mapped;
    }
    obj.features = tmp21;
    const button_text = tmp.button_text;
    let tmp23 = null;
    if (null != button_text) {
      tmp23 = button_text;
    }
    obj.buttonText = tmp23;
    tmp3 = obj;
    arr = features;
  }
  obj = { type: "SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_SUCCESS", config: tmp3 };
  outer2_1(outer2_2[5]).dispatch(obj);
}
let closure_7 = 30 * require("set").Millis.SECOND;
let closure_8 = 30 * require("set").Millis.MINUTE;
let closure_9 = 60 * require("set").Millis.MINUTE;
let closure_10 = 30 * require("set").Millis.SECOND;
let closure_11 = 5 * require("set").Millis.SECOND;
let closure_12 = 5 * require("set").Millis.MINUTE;
let closure_13 = 30 * require("set").Millis.SECOND;
let closure_14 = 5 * require("set").Millis.MINUTE;
const map = new Map();
const map1 = new Map();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontActionCreators.tsx");

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
  let obj = importDefault(686);
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
  const _require = skuId;
  sKUEligibility = sKUEligibility.getSKUEligibility(skuId);
  let tmp2 = "checking" !== sKUEligibility;
  if (tmp2) {
    tmp2 = "eligible" !== sKUEligibility;
  }
  if (tmp2) {
    tmp2 = "ineligible" !== sKUEligibility;
  }
  if (tmp2) {
    let obj = importDefault(686);
    obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START", skuId };
    obj.dispatch(obj);
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      if ("checking" === outer1_5.getSKUEligibility(closure_0)) {
        let obj = outer1_1(outer1_2[5]);
        obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE", skuId: closure_0, reason: "interaction_deadline" };
        obj.dispatch(obj);
      }
    }, closure_11);
    const HTTP = _require(507).HTTP;
    obj = { url: Endpoints.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY(arg0, skuId), rejectWithError: true };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE", skuId: closure_0, interactionId: body.body.interaction_id };
      obj.dispatch(obj);
    }).catch((status) => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE", skuId: closure_0 };
      status = undefined;
      if (null != status) {
        status = status.status;
      }
      obj.httpStatus = status;
      obj.dispatch(obj);
    });
    const nextPromise = HTTP.post(obj).then((body) => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE", skuId: closure_0, interactionId: body.body.interaction_id };
      obj.dispatch(obj);
    });
  }
};
export const fetchSocialLayerStorefrontLaunchAnnouncement = function fetchSocialLayerStorefrontLaunchAnnouncement() {
  return _fetchSocialLayerStorefrontLaunchAnnouncement(...arguments);
};
