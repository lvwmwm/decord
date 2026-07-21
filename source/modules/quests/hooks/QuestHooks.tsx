// Module ID: 10453
// Function ID: 80734
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useClaimedCollectibleRewardMessage, useClaimedQuests, useConnectedConsoleLinkOnClick, useCosponsoredLogotypeAsset, useExpiredQuestsMap, useFetchQuestHomeBounties, useFilteredQuests, useIsQuestEligibleForMembersListPopout, useLaunchInGameActivityQuest, useManuallyStartConsoleQuest, useNonNullableQuest, useOnOpenGameClick, useProgressState, useQuest, useQuestBarImpressionSurvey, useQuestBarOrDockModeChangeTracking, useQuestCollectibles, useQuestCompletionDetails, useQuestForMemberListSocialEntryPoint, useQuestFormattedDate, useQuestHomeBounties, useQuestHomeFilterOptions, useQuestHomeSortOptions, useQuestHomeSortingFilteringAnalytics, useQuestHowToHelpArticle, useQuestOrbRewardMultiplier, useQuestPreviewActions, useQuestWarningTips, useQuestsWithPreviewAccess, useShouldShowBonusOrbsUX, useShouldShowPreviewToolTab, useShouldShowQuestPreviewOverrides, useShouldShowQuestsActivityPanelItem

