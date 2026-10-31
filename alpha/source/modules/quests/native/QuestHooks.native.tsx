// Module ID: 17055
// Function ID: 17056
// Name: QuestHooks
// Dependencies: [5, 19, 5259, 2038, 7845, 7846, 6781, 6546, 1083, 17056, 17082, 6784, 6873, 5198, 504, 6788, 17066, 7112, 7842, 9681, 9673, 9695, 7868, 7326, 11726, 7866, 11790, 6881, 11692, 2]
// Exports: useHasWatchVideoOnMobileTasks, useIsMobileQuestDockRendered, useIsMobileQuestDockVisibleToUser, useMobileActivityQuest, useMobileQuestDock, useMobileQuestDockHeight, useQuestDockHeroAsset, useQuestGameLogotypeAssetUrl

// Module 17055 (QuestHooks)
import Constants from "Constants" /* 1083 */;
import CaptchaConstants from "CaptchaConstants" /* 6546 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6881 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7868 */;
import AssetUtils from "AssetUtils" /* 9695 */;
import QuestDockHooks from "QuestDockHooks" /* 17056 */;
import useQuestForPlacement from "useQuestForPlacement" /* 17082 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5259 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import BountyStore from "BountyStore" /* 7845 */;
import QuestStore from "QuestStore" /* 7846 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, key;

let c10;
let c9;
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  let questDockAdCreativeId;
  let questPreviewOverride;
  _require = mobileQuestDock;
  let tmp = _require;
  const obj = require("AdCreativeUtils");
  const questDockQuest = obj.getQuestDockQuest(mobileQuestDock);
  const tmp4 = questDockAdCreativeId(7112)();
  const items = [QuestStore];
  let userStatus1;
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(mobileQuestDock(dependencyMap[11]).QuestContent.QUEST_BAR_MOBILE), []);
  const tmp5 = QuestStore;
  if (questDockQuest != null) {
    userStatus1 = questDockQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    const tmpResult = tmp(7842);
    isDismissedResult = tmpResult.isDismissed(questDockQuest.userStatus, tmp(6784).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (questDockQuest != null) {
    const userStatus = questDockQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const tmpResult6 = tmp(9681);
  const isQuestExpired = tmpResult6.useIsQuestExpired(questDockQuest);
  const tmpResult7 = tmp(9673);
  let isEligibleForQuests = tmpResult7.getIsEligibleForQuests();
  const tmpResult8 = tmp(17066);
  questDockAdCreativeId = tmpResult8.getQuestDockAdCreativeId(mobileQuestDock);
  const items1 = [tmp5];
  const items2 = [questDockAdCreativeId];
  const tmpResult9 = tmp(504);
  const stateFromStores1 = tmpResult9.useStateFromStores(items1, () => {
    const isAdContentDismissedResult = null != questDockAdCreativeId && QuestStore.isAdContentDismissed(tmp);
    return isAdContentDismissedResult;
  }, items2);
  const items3 = [BountyStore];
  const items4 = [mobileQuestDock];
  const type = mobileQuestDock.type;
  const tmpResult10 = tmp(504);
  const stateFromStores2 = tmpResult10.useStateFromStores(items3, () => {
    let isBountyCompletedResult = mobileQuestDock.type === AdCreativeType.AdCreativeType.BOUNTY;
    const tmp = mobileQuestDock;
    if (isBountyCompletedResult) {
      isBountyCompletedResult = BountyStore.isBountyCompleted(tmp.bounty.id);
    }
    return isBountyCompletedResult;
  }, items4);
  if (tmp(6788).AdCreativeType.NO_FILL === type) {
    return false;
  } else if (tmp(6788).AdCreativeType.BOUNTY === type) {
    if (isEligibleForQuests) {
      isEligibleForQuests = !stateFromStores1;
    }
    if (isEligibleForQuests) {
      isEligibleForQuests = !stateFromStores2;
    }
    if (isEligibleForQuests) {
      isEligibleForQuests = !tmp4;
    }
    return isEligibleForQuests;
  } else if (tmp(6788).AdCreativeType.PLAYABLE === type) {
    return isEligibleForQuests && !stateFromStores1 && !tmp4;
  } else if (tmp(6788).AdCreativeType.QUEST === type) {
    if (stateFromStores) {
      let tmp16;
      if (null == claimedAt) {
        tmp16 = null != questDockQuest && !tmp4;
      }
      return tmp16;
    }
    tmp16 = null != questDockQuest && isEligibleForQuests && !isQuestExpired && null == claimedAt && !isDismissedResult && !tmp4;
  }
}
let react = react_mod;
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: c9, QuestVariants: c10 } = QuestConstants);
const CAPTCHA_MODAL_KEY = CaptchaConstants.CAPTCHA_MODAL_KEY;
const ThemeTypes = Constants.ThemeTypes;
let result = size.fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export function useMobileQuestDockHeight() {
  const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
  useQuestForPlacement;
  let num = 0;
  const tmp2 = useIsMobileQuestDockRenderedBase(useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE));
  const obj = QuestDockHooks;
  if (tmp2) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
}
export function useMobileQuestDock() {
  const obj = useQuestForPlacement;
  const adRefreshLoop = obj.useAdRefreshLoop(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA);
  const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
  useQuestForPlacement;
  return useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE);
}
export function useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase) {
  _require = mobileQuestDock;
  let tmp = isMobileQuestDockRenderedBase;
  const obj = require("isChannelFocused");
  const isChannelFocused = obj.useIsChannelFocused();
  const obj2 = require("NavigationRouteUtils");
  const currentNavigationRouteName = obj2.useCurrentNavigationRouteName();
  const obj3 = require("NavigationRouteUtils");
  let tmp4 = null != obj3.coerceGuildsRoute({ name: currentNavigationRouteName });
  const items = [QuestStore];
  const obj4 = require("get initialized");
  let stateFromStores = obj4.useStateFromStores(items, () => {
    const type = mobileQuestDock.type;
    const tmp = mobileQuestDock;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      return QuestStore.isClaimingReward(tmp.quest.id);
    } else {
      return false;
    }
  });
  const items1 = [ActionSheetStore];
  const obj5 = require("get initialized");
  const stateFromStores1 = obj5.useStateFromStores(items1, () => {
    key = key.getKey();
    return key === CAPTCHA_MODAL_KEY || key === closure_1_9;
  });
  if (isMobileQuestDockRenderedBase) {
    tmp = !isChannelFocused;
  }
  if (tmp) {
    if (!tmp4) {
      if (stateFromStores) {
        stateFromStores = stateFromStores1;
      }
      tmp4 = stateFromStores;
    }
    tmp = tmp4;
  }
  return tmp;
}
export { useIsMobileQuestDockRenderedBase };
export function useIsMobileQuestDockRendered() {
  const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
  useQuestForPlacement;
  return useIsMobileQuestDockRenderedBase(useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE));
}
export function useQuestGameLogotypeAssetUrl(quest) {
  let closure_0 = quest;
  const items = [quest];
  return react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.LOGO_TYPE, ThemeTypes.DARK).url;
  }, items);
}
export function useQuestDockHeroAsset(quest) {
  const items = [quest];
  return react.useMemo(() => {
    let staticUrl;
    const obj = AssetUtils;
    const questAsset = obj.getQuestAsset(quest, AssetUtils.QuestAssetType.QUEST_BAR_HERO);
    let videoAsset = null;
    if (null != quest.config.assets.questBarHeroVideo) {
      const tmpResult = AssetUtils;
      videoAsset = tmpResult.resolveAsset(tmp3.id, tmp3.config.assets.questBarHeroVideo);
    }
    if (questAsset.isAnimated) {
      staticUrl = str.replace(tmp(9695).EXTENSION_RE, ".png");
    } else {
      staticUrl = str;
    }
    return { staticUrl, videoAsset };
  }, items);
}
export function useHasWatchVideoOnMobileTasks(config) {
  const items = [config];
  return react.useMemo(() => {
    const obj = QuestTaskUtils;
    const obj2 = { config };
    return obj.hasWatchVideoOnMobileTasks(obj2);
  }, items);
}
export function useMobileActivityQuest(quest) {
  let analyticsLocations;
  _require = quest;
  let obj = require("QuestTaskUtils");
  let activityApplicationId = obj.getActivityApplicationId(quest);
  const tmp = analyticsLocations;
  analyticsLocations = activityApplicationId(analyticsLocations[23])().analyticsLocations;
  let obj2 = require("get initialized");
  let items = [ApplicationStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ApplicationStore.getApplication(activityApplicationId));
  let obj3 = require("canLaunchContextlessFrame");
  let result = obj3.canLaunchContextlessFrame(stateFromStores);
  let obj4 = require("utils/QuestUtils");
  let canLaunchActivityResult = obj4.canLaunchActivity(quest);
  const tmp3 = activityApplicationId;
  if (canLaunchActivityResult) {
    let features = quest.config.features;
    canLaunchActivityResult = features.includes(constants.MOBILE_ACTIVITY_QUEST);
  }
  if (canLaunchActivityResult) {
    let supported_platforms;
    const tmp3Result = tmp3(tmp[26]);
    if (stateFromStores != null) {
      const embeddedActivityConfig = stateFromStores.embeddedActivityConfig;
      if (embeddedActivityConfig != null) {
        supported_platforms = embeddedActivityConfig.supported_platforms;
      }
    }
    canLaunchActivityResult = tmp3Result(supported_platforms);
  }
  if (canLaunchActivityResult) {
    if (!result) {
      const tmp11 = null;
      let id;
      if (stateFromStores != null) {
        const bot = stateFromStores.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      result = null != id;
    }
    canLaunchActivityResult = result;
  }
  react = canLaunchActivityResult;
  const items1 = [stateFromStores, activityApplicationId, quest.config.features];
  const effect = react.useEffect(() => {
    let hasItem = null == stateFromStores && null != activityApplicationId;
    if (hasItem) {
      const features = quest.config.features;
      hasItem = features.includes(constants.MOBILE_ACTIVITY_QUEST);
    }
    if (hasItem) {
      const items = [activityApplicationId];
      const obj = ApplicationActionCreatorsDefault;
      const applications = obj.fetchApplications(items, false);
    }
  }, items1);
  const items2 = [stateFromStores, canLaunchActivityResult, analyticsLocations];
  let obj5 = {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: react.useCallback(stateFromStores(function*(arg0, value) {
      let v1;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c0 = 2;
          if (0 === activityApplicationId) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const tmp6 = react && null != stateFromStores;
              if (tmp6) {
                const obj5 = { applicationId: stateFromStores.id, analyticsLocations };
                const obj2 = activityApplicationId(analyticsLocations[28]);
                activityApplicationId = 1;
                c0 = 1;
                const obj6 = { value: obj2.launch(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp11) {
          c0 = 3;
          throw tmp11;
        }
      }
    }), items2)
  };
  return obj5;
}
