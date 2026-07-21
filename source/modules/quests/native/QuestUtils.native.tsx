// Module ID: 10908
// Function ID: 84752
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: dismissOverlayScreens, getPrimaryCtaIcon, handleRewardClaimThenView, isHeroVideoSupported, openDiscordQuestsFAQ, openQuestHome, openRewardDetailsBottomSheet, showQuestUnavailableAlert

// Module 10908 (_createForOfIteratorHelperLoose)
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
function openRewardClaimBottomSheet(arg0) {
  let questContent;
  let questContentPosition;
  let questId;
  let sourceQuestContent;
  ({ questId, questContent, questContentPosition, sourceQuestContent } = arg0);
  return importDefault(dependencyMap[6]).openLazy(arg1(dependencyMap[8])(dependencyMap[9], dependencyMap.paths), closure_6, { questId, questContent, questContentPosition, sourceQuestContent });
}
function viewReward(quest) {
  let onSuccess;
  let product;
  let questContent;
  let questContentPosition;
  let sourceQuestContent;
  quest = quest.quest;
  ({ product, questContent, questContentPosition, onSuccess, sourceQuestContent } = quest);
  let obj = arg1(dependencyMap[10]);
  if (obj.hasQuestRewardCode(quest.config)) {
    obj = { questId: quest.id, questContent, questContentPosition, sourceQuestContent };
    openRewardClaimBottomSheet(obj);
  } else {
    let obj1 = arg1(dependencyMap[10]);
    if (obj1.hasVirtualCurrencyReward(quest.config)) {
      let tmp3Result = tmp3(tmp4[11]);
      obj = { quest };
      const result = tmp3Result.openQuestOrbsRewardModal(obj);
    } else {
      tmp3Result = tmp3(tmp4[12]);
      obj1 = { quest, product, onSuccess };
      const result1 = tmp3Result.openQuestCollectibleRewardModal(obj1);
    }
  }
}
function _handleRewardClaim() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleRewardClaim = obj;
  return obj(...arguments);
}
function _handleRewardClaimThenView() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleRewardClaimThenView = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ QuestsExperimentLocations: closure_5, QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_6, QUEST_REWARD_DETAILS_BOTTOM_SHEET_KEY: closure_7, QuestVariants: closure_8 } = arg1(dependencyMap[3]));
const UserSettingsSections = arg1(dependencyMap[4]).UserSettingsSections;
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/quests/native/QuestUtils.native.tsx");