// Module 10453 (_createForOfIteratorHelperLoose)
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
function useQuests(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { 496650185: null, -2100141380: null };
  }
  const arg1 = obj;
  let importDefault;
  let closure_2;
  let closure_3;
  let callback3;
  let React;
  const tmp = callback3(React.useState(false), 2);
  const hasFetched = tmp[0];
  importDefault = hasFetched;
  closure_2 = tmp[1];
  const items = [closure_12];
  const quests = arg1(closure_2[13]).useStateFromStoresArray(items, () => {
    const quests = closure_12.quests;
    const items = [...quests.values()];
    return items;
  });
  const obj2 = arg1(closure_2[13]);
  const items1 = [closure_12];
  const excludedQuests = arg1(closure_2[13]).useStateFromStoresArray(items1, () => {
    const excludedQuests = closure_12.excludedQuests;
    const items = [...excludedQuests.values()];
    return items;
  });
  const obj3 = arg1(closure_2[13]);
  const items2 = [closure_12];
  const stateFromStoresObject = arg1(closure_2[13]).useStateFromStoresObject(items2, () => ({ isFetchingCurrentQuests: closure_12.isFetchingCurrentQuests, lastFetchedCurrentQuests: closure_12.lastFetchedCurrentQuests }));
  const isFetchingCurrentQuests = stateFromStoresObject.isFetchingCurrentQuests;
  closure_3 = isFetchingCurrentQuests;
  const lastFetchedCurrentQuests = stateFromStoresObject.lastFetchedCurrentQuests;
  callback3 = lastFetchedCurrentQuests;
  const obj4 = arg1(closure_2[13]);
  const isEligibleForQuests = arg1(closure_2[14]).getIsEligibleForQuests();
  React = isEligibleForQuests;
  const items3 = [obj.fetchPolicy, isEligibleForQuests, hasFetched, isFetchingCurrentQuests, lastFetchedCurrentQuests, obj.callerSource];
  const effect = React.useEffect(() => {
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
              callback(true);
              let obj = obj(callback[15]);
              const currentQuests = obj.fetchCurrentQuests();
              if (obj2.isMac()) {
                const obj3 = hasFetched(callback[17]);
              }
              const obj2 = obj(callback[16]);
              obj = { location: "QuestHookUseQuests" };
              if (!obj4.getConfig(obj).enableNewRequestBehavior) {
                const _HermesInternal = HermesInternal;
                const questToDeliver = obj(callback[15]).fetchQuestToDeliver(obj(callback[19]).AdPlacement.MOBILE_HOME_DOCK_AREA, "use_quests_" + obj.callerSource);
                const obj6 = obj(callback[15]);
              }
              const obj4 = hasFetched(callback[18]);
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
      num15 = closure_27;
    }
    return num15;
  } else {
    const userStatus6 = id.userStatus;
    let claimedAt;
    const obj7 = id2(dependencyMap[20]);
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
    const result = 30 * importDefault(dependencyMap[21]).Millis.MINUTE;
    const tmp19 = hasEnrolledTimeLapsed(id, result);
    const tmp20 = hasEnrolledTimeLapsed(id2, result);
    if (tmp45) {
      questHomeHero = questHomeHero.questHomeHero;
      if (null != questHomeHero) {
        if (!questHomeHero.isQuestHomeHeroShelfEnabled) {
          const result1 = id2(dependencyMap[22]).isQuestFeaturedByHero(questHomeHero, id.id);
          const obj = id2(dependencyMap[22]);
          let num6 = 1;
          if (result1) {
            num6 = closure_27;
          }
          return num6;
        }
      }
      const questType = id2(dependencyMap[22]).getQuestType(id.config);
      const obj3 = id2(dependencyMap[22]);
      const questType1 = id2(dependencyMap[22]).getQuestType(id2.config);
      const obj4 = id2(dependencyMap[22]);
      const result2 = id2(dependencyMap[23]).hasWatchVideoOnMobileTasks(id);
      const obj5 = id2(dependencyMap[23]);
      const result3 = id2(dependencyMap[23]).hasWatchVideoOnMobileTasks(id2);
      if (result2 !== result3) {
        if (!result2) {
          return num10;
        }
        let num14 = 1;
        if (result2) {
          num14 = closure_27;
        }
        let num10 = num14;
      }
      if (questType !== questType1) {
        num10 = 1;
        if (questType === id2(dependencyMap[24]).QuestType.VIDEO) {
          num10 = closure_27;
        }
      }
      if (tmp19 === tmp20) {
        if (tmp8 !== tmp10) {
          let num12 = 1;
          if (!tmp8) {
            num12 = closure_27;
          }
          let tmp41 = num12;
        } else if (tmp12 !== tmp14) {
          let num11 = 1;
          if (tmp12) {
            num11 = closure_27;
          }
          tmp41 = num11;
        } else {
          tmp41 = sortByDate(id.config.expiresAt, id2.config.expiresAt, constants7.ASC);
        }
      }
      let num13 = 1;
      if (!tmp19) {
        num13 = closure_27;
      }
      tmp41 = num13;
      const obj6 = id2(dependencyMap[23]);
    } else {
      if (tmp8 !== tmp10) {
        let num4 = 1;
        if (tmp8) {
          num4 = closure_27;
        }
        let tmp23 = num4;
      } else if (tmp12 !== tmp14) {
        let num3 = 1;
        if (tmp12) {
          num3 = closure_27;
        }
        tmp23 = num3;
      } else {
        tmp23 = sortByDate(id.config.expiresAt, id2.config.expiresAt, constants7.DESC);
      }
      return tmp23;
    }
    const tmp45 = !id2(dependencyMap[20]).isQuestExpired(id);
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
      num = closure_27;
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
    return arg1(dependencyMap[23]).hasWatchVideoTasks(quest);
  } else if (constants4.PLAY === arg1) {
    let obj = arg1(dependencyMap[23]);
    obj = { quest };
    let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
    if (!hasPlayOnDesktopTaskResult) {
      obj = { quest };
      hasPlayOnDesktopTaskResult = arg1(dependencyMap[23]).hasStreamOnDesktopTask(obj);
      const obj3 = arg1(dependencyMap[23]);
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = arg1(dependencyMap[23]).hasPlayActivityTask(quest);
      const obj5 = arg1(dependencyMap[23]);
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = arg1(dependencyMap[23]).isConsoleQuest(quest);
      const obj6 = arg1(dependencyMap[23]);
    }
    if (!hasPlayOnDesktopTaskResult) {
      hasPlayOnDesktopTaskResult = arg1(dependencyMap[23]).isInGameQuest(quest);
      const obj7 = arg1(dependencyMap[23]);
    }
    return hasPlayOnDesktopTaskResult;
  } else {
    return false;
  }
}
function doesQuestPassRewardFilter(config) {
  if (constants5.VIRTUAL_CURRENCY === arg1) {
    return arg1(dependencyMap[25]).hasVirtualCurrencyReward(config.config);
  } else if (constants5.COLLECTIBLE === arg1) {
    return arg1(dependencyMap[25]).hasCollectiblesQuestReward(config.config);
  } else if (constants5.IN_GAME === arg1) {
    let hasInGameQuestRewardResult = arg1(dependencyMap[25]).hasInGameQuestReward(config.config);
    if (!hasInGameQuestRewardResult) {
      hasInGameQuestRewardResult = arg1(dependencyMap[25]).hasQuestRewardCode(config.config);
      const obj2 = arg1(dependencyMap[25]);
    }
    return hasInGameQuestRewardResult;
  } else {
    return false;
  }
}
function doesQuestPassFilter(arg0, arg1, arr) {
  arg1 = arg0;
  if ("task" === arg1) {
    let tmp = doesQuestPassTaskFilter;
  } else if ("reward" === arg1) {
    tmp = doesQuestPassRewardFilter;
  }
  const importDefault = tmp;
  return 0 === arr.length || arr.some((arg0) => tmp(arg0, arg0.filter));
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
      obj = function filterQuests(arr, filters) {
        if (0 === filters.length) {
          return arr;
        } else {
          const callback = callback(closure_2[26]).groupBy(filters, "group");
          return arr.filter((arg0) => {
            let closure_0 = arg0;
            const entries = Object.entries(closure_0);
            return entries.every((arg0) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = arg0;
              return callback(arg0, tmp, tmp2);
            });
          });
        }
      }(arr, filters);
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
  return obj.sort(function prioritizeLiveQuests(arg0, arg1) {
    return (value, value) => {
      const tmp = !value(closure_2[20]).isQuestExpired(value);
      const obj = value(closure_2[20]);
      if (tmp !== !obj2.isQuestExpired(value)) {
        let num = 1;
        if (tmp) {
          num = closure_27;
        }
        let tmp4 = num;
      } else {
        tmp4 = value(value, value, value);
      }
      return tmp4;
    };
  }(tmp6, tmp2));
}
function sortByDate(expiresAt, expiresAt2, DESC) {
  let num = 1;
  if (DESC === constants7.DESC) {
    num = closure_27;
  }
  return expiresAt.localeCompare(expiresAt2) * num;
}
function useAllQuests(quests, sortMethod) {
  sortMethod = quests;
  const importDefault = sortMethod;
  const tmp = function useSortMetadata() {
    const shouldRemoveQuestHomeHero = arg0(tmp[27]).useShouldRemoveQuestHomeHero();
    const obj = arg0(tmp[27]);
    const items = [closure_12];
    const items1 = [shouldRemoveQuestHomeHero];
    const stateFromStores = arg0(tmp[13]).useStateFromStores(items, () => null, items1);
    const arg0 = stateFromStores;
    const isShelfEnabled = callback2(stateFromStores).isShelfEnabled;
    const arg1 = isShelfEnabled;
    const items2 = [stateFromStores, isShelfEnabled];
    return React.useMemo(() => ({ questHomeHero: stateFromStores, isQuestHomeHeroShelfEnabled: isShelfEnabled }), items2);
  }();
  const dependencyMap = tmp;
  let closure_3 = React.useRef([]);
  let closure_4 = React.useRef(sortMethod.sortMethod);
  const React = React.useRef(sortMethod.filters);
  let closure_6 = React.useRef(0);
  let closure_7 = React.useRef(tmp);
  const items = [quests, sortMethod, tmp];
  return React.useMemo((arg0, self) => {
    if (0 === arg0.length) {
      return [];
    } else {
      if (ref.current.length > 0) {
        if (ref3.current === arg0.length) {
          if (ref2.current === self.sortMethod) {
            if (React.current === self.filters) {
              if (ref4.current === tmp) {
                return ref.current;
              }
            }
          }
        }
      }
      const mapped = callback(arg0, self, tmp).map((id) => id.id);
      ref.current = mapped;
      ref2.current = self.sortMethod;
      React.current = self.filters;
      ref3.current = arg0.length;
      ref4.current = tmp;
      return mapped;
    }
  }, items);
}
function isQuestHiddenFromQuestHome(userStatus) {
  let isQuestExpiredResult = arg1(dependencyMap[20]).isQuestExpired(userStatus);
  if (isQuestExpiredResult) {
    isQuestExpiredResult = !arg1(dependencyMap[20]).hasUnclaimedReward(userStatus.userStatus);
    const obj2 = arg1(dependencyMap[20]);
  }
  return isQuestExpiredResult;
}
function useIsQuestExpired(memo) {
  const arg1 = memo;
  const items = [closure_12];
  const items1 = [memo];
  return arg1(dependencyMap[13]).useStateFromStores(items, () => {
    let isQuestExpiredResult = null != arg0;
    if (isQuestExpiredResult) {
      isQuestExpiredResult = questExpired.isQuestExpired(arg0.id);
    }
    return isQuestExpiredResult;
  }, items1);
}
function useIsQuestProgressingOnDesktop(quest) {
  const arg1 = quest;
  const items = [closure_12];
  return arg1(dependencyMap[13]).useStateFromStores(items, () => progressingOnDesktop.isProgressingOnDesktop(arg0.id));
}
function useIsQuestProgressingOnConsole(quest) {
  const arg1 = quest;
  const items = [quest];
  return React.useMemo(() => arg0(closure_2[23]).isQuestProgressingOnConsole(arg0), items);
}
function useIsQuestProgressingVideoQuest(quest) {
  const arg1 = quest;
  const items = [closure_12];
  const items1 = [quest, arg1(dependencyMap[13]).useStateFromStores(items, () => optimisticProgress.getOptimisticProgress(arg0.id, arg0(closure_2[32]).FirstPartyQuestTaskTypes.WATCH_VIDEO))];
  return React.useMemo(() => arg0(closure_2[33]).isVideoQuestProgressing(arg0), items1);
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
  const arg1 = quest;
  const items = [quest];
  return React.useMemo(() => arg0(closure_2[23]).getThirdPartyTaskDetails(arg0), items);
}
function useGetOrFetchApplicationForConsoleQuests(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => {
    let iter2;
    const set = new Set();
    const tmp = callback(arg0);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_0;
        let tmp3 = closure_2;
        let obj2 = closure_0(closure_2[23]);
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
  return importDefault(dependencyMap[35])(memo);
}
function useConnectedAccounts() {
  let obj = arg1(dependencyMap[13]);
  const items = [closure_8];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  const accounts = stateFromStoresObject.accounts;
  const arg1 = accounts;
  const items1 = [accounts];
  const memo = React.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    return { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
  }, items1);
  obj = { fetching: stateFromStoresObject.fetching, xboxAccounts: memo.xboxAccounts, playstationAccounts: memo.playstationAccounts, xboxAndPlaystationAccounts: memo.xboxAndPlaystationAccounts };
  return obj;
}
function useWaitingForConsoleConnection(quest) {
  quest = quest.quest;
  const tmp = useIsQuestProgressing(quest);
  const tmp2 = 0 === useConnectedAccounts().xboxAndPlaystationAccounts.length;
  const obj = arg1(dependencyMap[23]);
  return arg1(dependencyMap[23]).isConsoleQuest(quest) && tmp2 && !tmp;
}
function useSelectedTaskPlatform(id) {
  const arg1 = id;
  const items = [closure_12];
  const items1 = [arg1(dependencyMap[13]).useStateFromStores(items, () => closure_12.selectedTaskPlatform(arg0)), ];
  const items2 = [id];
  items1[1] = React.useCallback((platform) => platform(closure_2[15]).selectTaskPlatform(platform, platform), items2);
  return items1;
}
function useTaskPlatformScreen(quest, questTaskDetails) {
  questTaskDetails = quest;
  const importDefault = questTaskDetails;
  const tmp = callback3(useSelectedTaskPlatform(quest.id), 2);
  const first = tmp[0];
  const dependencyMap = first;
  const items = [quest];
  const memo = React.useMemo(() => arg0(first[31]).supportedTaskPlatforms(arg0), items);
  const hasItem = memo.includes(constants.DESKTOP);
  let closure_3 = hasItem;
  const hasItem1 = memo.includes(constants.CONSOLE);
  const callback3 = hasItem1;
  const items1 = [questTaskDetails];
  const tmp5 = useIsQuestProgressingOnDesktop(quest);
  const memo1 = React.useMemo(() => {
    const match = arg0(first[43]).match(arg1);
    const str = arg0(first[43]);
    let obj = { taskType: arg0(first[32]).FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
    const withResult = match.with({ percentComplete: 0 }, () => null);
    obj = { taskType: arg0(first[32]).FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
    const withResult1 = match.with({ percentComplete: 0 }, () => null).with(obj, () => constants.DESKTOP);
    const withResult2 = match.with({ percentComplete: 0 }, () => null).with(obj, () => constants.DESKTOP).with(obj, () => constants.DESKTOP);
    const obj1 = { taskType: arg0(first[32]).FirstPartyQuestTaskTypes.WATCH_VIDEO };
    const withResult3 = withResult2.with({ taskType: arg0(first[32]).FirstPartyQuestTaskTypes.WATCH_VIDEO }, () => constants.DESKTOP);
    const obj2 = { taskType: arg0(first[32]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE };
    const withResult4 = withResult3.with({ taskType: arg0(first[32]).FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE }, () => constants.DESKTOP);
    const obj3 = { taskType: arg0(first[32]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
    const withResult5 = withResult4.with({ taskType: arg0(first[32]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP }, () => constants.DESKTOP);
    const obj4 = { taskType: arg0(first[32]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX };
    const withResult6 = withResult5.with({ taskType: arg0(first[32]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX }, () => constants.CONSOLE);
    const obj5 = { taskType: arg0(first[32]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION };
    const withResult7 = withResult6.with({ taskType: arg0(first[32]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION }, () => constants.CONSOLE);
    const obj6 = { taskType: arg0(first[32]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME };
    const withResult8 = withResult7.with({ taskType: arg0(first[32]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME }, () => constants.DESKTOP);
    const obj7 = { taskType: arg0(first[32]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY };
    return withResult8.with({ taskType: arg0(first[32]).FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY }, () => constants.DESKTOP).exhaustive();
  }, items1);
  const React = memo1;
  if (tmp5) {
    let DESKTOP = constants.DESKTOP;
  } else {
    DESKTOP = null;
    if (tmp6) {
      DESKTOP = constants.CONSOLE;
    }
  }
  let closure_6 = DESKTOP;
  const items2 = [hasItem1, hasItem, memo1, DESKTOP, first];
  const items3 = [
    React.useMemo(() => {
      let obj = { lastPlatformProgress: memo1, currentProgressingPlatform: DESKTOP, selectedPlatform: first };
      const match = arg0(first[43]).match(obj);
      obj = { currentProgressingPlatform: constants.CONSOLE };
      const str = arg0(first[43]);
      obj = { currentProgressingPlatform: constants.DESKTOP };
      const withResult = match.with(obj, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE);
      const obj1 = { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE };
      const withResult1 = match.with(obj, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP);
      const obj2 = { currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP };
      const withResult2 = match.with(obj, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE }, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE);
      const obj3 = { <string:887743427>: "o", <string:1634607342>: "o", selectedPlatform: constants.CONSOLE };
      const withResult3 = match.with(obj, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE }, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP }, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP);
      const obj4 = { <string:887743427>: "o", <string:1634607342>: "o", selectedPlatform: constants.DESKTOP };
      const withResult4 = match.with(obj, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE }, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP }, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP).with(obj3, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE);
      const withResult5 = match.with(obj, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE }, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP }, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP).with(obj3, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with(obj4, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP);
      return match.with(obj, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with(obj, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE }, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with({ currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP }, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP).with(obj3, () => callback(closure_2[19]).TaskPlatformScreen.CONSOLE).with(obj4, () => callback(closure_2[19]).TaskPlatformScreen.DESKTOP).with({ -9223372036854775808: false, 9223372036854775807: false, 0: null }, () => {
        if (closure_4) {
          if (closure_3) {
            let SELECT = callback(closure_2[19]).TaskPlatformScreen.SELECT;
          }
          return SELECT;
        }
        const TaskPlatformScreen = callback(closure_2[19]).TaskPlatformScreen;
        SELECT = closure_4 ? TaskPlatformScreen.CONSOLE : TaskPlatformScreen.DESKTOP;
      }).exhaustive();
    }, items2),
    memo,
    tmp[1]
  ];
  return items3;
}
function useIsPreviewerOnAnyQuest() {
  const items = [closure_12];
  const stateFromStoresArray = arg1(dependencyMap[13]).useStateFromStoresArray(items, () => {
    const quests = quests.quests;
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
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => quests.quests);
  const arg1 = stateFromStores;
  if (null != questIds) {
    questIds = questIds.questIds;
  }
  const importDefault = questIds;
  const items1 = [stateFromStores, questIds];
  return React.useMemo(() => {
    if (null == questIds) {
      let obj = { shelfQuests: [], isShelfEnabled: false };
      return obj;
    } else {
      const mapped = questIds.map((arg0) => lib.get(arg0));
      const found = mapped.filter(stateFromStores(closure_2[51]).isNotNullish);
      const found1 = found.filter((value) => !lib(closure_2[20]).isQuestExpired(value));
      if (found1.length <= 1) {
        obj = { shelfQuests: [], isShelfEnabled: false };
      } else {
        obj = { shelfQuests: found1, isShelfEnabled: true };
      }
      return obj;
    }
  }, items1);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const useConsoleQuestUIStore = arg1(dependencyMap[8]).useConsoleQuestUIStore;
let closure_12 = importDefault(dependencyMap[9]);
({ QuestTaskPlatform: closure_13, QuestsExperimentLocations: closure_14, MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES: closure_15, QuestHomeSortMethods: closure_16, SORTED_QUEST_HOME_FILTER_GROUPS: closure_17, TaskFilterTypes: closure_18, RewardFilterTypes: closure_19, MOBILE_ORBS_INTRO_QUEST_ID: closure_20, ORBS_INTRO_QUEST_ID: closure_21 } = arg1(dependencyMap[10]));
const tmp2 = arg1(dependencyMap[10]);
({ HelpdeskArticles: closure_22, PlatformTypes: closure_23, ThemeTypes: closure_24, AnalyticEvents: closure_25 } = arg1(dependencyMap[11]));
const PremiumTypes = arg1(dependencyMap[12]).PremiumTypes;
let closure_27 = -1;
let closure_28 = {};
let closure_29 = { -9223372036854775808: true, 0: true };
let closure_30 = { DESC: 0, [0]: "DESC", ASC: 1, [1]: "ASC" };
let obj = { ALL: "all", CLAIMED: "claimed", PREVIEW_TOOL: "preview_tool" };
function useQuestTaskDetails(quest) {
  const arg1 = quest;
  const items = [quest];
  const callback = React.useCallback(() => arg0(closure_2[23]).getQuestTaskDetails(arg0), items);
  const importDefault = callback;
  const tmp2 = callback3(React.useState(callback()), 2);
  let closure_2 = tmp2[1];
  const items1 = [callback];
  const callback1 = React.useCallback(() => callback(callback()), items1);
  let closure_3 = callback1;
  const tmp4 = useIsQuestProgressing(quest);
  const callback3 = tmp4;
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
          if (tmp4) {
            const _window = window;
            const quest = window.setInterval(() => {
              callback();
            }, callback(closure_2[21]).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              callback();
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
let closure_34 = 6 * importDefault(dependencyMap[21]).Millis.HOUR;
const MINUTE = importDefault(dependencyMap[21]).Millis.MINUTE;
const tmp3 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[58]).fileFinishedImporting("modules/quests/hooks/QuestHooks.tsx");

export { useQuests };
export { sortQuests };
export const QuestTabs = obj;
export const QuestQueryParams = { TAB: "tab", QUEST_ID: "quest_id", SORT: "sort", FILTER: "filter", AD_CREATIVE_IDS: "ad_creative_ids" };
export const useFilteredQuests = function useFilteredQuests(ALL, importAllResult) {
  let excludedQuests;
  let hasFetched;
  let isFetchingCurrentQuests;
  let iter2;
  let tmp = importAllResult;
  if (importAllResult === undefined) {
    tmp = closure_28;
  }
  const tmp2 = useQuests({});
  let quests = tmp2.quests;
  ({ excludedQuests, isFetchingCurrentQuests, hasFetched } = tmp2);
  const map = new Map(quests.map((id) => {
    const items = [id.id, id];
    return items;
  }));
  let tmp4 = function useCompletedAndClaimedQuests(quests) {
    const items = [quests];
    const memo = React.useMemo(() => arg0.filter((userStatus) => {
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
    let closure_2 = React.useRef([]);
    const items1 = [memo];
    return React.useMemo(() => {
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
              num = closure_27;
            }
            let tmp6 = num;
          } else {
            tmp6 = callback(userStatus.config.rewardsConfig.rewardsExpireAt, userStatus2.config.rewardsConfig.rewardsExpireAt, constants.DESC);
          }
          return tmp6;
        });
        const mapped = sorted.map((id) => id.id);
        ref.current = mapped;
        return mapped;
      }
    }, items1);
  }(quests);
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
        let tmp8 = closure_31;
        removeExpiredQuests = ALL === closure_31.ALL;
      }
      if (removeExpiredQuests) {
        removeExpiredQuests = tmp.removeExpiredQuests;
      }
      if (removeExpiredQuests) {
        let tmp9 = closure_49;
        removeExpiredQuests = closure_49(value);
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
  const callback = React.useRef(false);
  const items = [closure_12];
  const claimedQuests = callback(dependencyMap[13]).useStateFromStoresArray(items, () => {
    const claimedQuests = closure_12.claimedQuests;
    return Array.from(claimedQuests.values());
  });
  const obj = callback(dependencyMap[13]);
  const items1 = [closure_12];
  const isFetchingClaimedQuests = callback(dependencyMap[13]).useStateFromStores(items1, () => closure_12.isFetchingClaimedQuests);
  const importDefault = isFetchingClaimedQuests;
  const items2 = [isFetchingClaimedQuests];
  const effect = React.useEffect(() => {
    let current = isFetchingClaimedQuests;
    if (!isFetchingClaimedQuests) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const claimedQuests = ref(closure_2[15]).fetchClaimedQuests();
      const obj = ref(closure_2[15]);
    }
  }, items2);
  return { claimedQuests, isFetchingClaimedQuests };
};
export const useExpiredQuestsMap = function useExpiredQuestsMap() {
  const items = [closure_12];
  return arg1(dependencyMap[13]).useStateFromStores(items, () => expiredQuestsMap.getExpiredQuestsMap());
};
export const useShouldShowBonusOrbsUX = function useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility) {
  const tmp = useIsQuestExpired(quest);
  const result = questOrbMultiplierEligibility(dependencyMap[25]).hasVirtualCurrencyReward(quest.config);
  const obj = questOrbMultiplierEligibility(dependencyMap[25]);
  const result1 = questOrbMultiplierEligibility(dependencyMap[25]).hasPremiumOrbQuantity(quest.config);
  let tmp5 = !tmp;
  const obj2 = questOrbMultiplierEligibility(dependencyMap[25]);
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
  const arg1 = questId;
  const items = [closure_12];
  const items1 = [questId];
  return arg1(dependencyMap[13]).useStateFromStores(items, () => {
    const quest = quest.getQuest(arg0);
    let questOrbMultiplier = null;
    if (null != quest) {
      questOrbMultiplier = arg0(closure_2[25]).getQuestOrbMultiplier(quest.config);
      const obj = arg0(closure_2[25]);
    }
    return questOrbMultiplier;
  }, items1);
};
export { useIsQuestExpired };
export const useIsQuestEligibleForMembersListPopout = function useIsQuestEligibleForMembersListPopout(userStatus) {
  const arg1 = userStatus;
  const importDefault = arg1;
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => {
    let channelId;
    if (null != arg1) {
      channelId = arg1.channelId;
    }
    const channel = channel.getChannel(channelId);
    let tmp5 = null;
    if (null != channel) {
      tmp5 = channel;
    }
    return tmp5;
  });
  const obj = arg1(dependencyMap[13]);
  const items1 = [closure_12];
  const stateFromStores1 = arg1(dependencyMap[13]).useStateFromStores(items1, () => null != questExpired.questEnrollmentBlockedUntil, []);
  const obj2 = arg1(dependencyMap[13]);
  const items2 = [closure_9];
  const stateFromStores2 = arg1(dependencyMap[13]).useStateFromStores(items2, () => {
    const currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id;
  });
  const obj3 = arg1(dependencyMap[13]);
  const items3 = [closure_12];
  const items4 = [userStatus];
  if (null != userStatus) {
    if (!stateFromStores1) {
      if (!obj4.useStateFromStores(items3, () => {
        let isQuestExpiredResult = null != arg0;
        if (isQuestExpiredResult) {
          isQuestExpiredResult = questExpired.isQuestExpired(arg0.id);
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
  arg1 = rewardsExpireAt;
  if (arg1 === undefined) {
    const obj = { dateStyle: "short" };
    tmp = obj;
  }
  const importDefault = tmp;
  let dependencyMap;
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => locale.locale);
  dependencyMap = stateFromStores;
  const items1 = [rewardsExpireAt, tmp, stateFromStores];
  return React.useMemo(() => {
    let str = "";
    if (null != arg0) {
      const _Date = Date;
      const date = new Date(arg0);
      str = date.toLocaleDateString(stateFromStores, tmp);
    }
    return str;
  }, items1);
};
export const useOnOpenGameClick = function useOnOpenGameClick(quest) {
  quest = quest.quest;
  const arg1 = quest;
  const content = quest.content;
  const importDefault = content;
  const ctaContent = quest.ctaContent;
  const dependencyMap = ctaContent;
  const sourceQuestContent = quest.sourceQuestContent;
  let closure_3 = sourceQuestContent;
  const getQuestImpressionId = arg1(dependencyMap[29]).useGetQuestImpressionId();
  let closure_4 = getQuestImpressionId;
  const items = [quest, content, ctaContent, getQuestImpressionId, sourceQuestContent];
  return React.useCallback(() => {
    if (quest.id !== closure_21) {
      let obj = { content, ctaContent, impressionId: getQuestImpressionId(), sourceQuestContent };
      quest(ctaContent[31]).openGameLinkDirectly(quest, obj);
      const obj2 = quest(ctaContent[31]);
    } else {
      const _window = window;
      obj = content(ctaContent[30]);
      window.open(obj.getArticleURL(constants.VIRTUAL_CURRENCY_LEARN_MORE));
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
  quest = quest.quest;
  const arg1 = quest;
  ({ questContent: closure_1, sourceQuestContent: closure_2 } = quest);
  let closure_3 = useWaitingForConsoleConnection({ quest });
  let closure_4 = arg1(dependencyMap[29]).useGetQuestImpressionId();
  return () => {
    let obj = quest(closure_2[31]);
    if (closure_3) {
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
  const arg1 = arg0;
  const items = [closure_12];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => quests.quests);
  const importDefault = stateFromStores;
  const items1 = [arg0, stateFromStores, useGetOrFetchApplicationForConsoleQuests(Array.from(stateFromStores.values()))];
  const memo = React.useMemo(() => {
    const result = arg0(closure_2[22]).filterQuestsForSocialEntrypoints(stateFromStores, closure_15);
    const obj = arg0(closure_2[22]);
    return arg0(closure_2[36]).getQuestsFromActivities(result, arg0);
  }, items1);
  let tmp2 = null;
  if (!useIsQuestExpired(memo)) {
    tmp2 = memo;
  }
  return tmp2;
};
export const useQuestCollectibles = function useQuestCollectibles(config) {
  let obj = arg1(dependencyMap[25]);
  const result = obj.hasCollectiblesQuestReward(config);
  const defaultReward = arg1(dependencyMap[37]).getDefaultReward(config);
  const obj2 = arg1(dependencyMap[37]);
  const fetchCollectiblesProduct = arg1(dependencyMap[38]).useFetchCollectiblesProduct(defaultReward.skuId);
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
  const arg1 = id;
  const items = [id];
  return React.useMemo(() => ({
    handleComplete() {
      return callback(closure_2[15]).completeQuestPreview(callback);
    },
    handleProgress(random) {
      return callback(closure_2[15]).completeQuestPreview(callback, random);
    },
    handleResetStatusClick() {
      return callback(closure_2[15]).resetQuestPreviewStatus(callback);
    },
    handleResetDismissibilityClick() {
      return callback(closure_2[15]).resetQuestDismissibilityStatus(callback);
    },
    handleOverridePreviewClick(placement) {
      return callback(closure_2[15]).overrideQuestForPlacement(placement, callback);
    },
    handleResetHasBeenSeenClick() {
      const items = [callback];
      return callback(closure_2[15]).markAdContentUnseen(callback(closure_2[39]).AdCreativeType.QUEST, items);
    }
  }), items);
};
export { useConnectedAccounts };
export const useManuallyStartConsoleQuest = function useManuallyStartConsoleQuest(questId) {
  questId = questId.questId;
  const arg1 = questId;
  const preview = questId.preview;
  const importDefault = preview;
  const beforeRequest = questId.beforeRequest;
  const dependencyMap = beforeRequest;
  const afterRequest = questId.afterRequest;
  const callback2 = afterRequest;
  const tmp2 = callback3(React.useState(false), 2);
  const first = tmp2[0];
  const callback3 = first;
  const React = tmp2[1];
  let obj = arg1(dependencyMap[13]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => accounts.getAccounts());
  const tmp5 = useConsoleQuestUIStore((clearErrorHintsByType) => clearErrorHintsByType.clearErrorHintsByType);
  let closure_6 = tmp5;
  const items1 = [questId];
  const callback = React.useCallback((arg0) => {
    const state = state.getState();
    return state.setErrorHints(questId, arg0);
  }, items1);
  let closure_7 = callback;
  const items2 = [stateFromStores, tmp5, questId];
  const effect = React.useEffect(() => {
    tmp5(questId, questId(beforeRequest[40]).QuestConsoleStartError.EXPIRED_CREDENTIAL);
  }, items2);
  obj = { startConsoleQuest: React.useCallback(callback2(tmp), items3), startingConsoleQuest: first };
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [first, beforeRequest, afterRequest, preview, questId, callback];
  return obj;
};
export { useWaitingForConsoleConnection };
export const useQuestHowToHelpArticle = function useQuestHowToHelpArticle() {
  const tmp = useConnectedAccounts();
  let obj = importDefault(dependencyMap[30]);
  const articleURL = obj.getArticleURL(constants6.QUEST_HOW_TO_PLAYSTATION);
  const articleURL1 = importDefault(dependencyMap[30]).getArticleURL(constants6.QUEST_HOW_TO_XBOX);
  const intl = arg1(dependencyMap[41]).intl;
  const formatResult = intl.format(arg1(dependencyMap[41]).t.beN4DG, { psHelpdeskArticle: articleURL, xboxHelpdeskArticle: articleURL1 });
  const intl2 = arg1(dependencyMap[41]).intl;
  obj = {};
  let tmp7 = articleURL1;
  if (tmp.playstationAccounts.length > 0) {
    tmp7 = articleURL;
  }
  obj.helpdeskArticle = tmp7;
  obj = {};
  const obj2 = importDefault(dependencyMap[30]);
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
  tmp9 = intl2.format(arg1(dependencyMap[41]).t.HVS7nh, obj);
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
  let obj = arg1(dependencyMap[13]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
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
  combined = arg1(dependencyMap[42]).formatPercent(stateFromStores, percentComplete, { roundingMode: "floor" });
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
  const DESKTOP = arg1(dependencyMap[32]).FirstPartyQuestTaskTypesSets.DESKTOP;
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
        tmp9 = callback3(useTaskPlatformScreen(userStatus, tmp2), 1)[0] === arg1(dependencyMap[19]).TaskPlatformScreen.DESKTOP;
      }
      tmp8 = tmp9;
    }
    tmp5 = tmp8;
  }
  const tmp3 = useIsQuestExpired(userStatus);
  const tmp7 = null != completedAt;
  let tmp12 = arg1(dependencyMap[16]).isWeb() && tmp5;
  if (tmp12) {
    tmp12 = !arg1(dependencyMap[31]).isQuestSupportedOnWeb(userStatus);
    const obj2 = arg1(dependencyMap[31]);
  }
  const items = [];
  const obj = arg1(dependencyMap[16]);
  let isMacResult = arg1(dependencyMap[16]).isMac();
  if (isMacResult) {
    isMacResult = tmp2.taskType === arg1(dependencyMap[32]).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP;
  }
  if (isMacResult) {
    isMacResult = tmp5;
  }
  if (isMacResult) {
    const intl = arg1(dependencyMap[41]).intl;
    items.push(intl.string(arg1(dependencyMap[41]).t.MFGxFM));
  }
  if (tmp12) {
    const intl2 = arg1(dependencyMap[41]).intl;
    items.push(intl2.string(arg1(dependencyMap[41]).t.BV6xDm));
  }
  return items;
};
export const useQuest = function useQuest(arg0) {
  const items = [closure_12];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => quests.quests);
  const value = stateFromStores.get(arg0);
  let tmp2 = null;
  if (null != value) {
    tmp2 = value;
  }
  return tmp2;
};
export const useNonNullableQuest = function useNonNullableQuest(questId, callback) {
  callback = questId;
  const importDefault = callback;
  const items = [closure_12];
  const items1 = [questId];
  const stateFromStores = callback(dependencyMap[13]).useStateFromStores(items, () => quest.getQuest(arg0), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = stateFromStores;
  }
  const dependencyMap = tmp2;
  const items2 = [tmp2, questId, callback];
  const effect = React.useEffect(() => {
    if (null == tmp2) {
      const quests = quest.quests;
      const items = [];
      HermesBuiltin.arraySpread(quests.keys(), 0);
      let obj = arg0(tmp2[20]);
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Quest unexpectedly missing from store: " + arg0);
      obj = {};
      obj = { source: "useNonNullableQuest" };
      obj.tags = obj;
      const obj1 = { questId: arg0, storeQuestIds: items, storeSize: items.length, isFetchingCurrentQuests: quest.isFetchingCurrentQuests, lastFetchedCurrentQuests: quest.lastFetchedCurrentQuests };
      obj.extra = obj1;
      const result = obj.captureQuestsException(error, obj);
      if (null != arg1) {
        const tmp2 = arg1();
      }
    }
  }, items2);
  return tmp2;
};
export const useQuestBarOrDockModeChangeTracking = function useQuestBarOrDockModeChangeTracking(mode) {
  mode = mode.mode;
  const arg1 = mode;
  const questContent = mode.questContent;
  const importDefault = questContent;
  const sourceQuestContent = mode.sourceQuestContent;
  const dependencyMap = sourceQuestContent;
  const questId = mode.questId;
  let closure_3 = questId;
  let closure_4 = React.useRef(null);
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
  const effect1 = React.useEffect(() => null != questId ? () => {
    let obj = callback(closure_2[44]);
    obj = { mode: null, prevMode: ref.current, questContent: closure_1, questId: closure_3, sourceQuestContent: closure_2 };
    const result = obj.trackQuestBarOrDockModeChange(obj);
  } : undefined, items1);
};
export const useCosponsoredLogotypeAsset = function useCosponsoredLogotypeAsset(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_12];
  const items1 = [arg0];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => quest.getQuest(arg0), items1);
  const dependencyMap = stateFromStores;
  const tmp2 = importDefault(dependencyMap[45])();
  let closure_3 = tmp2;
  const items2 = [tmp2, arg1, stateFromStores];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      return null;
    } else {
      if (null != arg1) {
        let tmp5 = arg1;
      } else {
        tmp5 = arg0(stateFromStores[46]).isThemeDark(tmp2) ? tmp4.DARK : tmp4.LIGHT;
        const obj = arg0(stateFromStores[46]);
      }
      return arg0(stateFromStores[47]).getQuestAsset(stateFromStores, arg0(stateFromStores[47]).QuestAssetType.COSPONSOR_LOGO_TYPE, tmp5);
    }
  }, items2);
};
export const useClaimedCollectibleRewardMessage = function useClaimedCollectibleRewardMessage(config) {
  let obj = arg1(dependencyMap[13]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = arg1(dependencyMap[25]);
  const defaultRewardName = obj1.getDefaultRewardName(config, stateFromStores);
  let obj2 = arg1(dependencyMap[25]);
  const collectibleQuestRewardDuration = obj2.getCollectibleQuestRewardDuration(config);
  let obj3 = arg1(dependencyMap[25]);
  const collectibleQuestRewardExtendableExpirationDate = obj3.getCollectibleQuestRewardExtendableExpirationDate(config);
  let obj4 = arg1(dependencyMap[25]);
  const result = obj4.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
  const result1 = arg1(dependencyMap[25]).isCollectibleQuestRewardPremiumExtendable(config);
  const obj6 = arg1(dependencyMap[25]);
  const isPremiumResult = arg1(dependencyMap[48]).isPremium(stateFromStores, PremiumTypes.TIER_2);
  if (null == collectibleQuestRewardDuration) {
    const intl2 = arg1(dependencyMap[41]).intl;
    obj = { decorationName: defaultRewardName };
    return intl2.formatToPlainString(arg1(dependencyMap[41]).t.l9uXL8, obj);
  } else {
    const intl3 = arg1(dependencyMap[41]).intl;
    obj = { rewardName: defaultRewardName };
    const intl4 = arg1(dependencyMap[41]).intl;
    obj1 = { rewardName: defaultRewardName, expirationDate: collectibleQuestRewardExtendableExpirationDate };
    const formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[41]).t.o97tNn, obj);
    const intl5 = arg1(dependencyMap[41]).intl;
    obj2 = { rewardName: defaultRewardName, duration: collectibleQuestRewardDuration };
    let formatToPlainStringResult2 = intl5.formatToPlainString(arg1(dependencyMap[41]).t.ie4YK0, obj2);
    const intl6 = arg1(dependencyMap[41]).intl;
    obj3 = { duration: collectibleQuestRewardDuration, rewardName: defaultRewardName };
    let formatToPlainStringResult3 = intl6.formatToPlainString(arg1(dependencyMap[41]).t.yCpc0U, obj3);
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
      const intl = arg1(dependencyMap[41]).intl;
      obj4 = { duration: collectibleQuestRewardDuration, decorationName: defaultRewardName };
      return intl.formatToPlainString(arg1(dependencyMap[41]).t.tTlItm, obj4);
    }
    const formatToPlainStringResult1 = intl4.formatToPlainString(arg1(dependencyMap[41]).t.PkyRZo, obj1);
  }
};
export const useLaunchInGameActivityQuest = function useLaunchInGameActivityQuest(quest) {
  let obj = arg1(dependencyMap[23]);
  obj = {};
  const activityApplicationId = obj.getActivityApplicationId(quest);
  obj.launchInGameActivity = importDefault(dependencyMap[49])({ applicationId: activityApplicationId });
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
    isDismissedResult = arg1(dependencyMap[20]).isDismissed(userStatus.userStatus, arg1(dependencyMap[19]).QuestContent.ACTIVITY_PANEL);
    const obj = arg1(dependencyMap[20]);
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
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => null != obj.questEnrollmentBlockedUntil, []);
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
  const items = [closure_12];
  const stateFromStoresArray = arg1(dependencyMap[13]).useStateFromStoresArray(items, () => {
    const quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  const arg1 = stateFromStoresArray;
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
    const obj = { heading: callback(closure_2[37]).getFilterGroupHeadingText(tmp), options: tmp2 };
    return obj;
  }), items);
};
export const useQuestHomeSortOptions = function useQuestHomeSortOptions() {
  return React.useMemo(() => {
    const keys = Object.keys(closure_16);
    return keys.map((arg0) => {
      const obj = { label: callback(closure_2[37]).getSortMethodText(closure_16[arg0]), value: closure_16[arg0] };
      return obj;
    });
  }, []);
};
export const useQuestHomeSortingFilteringAnalytics = function useQuestHomeSortingFilteringAnalytics(selectedSortMethod) {
  selectedSortMethod = selectedSortMethod.selectedSortMethod;
  const arg1 = selectedSortMethod;
  const selectedFilters = selectedSortMethod.selectedFilters;
  const importDefault = selectedFilters;
  const numQuestsVisible = selectedSortMethod.numQuestsVisible;
  const dependencyMap = numQuestsVisible;
  let closure_3 = React.useRef(null);
  let closure_4 = React.useRef(null);
  const items = [selectedSortMethod];
  const effect = React.useEffect(() => {
    let obj = selectedFilters(numQuestsVisible[50]);
    obj = { sort_method: selectedSortMethod, previous_sort_method: ref.current };
    obj.track(constants.QUEST_HOME_SORT_METHOD_CHANGED, obj);
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
    obj.track(constants.QUEST_HOME_FILTERS_CHANGED, obj);
    ref2.current = mapped;
  }, items1);
};
export const useShouldShowQuestPreviewOverrides = function useShouldShowQuestPreviewOverrides(quest) {
  let preview = React.useMemo(() => {
    const currentUser = currentUser.getCurrentUser();
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
  const arg1 = previewAdCreativeIds;
  let importDefault;
  let dependencyMap;
  let closure_3;
  let callback3;
  const showBounties = arg1(dependencyMap[52]).useBountiesExperience(constants2.QUEST_HOME_MOBILE).showBounties;
  importDefault = showBounties;
  const BountyStaleRefreshQuestHomeExperiment = arg1(dependencyMap[27]).BountyStaleRefreshQuestHomeExperiment;
  obj = { location: constants2.QUEST_HOME_MOBILE };
  const enabled = BountyStaleRefreshQuestHomeExperiment.useConfig(obj).enabled;
  dependencyMap = enabled;
  const obj2 = arg1(dependencyMap[52]);
  const videoModalPlacementEnabled = arg1(dependencyMap[53]).useVideoModalPlacementEnabled("useFetchQuestHomeBounties");
  const AdPlacement = arg1(dependencyMap[19]).AdPlacement;
  const tmp2 = videoModalPlacementEnabled ? AdPlacement.VIDEO_MODAL_MOBILE : AdPlacement.QUEST_HOME_MOBILE_CAROUSEL;
  closure_3 = tmp2;
  const tmp3 = callback3(React.useState(showBounties), 2);
  let first = tmp3[0];
  callback3 = tmp3[1];
  const obj4 = arg1(dependencyMap[53]);
  const items = [closure_10];
  const stateFromStoresObject = arg1(dependencyMap[13]).useStateFromStoresObject(items, () => ({ isFetching: closure_10.isFetchingQuestHomeBounties, questHomeBounties: closure_10.questHomeBounties }));
  const items1 = [showBounties, enabled, previewAdCreativeIds, tmp2];
  ({ isFetching, questHomeBounties } = stateFromStoresObject);
  const effect = React.useEffect(() => {
    function loadBounties(arg0) {
      return _loadBounties(...arguments);
    }
    function _loadBounties() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = loadBounties(tmp);
      const _loadBounties = obj;
      return obj(...arguments);
    }
    if (closure_1) {
      let closure_0 = false;
      closure_1 = 0;
      const bounties = loadBounties();
      if (interval) {
        const _window = window;
        const interval = window.setInterval(() => {
          if (Date.now() - closure_1 > closure_34) {
            loadBounties();
          }
        }, closure_35);
        return () => {
          let closure_0 = true;
          window.clearInterval(closure_2);
        };
      } else {
        return () => {
          let closure_0 = true;
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
  const items = [closure_10];
  return arg1(dependencyMap[13]).useStateFromStoresObject(items, () => ({ questHomeBounties: closure_10.questHomeBounties, isFetching: closure_10.isFetchingQuestHomeBounties }));
};
export const useQuestBarImpressionSurvey = function useQuestBarImpressionSurvey(quest) {
  const arg1 = quest;
  let enrolledAt;
  const DropsOptedOut = arg1(dependencyMap[55]).DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const importDefault = setting;
  const userStatus = quest.userStatus;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  const dependencyMap = tmp3;
  const items = [setting, null != enrolledAt, quest.id];
  return React.useCallback(() => {
    if (!tmp3) {
      let tmp4;
      let fireSurveyAction = arg0(tmp3[56]).SurveyActionTypes;
      tmp4 = arg0(tmp3[57]);
      fireSurveyAction = tmp4.fireSurveyAction;
      const obj = { quest_id: arg0.id };
      fireSurveyAction(setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN, obj);
      const tmp5 = setting ? fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_OUT : fireSurveyAction.AD_IMPRESSION_QUEST_BAR_OPT_IN;
    }
  }, items);
};
