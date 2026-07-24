// Module ID: 7129
// Function ID: 57307
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1316, 7130, 7132, 7131, 566, 686, 2]

// Module 7129 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
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
  const values = Object.values(dependencyMap[require(undefined, 7131) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]);
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
  let c18 = tmp2;
}
let closure_10 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
let c11 = null;
let c12 = false;
let c13 = null;
let c14 = false;
let c15 = null;
let c16 = null;
let closure_17 = createEmptyPromotionsByType();
let c18 = null;
let map = new Map();
let closure_20 = [];
let c21 = false;
let tmp3 = ((PersistedStore) => {
  class PromotionsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, PromotionsStore);
      obj = outer1_5(PromotionsStore);
      tmp2 = outer1_4;
      if (outer1_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PromotionsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        const outer1_10 = arg0;
      }
      self.waitFor(outer1_7);
      const items = [outer1_7];
      self.syncWith(items, outer1_25);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "outboundPromotions",
    get() {
      return Object.values(outer1_17[PromotionsStore(undefined, outer1_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND]);
    }
  };
  items[1] = obj;
  obj = {
    key: "outboundRecurringPromotions",
    get() {
      return Object.values(outer1_17[PromotionsStore(undefined, outer1_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "lastSeenOutboundPromotionStartDate",
    get() {
      return outer1_10.lastSeenOutboundPromotionStartDate;
    }
  };
  items[4] = {
    key: "lastDismissedOutboundPromotionStartDate",
    get() {
      return outer1_18;
    }
  };
  items[5] = {
    key: "lastFetchedActivePromotions",
    get() {
      return outer1_15;
    }
  };
  items[6] = {
    key: "lastFetchedActivePromotionsLocale",
    get() {
      return outer1_16;
    }
  };
  items[7] = {
    key: "isFetchingActivePromotions",
    get() {
      return outer1_14;
    }
  };
  items[8] = {
    key: "hasFetchedConsumedInboundPromotionId",
    get() {
      return outer1_10.hasFetchedConsumedInboundPromotionId;
    }
  };
  items[9] = {
    key: "consumedInboundPromotionId",
    get() {
      return outer1_10.consumedInboundPromotionId;
    }
  };
  items[10] = {
    key: "bogoPromotion",
    get() {
      return outer1_11;
    }
  };
  items[11] = {
    key: "isFetchingActiveBogoPromotion",
    get() {
      return outer1_12;
    }
  };
  items[12] = {
    key: "lastFetchedActiveBogoPromotion",
    get() {
      return outer1_13;
    }
  };
  items[13] = {
    key: "promotionsByType",
    get() {
      return outer1_17;
    }
  };
  items[14] = {
    key: "getPromotionByTypeAndId",
    value(arg0, arg1) {
      let tmp2;
      if (null != outer1_17[arg0]) {
        tmp2 = tmp[arg1];
      }
      return tmp2;
    }
  };
  items[15] = {
    key: "getPromotionByTypeAndKey",
    value(arg0, arg1) {
      let closure_0 = arg1;
      const values = Object.values(outer1_17[arg0]);
      return values.find((promotionKey) => promotionKey.promotionKey === closure_0);
    }
  };
  items[16] = {
    key: "getState",
    value() {
      return outer1_10;
    }
  };
  items[17] = {
    key: "getMarketingComponentByType",
    value(arg0) {
      const value = outer1_19.get(arg0);
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
      let closure_0 = arg0;
      let values = Object.values(outer1_17);
      return values.some((arg0) => {
        const values = Object.values(arg0);
        return values.some((promotionKey) => promotionKey.promotionKey === outer1_0);
      });
    }
  };
  items[19] = {
    key: "getPromotionsByPartner",
    value(arg0) {
      let closure_0 = arg0;
      const obj = {};
      let values = Object.values(outer1_17[PromotionsStore(undefined, outer1_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND]);
      obj.oneTime = values.filter((partnerId) => partnerId.partnerId === closure_0);
      values = Object.values(outer1_17[PromotionsStore(undefined, outer1_1[8]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
      obj.recurring = values.filter((partnerId) => partnerId.partnerId === closure_0);
      return obj;
    }
  };
  items[20] = {
    key: "getGiftPromotion",
    value() {
      const tmp = outer1_17[PromotionsStore(undefined, outer1_1[8]).PromotionTypes.GIFT_PROMOTION];
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
      const tmp = outer1_17[PromotionsStore(undefined, outer1_1[8]).PromotionTypes.MARKETING_MOMENT];
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
      const date = new Date();
      const values = Object.values(outer1_17[PromotionsStore(undefined, outer1_1[8]).PromotionTypes.MARKETING_MOMENT]);
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
      return outer1_20;
    }
  };
  items[26] = {
    key: "claimedOutboundPromotionCodesLoaded",
    get() {
      return outer1_21;
    }
  };
  return callback(PromotionsStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "PromotionsStore";
tmp3.persistKey = "PromotionsPersistedStore";
let items = [
  (arg0) => {
    delete tmp.bogoPromotion;
  }
];
tmp3.migrations = items;
tmp3 = new tmp3(require("dispatcher"), {
  ACTIVE_PROMOTIONS_FETCH_SUCCESS: function handleActivePromotionsFetchSuccess(promotions) {
    promotions = promotions.promotions;
    let closure_17 = createEmptyPromotionsByType();
    const map = new Map();
    let item = promotions.forEach((id) => {
      table[id.promotion_type][id.id] = outer1_8.createFromServer(id);
      const marketing_components = id.marketing_components;
      if (null != marketing_components) {
        const item = marketing_components.forEach((component_type) => {
          const result = map.set(component_type.component_type, outer2_9.createFromServer(component_type));
        });
      }
    });
    let closure_15 = Date.now();
    let c14 = false;
    if (!obj.hasFetchedConsumedInboundPromotionId) {
      obj.hasFetchedConsumedInboundPromotionId = true;
      obj.consumedInboundPromotionId = promotions.consumedInboundPromotionId;
    }
  },
  ACTIVE_PROMOTIONS_FETCH: function handleActivePromotionsFetchStart(locale) {
    let c14 = true;
    locale = locale.locale;
  },
  ACTIVE_PROMOTIONS_FETCH_FAIL: function handleActivePromotionsFetchFail() {
    let closure_17 = createEmptyPromotionsByType();
    const map = new Map();
    let c14 = false;
  },
  ACTIVE_PROMOTIONS_CLEAR: function handleActivePromotionsClear() {
    let closure_17 = createEmptyPromotionsByType();
    const map = new Map();
    let c11 = null;
    let c14 = false;
    let closure_15 = Date.now();
  },
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function handleActiveBogoPromotionFetchSuccess(activePromotion) {
    let endDate;
    let startDate;
    activePromotion = activePromotion.activePromotion;
    const obj = { id: activePromotion.id, startDate: startDate.toISOString(), endDate: endDate.toISOString() };
    ({ startDate, endDate } = activePromotion);
    let closure_13 = Date.now();
    let c12 = false;
  },
  ACTIVE_BOGO_PROMOTION_FETCH: function handleActiveBogoPromotionFetchStart() {
    let c12 = true;
  },
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function handleActiveBogoPromotionFetchFail() {
    let c11 = null;
    let c12 = false;
  },
  OUTBOUND_PROMOTION_NOTICE_DISMISS: function handleDismissOutboundPromotionNotice() {
    if (0 === Object.values(dependencyMap[require(undefined, 7131) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        let c18 = tmp2;
      }
    }
  },
  OUTBOUND_PROMOTIONS_SEEN: function handleOutboundPromotionsSeen() {
    if (0 === Object.values(dependencyMap[require(undefined, 7131) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        let c18 = tmp2;
        closure_10.lastSeenOutboundPromotionStartDate = tmp2;
      }
    }
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function handleClaimedOutboundPromotionCodesFetchSuccess(claimedOutboundPromotionCodes) {
    let closure_20 = claimedOutboundPromotionCodes.claimedOutboundPromotionCodes;
    let c21 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function handleClaimedOutboundPromotionCodesFetchFail() {
    let closure_20 = [];
    let c21 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function handleClaimedOutboundPromotionCodeAdd(claimedOutboundPromotionCode) {
    claimedOutboundPromotionCode = claimedOutboundPromotionCode.claimedOutboundPromotionCode;
    if (items.some((promotion) => promotion.promotion.id === claimedOutboundPromotionCode.promotion.id)) {
      return false;
    } else {
      items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      items[arraySpreadResult] = claimedOutboundPromotionCode;
      const sum = arraySpreadResult + 1;
    }
  },
  LOGOUT: function handleLogout() {
    let closure_10 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
    let c14 = false;
    let c15 = null;
    let c12 = false;
    let c13 = null;
    let closure_17 = createEmptyPromotionsByType();
    let c11 = null;
    map.clear();
    let closure_20 = [];
    let c21 = false;
  },
  PREMIUM_MARKETING_PREVIEW: function handlePremiumMarketingPreview(data) {
    data = data.data;
    const fromServer = closure_9.createFromServer(data);
    const result = map.set(fromServer.componentType, fromServer);
    if (null != data.promotion) {
      dependencyMap[data.promotion.promotion_type][data.promotion.id] = closure_8.createFromServer(data.promotion);
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/promotions/PromotionsStore.tsx");

export default tmp3;
