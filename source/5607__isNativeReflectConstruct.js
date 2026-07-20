// Module ID: 5607
// Function ID: 47663
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5607 (_isNativeReflectConstruct)
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
    guildId = closure_23[guildOrApplicationId.applicationId];
  }
  obj.guildId = guildId;
  if ("guild" === guildOrApplicationId.type) {
    let applicationId = closure_22[guildOrApplicationId.guildId];
  } else {
    applicationId = guildOrApplicationId.applicationId;
  }
  obj.applicationId = applicationId;
  return obj;
}
function updateStorefrontFetchState(guildId, applicationId, arg2) {
  if (null != guildId) {
    let obj = {};
    const merged = Object.assign(closure_9[guildId]);
    const merged1 = Object.assign(arg2);
    closure_9[guildId] = obj;
  }
  if (null != applicationId) {
    obj = {};
    const merged2 = Object.assign(closure_10[applicationId]);
    const merged3 = Object.assign(arg2);
    closure_10[applicationId] = obj;
  }
  obj = {};
  const merged4 = Object.assign(closure_9);
  closure_9 = obj;
  const merged5 = Object.assign(closure_10);
  closure_10 = {};
}
function handleUserSettingsStoreUpdate() {
  if (locale === closure_6.locale) {
    return false;
  } else {
    const locale = closure_6.locale;
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
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
let closure_4 = importDefault(dependencyMap[3]);
let closure_5 = importDefault(dependencyMap[4]);
let closure_6 = importDefault(dependencyMap[5]);
let closure_7 = importDefault(dependencyMap[6]);
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
const set = new Set();
let closure_20 = { state: "idle" };
const set1 = new Set();
let closure_22 = {};
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
const set2 = new Set();
let closure_27 = null;
let closure_28 = { state: "idle" };
let tmp5 = (Store) => {
  class SocialLayerStorefrontStore {
    constructor() {
      self = this;
      tmp = closure_1(this, SocialLayerStorefrontStore);
      obj = closure_4(SocialLayerStorefrontStore);
      tmp2 = closure_3;
      if (closure_29()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
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
      this.waitFor(closure_7, locale);
      const items = [locale];
      this.syncWith(items, closure_32);
      const SocialLayerStorefrontStore = locale.locale;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getStorefrontData",
    value(arg0) {
      return closure_9[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getStorefrontDataForApplicationId",
    value(arg0) {
      return closure_10[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getStorefrontFetchState",
    value(arg0) {
      let applicationId;
      let guildId;
      ({ guildId, applicationId } = callback4(arg0));
      if (null != guildId) {
        let tmp2 = closure_9[guildId];
      } else if (null != applicationId) {
        tmp2 = closure_10[applicationId];
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "getSkuAssets",
    value() {
      return closure_14;
    }
  };
  items[5] = {
    key: "getStorefrontMetadata",
    value(arg0) {
      return closure_15[arg0];
    }
  };
  items[6] = {
    key: "getStorefrontEntries",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  items[7] = {
    key: "getStorefrontById",
    value(arg0) {
      return closure_12[arg0];
    }
  };
  items[8] = {
    key: "getPreviewStorefrontId",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_13[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[9] = {
    key: "getStorefrontState",
    value(arg0) {
      if (null != arg0) {
        return closure_8[arg0];
      }
    }
  };
  items[10] = {
    key: "getAnnouncement",
    value(arg0) {
      return closure_16[arg0];
    }
  };
  items[11] = {
    key: "getConfig",
    value() {
      let config = null;
      if ("success" === closure_20.state) {
        config = closure_20.config;
      }
      return config;
    }
  };
  items[12] = {
    key: "getConfigForApplicationId",
    value(arg0) {
      return closure_25[arg0];
    }
  };
  items[13] = {
    key: "getApplicationIdFromDetectableId",
    value(arg0) {
      return closure_24[arg0];
    }
  };
  items[14] = {
    key: "getDetectableIdsToApplicationIds",
    value() {
      return closure_24;
    }
  };
  items[15] = {
    key: "getGuildIdFromApplicationId",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = closure_23[arg0];
      }
      return tmp;
    }
  };
  items[16] = {
    key: "getApplicationIdFromGuildId",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = closure_22[arg0];
      }
      return tmp;
    }
  };
  items[17] = {
    key: "getConfigFetchState",
    value() {
      return closure_20;
    }
  };
  items[18] = {
    key: "getStorefrontApplicationIds",
    value() {
      return closure_21;
    }
  };
  items[19] = {
    key: "getStorefrontGuildIds",
    value() {
      return closure_26;
    }
  };
  items[20] = {
    key: "getSKUEligibility",
    value(arg0) {
      let state;
      if (null != closure_17[arg0]) {
        state = tmp.state;
      }
      return state;
    }
  };
  items[21] = {
    key: "getSKUEligibilityEntry",
    value(arg0) {
      return closure_17[arg0];
    }
  };
  items[22] = {
    key: "getNormalizedSKUEligibility",
    value(arg0) {
      let state;
      if (null != closure_17[arg0]) {
        state = tmp.state;
      }
      return "ineligible" !== state;
    }
  };
  items[23] = {
    key: "getAnnouncementModalConfig",
    value() {
      return closure_27;
    }
  };
  items[24] = {
    key: "getStorefrontAffinity",
    value() {
      return closure_28;
    }
  };
  return callback(SocialLayerStorefrontStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp5.displayName = "SocialLayerStorefrontStore";
tmp5 = new tmp5(importDefault(dependencyMap[8]), {
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
    let closure_27 = null;
    let closure_28 = { state: "idle" };
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
    if (null == closure_17[entitlement.sku_id]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(closure_17);
      closure_17 = obj;
      const sku_id = entitlement.sku_id;
      delete r1[r0];
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(interactionId) {
    interactionId = interactionId.interactionId;
    if (null == interactionId) {
      return false;
    } else if (null == closure_18[interactionId]) {
      const _Object = Object;
      const values = Object.values(closure_17);
      if (values.some((state) => "checking" === state.state)) {
        if (set.size >= 25) {
          set.delete(set.values().next().value);
          const iter = set.values();
        }
        set.add(interactionId);
      }
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(closure_17);
      obj[tmp14] = {};
      closure_17 = obj;
      delete r1[r2];
    }
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(arg0) {
    if (null == closure_18[arg0.interactionId]) {
      return false;
    } else {
      delete r0[r1];
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
      tmp2 = null == closure_22[guildId];
    }
    if (tmp2) {
      closure_22[guildId] = storefront.applicationId;
      let obj = {};
      const merged = Object.assign(closure_22);
      closure_22 = obj;
    }
    let tmp8 = null != storefront.applicationId && null != guildId;
    if (tmp8) {
      tmp8 = null == closure_23[storefront.applicationId];
    }
    if (tmp8) {
      closure_23[storefront.applicationId] = guildId;
      obj = {};
      const merged1 = Object.assign(closure_23);
      closure_23 = obj;
    }
    obj = { state: "fetched", fetchedAt: Date.now(), storefront };
    updateStorefrontFetchState(guildId, storefront.applicationId, obj);
    if (null != storefront.assets) {
      const obj1 = {};
      const merged2 = Object.assign(closure_14);
      const merged3 = Object.assign(storefront.assets);
      closure_14 = obj1;
    }
  },
  SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function handleSocialLayerStorefrontPartialLoadSuccess(assets) {
    const merged = Object.assign(closure_14);
    const merged1 = Object.assign(assets.assets);
    closure_14 = {};
  },
  SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function handleSocialLayerStorefrontMetadataLoadSuccess(arg0) {
    let applicationId;
    let storefrontMetadata;
    const obj = {};
    ({ applicationId, storefrontMetadata } = arg0);
    const merged = Object.assign(closure_15);
    obj[applicationId] = storefrontMetadata;
    closure_15 = obj;
  },
  SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function handleSocialLayerStorefrontLoadFailure(guildOrApplicationId) {
    let applicationId;
    let guildId;
    ({ guildId, applicationId } = getGuildAndApplicationId(guildOrApplicationId.guildOrApplicationId));
    if (null != guildId) {
      let tmp2 = closure_9[guildId];
    } else if (null != applicationId) {
      tmp2 = closure_10[applicationId];
    }
    if (null == tmp2) {
      return false;
    } else if (guildOrApplicationId.eager) {
      if ("loading" === tmp2.state) {
        if (null != tmp2.storefront) {
          let obj = { state: "fetched" };
          updateStorefrontFetchState(guildId, applicationId, obj);
        }
      }
      if (null != guildId) {
        delete r5[r4];
      }
      if (null != applicationId) {
        delete r2[r3];
      }
      obj = {};
      const merged = Object.assign(closure_9);
      closure_9 = obj;
      const obj1 = {};
      const merged1 = Object.assign(closure_10);
      closure_10 = obj1;
    } else {
      obj = { state: "error" };
      const _Date = Date;
      obj.fetchedAt = Date.now();
      obj.storefront = undefined;
      updateStorefrontFetchState(guildId, applicationId, obj);
    }
    const tmp = getGuildAndApplicationId(guildOrApplicationId.guildOrApplicationId);
  },
  SET_SOCIAL_LAYER_STOREFRONT_STATE: function handleSetSocialLayerStorefrontState(activePage) {
    closure_8[activePage.applicationId] = { activePage: activePage.pageIndex, activeSkuId: activePage.skuId };
    const merged = Object.assign(closure_8);
    closure_8 = {};
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function handleSocialLayerStorefrontAnnouncementFetchStart(guildId) {
    const obj = {};
    const merged = Object.assign(closure_16);
    closure_16 = obj;
    obj[guildId.guildId] = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function handleSocialLayerStorefrontAnnouncementFetchSuccess(arg0) {
    let announcement;
    let guildId;
    const obj = {};
    ({ guildId, announcement } = arg0);
    const merged = Object.assign(closure_16);
    closure_16 = obj;
    obj[guildId] = { state: "success", announcement };
  },
  SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function handleSocialLayerStorefrontAnnouncementFetchFailure(guildId) {
    const obj = {};
    const merged = Object.assign(closure_16);
    closure_16 = obj;
    obj[guildId.guildId] = { state: "error" };
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function handleStorefrontConfigFetchStart() {
    let closure_20 = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function handleStorefrontConfigFetchSuccess(config) {
    config = config.config;
    let closure_20 = { state: "success", config, fetchedAt: Date.now() };
    const storefronts = config.storefronts;
    const obj = { state: "success", config, fetchedAt: Date.now() };
    let set1 = new Set(storefronts.map((applicationId) => applicationId.applicationId));
    const storefronts1 = config.storefronts;
    const found = storefronts1.filter((guildId) => null != guildId.guildId);
    set1 = new Set(found.map((guildId) => guildId.guildId));
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
    const announcementModalConfig = config.announcementModalConfig;
    let tmp3 = null;
    if (null != announcementModalConfig) {
      tmp3 = announcementModalConfig;
    }
    let closure_27 = tmp3;
  },
  SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: function handleStorefrontConfigFetchFailure() {
    let closure_20 = { state: "error", fetchedAt: Date.now() };
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: function handleSKUPurchaseEligibilityCheckStart(skuId) {
    const obj = {};
    const merged = Object.assign(closure_17);
    obj[skuId.skuId] = { state: "checking" };
    closure_17 = obj;
  },
  SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: function handleSKUPurchaseEligibilityCheckCreate(arg0) {
    let interactionId;
    let skuId;
    ({ skuId, interactionId } = arg0);
    let state;
    if (null != closure_17[skuId]) {
      state = tmp.state;
    }
    if ("checking" !== state) {
      return tmp3;
    } else if (set.has(interactionId)) {
      set.delete(interactionId);
      const obj = {};
      const merged = Object.assign(closure_17);
      obj[skuId] = {};
      closure_17 = obj;
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
    if (null != closure_17[skuId]) {
      state = tmp.state;
    }
    if ("checking" !== state) {
      if ("interaction_deadline" === reason) {
        return false;
      }
    }
    let obj = {};
    const merged = Object.assign(closure_17);
    obj = { state: "error", reason, httpStatus: httpStatus.httpStatus };
    obj[skuId] = obj;
    closure_17 = obj;
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
      const merged = Object.assign(closure_17);
      if (eligible) {
        obj = { state: "eligible" };
      } else {
        obj = { state: "ineligible", ineligibleReason };
      }
      obj[skuId] = obj;
      closure_17 = obj;
    }
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD: function handleSocialLayerStorefrontEntriesLoad(applicationId) {
    const obj = {};
    const merged = Object.assign(closure_11);
    obj[applicationId.applicationId] = { state: "loading" };
    closure_11 = obj;
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS: function handleSocialLayerStorefrontEntriesLoadSuccess(arg0) {
    let applicationId;
    let entries;
    let obj = {};
    ({ applicationId, entries } = arg0);
    const merged = Object.assign(closure_11);
    obj = { state: "fetched", entries, fetchedAt: Date.now() };
    obj[applicationId] = obj;
    closure_11 = obj;
  },
  SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE: function handleSocialLayerStorefrontEntriesLoadFailure(applicationId) {
    let obj = {};
    const merged = Object.assign(closure_11);
    obj = { state: "error", fetchedAt: Date.now() };
    obj[applicationId.applicationId] = obj;
    closure_11 = obj;
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD: function handleSocialLayerStorefrontByIdLoad(storefrontId) {
    storefrontId = storefrontId.storefrontId;
    let obj = {};
    const merged = Object.assign(closure_12);
    obj = {};
    const merged1 = Object.assign(closure_12[storefrontId]);
    obj["storefront"] = null;
    obj["state"] = "loading";
    obj["fetchedAt"] = null;
    obj[storefrontId] = obj;
    closure_12 = obj;
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS: function handleSocialLayerStorefrontByIdLoadSuccess(storefront) {
    storefront = storefront.storefront;
    let obj = {};
    const merged = Object.assign(closure_12);
    obj = { storefront, state: "fetched", fetchedAt: Date.now() };
    obj[storefront.storefrontId] = obj;
    closure_12 = obj;
    if (null != storefront.assets) {
      obj = {};
      const merged1 = Object.assign(closure_14);
      const merged2 = Object.assign(storefront.assets);
      closure_14 = obj;
    }
  },
  SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE: function handleSocialLayerStorefrontByIdLoadFailure(storefrontId) {
    let obj = {};
    const merged = Object.assign(closure_12);
    obj = { y: -1708064764, isArray: -1717986919, fetchedAt: Date.now() };
    obj[storefrontId.storefrontId] = obj;
    closure_12 = obj;
  },
  SOCIAL_LAYER_STOREFRONT_SET_PREVIEW: function handleSocialLayerStorefrontSetPreview(storefrontId) {
    storefrontId = storefrontId.storefrontId;
    const merged = Object.assign(closure_13);
    closure_13 = {};
    if (null == storefrontId) {
      delete r0[r1];
    } else {
      closure_13[storefrontId.applicationId] = storefrontId;
    }
  },
  SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START: function handleSocialLayerStorefrontAffinityFetchStart() {
    let closure_28 = { state: "loading" };
  },
  SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS: function handleSocialLayerStorefrontAffinityFetchSuccess(affinity) {
    let closure_28 = { state: "success", affinity: affinity.affinity };
  },
  SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_FAILURE: function handleSocialLayerStorefrontAffinityFetchFailure() {
    let closure_28 = { state: "error" };
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontStore.tsx");

export default tmp5;
