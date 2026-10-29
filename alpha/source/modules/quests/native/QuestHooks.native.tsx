// Module ID: 16943
// Function ID: 16944
// Name: QuestHooks
// Dependencies: [5, 19, 5248, 2043, 7833, 7834, 6768, 6533, 1095, 558, 16944, 16970, 6771, 576, 6860, 5187, 6775, 504, 16954, 7098, 7830, 9636, 9628, 9650, 7856, 7313, 11489, 7854, 11552, 6868, 11455, 2]
// Exports: useMobileQuestDock

// Module 16943 (QuestHooks)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1095 */;
import CaptchaConstants from "CaptchaConstants" /* 6533 */;
import QuestTypes from "QuestTypes" /* 6771 */;
import AdCreativeType from "AdCreativeType" /* 6775 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6868 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7098 */;
import AssetUtils from "AssetUtils" /* 9650 */;
import QuestDockHooks from "QuestDockHooks" /* 16944 */;
import useQuestForPlacement from "useQuestForPlacement" /* 16970 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5248 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import BountyStore from "BountyStore" /* 7833 */;
import QuestStore from "QuestStore" /* 7834 */;
import QuestConstants from "QuestConstants" /* 6768 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, importDefault, key;

let c10;
let c9;
let tmp;
const QuestTaskUtils = tmp(7856);
let react = react_mod;
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: c9, QuestVariants: c10 } = QuestConstants);
const CAPTCHA_MODAL_KEY = CaptchaConstants.CAPTCHA_MODAL_KEY;
const ThemeTypes = Constants.ThemeTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileQuestDockHeight() {
  let num = 0;
  const tmp = closure_15();
  const obj = QuestDockHooks;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
}) : (function useMobileQuestDockHeight() {
  let num = 0;
  const tmp = closure_15();
  const obj = QuestDockHooks;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function useDeliveredDockCreative() {

}
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMobileQuestDockVisibleToUser(quest, arg1) {
  let tmp6;
  let tmp9;
  _require = quest;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(8);
  const obj2 = require("isChannelFocused");
  const isChannelFocused = obj2.useIsChannelFocused();
  const obj3 = require("NavigationRouteUtils");
  const currentNavigationRouteName = obj3.useCurrentNavigationRouteName();
  if (cResult[0] !== currentNavigationRouteName) {
    const obj4 = { name: currentNavigationRouteName };
    const tmpResult = tmp(5187);
    const coerceGuildsRouteResult = tmpResult.coerceGuildsRoute(obj4);
    cResult[0] = currentNavigationRouteName;
    cResult[1] = coerceGuildsRouteResult;
    tmp6 = coerceGuildsRouteResult;
  } else {
    tmp6 = cResult[1];
  }
  let tmp8 = null != tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === quest.quest) {
    let tmp11;
    let tmp14;
    let tmp13;
    if (cResult[4] === quest.type) {
      tmp11 = cResult[5];
    }
    const tmpResult3 = tmp(504);
    let stateFromStores = tmpResult3.useStateFromStores(tmp9, tmp11);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ActionSheetStore];
      class E {
        constructor() {
          key = key.getKey();
          return key === CAPTCHA_MODAL_KEY || key === closure_1_9;
        }
      }
      cResult[6] = items1;
      cResult[7] = E;
      tmp14 = E;
      tmp13 = items1;
    } else {
      tmp13 = cResult[6];
      tmp14 = cResult[7];
    }
    let tmp16 = arg1;
    const tmpResult4 = tmp(504);
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp13, tmp14);
    if (arg1) {
      tmp16 = !isChannelFocused;
    }
    if (tmp16) {
      if (!tmp8) {
        if (stateFromStores) {
          stateFromStores = stateFromStores1;
        }
        tmp8 = stateFromStores;
      }
      tmp16 = tmp8;
    }
    return tmp16;
  }
  const fn = function y() {
    const type = quest.type;
    const tmp = quest;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      return QuestStore.isClaimingReward(tmp.quest.id);
    } else {
      return false;
    }
  };
  cResult[3] = quest.quest;
  cResult[4] = quest.type;
  cResult[5] = fn;
  tmp11 = fn;
}) : (function useIsMobileQuestDockVisibleToUser(arg0, arg1) {
  _require = arg0;
  let tmp = arg1;
  const obj = require("isChannelFocused");
  const isChannelFocused = obj.useIsChannelFocused();
  const obj2 = require("NavigationRouteUtils");
  const currentNavigationRouteName = obj2.useCurrentNavigationRouteName();
  const obj3 = require("NavigationRouteUtils");
  let tmp4 = null != obj3.coerceGuildsRoute({ name: currentNavigationRouteName });
  const items = [QuestStore];
  const obj4 = require("get initialized");
  let stateFromStores = obj4.useStateFromStores(items, () => {
    type = type.type;
    const tmp = type;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMobileQuestDockRenderedBase(bounty) {
  let closure_1;
  let questPreviewOverride;
  let tmp16;
  let tmp18;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp25;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = bounty;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(16);
  const obj2 = require("AdCreativeUtils");
  const questDockQuest = obj2.getQuestDockQuest(bounty);
  const tmp5 = useIsWindowLargeDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function u() {
      return null != questPreviewOverride.getQuestPreviewOverride(bounty(dependencyMap[12]).QuestContent.QUEST_BAR_MOBILE);
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp6 = items;
    tmp7 = fn;
    tmp8 = items1;
  } else {
    [tmp6, tmp7, tmp8] = cResult;
  }
  let userStatus1;
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7, tmp8);
  if (questDockQuest != null) {
    userStatus1 = questDockQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    const tmpResult7 = tmp(7830);
    isDismissedResult = tmpResult7.isDismissed(questDockQuest.userStatus, tmp(6771).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (questDockQuest != null) {
    const userStatus = questDockQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const tmpResult8 = tmp(9636);
  const isQuestExpired = tmpResult8.useIsQuestExpired(questDockQuest);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult9 = tmp(9628);
    const isEligibleForQuests = tmpResult9.getIsEligibleForQuests();
    cResult[3] = isEligibleForQuests;
    tmp16 = isEligibleForQuests;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] !== bounty) {
    const tmpResult10 = tmp(16954);
    const questDockAdCreativeId = tmpResult10.getQuestDockAdCreativeId(bounty);
    cResult[4] = bounty;
    cResult[5] = questDockAdCreativeId;
    tmp18 = questDockAdCreativeId;
  } else {
    tmp18 = cResult[5];
  }
  importDefault = tmp18;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [QuestStore];
    cResult[6] = items2;
    tmp20 = items2;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] !== tmp18) {
    const fn2 = function b() {
      const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
      return isAdContentDismissedResult;
    };
    const items3 = [tmp18];
    cResult[7] = tmp18;
    cResult[8] = fn2;
    cResult[9] = items3;
    tmp23 = items3;
    tmp22 = fn2;
  } else {
    tmp22 = cResult[8];
    tmp23 = cResult[9];
  }
  const tmpResult11 = tmp(504);
  const stateFromStores1 = tmpResult11.useStateFromStores(tmp20, tmp22, tmp23);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [BountyStore];
    cResult[10] = items4;
    tmp25 = items4;
  } else {
    tmp25 = cResult[10];
  }
  if (cResult[11] === bounty.bounty) {
    let tmp27;
    let tmp28;
    if (cResult[12] === bounty.type) {
      tmp27 = cResult[13];
    }
    if (cResult[14] !== bounty) {
      const items5 = [bounty];
      cResult[14] = bounty;
      cResult[15] = items5;
      tmp28 = items5;
    } else {
      tmp28 = cResult[15];
    }
    const type = bounty.type;
    const tmpResult12 = tmp(504);
    const stateFromStores2 = tmpResult12.useStateFromStores(tmp25, tmp27, tmp28);
    if (tmp(6775).AdCreativeType.NO_FILL === type) {
      return false;
    } else if (tmp(6775).AdCreativeType.BOUNTY === type) {
      if (tmp16) {
        tmp16 = !stateFromStores1;
      }
      if (tmp16) {
        tmp16 = !stateFromStores2;
      }
      if (tmp16) {
        tmp16 = !tmp5;
      }
      return tmp16;
    } else if (tmp(6775).AdCreativeType.PLAYABLE === type) {
      return tmp16 && !stateFromStores1 && !tmp5;
    } else if (tmp(6775).AdCreativeType.QUEST === type) {
      if (stateFromStores) {
        let tmp30;
        if (null == claimedAt) {
          tmp30 = null != questDockQuest && !tmp5;
        }
        return tmp30;
      }
      tmp30 = null != questDockQuest && tmp16 && !isQuestExpired && null == claimedAt && !isDismissedResult && !tmp5;
    }
  }
  class M {
    constructor() {
      let isBountyCompletedResult = bounty.type === AdCreativeType.AdCreativeType.BOUNTY;
      const tmp = bounty;
      if (isBountyCompletedResult) {
        isBountyCompletedResult = BountyStore.isBountyCompleted(tmp.bounty.id);
      }
      return isBountyCompletedResult;
    }
  }
  cResult[11] = bounty.bounty;
  cResult[12] = bounty.type;
  cResult[13] = M;
  tmp27 = M;
}) : (function useIsMobileQuestDockRenderedBase(type) {
  let questDockAdCreativeId;
  let questPreviewOverride;
  _require = type;
  let tmp = _require;
  const obj = require("AdCreativeUtils");
  const questDockQuest = obj.getQuestDockQuest(type);
  const tmp4 = questDockAdCreativeId(7098)();
  const items = [QuestStore];
  let userStatus1;
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(type(dependencyMap[12]).QuestContent.QUEST_BAR_MOBILE), []);
  const tmp5 = QuestStore;
  if (questDockQuest != null) {
    userStatus1 = questDockQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    const tmpResult = tmp(7830);
    isDismissedResult = tmpResult.isDismissed(questDockQuest.userStatus, tmp(6771).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (questDockQuest != null) {
    const userStatus = questDockQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const tmpResult6 = tmp(9636);
  const isQuestExpired = tmpResult6.useIsQuestExpired(questDockQuest);
  const tmpResult7 = tmp(9628);
  let isEligibleForQuests = tmpResult7.getIsEligibleForQuests();
  const tmpResult8 = tmp(16954);
  questDockAdCreativeId = tmpResult8.getQuestDockAdCreativeId(type);
  const items1 = [tmp5];
  const items2 = [questDockAdCreativeId];
  const tmpResult9 = tmp(504);
  const stateFromStores1 = tmpResult9.useStateFromStores(items1, () => {
    const isAdContentDismissedResult = null != questDockAdCreativeId && QuestStore.isAdContentDismissed(tmp);
    return isAdContentDismissedResult;
  }, items2);
  const items3 = [BountyStore];
  const items4 = [type];
  type = type.type;
  const tmpResult10 = tmp(504);
  const stateFromStores2 = tmpResult10.useStateFromStores(items3, () => {
    let isBountyCompletedResult = type.type === AdCreativeType.AdCreativeType.BOUNTY;
    const tmp = type;
    if (isBountyCompletedResult) {
      isBountyCompletedResult = BountyStore.isBountyCompleted(tmp.bounty.id);
    }
    return isBountyCompletedResult;
  }, items4);
  if (tmp(6775).AdCreativeType.NO_FILL === type) {
    return false;
  } else if (tmp(6775).AdCreativeType.BOUNTY === type) {
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
  } else if (tmp(6775).AdCreativeType.PLAYABLE === type) {
    return isEligibleForQuests && !stateFromStores1 && !tmp4;
  } else if (tmp(6775).AdCreativeType.QUEST === type) {
    if (stateFromStores) {
      let tmp16;
      if (null == claimedAt) {
        tmp16 = null != questDockQuest && !tmp4;
      }
      return tmp16;
    }
    tmp16 = null != questDockQuest && isEligibleForQuests && !isQuestExpired && null == claimedAt && !isDismissedResult && !tmp4;
  }
});
let closure_14 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMobileQuestDockRendered() {
  if (typeof useDeliveredDockCreative === "function") {
    const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
    useQuestForPlacement;
    return closure_14(useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE));
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function useIsMobileQuestDockRendered() {
  if (typeof useDeliveredDockCreative === "function") {
    const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
    useQuestForPlacement;
    return closure_14(useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE));
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let closure_15 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useQuestGameLogotypeAssetUrl(quest) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== quest) {
    const tmpResult = AssetUtils;
    const questAsset = tmpResult.getQuestAsset(quest, tmp(9650).QuestAssetType.LOGO_TYPE, ThemeTypes.DARK);
    cResult[0] = quest;
    cResult[1] = questAsset;
    tmp4 = questAsset;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4.url;
}) : (function useQuestGameLogotypeAssetUrl(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(closure_0, AssetUtils.QuestAssetType.LOGO_TYPE, ThemeTypes.DARK).url;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useQuestDockHeroAsset(config) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] !== config) {
    const tmpResult = AssetUtils;
    const questAsset = tmpResult.getQuestAsset(config, tmp(9650).QuestAssetType.QUEST_BAR_HERO);
    if (cResult[3] === config.config.assets.questBarHeroVideo) {
      let tmp7;
      let replaced;
      if (cResult[4] === config.id) {
        tmp7 = cResult[5];
      }
      if (questAsset.isAnimated) {
        replaced = str.replace(tmp(9650).EXTENSION_RE, ".png");
      } else {
        replaced = str;
      }
      cResult[0] = config;
      cResult[1] = replaced;
      cResult[2] = tmp7;
      tmp4 = replaced;
      tmp5 = tmp7;
    }
    let asset = null;
    if (null != config.config.assets.questBarHeroVideo) {
      const tmpResult2 = AssetUtils;
      asset = tmpResult2.resolveAsset(config.id, config.config.assets.questBarHeroVideo);
    }
    cResult[3] = config.config.assets.questBarHeroVideo;
    cResult[4] = config.id;
    cResult[5] = asset;
    tmp7 = asset;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[6] === tmp4) {
    let tmp10;
    if (cResult[7] === tmp5) {
      tmp10 = cResult[8];
    }
    return tmp10;
  }
  const obj2 = { staticUrl: tmp4, videoAsset: tmp5 };
  cResult[6] = tmp4;
  cResult[7] = tmp5;
  cResult[8] = obj2;
  tmp10 = obj2;
}) : (function useQuestDockHeroAsset(arg0) {
  const config = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    let staticUrl;
    const obj = AssetUtils;
    const questAsset = obj.getQuestAsset(config, AssetUtils.QuestAssetType.QUEST_BAR_HERO);
    let videoAsset = null;
    if (null != config.config.assets.questBarHeroVideo) {
      const tmpResult = AssetUtils;
      videoAsset = tmpResult.resolveAsset(tmp3.id, tmp3.config.assets.questBarHeroVideo);
    }
    if (questAsset.isAnimated) {
      staticUrl = str.replace(tmp(9650).EXTENSION_RE, ".png");
    } else {
      staticUrl = str;
    }
    return { staticUrl, videoAsset };
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasWatchVideoOnMobileTasks(config) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== config) {
    const obj2 = { config };
    const tmpResult = QuestTaskUtils;
    const result = tmpResult.hasWatchVideoOnMobileTasks(obj2);
    cResult[0] = config;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useHasWatchVideoOnMobileTasks(config) {
  const items = [config];
  return react.useMemo(() => {
    const obj = QuestTaskUtils;
    const obj2 = { config };
    return obj.hasWatchVideoOnMobileTasks(obj2);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
function useMobileQuestDock() {
  const obj = useQuestForPlacement;
  const adRefreshLoop = obj.useAdRefreshLoop(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA);
  if (typeof useDeliveredDockCreative === "function") {
    const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
    useQuestForPlacement;
    return useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileActivityQuest(quest) {
  let analyticsLocations;
  let closure_1;
  let tmp4;
  let tmp7;
  let tmp9;
  _require = quest;
  let obj = require("react");
  const cResult = obj.c(25);
  if (cResult[0] !== quest) {
    const tmpResult = require("QuestTaskUtils");
    const activityApplicationId = tmpResult.getActivityApplicationId(quest);
    cResult[0] = quest;
    cResult[1] = activityApplicationId;
    tmp4 = activityApplicationId;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp6 = importDefault;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ApplicationStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class A {
      constructor() {
        return closure_6.getApplication(closure_1);
      }
    }
    cResult[3] = tmp4;
    cResult[4] = A;
    tmp9 = A;
  } else {
    class A {
      constructor() {
        return closure_6.getApplication(closure_1);
      }
    }
  }
  const tmpResult3 = require("get initialized");
  const stateFromStores = tmpResult3.useStateFromStores(tmp7, tmp9);
  if (cResult[5] !== stateFromStores) {
    class A {
      constructor() {
        return closure_6.getApplication(closure_1);
      }
    }
    const result = obj4.canLaunchContextlessFrame(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = result;
  } else {
    class A {
      constructor() {
        return closure_6.getApplication(closure_1);
      }
    }
  }
  if (cResult[7] === tmp11) {
    class A {
      constructor() {
        return closure_6.getApplication(closure_1);
      }
    }
  }
  const tmpResult4 = require("utils/QuestUtils");
  let canLaunchActivityResult = tmpResult4.canLaunchActivity(quest);
  if (canLaunchActivityResult) {
    class A {
      constructor() {
        return closure_6.getApplication(closure_1);
      }
    }
    canLaunchActivityResult = obj6.includes(constants.MOBILE_ACTIVITY_QUEST);
  }
  if (canLaunchActivityResult) {
    class A {
      constructor() {
        return closure_6.getApplication(closure_1);
      }
    }
    const tmp6Result = tmp6(analyticsLocations[28]);
    if (stateFromStores != null) {
      class A {
        constructor() {
          return closure_6.getApplication(closure_1);
        }
      }
      if (tmp17 != null) {
        class A {
          constructor() {
            return closure_6.getApplication(closure_1);
          }
        }
      }
    }
    canLaunchActivityResult = tmp6Result(tmp16);
  }
  if (canLaunchActivityResult) {
    class A {
      constructor() {
        return closure_6.getApplication(closure_1);
      }
    }
    if (!tmp18) {
      class A {
        constructor() {
          return closure_6.getApplication(closure_1);
        }
      }
      if (stateFromStores != null) {
        class A {
          constructor() {
            return closure_6.getApplication(closure_1);
          }
        }
        if (tmp20 != null) {
          class A {
            constructor() {
              return closure_6.getApplication(closure_1);
            }
          }
        }
      }
    }
    canLaunchActivityResult = tmp18;
  }
  cResult[7] = tmp11;
  cResult[8] = quest;
  if (stateFromStores != null) {
    class A {
      constructor() {
        return closure_6.getApplication(closure_1);
      }
    }
    if (tmp22 != null) {
      class A {
        constructor() {
          return closure_6.getApplication(closure_1);
        }
      }
    }
  }
  cResult[9] = undefined;
  if (stateFromStores != null) {
    class A {
      constructor() {
        return closure_6.getApplication(closure_1);
      }
    }
    if (tmp24 != null) {
      class A {
        constructor() {
          return closure_6.getApplication(closure_1);
        }
      }
    }
  }
  cResult[10] = undefined;
  cResult[11] = canLaunchActivityResult;
}) : (function useMobileActivityQuest(config) {
  let analyticsLocations;
  _require = config;
  let obj = require("QuestTaskUtils");
  let activityApplicationId = obj.getActivityApplicationId(config);
  const tmp = analyticsLocations;
  analyticsLocations = activityApplicationId(analyticsLocations[25])().analyticsLocations;
  let obj2 = require("get initialized");
  let items = [ApplicationStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ApplicationStore.getApplication(activityApplicationId));
  let obj3 = require("canLaunchContextlessFrame");
  let result = obj3.canLaunchContextlessFrame(stateFromStores);
  let obj4 = require("utils/QuestUtils");
  let canLaunchActivityResult = obj4.canLaunchActivity(config);
  const tmp3 = activityApplicationId;
  if (canLaunchActivityResult) {
    let features = config.config.features;
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
  const items1 = [stateFromStores, activityApplicationId, config.config.features];
  const effect = react.useEffect(() => {
    let hasItem = null == stateFromStores && null != activityApplicationId;
    if (hasItem) {
      const features = config.config.features;
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
          return { value: "IconComponent", done: "IconComponent" };
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
                const obj2 = activityApplicationId(analyticsLocations[30]);
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
          return { value: "IconComponent", done: "IconComponent" };
        } catch (tmp11) {
          c0 = 3;
          throw tmp11;
        }
      }
    }), items2)
  };
  return obj5;
});
const result2 = size.fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export const useMobileQuestDockHeight = tmp3;
export { useMobileQuestDock };
export const useIsMobileQuestDockVisibleToUser = tmp6;
export const useIsMobileQuestDockRenderedBase = tmp7;
export const useIsMobileQuestDockRendered = tmp8;
export const useQuestGameLogotypeAssetUrl = tmp9;
export const useQuestDockHeroAsset = tmp10;
export const useHasWatchVideoOnMobileTasks = tmp11;
export const useMobileActivityQuest = tmp12;
