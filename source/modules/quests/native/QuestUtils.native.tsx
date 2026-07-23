// Module ID: 10919
// Function ID: 84825
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 31, 10920, 4976, 653, 33, 4098, 10921, 1934, 10923, 9463, 10930, 10936, 6948, 9444, 4979, 3831, 1212, 9176, 9181, 10465, 6963, 10484, 3982, 5796, 477, 3827, 689, 10937, 8940, 4472, 4475, 1457, 2]
// Exports: dismissOverlayScreens, getPrimaryCtaIcon, handleRewardClaimThenView, isHeroVideoSupported, openDiscordQuestsFAQ, openQuestHome, openRewardDetailsBottomSheet, showQuestUnavailableAlert

// Module 10919 (_createForOfIteratorHelperLoose)
import closure_3 from "jsxProd";
import "getAlertModalItemKey";
import zustandStore from "zustandStore";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { UserSettingsSections } from "ME";
import jsxProd from "set";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
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
function openRewardClaimBottomSheet(arg0) {
  let questContent;
  let questContentPosition;
  let questId;
  let sourceQuestContent;
  ({ questId, questContent, questContentPosition, sourceQuestContent } = arg0);
  return importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(10923, dependencyMap.paths), closure_6, { questId, questContent, questContentPosition, sourceQuestContent });
}
function viewReward(quest) {
  let onSuccess;
  let product;
  let questContent;
  let questContentPosition;
  let sourceQuestContent;
  quest = quest.quest;
  ({ product, questContent, questContentPosition, onSuccess, sourceQuestContent } = quest);
  let obj = require(9463) /* getCollectiblesQuestReward */;
  if (obj.hasQuestRewardCode(quest.config)) {
    obj = { questId: quest.id, questContent, questContentPosition, sourceQuestContent };
    openRewardClaimBottomSheet(obj);
  } else {
    let obj1 = require(9463) /* getCollectiblesQuestReward */;
    if (obj1.hasVirtualCurrencyReward(quest.config)) {
      let tmp3Result = tmp3(10930);
      obj = { quest };
      const result = tmp3Result.openQuestOrbsRewardModal(obj);
    } else {
      tmp3Result = tmp3(10936);
      obj1 = { quest, product, onSuccess };
      const result1 = tmp3Result.openQuestCollectibleRewardModal(obj1);
    }
  }
}
function _handleRewardClaim() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleRewardClaimThenView() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ QuestsExperimentLocations: closure_5, QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_6, QUEST_REWARD_DETAILS_BOTTOM_SHEET_KEY: closure_7, QuestVariants: closure_8 } = QuestsExperimentLocations);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let result = require("zustandStore").fileFinishedImporting("modules/quests/native/QuestUtils.native.tsx");

