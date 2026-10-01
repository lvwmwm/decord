// Module ID: 10681
// Function ID: 10682
// Name: hooks/QuestHooks
// Dependencies: [5, 32, 19, 7113, 2112, 2045, 5593, 1372, 7115, 7117, 7116, 5756, 1074, 1374, 504, 10682, 10683, 1364, 10704, 7112, 1091, 7135, 7137, 7140, 10694, 12, 1240, 10708, 10709, 10697, 10711, 2111, 10719, 5764, 10735, 7141, 6589, 8813, 10699, 10508, 5763, 10738, 1115, 1882, 5021, 5759, 7131, 4767, 4685, 10689, 4488, 10739, 1241, 1370, 10743, 10744, 2021, 5034, 5026, 2]
// Exports: useClaimedCollectibleRewardMessage, useClaimedQuests, useConnectedAccounts, useConnectedConsoleLinkOnClick, useCosponsoredLogotypeAsset, useExpiredQuestsMap, useFetchQuestHomeBounties, useFilteredQuests, useGetOrFetchApplicationForConsoleQuests, useIsPreviewerOnAnyQuest, useIsQuestAccessSuspended, useIsQuestEligibleForMembersListPopout, useIsQuestExpired, useIsQuestProgressingOnConsole, useIsQuestProgressingOnDesktop, useIsQuestProgressingVideoQuest, useLaunchInGameActivityQuest, useManuallyStartConsoleQuest, useNonNullableQuest, useOnOpenGameClick, useProgressState, useQuest, useQuestBarImpressionSurvey, useQuestBarOrDockModeChangeTracking, useQuestCollectibles, useQuestCompletionDetails, useQuestForMemberListSocialEntryPoint, useQuestFormattedDate, useQuestHomeBounties, useQuestHomeFilterOptions, useQuestHomeHeroShelf, useQuestHomeSortOptions, useQuestHomeSortingFilteringAnalytics, useQuestHowToHelpArticle, useQuestOrbRewardMultiplier, useQuestPreviewActions, useQuestWarningTips, useQuestsWithPreviewAccess, useSelectedTaskPlatform, useShouldShowBonusOrbsUX, useShouldShowPreviewToolTab, useShouldShowQuestPreviewOverrides, useShouldShowQuestsActivityPanelItem, useThirdPartyTaskDetails, useWaitingForConsoleConnection