export const openRewardDetailsBottomSheet = function openRewardDetailsBottomSheet(questId) {
  return importDefault(dependencyMap[6]).openLazy(arg1(dependencyMap[8])(dependencyMap[7], dependencyMap.paths), closure_7, { questId: questId.questId });
};
export { viewReward };
export const handleRewardClaimThenView = function handleRewardClaimThenView(arg0) {
  return _handleRewardClaimThenView(...arguments);
};
export const openQuestHome = function openQuestHome(scrollToQuestId) {
  scrollToQuestId = scrollToQuestId.scrollToQuestId;
  const arg1 = scrollToQuestId;
  let flag = scrollToQuestId.mergeExistingRoutes;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let sort = scrollToQuestId.sort;
  if (sort === undefined) {
    sort = null;
  }
  const dependencyMap = sort;
  let filter = scrollToQuestId.filter;
  if (filter === undefined) {
    filter = null;
  }
  let closure_3 = filter;
  let obj = arg1(dependencyMap[20]);
  if (obj.getIsEligibleForQuests()) {
    obj = {};
    let tmp6;
    if (null != scrollToQuestId) {
      tmp6 = scrollToQuestId;
    }
    obj.questId = tmp6;
    obj.fromContent = scrollToQuestId.fromContent;
    const result = arg1(dependencyMap[21]).setQuestHomeUtmContext(obj);
    importDefault(dependencyMap[22])();
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let obj = scrollToQuestId(sort[23]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          let tmp2 = null;
          if (flag) {
            tmp2 = function findExistingQuestsRoute(rootNavigationRef) {
              function isQuestsRoute(value) {
                let tmp = "settings" === value.name;
                if (tmp) {
                  const params = value.params;
                  let screen;
                  if (null != params) {
                    screen = params.screen;
                  }
                  tmp = screen === constants.QUESTS;
                }
                return tmp;
              }
              const rootState = rootNavigationRef.getRootState();
              if (null != rootState) {
                if (rootState.routes) {
                  function searchRoutes(routes) {
                    const tmp = callback(routes);
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
                        let tmp2 = tmp4;
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
            }(rootNavigationRef);
          }
          obj = { sort, filter };
          let str = "";
          if (null != scrollToQuestId) {
            str = scrollToQuestId;
          }
          obj.scrollToQuestId = str;
          state.setState(obj);
          obj = { screen: constants.QUESTS };
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
    const obj2 = arg1(dependencyMap[21]);
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
  importDefault(dependencyMap[26]).openURL("https://support.discord.com/hc/en-us/articles/22225719947543-Discord-Quests-FAQ#h_01HVPBZR5FBM7QBFR9KDBASXP5");
};
export const getPrimaryCtaIcon = function getPrimaryCtaIcon(quest, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = arg1(dependencyMap[21]);
  if (obj.canLaunchActivity(quest)) {
    const features = quest.config.features;
    if (features.includes(constants.MOBILE_ACTIVITY_QUEST)) {
      obj = {};
      let num = 0;
      if (flag) {
        num = importDefault(dependencyMap[27]).space.PX_4;
      }
      obj.marginRight = num;
      const features2 = quest.config.features;
      if (features2.includes(constants.CLOUD_GAMING_ACTIVITY)) {
        obj = { size: "sm" };
        obj.style = obj;
        obj.color = importDefault(tmp7[27]).colors.WHITE;
        let tmp5Result = tmp5(tmp6(tmp7[28]).CloudIcon, obj);
      } else {
        const obj1 = { size: "sm", style: obj, color: importDefault(tmp7[27]).colors.WHITE };
        tmp5Result = tmp5(tmp6(tmp7[29]).GameControllerIcon, obj1);
      }
      return tmp5Result;
    }
  }
};
export const showQuestUnavailableAlert = function showQuestUnavailableAlert() {
  let obj = arg1(dependencyMap[30]);
  obj = {};
  const intl = arg1(dependencyMap[17]).intl;
  obj.title = intl.string(arg1(dependencyMap[17]).t.Lhpq2P);
  const intl2 = arg1(dependencyMap[17]).intl;
  obj.content = intl2.string(arg1(dependencyMap[17]).t.iyF4WB);
  obj = {};
  const obj1 = {};
  const intl3 = arg1(dependencyMap[17]).intl;
  obj1.text = intl3.string(arg1(dependencyMap[17]).t.H0vjGc);
  obj1.onPress = arg1(dependencyMap[14]).fetchCurrentQuests;
  const items = [callback2(arg1(dependencyMap[31]).AlertActionButton, obj1), ];
  const obj2 = {};
  const intl4 = arg1(dependencyMap[17]).intl;
  obj2.text = intl4.string(arg1(dependencyMap[17]).t.6XS10x);
  obj2.variant = "secondary";
  items[1] = callback2(arg1(dependencyMap[31]).AlertActionButton, obj2);
  obj.children = items;
  obj.actions = callback3(closure_11, obj);
  obj.openAlert("quest-unavailable", callback2(arg1(dependencyMap[31]).AlertModal, obj));
};
export const dismissOverlayScreens = function dismissOverlayScreens() {
  let obj = arg1(dependencyMap[23]);
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
        const CommonActions = arg1(dependencyMap[32]).CommonActions;
        obj = {};
        const merged = Object.assign(rootState);
        obj["routes"] = found;
        obj["index"] = found.length - 1;
        rootNavigationRef.dispatch(CommonActions.reset(obj));
      }
    }
  }
};
