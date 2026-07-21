// Module ID: 6935
// Function ID: 55290
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: captureQuestsException, earnedDecisionIsValid, findNextUpcomingExpirationEpochMs, findQuestOrReplacement, getAdContext, getAdDecisionData, getAdMetadataSealed, getAdTrafficMetadataSealed, getIsQuestExpiredButWithinThirtyDayLookback, getQuestForPlacement, getQuestFormattedDate, hasUnclaimedReward, isBillableQuestContent, isDismissed

// Module 6935 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function isDismissible(ACTIVITY_PANEL) {
  const keys = Object.keys(closure_6);
  return keys.includes(arg1(dependencyMap[4]).QuestContent[ACTIVITY_PANEL]);
}
function isQuestConfigExpired(config) {
  const date = new Date(config.expiresAt);
  return new Date(config.expiresAt).valueOf() <= Date.now();
}
function isQuestExpired(value) {
  return isQuestConfigExpired(value.config);
}
function getQuestPlacementFromQuestContent(questContent) {
  const obj = {};
  obj[arg1(dependencyMap[4]).QuestContent.QUEST_BAR] = arg1(dependencyMap[4]).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
  obj[arg1(dependencyMap[4]).QuestContent.QUEST_BAR_V2] = arg1(dependencyMap[4]).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
  obj[arg1(dependencyMap[4]).QuestContent.QUEST_BAR_MOBILE] = arg1(dependencyMap[4]).AdPlacement.MOBILE_HOME_DOCK_AREA;
  obj[arg1(dependencyMap[4]).QuestContent.QUEST_HOME_HERO] = arg1(dependencyMap[4]).AdPlacement.QUEST_HOME_BANNER_DESKTOP;
  obj[arg1(dependencyMap[4]).QuestContent.QUEST_HOME_HERO_SHELF] = arg1(dependencyMap[4]).AdPlacement.QUEST_HOME_BANNER_DESKTOP;
  obj[arg1(dependencyMap[4]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL] = arg1(dependencyMap[4]).AdPlacement.QUEST_HOME_MOBILE_CAROUSEL;
  obj[arg1(dependencyMap[4]).QuestContent.VIDEO_MODAL_MOBILE] = arg1(dependencyMap[4]).AdPlacement.VIDEO_MODAL_MOBILE;
  return obj[questContent];
}
function mapQuestAdDecision(value) {
  return { questId: value.questId, adCreativeId: value.adCreativeId, adDecisionData: value.adDecisionData, adContext: value.adContext, metadataSealed: value.metadataSealed, trafficMetadataSealed: value.trafficMetadataSealed };
}
function getQuestDeliveryDataForPlacement(arg0, adContentId) {
  if (arg0 === adContentId(dependencyMap[4]).AdPlacement.QUEST_HOME_MOBILE_CAROUSEL) {
    let tmp3 = null;
    if (null != adContentId) {
      const adDecisionByPlacementAndAdCreativeId = adDecisionByPlacementAndAdCreativeId.getAdDecisionByPlacementAndAdCreativeId(arg0, adContentId);
      let tmp7 = null;
      if (null != adDecisionByPlacementAndAdCreativeId) {
        tmp7 = mapQuestAdDecision(adDecisionByPlacementAndAdCreativeId);
      }
      tmp3 = tmp7;
    }
  } else {
    tmp3 = null;
  }
  if (null != tmp3) {
    return tmp3;
  } else {
    let obj = { location: "getQuestDeliveryDataForPlacement" };
    const questAdDecisionByPlacement = quest.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(arg0);
    if (arg0 === adContentId(dependencyMap[4]).AdPlacement.QUEST_HOME_BANNER_DESKTOP) {
      if (null != value) {
        return mapQuestAdDecision(value);
      }
    }
    if (obj2.getConfig(obj).enableNewRequestBehavior) {
      let tmp12 = null;
      if (null != value) {
        tmp12 = mapQuestAdDecision(value);
      }
      return tmp12;
    } else {
      const questToDeliverForPlacement = quest.questToDeliverForPlacement;
      value = questToDeliverForPlacement.get(arg0);
      let tmp11 = null;
      if (null != value) {
        obj = { questId: value.quest.id, adCreativeId: value.quest.id };
        ({ adDecisionData: obj.adDecisionData, adContext: obj.adContext, metadataSealed: obj.metadataSealed, trafficMetadataSealed: obj.trafficMetadataSealed } = value);
        tmp11 = obj;
      }
      return tmp11;
    }
    const obj2 = importDefault(dependencyMap[6]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ DismissibleQuestContentFlags: closure_6, BILLABLE_PLACEMENTS: closure_7, EMPTY_AD_DECISION_DATA: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/utils/QuestDataUtils.tsx");

export const THIRTY_DAYS_MS = 2592000000;
export const earnedDecisionIsValid = function earnedDecisionIsValid(value) {
  let tmp = null != value;
  if (tmp) {
    const _Date = Date;
    const sum = value.fetchedAt + value.ttlMillis;
    tmp = sum >= Date.now();
  }
  return tmp;
};
export const findQuestOrReplacement = function findQuestOrReplacement(scrollToQuestId, quests, excludedQuests) {
  let map = quests;
  if (Array.isArray(quests)) {
    const _Map = Map;
    map = new Map(quests.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }
  let map1 = excludedQuests;
  if (Array.isArray(excludedQuests)) {
    const _Map2 = Map;
    map1 = new Map(excludedQuests.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }
  let value = map.get(scrollToQuestId);
  if (null != value) {
    return value;
  } else {
    value = map1.get(scrollToQuestId);
    let replacementId;
    if (null != value) {
      replacementId = value.replacementId;
    }
    let value1;
    if (null != replacementId) {
      value1 = map.get(replacementId);
    }
    return value1;
  }
};
export { isDismissible };
export const isDismissed = function isDismissed(userStatus, ACTIVITY_PANEL) {
  if (isDismissible(ACTIVITY_PANEL)) {
    return ACTIVITY_PANEL(dependencyMap[5]).hasFlag(userStatus.dismissedQuestContent, closure_6[closure_0(undefined, closure_2[4]).QuestContent[ACTIVITY_PANEL]]);
  } else {
    return false;
  }
};
export { isQuestConfigExpired };
export { isQuestExpired };
export const getIsQuestExpiredButWithinThirtyDayLookback = function getIsQuestExpiredButWithinThirtyDayLookback(quest) {
  if (isQuestExpired(quest)) {
    const _Date = Date;
    const _Date2 = Date;
    const diff = Date.now() - 2592000000;
    const date = new Date(quest.config.expiresAt);
    return null != quest.config.expiresAt && date.valueOf() > diff;
  } else {
    return false;
  }
};
export const findNextUpcomingExpirationEpochMs = function findNextUpcomingExpirationEpochMs(arg0) {
  let iter3;
  const timestamp = Date.now();
  const tmp2 = _createForOfIteratorHelperLoose(arg0);
  const iter = tmp2();
  let iter2 = iter;
  let tmp3 = null;
  let tmp4 = null;
  if (!iter.done) {
    do {
      let _Date = Date;
      let tmp5 = new.target;
      let tmp6 = new.target;
      let date = new Date(iter2.value.config.expiresAt);
      let tmp7 = date;
      let valueOfResult = date.valueOf();
      let tmp9 = tmp3;
      if (valueOfResult > timestamp) {
        let tmp10 = null == tmp3 || valueOfResult < tmp3;
        if (tmp10) {
          tmp3 = valueOfResult;
        }
        tmp9 = tmp3;
      }
      iter3 = tmp2();
      tmp3 = tmp9;
      iter2 = iter3;
      tmp4 = tmp9;
    } while (!iter3.done);
  }
  return tmp4;
};
export const hasUnclaimedReward = function hasUnclaimedReward(userStatus) {
  return null != userStatus && null != userStatus.completedAt && null == userStatus.claimedAt;
};
export const getQuestFormattedDate = function getQuestFormattedDate(expiresAtPremium) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const obj = { dateStyle: "short" };
    tmp = obj;
  }
  let str2 = "";
  if (null != expiresAtPremium) {
    const _Date = Date;
    const date = new Date(expiresAtPremium);
    str2 = date.toLocaleDateString(locale.locale, tmp);
  }
  return str2;
};
export const getQuestForPlacement = function getQuestForPlacement(quests, questToDeliverForPlacement, MOBILE_HOME_DOCK_AREA) {
  let value = questToDeliverForPlacement.get(MOBILE_HOME_DOCK_AREA);
  if (null != value) {
    value = quests.get(value.quest.id);
    let tmp3;
    if (null != value) {
      if (!isQuestExpired(value)) {
        tmp3 = value;
      }
    }
    return tmp3;
  }
};
export { getQuestPlacementFromQuestContent };
export const isBillableQuestContent = function isBillableQuestContent(questContent) {
  const tmp = getQuestPlacementFromQuestContent(questContent);
  let hasItem = null != tmp;
  if (hasItem) {
    hasItem = set.has(tmp);
  }
  return hasItem;
};
export const getAdDecisionData = function getAdDecisionData(adCreativeId, questContent) {
  const tmp = getQuestPlacementFromQuestContent(questContent);
  if (null == tmp) {
    return closure_8;
  } else {
    let obj = getQuestDeliveryDataForPlacement(tmp, adCreativeId);
    if (null == obj) {
      obj = {};
    }
    const adDecisionData = obj.adDecisionData;
    if (null == adDecisionData) {
      let tmp5 = closure_8;
    } else {
      tmp5 = adDecisionData;
      if (tmp3 !== adCreativeId) {
        tmp5 = adDecisionData;
        if (tmp4 !== adCreativeId) {
          tmp5 = adDecisionData;
          if (adDecisionData.ad_id !== adCreativeId) {
            tmp5 = closure_8;
          }
        }
      }
    }
    return tmp5;
  }
};
export const getAdMetadataSealed = function getAdMetadataSealed(sourceQuestContent, adCreativeId) {
  const tmp = getQuestPlacementFromQuestContent(sourceQuestContent);
  if (null != tmp) {
    const tmp4 = getQuestDeliveryDataForPlacement(tmp, adCreativeId);
    let metadataSealed;
    if (null != tmp4) {
      metadataSealed = tmp4.metadataSealed;
    }
    return metadataSealed;
  }
};
export const getAdTrafficMetadataSealed = function getAdTrafficMetadataSealed(sourceQuestContent, adCreativeId, adContentId) {
  const tmp = getQuestPlacementFromQuestContent(sourceQuestContent);
  if (null != tmp) {
    let obj = getQuestDeliveryDataForPlacement(tmp, adContentId);
    if (null == obj) {
      obj = {};
    }
    const trafficMetadataSealed = obj.trafficMetadataSealed;
    if (null != trafficMetadataSealed) {
      return trafficMetadataSealed;
    }
  }
  if (null != adCreativeId) {
    const quest = quest.getQuest(adCreativeId);
    let prop;
    if (null != quest) {
      prop = quest.trafficMetadataSealed;
    }
    return prop;
  }
};
export const getAdContext = function getAdContext(questContent, adContentId) {
  const tmp = getQuestPlacementFromQuestContent(questContent);
  if (null != tmp) {
    const tmp4 = getQuestDeliveryDataForPlacement(tmp, adContentId);
    let adContext;
    if (null != tmp4) {
      adContext = tmp4.adContext;
    }
    return adContext;
  }
};
export const captureQuestsException = function captureQuestsException(error, tags) {
  let obj = importDefault(dependencyMap[7]);
  obj = {};
  const merged = Object.assign(tags);
  obj = {};
  tags = undefined;
  if (null != tags) {
    tags = tags.tags;
  }
  const merged1 = Object.assign(tags);
  obj["app_context"] = "quests";
  obj["tags"] = obj;
  obj.captureException(error, obj);
};
