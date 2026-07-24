// Module ID: 6962
// Function ID: 55655
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 4144, 1838, 3758, 4146, 6963, 4976, 6964, 6965, 6966, 6967, 6968, 2]
// Exports: canLaunchActivity, filterQuestsForSocialEntrypoints, getQuestType, isPlayAnyActivityQuest, isQuestFeaturedByHero, isShareableQuest, isStreamingAndCanWatch, setQuestHomeUtmContext, shouldShowBountiesGivenFilters

// Module 6962 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import keys from "keys";
import QuestsExperimentLocations from "QuestsExperimentLocations";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
function isSponsoredPlayQuest(quest) {
  if (null == quest) {
    return false;
  } else {
    const desktopApplicationIds = require(6964) /* _createForOfIteratorHelperLoose */.getDesktopApplicationIds(quest);
    let tmp3 = null != desktopApplicationIds;
    if (tmp3) {
      tmp3 = desktopApplicationIds.length > 1;
    }
    return tmp3;
  }
}
function hasVariant(config, NON_GAMING_PLAY_QUEST) {
  return new Set(config.config.features).has(NON_GAMING_PLAY_QUEST);
}
({ DISCORD_APPLICATION_ID: closure_8, QuestVariants: closure_9, RewardFilterTypes: closure_10 } = QuestsExperimentLocations);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/utils/QuestUtils.tsx");

export { isSponsoredPlayQuest };
export const isPlayAnyActivityQuest = function isPlayAnyActivityQuest(quest3) {
  return require(6964) /* _createForOfIteratorHelperLoose */.getPlayActivityApplicationId(quest3) === closure_8;
};
export { hasVariant };
export const canLaunchActivity = function canLaunchActivity(quest) {
  let hasPlayActivityTaskResult = require(6964) /* _createForOfIteratorHelperLoose */.hasPlayActivityTask(quest);
  if (!hasPlayActivityTaskResult) {
    hasPlayActivityTaskResult = require(6964) /* _createForOfIteratorHelperLoose */.hasAchievementActivityTask(quest);
    const obj2 = require(6964) /* _createForOfIteratorHelperLoose */;
  }
  return hasPlayActivityTaskResult;
};
export const filterQuestsForSocialEntrypoints = function filterQuestsForSocialEntrypoints(stateFromStores, outer1_15) {
  let iter6;
  const map = new Map();
  const tmp = _createForOfIteratorHelperLoose(stateFromStores);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let tmp4 = callback;
      let tmp5 = callback(iter2.value, 2);
      let tmp6 = tmp5[1];
      let tmp7 = isSponsoredPlayQuest;
      let tmp8 = tmp2;
      let tmp9 = tmp3;
      if (!isSponsoredPlayQuest(tmp6)) {
        let tmp10 = hasVariant;
        let tmp11 = constants;
        tmp8 = tmp2;
        tmp9 = tmp3;
        if (!hasVariant(tmp6, constants.NON_GAMING_PLAY_QUEST)) {
          let tmp12 = _createForOfIteratorHelperLoose;
          let tmp13 = require;
          let tmp14 = dependencyMap;
          let obj2 = require(6964) /* _createForOfIteratorHelperLoose */;
          let tmp15 = _createForOfIteratorHelperLoose(obj2.getQuestTaskTypes(tmp6));
          let iter3 = tmp15();
          let iter4 = iter3;
          tmp8 = iter3;
          tmp9 = tmp15;
          if (!iter3.done) {
            let tmp16 = iter4;
            while (!outer1_15.has(iter4.value)) {
              let iter5 = tmp15();
              iter4 = iter5;
              tmp8 = iter5;
              tmp9 = tmp15;
              continue;
            }
            let result = map.set(tmp5[0], tmp6);
            tmp8 = iter4;
            tmp9 = tmp15;
          }
        }
      }
      iter6 = tmp();
      tmp2 = tmp8;
      tmp3 = tmp9;
      iter2 = iter6;
    } while (!iter6.done);
  }
  return map;
};
export const isShareableQuest = function isShareableQuest(config) {
  return config.sharePolicy !== require(6965) /* QuestSharePolicy */.QuestSharePolicy.NOT_SHAREABLE;
};
export const isStreamingAndCanWatch = function isStreamingAndCanWatch(arg0, stateFromStores) {
  let first = null != arg0 && null != stateFromStores;
  if (first) {
    const obj = require(6966) /* _createForOfIteratorHelperLoose */;
    first = obj.canWatchStream(stateFromStores, closure_6, _createForOfIteratorHelperLoose, closure_5, _isNativeReflectConstruct)[0];
  }
  return first;
};
export const getQuestType = function getQuestType(config) {
  let obj = require(6964) /* _createForOfIteratorHelperLoose */;
  obj = { config };
  const QuestType = require(6967) /* QuestType */.QuestType;
  return obj.hasWatchVideoTasks(obj) ? QuestType.VIDEO : QuestType.GAMEPLAY;
};
export const isQuestFeaturedByHero = function isQuestFeaturedByHero(questHomeHero, id) {
  const questIds = questHomeHero.questIds;
  let hasItem;
  if (null != questIds) {
    hasItem = questIds.includes(id);
  }
  return null != hasItem && hasItem;
};
export const shouldShowBountiesGivenFilters = function shouldShowBountiesGivenFilters(filters) {
  let tmp = !filters.some((group) => "task" === group.group);
  if (tmp) {
    tmp = 0 === filters.length || filters.some((group) => {
      let tmp = "reward" === group.group;
      if (tmp) {
        tmp = group.filter === outer1_10.VIRTUAL_CURRENCY;
      }
      return tmp;
    });
    const tmp2 = 0 === filters.length || filters.some((group) => {
      let tmp = "reward" === group.group;
      if (tmp) {
        tmp = group.filter === outer1_10.VIRTUAL_CURRENCY;
      }
      return tmp;
    });
  }
  return tmp;
};
export const setQuestHomeUtmContext = function setQuestHomeUtmContext(arg0) {
  let fromContent;
  let questId;
  let utmMedium;
  let utmSource;
  ({ questId, fromContent, utmSource, utmMedium } = arg0);
  state = state.getState();
  const obj = { utmSourceCurrent: utmSource, utmMediumCurrent: utmMedium, utmCampaignCurrent: questId, utmContentCurrent: require(6968) /* getQuestContentName */.getQuestContentName(fromContent) };
  state.setUtmCurrentContext(obj);
};