export const openRewardDetailsBottomSheet = function openRewardDetailsBottomSheet(questId) {
  return importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(10921, dependencyMap.paths), closure_7, { questId: questId.questId });
};
export { viewReward };
export const handleRewardClaimThenView = function handleRewardClaimThenView(arg0) {
  return _handleRewardClaimThenView(...arguments);
};
export const openQuestHome = function openQuestHome(scrollToQuestId) {
  scrollToQuestId = scrollToQuestId.scrollToQuestId;
  let flag = scrollToQuestId.mergeExistingRoutes;
  if (flag === undefined) {
    flag = false;
  }
  let sort = scrollToQuestId.sort;
  if (sort === undefined) {
    sort = null;
  }
  let filter = scrollToQuestId.filter;
  if (filter === undefined) {
    filter = null;
  }
  let obj = scrollToQuestId(sort[20]);
  if (obj.getIsEligibleForQuests()) {
    obj = {};
    let tmp6;
    if (null != scrollToQuestId) {
      tmp6 = scrollToQuestId;
    }
    obj.questId = tmp6;
    obj.fromContent = scrollToQuestId.fromContent;
    const result = scrollToQuestId(sort[21]).setQuestHomeUtmContext(obj);
    flag(sort[22])();
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let obj = scrollToQuestId(sort[23]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          let tmp2 = null;
          if (flag) {
            tmp2 = (function findExistingQuestsRoute(rootNavigationRef) {
              function isQuestsRoute(value) {
                let tmp = "settings" === value.name;
                if (tmp) {
                  const params = value.params;
                  let screen;
                  if (null != params) {
                    screen = params.screen;
                  }
                  tmp = screen === outer3_9.QUESTS;
                }
                return tmp;
              }
              const rootState = rootNavigationRef.getRootState();
              if (null != rootState) {
                if (rootState.routes) {
                  function searchRoutes(routes) {
                    const tmp = outer3_13(routes);
                    const iter = tmp();
                    let iter2 = iter;
                    if (!iter.done) {
                      const value = iter2.value;
                      while (!isQuestsRoute(value)) {
                        let state = value.state;
                        let tmp4 = tmp2;
                        if (null != state) {
                          tmp4 = tmp2;
                          if (state.routes) {
                            let tmp5 = searchRoutes;
                            let tmp6 = searchRoutes(value.state.routes);
                            tmp4 = tmp6;
                            if (tmp6) {
                              return tmp6;
                            }
                          }
                        }
                        let iter3 = tmp();
                        tmp2 = tmp4;
                        iter2 = iter3;
                      }
                      return value;
                    }
                    return null;
                  }
                  return searchRoutes(rootState.routes);
                }
              }
              return null;
            })(rootNavigationRef);
          }
          obj = { sort, filter };
          let str = "";
          if (null != scrollToQuestId) {
            str = scrollToQuestId;
          }
          obj.scrollToQuestId = str;
          outer1_4.setState(obj);
          obj = { screen: outer1_9.QUESTS };
          if (flag) {
            if (null != tmp2) {
              const obj1 = { name: "settings", key: tmp2.key, params: obj };
              rootNavigationRef.navigate(obj1);
            }
          }
          scrollToQuestId(sort[24]).openUserSettings(obj);
          const obj5 = scrollToQuestId(sort[24]);
        }
      }
    }, 1);
    const obj2 = scrollToQuestId(sort[21]);
  }
};
export const isHeroVideoSupported = function isHeroVideoSupported(memo) {
  if (obj.isIOS()) {
    let tmp2 = tmp;
  } else {
    tmp2 = tmp;
    if (!tmp) {
      tmp2 = "video/webm" === memo.mimetype;
    }
  }
  return tmp2;
};
export const openDiscordQuestsFAQ = function openDiscordQuestsFAQ() {
  importDefault(3827).openURL("https://support.discord.com/hc/en-us/articles/22225719947543-Discord-Quests-FAQ#h_01HVPBZR5FBM7QBFR9KDBASXP5");
};
export const getPrimaryCtaIcon = function getPrimaryCtaIcon(quest, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = require(6963) /* _createForOfIteratorHelperLoose */;
  if (obj.canLaunchActivity(quest)) {
    const features = quest.config.features;
    if (features.includes(constants.MOBILE_ACTIVITY_QUEST)) {
      obj = {};
      let num = 0;
      if (flag) {
        num = importDefault(689).space.PX_4;
      }
      obj.marginRight = num;
      const features2 = quest.config.features;
      if (features2.includes(constants.CLOUD_GAMING_ACTIVITY)) {
        obj = { size: "sm" };
        obj.style = obj;
        obj.color = importDefault(689).colors.WHITE;
        let tmp5Result = tmp5(tmp6(10937).CloudIcon, obj);
      } else {
        const obj1 = { size: "sm", style: obj, color: importDefault(689).colors.WHITE };
        tmp5Result = tmp5(tmp6(8940).GameControllerIcon, obj1);
      }
      return tmp5Result;
    }
  }
};
export const showQuestUnavailableAlert = function showQuestUnavailableAlert() {
  let obj = require(4472) /* useAlertStore */;
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.Lhpq2P);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(require(1212) /* getSystemLocale */.t.iyF4WB);
  obj = {};
  const obj1 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl3.string(require(1212) /* getSystemLocale */.t.H0vjGc);
  obj1.onPress = require(9444) /* _manuallyStartConsoleQuest */.fetchCurrentQuests;
  const items = [callback2(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1), ];
  const obj2 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl4.string(require(1212) /* getSystemLocale */.t["6XS10x"]);
  obj2.variant = "secondary";
  items[1] = callback2(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj2);
  obj.children = items;
  obj.actions = callback3(closure_11, obj);
  obj.openAlert("quest-unavailable", callback2(require(4475) /* getAlertModalItemKey */.AlertModal, obj));
};
export const dismissOverlayScreens = function dismissOverlayScreens() {
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      const routes = rootState.routes;
      const found = routes.filter((name) => {
        let tmp = "you" !== name.name;
        if (tmp) {
          tmp = "settings" !== name.name;
        }
        return tmp;
      });
      if (found.length < rootState.routes.length) {
        const CommonActions = require(1457) /* Link */.CommonActions;
        obj = {};
        const merged = Object.assign(rootState);
        obj["routes"] = found;
        obj["index"] = found.length - 1;
        rootNavigationRef.dispatch(CommonActions.reset(obj));
      }
    }
  }
};
