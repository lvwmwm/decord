// Module ID: 14620
// Function ID: 14621
// Name: QuestHooks
// Dependencies: [5, 19, 4521, 5063, 7115, 7116, 5756, 5185, 8500, 1085, 14621, 504, 5759, 14647, 7114, 7112, 5763, 9549, 4692, 14631, 6364, 10681, 10682, 10689, 7137, 6583, 8783, 7135, 8823, 6584, 8760, 10740, 2]
// Exports: useHasWatchVideoOnMobileTasks, useIsMobileQuestDockRendered, useIsMobileQuestDockVisibleToUser, useMobileActivityQuest, useMobileQuestDock, useMobileQuestDockHeight, useQuestDockHeroAsset, useQuestGameLogotypeAssetUrl

// Module 14620 (QuestHooks)
import Constants from "Constants" /* 1085 */;
import CaptchaConstants from "CaptchaConstants" /* 5185 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6584 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7137 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import AssetUtils from "AssetUtils" /* 10689 */;
import QuestDockHooks from "QuestDockHooks" /* 14621 */;
import useQuestForPlacement from "useQuestForPlacement" /* 14647 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore_mod from "ActionSheetStore" /* 4521 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import BountyStore from "BountyStore" /* 7115 */;
import QuestStore from "QuestStore" /* 7116 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, key;

let c10;
let c9;
function useDeliveredDockCreative() {
  let deliveredBounty;
  let deliveredQuestId;
  let questPreviewOverride;
  const tmp = deliveredQuestId;
  let tmp2 = deliveredBounty;
  let obj = deliveredQuestId(deliveredBounty[11]);
  const items = [QuestStore];
  let stateFromStores = obj.useStateFromStores(items, () => questPreviewOverride.getQuestPreviewOverride(deliveredQuestId(deliveredBounty[12]).QuestContent.QUEST_BAR_MOBILE), []);
  let obj2 = deliveredQuestId(deliveredBounty[13]);
  const adDecisionForPlacement = obj2.useAdDecisionForPlacement(deliveredQuestId(deliveredBounty[12]).AdPlacement.MOBILE_HOME_DOCK_AREA);
  let creative;
  const getDeliveredQuestId = deliveredQuestId(deliveredBounty[14]).getDeliveredQuestId;
  const tmp3 = QuestStore;
  const tmp6 = deliveredQuestId(deliveredBounty[14]);
  if (adDecisionForPlacement != null) {
    creative = adDecisionForPlacement.creative;
  }
  deliveredQuestId = getDeliveredQuestId(creative);
  const items1 = [tmp3];
  const items2 = [deliveredQuestId];
  const tmpResult = tmp(tmp2[11]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != deliveredQuestId) {
      const quests = QuestStore.quests;
      let value = quests.get(tmp);
      if (value == null) {
        value = null;
      }
      tmp2 = value;
    }
    return tmp2;
  }, items2);
  let tmp10 = null;
  if (null != stateFromStores1) {
    tmp10 = null;
    const tmpResult3 = tmp(tmp2[15]);
    if (!tmpResult3.isQuestExpired(stateFromStores1)) {
      tmp10 = stateFromStores1;
    }
  }
  if (stateFromStores == null) {
    stateFromStores = tmp10;
  }
  let creative1;
  const getDeliveredBounty = tmp(tmp2[14]).getDeliveredBounty;
  tmp(tmp2[14]);
  if (adDecisionForPlacement != null) {
    creative1 = adDecisionForPlacement.creative;
  }
  deliveredBounty = getDeliveredBounty(creative1);
  const items3 = [stateFromStores, deliveredBounty];
  return react.useMemo(() => {
    let obj;
    if (null != stateFromStores) {
      obj = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
      const obj2 = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
    } else if (null != deliveredBounty) {
      obj = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp2 };
      const obj3 = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp2 };
    } else {
      obj = { type: AdCreativeType.AdCreativeType.NO_FILL };
    }
    return obj;
  }, items3);
}
function useIsMobileQuestDockRenderedBase(mobileQuestDock) {
  let deliveredAdCreativeId;
  let questPreviewOverride;
  _require = mobileQuestDock;
  let tmp = _require;
  const obj = require("QuestDockCreativeContext");
  const deliveredQuest = obj.getDeliveredQuest(mobileQuestDock);
  const tmp4 = deliveredAdCreativeId(6364)();
  const items = [QuestStore];
  let userStatus1;
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(mobileQuestDock(dependencyMap[12]).QuestContent.QUEST_BAR_MOBILE), []);
  const tmp5 = QuestStore;
  if (deliveredQuest != null) {
    userStatus1 = deliveredQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    const tmpResult = tmp(7112);
    isDismissedResult = tmpResult.isDismissed(deliveredQuest.userStatus, tmp(5759).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (deliveredQuest != null) {
    const userStatus = deliveredQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const tmpResult6 = tmp(10681);
  const isQuestExpired = tmpResult6.useIsQuestExpired(deliveredQuest);
  const tmpResult7 = tmp(10682);
  let isEligibleForQuests = tmpResult7.getIsEligibleForQuests();
  const tmpResult8 = tmp(14631);
  deliveredAdCreativeId = tmpResult8.getDeliveredAdCreativeId(mobileQuestDock);
  const items1 = [tmp5];
  const items2 = [deliveredAdCreativeId];
  const tmpResult9 = tmp(504);
  const stateFromStores1 = tmpResult9.useStateFromStores(items1, () => {
    const isAdContentDismissedResult = null != deliveredAdCreativeId && QuestStore.isAdContentDismissed(tmp);
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
  if (tmp(5763).AdCreativeType.NO_FILL === type) {
    return false;
  } else if (tmp(5763).AdCreativeType.BOUNTY === type) {
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
  } else if (tmp(5763).AdCreativeType.QUEST === type) {
    if (stateFromStores) {
      let tmp16;
      if (null == claimedAt) {
        tmp16 = null != deliveredQuest && !tmp4;
      }
      return tmp16;
    }
    tmp16 = null != deliveredQuest && isEligibleForQuests && !isQuestExpired && null == claimedAt && !isDismissedResult && !tmp4;
  }
}
let react = react_mod;
let ActionSheetStore = ActionSheetStore_mod;
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: c9, QuestVariants: c10 } = QuestConstants);
const CAPTCHA_MODAL_KEY = CaptchaConstants.CAPTCHA_MODAL_KEY;
const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export const useMobileQuestDockHeight = function useMobileQuestDockHeight() {
  let num = 0;
  const tmp = useIsMobileQuestDockRenderedBase(useDeliveredDockCreative());
  const obj = QuestDockHooks;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
};
export const useMobileQuestDock = function useMobileQuestDock() {
  const obj = useQuestForPlacement;
  const adRefreshLoop = obj.useAdRefreshLoop(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA);
  return useDeliveredDockCreative();
};
export const useIsMobileQuestDockVisibleToUser = function useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase) {
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
};
export { useIsMobileQuestDockRenderedBase };
export const useIsMobileQuestDockRendered = function useIsMobileQuestDockRendered() {
  return useIsMobileQuestDockRenderedBase(useDeliveredDockCreative());
};
export const useQuestGameLogotypeAssetUrl = function useQuestGameLogotypeAssetUrl(quest) {
  let closure_0 = quest;
  const items = [quest];
  return react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.LOGO_TYPE, ThemeTypes.DARK).url;
  }, items);
};
export const useQuestDockHeroAsset = function useQuestDockHeroAsset(quest) {
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
      staticUrl = str.replace(tmp(10689).EXTENSION_RE, ".png");
    } else {
      staticUrl = str;
    }
    return { staticUrl, videoAsset };
  }, items);
};
export const useHasWatchVideoOnMobileTasks = function useHasWatchVideoOnMobileTasks(config) {
  const items = [config];
  return react.useMemo(() => {
    const obj = QuestTaskUtils;
    const obj2 = { config };
    return obj.hasWatchVideoOnMobileTasks(obj2);
  }, items);
};
export const useMobileActivityQuest = function useMobileActivityQuest(quest) {
  let analyticsLocations;
  _require = quest;
  let obj = require("QuestTaskUtils");
  let activityApplicationId = obj.getActivityApplicationId(quest);
  const tmp3 = activityApplicationId;
  const tmp = analyticsLocations;
  analyticsLocations = activityApplicationId(analyticsLocations[25])().analyticsLocations;
  let obj2 = require("get initialized");
  let items = [ApplicationStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ApplicationStore.getApplication(activityApplicationId));
  let obj3 = require("canLaunchFrame");
  const canLaunchFrameResult = obj3.canLaunchFrame(stateFromStores);
  react = canLaunchFrameResult;
  let obj4 = require("utils/QuestUtils");
  let canLaunchActivityResult = obj4.canLaunchActivity(quest);
  if (canLaunchActivityResult) {
    let features = quest.config.features;
    canLaunchActivityResult = features.includes(constants.MOBILE_ACTIVITY_QUEST);
  }
  if (canLaunchActivityResult) {
    let supported_platforms;
    const tmp3Result = tmp3(tmp[28]);
    if (stateFromStores != null) {
      const embeddedActivityConfig = stateFromStores.embeddedActivityConfig;
      if (embeddedActivityConfig != null) {
        supported_platforms = embeddedActivityConfig.supported_platforms;
      }
    }
    canLaunchActivityResult = tmp3Result(supported_platforms);
  }
  if (canLaunchActivityResult) {
    let tmp11 = canLaunchFrameResult;
    if (!tmp11) {
      let id;
      if (stateFromStores != null) {
        let bot = stateFromStores.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      tmp11 = null != id;
    }
    canLaunchActivityResult = tmp11;
  }
  ActionSheetStore = canLaunchActivityResult;
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
  const items2 = [canLaunchFrameResult, stateFromStores, canLaunchActivityResult, analyticsLocations];
  let obj5 = {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: react.useCallback(stateFromStores(function*(arg0, value) {
      let obj7;
      let v2;
      let v3;
      if (quest === 2) {
        quest = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          quest = 2;
          if (0 === activityApplicationId) {
            if (arg0 === 1) {
              quest = 3;
              throw value;
            } else if (arg0 === 2) {
              quest = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const tmp19 = ActionSheetStore;
              if (tmp19) {
                const tmp4 = react;
                if (tmp4) {
                  const obj5 = { applicationId: stateFromStores.id, surface, analyticsContext: obj7 };
                  obj7 = { isStart: true, analyticsLocations };
                  const obj6 = activityApplicationId(analyticsLocations[30]);
                  activityApplicationId = 1;
                  quest = 1;
                  const obj8 = { value: obj6.launchFrame(obj5), done: false };
                  return obj8;
                } else {
                  let id;
                  if (stateFromStores != null) {
                    const bot = tmp5.bot;
                    if (bot != null) {
                      id = bot.id;
                    }
                  }
                  if (null != id) {
                    const obj9 = { appId: stateFromStores.id, botId: stateFromStores.bot.id, analyticsLocations: [] };
                    activityApplicationId = 2;
                    const obj3 = quest(analyticsLocations[31]);
                    quest = 1;
                    const obj10 = { value: obj3.launchActivityInBotDM(obj9), done: false };
                    return obj10;
                  }
                }
              }
            }
          } else if (1 === tmp3) {
            if (arg0 === 1) {
              quest = 3;
              throw value;
            } else if (arg0 === 2) {
              quest = 3;
              const obj11 = { value, done: true };
              return obj11;
            }
          } else if (arg0 === 1) {
            quest = 3;
            throw value;
          } else if (arg0 === 2) {
            quest = 3;
            const obj = { value, done: true };
            return obj;
          }
          quest = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp15) {
          quest = 3;
          throw tmp15;
        }
      }
    }), items2)
  };
  return obj5;
};
