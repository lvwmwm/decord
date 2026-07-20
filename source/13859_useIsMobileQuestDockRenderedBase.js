// Module ID: 13859
// Function ID: 104854
// Name: useIsMobileQuestDockRenderedBase
// Dependencies: []
// Exports: useHasWatchVideoOnMobileTasks, useIsMobileQuestDockVisibleToUser, useMobileActivityQuest, useMobileQuestDock, useMobileQuestDockHeight, useQuestDockHeroAsset, useQuestGameLogotypeAssetUrl

// Module 13859 (useIsMobileQuestDockRenderedBase)
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  const tmp = importDefault(dependencyMap[16])();
  const items = [closure_7];
  let userStatus;
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(callback(closure_2[11]).QuestContent.QUEST_BAR_MOBILE), []);
  if (null != mobileQuestDock) {
    userStatus = mobileQuestDock.userStatus;
  }
  let isDismissedResult = null != userStatus;
  if (isDismissedResult) {
    isDismissedResult = arg1(dependencyMap[12]).isDismissed(mobileQuestDock.userStatus, arg1(dependencyMap[11]).QuestContent.QUEST_BAR_MOBILE);
    const obj2 = arg1(dependencyMap[12]);
  }
  let claimedAt;
  if (null != mobileQuestDock) {
    userStatus = mobileQuestDock.userStatus;
    if (null != userStatus) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const obj = arg1(dependencyMap[10]);
  const tmp8 = null != claimedAt;
  const isQuestExpired = arg1(dependencyMap[17]).useIsQuestExpired(mobileQuestDock);
  arg1(dependencyMap[18]);
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
  const obj = importDefault(dependencyMap[9]);
  const items = [closure_7];
  let stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => questPreviewOverride.getQuestPreviewOverride(stateFromStores2(closure_2[11]).QuestContent.QUEST_BAR_MOBILE), []);
  const obj2 = arg1(dependencyMap[10]);
  const items1 = [closure_7];
  let stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items1, () => {
    let questToDeliverForPlacement;
    let quests;
    ({ quests, questToDeliverForPlacement } = closure_7);
    const questForPlacement = stateFromStores2(closure_2[12]).getQuestForPlacement(quests, questToDeliverForPlacement, stateFromStores2(closure_2[11]).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let tmp2 = null;
    if (null != questForPlacement) {
      tmp2 = questForPlacement;
    }
    return tmp2;
  });
  const obj3 = arg1(dependencyMap[10]);
  const items2 = [closure_7];
  const stateFromStores2 = arg1(dependencyMap[10]).useStateFromStores(items2, () => {
    const questAdDecisionByPlacement = questPreviewOverride.questAdDecisionByPlacement;
    const value = questAdDecisionByPlacement.get(stateFromStores2(closure_2[11]).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let tmp2 = null;
    if (null != value) {
      tmp2 = value;
    }
    return tmp2;
  });
  const arg1 = stateFromStores2;
  const obj4 = arg1(dependencyMap[10]);
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
          const quests = questPreviewOverride.quests;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_8, QuestVariants: closure_9 } = arg1(dependencyMap[5]));
