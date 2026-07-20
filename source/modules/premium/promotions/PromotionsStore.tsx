// Module ID: 7120
// Function ID: 57226
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7120 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createEmptyPromotionsByType() {
  return { [closure_0(closure_1[8]).PromotionTypes.THIRD_PARTY]: {}, [closure_0(closure_1[8]).PromotionTypes.BOGO]: {}, [closure_0(closure_1[8]).PromotionTypes.THIRD_PARTY_DIRECT_FULFILLMENT]: {}, [closure_0(closure_1[8]).PromotionTypes.MARKETING_MOMENT]: {}, [closure_0(closure_1[8]).PromotionTypes.THIRD_PARTY_INBOUND]: {}, [closure_0(closure_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND]: {}, [closure_0(closure_1[8]).PromotionTypes.GIFT_PROMOTION]: {}, [closure_0(closure_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]: {} };
}
function getLatestActiveOutboundPromotionStartDate() {
  const values = Object.values(closure_17[closure_0(undefined, closure_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND]);
  let num = 0;
  let startDate = null;
  let tmp2 = null;
  if (0 < values.length) {
    do {
      let tmp3 = values[num];
      let tmp4 = null == startDate || tmp3.startDate > startDate;
      if (tmp4) {
        startDate = tmp3.startDate;
      }
      num = num + 1;
      tmp2 = startDate;
    } while (num < values.length);
  }
  let toISOStringResult;
  if (null != tmp2) {
    toISOStringResult = tmp2.toISOString();
  }
  let tmp6 = null;
  if (null != toISOStringResult) {
    tmp6 = toISOStringResult;
  }
  return tmp6;
}
function initializeFromUserSettings() {
  const userContent = settings.settings.userContent;
  let value;
  if (null != userContent) {
    if (null != userContent.lastDismissedOutboundPromotionStartDate) {
      value = iter.value;
    }
  }
  let tmp2 = null;
  if (null != value) {
    tmp2 = value;
  }
  let closure_18 = tmp2;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = { 0: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044245640687327334, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001732031649845995, -9223372036854775808: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001385258042816805 };
let closure_11 = null;
let closure_12 = false;
let closure_13 = null;
let closure_14 = false;
let closure_15 = null;
let closure_16 = null;
let closure_17 = createEmptyPromotionsByType();
let closure_18 = null;
const map = new Map();
let closure_20 = [];
let closure_21 = false;
let tmp3 = (PersistedStore) => {
  class PromotionsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, PromotionsStore);
      obj = closure_5(PromotionsStore);
      tmp2 = closure_4;
      if (closure_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PromotionsStore;
  callback2(PromotionsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      self.waitFor(closure_7);
      const items = [closure_7];
      self.syncWith(items, closure_25);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "outboundPromotions",
    get() {
      return Object.values(closure_17[closure_0(undefined, closure_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND]);
    }
  };
  items[1] = obj;
  obj = {
    key: "outboundRecurringPromotions",
    get() {
      return Object.values(closure_17[closure_0(undefined, closure_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lastSeenOutboundPromotionStartDate",
    get() {
      return closure_10.lastSeenOutboundPromotionStartDate;
    }
  };
  items[4] = {
    key: "lastDismissedOutboundPromotionStartDate",
    get() {
      return closure_18;
    }
  };
  items[5] = {
    key: "lastFetchedActivePromotions",
    get() {
      return closure_15;
    }
  };
  items[6] = {
    key: "lastFetchedActivePromotionsLocale",
    get() {
      return closure_16;
    }
  };
  items[7] = {
    key: "isFetchingActivePromotions",
    get() {
      return closure_14;
    }
  };
  items[8] = {
    key: "hasFetchedConsumedInboundPromotionId",
    get() {
      return closure_10.hasFetchedConsumedInboundPromotionId;
    }
  };
  items[9] = {
    key: "consumedInboundPromotionId",
    get() {
      return closure_10.consumedInboundPromotionId;
    }
  };
  items[10] = {
    key: "bogoPromotion",
    get() {
      return closure_11;
    }
  };
  items[11] = {
    key: "isFetchingActiveBogoPromotion",
    get() {
      return closure_12;
    }
  };
  items[12] = {
    key: "lastFetchedActiveBogoPromotion",
    get() {
      return closure_13;
    }
  };
  items[13] = {
    key: "promotionsByType",
    get() {
      return closure_17;
    }
  };
  items[14] = {
    key: "getPromotionByTypeAndId",
    value(arg0, arg1) {
      let tmp2;
      if (null != closure_17[arg0]) {
        tmp2 = tmp[arg1];
      }
      return tmp2;
    }
  };
  items[15] = {
    key: "getPromotionByTypeAndKey",
    value(arg0, arg1) {
      const PromotionsStore = arg1;
      const values = Object.values(closure_17[arg0]);
      return values.find((promotionKey) => promotionKey.promotionKey === arg1);
    }
  };
  items[16] = {
    key: "getState",
    value() {
      return closure_10;
    }
  };
  items[17] = {
    key: "getMarketingComponentByType",
    value(arg0) {
      const value = closure_19.get(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  items[18] = {
    key: "hasPromotion",
    value(arg0) {
      const PromotionsStore = arg0;
      const values = Object.values(closure_17);
      return values.some((arg0) => {
        const values = Object.values(arg0);
        return values.some((promotionKey) => promotionKey.promotionKey === closure_0);
      });
    }
  };
  items[19] = {
    key: "getPromotionsByPartner",
    value(arg0) {
      const PromotionsStore = arg0;
      const obj = {};
      let values = Object.values(closure_17[closure_0(undefined, closure_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND]);
      obj.oneTime = values.filter((partnerId) => partnerId.partnerId === partnerId);
      values = Object.values(closure_17[closure_0(undefined, closure_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
      obj.recurring = values.filter((partnerId) => partnerId.partnerId === partnerId);
      return obj;
    }
  };
  items[20] = {
    key: "getGiftPromotion",
    value() {
      const keys = Object.keys(tmp);
      let tmp2 = null;
      if (0 !== keys.length) {
        tmp2 = tmp[keys[0]];
      }
      return tmp2;
    }
  };
  items[21] = {
    key: "getGiftPromotionRewardSkuIds",
    value() {
      const giftPromotion = this.getGiftPromotion();
      let rewardSkuIds;
      if (null != giftPromotion) {
        rewardSkuIds = giftPromotion.rewardSkuIds;
      }
      if (null == rewardSkuIds) {
        rewardSkuIds = [];
      }
      return rewardSkuIds;
    }
  };
  items[22] = {
    key: "getMarketingMomentPromotion",
    value() {
      const keys = Object.keys(tmp);
      if (0 === keys.length) {
        return null;
      } else {
        const _Date = Date;
        const date = new Date();
        let tmp7 = null;
        if (tmp[keys[0]].endDate >= date) {
          tmp7 = tmp2;
        }
        return tmp7;
      }
    }
  };
  items[23] = {
    key: "getMarketingMomentRewardSkuIds",
    value() {
      const marketingMomentPromotion = this.getMarketingMomentPromotion();
      let rewardSkuIds;
      if (null != marketingMomentPromotion) {
        rewardSkuIds = marketingMomentPromotion.rewardSkuIds;
      }
      if (null == rewardSkuIds) {
        rewardSkuIds = [];
      }
      return rewardSkuIds;
    }
  };
  items[24] = {
    key: "getActiveBogoRewardPromotion",
    value() {
      const PromotionsStore = new Date();
      const values = Object.values(closure_17[closure_0(undefined, closure_1[8]).PromotionTypes.MARKETING_MOMENT]);
      const found = values.find((hasBogoReward) => {
        hasBogoReward = hasBogoReward.hasBogoReward;
        if (hasBogoReward) {
          hasBogoReward = hasBogoReward.endDate >= date;
        }
        return hasBogoReward;
      });
      let tmp3 = null;
      if (null != found) {
        tmp3 = found;
      }
      return tmp3;
    }
  };
  items[25] = {
    key: "claimedOutboundPromotionCodes",
    get() {
      return closure_20;
    }
  };
  items[26] = {
    key: "claimedOutboundPromotionCodesLoaded",
    get() {
      return closure_21;
    }
  };
  return callback(PromotionsStore, items);
}(importDefault(dependencyMap[9]).PersistedStore);
tmp3.displayName = "PromotionsStore";
tmp3.persistKey = "PromotionsPersistedStore";
const items = [
  (arg0) => {
    delete r1.bogoPromotion;
  }
];
tmp3.migrations = items;
tmp3 = new tmp3(importDefault(dependencyMap[10]), {
  ACTIVE_PROMOTIONS_FETCH_SUCCESS: function handleActivePromotionsFetchSuccess(promotions) {
    promotions = promotions.promotions;
    let closure_17 = createEmptyPromotionsByType();
    const map = new Map();
    const item = promotions.forEach((id) => {
      closure_17[id.promotion_type][id.id] = closure_8.createFromServer(id);
      const marketing_components = id.marketing_components;
      if (null != marketing_components) {
        const item = marketing_components.forEach((component_type) => {
          const result = closure_19.set(component_type.component_type, closure_9.createFromServer(component_type));
        });
      }
    });
    let closure_15 = Date.now();
    let closure_14 = false;
    if (!obj.hasFetchedConsumedInboundPromotionId) {
      obj.hasFetchedConsumedInboundPromotionId = true;
      obj.consumedInboundPromotionId = promotions.consumedInboundPromotionId;
    }
  },
  ACTIVE_PROMOTIONS_FETCH: function handleActivePromotionsFetchStart(locale) {
    let closure_14 = true;
    locale = locale.locale;
  },
  ACTIVE_PROMOTIONS_FETCH_FAIL: function handleActivePromotionsFetchFail() {
    let closure_17 = createEmptyPromotionsByType();
    const map = new Map();
    let closure_14 = false;
  },
  ACTIVE_PROMOTIONS_CLEAR: function handleActivePromotionsClear() {
    let closure_17 = createEmptyPromotionsByType();
    const map = new Map();
    let closure_11 = null;
    let closure_14 = false;
    let closure_15 = Date.now();
  },
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function handleActiveBogoPromotionFetchSuccess(activePromotion) {
    let endDate;
    let startDate;
    activePromotion = activePromotion.activePromotion;
    ({ startDate, endDate } = activePromotion);
    let closure_11 = { id: activePromotion.id, startDate: startDate.toISOString(), endDate: endDate.toISOString() };
    let closure_13 = Date.now();
    let closure_12 = false;
  },
  ACTIVE_BOGO_PROMOTION_FETCH: function handleActiveBogoPromotionFetchStart() {
    let closure_12 = true;
  },
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function handleActiveBogoPromotionFetchFail() {
    let closure_11 = null;
    let closure_12 = false;
  },
  OUTBOUND_PROMOTION_NOTICE_DISMISS: function handleDismissOutboundPromotionNotice() {
    if (0 === Object.values(closure_17[closure_0(undefined, closure_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        let closure_18 = tmp2;
      }
    }
  },
  OUTBOUND_PROMOTIONS_SEEN: function handleOutboundPromotionsSeen() {
    if (0 === Object.values(closure_17[closure_0(undefined, closure_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        let closure_18 = tmp2;
        closure_10.lastSeenOutboundPromotionStartDate = tmp2;
      }
    }
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function handleClaimedOutboundPromotionCodesFetchSuccess(claimedOutboundPromotionCodes) {
    let closure_20 = claimedOutboundPromotionCodes.claimedOutboundPromotionCodes;
    let closure_21 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function handleClaimedOutboundPromotionCodesFetchFail() {
    let closure_20 = [];
    let closure_21 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function handleClaimedOutboundPromotionCodeAdd(claimedOutboundPromotionCode) {
    claimedOutboundPromotionCode = claimedOutboundPromotionCode.claimedOutboundPromotionCode;
    const arg1 = claimedOutboundPromotionCode;
    if (closure_20.some((promotion) => promotion.promotion.id === claimedOutboundPromotionCode.promotion.id)) {
      return false;
    } else {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(closure_20, 0);
      items[arraySpreadResult] = claimedOutboundPromotionCode;
      const sum = arraySpreadResult + 1;
      closure_20 = items;
    }
  },
  LOGOUT: function handleLogout() {
    let closure_10 = { 0: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044245640687327334, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001732031649845995, -9223372036854775808: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001385258042816805 };
    let closure_14 = false;
    let closure_15 = null;
    let closure_12 = false;
    let closure_13 = null;
    let closure_17 = createEmptyPromotionsByType();
    let closure_11 = null;
    map.clear();
    let closure_20 = [];
    let closure_21 = false;
  },
  PREMIUM_MARKETING_PREVIEW: function handlePremiumMarketingPreview(data) {
    data = data.data;
    const fromServer = closure_9.createFromServer(data);
    const result = map.set(fromServer.componentType, fromServer);
    if (null != data.promotion) {
      closure_17[data.promotion.promotion_type][data.promotion.id] = closure_8.createFromServer(data.promotion);
    }
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/premium/promotions/PromotionsStore.tsx");

export default tmp3;
