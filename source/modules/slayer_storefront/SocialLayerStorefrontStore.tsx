// Module ID: 5613
// Function ID: 47749
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1921, 1194, 566, 686, 2]

// Module 5613 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getGuildAndApplicationId(guildOrApplicationId) {
  const obj = {};
  if ("guild" === guildOrApplicationId.type) {
    let guildId = guildOrApplicationId.guildId;
  } else {
    guildId = table2[guildOrApplicationId.applicationId];
  }
  obj.guildId = guildId;
  if ("guild" === guildOrApplicationId.type) {
    let applicationId = table[guildOrApplicationId.guildId];
  } else {
    applicationId = guildOrApplicationId.applicationId;
  }
  obj.applicationId = applicationId;
  return obj;
}
function updateStorefrontFetchState(guildId, applicationId, arg2) {
  if (null != guildId) {
    let obj = {};
    const merged = Object.assign(obj[guildId]);
    const merged1 = Object.assign(arg2);
    obj[guildId] = obj;
  }
  if (null != applicationId) {
    obj = {};
    const merged2 = Object.assign(obj1[applicationId]);
    const merged3 = Object.assign(arg2);
    obj1[applicationId] = obj;
  }
  obj = {};
  const merged4 = Object.assign(obj);
  obj1 = {};
  const merged5 = Object.assign(obj1);
}
function handleUserSettingsStoreUpdate() {
  if (locale === closure_6.locale) {
    return false;
  } else {
    locale = closure_6.locale;
    let closure_8 = {};
    let closure_9 = {};
    let closure_10 = {};
    let closure_11 = {};
    let closure_12 = {};
    let closure_13 = {};
    let closure_14 = {};
    let closure_15 = {};
  }
}
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
let closure_18 = {};
let set = new Set();
let closure_20 = { state: "idle" };
let set1 = new Set();
let closure_22 = {};
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
let set2 = new Set();
let c27 = null;
let tmp5 = ((Store) => {
  class SocialLayerStorefrontStore {
    constructor() {
      self = this;
      tmp = outer1_1(this, SocialLayerStorefrontStore);
      obj = outer1_4(SocialLayerStorefrontStore);
      tmp2 = outer1_3;
      if (outer1_28()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SocialLayerStorefrontStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_6);
      const items = [outer1_6];
      this.syncWith(items, outer1_31);
      const SocialLayerStorefrontStore = outer1_6.locale;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getStorefrontData",
    value(arg0) {
      return outer1_9[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getStorefrontDataForApplicationId",
    value(arg0) {
      return outer1_10[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStorefrontFetchState",
    value(arg0) {
      let applicationId;
      let guildId;
      ({ guildId, applicationId } = outer1_29(arg0));
      if (null != guildId) {
        let tmp2 = outer1_9[guildId];
      } else if (null != applicationId) {
        tmp2 = outer1_10[applicationId];
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "getSkuAssets",
    value() {
      return outer1_14;
    }
  };
  items[5] = {
    key: "getStorefrontMetadata",
    value(arg0) {
      return outer1_15[arg0];
    }
  };
  items[6] = {
    key: "getStorefrontEntries",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  items[7] = {
    key: "getStorefrontById",
    value(arg0) {
      return outer1_12[arg0];
    }
  };
  items[8] = {
    key: "getPreviewStorefrontId",
    value(arg0) {
      let tmp2 = null;
      if (null != outer1_13[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[9] = {
    key: "getStorefrontState",
    value(arg0) {
      if (null != arg0) {
        return outer1_8[arg0];
      }
    }
  };
  items[10] = {
    key: "getAnnouncement",
    value(arg0) {
      return outer1_16[arg0];
    }
  };
  items[11] = {
    key: "getConfig",
    value() {
      let config = null;
      if ("success" === outer1_20.state) {
        config = outer1_20.config;
      }
      return config;
    }
  };
  items[12] = {
    key: "getConfigForApplicationId",
    value(arg0) {
      return outer1_25[arg0];
    }
  };
  items[13] = {
    key: "getApplicationIdFromDetectableId",
    value(arg0) {
      return outer1_24[arg0];
    }
  };
  items[14] = {
    key: "getDetectableIdsToApplicationIds",
    value() {
      return outer1_24;
    }
  };
  items[15] = {
    key: "getGuildIdFromApplicationId",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = outer1_23[arg0];
      }
      return tmp;
    }
  };
  items[16] = {
    key: "getApplicationIdFromGuildId",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = outer1_22[arg0];
      }
      return tmp;
    }
  };
  items[17] = {
    key: "getConfigFetchState",
    value() {
      return outer1_20;
    }
  };
  items[18] = {
    key: "getStorefrontApplicationIds",
    value() {
      return outer1_21;
    }
  };
  items[19] = {
    key: "getStorefrontGuildIds",
    value() {
      return outer1_26;
    }
  };
  items[20] = {
    key: "getSKUEligibility",
    value(arg0) {
      let state;
      if (null != outer1_17[arg0]) {
        state = tmp.state;
      }
      return state;
    }
  };
  items[21] = {
    key: "getSKUEligibilityEntry",
    value(arg0) {
      return outer1_17[arg0];
    }
  };
  items[22] = {
    key: "getNormalizedSKUEligibility",
    value(arg0) {
      let state;
      if (null != outer1_17[arg0]) {
        state = tmp.state;
      }
      return "ineligible" !== state;
    }
  };
  items[23] = {
    key: "getAnnouncementModalContentConfig",
    value() {
      return outer1_27;
    }
  };
  return callback(SocialLayerStorefrontStore, items);
})(require("initialize").Store);
tmp5.displayName = "SocialLayerStorefrontStore";
tmp5 = new tmp5(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    let closure_14 = {};
    let closure_15 = {};
    let closure_17 = {};
    let closure_18 = {};
    let closure_10 = {};
    let closure_9 = {};
    let closure_11 = {};
    let closure_12 = {};
    let closure_13 = {};
    const set = new Set();
    let closure_20 = { state: "idle" };
    const set1 = new Set();
    let closure_22 = {};
    let closure_23 = {};
    let closure_24 = {};
    let closure_25 = {};
    const set2 = new Set();
    let c27 = null;
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleStorefrontPromotionIdOverrideSet() {
    let closure_10 = {};
    let closure_9 = {};
  },
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    let closure_17 = {};
    let closure_18 = {};
    const set = new Set();
  },
  ENTITLEMENT_CREATE: function handleEntitlementCreate(entitlement) {
    entitlement = entitlement.entitlement;
    if (null == obj[entitlement.sku_id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const sku_id = entitlement.sku_id;
      delete tmp2[tmp];
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(interactionId) {
    interactionId = interactionId.interactionId;
    if (null == interactionId) {
      return false;
    } else if (null == dependencyMap[interactionId]) {
      const _Object = Object;
      const values = Object.values(obj);
      if (values.some((state) => "checking" === state.state)) {
        if (set.size >= 25) {
          set.delete(set.values().next().value);
          const iter = set.values();
        }
        set.add(interactionId);
      }
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj[tmp16] = { state: "error", reason: "interaction_failure" };
      delete tmp[tmp2];
    }
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(arg0) {
    if (null == dependencyMap[arg0.interactionId]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
  SOCIAL_LAYER_STOREFRONT_LOAD: function handleSocialLayerStorefrontLoad(guildOrApplicationId) {
    const tmp = getGuildAndApplicationId(guildOrApplicationId.guildOrApplicationId);
    updateStorefrontFetchState(tmp.guildId, tmp.applicationId, { state: "loading" });
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function handleSocialLayerStorefrontLoadSuccess(arg0) {
    let guildOrApplicationId;
    let storefront;
    ({ guildOrApplicationId, storefront } = arg0);
    if ("guild" === guildOrApplicationId.type) {
      let guildId = guildOrApplicationId.guildId;
    } else {
      guildId = getGuildAndApplicationId(guildOrApplicationId).guildId;
    }
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = null == obj[guildId];
    }
    if (tmp2) {
      obj[guildId] = storefront.applicationId;
      obj = {};
      const merged = Object.assign(obj);
    }
    let tmp8 = null != storefront.applicationId && null != guildId;
    if (tmp8) {
      tmp8 = null == obj[storefront.applicationId];
    }
    if (tmp8) {
      obj[storefront.applicationId] = guildId;
      obj = {};
      const merged1 = Object.assign(obj);
    }
    obj = { state: "fetched", fetchedAt: Date.now(), storefront };
    updateStorefrontFetchState(guildId, storefront.applicationId, obj);
    if (null != storefront.assets) {
      const obj1 = {};
      const merged2 = Object.assign(obj1);
      const merged3 = Object.assign(storefront.assets);
    }
  },
  SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function handleSocialLayerStorefrontPartialLoadSuccess(assets) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(assets.assets);
  },
  SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function handleSocialLayerStorefrontMetadataLoadSuccess(arg0) {
    let applicationId;
    let storefrontMetadata;
    const obj = {};
    ({ applicationId, storefrontMetadata } = arg0);
    const merged = Object.assign(obj);
    obj[applicationId] = storefrontMetadata;
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function handleSocialLayerStorefrontLoadFailure(guildOrApplicationId) {
    let applicationId;
    let guildId;
    ({ guildId, applicationId } = getGuildAndApplicationId(guildOrApplicationId.guildOrApplicationId));
    if (null != guildId) {
      let tmp6 = obj[guildId];
    } else if (null != applicationId) {
      tmp6 = obj1[applicationId];
    }
    if (null == tmp6) {
      return false;
    } else if (guildOrApplicationId.eager) {
      if ("loading" === tmp6.state) {
        if (null != tmp6.storefront) {
          obj = { state: "fetched" };
          updateStorefrontFetchState(guildId, applicationId, obj);
        }
      }
      if (null != guildId) {
        delete tmp4[tmp3];
      }
      if (null != applicationId) {
        delete tmp[tmp2];
      }
      obj = {};
      const merged = Object.assign(obj);
      obj1 = {};
      const merged1 = Object.assign(obj1);
    } else {
      obj = { state: "error" };
      const _Date = Date;
      obj.fetchedAt = Date.now();
      obj.storefront = undefined;
      updateStorefrontFetchState(guildId, applicationId, obj);
    }
    const tmp5 = getGuildAndApplicationId(guildOrApplicationId.guildOrApplicationId);
  },
  SET_SOCIAL_LAYER_STOREFRONT_STATE: function handleSetSocialLayerStorefrontState(activePage) {
    obj[activePage.applicationId] = { activePage: activePage.pageIndex, activeSkuId: activePage.skuId };
    obj = {};
    const merged = Object.assign(obj);
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function handleSocialLayerStorefrontAnnouncementFetchStart(guildId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[guildId.guildId] = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function handleSocialLayerStorefrontAnnouncementFetchSuccess(arg0) {
    let announcement;
    let guildId;
    const obj = {};
    ({ guildId, announcement } = arg0);
    const merged = Object.assign(obj);
    obj[guildId] = { state: "success", announcement };
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function handleSocialLayerStorefrontAnnouncementFetchFailure(guildId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[guildId.guildId] = { state: "error" };
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function handleStorefrontConfigFetchStart() {
    let closure_20 = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function handleStorefrontConfigFetchSuccess(config) {
    config = config.config;
    const obj = { state: "success", config, fetchedAt: Date.now() };
    const storefronts = config.storefronts;
    const set = new Set(storefronts.map((applicationId) => applicationId.applicationId));
    const storefronts1 = config.storefronts;
    const found = storefronts1.filter((guildId) => null != guildId.guildId);
    const set1 = new Set(found.map((guildId) => guildId.guildId));
    const storefronts2 = config.storefronts;
    let closure_22 = storefronts2.reduce((arg0, guildId) => {
      if (null != guildId.guildId) {
        arg0[guildId.guildId] = guildId.applicationId;
      }
      return arg0;
    }, {});
    const storefronts3 = config.storefronts;
    let closure_23 = storefronts3.reduce((arg0, guildId) => {
      if (null != guildId.guildId) {
        ({ guildId: arg0[guildId.applicationId], guildId: arg0[guildId.gameId] } = guildId);
      }
      return arg0;
    }, {});
    const storefronts4 = config.storefronts;
    let closure_24 = storefronts4.reduce((arg0, arg1) => {
      ({ applicationId: arg0[arg1.gameId], applicationId: arg0[arg1.applicationId] } = arg1);
      return arg0;
    }, {});
    const storefronts5 = config.storefronts;
    let closure_25 = storefronts5.reduce((arg0, applicationId) => {
      arg0[applicationId.applicationId] = applicationId;
      return arg0;
    }, {});
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: function handleStorefrontConfigFetchFailure() {
    const obj = { state: "error", fetchedAt: Date.now() };
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: function handleSKUPurchaseEligibilityCheckStart(skuId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[skuId.skuId] = { state: "checking" };
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: function handleSKUPurchaseEligibilityCheckCreate(arg0) {
    let interactionId;
    let skuId;
    ({ skuId, interactionId } = arg0);
    let state;
    if (null != obj[skuId]) {
      state = tmp.state;
    }
    if ("checking" !== state) {
      return tmp3;
    } else if (set.has(interactionId)) {
      set.delete(interactionId);
      obj = {};
      const merged = Object.assign(obj);
      obj[skuId] = { state: "error", reason: "interaction_failure" };
    } else {
      closure_18[interactionId] = skuId;
    }
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: function handleSKUPurchaseEligibilityCheckFailure(httpStatus) {
    let reason;
    let skuId;
    ({ skuId, reason } = httpStatus);
    if (reason === undefined) {
      reason = "http_error";
    }
    let state;
    if (null != obj[skuId]) {
      state = tmp.state;
    }
    if ("checking" !== state) {
      if ("interaction_deadline" === reason) {
        return false;
      }
    }
    obj = {};
    const merged = Object.assign(obj);
    obj = { state: "error", reason, httpStatus: httpStatus.httpStatus };
    obj[skuId] = obj;
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: function handleSKUPurchaseEligibilityResponse(arg0) {
    let eligible;
    let ineligibleReason;
    let recipientId;
    let skuId;
    ({ skuId, recipientId, eligible, ineligibleReason } = arg0);
    if (id.getId() !== recipientId) {
      return false;
    } else {
      let obj = {};
      const merged = Object.assign(obj);
      if (eligible) {
        obj = { state: "eligible" };
      } else {
        obj = { state: "ineligible", ineligibleReason };
      }
      obj[skuId] = obj;
    }
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD: function handleSocialLayerStorefrontEntriesLoad(applicationId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS: function handleSocialLayerStorefrontEntriesLoadSuccess(arg0) {
    let applicationId;
    let entries;
    let obj = {};
    ({ applicationId, entries } = arg0);
    const merged = Object.assign(obj);
    obj = { state: "fetched", entries, fetchedAt: Date.now() };
    obj[applicationId] = obj;
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE: function handleSocialLayerStorefrontEntriesLoadFailure(applicationId) {
    let obj = {};
    const merged = Object.assign(obj);
    obj = { state: "error", fetchedAt: Date.now() };
    obj[applicationId.applicationId] = obj;
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD: function handleSocialLayerStorefrontByIdLoad(storefrontId) {
    storefrontId = storefrontId.storefrontId;
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj[storefrontId]);
    obj["storefront"] = null;
    obj["state"] = "loading";
    obj["fetchedAt"] = null;
    obj[storefrontId] = obj;
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS: function handleSocialLayerStorefrontByIdLoadSuccess(storefront) {
    storefront = storefront.storefront;
    let obj = {};
    const merged = Object.assign(obj);
    obj = { storefront, state: "fetched", fetchedAt: Date.now() };
    obj[storefront.storefrontId] = obj;
    if (null != storefront.assets) {
      obj = {};
      const merged1 = Object.assign(obj);
      const merged2 = Object.assign(storefront.assets);
    }
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE: function handleSocialLayerStorefrontByIdLoadFailure(storefrontId) {
    let obj = {};
    const merged = Object.assign(obj);
    obj = { storefront: null, state: "error", fetchedAt: Date.now() };
    obj[storefrontId.storefrontId] = obj;
  },
  SOCIAL_LAYER_STOREFRONT_SET_PREVIEW: function handleSocialLayerStorefrontSetPreview(storefrontId) {
    storefrontId = storefrontId.storefrontId;
    const obj = {};
    const merged = Object.assign(obj);
    if (null == storefrontId) {
      delete tmp[tmp2];
    } else {
      obj[storefrontId.applicationId] = storefrontId;
    }
  },
  SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_SUCCESS: function handleLaunchAnnouncementFetchSuccess(config) {
    config = config.config;
  },
  SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_FAILURE: function handleLaunchAnnouncementFetchFailure() {
    let c27 = null;
  }
});
let result = set.fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontStore.tsx");

export default tmp5;
