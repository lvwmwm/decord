// Module ID: 8363
// Function ID: 8364
// Name: AdDeliveryStore
// Dependencies: [717, 1088, 8364, 559, 6878, 6877, 8365, 504, 572, 2]

// Module 8363 (AdDeliveryStore)
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1088 */;
import AdPlacement from "AdPlacement" /* 6877 */;
import AdDecisionUtils from "AdDecisionUtils" /* 8364 */;
import QuestServerUtils from "QuestServerUtils" /* 8365 */;
import _toArray from "_toArray" /* 717 */;
import size from "module_2" /* 2 */;

let tmp;
const AdCreativeType = tmp(6878);
function updateQuestSeriesRewardUserStatus(fn, fn2) {
  let obj3;
  let obj4;
  let obj5;
  const QUEST_HOME_BANNER_DESKTOP = AdPlacement.AdPlacement.QUEST_HOME_BANNER_DESKTOP;
  let items1 = map1.get(QUEST_HOME_BANNER_DESKTOP);
  if (items1 == null) {
    items1 = [];
  }
  const arr2 = _toArray(items1);
  const first = arr2[0];
  const substr = arr2.slice(1);
  let creative;
  if (first != null) {
    creative = first.creative;
  }
  let type;
  if (creative != null) {
    type = creative.type;
  }
  if (type !== AdCreativeType.AdCreativeType.QUEST_HOME_HERO) {
    return false;
  } else {
    const questHomeHero = creative.questHomeHero;
    const questSeries = questHomeHero.questSeries;
    if (null != questSeries) {
      if (fn(questSeries.rewardQuest, questHomeHero)) {
        const obj = { userStatus: fn2(questSeries.rewardQuest) };
        const merged = Object.assign(questSeries.rewardQuest);
        const _Map = Map;
        const self = this;
        const self2 = this;
        const obj2 = { creative: obj3 };
        set = new Map(map1).set;
        const merged1 = Object.assign(first);
        obj3 = { questHomeHero: obj4 };
        const merged2 = Object.assign(creative);
        obj4 = { questSeries: obj5 };
        const merged3 = Object.assign(questHomeHero);
        obj5 = { rewardQuest: obj };
        const merged4 = Object.assign(questSeries);
        const items = [obj2];
        HermesBuiltin.arraySpread(items, substr, 1);
        const result = set(QUEST_HOME_BANNER_DESKTOP, items);
        return true;
      }
    }
    return false;
  }
}
let closure_10 = [];
let closure_11 = 30 * DurationsDefault.Millis.SECOND;
let closure_12 = 10 * DurationsDefault.Millis.MINUTE;
new Set();
new Map();
let closure_4 = 0;
let map1 = new Map();
let map2 = new Map();
let map = map2;
const map3 = new Map();
const map4 = new Map();
let closure_13 = null;
let c14 = false;
let set = new Set();
new Set();
const Store = get_initializedDefault.Store;
class AdDeliveryStore extends Store {
  isFetchingAdToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP) {
    let flag;
    const obj = map;
    if (map != null) {
      flag = obj.get(QUEST_HOME_BANNER_DESKTOP);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  canRefreshAd(QUEST_HOME_BANNER_DESKTOP) {
    let value;
    const obj = map4;
    if (map4 != null) {
      value = obj.get(QUEST_HOME_BANNER_DESKTOP);
    }
    let tmp3 = null == value;
    if (!tmp3) {
      const _Date = Date;
      tmp3 = Date.now() >= value;
    }
    return tmp3;
  }
  getAdDecisionsForPlacement(QUEST_HOME_BANNER_DESKTOP) {
    let value = map1.get(QUEST_HOME_BANNER_DESKTOP);
    if (value == null) {
      value = closure_10;
    }
    return value;
  }
  getNoFillForPlacement(arg0) {
    const value = map.get(arg0);
    let tmp2 = null;
    if (null != value) {
      const _Date = Date;
      const sum = value.fetchedAt + value.ttlMillis;
      let tmp5 = null;
      if (sum >= Date.now()) {
        tmp5 = value;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  }
  isFetchingQuestHomeHero() {
    return c14;
  }
  getLastFetchedQuestHomeHero() {
    return closure_13;
  }
  getQuestHomeHero() {
    const first = this.getAdDecisionsForPlacement(AdPlacement.AdPlacement.QUEST_HOME_BANNER_DESKTOP)[0];
    let creative;
    if (first != null) {
      creative = first.creative;
    }
    let type;
    if (creative != null) {
      type = creative.type;
    }
    let questHomeHero = null;
    if (type === AdCreativeType.AdCreativeType.QUEST_HOME_HERO) {
      questHomeHero = creative.questHomeHero;
    }
    return questHomeHero;
  }
  isClaimingQuestSeriesReward(arg0) {
    return set.has(arg0);
  }
}
const prototype = AdDeliveryStore.prototype;
Object.defineProperty(prototype, "lastFetchedQuestToDeliver", {
  get: function lastFetchedQuestToDeliver() {
    return closure_4;
  },
  set: undefined
});
Object.defineProperty(prototype, "deliveryAdDecisionByPlacement", {
  get: function deliveryAdDecisionByPlacement() {
    return map1;
  },
  set: undefined
});
AdDeliveryStore.displayName = "AdDeliveryStore";
let obj = {
  LOGOUT: function handleLogout() {
    new Map();
    closure_4 = 0;
    new Map();
    new Map();
    new Map();
    new Map();
    new Map();
    closure_13 = null;
    c14 = false;
    new Set();
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: function handleFetchQuestToDeliverBegin(placement) {
    placement = placement.placement;
    map = new Map(map);
    const result = map.set(placement, true);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(arg0) {
    let adContext;
    let adDecisionData;
    let creative;
    let fetchedAt;
    let isNoFill;
    let metadataSealed;
    let noFillAdContentId;
    let obj3;
    let obj6;
    let placement;
    let provenanceMetadataSealed;
    let quest;
    let responseTtlSeconds;
    let trafficMetadataSealed;
    ({ creative, noFillAdContentId, placement, adDecisionData, responseTtlSeconds, metadataSealed, trafficMetadataSealed, fetchedAt } = arg0);
    ({ quest, isNoFill, adContext, provenanceMetadataSealed } = arg0);
    closure_4 = Date.now();
    map = new Map(map);
    const result = map.set(placement, false);
    map1 = new Map(map);
    map = map1;
    if (true === isNoFill) {
      if (null == quest) {
        let decision_id;
        if (adDecisionData != null) {
          decision_id = adDecisionData.decision_id;
        }
        if (null != decision_id) {
          const obj = { decisionId: adDecisionData.decision_id, adContentId: noFillAdContentId, metadataSealed, trafficMetadataSealed, fetchedAt, ttlMillis: obj3.resolveResponseTtl(responseTtlSeconds) };
          set = map.set;
          obj3 = AdDecisionUtils;
          const result1 = set(placement, obj);
        }
        const value = map3.get(placement);
        if (value != null) {
          value.succeed();
        }
        map4.delete(placement);
        if (creative == null) {
          creative = null;
        }
        const obj2 = { creative, fetchedAt, ttlMillis: obj6.resolveResponseTtl(responseTtlSeconds), adDecisionData, adContext, metadataSealed, trafficMetadataSealed, provenanceMetadataSealed };
        const _Map = Map;
        const self = this;
        const self2 = this;
        obj6 = AdDecisionUtils;
        const map2 = new Map(map1);
        map1 = map2;
        const items = [obj2];
        const result2 = map2.set(placement, items);
      }
    }
    map.delete(placement);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function handleFetchQuestToDeliverFailure(placement) {
    placement = placement.placement;
    map = new Map(map);
    map.delete(placement);
    closure_4 = Date.now();
    map1 = new Map(map);
    map = map1;
    const result = map1.set(placement, false);
    let value = map3.get(placement);
    if (null == value) {
      const self = this;
      const self2 = this;
      const tmp7 = new BackoffDefault(closure_11, closure_12);
      const result1 = map3.set(placement, tmp7);
      value = tmp7;
    }
    set = map4.set;
    const timestamp = Date.now();
    const result2 = set(placement, timestamp + value.fail());
  },
  QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER: function handleClearExpiredQuestToDeliver(arg0) {
    let fetchedAt;
    let items;
    let obj2;
    let placement;
    let refetchOnFocus;
    let responseTtlSeconds;
    ({ placement, responseTtlSeconds, fetchedAt, refetchOnFocus } = arg0);
    map = new Map(map1);
    map1 = map;
    set = map.set;
    if (refetchOnFocus) {
      items = [];
    } else {
      const obj = { creative: null, fetchedAt, ttlMillis: obj2.resolveResponseTtl(responseTtlSeconds) };
      items = [obj];
      obj2 = AdDecisionUtils;
    }
    const result = set(placement, items);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: function handleFetchQuestHomeHeroBegin(placement) {
    c14 = true;
    placement = placement.placement;
    map = new Map(map);
    const result = map.set(placement, true);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function handleFetchQuestHomeHeroSuccess(fetchedAt) {
    let obj5;
    c14 = false;
    closure_13 = Date.now();
    const placement = fetchedAt.placement;
    map = new Map(map);
    const result = map.set(placement, false);
    const value = map3.get(fetchedAt.placement);
    if (value != null) {
      value.succeed();
    }
    map4.delete(fetchedAt.placement);
    let tmp4 = null;
    if (null != fetchedAt.questHomeHero) {
      tmp4 = { type: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, questHomeHero: fetchedAt.questHomeHero };
      const obj = { type: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, questHomeHero: fetchedAt.questHomeHero };
    }
    const obj2 = { creative: tmp4, fetchedAt: fetchedAt.fetchedAt, ttlMillis: obj5.resolveResponseTtl(fetchedAt.responseTtlSeconds), adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
    ({ adDecisionData: obj4.adDecisionData, adContext: obj4.adContext, metadataSealed: obj4.metadataSealed, trafficMetadataSealed: obj4.trafficMetadataSealed, provenanceMetadataSealed: obj4.provenanceMetadataSealed } = fetchedAt);
    obj5 = AdDecisionUtils;
    map1 = new Map(map1);
    const items = [obj2];
    const result1 = map1.set(fetchedAt.placement, items);
  },
  QUESTS_FETCH_QUEST_HOME_HERO_FAILURE: function handleFetchQuestHomeHeroFailure(placement) {
    placement = placement.placement;
    c14 = false;
    map = new Map(map);
    const result = map.set(placement, false);
    let value = map3.get(placement);
    if (null == value) {
      const self = this;
      const self2 = this;
      const tmp6 = new BackoffDefault(closure_11, closure_12);
      const result1 = map3.set(placement, tmp6);
      value = tmp6;
    }
    set = map4.set;
    const timestamp = Date.now();
    const result2 = set(placement, timestamp + value.fail());
  },
  QUEST_SERIES_CLAIM_REWARD_BEGIN: function handleQuestSeriesClaimRewardBegin(heroId) {
    heroId = heroId.heroId;
    set = new Set(set);
    set.add(heroId);
  },
  QUEST_SERIES_CLAIM_REWARD_SUCCESS: function handleQuestSeriesClaimRewardSuccess(heroId) {
    heroId = heroId.heroId;
    const entitlements = heroId.entitlements;
    set = new Set(set);
    set.delete(heroId);
    const tmp2 = updateQuestSeriesRewardUserStatus((arg0, id) => id.id === heroId && null != tmp, (userStatus) => {
      userStatus = userStatus.userStatus;
      let tmp = null;
      if (null != userStatus) {
        const obj = { claimedAt: entitlements.claimedAt };
        const merged = Object.assign(userStatus);
        tmp = obj;
      }
      return tmp;
    });
  },
  QUEST_SERIES_CLAIM_REWARD_FAILURE: function handleQuestSeriesClaimRewardFailure(heroId) {
    heroId = heroId.heroId;
    set = new Set(set);
    set.delete(heroId);
  },
  QUESTS_USER_STATUS_UPDATE: function handleQuestUserStatusUpdate(user_status) {
    user_status = user_status.user_status;
    return updateQuestSeriesRewardUserStatus((id) => id.id === user_status.quest_id, () => {
      const obj = QuestServerUtils;
      return obj.questUserStatusFromServer(user_status);
    });
  }
};
const adDeliveryStore = new AdDeliveryStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/ads/AdDeliveryStore.tsx");

export default adDeliveryStore;
