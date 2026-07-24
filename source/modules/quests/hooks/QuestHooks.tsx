// Module ID: 10493
// Function ID: 80989
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 1921, 1348, 4812, 1849, 6940, 6942, 6941, 4976, 653, 1851, 566, 10494, 9480, 477, 9492, 6956, 4979, 6939, 664, 6962, 6964, 6967, 9499, 22, 10495, 9502, 10497, 1920, 10501, 4983, 10503, 6968, 5468, 10505, 9504, 8250, 6969, 10506, 1212, 1827, 4329, 6958, 4066, 3976, 9494, 3776, 10507, 675, 1327, 10868, 10872, 3803, 9319, 9312, 2]
// Exports: useClaimedCollectibleRewardMessage, useClaimedQuests, useConnectedConsoleLinkOnClick, useCosponsoredLogotypeAsset, useExpiredQuestsMap, useFetchQuestHomeBounties, useFilteredQuests, useIsQuestEligibleForMembersListPopout, useLaunchInGameActivityQuest, useManuallyStartConsoleQuest, useNonNullableQuest, useOnOpenGameClick, useProgressState, useQuest, useQuestBarImpressionSurvey, useQuestBarOrDockModeChangeTracking, useQuestCollectibles, useQuestCompletionDetails, useQuestForMemberListSocialEntryPoint, useQuestFormattedDate, useQuestHomeBounties, useQuestHomeFilterOptions, useQuestHomeSortOptions, useQuestHomeSortingFilteringAnalytics, useQuestHowToHelpArticle, useQuestOrbRewardMultiplier, useQuestPreviewActions, useQuestWarningTips, useQuestsWithPreviewAccess, useShouldShowBonusOrbsUX, useShouldShowPreviewToolTab, useShouldShowQuestPreviewOverrides, useShouldShowQuestsActivityPanelItem