const CAPTCHA_MODAL_KEY = arg1(dependencyMap[6]).CAPTCHA_MODAL_KEY;
const ThemeTypes = arg1(dependencyMap[7]).ThemeTypes;
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export const useMobileQuestDockHeight = function useMobileQuestDockHeight() {
  const tmp = useIsMobileQuestDockRendered();
  let num = 0;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
};
export const useMobileQuestDock = function useMobileQuestDock() {
  const obj = importDefault(dependencyMap[9]);
  const items = [closure_7];
  let stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => questPreviewOverride.getQuestPreviewOverride(callback(closure_2[11]).QuestContent.QUEST_BAR_MOBILE), []);
  const obj2 = arg1(dependencyMap[10]);
  const items1 = [closure_7];
  let stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items1, () => {
    let questToDeliverForPlacement;
    let quests;
    ({ quests, questToDeliverForPlacement } = closure_7);
    const questForPlacement = callback(closure_2[12]).getQuestForPlacement(quests, questToDeliverForPlacement, callback(closure_2[11]).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let tmp2 = null;
    if (null != questForPlacement) {
      tmp2 = questForPlacement;
    }
    return tmp2;
  });
  const obj3 = arg1(dependencyMap[10]);
  if (null == stateFromStores) {
    if (obj.useConfig({ location: "QuestMobileDock" }).enableNewRequestBehavior) {
      stateFromStores1 = tmp3(arg1(dependencyMap[11]).AdPlacement.MOBILE_HOME_DOCK_AREA);
    }
    stateFromStores = stateFromStores1;
  }
  return stateFromStores;
};
export const useIsMobileQuestDockVisibleToUser = function useIsMobileQuestDockVisibleToUser(arg0, arg1) {
  let tmp = arg1;
  arg1 = arg0;
  const isChannelFocused = arg1(dependencyMap[14]).useIsChannelFocused();
  const obj = arg1(dependencyMap[14]);
  const currentNavigationRouteName = arg1(dependencyMap[15]).useCurrentNavigationRouteName();
  const obj2 = arg1(dependencyMap[15]);
  let tmp4 = null != arg1(dependencyMap[15]).coerceGuildsRoute({ name: currentNavigationRouteName });
  const obj3 = arg1(dependencyMap[15]);
  const items = [closure_7];
  let stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => {
    let isClaimingRewardResult = null != arg0;
    if (isClaimingRewardResult) {
      isClaimingRewardResult = claimingReward.isClaimingReward(arg0.id);
    }
    return isClaimingRewardResult;
  });
  const obj4 = arg1(dependencyMap[10]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items1, () => {
    const key = key.getKey();
    let tmp2 = key === closure_10;
    if (!tmp2) {
      tmp2 = key === closure_8;
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
  const arg1 = quest;
  const items = [quest];
  return React.useMemo(() => arg0(closure_2[19]).getQuestAsset(arg0, arg0(closure_2[19]).QuestAssetType.LOGO_TYPE, constants.DARK).url, items);
};
export const useQuestDockHeroAsset = function useQuestDockHeroAsset(quest) {
  const arg1 = quest;
  const items = [quest];
  return React.useMemo((self) => {
    let obj = self(closure_2[19]);
    const questAsset = obj.getQuestAsset(self, self(closure_2[19]).QuestAssetType.QUEST_BAR_HERO);
    let asset = null;
    if (null != self.config.assets.questBarHeroVideo) {
      asset = self(closure_2[19]).resolveAsset(self.id, self.config.assets.questBarHeroVideo);
      const obj2 = self(closure_2[19]);
    }
    obj = {};
    if (questAsset.isAnimated) {
      let replaced = str.replace(self(closure_2[19]).EXTENSION_RE, ".png");
    } else {
      replaced = str;
    }
    obj.staticUrl = replaced;
    obj.videoAsset = asset;
    return obj;
  }, items);
};
export const useHasWatchVideoOnMobileTasks = function useHasWatchVideoOnMobileTasks(config) {
  const arg1 = config;
  const items = [config];
  return React.useMemo(() => {
    let obj = arg0(closure_2[20]);
    obj = { config: arg0 };
    return obj.hasWatchVideoOnMobileTasks(obj);
  }, items);
};
export const useMobileActivityQuest = function useMobileActivityQuest(quest) {
  const arg1 = quest;
  let obj = arg1(dependencyMap[20]);
  const activityApplicationId = obj.getActivityApplicationId(quest);
  const importDefault = activityApplicationId;
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => application.getApplication(activityApplicationId));
  const dependencyMap = stateFromStores;
  const obj2 = arg1(dependencyMap[10]);
  const canLaunchFrameResult = arg1(dependencyMap[21]).canLaunchFrame(stateFromStores);
  const callback = canLaunchFrameResult;
  const obj3 = arg1(dependencyMap[21]);
  let canLaunchActivityResult = arg1(dependencyMap[22]).canLaunchActivity(quest);
  if (canLaunchActivityResult) {
    const features = quest.config.features;
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
    canLaunchActivityResult = importDefault(dependencyMap[23])(supported_platforms);
    const tmp9 = importDefault(dependencyMap[23]);
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
  const React = canLaunchActivityResult;
  const items1 = [stateFromStores, activityApplicationId, quest.config.features];
  const effect = React.useEffect(() => {
    let hasItem = null == stateFromStores;
    if (hasItem) {
      hasItem = null != activityApplicationId;
    }
    if (hasItem) {
      const features = arg0.config.features;
      hasItem = features.includes(constants.MOBILE_ACTIVITY_QUEST);
    }
    if (hasItem) {
      const items = [activityApplicationId];
      const applications = activityApplicationId(stateFromStores[24]).fetchApplications(items, false);
      const obj = activityApplicationId(stateFromStores[24]);
    }
  }, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [canLaunchFrameResult, stateFromStores, canLaunchActivityResult];
  obj = { isMobileActivityQuest: canLaunchActivityResult, questApplication: stateFromStores, launchMobileActivity: React.useCallback(callback(tmp), items2) };
  return obj;
};
