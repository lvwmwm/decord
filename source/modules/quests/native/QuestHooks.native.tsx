// Module ID: 14040
// Function ID: 107428
// Name: useIsMobileQuestDockRenderedBase
// Dependencies: [5, 31, 3823, 4167, 6941, 4976, 9484, 482, 14041, 6956, 566, 4979, 6939, 14064, 10259, 3981, 7423, 10493, 10494, 9494, 6964, 10511, 6962, 10547, 5463, 10512, 10867, 2]
// Exports: useHasWatchVideoOnMobileTasks, useIsMobileQuestDockVisibleToUser, useMobileActivityQuest, useMobileQuestDock, useMobileQuestDockHeight, useQuestDockHeroAsset, useQuestGameLogotypeAssetUrl

// Module 14040 (useIsMobileQuestDockRenderedBase)
import closure_3 from "QuestsExperimentLocations";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { CAPTCHA_MODAL_KEY } from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS";
import { ThemeTypes } from "sum";

let closure_8;
let closure_9;
const require = arg1;
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  const tmp = importDefault(7423)();
  const items = [closure_7];
  let userStatus;
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => null != outer1_7.getQuestPreviewOverride(outer1_0(outer1_2[11]).QuestContent.QUEST_BAR_MOBILE), []);
  if (null != mobileQuestDock) {
    userStatus = mobileQuestDock.userStatus;
  }
  let isDismissedResult = null != userStatus;
  if (isDismissedResult) {
    isDismissedResult = require(6939) /* _createForOfIteratorHelperLoose */.isDismissed(mobileQuestDock.userStatus, require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE);
    const obj2 = require(6939) /* _createForOfIteratorHelperLoose */;
  }
  let claimedAt;
  if (null != mobileQuestDock) {
    userStatus = mobileQuestDock.userStatus;
    if (null != userStatus) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const obj = require(566) /* initialize */;
  const tmp8 = null != claimedAt;
  const isQuestExpired = require(10493) /* _createForOfIteratorHelperLoose */.useIsQuestExpired(mobileQuestDock);
  require(10494) /* getIsEligibleForQuests */;
  let tmp12 = null != mobileQuestDock;
  if (stateFromStores) {
    if (tmp12) {
      tmp12 = !tmp;
    }
    let tmp13 = tmp12;
  } else {
    tmp13 = tmp12;
    if (tmp12) {
      tmp13 = tmp11;
    }
    if (tmp13) {
      tmp13 = !isQuestExpired;
    }
    if (tmp13) {
      tmp13 = !tmp8;
    }
    if (tmp13) {
      tmp13 = !isDismissedResult;
    }
    if (tmp13) {
      tmp13 = !tmp;
    }
  }
  return tmp13;
}
function useIsMobileQuestDockRendered() {
  const obj = importDefault(6956);
  const items = [closure_7];
  let stateFromStores = stateFromStores2(566).useStateFromStores(items, () => outer1_7.getQuestPreviewOverride(stateFromStores2(outer1_2[11]).QuestContent.QUEST_BAR_MOBILE), []);
  const obj2 = stateFromStores2(566);
  const items1 = [closure_7];
  let stateFromStores1 = stateFromStores2(566).useStateFromStores(items1, () => {
    let questToDeliverForPlacement;
    let quests;
    ({ quests, questToDeliverForPlacement } = outer1_7);
    const questForPlacement = stateFromStores2(outer1_2[12]).getQuestForPlacement(quests, questToDeliverForPlacement, stateFromStores2(outer1_2[11]).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let tmp2 = null;
    if (null != questForPlacement) {
      tmp2 = questForPlacement;
    }
    return tmp2;
  });
  const obj3 = stateFromStores2(566);
  const items2 = [closure_7];
  stateFromStores2 = stateFromStores2(566).useStateFromStores(items2, () => {
    const questAdDecisionByPlacement = outer1_7.questAdDecisionByPlacement;
    const value = questAdDecisionByPlacement.get(stateFromStores2(outer1_2[11]).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let tmp2 = null;
    if (null != value) {
      tmp2 = value;
    }
    return tmp2;
  });
  const obj4 = stateFromStores2(566);
  const items3 = [closure_7];
  const items4 = [stateFromStores2];
  if (null == stateFromStores) {
    if (obj.useConfig({ location: "QuestMobileDock" }).enableNewRequestBehavior) {
      stateFromStores1 = obj5.useStateFromStores(items3, () => {
        let questId;
        if (null != stateFromStores2) {
          questId = stateFromStores2.questId;
        }
        let tmp3 = null;
        if (null != questId) {
          const quests = outer1_7.quests;
          const value = quests.get(stateFromStores2.questId);
          tmp3 = null;
          if (null != value) {
            tmp3 = value;
          }
        }
        return tmp3;
      }, items4);
    }
    stateFromStores = stateFromStores1;
  }
  return useIsMobileQuestDockRenderedBase(stateFromStores);
}
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_8, QuestVariants: closure_9 } = QuestsExperimentLocations);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export const useMobileQuestDockHeight = function useMobileQuestDockHeight() {
  const tmp = useIsMobileQuestDockRendered();
  let num = 0;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
};
export const useMobileQuestDock = function useMobileQuestDock() {
  const obj = importDefault(6956);
  const items = [closure_7];
  let stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_7.getQuestPreviewOverride(outer1_0(outer1_2[11]).QuestContent.QUEST_BAR_MOBILE), []);
  const obj2 = require(566) /* initialize */;
  const items1 = [closure_7];
  let stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => {
    let questToDeliverForPlacement;
    let quests;
    ({ quests, questToDeliverForPlacement } = outer1_7);
    const questForPlacement = outer1_0(outer1_2[12]).getQuestForPlacement(quests, questToDeliverForPlacement, outer1_0(outer1_2[11]).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let tmp2 = null;
    if (null != questForPlacement) {
      tmp2 = questForPlacement;
    }
    return tmp2;
  });
  const obj3 = require(566) /* initialize */;
  if (null == stateFromStores) {
    if (obj.useConfig({ location: "QuestMobileDock" }).enableNewRequestBehavior) {
      stateFromStores1 = tmp3(require(4979) /* QuestsVisibleMessagesChangedSource */.AdPlacement.MOBILE_HOME_DOCK_AREA);
    }
    stateFromStores = stateFromStores1;
  }
  return stateFromStores;
};
export const useIsMobileQuestDockVisibleToUser = function useIsMobileQuestDockVisibleToUser(arg0, arg1) {
  let tmp = arg1;
  const _require = arg0;
  const isChannelFocused = _require(10259).useIsChannelFocused();
  const obj = _require(10259);
  const currentNavigationRouteName = _require(3981).useCurrentNavigationRouteName();
  const obj2 = _require(3981);
  let tmp4 = null != _require(3981).coerceGuildsRoute({ name: currentNavigationRouteName });
  const obj3 = _require(3981);
  const items = [closure_7];
  let stateFromStores = _require(566).useStateFromStores(items, () => {
    let isClaimingRewardResult = null != id;
    if (isClaimingRewardResult) {
      isClaimingRewardResult = outer1_7.isClaimingReward(id.id);
    }
    return isClaimingRewardResult;
  });
  const obj4 = _require(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    const key = outer1_5.getKey();
    let tmp2 = key === outer1_10;
    if (!tmp2) {
      tmp2 = key === outer1_8;
    }
    return tmp2;
  });
  if (arg1) {
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
};
export { useIsMobileQuestDockRenderedBase };
export { useIsMobileQuestDockRendered };
export const useQuestGameLogotypeAssetUrl = function useQuestGameLogotypeAssetUrl(quest) {
  let closure_0 = quest;
  const items = [quest];
  return React.useMemo(() => quest(outer1_2[19]).getQuestAsset(quest, quest(outer1_2[19]).QuestAssetType.LOGO_TYPE, outer1_11.DARK).url, items);
};
export const useQuestDockHeroAsset = function useQuestDockHeroAsset(quest) {
  let closure_0 = quest;
  const items = [quest];
  return React.useMemo(() => {
    let obj = quest(outer1_2[19]);
    const questAsset = obj.getQuestAsset(quest, quest(outer1_2[19]).QuestAssetType.QUEST_BAR_HERO);
    let asset = null;
    if (null != quest.config.assets.questBarHeroVideo) {
      asset = quest(outer1_2[19]).resolveAsset(quest.id, quest.config.assets.questBarHeroVideo);
      const obj2 = quest(outer1_2[19]);
    }
    obj = {};
    if (questAsset.isAnimated) {
      let replaced = str.replace(quest(outer1_2[19]).EXTENSION_RE, ".png");
    } else {
      replaced = str;
    }
    obj.staticUrl = replaced;
    obj.videoAsset = asset;
    return obj;
  }, items);
};
export const useHasWatchVideoOnMobileTasks = function useHasWatchVideoOnMobileTasks(config) {
  let closure_0 = config;
  const items = [config];
  return React.useMemo(() => {
    let obj = config(outer1_2[20]);
    obj = { config };
    return obj.hasWatchVideoOnMobileTasks(obj);
  }, items);
};
export const useMobileActivityQuest = function useMobileActivityQuest(quest) {
  const _require = quest;
  let obj = _require(stateFromStores[20]);
  const activityApplicationId = obj.getActivityApplicationId(quest);
  let items = [closure_6];
  stateFromStores = _require(stateFromStores[10]).useStateFromStores(items, () => outer1_6.getApplication(activityApplicationId));
  const obj2 = _require(stateFromStores[10]);
  const canLaunchFrameResult = _require(stateFromStores[21]).canLaunchFrame(stateFromStores);
  const obj3 = _require(stateFromStores[21]);
  let canLaunchActivityResult = _require(stateFromStores[22]).canLaunchActivity(quest);
  if (canLaunchActivityResult) {
    let features = quest.config.features;
    canLaunchActivityResult = features.includes(constants.MOBILE_ACTIVITY_QUEST);
  }
  if (canLaunchActivityResult) {
    let supported_platforms;
    if (null != stateFromStores) {
      const embeddedActivityConfig = stateFromStores.embeddedActivityConfig;
      if (null != embeddedActivityConfig) {
        supported_platforms = embeddedActivityConfig.supported_platforms;
      }
    }
    canLaunchActivityResult = activityApplicationId(stateFromStores[23])(supported_platforms);
    const tmp9 = activityApplicationId(stateFromStores[23]);
  }
  if (canLaunchActivityResult) {
    let tmp12 = canLaunchFrameResult;
    if (!canLaunchFrameResult) {
      let id;
      if (null != stateFromStores) {
        const bot = stateFromStores.bot;
        if (null != bot) {
          id = bot.id;
        }
      }
      tmp12 = null != id;
    }
    canLaunchActivityResult = tmp12;
  }
  const items1 = [stateFromStores, activityApplicationId, quest.config.features];
  const effect = canLaunchActivityResult.useEffect(() => {
    let hasItem = null == stateFromStores;
    if (hasItem) {
      hasItem = null != activityApplicationId;
    }
    if (hasItem) {
      const features = quest.config.features;
      hasItem = features.includes(outer1_9.MOBILE_ACTIVITY_QUEST);
    }
    if (hasItem) {
      const items = [activityApplicationId];
      const applications = activityApplicationId(stateFromStores[24]).fetchApplications(items, false);
      const obj = activityApplicationId(stateFromStores[24]);
    }
  }, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [canLaunchFrameResult, stateFromStores, canLaunchActivityResult];
  obj = { isMobileActivityQuest: canLaunchActivityResult, questApplication: stateFromStores, launchMobileActivity: canLaunchActivityResult.useCallback(canLaunchFrameResult(tmp), items2) };
  return obj;
};
