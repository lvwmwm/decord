// Module ID: 15281
// Function ID: 15282
// Name: QuestHooks
// Dependencies: [5, 19, 4761, 5437, 7383, 7384, 5979, 5732, 10767, 1096, 558, 15282, 15310, 5982, 576, 6079, 4937, 5986, 504, 15292, 6625, 7380, 9149, 9144, 9157, 7406, 6848, 10768, 7404, 10881, 6849, 10769, 11566, 2]
// Exports: useMobileQuestDock

// Module 15281 (QuestHooks)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1096 */;
import CaptchaConstants from "CaptchaConstants" /* 5732 */;
import QuestTypes from "QuestTypes" /* 5982 */;
import AdCreativeType from "AdCreativeType" /* 5986 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6625 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6849 */;
import AssetUtils from "AssetUtils" /* 9157 */;
import FramesConstants from "FramesConstants" /* 10767 */;
import QuestDockHooks from "QuestDockHooks" /* 15282 */;
import useQuestForPlacement from "useQuestForPlacement" /* 15310 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ActionSheetStore_mod from "ActionSheetStore" /* 4761 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import BountyStore from "BountyStore" /* 7383 */;
import QuestStore from "QuestStore" /* 7384 */;
import QuestConstants from "QuestConstants" /* 5979 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, key;

let c10;
let c9;
let tmp;
const QuestTaskUtils = tmp(7406);
let react = react_mod;
let ActionSheetStore = ActionSheetStore_mod;
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: c9, QuestVariants: c10 } = QuestConstants);
const CAPTCHA_MODAL_KEY = CaptchaConstants.CAPTCHA_MODAL_KEY;
const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const ThemeTypes = Constants.ThemeTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileQuestDockHeight() {
  let num = 0;
  const tmp = closure_16();
  const obj = QuestDockHooks;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
}) : (function useMobileQuestDockHeight() {
  let num = 0;
  const tmp = closure_16();
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
    const tmpResult = tmp(4937);
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
      const fn2 = function _() {
        key = key.getKey();
        return key === CAPTCHA_MODAL_KEY || key === closure_1_9;
      };
      cResult[6] = items1;
      cResult[7] = fn2;
      tmp14 = fn2;
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
  let tmp21;
  let tmp23;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = bounty;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(16);
  const obj2 = require("AdCreativeUtils");
  const questDockQuest = obj2.getQuestDockQuest(bounty);
  useIsWindowLargeDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function u() {
      return null != questPreviewOverride.getQuestPreviewOverride(bounty(dependencyMap[13]).QuestContent.QUEST_BAR_MOBILE);
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
    const tmpResult7 = tmp(7380);
    isDismissedResult = tmpResult7.isDismissed(questDockQuest.userStatus, tmp(5982).QuestContent.QUEST_BAR_MOBILE);
  }
  if (questDockQuest != null) {
    const userStatus = questDockQuest.userStatus;
    if (userStatus != null) {
      const claimedAt = userStatus.claimedAt;
    }
  }
  const tmpResult8 = tmp(9149);
  const isQuestExpired = tmpResult8.useIsQuestExpired(questDockQuest);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult9 = tmp(9144);
    const isEligibleForQuests = tmpResult9.getIsEligibleForQuests();
    cResult[3] = isEligibleForQuests;
  }
  if (cResult[4] !== bounty) {
    const tmpResult10 = tmp(15292);
    const questDockAdCreativeId = tmpResult10.getQuestDockAdCreativeId(bounty);
    cResult[4] = bounty;
    cResult[5] = questDockAdCreativeId;
    tmp16 = questDockAdCreativeId;
  } else {
    tmp16 = cResult[5];
  }
  importDefault = tmp16;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [QuestStore];
    cResult[6] = items2;
    tmp18 = items2;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] !== tmp16) {
    class C {
      constructor() {
        const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
        return isAdContentDismissedResult;
      }
    }
    const items3 = [tmp16];
    cResult[7] = tmp16;
    cResult[8] = C;
    cResult[9] = items3;
    tmp21 = items3;
    tmp20 = C;
  } else {
    class C {
      constructor() {
        const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
        return isAdContentDismissedResult;
      }
    }
    tmp21 = cResult[9];
  }
  const tmpResult11 = tmp(504);
  const stateFromStores1 = tmpResult11.useStateFromStores(tmp18, tmp20, tmp21);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
        return isAdContentDismissedResult;
      }
    }
    const items4 = [BountyStore];
    cResult[10] = items4;
    tmp23 = items4;
  } else {
    class C {
      constructor() {
        const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
        return isAdContentDismissedResult;
      }
    }
  }
  if (cResult[11] === bounty.bounty) {
    let tmp24;
    class C {
      constructor() {
        const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
        return isAdContentDismissedResult;
      }
    }
    if (cResult[14] !== bounty) {
      class C {
        constructor() {
          const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
          return isAdContentDismissedResult;
        }
      }
      tmp25[0] = bounty;
      cResult[14] = bounty;
      cResult[15] = tmp25;
      tmp24 = tmp25;
    } else {
      class C {
        constructor() {
          const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
          return isAdContentDismissedResult;
        }
      }
    }
    const type = bounty.type;
    const tmpResult12 = tmp(504);
    const stateFromStores2 = tmpResult12.useStateFromStores(tmp23, O, tmp24);
    if (tmp(5986).AdCreativeType.NO_FILL === type) {
      class C {
        constructor() {
          const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
          return isAdContentDismissedResult;
        }
      }
      return false;
    } else {
      class C {
        constructor() {
          const isAdContentDismissedResult = null != closure_1 && QuestStore.isAdContentDismissed(tmp);
          return isAdContentDismissedResult;
        }
      }
    }
  }
  class O {
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
  cResult[13] = O;
}) : (function useIsMobileQuestDockRenderedBase(type) {
  let questDockAdCreativeId;
  let questPreviewOverride;
  _require = type;
  let tmp = _require;
  const obj = require("AdCreativeUtils");
  const questDockQuest = obj.getQuestDockQuest(type);
  const tmp4 = questDockAdCreativeId(6625)();
  const items = [QuestStore];
  let userStatus1;
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(type(dependencyMap[13]).QuestContent.QUEST_BAR_MOBILE), []);
  const tmp5 = QuestStore;
  if (questDockQuest != null) {
    userStatus1 = questDockQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    const tmpResult = tmp(7380);
    isDismissedResult = tmpResult.isDismissed(questDockQuest.userStatus, tmp(5982).QuestContent.QUEST_BAR_MOBILE);
  }
  let claimedAt;
  if (questDockQuest != null) {
    const userStatus = questDockQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const tmpResult6 = tmp(9149);
  const isQuestExpired = tmpResult6.useIsQuestExpired(questDockQuest);
  const tmpResult7 = tmp(9144);
  let isEligibleForQuests = tmpResult7.getIsEligibleForQuests();
  const tmpResult8 = tmp(15292);
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
  if (tmp(5986).AdCreativeType.NO_FILL === type) {
    return false;
  } else if (tmp(5986).AdCreativeType.BOUNTY === type) {
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
  } else if (tmp(5986).AdCreativeType.QUEST === type) {
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
let closure_15 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMobileQuestDockRendered() {
  if (typeof useDeliveredDockCreative === "function") {
    const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
    useQuestForPlacement;
    return closure_15(useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE));
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function useIsMobileQuestDockRendered() {
  if (typeof useDeliveredDockCreative === "function") {
    const useDeliveredCreativeForPlacement = useQuestForPlacement.useDeliveredCreativeForPlacement;
    useQuestForPlacement;
    return closure_15(useDeliveredCreativeForPlacement(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, QuestTypes.QuestContent.QUEST_BAR_MOBILE));
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let closure_16 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useQuestGameLogotypeAssetUrl(quest) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== quest) {
    const tmpResult = AssetUtils;
    const questAsset = tmpResult.getQuestAsset(quest, tmp(9157).QuestAssetType.LOGO_TYPE, ThemeTypes.DARK);
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
    const questAsset = tmpResult.getQuestAsset(config, tmp(9157).QuestAssetType.QUEST_BAR_HERO);
    if (cResult[3] === config.config.assets.questBarHeroVideo) {
      let tmp7;
      let replaced;
      if (cResult[4] === config.id) {
        tmp7 = cResult[5];
      }
      if (questAsset.isAnimated) {
        replaced = str.replace(tmp(9157).EXTENSION_RE, ".png");
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
      staticUrl = str.replace(tmp(9157).EXTENSION_RE, ".png");
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
const tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileActivityQuest(quest) {
  let analyticsLocations;
  let closure_1;
  let tmp4;
  let tmp7;
  let tmp9;
  _require = quest;
  let obj = require("react");
  const cResult = obj.c(26);
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
  react = tmp11;
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
    const tmp6Result = tmp6(analyticsLocations[29]);
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
  const tmp3 = activityApplicationId;
  const tmp = analyticsLocations;
  analyticsLocations = activityApplicationId(analyticsLocations[26])().analyticsLocations;
  let obj2 = require("get initialized");
  let items = [ApplicationStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ApplicationStore.getApplication(activityApplicationId));
  let obj3 = require("canLaunchContextlessFrame");
  const result = obj3.canLaunchContextlessFrame(stateFromStores);
  react = result;
  let obj4 = require("utils/QuestUtils");
  let canLaunchActivityResult = obj4.canLaunchActivity(config);
  if (canLaunchActivityResult) {
    let features = config.config.features;
    canLaunchActivityResult = features.includes(constants.MOBILE_ACTIVITY_QUEST);
  }
  if (canLaunchActivityResult) {
    let supported_platforms;
    const tmp3Result = tmp3(tmp[29]);
    if (stateFromStores != null) {
      const embeddedActivityConfig = stateFromStores.embeddedActivityConfig;
      if (embeddedActivityConfig != null) {
        supported_platforms = embeddedActivityConfig.supported_platforms;
      }
    }
    canLaunchActivityResult = tmp3Result(supported_platforms);
  }
  if (canLaunchActivityResult) {
    let tmp11 = result;
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
  const items2 = [result, stateFromStores, canLaunchActivityResult, analyticsLocations];
  let obj5 = {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: react.useCallback(stateFromStores(function*(arg0, value) {
      let obj7;
      let v2;
      let v3;
      if (config === 2) {
        config = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          config = 2;
          if (0 === activityApplicationId) {
            if (arg0 === 1) {
              config = 3;
              throw value;
            } else if (arg0 === 2) {
              config = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const tmp19 = ActionSheetStore;
              if (tmp19) {
                const tmp4 = react;
                if (tmp4) {
                  const obj5 = { applicationId: stateFromStores.id, surface, analyticsContext: obj7 };
                  obj7 = { isStart: true, analyticsLocations };
                  const obj6 = activityApplicationId(analyticsLocations[31]);
                  activityApplicationId = 1;
                  config = 1;
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
                    const obj3 = config(analyticsLocations[32]);
                    config = 1;
                    const obj10 = { value: obj3.launchActivityInBotDM(obj9), done: false };
                    return obj10;
                  }
                }
              }
            }
          } else if (1 === tmp3) {
            if (arg0 === 1) {
              config = 3;
              throw value;
            } else if (arg0 === 2) {
              config = 3;
              const obj11 = { value, done: true };
              return obj11;
            }
          } else if (arg0 === 1) {
            config = 3;
            throw value;
          } else if (arg0 === 2) {
            config = 3;
            const obj = { value, done: true };
            return obj;
          }
          config = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          config = 3;
          throw tmp15;
        }
      }
    }), items2)
  };
  return obj5;
});
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