// Module 10493 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import supportedConsoles from "supportedConsoles";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { useConsoleQuestUIStore } from "useConsoleQuestUIStore";
import closure_12 from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
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
function useQuests(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { fetchPolicy: "cache-only", callerSource: "unknown" };
  }
  let hasFetched;
  let dependencyMap;
  let isFetchingCurrentQuests;
  let lastFetchedCurrentQuests;
  let isEligibleForQuests;
  const tmp = lastFetchedCurrentQuests(isEligibleForQuests.useState(false), 2);
  hasFetched = tmp[0];
  dependencyMap = tmp[1];
  let items = [closure_12];
  let quests = obj(566).useStateFromStoresArray(items, () => {
    const quests = outer1_12.quests;
    const items = [...quests.values()];
    return items;
  });
  let obj2 = obj(566);
  const items1 = [closure_12];
  let excludedQuests = obj(566).useStateFromStoresArray(items1, () => {
    const excludedQuests = outer1_12.excludedQuests;
    const items = [...excludedQuests.values()];
    return items;
  });
  let obj3 = obj(566);
  const items2 = [closure_12];
  const stateFromStoresObject = obj(566).useStateFromStoresObject(items2, () => ({ isFetchingCurrentQuests: outer1_12.isFetchingCurrentQuests, lastFetchedCurrentQuests: outer1_12.lastFetchedCurrentQuests }));
  isFetchingCurrentQuests = stateFromStoresObject.isFetchingCurrentQuests;
  lastFetchedCurrentQuests = stateFromStoresObject.lastFetchedCurrentQuests;
  let obj4 = obj(566);
  isEligibleForQuests = obj(10494).getIsEligibleForQuests();
  const items3 = [obj.fetchPolicy, isEligibleForQuests, hasFetched, isFetchingCurrentQuests, lastFetchedCurrentQuests, obj.callerSource];
  const effect = isEligibleForQuests.useEffect(() => {
    const fetchPolicy = obj.fetchPolicy;
    if ("cache-only" !== fetchPolicy) {
      if ("cache-or-network" === fetchPolicy) {
        let flag = 0 === lastFetchedCurrentQuests;
      } else {
        flag = true;
        if ("cache-and-network" !== fetchPolicy) {
          const fetchPolicy2 = obj.fetchPolicy;
        }
      }
      if (flag) {
        if (isEligibleForQuests) {
          if (!hasFetched) {
            if (!isFetchingCurrentQuests) {
              dependencyMap(true);
              obj = obj(9480);
              const currentQuests = obj.fetchCurrentQuests();
              if (obj2.isMac()) {
                const obj3 = hasFetched(9492);
              }
              obj2 = obj(477);
              obj = { location: "QuestHookUseQuests" };
              if (!obj4.getConfig(obj).enableNewRequestBehavior) {
                const _HermesInternal = HermesInternal;
                const questToDeliver = obj(9480).fetchQuestToDeliver(obj(4979).AdPlacement.MOBILE_HOME_DOCK_AREA, "use_quests_" + obj.callerSource);
                const obj6 = obj(9480);
              }
              obj4 = hasFetched(6956);
            }
          }
        }
      }
    }
  }, items3);
  return { quests, excludedQuests, isFetchingCurrentQuests, hasFetched };
}
function defaultSortFn(id, id2, questHomeHero) {
  let tmp = id.id === closure_20;
  let tmp2 = id2.id === closure_20;
  if (tmp) {
    const userStatus = id.userStatus;
    let completedAt;
    if (null != userStatus) {
      completedAt = userStatus.completedAt;
    }
    tmp = null == completedAt;
  }
  if (tmp2) {
    const userStatus2 = id2.userStatus;
    let completedAt1;
    if (null != userStatus2) {
      completedAt1 = userStatus2.completedAt;
    }
    tmp2 = null == completedAt1;
  }
  if (tmp !== tmp2) {
    let num15 = 1;
    if (tmp) {
      num15 = c27;
    }
    return num15;
  } else {
    const userStatus6 = id.userStatus;
    let claimedAt;
    const obj7 = require(6939) /* _createForOfIteratorHelperLoose */;
    if (null != userStatus6) {
      claimedAt = userStatus6.claimedAt;
    }
    const userStatus3 = id2.userStatus;
    let claimedAt1;
    if (null != userStatus3) {
      claimedAt1 = userStatus3.claimedAt;
    }
    const userStatus4 = id.userStatus;
    let enrolledAt;
    if (null != userStatus4) {
      enrolledAt = userStatus4.enrolledAt;
    }
    const userStatus5 = id2.userStatus;
    let enrolledAt1;
    if (null != userStatus5) {
      enrolledAt1 = userStatus5.enrolledAt;
    }
    const result = 30 * importDefault(664).Millis.MINUTE;
    const tmp19 = hasEnrolledTimeLapsed(id, result);
    const tmp20 = hasEnrolledTimeLapsed(id2, result);
    if (tmp45) {
      questHomeHero = questHomeHero.questHomeHero;
      if (null != questHomeHero) {
        if (!questHomeHero.isQuestHomeHeroShelfEnabled) {
          const result1 = require(6962) /* _createForOfIteratorHelperLoose */.isQuestFeaturedByHero(questHomeHero, id.id);
          const obj = require(6962) /* _createForOfIteratorHelperLoose */;
          let num6 = 1;
          if (result1) {
            num6 = c27;
          }
          return num6;
        }
      }
      const questType = require(6962) /* _createForOfIteratorHelperLoose */.getQuestType(id.config);
      const obj3 = require(6962) /* _createForOfIteratorHelperLoose */;
      const questType1 = require(6962) /* _createForOfIteratorHelperLoose */.getQuestType(id2.config);
      const obj4 = require(6962) /* _createForOfIteratorHelperLoose */;
      const result2 = require(6964) /* _createForOfIteratorHelperLoose */.hasWatchVideoOnMobileTasks(id);
      const obj5 = require(6964) /* _createForOfIteratorHelperLoose */;
      const result3 = require(6964) /* _createForOfIteratorHelperLoose */.hasWatchVideoOnMobileTasks(id2);
      if (result2 !== result3) {
        if (!result2) {
          return num10;
        }
        let num14 = 1;
        if (result2) {
          num14 = c27;
        }
        num10 = num14;
      }
      if (questType !== questType1) {
        num10 = 1;
        if (questType === require(6967) /* QuestType */.QuestType.VIDEO) {
          num10 = c27;
        }
      }
      if (tmp19 === tmp20) {
        if (tmp8 !== tmp10) {
          let num12 = 1;
          if (!tmp8) {
            num12 = c27;
          }
          let tmp41 = num12;
        } else if (tmp12 !== tmp14) {
          let num11 = 1;
          if (tmp12) {
            num11 = c27;
          }
          tmp41 = num11;
        } else {
          tmp41 = sortByDate(id.config.expiresAt, id2.config.expiresAt, constants7.ASC);
        }
      }
      let num13 = 1;
      if (!tmp19) {
        num13 = c27;
      }
      tmp41 = num13;
      const obj6 = require(6964) /* _createForOfIteratorHelperLoose */;
    } else {
      if (tmp8 !== tmp10) {
        let num4 = 1;
        if (tmp8) {
          num4 = c27;
        }
        let tmp23 = num4;
      } else if (tmp12 !== tmp14) {
        let num3 = 1;
        if (tmp12) {
          num3 = c27;
        }
        tmp23 = num3;
      } else {
        tmp23 = sortByDate(id.config.expiresAt, id2.config.expiresAt, constants7.DESC);
      }
      return tmp23;
    }
    tmp45 = !require(6939) /* _createForOfIteratorHelperLoose */.isQuestExpired(id);
  }
}
function recentSortFn(config, config2) {
  return sortByDate(config.config.startsAt, config2.config.startsAt, constants7.DESC);
}
function recentlyEnrolledSortFn(userStatus, userStatus2) {
  userStatus = userStatus.userStatus;
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  userStatus2 = userStatus2.userStatus;
  if (null != userStatus2) {
    enrolledAt = userStatus2.enrolledAt;
  }
  if (null == enrolledAt) {
    if (null == enrolledAt) {
      let num = sortByDate(userStatus.config.expiresAt, userStatus2.config.expiresAt, constants7.DESC);
    }
    return num;
  }
  if (null != enrolledAt) {
    if (null == enrolledAt) {
      num = c27;
    }
  }
  if (null != enrolledAt) {
    num = sortByDate(enrolledAt, enrolledAt, constants7.DESC);
  } else {
    num = 1;
  }
}
function expiringSoonSortFn(config, config2) {
  return sortByDate(config.config.expiresAt, config2.config.expiresAt, constants7.ASC);
}
function doesQuestPassTaskFilter(quest) {
  if (constants4.VIDEO === arg1) {
    return require(6964) /* _createForOfIteratorHelperLoose */.hasWatchVideoTasks(quest);
  } else if (constants4.PLAY === arg1) {
    let obj = require(6964) /* _createForOfIteratorHelperLoose */;
    obj = { quest };
    let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
    if (!hasPlayOnDesktopTaskResult) {
      obj = { quest };
      hasPlayOnDesktopTaskResult = require(6964) /* _createForOfIteratorHelperLoose */.hasStreamOnDesktopTask(obj);
      const obj3 = require(6964) /* _createForOfIteratorHelperLoose */;
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = require(6964) /* _createForOfIteratorHelperLoose */.hasPlayActivityTask(quest);
      const obj5 = require(6964) /* _createForOfIteratorHelperLoose */;
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = require(6964) /* _createForOfIteratorHelperLoose */.isConsoleQuest(quest);
      const obj6 = require(6964) /* _createForOfIteratorHelperLoose */;
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = require(6964) /* _createForOfIteratorHelperLoose */.isInGameQuest(quest);
      const obj7 = require(6964) /* _createForOfIteratorHelperLoose */;
    }
    return hasPlayOnDesktopTaskResult;
  } else {
    return false;
  }
}
function doesQuestPassRewardFilter(config) {
  if (constants5.VIRTUAL_CURRENCY === arg1) {
    return require(9499) /* getCollectiblesQuestReward */.hasVirtualCurrencyReward(config.config);
  } else if (constants5.COLLECTIBLE === arg1) {
    return require(9499) /* getCollectiblesQuestReward */.hasCollectiblesQuestReward(config.config);
  } else if (constants5.IN_GAME === arg1) {
    let hasInGameQuestRewardResult = require(9499) /* getCollectiblesQuestReward */.hasInGameQuestReward(config.config);
    if (!hasInGameQuestRewardResult) {
      hasInGameQuestRewardResult = require(9499) /* getCollectiblesQuestReward */.hasQuestRewardCode(config.config);
      const obj2 = require(9499) /* getCollectiblesQuestReward */;
    }
    return hasInGameQuestRewardResult;
  } else {
    return false;
  }
}
function doesQuestPassFilter(arg0, arg1, arr) {
  let closure_0 = arg0;
  if ("task" === arg1) {
    let tmp = doesQuestPassTaskFilter;
  } else if ("reward" === arg1) {
    tmp = doesQuestPassRewardFilter;
  }
  const importDefault = tmp;
  return 0 === arr.length || arr.some((arg0) => tmp(closure_0, arg0.filter));
}
function sortQuests(arr) {
  let filters;
  let sortMethod;
  let tmp = arg1;
  let tmp2 = arg2;
  if (arg1 === undefined) {
    tmp = closure_28;
  }
  if (tmp2 === undefined) {
    tmp2 = closure_29;
  }
  ({ sortMethod, filters } = tmp);
  let obj = arr;
  if (null != filters) {
    obj = arr;
    if (0 !== filters.length) {
      obj = (function filterQuests(arr, filters) {
        if (0 === filters.length) {
          return arr;
        } else {
          let closure_0 = outer1_0(outer1_2[26]).groupBy(filters, "group");
          return arr.filter((arg0) => {
            let closure_0 = arg0;
            const entries = Object.entries(closure_0);
            return entries.every((arg0) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = arg0;
              return outer3_45(closure_0, tmp, tmp2);
            });
          });
        }
      })(arr, filters);
    }
  }
  if (constants3.MOST_RECENT === sortMethod) {
    let tmp6 = recentSortFn;
  } else if (constants3.RECENTLY_ENROLLED === sortMethod) {
    tmp6 = recentlyEnrolledSortFn;
  } else if (constants3.EXPIRING_SOON === sortMethod) {
    tmp6 = expiringSoonSortFn;
  } else {
    const SUGGESTED = constants3.SUGGESTED;
    tmp6 = defaultSortFn;
  }
  return obj.sort((function prioritizeLiveQuests(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (value, value) => {
      const tmp = !outer2_0(outer2_2[20]).isQuestExpired(value);
      const obj = outer2_0(outer2_2[20]);
      if (tmp !== !obj2.isQuestExpired(value)) {
        let num = 1;
        if (tmp) {
          num = outer2_27;
        }
        let tmp4 = num;
      } else {
        tmp4 = callback(value, value, closure_1);
      }
      return tmp4;
    };
  })(tmp6, tmp2));
}
function sortByDate(expiresAt, expiresAt2, DESC) {
  let num = 1;
  if (DESC === constants7.DESC) {
    num = c27;
  }
  return expiresAt.localeCompare(expiresAt2) * num;
}
function useAllQuests(quests, sortMethod) {
  let closure_0 = quests;
  let closure_1 = sortMethod;
  const tmp = (function useSortMetadata() {
    const shouldRemoveQuestHomeHero = quests(tmp[27]).useShouldRemoveQuestHomeHero();
    const obj = quests(tmp[27]);
    const items = [outer1_12];
    const items1 = [shouldRemoveQuestHomeHero];
    const stateFromStores = quests(tmp[13]).useStateFromStores(items, () => null, items1);
    const isShelfEnabled = outer1_63(stateFromStores).isShelfEnabled;
    const items2 = [stateFromStores, isShelfEnabled];
    return React.useMemo(() => ({ questHomeHero: stateFromStores, isQuestHomeHeroShelfEnabled: isShelfEnabled }), items2);
  })();
  const dependencyMap = tmp;
  let _isNativeReflectConstruct = React.useRef([]);
  let set = React.useRef(sortMethod.sortMethod);
  React = React.useRef(sortMethod.filters);
  let closure_6 = React.useRef(0);
  let closure_7 = React.useRef(tmp);
  let items = [quests, sortMethod, tmp];
  return React.useMemo(() => {
    if (0 === quests.length) {
      return [];
    } else {
      if (ref.current.length > 0) {
        if (ref3.current === quests.length) {
          if (ref2.current === sortMethod.sortMethod) {
            if (React.current === sortMethod.filters) {
              if (ref4.current === closure_2) {
                return ref.current;
              }
            }
          }
        }
      }
      const mapped = outer1_46(quests, sortMethod, closure_2).map((id) => id.id);
      ref.current = mapped;
      ref2.current = sortMethod.sortMethod;
      React.current = sortMethod.filters;
      ref3.current = quests.length;
      ref4.current = closure_2;
      return mapped;
    }
  }, items);
}
function isQuestHiddenFromQuestHome(value) {
  let isQuestExpiredResult = require(6939) /* _createForOfIteratorHelperLoose */.isQuestExpired(value);
  if (isQuestExpiredResult) {
    isQuestExpiredResult = !require(6939) /* _createForOfIteratorHelperLoose */.hasUnclaimedReward(value.userStatus);
    const obj2 = require(6939) /* _createForOfIteratorHelperLoose */;
  }
  return isQuestExpiredResult;
}
function useIsQuestExpired(memo) {
  const _require = memo;
  const items = [closure_12];
  const items1 = [memo];
  return _require(566).useStateFromStores(items, () => {
    let isQuestExpiredResult = null != memo;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = outer1_12.isQuestExpired(memo.id);
    }
    return isQuestExpiredResult;
  }, items1);
}
function useIsQuestProgressingOnDesktop(quest) {
  const _require = quest;
  const items = [closure_12];
  return _require(566).useStateFromStores(items, () => outer1_12.isProgressingOnDesktop(quest.id));
}
function useIsQuestProgressingOnConsole(quest) {
  let closure_0 = quest;
  const items = [quest];
  return React.useMemo(() => quest(outer1_2[23]).isQuestProgressingOnConsole(quest), items);
}
function useIsQuestProgressingVideoQuest(quest) {
  const _require = quest;
  const items = [closure_12];
  const items1 = [quest, _require(566).useStateFromStores(items, () => outer1_12.getOptimisticProgress(quest.id, quest(outer1_2[32]).FirstPartyQuestTaskTypes.WATCH_VIDEO))];
  return React.useMemo(() => quest(outer1_2[33]).isVideoQuestProgressing(quest), items1);
}
function useIsQuestProgressing(quest) {
  let tmp = useIsQuestProgressingOnDesktop(quest);
  const tmp2 = useIsQuestProgressingOnConsole(quest);
  if (!tmp) {
    tmp = tmp2;
  }
  if (!tmp) {
    tmp = tmp3;
  }
  return tmp;
}
function useThirdPartyTaskDetails(quest) {
  let closure_0 = quest;
  const items = [quest];
  return React.useMemo(() => quest(outer1_2[23]).getThirdPartyTaskDetails(quest), items);
}
function useGetOrFetchApplicationForConsoleQuests(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    let iter2;
    const set = new Set();
    const tmp = outer1_36(callback);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = callback;
        let tmp3 = outer1_2;
        let obj2 = callback(outer1_2[23]);
        let consoleApplicationId = obj2.getConsoleApplicationId(iter.value);
        if (null != consoleApplicationId) {
          let addResult = set.add(consoleApplicationId);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    return Array.from(set);
  }, items);
  return importDefault(5468)(memo);
}
function useConnectedAccounts() {
  let obj = accounts(566);
  const items = [closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ fetching: outer1_8.isFetching(), accounts: outer1_8.getAccounts() }));
  accounts = stateFromStoresObject.accounts;
  const items1 = [accounts];
  const memo = React.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === outer2_23.XBOX);
    const found2 = found.filter((type) => type.type === outer2_23.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  obj = { fetching: stateFromStoresObject.fetching, xboxAccounts: memo.xboxAccounts, playstationAccounts: memo.playstationAccounts, xboxAndPlaystationAccounts: memo.xboxAndPlaystationAccounts };
  return obj;
}
function useWaitingForConsoleConnection(quest) {
  quest = quest.quest;
  const tmp = useIsQuestProgressing(quest);
  const tmp2 = 0 === useConnectedAccounts().xboxAndPlaystationAccounts.length;
  const obj = require(6964) /* _createForOfIteratorHelperLoose */;
  return require(6964) /* _createForOfIteratorHelperLoose */.isConsoleQuest(quest) && tmp2 && !tmp;
}
function useSelectedTaskPlatform(id) {
  const _require = id;
  const items = [closure_12];
  const items1 = [_require(566).useStateFromStores(items, () => outer1_12.selectedTaskPlatform(closure_0)), ];
  const items2 = [id];
  items1[1] = React.useCallback((platform) => id(outer1_2[15]).selectTaskPlatform(id, platform), items2);
  return items1;
}
function useTaskPlatformScreen(quest, questTaskDetails) {
  let closure_0 = quest;
  let closure_1 = questTaskDetails;
  const tmp = hasItem1(useSelectedTaskPlatform(quest.id), 2);
  const first = tmp[0];
  const items = [quest];
  const memo = memo1.useMemo(() => quest(first[31]).supportedTaskPlatforms(quest), items);
  const hasItem = memo.includes(constants.DESKTOP);
  hasItem1 = memo.includes(constants.CONSOLE);
  const items1 = [questTaskDetails];
  const tmp5 = useIsQuestProgressingOnDesktop(quest);
  memo1 = memo1.useMemo(() => {
    const match = quest(first[43]).match(closure_1);
    const str = quest(first[43]);
    let obj = { taskType: quest(first[32]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
    const withResult = match.with({ percentComplete: 0 }, () => null);
    obj = { taskType: quest(first[32]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
    const withResult1 = match.with({ percentComplete: 0 }, () => null).with(obj, () => outer2_13.DESKTOP);
    const withResult2 = match.with({ percentComplete: 0 }, () => null).with(obj, () => outer2_13.DESKTOP).with(obj, () => outer2_13.DESKTOP);
    const obj1 = { taskType: quest(first[32]).FirstPartyQuestTaskTypes.WATCH_VIDEO };
    const withResult3 = withResult2.with({ taskType: quest(first[32]).FirstPartyQuestTaskTypes.WATCH_VIDEO }, () => outer2_13.DESKTOP);
    const obj2 = { taskType: quest(first[32]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE };
    const withResult4 = withResult3.with({ taskType: quest(first[32]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE }, () => outer2_13.DESKTOP);
    const obj3 = { taskType: quest(first[32]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
    const withResult5 = withResult4.with({ taskType: quest(first[32]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP }, () => outer2_13.DESKTOP);
    const obj4 = { taskType: quest(first[32]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX };
    const withResult6 = withResult5.with({ taskType: quest(first[32]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX }, () => outer2_13.CONSOLE);
    const obj5 = { taskType: quest(first[32]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION };
    const withResult7 = withResult6.with({ taskType: quest(first[32]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION }, () => outer2_13.CONSOLE);
    const obj6 = { taskType: quest(first[32]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME };
    const withResult8 = withResult7.with({ taskType: quest(first[32]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME }, () => outer2_13.DESKTOP);
    const obj7 = { taskType: quest(first[32]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY };
    return withResult8.with({ taskType: quest(first[32]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY }, () => outer2_13.DESKTOP).exhaustive();
  }, items1);
  if (tmp5) {
    let DESKTOP = constants.DESKTOP;
  } else {
    DESKTOP = null;
    if (tmp6) {
      DESKTOP = constants.CONSOLE;
    }
  }
  const items2 = [hasItem1, hasItem, memo1, DESKTOP, first];
  const items3 = [
    memo1.useMemo(() => {
      let obj = { lastPlatformProgress: memo1, currentProgressingPlatform: DESKTOP, selectedPlatform: first };
      const match = quest(first[43]).match(obj);
      obj = { currentProgressingPlatform: outer1_13.CONSOLE };
      const str = quest(first[43]);
      obj = { currentProgressingPlatform: outer1_13.DESKTOP };
      const withResult = match.with(obj, () => callback(first[19]).TaskPlatformScreen.CONSOLE);
      const obj1 = { currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE };
      const withResult1 = match.with(obj, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(first[19]).TaskPlatformScreen.DESKTOP);
      const obj2 = { currentProgressingPlatform: null, lastPlatformProgress: outer1_13.DESKTOP };
      const withResult2 = match.with(obj, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(first[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE }, () => callback(first[19]).TaskPlatformScreen.CONSOLE);
      const obj3 = { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: outer1_13.CONSOLE };
      const withResult3 = match.with(obj, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(first[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE }, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.DESKTOP }, () => callback(first[19]).TaskPlatformScreen.DESKTOP);
      const obj4 = { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: outer1_13.DESKTOP };
      const withResult4 = match.with(obj, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(first[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE }, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.DESKTOP }, () => callback(first[19]).TaskPlatformScreen.DESKTOP).with(obj3, () => callback(first[19]).TaskPlatformScreen.CONSOLE);
      const withResult5 = match.with(obj, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(first[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE }, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.DESKTOP }, () => callback(first[19]).TaskPlatformScreen.DESKTOP).with(obj3, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with(obj4, () => callback(first[19]).TaskPlatformScreen.DESKTOP);
      return match.with(obj, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(first[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.CONSOLE }, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: outer1_13.DESKTOP }, () => callback(first[19]).TaskPlatformScreen.DESKTOP).with(obj3, () => callback(first[19]).TaskPlatformScreen.CONSOLE).with(obj4, () => callback(first[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null }, () => {
        if (outer1_4) {
          if (outer1_3) {
            let SELECT = callback(first[19]).TaskPlatformScreen.SELECT;
          }
          return SELECT;
        }
        const TaskPlatformScreen = callback(first[19]).TaskPlatformScreen;
        SELECT = outer1_4 ? TaskPlatformScreen.CONSOLE : TaskPlatformScreen.DESKTOP;
      }).exhaustive();
    }, items2),
    memo,
    tmp[1]
  ];
  return items3;
}
function useIsPreviewerOnAnyQuest() {
  let items = [closure_12];
  const stateFromStoresArray = require(566) /* initialize */.useStateFromStoresArray(items, () => {
    const quests = outer1_12.quests;
    const items = [...quests.values()];
    return items;
  });
  return stateFromStoresArray.some((preview) => preview.preview);
}
function hasEnrolledTimeLapsed(userStatus, result) {
  userStatus = userStatus.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = userStatus.userStatus;
  let enrolledAt;
  if (null != userStatus2) {
    enrolledAt = userStatus2.enrolledAt;
  }
  let tmp4 = null != enrolledAt && null == completedAt;
  if (tmp4) {
    const _Date = Date;
    let _Date2 = Date;
    const userStatus3 = userStatus.userStatus;
    let enrolledAt1;
    const timestamp = Date.now();
    if (null != userStatus3) {
      enrolledAt1 = userStatus3.enrolledAt;
    }
    const prototype = _Date2.prototype;
    _Date2 = new _Date2(enrolledAt1);
    tmp4 = timestamp - _Date2.getTime() > result;
  }
  return tmp4;
}
function useQuestHomeHeroShelf(questIds) {
  questIds = undefined;
  const items = [closure_12];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_12.quests);
  if (null != questIds) {
    questIds = questIds.questIds;
  }
  const items1 = [stateFromStores, questIds];
  return React.useMemo(() => {
    if (null == questIds) {
      let obj = { shelfQuests: [], isShelfEnabled: false };
      return obj;
    } else {
      const mapped = questIds.map((arg0) => outer1_0.get(arg0));
      const found = mapped.filter(stateFromStores(outer1_2[51]).isNotNullish);
      const found1 = found.filter((value) => !stateFromStores(outer2_2[20]).isQuestExpired(value));
      if (found1.length <= 1) {
        obj = { shelfQuests: [], isShelfEnabled: false };
      } else {
        obj = { shelfQuests: found1, isShelfEnabled: true };
      }
      return obj;
    }
  }, items1);
}
({ QuestTaskPlatform: closure_13, QuestsExperimentLocations: closure_14, MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES: closure_15, QuestHomeSortMethods: closure_16, SORTED_QUEST_HOME_FILTER_GROUPS: closure_17, TaskFilterTypes: closure_18, RewardFilterTypes: closure_19, MOBILE_ORBS_INTRO_QUEST_ID: closure_20, ORBS_INTRO_QUEST_ID: closure_21 } = QuestsExperimentLocations);
({ HelpdeskArticles: closure_22, PlatformTypes: closure_23, ThemeTypes: closure_24, AnalyticEvents: closure_25 } = ME);
let c27 = -1;
let closure_28 = {};
let closure_29 = { questHomeHero: null, isQuestHomeHeroShelfEnabled: false };
let closure_30 = { DESC: 0, [0]: "DESC", ASC: 1, [1]: "ASC" };
let obj = { ALL: "all", CLAIMED: "claimed", PREVIEW_TOOL: "preview_tool" };
function useQuestTaskDetails(quest) {
  let closure_0 = quest;
  const items = [quest];
  let callback = React.useCallback(() => quest(6964).getQuestTaskDetails(quest), items);
  const tmp2 = callback(React.useState(callback()), 2);
  let closure_2 = tmp2[1];
  const items1 = [callback];
  const callback1 = React.useCallback(() => dependencyMap(callback()), items1);
  const tmp4 = useIsQuestProgressing(quest);
  callback = tmp4;
  const items2 = [quest, tmp4, callback1];
  const effect = React.useEffect(() => {
    const userStatus = quest.userStatus;
    let enrolledAt;
    if (null != userStatus) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null != enrolledAt) {
      const userStatus2 = quest.userStatus;
      let completedAt;
      if (null != userStatus2) {
        completedAt = userStatus2.completedAt;
      }
      if (null == completedAt) {
        const userStatus3 = quest.userStatus;
        let claimedAt;
        if (null != userStatus3) {
          claimedAt = userStatus3.claimedAt;
        }
        if (null == claimedAt) {
          if (set) {
            const _window = window;
            quest = window.setInterval(() => {
              outer1_3();
            }, callback(664).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              outer1_3();
            };
          }
        }
      }
    }
    callback1();
  }, items2);
  return tmp2[0];
}
obj = { UNACCEPTED: 0, [0]: "UNACCEPTED", ACCEPTED: 1, [1]: "ACCEPTED", IN_PROGRESS: 2, [2]: "IN_PROGRESS", COMPLETED: 3, [3]: "COMPLETED", CLAIMED: 4, [4]: "CLAIMED" };
let closure_34 = 6 * require("set").Millis.HOUR;
const MINUTE = require("set").Millis.MINUTE;
let result = require("result").fileFinishedImporting("modules/quests/hooks/QuestHooks.tsx");

export { useQuests };
export { sortQuests };
export const QuestTabs = obj;
export const QuestQueryParams = { TAB: "tab", QUEST_ID: "quest_id", SORT: "sort", FILTER: "filter", AD_CREATIVE_IDS: "ad_creative_ids" };
export const useFilteredQuests = function useFilteredQuests(ALL, quests) {
  let excludedQuests;
  let hasFetched;
  let isFetchingCurrentQuests;
  let iter2;
  let tmp = quests;
  if (quests === undefined) {
    tmp = closure_28;
  }
  let tmp2 = useQuests({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" });
  quests = tmp2.quests;
  ({ excludedQuests, isFetchingCurrentQuests, hasFetched } = tmp2);
  const map = new Map(quests.map((id) => {
    const items = [id.id, id];
    return items;
  }));
  let tmp4 = (function useCompletedAndClaimedQuests(quests) {
    let closure_0 = quests;
    const items = [quests];
    const memo = outer1_5.useMemo(() => quests.filter((userStatus) => {
      userStatus = userStatus.userStatus;
      let completedAt;
      if (null != userStatus) {
        completedAt = userStatus.completedAt;
      }
      let tmp2 = null != completedAt;
      const userStatus2 = userStatus.userStatus;
      if (null != userStatus2) {
        const claimedAt = userStatus2.claimedAt;
      }
      if (tmp2) {
        tmp2 = null != claimedAt;
      }
      return tmp2;
    }), items);
    let closure_2 = outer1_5.useRef([]);
    const items1 = [memo];
    return outer1_5.useMemo(() => {
      if (0 === memo.length) {
        return [];
      } else {
        if (ref.current.length > 0) {
          if (ref.current.length === memo.length) {
            return ref.current;
          }
        }
        const sorted = memo.sort((userStatus, userStatus2) => {
          userStatus = userStatus.userStatus;
          let claimedAt;
          if (null != userStatus) {
            claimedAt = userStatus.claimedAt;
          }
          userStatus2 = userStatus2.userStatus;
          let claimedAt1;
          if (null != userStatus2) {
            claimedAt1 = userStatus2.claimedAt;
          }
          if (null == claimedAt !== (null == claimedAt1)) {
            let num = 1;
            if (tmp2) {
              num = outer3_27;
            }
            let tmp6 = num;
          } else {
            tmp6 = outer3_47(userStatus.config.rewardsConfig.rewardsExpireAt, userStatus2.config.rewardsConfig.rewardsExpireAt, outer3_30.DESC);
          }
          return tmp6;
        });
        const mapped = sorted.map((id) => id.id);
        ref.current = mapped;
        return mapped;
      }
    }, items1);
  })(quests);
  quests = [];
  if (ALL === obj.ALL) {
    tmp4 = tmp3;
  }
  const tmp5Result = _createForOfIteratorHelperLoose(tmp4);
  let iter = tmp5Result();
  if (!iter.done) {
    do {
      let value = map.get(iter.value);
      let removeExpiredQuests = null != value;
      if (removeExpiredQuests) {
        let tmp8 = obj;
        removeExpiredQuests = ALL === obj.ALL;
      }
      if (removeExpiredQuests) {
        removeExpiredQuests = tmp.removeExpiredQuests;
      }
      if (removeExpiredQuests) {
        let tmp9 = isQuestHiddenFromQuestHome;
        removeExpiredQuests = isQuestHiddenFromQuestHome(value);
      }
      let tmp10 = null == value || removeExpiredQuests;
      if (!tmp10) {
        let arr = quests.push(value);
      }
      iter2 = tmp5Result();
      iter = iter2;
    } while (!iter2.done);
  }
  return { quests, excludedQuests, isFetchingCurrentQuests, hasFetched };
};
export const useClaimedQuests = function useClaimedQuests() {
  const _require = React.useRef(false);
  const items = [closure_12];
  let claimedQuests = _require(566).useStateFromStoresArray(items, () => {
    const claimedQuests = outer1_12.claimedQuests;
    return Array.from(claimedQuests.values());
  });
  let obj = _require(566);
  const items1 = [closure_12];
  const isFetchingClaimedQuests = _require(566).useStateFromStores(items1, () => outer1_12.isFetchingClaimedQuests);
  const items2 = [isFetchingClaimedQuests];
  const effect = React.useEffect(() => {
    let current = isFetchingClaimedQuests;
    if (!isFetchingClaimedQuests) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const claimedQuests = ref(outer1_2[15]).fetchClaimedQuests();
      const obj = ref(outer1_2[15]);
    }
  }, items2);
  return { claimedQuests, isFetchingClaimedQuests };
};
export const useExpiredQuestsMap = function useExpiredQuestsMap() {
  const items = [closure_12];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_12.getExpiredQuestsMap());
};
export const useShouldShowBonusOrbsUX = function useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility) {
  const tmp = useIsQuestExpired(quest);
  const result = require(9499) /* getCollectiblesQuestReward */.hasVirtualCurrencyReward(quest.config);
  const obj = require(9499) /* getCollectiblesQuestReward */;
  const result1 = require(9499) /* getCollectiblesQuestReward */.hasPremiumOrbQuantity(quest.config);
  let tmp5 = !tmp;
  const obj2 = require(9499) /* getCollectiblesQuestReward */;
  if (tmp5) {
    tmp5 = result;
  }
  if (tmp5) {
    tmp5 = result1;
  }
  if (tmp5) {
    tmp5 = tmp4;
  }
  return tmp5;
};
export const useQuestOrbRewardMultiplier = function useQuestOrbRewardMultiplier(questId) {
  const _require = questId;
  const items = [closure_12];
  const items1 = [questId];
  return _require(566).useStateFromStores(items, () => {
    const quest = outer1_12.getQuest(questId);
    let questOrbMultiplier = null;
    if (null != quest) {
      questOrbMultiplier = questId(outer1_2[25]).getQuestOrbMultiplier(quest.config);
      const obj = questId(outer1_2[25]);
    }
    return questOrbMultiplier;
  }, items1);
};
export { useIsQuestExpired };
export const useIsQuestEligibleForMembersListPopout = function useIsQuestEligibleForMembersListPopout(userStatus) {
  const _require = userStatus;
  let closure_1 = arg1;
  const items = [closure_7];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let channelId;
    if (null != channelId) {
      channelId = channelId.channelId;
    }
    const channel = outer1_7.getChannel(channelId);
    let tmp5 = null;
    if (null != channel) {
      tmp5 = channel;
    }
    return tmp5;
  });
  const obj = _require(566);
  const items1 = [closure_12];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => null != outer1_12.questEnrollmentBlockedUntil, []);
  const obj2 = _require(566);
  const items2 = [closure_9];
  const stateFromStores2 = _require(566).useStateFromStores(items2, () => {
    const currentUser = outer1_9.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id;
  });
  const obj3 = _require(566);
  const items3 = [closure_12];
  const items4 = [userStatus];
  if (null != userStatus) {
    if (!stateFromStores1) {
      if (!obj4.useStateFromStores(items3, () => {
        let isQuestExpiredResult = null != userStatus;
        if (isQuestExpiredResult) {
          isQuestExpiredResult = outer1_12.isQuestExpired(userStatus.id);
        }
        return isQuestExpiredResult;
      }, items4)) {
        if (stateFromStores2 !== arg2) {
          userStatus = userStatus.userStatus;
          let claimedAt;
          if (null != userStatus) {
            claimedAt = userStatus.claimedAt;
          }
          let tmp6 = null != claimedAt;
          if (tmp6) {
            tmp6 = !obj5.isStreamingAndCanWatch(arg1, stateFromStores);
          }
          return !tmp6;
        }
      }
    }
  }
  return false;
};
export const useQuestFormattedDate = function useQuestFormattedDate(rewardsExpireAt, arg1) {
  let tmp = arg1;
  const _require = rewardsExpireAt;
  if (arg1 === undefined) {
    const obj = { dateStyle: "short" };
    tmp = obj;
  }
  const importDefault = tmp;
  let stateFromStores;
  const items = [closure_6];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => outer1_6.locale);
  const items1 = [rewardsExpireAt, tmp, stateFromStores];
  return React.useMemo(() => {
    let str = "";
    if (null != closure_0) {
      const _Date = Date;
      const date = new Date(closure_0);
      str = date.toLocaleDateString(stateFromStores, closure_1);
    }
    return str;
  }, items1);
};
export const useOnOpenGameClick = function useOnOpenGameClick(quest) {
  quest = quest.quest;
  const content = quest.content;
  const ctaContent = quest.ctaContent;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(ctaContent[29]).useGetQuestImpressionId();
  const items = [quest, content, ctaContent, getQuestImpressionId, sourceQuestContent];
  return React.useCallback(() => {
    if (quest.id !== outer1_21) {
      let obj = { content, ctaContent, impressionId: getQuestImpressionId(), sourceQuestContent };
      quest(ctaContent[31]).openGameLinkDirectly(quest, obj);
      const obj2 = quest(ctaContent[31]);
    } else {
      const _window = window;
      obj = content(ctaContent[30]);
      window.open(obj.getArticleURL(outer1_22.VIRTUAL_CURRENCY_LEARN_MORE));
    }
  }, items);
};
export { useIsQuestProgressingOnDesktop };
export { useIsQuestProgressingOnConsole };
export { useIsQuestProgressingVideoQuest };
export { useIsQuestProgressing };
export { useQuestTaskDetails };
export { useThirdPartyTaskDetails };
export const useConnectedConsoleLinkOnClick = function useConnectedConsoleLinkOnClick(quest) {
  let dependencyMap;
  let importDefault;
  quest = quest.quest;
  ({ questContent: importDefault, sourceQuestContent: dependencyMap } = quest);
  let _isNativeReflectConstruct = useWaitingForConsoleConnection({ quest });
  let set = quest(10497).useGetQuestImpressionId();
  return () => {
    let obj = quest(outer1_2[31]);
    if (_isNativeReflectConstruct) {
      obj = { quest };
      obj = { content: closure_1, ctaContent: tmp(tmp2[34]).QuestContentCTA.CONNECT_CONSOLE_LINK, impressionId: callback(), sourceQuestContent: closure_2 };
      const result = obj.openAddConsoleConnectionModal(obj, obj);
    } else {
      const obj1 = { quest };
      const obj2 = { content: closure_1, ctaContent: tmp(tmp2[34]).QuestContentCTA.VIEW_CONSOLE_CONNECTIONS_LINK, impressionId: callback(), sourceQuestContent: closure_2 };
      const result1 = obj.openConsoleConnectionSettings(obj1, obj2);
    }
  };
};
export { useGetOrFetchApplicationForConsoleQuests };
export const useQuestForMemberListSocialEntryPoint = function useQuestForMemberListSocialEntryPoint(arg0) {
  const _require = arg0;
  const items = [closure_12];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_12.quests);
  const items1 = [arg0, stateFromStores, useGetOrFetchApplicationForConsoleQuests(Array.from(stateFromStores.values()))];
  const memo = React.useMemo(() => {
    const result = callback(outer1_2[22]).filterQuestsForSocialEntrypoints(stateFromStores, outer1_15);
    const obj = callback(outer1_2[22]);
    return callback(outer1_2[36]).getQuestsFromActivities(result, callback);
  }, items1);
  let tmp2 = null;
  if (!useIsQuestExpired(memo)) {
    tmp2 = memo;
  }
  return tmp2;
};
export const useQuestCollectibles = function useQuestCollectibles(config) {
  let obj = require(9499) /* getCollectiblesQuestReward */;
  const result = obj.hasCollectiblesQuestReward(config);
  const defaultReward = require(9504) /* getQuestUrl */.getDefaultReward(config);
  const obj2 = require(9504) /* getQuestUrl */;
  const fetchCollectiblesProduct = require(8250) /* useFetchCollectiblesProduct */.useFetchCollectiblesProduct(defaultReward.skuId);
  const product = fetchCollectiblesProduct.product;
  obj = { hasQuestCollectibles: result };
  let first;
  if (null != product) {
    const items = product.items;
    if (null != items) {
      first = items[0];
    }
  }
  obj.avatarDecoration = first;
  obj.isFetching = fetchCollectiblesProduct.isFetching;
  return obj;
};
export const useQuestPreviewActions = function useQuestPreviewActions(id) {
  let closure_0 = id;
  let items = [id];
  return React.useMemo(() => ({
    handleComplete() {
      return callback(outer2_2[15]).completeQuestPreview(outer1_0);
    },
    handleProgress(random) {
      return callback(outer2_2[15]).completeQuestPreview(outer1_0, random);
    },
    handleResetStatusClick() {
      return callback(outer2_2[15]).resetQuestPreviewStatus(outer1_0);
    },
    handleResetDismissibilityClick() {
      return callback(outer2_2[15]).resetQuestDismissibilityStatus(outer1_0);
    },
    handleOverridePreviewClick(placement) {
      return callback(outer2_2[15]).overrideQuestForPlacement(placement, outer1_0);
    },
    handleResetHasBeenSeenClick(ContextMenu, arg1) {
      const items = [outer1_0];
      return callback(outer2_2[15]).markAdContentUnseen(callback(outer2_2[39]).AdCreativeType.QUEST, items);
    }
  }), items);
};
export { useConnectedAccounts };
export const useManuallyStartConsoleQuest = function useManuallyStartConsoleQuest(questId) {
  questId = questId.questId;
  const preview = questId.preview;
  const beforeRequest = questId.beforeRequest;
  const afterRequest = questId.afterRequest;
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj = questId(beforeRequest[13]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getAccounts());
  const tmp5 = useConsoleQuestUIStore((clearErrorHintsByType) => clearErrorHintsByType.clearErrorHintsByType);
  let closure_6 = tmp5;
  const items1 = [questId];
  const callback = React.useCallback((arg0) => {
    const state = outer1_11.getState();
    return state.setErrorHints(questId, arg0);
  }, items1);
  const items2 = [stateFromStores, tmp5, questId];
  const effect = React.useEffect(() => {
    tmp5(questId, questId(beforeRequest[40]).QuestConsoleStartError.EXPIRED_CREDENTIAL);
  }, items2);
  obj = { startConsoleQuest: React.useCallback(afterRequest(tmp), items3), startingConsoleQuest: first };
  // CreateGeneratorClosureLongIndex (0x67)
  items3 = [first, beforeRequest, afterRequest, preview, questId, callback];
  return obj;
};
export { useWaitingForConsoleConnection };
export const useQuestHowToHelpArticle = function useQuestHowToHelpArticle() {
  const tmp = useConnectedAccounts();
  let obj = importDefault(1920);
  const articleURL = obj.getArticleURL(constants6.QUEST_HOW_TO_PLAYSTATION);
  const articleURL1 = importDefault(1920).getArticleURL(constants6.QUEST_HOW_TO_XBOX);
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatResult = intl.format(require(1212) /* getSystemLocale */.t.beN4DG, { psHelpdeskArticle: articleURL, xboxHelpdeskArticle: articleURL1 });
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = {};
  let tmp7 = articleURL1;
  if (tmp.playstationAccounts.length > 0) {
    tmp7 = articleURL;
  }
  obj.helpdeskArticle = tmp7;
  obj = {};
  const obj2 = importDefault(1920);
  if (tmp.xboxAccounts.length <= 0) {
    let tmp9 = formatResult;
    if (!tmp2) {
      tmp9 = formatResult;
    }
    obj.message = tmp9;
    obj.xboxURL = articleURL1;
    obj.playstationURL = articleURL;
    return obj;
  }
  tmp9 = intl2.format(require(1212) /* getSystemLocale */.t.HVS7nh, obj);
};
export const QuestProgressState = obj;
export const useProgressState = function useProgressState(quest) {
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  const userStatus2 = quest.userStatus;
  let completedAt;
  if (null != userStatus2) {
    completedAt = userStatus2.completedAt;
  }
  const userStatus3 = quest.userStatus;
  let claimedAt;
  if (null != userStatus3) {
    claimedAt = userStatus3.claimedAt;
  }
  if (tmp6) {
    let IN_PROGRESS = obj.CLAIMED;
  } else if (tmp4) {
    IN_PROGRESS = obj.COMPLETED;
  } else {
    if (tmp7) {
      if (tmp2) {
        IN_PROGRESS = obj.IN_PROGRESS;
      }
    }
    IN_PROGRESS = tmp2 ? tmp8.ACCEPTED : tmp8.UNACCEPTED;
  }
  return IN_PROGRESS;
};
export const useQuestCompletionDetails = function useQuestCompletionDetails(quest) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = require(566) /* initialize */;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.locale);
  let percentComplete = useQuestTaskDetails(quest).percentComplete;
  const tmp2 = useThirdPartyTaskDetails(quest);
  if (null != tmp2) {
    percentComplete = tmp2.percentComplete;
  }
  obj = { completedRatio: percentComplete, percentComplete: 100 * percentComplete };
  if (null != tmp2) {
    if (!flag) {
      let progress;
      if (null != tmp2) {
        progress = tmp2.progress;
      }
      let target;
      if (null != tmp2) {
        target = tmp2.target;
      }
      const _HermesInternal = HermesInternal;
      let combined = "" + progress + "/" + target;
    }
    obj.completedRatioDisplay = combined;
    return obj;
  }
  combined = require(1827) /* shortenAndLocalizeNumber */.formatPercent(stateFromStores, percentComplete, { roundingMode: "floor" });
};
export { useSelectedTaskPlatform };
export { useTaskPlatformScreen };
export const useQuestWarningTips = function useQuestWarningTips(userStatus) {
  const tmp2 = useQuestTaskDetails(userStatus);
  userStatus = userStatus.userStatus;
  let enrolledAt;
  const tmp = useThirdPartyTaskDetails(userStatus);
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp5 = null != enrolledAt;
  const userStatus2 = userStatus.userStatus;
  let completedAt;
  if (null != userStatus2) {
    completedAt = userStatus2.completedAt;
  }
  const DESKTOP = require(4983) /* set */.FirstPartyQuestTaskTypesSets.DESKTOP;
  let tmp8 = DESKTOP.has(tmp2.taskType) && tmp2.percentComplete > 0;
  let tmp9 = 0 === tmp2.percentComplete;
  if (tmp5) {
    tmp5 = !tmp7;
  }
  if (tmp5) {
    tmp5 = !tmp3;
  }
  if (tmp5) {
    tmp5 = null == tmp;
  }
  if (tmp5) {
    if (!tmp8) {
      if (tmp9) {
        tmp9 = callback(useTaskPlatformScreen(userStatus, tmp2), 1)[0] === require(4979) /* QuestsVisibleMessagesChangedSource */.TaskPlatformScreen.DESKTOP;
      }
      tmp8 = tmp9;
    }
    tmp5 = tmp8;
  }
  tmp3 = useIsQuestExpired(userStatus);
  tmp7 = null != completedAt;
  let tmp12 = require(477) /* set */.isWeb() && tmp5;
  if (tmp12) {
    tmp12 = !require(10501) /* supportedConsoles */.isQuestSupportedOnWeb(userStatus);
    const obj2 = require(10501) /* supportedConsoles */;
  }
  const items = [];
  const obj = require(477) /* set */;
  let isMacResult = require(477) /* set */.isMac();
  if (isMacResult) {
    isMacResult = tmp2.taskType === require(4983) /* set */.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
  }
  if (isMacResult) {
    isMacResult = tmp5;
  }
  if (isMacResult) {
    const intl = require(1212) /* getSystemLocale */.intl;
    items.push(intl.string(require(1212) /* getSystemLocale */.t.MFGxFM));
  }
  if (tmp12) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items.push(intl2.string(require(1212) /* getSystemLocale */.t.BV6xDm));
  }
  return items;
};
export const useQuest = function useQuest(arg0) {
  const items = [closure_12];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_12.quests);
  const value = stateFromStores.get(arg0);
  let tmp2 = null;
  if (null != value) {
    tmp2 = value;
  }
  return tmp2;
};
export const useNonNullableQuest = function useNonNullableQuest(questId, callback) {
  const _require = questId;
  let closure_1 = callback;
  let items = [closure_12];
  const items1 = [questId];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_12.getQuest(closure_0), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  const dependencyMap = tmp2;
  const items2 = [tmp2, questId, callback];
  const effect = React.useEffect(() => {
    if (null == tmp2) {
      const quests = outer1_12.quests;
      const items = [];
      HermesBuiltin.arraySpread(quests.keys(), 0);
      let obj = questId(tmp2[20]);
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Quest unexpectedly missing from store: " + questId);
      obj = {};
      obj = { source: "useNonNullableQuest" };
      obj.tags = obj;
      const obj1 = { questId, storeQuestIds: items, storeSize: items.length, isFetchingCurrentQuests: outer1_12.isFetchingCurrentQuests, lastFetchedCurrentQuests: outer1_12.lastFetchedCurrentQuests };
      obj.extra = obj1;
      const result = obj.captureQuestsException(error, obj);
      if (null != callback) {
        tmp2 = callback();
      }
    }
  }, items2);
  return tmp2;
};
export const useQuestBarOrDockModeChangeTracking = function useQuestBarOrDockModeChangeTracking(mode) {
  mode = mode.mode;
  const questContent = mode.questContent;
  const sourceQuestContent = mode.sourceQuestContent;
  const questId = mode.questId;
  let set = React.useRef(null);
  const items = [questId, questContent, mode, sourceQuestContent];
  const effect = React.useEffect(() => {
    let tmp = null != questId;
    if (tmp) {
      tmp = ref.current !== mode;
    }
    if (tmp) {
      let obj = mode(sourceQuestContent[44]);
      obj = { mode, prevMode: ref.current, questContent, questId, sourceQuestContent };
      const result = obj.trackQuestBarOrDockModeChange(obj);
      ref.current = mode;
    }
  }, items);
  const items1 = [questId, questContent, sourceQuestContent];
  const effect1 = React.useEffect(() => null != questId ? (() => {
    let obj = mode(sourceQuestContent[44]);
    obj = { mode: null, prevMode: outer1_4.current, questContent: outer1_1, questId: outer1_3, sourceQuestContent: outer1_2 };
    const result = obj.trackQuestBarOrDockModeChange(obj);
  }) : undefined, items1);
};
export const useCosponsoredLogotypeAsset = function useCosponsoredLogotypeAsset(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  const items = [closure_12];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => outer1_12.getQuest(closure_0), items1);
  const tmp2 = importDefault(stateFromStores[45])();
  let _isNativeReflectConstruct = tmp2;
  const items2 = [tmp2, arg1, stateFromStores];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      return null;
    } else {
      if (null != closure_1) {
        let tmp5 = closure_1;
      } else {
        tmp5 = callback(stateFromStores[46]).isThemeDark(_isNativeReflectConstruct) ? tmp4.DARK : tmp4.LIGHT;
        const obj = callback(stateFromStores[46]);
      }
      return callback(stateFromStores[47]).getQuestAsset(stateFromStores, callback(stateFromStores[47]).QuestAssetType.COSPONSOR_LOGO_TYPE, tmp5);
    }
  }, items2);
};
export const useClaimedCollectibleRewardMessage = function useClaimedCollectibleRewardMessage(config) {
  let obj = require(566) /* initialize */;
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getCurrentUser());
  let obj1 = require(9499) /* getCollectiblesQuestReward */;
  const defaultRewardName = obj1.getDefaultRewardName(config, stateFromStores);
  let obj2 = require(9499) /* getCollectiblesQuestReward */;
  const collectibleQuestRewardDuration = obj2.getCollectibleQuestRewardDuration(config);
  let obj3 = require(9499) /* getCollectiblesQuestReward */;
  const collectibleQuestRewardExtendableExpirationDate = obj3.getCollectibleQuestRewardExtendableExpirationDate(config);
  let obj4 = require(9499) /* getCollectiblesQuestReward */;
  const result = obj4.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
  const result1 = require(9499) /* getCollectiblesQuestReward */.isCollectibleQuestRewardPremiumExtendable(config);
  const obj6 = require(9499) /* getCollectiblesQuestReward */;
  const isPremiumResult = require(3776) /* _createForOfIteratorHelperLoose */.isPremium(stateFromStores, PremiumTypes.TIER_2);
  if (null == collectibleQuestRewardDuration) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { decorationName: defaultRewardName };
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.l9uXL8, obj);
  } else {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = { rewardName: defaultRewardName };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj1 = { rewardName: defaultRewardName, expirationDate: collectibleQuestRewardExtendableExpirationDate };
    const formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.o97tNn, obj);
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj2 = { rewardName: defaultRewardName, duration: collectibleQuestRewardDuration };
    let formatToPlainStringResult2 = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.ie4YK0, obj2);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj3 = { duration: collectibleQuestRewardDuration, rewardName: defaultRewardName };
    let formatToPlainStringResult3 = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t.yCpc0U, obj3);
    if (result1) {
      if (result) {
        if (isPremiumResult) {
          formatToPlainStringResult2 = formatToPlainStringResult;
        }
        formatToPlainStringResult3 = formatToPlainStringResult2;
      } else if (isPremiumResult) {
        formatToPlainStringResult3 = formatToPlainStringResult1;
      }
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj4 = { duration: collectibleQuestRewardDuration, decorationName: defaultRewardName };
      return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.tTlItm, obj4);
    }
    formatToPlainStringResult1 = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.PkyRZo, obj1);
  }
};
export const useLaunchInGameActivityQuest = function useLaunchInGameActivityQuest(quest) {
  let obj = require(6964) /* _createForOfIteratorHelperLoose */;
  obj = {};
  const activityApplicationId = obj.getActivityApplicationId(quest);
  obj.launchInGameActivity = importDefault(10507)({ applicationId: activityApplicationId });
  return obj;
};
export { useIsPreviewerOnAnyQuest };
export const useShouldShowPreviewToolTab = function useShouldShowPreviewToolTab() {
  return useIsPreviewerOnAnyQuest();
};
export const useShouldShowQuestsActivityPanelItem = function useShouldShowQuestsActivityPanelItem(userStatus) {
  userStatus = undefined;
  if (null != userStatus) {
    userStatus = userStatus.userStatus;
  }
  let isDismissedResult = null != userStatus;
  if (isDismissedResult) {
    isDismissedResult = require(6939) /* _createForOfIteratorHelperLoose */.isDismissed(userStatus.userStatus, require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.ACTIVITY_PANEL);
    const obj = require(6939) /* _createForOfIteratorHelperLoose */;
  }
  let tmp6 = null;
  if (null != userStatus) {
    tmp6 = userStatus;
  }
  let claimedAt;
  if (null != userStatus) {
    userStatus = userStatus.userStatus;
    if (null != userStatus) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const tmp5 = useIsQuestExpired;
  const tmp5Result = useIsQuestExpired(tmp6);
  const tmp9 = null != claimedAt;
  const items = [closure_12];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => null != outer1_12.questEnrollmentBlockedUntil, []);
  if (!isDismissedResult) {
    isDismissedResult = tmp5Result;
  }
  if (!isDismissedResult) {
    isDismissedResult = tmp9;
  }
  if (!isDismissedResult) {
    isDismissedResult = stateFromStores;
  }
  return !isDismissedResult;
};
export const useQuestsWithPreviewAccess = function useQuestsWithPreviewAccess() {
  let items = [closure_12];
  stateFromStoresArray = stateFromStoresArray(566).useStateFromStoresArray(items, () => {
    const quests = outer1_12.quests;
    const items = [...quests.values()];
    return items;
  });
  const items1 = [stateFromStoresArray];
  return React.useMemo(() => stateFromStoresArray.filter((preview) => preview.preview), items1);
};
export const useQuestHomeFilterOptions = function useQuestHomeFilterOptions() {
  let closure_0 = closure_17;
  const items = [closure_17];
  return React.useMemo(() => closure_0.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = { heading: callback(outer2_2[37]).getFilterGroupHeadingText(tmp), options: tmp2 };
    return obj;
  }), items);
};
export const useQuestHomeSortOptions = function useQuestHomeSortOptions() {
  return React.useMemo(() => {
    const keys = Object.keys(outer1_16);
    return keys.map((arg0) => {
      const obj = { label: outer2_0(outer2_2[37]).getSortMethodText(outer2_16[arg0]), value: outer2_16[arg0] };
      return obj;
    });
  }, []);
};
export const useQuestHomeSortingFilteringAnalytics = function useQuestHomeSortingFilteringAnalytics(selectedSortMethod) {
  selectedSortMethod = selectedSortMethod.selectedSortMethod;
  const selectedFilters = selectedSortMethod.selectedFilters;
  const numQuestsVisible = selectedSortMethod.numQuestsVisible;
  let _isNativeReflectConstruct = React.useRef(null);
  let set = React.useRef(null);
  const items = [selectedSortMethod];
  const effect = React.useEffect(() => {
    let obj = selectedFilters(numQuestsVisible[50]);
    obj = { sort_method: selectedSortMethod, previous_sort_method: ref.current };
    obj.track(outer1_25.QUEST_HOME_SORT_METHOD_CHANGED, obj);
    ref.current = selectedSortMethod;
  }, items);
  const items1 = [selectedFilters, numQuestsVisible];
  const effect1 = React.useEffect(() => {
    const mapped = selectedFilters.map((arg0) => arg0.filter);
    let obj = selectedFilters(numQuestsVisible[50]);
    obj = { filters: mapped };
    let current = ref2.current;
    if (null == current) {
      current = [];
    }
    obj.previous_filters = current;
    obj.num_quests_visible = numQuestsVisible;
    obj.track(outer1_25.QUEST_HOME_FILTERS_CHANGED, obj);
    ref2.current = mapped;
  }, items1);
};
export const useShouldShowQuestPreviewOverrides = function useShouldShowQuestPreviewOverrides(quest) {
  let preview = React.useMemo(() => {
    const currentUser = outer1_9.getCurrentUser();
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    return true === isStaffResult;
  }, []);
  if (!preview) {
    preview = quest.preview;
  }
  return preview;
};
export { useQuestHomeHeroShelf };
export const useFetchQuestHomeBounties = function useFetchQuestHomeBounties(location) {
  let isFetching;
  let questHomeBounties;
  let obj = location;
  if (location === undefined) {
    obj = {};
  }
  const previewAdCreativeIds = obj.previewAdCreativeIds;
  let showBounties;
  let enabled;
  let c3;
  let callback;
  const bountiesExperience = previewAdCreativeIds(enabled[52]).useBountiesExperience(constants2.QUEST_HOME_MOBILE);
  showBounties = bountiesExperience.showBounties;
  const BountyStaleRefreshQuestHomeExperiment = previewAdCreativeIds(enabled[27]).BountyStaleRefreshQuestHomeExperiment;
  obj = { location: constants2.QUEST_HOME_MOBILE };
  enabled = BountyStaleRefreshQuestHomeExperiment.useConfig(obj).enabled;
  const AdPlacement = previewAdCreativeIds(enabled[19]).AdPlacement;
  const tmp2 = bountiesExperience.verticalScrollEnabled ? AdPlacement.VIDEO_MODAL_MOBILE : AdPlacement.QUEST_HOME_MOBILE_CAROUSEL;
  c3 = tmp2;
  const tmp3 = callback(React.useState(showBounties), 2);
  let first = tmp3[0];
  callback = tmp3[1];
  const obj2 = previewAdCreativeIds(enabled[52]);
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStoresObject = previewAdCreativeIds(enabled[13]).useStateFromStoresObject(items, () => ({ isFetching: outer1_10.isFetchingQuestHomeBounties, questHomeBounties: outer1_10.questHomeBounties }));
  const items1 = [showBounties, enabled, previewAdCreativeIds, tmp2];
  ({ isFetching, questHomeBounties } = stateFromStoresObject);
  const effect = React.useEffect(() => {
    function loadBounties() {
      return _loadBounties(...arguments);
    }
    function _loadBounties() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = loadBounties(tmp);
      return obj(...arguments);
    }
    if (c1) {
      let c0 = false;
      c1 = 0;
      const bounties = loadBounties();
      if (interval) {
        const _window = window;
        interval = window.setInterval(() => {
          if (Date.now() - c1 > outer2_34) {
            loadBounties();
          }
        }, outer1_35);
        return () => {
          let c0 = true;
          window.clearInterval(closure_2);
        };
      } else {
        return () => {
          let c0 = true;
        };
      }
    }
  }, items1);
  obj = {};
  if (showBounties) {
    obj.questHomeBounties = questHomeBounties;
    if (!first) {
      first = isFetching;
    }
    obj.isLoading = first;
    let tmp7 = obj;
  } else {
    obj.questHomeBounties = [];
    obj.isLoading = false;
    tmp7 = obj;
  }
  return tmp7;
};
export const useQuestHomeBounties = function useQuestHomeBounties() {
  const items = [_createForOfIteratorHelperLoose];
  return require(566) /* initialize */.useStateFromStoresObject(items, () => ({ questHomeBounties: outer1_10.questHomeBounties, isFetching: outer1_10.isFetchingQuestHomeBounties }));
};
export const useQuestBarImpressionSurvey = function useQuestBarImpressionSurvey(quest) {
  const _require = quest;
  let enrolledAt;
  const DropsOptedOut = _require(3803).DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const userStatus = quest.userStatus;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  const dependencyMap = tmp3;
  const items = [setting, null != enrolledAt, quest.id];
  return React.useCallback(() => {
    if (!tmp3) {
      let tmp4;
      let fireSurveyAction = quest(tmp3[55]).SurveyActionTypes;
      tmp4 = quest(tmp3[56]);
      fireSurveyAction = tmp4.fireSurveyAction;
      const obj = { quest_id: quest.id };
      fireSurveyAction(setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN, obj);
      const tmp5 = setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN;
    }
  }, items);
};
