// Module ID: 6953
// Function ID: 55578
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: canLaunchActivity, filterQuestsForSocialEntrypoints, getQuestType, isPlayAnyActivityQuest, isQuestFeaturedByHero, isShareableQuest, isStreamingAndCanWatch, setQuestHomeUtmContext, shouldShowBountiesGivenFilters

// Module 6953 (_createForOfIteratorHelperLoose)
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
function isSponsoredPlayQuest(quest) {
  if (null == quest) {
    return false;
  } else {
    const desktopApplicationIds = arg1(dependencyMap[7]).getDesktopApplicationIds(quest);
    let tmp3 = null != desktopApplicationIds;
    if (tmp3) {
      tmp3 = desktopApplicationIds.length > 1;
    }
    return tmp3;
  }
}
function hasVariant(config) {
  return new Set(config.config.features).has(arg1);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
({ DISCORD_APPLICATION_ID: closure_8, QuestVariants: closure_9, RewardFilterTypes: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/quests/utils/QuestUtils.tsx");

export { isSponsoredPlayQuest };
export const isPlayAnyActivityQuest = function isPlayAnyActivityQuest(quest3) {
  return arg1(dependencyMap[7]).getPlayActivityApplicationId(quest3) === closure_8;
};
export { hasVariant };
export const canLaunchActivity = function canLaunchActivity(quest) {
  let hasPlayActivityTaskResult = arg1(dependencyMap[7]).hasPlayActivityTask(quest);
  if (!hasPlayActivityTaskResult) {
    hasPlayActivityTaskResult = arg1(dependencyMap[7]).hasAchievementActivityTask(quest);
    const obj2 = arg1(dependencyMap[7]);
  }
  return hasPlayActivityTaskResult;
};
export const filterQuestsForSocialEntrypoints = function filterQuestsForSocialEntrypoints(stateFromStores, closure_15) {
  let iter6;
  const map = new Map();
  const tmp = _createForOfIteratorHelperLoose(stateFromStores);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let tmp4 = closure_2;
      let tmp5 = closure_2(iter2.value, 2);
      let tmp6 = tmp5[1];
      let tmp7 = closure_13;
      let tmp8 = tmp2;
      let tmp9 = tmp3;
      if (!closure_13(tmp6)) {
        let tmp10 = closure_14;
        let tmp11 = closure_9;
        tmp8 = tmp2;
        tmp9 = tmp3;
        if (!closure_14(tmp6, closure_9.NON_GAMING_PLAY_QUEST)) {
          let tmp12 = closure_11;
          let tmp13 = closure_0;
          let tmp14 = closure_1;
          let obj2 = closure_0(closure_1[7]);
          let tmp15 = closure_11(obj2.getQuestTaskTypes(tmp6));
          let iter3 = tmp15();
          let iter4 = iter3;
          tmp8 = iter3;
          tmp9 = tmp15;
          if (!iter3.done) {
            let tmp16 = iter4;
            while (!closure_15.has(iter4.value)) {
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
      let tmp2 = tmp8;
      let tmp3 = tmp9;
      iter2 = iter6;
    } while (!iter6.done);
  }
  return map;
};
export const isShareableQuest = function isShareableQuest(config) {
  return config.sharePolicy !== arg1(dependencyMap[8]).QuestSharePolicy.NOT_SHAREABLE;
};
export const isStreamingAndCanWatch = function isStreamingAndCanWatch(arg0, stateFromStores) {
  let first = null != arg0 && null != stateFromStores;
  if (first) {
    const obj = stateFromStores(dependencyMap[9]);
    first = obj.canWatchStream(stateFromStores, closure_6, closure_4, closure_5, closure_3)[0];
  }
  return first;
};
export const getQuestType = function getQuestType(config) {
  let obj = arg1(dependencyMap[7]);
  obj = { config };
  const QuestType = arg1(dependencyMap[10]).QuestType;
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
        tmp = group.filter === constants.VIRTUAL_CURRENCY;
      }
      return tmp;
    });
    const tmp2 = 0 === filters.length || filters.some((group) => {
      let tmp = "reward" === group.group;
      if (tmp) {
        tmp = group.filter === constants.VIRTUAL_CURRENCY;
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
  const state = state.getState();
  const obj = { utmSourceCurrent: utmSource, utmMediumCurrent: utmMedium, utmCampaignCurrent: questId, utmContentCurrent: arg1(dependencyMap[11]).getQuestContentName(fromContent) };
  state.setUtmCurrentContext(obj);
};