// Module 10681 (hooks/QuestHooks)
import get_initialized from "get initialized" /* 504 */;
import DurationsDefault from "Durations" /* 1091 */;
import intl7 from "intl" /* 1115 */;
import _modDef1240 from "module_1240" /* 1240 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import shared from "shared" /* 4685 */;
import merged5 from "merged5" /* 5021 */;
import QualtricsActionCreators from "QualtricsActionCreators" /* 5026 */;
import SurveyActionTypes2 from "SurveyActionTypes" /* 5034 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5764 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6589 */;
import QuestDataUtils from "QuestDataUtils" /* 7112 */;
import ConsoleQuestUIStore from "ConsoleQuestUIStore" /* 7117 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7135 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7137 */;
import QuestType from "QuestType" /* 7140 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import QuestMatchingUtils from "QuestMatchingUtils" /* 8813 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10508 */;
import QuestActionCreators from "QuestActionCreators" /* 10683 */;
import AssetUtils from "AssetUtils" /* 10689 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10694 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10699 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10704 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10719 */;
import QuestConsoleStartError from "QuestConsoleStartError" /* 10738 */;
import useRefocusOrLaunchActivityDefault from "useRefocusOrLaunchActivity" /* 10739 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7113 */;
import LocaleStore_mod from "LocaleStore" /* 2112 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import UserStore from "UserStore" /* 1372 */;
import BountyStore from "BountyStore" /* 7115 */;
import QuestStore from "QuestStore" /* 7116 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, c5, dependencyMap, importDefault, map, set;

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
let closure_26;
let closure_27;
const f91694 = () => {
  const isQuestExpiredResult = null != c0 && QuestStore.isQuestExpired(tmp.id);
  return isQuestExpiredResult;
};
const f91696 = () => {
  const obj = quest(first[22]);
  return obj.isQuestProgressingOnConsole(quest);
};
const f91697 = () => optimisticProgress.getOptimisticProgress(closure_0.id, closure_0(dependencyMap[33]).FirstPartyQuestTaskTypes.WATCH_VIDEO);
const f91698 = () => {
  const obj = quest(dependencyMap[34]);
  return obj.isVideoQuestProgressing(quest);
};
const f91699 = () => {
  const obj = quest(closure_2[22]);
  return obj.getThirdPartyTaskDetails(quest);
};
const f91701 = () => {
  const obj = { fetching: ConnectedAccountsStore.isFetching(), accounts: ConnectedAccountsStore.getAccounts() };
  return obj;
};
const f91708 = () => {
  quests = quests.quests;
  const items = [...quests.values()];
  return items;
};
const f91709 = (preview) => preview.preview;
const f91710 = () => quests.quests;
function useQuests(arg0) {
  let closure_2;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { fetchPolicy: "cache-only", callerSource: "unknown" };
  }
  let lastFetchedCurrentQuests;
  let isEligibleForQuests;
  const tmp = lastFetchedCurrentQuests(isEligibleForQuests.useState(false), 2);
  const hasFetched = tmp[0];
  dependencyMap = tmp[1];
  obj2 = obj(504);
  let items = [QuestStore];
  let quests = obj2.useStateFromStoresArray(items, () => {
    const quests = QuestStore.quests;
    const items = [...quests.values()];
    return items;
  });
  let obj3 = obj(504);
  const items1 = [QuestStore];
  let excludedQuests = obj3.useStateFromStoresArray(items1, () => {
    const excludedQuests = QuestStore.excludedQuests;
    const items = [...excludedQuests.values()];
    return items;
  });
  const items2 = [QuestStore];
  const obj4 = obj(504);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => ({ isFetchingCurrentQuests: QuestStore.isFetchingCurrentQuests, lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests }));
  const isFetchingCurrentQuests = stateFromStoresObject.isFetchingCurrentQuests;
  lastFetchedCurrentQuests = stateFromStoresObject.lastFetchedCurrentQuests;
  const obj5 = obj(10682);
  isEligibleForQuests = obj5.getIsEligibleForQuests();
  const items3 = [obj.fetchPolicy, isEligibleForQuests, hasFetched, isFetchingCurrentQuests, lastFetchedCurrentQuests, obj.callerSource];
  const effect = isEligibleForQuests.useEffect(() => {
    const fetchPolicy = obj.fetchPolicy;
    if ("cache-only" !== fetchPolicy) {
      let flag;
      if ("cache-or-network" === fetchPolicy) {
        flag = 0 === lastFetchedCurrentQuests;
      } else {
        flag = true;
        if ("cache-and-network" !== fetchPolicy) {
          const fetchPolicy2 = tmp.fetchPolicy;
        }
      }
      if (flag) {
        flag = isEligibleForQuests;
      }
      if (flag) {
        flag = !hasFetched;
      }
      if (flag) {
        flag = !isFetchingCurrentQuests;
      }
      if (flag) {
        closure_2(true);
        obj = QuestActionCreators;
        const currentQuests = obj.fetchCurrentQuests();
        obj2 = PlatformUtils;
        if (obj2.isMac()) {
          const obj3 = DiscordAppStateDefault;
          const state = obj3.getState();
        }
      }
    }
  }, items3);
  return { quests, excludedQuests, isFetchingCurrentQuests, hasFetched };
}
function defaultSortFn(id, id2, questHomeHero, get) {
  let num6;
  let tmp2 = id.id === closure_21;
  id = id2.id;
  const tmp = closure_21;
  if (tmp2) {
    const userStatus = id.userStatus;
    let completedAt;
    if (userStatus != null) {
      completedAt = userStatus.completedAt;
    }
    tmp2 = null == completedAt;
  }
  let tmp5 = id === tmp;
  if (tmp5) {
    const userStatus2 = id2.userStatus;
    let completedAt1;
    if (userStatus2 != null) {
      completedAt1 = userStatus2.completedAt;
    }
    tmp5 = null == completedAt1;
  }
  if (tmp2 !== tmp5) {
    let num18 = 1;
    if (tmp2) {
      num18 = c29;
    }
    return num18;
  } else {
    const obj10 = QuestDataUtils;
    const userStatus12 = id.userStatus;
    let claimedAt;
    const isQuestExpiredResult = obj10.isQuestExpired(id);
    if (userStatus12 != null) {
      claimedAt = userStatus12.claimedAt;
    }
    const userStatus3 = id2.userStatus;
    let claimedAt1;
    if (userStatus3 != null) {
      claimedAt1 = userStatus3.claimedAt;
    }
    const userStatus4 = id.userStatus;
    let enrolledAt;
    if (userStatus4 != null) {
      enrolledAt = userStatus4.enrolledAt;
    }
    const userStatus5 = id2.userStatus;
    let enrolledAt1;
    if (userStatus5 != null) {
      enrolledAt1 = userStatus5.enrolledAt;
    }
    const result = 30 * DurationsDefault.Millis.MINUTE;
    const userStatus6 = id.userStatus;
    let completedAt2;
    if (userStatus6 != null) {
      completedAt2 = userStatus6.completedAt;
    }
    const userStatus7 = id.userStatus;
    let enrolledAt2;
    const tmp19 = null != completedAt2;
    if (userStatus7 != null) {
      enrolledAt2 = userStatus7.enrolledAt;
    }
    let tmp21 = null != enrolledAt2 && !tmp19;
    if (tmp21) {
      const _Date = Date;
      const userStatus8 = id.userStatus;
      let enrolledAt3;
      const timestamp = Date.now();
      const _Date2 = Date;
      if (userStatus8 != null) {
        enrolledAt3 = userStatus8.enrolledAt;
      }
      const self = this;
      const self2 = this;
      const _Date21 = new _Date2(enrolledAt3);
      tmp21 = timestamp - _Date21.getTime() > result;
    }
    const userStatus9 = id2.userStatus;
    let completedAt3;
    if (userStatus9 != null) {
      completedAt3 = userStatus9.completedAt;
    }
    const userStatus10 = id2.userStatus;
    let enrolledAt4;
    const tmp28 = null != completedAt3;
    if (userStatus10 != null) {
      enrolledAt4 = userStatus10.enrolledAt;
    }
    let tmp30 = null != enrolledAt4 && !tmp28;
    if (tmp30) {
      const _Date3 = Date;
      const userStatus11 = id2.userStatus;
      let enrolledAt5;
      const timestamp1 = Date.now();
      const _Date4 = Date;
      if (userStatus11 != null) {
        enrolledAt5 = userStatus11.enrolledAt;
      }
      const self3 = this;
      const self4 = this;
      const _Date41 = new _Date4(enrolledAt5);
      tmp30 = timestamp1 - _Date41.getTime() > result;
    }
    if (isQuestExpiredResult) {
      let result1;
      if (null != claimedAt !== (null != claimedAt1)) {
        let num17 = 1;
        if (null != claimedAt) {
          num17 = c29;
        }
        result1 = num17;
      } else if (null != enrolledAt !== (null != enrolledAt1)) {
        let num16 = 1;
        if (null != enrolledAt) {
          num16 = c29;
        }
        result1 = num16;
      } else {
        const expiresAt3 = id.config.expiresAt;
        let num15 = 1;
        const expiresAt4 = id2.config.expiresAt;
        if (constants9.DESC === constants9.DESC) {
          num15 = c29;
        }
        result1 = expiresAt3.localeCompare(expiresAt4) * num15;
      }
      return result1;
    } else {
      questHomeHero = questHomeHero.questHomeHero;
      if (null != questHomeHero) {
        if (!questHomeHero.isQuestHomeHeroShelfEnabled) {
          const tmp46Result = utils_QuestUtils;
          const result2 = tmp46Result.isQuestFeaturedByHero(questHomeHero, id.id);
          utils_QuestUtils;
          let num2 = 1;
          if (result2) {
            num2 = c29;
          }
          return num2;
        }
      }
      const isMobileQuestHomeSortPriorityEnabled = questHomeHero.isMobileQuestHomeSortPriorityEnabled;
      const tmp46Result12 = utils_QuestUtils;
      if (isMobileQuestHomeSortPriorityEnabled) {
        const hasVariantResult = tmp46Result12.hasVariant(id, constants6.MOBILE_ACTIVITY_QUEST);
        const tmp46Result13 = utils_QuestUtils;
        if (hasVariantResult !== tmp46Result13.hasVariant(id2, constants6.MOBILE_ACTIVITY_QUEST)) {
          let num14 = 1;
          if (hasVariantResult) {
            num14 = c29;
          }
          return num14;
        } else {
          const tmp46Result14 = QuestTaskUtils;
          const result3 = tmp46Result14.isVideoQuestForMobilePlatformOnly(id);
          const tmp46Result15 = QuestTaskUtils;
          if (result3 !== tmp46Result15.isVideoQuestForMobilePlatformOnly(id2)) {
            let num13 = 1;
            if (result3) {
              num13 = c29;
            }
            return num13;
          } else {
            const tmp46Result16 = QuestTaskUtils;
            const result4 = tmp46Result16.hasWatchVideoOnMobileTasks(id);
            const tmp46Result17 = QuestTaskUtils;
            if (result4 !== tmp46Result17.hasWatchVideoOnMobileTasks(id2)) {
              let num12 = 1;
              if (result4) {
                num12 = c29;
              }
              return num12;
            }
          }
        }
      } else {
        const questType = tmp46Result12.getQuestType(id.config);
        const tmp46Result18 = utils_QuestUtils;
        const questType1 = tmp46Result18.getQuestType(id2.config);
        const tmp46Result19 = QuestTaskUtils;
        const result5 = tmp46Result19.hasWatchVideoOnMobileTasks(id);
        const tmp46Result20 = QuestTaskUtils;
        const result6 = tmp46Result20.hasWatchVideoOnMobileTasks(id2);
        if (result5 !== result6) {
          let num4 = 1;
          if (result5) {
            num4 = c29;
          }
          return num4;
        }
        if (questType !== questType1) {
          let num3 = 1;
          if (questType === QuestType.QuestType.VIDEO) {
            num3 = c29;
          }
          return num3;
        }
      }
      if (tmp21 !== tmp30) {
        if (!tmp21) {
          return num6;
        }
        let num11 = 1;
        if (!tmp21) {
          num11 = c29;
        }
        num6 = num11;
      }
      if (null != claimedAt !== (null != claimedAt1)) {
        let num10 = 1;
        if (null == claimedAt) {
          num10 = c29;
        }
        num6 = num10;
      } else if (null != enrolledAt !== (null != enrolledAt1)) {
        let num9 = 1;
        if (null != enrolledAt) {
          num9 = c29;
        }
        num6 = num9;
      } else {
        const ASC = constants9.ASC;
        const value = get.get(id.id);
        const value2 = get.get(id2.id);
        const tmp54 = constants9;
        if (null != value) {
          if (null != value2) {
            let num7;
            if (value !== value2) {
              num7 = value - value2;
            } else {
              num7 = 0;
              if (id.id !== id2.id) {
                let num8 = 1;
                if (id.id < id2.id) {
                  num8 = c29;
                }
                num7 = num8;
              }
            }
            num6 = num7;
          }
        }
        if (null != value) {
          num6 = c29;
        } else {
          let num5 = 1;
          num6 = 1;
          if (null == value2) {
            const expiresAt = id.config.expiresAt;
            const expiresAt2 = id2.config.expiresAt;
            if (ASC === tmp54.DESC) {
              num5 = c29;
            }
            num6 = expiresAt.localeCompare(expiresAt2) * num5;
          }
        }
      }
    }
  }
}
function recentSortFn(config, config2) {
  const startsAt = config.config.startsAt;
  let num = 1;
  const startsAt2 = config2.config.startsAt;
  if (constants9.DESC === constants9.DESC) {
    num = c29;
  }
  return startsAt.localeCompare(startsAt2) * num;
}
function recentlyEnrolledSortFn(userStatus, userStatus2) {
  let enrolledAt;
  let num;
  userStatus = userStatus.userStatus;
  let enrolledAt1;
  if (userStatus != null) {
    enrolledAt1 = userStatus.enrolledAt;
  }
  userStatus2 = userStatus2.userStatus;
  if (userStatus2 != null) {
    enrolledAt = userStatus2.enrolledAt;
  }
  if (null == enrolledAt1) {
    if (null == enrolledAt) {
      const expiresAt = userStatus.config.expiresAt;
      let num3 = 1;
      const expiresAt2 = userStatus2.config.expiresAt;
      if (constants9.DESC === constants9.DESC) {
        num3 = c29;
      }
      num = expiresAt.localeCompare(expiresAt2) * num3;
    }
    return num;
  }
  if (null != enrolledAt1) {
    if (null == enrolledAt) {
      num = c29;
    }
  }
  if (null != enrolledAt1) {
    let num2 = 1;
    if (constants9.DESC === constants9.DESC) {
      num2 = c29;
    }
    num = enrolledAt1.localeCompare(enrolledAt) * num2;
  } else {
    num = 1;
  }
}
function expiringSoonSortFn(config, config2) {
  const expiresAt = config.config.expiresAt;
  let num = 1;
  const expiresAt2 = config2.config.expiresAt;
  if (constants9.ASC === constants9.DESC) {
    num = c29;
  }
  return expiresAt.localeCompare(expiresAt2) * num;
}
function doesQuestPassTaskFilter(quest, arg1) {
  if (constants4.VIDEO === arg1) {
    const obj8 = QuestTaskUtils;
    return obj8.hasWatchVideoTasks(quest);
  } else if (tmp.PLAY === arg1) {
    obj2 = { quest };
    const obj = QuestTaskUtils;
    let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj2);
    if (!hasPlayOnDesktopTaskResult) {
      const obj3 = { quest };
      const tmp2Result = QuestTaskUtils;
      hasPlayOnDesktopTaskResult = tmp2Result.hasStreamOnDesktopTask(obj3);
    }
    if (!hasPlayOnDesktopTaskResult) {
      const tmp2Result4 = QuestTaskUtils;
      hasPlayOnDesktopTaskResult = tmp2Result4.hasPlayActivityTask(quest);
    }
    if (!hasPlayOnDesktopTaskResult) {
      const tmp2Result5 = QuestTaskUtils;
      hasPlayOnDesktopTaskResult = tmp2Result5.isConsoleQuest(quest);
    }
    if (!hasPlayOnDesktopTaskResult) {
      const tmp2Result6 = QuestTaskUtils;
      hasPlayOnDesktopTaskResult = tmp2Result6.isInGameQuest(quest);
    }
    return hasPlayOnDesktopTaskResult;
  } else {
    return false;
  }
}
function doesQuestPassRewardFilter(config, arg1) {
  if (constants5.VIRTUAL_CURRENCY === arg1) {
    const obj4 = QuestRewardUtils;
    return obj4.hasVirtualCurrencyReward(config.config);
  } else if (constants5.COLLECTIBLE === arg1) {
    const obj3 = QuestRewardUtils;
    return obj3.hasCollectiblesQuestReward(config.config);
  } else if (constants5.IN_GAME === arg1) {
    const obj = QuestRewardUtils;
    let hasInGameQuestRewardResult = obj.hasInGameQuestReward(config.config);
    const tmp2 = require;
    if (!hasInGameQuestRewardResult) {
      const tmp2Result = tmp2(10694);
      hasInGameQuestRewardResult = tmp2Result.hasQuestRewardCode(config.config);
    }
    return hasInGameQuestRewardResult;
  } else {
    return false;
  }
}
function sortQuests(arr, arg1, memo) {
  let filters;
  let sortMethod;
  let tmp8;
  function computeRenewableQuestSortKeys(found, currentUserId, isRenewableEndDateSortEnabled) {
    map = new Map();
    const tmp = isRenewableEndDateSortEnabled;
    if (tmp) {
      if (null != currentUserId) {
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp9 = nextResult;
          obj2 = closure_0(dependencyMap[21]);
          if (obj2.hasVariant(nextResult, constants.RENEWABLE_END_DATE)) {
            let result = map.set(tmp9.id, seededQuestSortKey(currentUserId, tmp9.id));
          }
          continue;
        }
        return map;
      }
    }
    return map;
  }
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_37;
  }
  let tmp2 = memo;
  if (memo === undefined) {
    tmp2 = closure_38;
  }
  ({ sortMethod, filters } = tmp);
  let obj = arr;
  if (null != filters) {
    let num = 0;
    obj = arr;
    if (0 !== filters.length) {
      let found = arr;
      if (0 !== filters.length) {
        obj2 = require("module_12");
        _require = obj2.groupBy(filters, "group");
        found = arr.filter((item) => {
          closure_0 = item;
          const entries = Object.entries(closure_0);
          return entries.every((item) => {
            let arr;
            let tmp;
            let tmp2;
            [tmp, arr] = item;
            if ("task" === tmp) {
              tmp2 = closure_2_35;
            } else if ("reward" === tmp) {
              tmp2 = closure_2_36;
            }
            let closure_1 = tmp2;
            const tmp3 = 0 === arr.length || arr.some((item) => closure_1(closure_0, item.filter));
            return tmp3;
          });
        });
      }
      obj = found;
    }
  }
  const tmp6 = computeRenewableQuestSortKeys(obj, tmp2.currentUserId, tmp2.isRenewableEndDateSortEnabled);
  if (constants3.MOST_RECENT === sortMethod) {
    tmp8 = recentSortFn;
  } else if (constants3.RECENTLY_ENROLLED === sortMethod) {
    tmp8 = recentlyEnrolledSortFn;
  } else if (constants3.EXPIRING_SOON === sortMethod) {
    tmp8 = expiringSoonSortFn;
  } else {
    const SUGGESTED = tmp7.SUGGESTED;
    tmp8 = defaultSortFn;
  }
  _require = tmp8;
  let closure_1 = tmp2;
  let closure_2 = tmp6;
  return obj.sort((arg0, arg1) => {
    let tmp8;
    const obj = closure_0(dependencyMap[19]);
    const isQuestExpiredResult = obj.isQuestExpired(arg0);
    const tmp2 = !isQuestExpiredResult;
    obj2 = closure_0(dependencyMap[19]);
    if (tmp2 !== !obj2.isQuestExpired(arg1)) {
      let num = 1;
      if (!isQuestExpiredResult) {
        num = closure_2_29;
      }
      tmp8 = num;
    } else {
      tmp8 = closure_0(arg0, arg1, closure_1, closure_2);
    }
    return tmp8;
  });
}
function seededQuestSortKey(arg0, arg1) {
  const obj = _modDef1240;
  return obj.v3("" + arg0 + ":" + arg1) >>> 0;
}
function useAllQuests(quests, sortMethod) {
  let memo;
  let ref3;
  let ref4;
  _require = quests;
  importDefault = sortMethod;
  const items = [ref4];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => null);
  const items1 = [QuestStore];
  obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, f91710);
  let questIds;
  if (stateFromStores != null) {
    questIds = stateFromStores.questIds;
  }
  const items2 = [stateFromStores1, questIds];
  const isShelfEnabled = react.useMemo(() => {
    const arr = questIds;
    if (null == questIds) {
      return { shelfQuests: [], isShelfEnabled: false };
    } else {
      let obj;
      const mapped = arr.map((item) => stateFromStores.get(item));
      const found = mapped.filter(GlobalUtils.isNotNullish);
      const found1 = found.filter((item) => {
        const obj = stateFromStores(closure_1_2[19]);
        return !obj.isQuestExpired(item);
      });
      if (found1.length <= 1) {
        obj = { shelfQuests: [], isShelfEnabled: false };
        const obj3 = { shelfQuests: [], isShelfEnabled: false };
      } else {
        obj = { shelfQuests: found1, isShelfEnabled: true };
      }
      return obj;
    }
  }, items2).isShelfEnabled;
  const items3 = [UserStore];
  const tmpResult = require("get initialized");
  const stateFromStores2 = tmpResult.useStateFromStores(items3, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (id == null) {
      id = null;
    }
    return id;
  });
  const obj3 = { location: constants2.QUEST_HOME_MOBILE };
  const obj4 = require("RenewableEndDateSortExperiment");
  const enabled = obj4.useConfig(obj3).enabled;
  const MobileQuestHomeSortPriorityExperiment = tmp(tmp2[28]).MobileQuestHomeSortPriorityExperiment;
  const obj5 = { location: constants2.QUEST_HOME_MOBILE };
  const enabled2 = MobileQuestHomeSortPriorityExperiment.useConfig(obj5).enabled;
  const items4 = [stateFromStores, isShelfEnabled, stateFromStores2, enabled, enabled2];
  memo = react.useMemo(() => ({ questHomeHero: stateFromStores, isQuestHomeHeroShelfEnabled: isShelfEnabled, currentUserId: stateFromStores2, isRenewableEndDateSortEnabled: enabled, isMobileQuestHomeSortPriorityEnabled: enabled2 }), items4);
  const ref = react.useRef([]);
  const ref2 = react.useRef(sortMethod.sortMethod);
  react = react.useRef(sortMethod.filters);
  ref4 = react.useRef(0);
  const ref5 = react.useRef(memo);
  const items5 = [quests, sortMethod, memo];
  return react.useMemo(() => {
    if (0 === quests.length) {
      return [];
    } else {
      if (ref.current.length > 0) {
        if (ref4.current === quests.length) {
          if (ref2.current === sortMethod.sortMethod) {
            if (ref3.current === tmp3.filters) {
              if (ref5.current === memo) {
                return ref.current;
              }
            }
          }
        }
      }
      const arr2 = sortQuests(quests, sortMethod, memo);
      const mapped = arr2.map((id) => id.id);
      ref.current = mapped;
      ref2.current = sortMethod.sortMethod;
      ref3.current = sortMethod.filters;
      ref4.current = quests.length;
      ref5.current = memo;
      return mapped;
    }
  }, items5);
}
function isQuestHiddenFromQuestHome(userStatus) {
  const obj = QuestDataUtils;
  let isQuestExpiredResult = obj.isQuestExpired(userStatus);
  if (isQuestExpiredResult) {
    const tmpResult = QuestDataUtils;
    isQuestExpiredResult = !tmpResult.hasUnclaimedReward(userStatus.userStatus);
  }
  return isQuestExpiredResult;
}
function useIsQuestProgressing(quest) {
  let optimisticProgress;
  _require = quest;
  let obj = require("get initialized");
  const items = [QuestStore];
  let stateFromStores = obj.useStateFromStores(items, () => QuestStore.isProgressingOnDesktop(id.id));
  const items1 = [quest];
  _require = quest;
  const memo = react.useMemo(f91696, items1);
  const items2 = [QuestStore];
  const items3 = [quest, ];
  obj2 = require("get initialized");
  items3[1] = obj2.useStateFromStores(items2, f91697);
  const memo1 = react.useMemo(f91698, items3);
  if (!stateFromStores) {
    stateFromStores = memo;
  }
  if (!stateFromStores) {
    stateFromStores = memo1;
  }
  return stateFromStores;
}
function useTaskPlatformScreen(quest, questTaskDetails) {
  let DESKTOP;
  let hasItem1;
  let memo2;
  let selectedPlatform;
  _require = quest;
  let closure_1 = questTaskDetails;
  const id = quest.id;
  let obj = require("get initialized");
  const items = [QuestStore];
  const items1 = [obj.useStateFromStores(items, () => QuestStore.selectedTaskPlatform(id)), ];
  obj2 = memo2;
  const items2 = [id];
  items1[1] = memo2.useCallback((platform) => {
    const obj = id(first[16]);
    return obj.selectTaskPlatform(id, platform);
  }, items2);
  const tmp = hasItem1(items1, 2);
  selectedPlatform = tmp[0];
  const items3 = [quest];
  const tmp3 = tmp[1];
  const memo = memo2.useMemo(() => {
    const obj = QuestPlatformUtils;
    return obj.supportedTaskPlatforms(quest);
  }, items3);
  const hasItem = memo.includes(constants.DESKTOP);
  hasItem1 = memo.includes(constants.CONSOLE);
  _require = quest;
  let obj4 = require("get initialized");
  const items4 = [QuestStore];
  _require = quest;
  const items5 = [quest];
  const stateFromStores = obj4.useStateFromStores(items4, () => QuestStore.isProgressingOnDesktop(id.id));
  const items6 = [questTaskDetails];
  const memo1 = memo2.useMemo(f91696, items5);
  memo2 = memo2.useMemo(() => {
    const str = merged5;
    const match = str.match(questTaskDetails);
    const withResult = match.with({ percentComplete: 0 }, () => null);
    const obj = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP };
    const withResult1 = withResult.with(obj, () => constants.DESKTOP);
    obj2 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ACTIVITY };
    const withResult2 = withResult1.with(obj2, () => constants.DESKTOP);
    const obj3 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO };
    const withResult3 = withResult2.with(obj3, () => constants.DESKTOP);
    const obj4 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.WATCH_VIDEO_ON_MOBILE };
    const withResult4 = withResult3.with(obj4, () => constants.DESKTOP);
    const obj5 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP };
    const withResult5 = withResult4.with(obj5, () => constants.DESKTOP);
    const obj6 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX };
    const withResult6 = withResult5.with(obj6, () => constants.CONSOLE);
    const obj7 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION };
    const withResult7 = withResult6.with(obj7, () => constants.CONSOLE);
    const obj8 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_GAME };
    const withResult8 = withResult7.with(obj8, () => constants.DESKTOP);
    const obj9 = { taskType: FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.ACHIEVEMENT_IN_ACTIVITY };
    const withResult9 = withResult8.with(obj9, () => constants.DESKTOP);
    return withResult9.exhaustive();
  }, items6);
  if (stateFromStores) {
    DESKTOP = tmp4.DESKTOP;
  } else {
    DESKTOP = null;
    if (memo1) {
      DESKTOP = tmp4.CONSOLE;
    }
  }
  const items7 = [hasItem1, hasItem, memo2, DESKTOP, selectedPlatform];
  const items8 = [
    obj2.useMemo(() => {
      const obj = { lastPlatformProgress: memo2, currentProgressingPlatform: DESKTOP, selectedPlatform };
      const str = merged5;
      const match = str.match(obj);
      obj2 = { currentProgressingPlatform: constants.CONSOLE };
      const obj3 = { currentProgressingPlatform: constants.DESKTOP };
      const obj4 = { currentProgressingPlatform: null, lastPlatformProgress: constants.CONSOLE };
      const withResult = match.with(obj2, () => quest(selectedPlatform[45]).TaskPlatformScreen.CONSOLE);
      const obj5 = { currentProgressingPlatform: null, lastPlatformProgress: constants.DESKTOP };
      const withResult1 = withResult.with(obj3, () => quest(selectedPlatform[45]).TaskPlatformScreen.DESKTOP);
      const obj6 = { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.CONSOLE };
      const withResult2 = withResult1.with(obj4, () => quest(selectedPlatform[45]).TaskPlatformScreen.CONSOLE);
      const obj7 = { currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: constants.DESKTOP };
      const withResult3 = withResult2.with(obj5, () => quest(selectedPlatform[45]).TaskPlatformScreen.DESKTOP);
      const withResult4 = withResult3.with(obj6, () => quest(selectedPlatform[45]).TaskPlatformScreen.CONSOLE);
      const withResult5 = withResult4.with(obj7, () => quest(selectedPlatform[45]).TaskPlatformScreen.DESKTOP);
      const withResult6 = withResult5.with({ currentProgressingPlatform: null, lastPlatformProgress: null, selectedPlatform: null }, () => {
        if (hasItem1) {
          let SELECT;
          const tmp2 = hasItem;
          if (tmp2) {
            SELECT = quest(first[45]).TaskPlatformScreen.SELECT;
          }
          return SELECT;
        }
        const TaskPlatformScreen = quest(first[45]).TaskPlatformScreen;
        SELECT = tmp ? TaskPlatformScreen.CONSOLE : TaskPlatformScreen.DESKTOP;
      });
      return withResult6.exhaustive();
    }, items7),
    memo,
    tmp3
  ];
  return items8;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let LocaleStore = LocaleStore_mod;
const useConsoleQuestUIStore = ConsoleQuestUIStore.useConsoleQuestUIStore;
({ QuestTaskPlatform: closure_14, QuestsExperimentLocations: closure_15, MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES: closure_16, QuestHomeSortMethods: closure_17, SORTED_QUEST_HOME_FILTER_GROUPS: closure_18, TaskFilterTypes: closure_19, RewardFilterTypes: closure_20, MOBILE_ORBS_INTRO_QUEST_ID: closure_21, ORBS_INTRO_QUEST_ID: closure_22, QuestVariants: closure_23 } = QuestConstants);
({ HelpdeskArticles: closure_24, PlatformTypes: closure_25, ThemeTypes: closure_26, AnalyticEvents: closure_27 } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
let c29 = -1;
let closure_37 = {};
let closure_38 = { questHomeHero: null, isQuestHomeHeroShelfEnabled: false, currentUserId: null, isRenewableEndDateSortEnabled: false, isMobileQuestHomeSortPriorityEnabled: false };
const constants9 = { DESC: 0, [0]: "DESC", ASC: 1, [1]: "ASC" };
const QuestTabs = { ALL: "all", CLAIMED: "claimed", PREVIEW_TOOL: "preview_tool" };
function useQuestTaskDetails(quest) {
  let closure_2;
  let closure_4;
  let first;
  let closure_0 = quest;
  const items = [quest];
  const callback = react.useCallback(() => {
    const obj = userStatus(dependencyMap[22]);
    return obj.getQuestTaskDetails(userStatus);
  }, items);
  [first, closure_2] = react.useState(callback());
  const items1 = [callback];
  const callback1 = react.useCallback(() => closure_1_2(callback()), items1);
  const tmp5 = useIsQuestProgressing(quest);
  _slicedToArray = tmp5;
  const items2 = [quest, tmp5, callback1];
  const effect = react.useEffect(() => {
    let interval;
    userStatus = interval.userStatus;
    let enrolledAt;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    if (null != enrolledAt) {
      const userStatus2 = tmp.userStatus;
      let completedAt;
      if (userStatus2 != null) {
        completedAt = userStatus2.completedAt;
      }
      if (null == completedAt) {
        const userStatus3 = tmp.userStatus;
        let claimedAt;
        if (userStatus3 != null) {
          claimedAt = userStatus3.claimedAt;
        }
        if (null == claimedAt) {
          const tmp5 = closure_4;
          if (tmp5) {
            const _window = window;
            interval = window.setInterval(() => {
              callback1();
            }, callback(closure_1_2[20]).Millis.SECOND);
            return () => {
              clearInterval(closure_0);
              callback1();
            };
          }
        }
      }
    }
    callback1();
  }, items2);
  return first;
}
let obj2 = { UNACCEPTED: 0, [0]: "UNACCEPTED", ACCEPTED: 1, [1]: "ACCEPTED", IN_PROGRESS: 2, [2]: "IN_PROGRESS", COMPLETED: 3, [3]: "COMPLETED", CLAIMED: 4, [4]: "CLAIMED" };
let closure_49 = 6 * DurationsDefault.Millis.HOUR;
const MINUTE = DurationsDefault.Millis.MINUTE;
let result = size.fileFinishedImporting("modules/quests/hooks/QuestHooks.tsx");

export { useQuests };
export { sortQuests };
export { QuestTabs };
export const QuestQueryParams = { TAB: "tab", QUEST_ID: "quest_id", SORT: "sort", FILTER: "filter", AD_CREATIVE_IDS: "ad_creative_ids" };
export const useFilteredQuests = function useFilteredQuests(ALL, quests) {
  let excludedQuests;
  let hasFetched;
  let isFetchingCurrentQuests;
  function useCompletedAndClaimedQuests(quests) {
    const items = [quests];
    const memo = React.useMemo(() => quests.filter((userStatus) => {
      let claimedAt;
      userStatus = userStatus.userStatus;
      let completedAt;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
      let tmp2 = null != completedAt;
      const userStatus2 = userStatus.userStatus;
      if (userStatus2 != null) {
        claimedAt = userStatus2.claimedAt;
      }
      if (tmp2) {
        tmp2 = null != claimedAt;
      }
      return tmp2;
    }), items);
    const ref = React.useRef([]);
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
        const sorted = arr.sort((userStatus, userStatus2) => {
          let result;
          userStatus = userStatus.userStatus;
          let claimedAt;
          if (userStatus != null) {
            claimedAt = userStatus.claimedAt;
          }
          userStatus2 = userStatus2.userStatus;
          let claimedAt1;
          if (userStatus2 != null) {
            claimedAt1 = userStatus2.claimedAt;
          }
          if (null == claimedAt !== (null == claimedAt1)) {
            let num2 = 1;
            if (null == claimedAt) {
              num2 = closure_1_29;
            }
            result = num2;
          } else {
            const rewardsExpireAt = userStatus.config.rewardsConfig.rewardsExpireAt;
            let num = 1;
            const rewardsExpireAt2 = userStatus2.config.rewardsConfig.rewardsExpireAt;
            if (constants.DESC === constants.DESC) {
              num = closure_1_29;
            }
            result = rewardsExpireAt.localeCompare(rewardsExpireAt2) * num;
          }
          return result;
        });
        const mapped = sorted.map((id) => id.id);
        ref.current = mapped;
        return mapped;
      }
    }, items1);
  }
  let tmp = quests;
  if (quests === undefined) {
    tmp = closure_37;
  }
  let tmp2 = useQuests({ fetchPolicy: "cache-and-network", callerSource: "use_filtered_quests" });
  quests = tmp2.quests;
  ({ excludedQuests, isFetchingCurrentQuests, hasFetched } = tmp2);
  map = new Map(quests.map((id) => {
    const items = [id.id, id];
    return items;
  }));
  const tmp3 = useAllQuests(quests, tmp);
  let tmp4 = useCompletedAndClaimedQuests(quests);
  if (ALL === obj.ALL) {
    tmp4 = tmp3;
  }
  const quests1 = [];
  const tmp5 = tmp4[Symbol.iterator]();
  while (tmp5 !== undefined) {
    let value = map.get(tmp6);
    let tmp8 = value;
    let removeExpiredQuests = null != value;
    if (removeExpiredQuests) {
      removeExpiredQuests = ALL === obj.ALL;
    }
    if (removeExpiredQuests) {
      removeExpiredQuests = tmp.removeExpiredQuests;
    }
    if (removeExpiredQuests) {
      removeExpiredQuests = isQuestHiddenFromQuestHome(tmp8);
    }
    let tmp14 = null == tmp8 || removeExpiredQuests;
    if (!tmp14) {
      let arr = quests1.push(tmp8);
    }
    continue;
  }
  return { quests: quests1, excludedQuests, isFetchingCurrentQuests, hasFetched };
};
export const useClaimedQuests = function useClaimedQuests() {
  let ref;
  _require = react.useRef(false);
  let obj = require("get initialized");
  const items = [QuestStore];
  let claimedQuests = obj.useStateFromStoresArray(items, () => {
    const claimedQuests = QuestStore.claimedQuests;
    return Array.from(claimedQuests.values());
  });
  const items1 = [QuestStore];
  obj2 = require("get initialized");
  const isFetchingClaimedQuests = obj2.useStateFromStores(items1, () => QuestStore.isFetchingClaimedQuests);
  const items2 = [isFetchingClaimedQuests];
  const effect = react.useEffect(() => {
    const current = isFetchingClaimedQuests || ref.current;
    if (!current) {
      ref.current = true;
      const obj = QuestActionCreators;
      const claimedQuests = obj.fetchClaimedQuests();
    }
  }, items2);
  return { claimedQuests, isFetchingClaimedQuests };
};
export const useExpiredQuestsMap = function useExpiredQuestsMap() {
  let expiredQuestsMap;
  const items = [QuestStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => expiredQuestsMap.getExpiredQuestsMap());
};
export const useShouldShowBonusOrbsUX = function useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility) {
  _require = quest;
  const items = [QuestStore];
  const items1 = [quest];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f91694, items1);
  obj2 = require("QuestRewardUtils");
  const result = obj2.hasVirtualCurrencyReward(quest.config);
  const obj3 = require("QuestRewardUtils");
  const result1 = obj3.hasPremiumOrbQuantity(quest.config);
  let tmp4 = !stateFromStores;
  const INELIGIBLE = require("QuestOrbMultiplierUtils").QuestOrbMultiplierEligibilityType.INELIGIBLE;
  if (!stateFromStores) {
    tmp4 = result;
  }
  if (tmp4) {
    tmp4 = result1;
  }
  if (tmp4) {
    tmp4 = questOrbMultiplierEligibility !== INELIGIBLE;
  }
  return tmp4;
};
export const useQuestOrbRewardMultiplier = function useQuestOrbRewardMultiplier(questId) {
  _require = questId;
  let obj = require("get initialized");
  const items = [QuestStore];
  const items1 = [questId];
  return obj.useStateFromStores(items, () => {
    const quest = QuestStore.getQuest(questId);
    let questOrbMultiplier = null;
    if (null != quest) {
      const obj = QuestRewardUtils;
      questOrbMultiplier = obj.getQuestOrbMultiplier(quest.config);
    }
    return questOrbMultiplier;
  }, items1);
};
export const useIsQuestExpired = function useIsQuestExpired(deliveredQuest) {
  _require = deliveredQuest;
  const items = [QuestStore];
  const items1 = [deliveredQuest];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f91694, items1);
};
export const useIsQuestAccessSuspended = function useIsQuestAccessSuspended() {
  const items = [QuestStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => QuestStore.isQuestAccessSuspended, []);
};
export const useIsQuestEligibleForMembersListPopout = function useIsQuestEligibleForMembersListPopout(userStatus, arg1, arg2) {
  _require = userStatus;
  let channelId = arg1;
  const tmp = _require;
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    channelId = undefined;
    const getChannel = ChannelStore.getChannel;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    let channel = getChannel(channelId);
    if (channel == null) {
      channel = null;
    }
    return channel;
  });
  const items1 = [QuestStore];
  obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => null != QuestStore.questEnrollmentBlockedUntil, []);
  const items2 = [UserStore];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items3 = [QuestStore];
  const items4 = [userStatus];
  const obj4 = require("get initialized");
  if (null != userStatus) {
    if (!stateFromStores1) {
      if (!obj4.useStateFromStores(items3, () => {
        const isQuestExpiredResult = null != userStatus && QuestStore.isQuestExpired(tmp.id);
        return isQuestExpiredResult;
      }, items4)) {
        if (stateFromStores2 !== arg2) {
          userStatus = userStatus.userStatus;
          let claimedAt;
          if (userStatus != null) {
            claimedAt = userStatus.claimedAt;
          }
          let tmp8 = null != claimedAt;
          const tmpResult = tmp(7135);
          if (tmp8) {
            tmp8 = !tmpResult.isStreamingAndCanWatch(arg1, stateFromStores);
          }
          return !tmp8;
        }
      }
    }
  }
  return false;
};
export const useQuestFormattedDate = function useQuestFormattedDate(rewardsExpireAt, arg1) {
  let locale;
  _require = rewardsExpireAt;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { dateStyle: "short" };
  }
  let stateFromStores;
  const items = [LocaleStore];
  obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => locale.locale);
  const items1 = [rewardsExpireAt, obj, stateFromStores];
  return react.useMemo(function() {
    let str = "";
    if (null != rewardsExpireAt) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(rewardsExpireAt);
      str = date.toLocaleDateString(stateFromStores, obj);
    }
    return str;
  }, items1);
};
export const useOnOpenGameClick = function useOnOpenGameClick(quest) {
  quest = quest.quest;
  const content = quest.content;
  const ctaContent = quest.ctaContent;
  const sourceQuestContent = quest.sourceQuestContent;
  let obj = quest(ctaContent[30]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [quest, content, ctaContent, getQuestImpressionId, sourceQuestContent];
  return react.useCallback(() => {
    if (quest.id !== authStore5) {
      obj2 = { content, ctaContent, impressionId: getQuestImpressionId(), sourceQuestContent };
      const openGameLinkDirectly = QuestPlatformUtils.openGameLinkDirectly;
      QuestPlatformUtils;
      openGameLinkDirectly(tmp, obj2);
    } else {
      const _window = window;
      const obj = HelpdeskUtilsDefault;
      open(obj.getArticleURL(constants.VIRTUAL_CURRENCY_LEARN_MORE));
    }
  }, items);
};
export const useIsQuestProgressingOnDesktop = function useIsQuestProgressingOnDesktop(arg0) {
  let closure_0;
  _require = arg0;
  const items = [QuestStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => QuestStore.isProgressingOnDesktop(id.id));
};
export const useIsQuestProgressingOnConsole = function useIsQuestProgressingOnConsole(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(f91696, items);
};
export const useIsQuestProgressingVideoQuest = function useIsQuestProgressingVideoQuest(arg0) {
  let closure_0;
  _require = arg0;
  const items = [QuestStore];
  const items1 = [arg0, ];
  const obj = require("get initialized");
  items1[1] = obj.useStateFromStores(items, f91697);
  return react.useMemo(f91698, items1);
};
export { useIsQuestProgressing };
export { useQuestTaskDetails };
export const useThirdPartyTaskDetails = function useThirdPartyTaskDetails(quest) {
  let closure_0 = quest;
  const items = [quest];
  return react.useMemo(f91699, items);
};
export const useConnectedConsoleLinkOnClick = function useConnectedConsoleLinkOnClick(quest) {
  let accounts;
  let content;
  let fetching;
  let playstationAccounts;
  let sourceQuestContent;
  let xboxAccounts;
  quest = quest.quest;
  ({ questContent: importDefault, sourceQuestContent: dependencyMap } = quest);
  accounts = undefined;
  let tmp = quest;
  let obj = quest(504);
  const items = [ConnectedAccountsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, f91701);
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = react.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    const obj = { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
    return obj;
  }, items1);
  ({ xboxAccounts, playstationAccounts } = memo);
  const prop = memo.xboxAndPlaystationAccounts;
  const length = prop.length;
  const tmp5 = useIsQuestProgressing(quest);
  obj2 = quest(7137);
  let c3 = obj2.isConsoleQuest(quest) && 0 === length && !tmp5;
  const isConsoleQuestResult = obj2.isConsoleQuest(quest) && 0 === length && !tmp5;
  const tmpResult = tmp(10711);
  let closure_4 = tmpResult.useGetQuestImpressionId();
  return () => {
    const tmp = QuestPlatformUtils;
    if (c3) {
      obj2 = { quest };
      const openAddConsoleConnectionModal = tmp.openAddConsoleConnectionModal;
      const obj3 = { content: importDefault, ctaContent: AnalyticsTypes.QuestContentCTA.CONNECT_CONSOLE_LINK, impressionId: closure_4(), sourceQuestContent: dependencyMap };
      const result = openAddConsoleConnectionModal(obj2, obj3);
    } else {
      const obj = { quest };
      const openConsoleConnectionSettings = tmp.openConsoleConnectionSettings;
      const obj4 = { content: importDefault, ctaContent: AnalyticsTypes.QuestContentCTA.VIEW_CONSOLE_CONNECTIONS_LINK, impressionId: closure_4(), sourceQuestContent: dependencyMap };
      const result1 = openConsoleConnectionSettings(obj, obj4);
    }
  };
};
export const useGetOrFetchApplicationForConsoleQuests = function useGetOrFetchApplicationForConsoleQuests(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => {
    set = new Set();
    const tmp2 = arr[Symbol.iterator]();
    while (tmp2 !== undefined) {
      obj2 = closure_0(dependencyMap[22]);
      let consoleApplicationId = obj2.getConsoleApplicationId(tmp3);
      if (null != consoleApplicationId) {
        let addResult = set.add(tmp7);
      }
      continue;
    }
    return Array.from(set);
  }, items);
  return useGetOrFetchApplicationsDefault(memo);
};
export const useQuestForMemberListSocialEntryPoint = function useQuestForMemberListSocialEntryPoint(arg0) {
  let closure_0;
  let quests;
  _require = arg0;
  let obj = require("get initialized");
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => quests.quests);
  const arr = Array.from(stateFromStores.values());
  const items1 = [arr];
  const memo = react.useMemo(() => {
    set = new Set();
    const tmp2 = arr[Symbol.iterator]();
    while (tmp2 !== undefined) {
      obj2 = closure_0(dependencyMap[22]);
      let consoleApplicationId = obj2.getConsoleApplicationId(tmp3);
      if (null != consoleApplicationId) {
        let addResult = set.add(tmp7);
      }
      continue;
    }
    return Array.from(set);
  }, items1);
  const items2 = [arg0, stateFromStores, stateFromStores(6589)(memo)];
  const memo1 = react.useMemo(() => {
    const obj = utils_QuestUtils;
    const result = obj.filterQuestsForSocialEntrypoints(stateFromStores, authStore3);
    obj2 = QuestMatchingUtils;
    return obj2.getQuestsFromActivities(result, closure_0);
  }, items2);
  const items3 = [QuestStore];
  const items4 = [memo1];
  let tmp4 = null;
  const obj3 = require("get initialized");
  if (!obj3.useStateFromStores(items3, f91694, items4)) {
    tmp4 = memo1;
  }
  return tmp4;
};
export const useQuestCollectibles = function useQuestCollectibles(config) {
  const obj = QuestRewardUtils;
  const hasQuestCollectibles = obj.hasCollectiblesQuestReward(config);
  obj2 = QuestCopyUtils;
  const defaultReward = obj2.getDefaultReward(config);
  const obj3 = useFetchCollectiblesProduct;
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(defaultReward.skuId);
  const product = fetchCollectiblesProduct.product;
  let avatarDecoration;
  const isFetching = fetchCollectiblesProduct.isFetching;
  if (product != null) {
    const items = product.items;
    if (items != null) {
      avatarDecoration = items[0];
    }
  }
  return { hasQuestCollectibles, avatarDecoration, isFetching };
};
export const useQuestPreviewActions = function useQuestPreviewActions(id) {
  let closure_0 = id;
  let items = [id];
  return react.useMemo(() => {
    let obj = {
      handleComplete() {
        const obj = closure_0(dependencyMap[16]);
        return obj.completeQuestPreview(closure_1_0);
      },
      handleProgress(random) {
        const obj = closure_0(dependencyMap[16]);
        return obj.completeQuestPreview(closure_1_0, random);
      },
      handleResetStatusClick() {
        const obj = closure_0(dependencyMap[16]);
        return obj.resetQuestPreviewStatus(closure_1_0);
      },
      handleResetDismissibilityClick() {
        const obj = closure_0(dependencyMap[16]);
        return obj.resetQuestDismissibilityStatus(closure_1_0);
      },
      handleOverridePreviewClick(placement) {
        const obj = closure_0(dependencyMap[16]);
        return obj.overrideQuestForPlacement(placement, closure_1_0);
      },
      handleResetHasBeenSeenClick() {
        const items = [closure_1_0];
        const obj = closure_0(dependencyMap[16]);
        return obj.markAdContentUnseen(closure_0(dependencyMap[40]).AdCreativeType.QUEST, items);
      }
    };
    return obj;
  }, items);
};
export const useConnectedAccounts = function useConnectedAccounts() {
  let accounts;
  const items = [ConnectedAccountsStore];
  const obj = accounts(504);
  const stateFromStoresObject = obj.useStateFromStoresObject(items, f91701);
  accounts = stateFromStoresObject.accounts;
  const items1 = [accounts];
  const fetching = stateFromStoresObject.fetching;
  const memo = react.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    const obj = { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
    return obj;
  }, items1);
  return { fetching, xboxAccounts: memo.xboxAccounts, playstationAccounts: memo.playstationAccounts, xboxAndPlaystationAccounts: memo.xboxAndPlaystationAccounts };
};
export const useManuallyStartConsoleQuest = function useManuallyStartConsoleQuest(questId) {
  let accounts;
  let closure_5;
  let items3;
  questId = questId.questId;
  const preview = questId.preview;
  let beforeRequest = questId.beforeRequest;
  const afterRequest = questId.afterRequest;
  let startingConsoleQuest;
  react = undefined;
  const tmp = startingConsoleQuest(react.useState(false), 2);
  startingConsoleQuest = tmp[0];
  react = tmp[1];
  let obj = questId(beforeRequest[14]);
  const items = [ConnectedAccountsStore];
  const stateFromStores = obj.useStateFromStores(items, () => accounts.getAccounts());
  const tmp4 = useConsoleQuestUIStore((clearErrorHintsByType) => clearErrorHintsByType.clearErrorHintsByType);
  let closure_6 = tmp4;
  const items1 = [questId];
  const callback = react.useCallback((arg0) => {
    const state = useConsoleQuestUIStore.getState();
    return state.setErrorHints(questId, arg0);
  }, items1);
  const items2 = [stateFromStores, tmp4, questId];
  const effect = react.useEffect(() => {
    closure_6(questId, QuestConsoleStartError.QuestConsoleStartError.EXPIRED_CREDENTIAL);
  }, items2);
  obj2 = {
    startConsoleQuest: react.useCallback(afterRequest(function*(arg0, value) {
      let closure_0;
      let closure_2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              questId = undefined;
              const tmp38 = first;
              if (!tmp38) {
                if (beforeRequest != null) {
                  beforeRequest();
                }
                v3(true);
                questId = null;
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: obj2.manuallyStartConsoleQuest(questId, preview), done: false };
                obj2 = questId(beforeRequest[16]);
                return obj5;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_5(false);
            const tmp18 = beforeRequest;
            if (closure_129_3 != null) {
              closure_129_3();
            }
            throw tmp18;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_5(false);
            if (closure_129_3 != null) {
              closure_129_3();
            }
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            questId = value;
            closure_129_7(questId.errorHints);
            c3 = 0;
            closure_129_5(false);
            if (closure_129_3 != null) {
              closure_129_3();
            }
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp30) {
          beforeRequest = tmp30;
          if (0 === c3) {
            c5 = 3;
            throw tmp30;
          } else {
            c4 = 1;
          }
        }
      }
    }), items3),
    startingConsoleQuest
  };
  items3 = [startingConsoleQuest, beforeRequest, afterRequest, preview, questId, callback];
  return obj2;
};
export const useWaitingForConsoleConnection = function useWaitingForConsoleConnection(quest) {
  let accounts;
  let fetching;
  let playstationAccounts;
  let xboxAccounts;
  quest = quest.quest;
  accounts = undefined;
  const items = [ConnectedAccountsStore];
  const obj = accounts(504);
  const stateFromStoresObject = obj.useStateFromStoresObject(items, f91701);
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = react.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    const obj = { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
    return obj;
  }, items1);
  ({ xboxAccounts, playstationAccounts } = memo);
  const prop = memo.xboxAndPlaystationAccounts;
  const length = prop.length;
  const tmp3 = useIsQuestProgressing(quest);
  obj2 = accounts(7137);
  const isConsoleQuestResult = obj2.isConsoleQuest(quest) && 0 === length && !tmp3;
  return isConsoleQuestResult;
};
export const useQuestHowToHelpArticle = function useQuestHowToHelpArticle() {
  let accounts;
  let fetching;
  let obj = accounts(504);
  const items = [ConnectedAccountsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, f91701);
  ({ fetching, accounts } = stateFromStoresObject);
  const items1 = [accounts];
  const memo = react.useMemo(() => {
    const found = accounts.filter((revoked) => false === revoked.revoked);
    const found1 = found.filter((type) => type.type === constants.XBOX);
    const found2 = found.filter((type) => type.type === constants.PLAYSTATION);
    const obj = { xboxAccounts: found1, playstationAccounts: found2, xboxAndPlaystationAccounts: found1.concat(found2) };
    return obj;
  }, items1);
  obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(constants7.QUEST_HOW_TO_PLAYSTATION);
  const obj3 = HelpdeskUtilsDefault;
  const articleURL1 = obj3.getArticleURL(constants7.QUEST_HOW_TO_XBOX);
  const intl = accounts(1115).intl;
  const formatResult = intl.format(accounts(1115).t.beN4DG, { psHelpdeskArticle: articleURL, xboxHelpdeskArticle: articleURL1 });
  const intl2 = accounts(1115).intl;
  const format = intl2.format;
  let tmp8 = articleURL1;
  const HVS7nh = accounts(1115).t.HVS7nh;
  if (memo.playstationAccounts.length > 0) {
    tmp8 = articleURL;
  }
  const formatResult1 = format(HVS7nh, { helpdeskArticle: tmp8 });
  if (memo.xboxAccounts.length <= 0) {
    let tmp10 = formatResult;
    if (memo.xboxAccounts.length <= 0) {
      tmp10 = formatResult;
    }
    return { message: tmp10, xboxURL: articleURL1, playstationURL: articleURL };
  }
  tmp10 = formatResult1;
};
export const QuestProgressState = obj2;
export const useProgressState = function useProgressState(quest) {
  let closure_2;
  let closure_4;
  let first;
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const userStatus2 = quest.userStatus;
  let completedAt;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const userStatus3 = quest.userStatus;
  const tmp4 = null != completedAt;
  if (userStatus3 != null) {
    const claimedAt = userStatus3.claimedAt;
  }
  if (typeof useQuestTaskDetails === "function") {
    let IN_PROGRESS;
    let closure_0 = quest;
    const items = [quest];
    const callback = react.useCallback(() => {
      const obj = userStatus(dependencyMap[22]);
      return obj.getQuestTaskDetails(userStatus);
    }, items);
    [first, closure_2] = react.useState(callback());
    const items1 = [callback];
    const callback1 = react.useCallback(() => closure_1_2(callback()), items1);
    const tmp13 = useIsQuestProgressing(quest);
    _slicedToArray = tmp13;
    const items2 = [quest, tmp13, callback1];
    const effect = react.useEffect(() => {
      let interval;
      userStatus = interval.userStatus;
      let enrolledAt;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      if (null != enrolledAt) {
        const userStatus2 = tmp.userStatus;
        let completedAt;
        if (userStatus2 != null) {
          completedAt = userStatus2.completedAt;
        }
        if (null == completedAt) {
          const userStatus3 = tmp.userStatus;
          let claimedAt;
          if (userStatus3 != null) {
            claimedAt = userStatus3.claimedAt;
          }
          if (null == claimedAt) {
            const tmp5 = closure_4;
            if (tmp5) {
              const _window = window;
              interval = window.setInterval(() => {
                callback1();
              }, callback(closure_1_2[20]).Millis.SECOND);
              return () => {
                clearInterval(closure_0);
                callback1();
              };
            }
          }
        }
      }
      callback1();
    }, items2);
    if (tmp5) {
      IN_PROGRESS = obj2.CLAIMED;
    } else if (tmp4) {
      IN_PROGRESS = obj2.COMPLETED;
    } else {
      if (tmp15) {
        if (null != enrolledAt) {
          IN_PROGRESS = obj2.IN_PROGRESS;
        }
      }
      IN_PROGRESS = tmp2 ? tmp16.ACCEPTED : tmp16.UNACCEPTED;
    }
    return IN_PROGRESS;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useQuestCompletionDetails = function useQuestCompletionDetails(quest) {
  let closure_2;
  let closure_4;
  let first;
  let locale;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  require("get initialized");
  [][0] = LocaleStore;
  const tmp = _require;
  if (typeof useQuestTaskDetails === "function") {
    const items = [quest];
    const callback = react.useCallback(() => {
      const obj = userStatus(dependencyMap[22]);
      return obj.getQuestTaskDetails(userStatus);
    }, items);
    [first, dependencyMap] = react.useState(callback());
    const items1 = [callback];
    const callback1 = react.useCallback(() => closure_1_2(callback()), items1);
    const tmp13 = useIsQuestProgressing(quest);
    _slicedToArray = tmp13;
    const items2 = [quest, tmp13, callback1];
    const effect = react.useEffect(() => {
      let interval;
      userStatus = interval.userStatus;
      let enrolledAt;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      if (null != enrolledAt) {
        const userStatus2 = tmp.userStatus;
        let completedAt;
        if (userStatus2 != null) {
          completedAt = userStatus2.completedAt;
        }
        if (null == completedAt) {
          const userStatus3 = tmp.userStatus;
          let claimedAt;
          if (userStatus3 != null) {
            claimedAt = userStatus3.claimedAt;
          }
          if (null == claimedAt) {
            const tmp5 = closure_4;
            if (tmp5) {
              const _window = window;
              interval = window.setInterval(() => {
                callback1();
              }, callback(closure_1_2[20]).Millis.SECOND);
              return () => {
                clearInterval(closure_0);
                callback1();
              };
            }
          }
        }
      }
      callback1();
    }, items2);
    let percentComplete = first.percentComplete;
    _require = quest;
    const items3 = [quest];
    const memo = react.useMemo(f91699, items3);
    if (null != memo) {
      percentComplete = memo.percentComplete;
    }
    let obj = { completedRatio: percentComplete, percentComplete: 100 * percentComplete, completedRatioDisplay: null };
    if (null != memo) {
      let combined;
      if (!flag) {
        let progress;
        if (memo != null) {
          progress = memo.progress;
        }
        let target;
        if (memo != null) {
          target = memo.target;
        }
        const _HermesInternal = HermesInternal;
        combined = "" + progress + "/" + target;
      }
      obj.completedRatioDisplay = combined;
      return obj;
    }
    const tmpResult = tmp(1882);
    combined = tmpResult.formatPercent(tmp4, percentComplete, { roundingMode: "floor" });
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useSelectedTaskPlatform = function useSelectedTaskPlatform(arg0) {
  let closure_0;
  _require = arg0;
  const items = [QuestStore];
  const items1 = [, ];
  const obj = require("get initialized");
  items1[0] = obj.useStateFromStores(items, () => QuestStore.selectedTaskPlatform(id));
  const items2 = [arg0];
  items1[1] = react.useCallback((platform) => {
    const obj = id(first[16]);
    return obj.selectTaskPlatform(id, platform);
  }, items2);
  return items1;
};
export { useTaskPlatformScreen };
export const useQuestWarningTips = function useQuestWarningTips(userStatus) {
  let closure_129_2;
  let tmp5;
  _require = userStatus;
  let obj = react;
  [][0] = userStatus;
  if (typeof useQuestTaskDetails === "function") {
    const items = [userStatus];
    const callback = obj.useCallback(() => {
      const obj = userStatus(dependencyMap[22]);
      return obj.getQuestTaskDetails(userStatus);
    }, items);
    [tmp5, closure_129_2] = obj.useState(callback());
    const items1 = [callback];
    _slicedToArray(obj.useState(callback()), 2);
    const callback1 = obj.useCallback(() => closure_1_2(callback()), items1);
    const tmp8 = useIsQuestProgressing(userStatus);
    let closure_4 = tmp8;
    const items2 = [userStatus, tmp8, callback1];
    const effect = obj.useEffect(() => {
      let interval;
      userStatus = interval.userStatus;
      let enrolledAt;
      if (userStatus != null) {
        enrolledAt = userStatus.enrolledAt;
      }
      if (null != enrolledAt) {
        const userStatus2 = tmp.userStatus;
        let completedAt;
        if (userStatus2 != null) {
          completedAt = userStatus2.completedAt;
        }
        if (null == completedAt) {
          const userStatus3 = tmp.userStatus;
          let claimedAt;
          if (userStatus3 != null) {
            claimedAt = userStatus3.claimedAt;
          }
          if (null == claimedAt) {
            const tmp5 = closure_4;
            if (tmp5) {
              const _window = window;
              interval = window.setInterval(() => {
                callback1();
              }, callback(closure_1_2[20]).Millis.SECOND);
              return () => {
                clearInterval(closure_0);
                callback1();
              };
            }
          }
        }
      }
      callback1();
    }, items2);
    _require = userStatus;
    const first = _slicedToArray(useTaskPlatformScreen(userStatus, tmp5), 1)[0];
    const items3 = [QuestStore];
    const items4 = [userStatus];
    userStatus = userStatus.userStatus;
    let enrolledAt;
    obj2 = require("get initialized");
    const stateFromStores = obj2.useStateFromStores(items3, f91694, items4);
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    let tmp18 = null != enrolledAt;
    let userStatus2 = userStatus.userStatus;
    let completedAt;
    if (userStatus2 != null) {
      completedAt = userStatus2.completedAt;
    }
    const tmp20 = null != completedAt;
    const DESKTOP = tmp12(5764).FirstPartyQuestTaskTypesSets.DESKTOP;
    let hasItem = DESKTOP.has(tmp5.taskType) && tmp5.percentComplete > 0;
    const percentComplete = tmp5.percentComplete;
    if (tmp18) {
      tmp18 = !tmp20;
    }
    if (tmp18) {
      tmp18 = !stateFromStores;
    }
    if (tmp18) {
      tmp18 = null == tmp;
    }
    if (tmp18) {
      if (!hasItem) {
        hasItem = 0 === percentComplete && first === require("QuestTypes").TaskPlatformScreen.DESKTOP;
        0 === percentComplete && first === require("QuestTypes").TaskPlatformScreen.DESKTOP;
      }
      tmp18 = hasItem;
    }
    const tmp12Result = require("PlatformUtils");
    let tmp23 = tmp12Result.isWeb() && tmp18;
    if (tmp23) {
      const tmp12Result3 = require("QuestPlatformUtils");
      tmp23 = !tmp12Result3.isQuestSupportedOnWeb(userStatus);
    }
    const tmp12Result4 = require("PlatformUtils");
    const items5 = [];
    const isMacResult = tmp12Result4.isMac() && tmp5.taskType === tmp12(5764).FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP && tmp18;
    if (isMacResult) {
      const push = items5.push;
      const intl = tmp12(1115).intl;
      push(intl.string(require("intl").t.MFGxFM));
    }
    if (tmp23) {
      const push2 = items5.push;
      const intl2 = tmp12(1115).intl;
      push2(intl2.string(require("intl").t.BV6xDm));
    }
    return items5;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useQuest = function useQuest(arg0) {
  let quests;
  const items = [QuestStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => quests.quests);
  let value = stateFromStores.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
export const useNonNullableQuest = function useNonNullableQuest(questId, callback) {
  let stateFromStores;
  _require = questId;
  let closure_1 = callback;
  let obj = require("get initialized");
  let items = [QuestStore];
  const items1 = [questId];
  stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(questId), items1);
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  const items2 = [stateFromStores, questId, callback];
  const effect = react.useEffect(function() {
    let obj3;
    if (null == stateFromStores) {
      const quests = QuestStore.quests;
      const items = [];
      HermesBuiltin.arraySpread(items, quests.keys(), 0);
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const captureQuestsException = QuestDataUtils.captureQuestsException;
      const self = this;
      const self2 = this;
      QuestDataUtils;
      const error = new Error("Quest unexpectedly missing from store: " + questId);
      const obj = { tags: { source: "useNonNullableQuest" }, extra: obj3 };
      obj3 = { questId, storeQuestIds: items, storeSize: items.length, isFetchingCurrentQuests: null, lastFetchedCurrentQuests: null };
      ({ isFetchingCurrentQuests: obj2.isFetchingCurrentQuests, lastFetchedCurrentQuests: obj2.lastFetchedCurrentQuests } = QuestStore);
      const result = captureQuestsException(error, obj);
      if (callback != null) {
        callback();
      }
    }
  }, items2);
  return stateFromStores;
};
export const useQuestBarOrDockModeChangeTracking = function useQuestBarOrDockModeChangeTracking(mode) {
  let closure_7;
  let tmp;
  let tmp2;
  let tmp3;
  mode = mode.mode;
  const questContent = mode.questContent;
  const sourceQuestContent = mode.sourceQuestContent;
  if ("questId" in mode) {
    const questId = mode.questId;
    tmp3 = questId;
  } else {
    const adContentId = mode.adContentId;
    const adCreativeType = mode.adCreativeType;
  }
  let obj = sourceQuestContent;
  const items = [questContent, sourceQuestContent, tmp3, tmp, tmp2];
  const callback = sourceQuestContent.useCallback((mode, prevMode) => {
    if (null != questId) {
      obj2 = { mode, prevMode, questContent, questId: tmp, sourceQuestContent };
      const obj3 = AnalyticsActions;
      const result = obj3.trackQuestContentQuestBarOrDockModeChange(obj2);
    } else {
      let tmp3 = null != adContentId;
      const tmp2 = adContentId;
      if (tmp3) {
        tmp3 = null != adCreativeType;
      }
      if (tmp3) {
        const obj4 = { adContentId: tmp2, adCreativeType, mode, prevMode, questContent, sourceQuestContent };
        const obj = AnalyticsActions;
        const result1 = obj.trackAdContentQuestBarOrDockModeChange(obj4);
      }
    }
  }, items);
  if (tmp3 == null) {
    tmp3 = tmp;
  }
  LocaleStore = tmp3;
  const ref = obj.useRef(null);
  const items1 = [mode, tmp3, callback];
  const effect = obj.useEffect(() => {
    const tmp = null != LocaleStore && ref.current !== mode;
    if (tmp) {
      callback(mode, ref.current);
      ref.current = mode;
    }
  }, items1);
  const items2 = [tmp3, callback];
  const effect1 = obj.useEffect(() => null != LocaleStore ? (() => {
    callback(null, ref.current);
  }) : undefined, items2);
};
export const useCosponsoredLogotypeAsset = function useCosponsoredLogotypeAsset(arg0, arg1) {
  let closure_0;
  let closure_1;
  let stateFromStores;
  _require = arg0;
  importDefault = arg1;
  let obj = require("get initialized");
  const items = [QuestStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(closure_0), items1);
  const tmp2 = require("useTheme")();
  let closure_3 = tmp2;
  const items2 = [tmp2, arg1, stateFromStores];
  return react.useMemo(() => {
    if (null == stateFromStores) {
      return null;
    } else {
      let tmp6 = closure_1;
      if (closure_1 == null) {
        const obj = shared;
        tmp6 = obj.isThemeDark(closure_3) ? tmp5.DARK : tmp5.LIGHT;
      }
      obj2 = AssetUtils;
      return obj2.getQuestAsset(tmp, AssetUtils.QuestAssetType.COSPONSOR_LOGO_TYPE, tmp6);
    }
  }, items2);
};
export const useClaimedCollectibleRewardMessage = function useClaimedCollectibleRewardMessage(config) {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj2 = QuestRewardUtils;
  const defaultRewardName = obj2.getDefaultRewardName(config, stateFromStores);
  const obj3 = QuestRewardUtils;
  const collectibleQuestRewardDuration = obj3.getCollectibleQuestRewardDuration(config);
  const obj4 = QuestRewardUtils;
  const collectibleQuestRewardExtendableExpirationDate = obj4.getCollectibleQuestRewardExtendableExpirationDate(config);
  const obj5 = QuestRewardUtils;
  const result = obj5.isCollectibleQuestRewardPermanentWithPremiumSubscription(config);
  const obj6 = QuestRewardUtils;
  const result1 = obj6.isCollectibleQuestRewardPremiumExtendable(config);
  const obj7 = PremiumUtils;
  const isPremiumResult = obj7.isPremium(stateFromStores, PremiumTypes.TIER_2);
  if (null == collectibleQuestRewardDuration) {
    const intl2 = tmp(1115).intl;
    const obj8 = { decorationName: defaultRewardName };
    return intl2.formatToPlainString(intl7.t.l9uXL8, obj8);
  } else {
    let formatToPlainStringResult4;
    const intl3 = tmp(1115).intl;
    const obj9 = { rewardName: defaultRewardName };
    const formatToPlainStringResult = intl3.formatToPlainString(intl7.t.o97tNn, obj9);
    const intl4 = tmp(1115).intl;
    const obj10 = { rewardName: defaultRewardName, expirationDate: collectibleQuestRewardExtendableExpirationDate };
    const formatToPlainStringResult1 = intl4.formatToPlainString(intl7.t.PkyRZo, obj10);
    const intl5 = tmp(1115).intl;
    const obj11 = { rewardName: defaultRewardName, duration: collectibleQuestRewardDuration };
    let formatToPlainStringResult2 = intl5.formatToPlainString(tmp(1115).t.ie4YK0, obj11);
    const intl6 = tmp(1115).intl;
    const obj12 = { duration: collectibleQuestRewardDuration, rewardName: defaultRewardName };
    let formatToPlainStringResult3 = intl6.formatToPlainString(tmp(1115).t.yCpc0U, obj12);
    if (result1) {
      if (result) {
        if (isPremiumResult) {
          formatToPlainStringResult2 = formatToPlainStringResult;
        }
        formatToPlainStringResult3 = formatToPlainStringResult2;
      } else if (isPremiumResult) {
        formatToPlainStringResult3 = formatToPlainStringResult1;
      }
      formatToPlainStringResult4 = formatToPlainStringResult3;
    } else {
      const intl = tmp(1115).intl;
      const obj13 = { duration: collectibleQuestRewardDuration, decorationName: defaultRewardName };
      formatToPlainStringResult4 = intl.formatToPlainString(tmp(1115).t.tTlItm, obj13);
    }
    return formatToPlainStringResult4;
  }
};
export const useLaunchInGameActivityQuest = function useLaunchInGameActivityQuest(quest) {
  let activityApplicationId;
  obj2 = { launchInGameActivity: useRefocusOrLaunchActivityDefault({ applicationId: activityApplicationId }) };
  const obj = QuestTaskUtils;
  activityApplicationId = obj.getActivityApplicationId(quest);
  return obj2;
};
export const useIsPreviewerOnAnyQuest = function useIsPreviewerOnAnyQuest() {
  const items = [QuestStore];
  const obj = get_initialized;
  const stateFromStoresArray = obj.useStateFromStoresArray(items, f91708);
  return stateFromStoresArray.some(f91709);
};
export const useShouldShowPreviewToolTab = function useShouldShowPreviewToolTab() {
  let items = [QuestStore];
  const obj = get_initialized;
  const stateFromStoresArray = obj.useStateFromStoresArray(items, f91708);
  return stateFromStoresArray.some(f91709);
};
export const useShouldShowQuestsActivityPanelItem = function useShouldShowQuestsActivityPanelItem(userStatus) {
  let c0;
  let userStatus1;
  if (userStatus != null) {
    userStatus1 = userStatus.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    const obj = require("QuestDataUtils");
    isDismissedResult = obj.isDismissed(userStatus.userStatus, require("QuestTypes").QuestContent.ACTIVITY_PANEL);
  }
  let tmp5 = userStatus;
  if (userStatus == null) {
    tmp5 = null;
  }
  _require = tmp5;
  const items = [QuestStore];
  const items1 = [tmp5];
  let claimedAt;
  obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, f91694, items1);
  const tmp6 = _require;
  const tmp8 = QuestStore;
  if (userStatus != null) {
    userStatus = userStatus.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const items2 = [tmp8];
  const tmp11 = null != claimedAt;
  const tmp6Result = tmp6(504);
  const stateFromStores1 = tmp6Result.useStateFromStores(items2, () => null != QuestStore.questEnrollmentBlockedUntil, []);
  if (!isDismissedResult) {
    isDismissedResult = stateFromStores;
  }
  if (!isDismissedResult) {
    isDismissedResult = tmp11;
  }
  if (!isDismissedResult) {
    isDismissedResult = stateFromStores1;
  }
  return !isDismissedResult;
};
export const useQuestsWithPreviewAccess = function useQuestsWithPreviewAccess() {
  let stateFromStoresArray;
  let items = [QuestStore];
  const obj = stateFromStoresArray(504);
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    quests = quests.quests;
    const items = [...quests.values()];
    return items;
  });
  const items1 = [stateFromStoresArray];
  return react.useMemo(() => stateFromStoresArray.filter((preview) => preview.preview), items1);
};
export const useQuestHomeFilterOptions = function useQuestHomeFilterOptions() {
  let closure_0 = closure_18;
  const items = [closure_18];
  return react.useMemo(() => closure_0.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const obj = { heading: obj2.getFilterGroupHeadingText(tmp), options: tmp2 };
    obj2 = closure_1_0(closure_1_2[38]);
    return obj;
  }), items);
};
export const useQuestHomeSortOptions = function useQuestHomeSortOptions() {
  return react.useMemo(() => {
    const keys = Object.keys(constants3);
    return keys.map((item) => {
      const obj = { label: obj2.getSortMethodText(closure_1_17[item]), value: closure_1_17[item] };
      obj2 = closure_1_0(closure_1_2[38]);
      return obj;
    });
  }, []);
};
export const useQuestHomeSortingFilteringAnalytics = function useQuestHomeSortingFilteringAnalytics(selectedSortMethod) {
  selectedSortMethod = selectedSortMethod.selectedSortMethod;
  const selectedFilters = selectedSortMethod.selectedFilters;
  const numQuestsVisible = selectedSortMethod.numQuestsVisible;
  const ref = react.useRef(null);
  const ref2 = react.useRef(null);
  const items = [selectedSortMethod];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    obj2 = { sort_method: selectedSortMethod, previous_sort_method: ref.current };
    obj.track(constants.QUEST_HOME_SORT_METHOD_CHANGED, obj2);
    ref.current = selectedSortMethod;
  }, items);
  const items1 = [selectedFilters, numQuestsVisible];
  const effect1 = react.useEffect(() => {
    let current;
    const mapped = selectedFilters.map((item) => item.filter);
    const obj = { filters: mapped, previous_filters: current, num_quests_visible: numQuestsVisible };
    current = ref2.current;
    const track = AnalyticsUtilsDefault.track;
    const QUEST_HOME_FILTERS_CHANGED = constants.QUEST_HOME_FILTERS_CHANGED;
    AnalyticsUtilsDefault;
    const tmp3 = ref2;
    if (current == null) {
      current = [];
    }
    track(QUEST_HOME_FILTERS_CHANGED, obj);
    tmp3.current = mapped;
  }, items1);
};
export const useShouldShowQuestPreviewOverrides = function useShouldShowQuestPreviewOverrides(quest) {
  const preview = react.useMemo(() => {
    currentUser = currentUser.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    return true === isStaffResult;
  }, []) || quest.preview;
  return preview;
};
export const useQuestHomeHeroShelf = function useQuestHomeHeroShelf(questIds) {
  let quests;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [QuestStore];
  stateFromStores = obj.useStateFromStores(items, f91710);
  questIds = undefined;
  if (questIds != null) {
    questIds = questIds.questIds;
  }
  const items1 = [stateFromStores, questIds];
  return react.useMemo(() => {
    const arr = questIds;
    if (null == questIds) {
      return { shelfQuests: [], isShelfEnabled: false };
    } else {
      let obj;
      const mapped = arr.map((item) => stateFromStores.get(item));
      const found = mapped.filter(GlobalUtils.isNotNullish);
      const found1 = found.filter((item) => {
        const obj = stateFromStores(closure_1_2[19]);
        return !obj.isQuestExpired(item);
      });
      if (found1.length <= 1) {
        obj = { shelfQuests: [], isShelfEnabled: false };
        const obj3 = { shelfQuests: [], isShelfEnabled: false };
      } else {
        obj = { shelfQuests: found1, isShelfEnabled: true };
      }
      return obj;
    }
  }, items1);
};
export const useFetchQuestHomeBounties = function useFetchQuestHomeBounties(arg0) {
  let c3;
  let isFetching;
  let obj6;
  let questHomeBounties;
  let tmp2;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const previewAdCreativeIds = obj.previewAdCreativeIds;
  let enabled2;
  c3 = undefined;
  const QuestHomeBountiesFeatureGateExperiment = previewAdCreativeIds(enabled2[54]).QuestHomeBountiesFeatureGateExperiment;
  obj2 = { location: constants2.QUEST_HOME_MOBILE };
  const enabled = QuestHomeBountiesFeatureGateExperiment.useConfig(obj2).enabled;
  const BountyStaleRefreshQuestHomeExperiment = previewAdCreativeIds(enabled2[28]).BountyStaleRefreshQuestHomeExperiment;
  let obj3 = { location: constants2.QUEST_HOME_MOBILE };
  enabled2 = BountyStaleRefreshQuestHomeExperiment.useConfig(obj3).enabled;
  const tmp = _slicedToArray(react.useState(enabled), 2);
  [tmp2, c3] = tmp;
  let obj4 = previewAdCreativeIds(enabled2[14]);
  const items = [BountyStore];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => ({ isFetching: BountyStore.isFetchingQuestHomeBounties, questHomeBounties: BountyStore.questHomeBounties }));
  const items1 = [enabled, enabled2, previewAdCreativeIds];
  ({ isFetching, questHomeBounties } = stateFromStoresObject);
  const effect = react.useEffect(() => {
    let _true;
    let interval;
    function loadBounties() {
      return obj(...arguments);
    }
    let obj = function _loadBounties() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        let obj3;
        let obj5;
        let v0;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                length = tmp;
                const _Date = Date;
                closure_1 = Date.now();
                c3 = 1;
                if (null != length) {
                  if (length.length > 0) {
                    c1 = 3;
                    c4 = 1;
                    const obj6 = { value: obj5.fetchBountyPreview(length, _true(closure_2_2[45]).AdPlacement.VIDEO_MODAL_MOBILE), done: false };
                    obj5 = _true(closure_2_2[55]);
                    return obj6;
                  }
                }
                c1 = 2;
                c4 = 1;
                const obj7 = { value: obj3.fetchQuestHomeBounties(_true(closure_2_2[45]).AdPlacement.VIDEO_MODAL_MOBILE), done: false };
                obj3 = _true(closure_2_2[55]);
                return obj7;
              }
            } else if (1 === c1) {
              c3 = 0;
              const tmp18 = closure_2;
              if (!closure_128_0) {
                c3(false);
              }
              throw tmp18;
            } else {
              if (2 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  const tmp14 = closure_128_0;
                  if (!tmp14) {
                    c3(false);
                  }
                  c4 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                const tmp6 = closure_128_0;
                if (!tmp6) {
                  c3(false);
                }
                c4 = 3;
                obj = { value, done: true };
                return obj;
              }
              c3 = 0;
              const tmp10 = closure_128_0;
              if (!tmp10) {
                c3(false);
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp31) {
            closure_2 = tmp31;
            if (0 === c3) {
              c4 = 3;
              throw tmp31;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (c1) {
      let c0 = false;
      c1 = 0;
      const bounties = loadBounties();
      const tmp2 = interval;
      if (tmp2) {
        const tmp3 = globalThis;
        const _window = window;
        interval = window.setInterval(() => {
          if (Date.now() - c1 > closure_49) {
            loadBounties();
          }
        }, MINUTE);
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
  if (enabled) {
    let obj5 = { questHomeBounties, isLoading: tmp2 };
    if (!tmp2) {
      tmp2 = isFetching;
    }
    obj6 = obj5;
  } else {
    obj6 = { questHomeBounties: [], isLoading: false };
  }
  return obj6;
};
export const useQuestHomeBounties = function useQuestHomeBounties() {
  const items = [BountyStore];
  const obj = get_initialized;
  return obj.useStateFromStoresObject(items, () => ({ questHomeBounties: BountyStore.questHomeBounties, isFetching: BountyStore.isFetchingQuestHomeBounties }));
};
export const useQuestBarImpressionSurvey = function useQuestBarImpressionSurvey(quest) {
  let closure_2;
  _require = quest;
  const DropsOptedOut = require("UserSettings").DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  dependencyMap = tmp3;
  const items = [setting, tmp3, quest.id];
  return react.useCallback(() => {
    const tmp = closure_2;
    if (!tmp) {
      const SurveyActionTypes = SurveyActionTypes2.SurveyActionTypes;
      obj2 = { quest_id: quest.id };
      const tmp5 = setting ? SurveyActionTypes.AD_IMPRESSION_QUEST_BAR_OPT_OUT : SurveyActionTypes.AD_IMPRESSION_QUEST_BAR_OPT_IN;
      const obj = QualtricsActionCreators;
      obj.fireSurveyAction(tmp5, obj2);
    }
  }, items);
};
