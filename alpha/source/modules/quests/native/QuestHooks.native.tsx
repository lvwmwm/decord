// Module ID: 17377
// Function ID: 17378
// Name: QuestHooks
// Dependencies: [5, 19, 5375, 2162, 7921, 7922, 17378, 6836, 6600, 1083, 17379, 17405, 6839, 6928, 5314, 504, 6843, 17389, 7183, 7918, 9772, 9764, 9785, 7945, 7387, 11890, 7943, 11954, 6936, 11854, 2]
// Exports: useHasWatchVideoOnMobileTasks, useIsMobileQuestDockRendered, useIsMobileQuestDockVisibleToUser, useMobileActivityQuest, useMobileQuestDock, useMobileQuestDockHeight, useQuestDockHeroAsset, useQuestGameLogotypeAssetUrl

// Module 17377 (QuestHooks)
import Constants from "Constants" /* 1083 */;
import CaptchaConstants from "CaptchaConstants" /* 6600 */;
import QuestTypes from "QuestTypes" /* 6839 */;
import AdCreativeType from "AdCreativeType" /* 6843 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6936 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7945 */;
import AssetUtils from "AssetUtils" /* 9785 */;
import QuestDockHooks from "QuestDockHooks" /* 17379 */;
import useQuestForPlacement from "useQuestForPlacement" /* 17405 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5375 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import BountyStore from "BountyStore" /* 7921 */;
import QuestStore from "QuestStore" /* 7922 */;
import PlayableStore from "PlayableStore" /* 17378 */;
import QuestConstants from "QuestConstants" /* 6836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, key;

let c10;
let unpackModuleId;
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  let questDockAdCreativeId;
  let questPreviewOverride;
  _require = mobileQuestDock;
  let tmp = _require;
  const obj = require("AdCreativeUtils");
  const questDockQuest = obj.getQuestDockQuest(mobileQuestDock);
  const tmp4 = questDockAdCreativeId(7183)();
  const items = [QuestStore];
  let userStatus1;
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(mobileQuestDock(dependencyMap[12]).QuestContent.QUEST_BAR_MOBILE), []);
  const tmp5 = QuestStore;
  if (questDockQuest != null) {
    userStatus1 = questDockQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    const tmpResult = tmp(7918);
    isDismissedResult = tmpResult.isDismissed(questDockQuest.userStatus, tmp(6839).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (questDockQuest != null) {
    const userStatus = questDockQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const tmpResult7 = tmp(9772);
  const isQuestExpired = tmpResult7.useIsQuestExpired(questDockQuest);
  const tmpResult8 = tmp(9764);
  let isEligibleForQuests = tmpResult8.getIsEligibleForQuests();
  const tmpResult9 = tmp(17389);
  questDockAdCreativeId = tmpResult9.getQuestDockAdCreativeId(mobileQuestDock);
  const items1 = [tmp5];
  const items2 = [questDockAdCreativeId];
  const tmpResult10 = tmp(504);
  const stateFromStores1 = tmpResult10.useStateFromStores(items1, () => {
    const isAdContentDismissedResult = null != questDockAdCreativeId && QuestStore.isAdContentDismissed(tmp);
    return isAdContentDismissedResult;
  }, items2);
  const items3 = [BountyStore];
  const items4 = [mobileQuestDock];
  const tmpResult11 = tmp(504);
  const stateFromStores2 = tmpResult11.useStateFromStores(items3, () => {
    let isBountyCompletedResult = mobileQuestDock.type === AdCreativeType.AdCreativeType.BOUNTY;
    const tmp = mobileQuestDock;
    if (isBountyCompletedResult) {
      isBountyCompletedResult = BountyStore.isBountyCompleted(tmp.bounty.id);
    }
    return isBountyCompletedResult;
  }, items4);
  const items5 = [PlayableStore];
  const items6 = [mobileQuestDock];
  const type = mobileQuestDock.type;
  const tmpResult12 = tmp(504);
  const stateFromStores3 = tmpResult12.useStateFromStores(items5, () => {
    let isPlayableCompletedResult = mobileQuestDock.type === AdCreativeType.AdCreativeType.PLAYABLE;
    const tmp = mobileQuestDock;
    if (isPlayableCompletedResult) {
      isPlayableCompletedResult = PlayableStore.isPlayableCompleted(tmp.playable.id);
    }
    return isPlayableCompletedResult;
  }, items6);
  if (tmp(6843).AdCreativeType.NO_FILL === type) {
    return false;
  } else if (tmp(6843).AdCreativeType.BOUNTY === type) {
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
  } else if (tmp(6843).AdCreativeType.PLAYABLE === type) {
    return isEligibleForQuests && !stateFromStores1 && !stateFromStores3 && !tmp4;
  } else if (tmp(6843).AdCreativeType.QUEST === type) {
    if (stateFromStores) {
      let tmp17;
      if (null == claimedAt) {
        tmp17 = null != questDockQuest && !tmp4;
      }
      return tmp17;
    }
    tmp17 = null != questDockQuest && isEligibleForQuests && !isQuestExpired && null == claimedAt && !isDismissedResult && !tmp4;
  }
}
let react = react_mod;
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: c10, QuestVariants: unpackModuleId } = QuestConstants);
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
    return key === CAPTCHA_MODAL_KEY || key === closure_1_10;
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
      staticUrl = str.replace(tmp(9785).EXTENSION_RE, ".png");
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
  analyticsLocations = activityApplicationId(analyticsLocations[24])().analyticsLocations;
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
    const tmp3Result = tmp3(tmp[27]);
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
      hasItem = features.includes(unpackModuleId.MOBILE_ACTIVITY_QUEST);
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
                const obj2 = activityApplicationId(analyticsLocations[29]);
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
