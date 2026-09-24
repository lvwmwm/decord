// Module ID: 15357
// Function ID: 15358
// Name: QuestHooks
// Dependencies: [5, 19, 4483, 5017, 7975, 7976, 5695, 5124, 9344, 1089, 558, 15358, 568, 5698, 504, 15382, 7974, 7972, 5702, 12377, 4648, 15368, 7218, 11643, 11644, 10606, 7997, 7441, 9622, 7995, 9662, 7442, 9599, 11677, 2]
// Exports: useMobileQuestDock

// Module 15357 (QuestHooks)
import c from "c" /* 568 */;
import QuestTypes from "QuestTypes" /* 5698 */;
import AdCreativeType from "AdCreativeType" /* 5702 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7218 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 7442 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7997 */;
import useQuestForPlacement from "useQuestForPlacement" /* 15382 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4483 */;
import ApplicationStore from "ApplicationStore" /* 5017 */;
import BountyStore from "BountyStore" /* 7975 */;
import QuestStore from "QuestStore" /* 7976 */;

const require = globalThis.__r;

const AssetUtils = EXTENSION_RE(10606);
require = fn;
const QuestConstants = fn(5695);
({ QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY: closure_9, QuestVariants: c10 } = QuestConstants);
const CAPTCHA_MODAL_KEY = fn(5124).CAPTCHA_MODAL_KEY;
const MAIN_SURFACE = fn(9344).MAIN_SURFACE;
const ThemeTypes = fn(1089).ThemeTypes;
fn(558);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let NO_FILL = dependencyMap;
  const cResult = require("c").c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function s() {
      return questPreviewOverride.getQuestPreviewOverride(closure_0(dependencyMap[13]).QuestContent.QUEST_BAR_MOBILE);
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp3 = items;
    tmp4 = fn;
    tmp5 = items1;
  } else {
    [tmp3, tmp4, tmp5] = cResult;
  }
  const obj = require("c");
  let stateFromStores = require("initialize").useStateFromStores(tmp3, tmp4, tmp5);
  const tmpResult = require("initialize");
  const adDecisionForPlacement = require("useQuestForPlacement").useAdDecisionForPlacement(tmp(5698).AdPlacement.MOBILE_HOME_DOCK_AREA);
  let creative;
  if (adDecisionForPlacement != null) {
    creative = adDecisionForPlacement.creative;
  }
  if (cResult[3] !== creative) {
    const deliveredQuestId = tmp(7974).getDeliveredQuestId(creative);
    cResult[3] = creative;
    cResult[4] = deliveredQuestId;
    let tmp10 = deliveredQuestId;
    const tmpResult7 = tmp(7974);
  } else {
    tmp10 = cResult[4];
  }
  _require = tmp10;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [QuestStore];
    cResult[5] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== tmp10) {
    const fn2 = function y() {
      let tmp2 = null;
      if (null != closure_0) {
        const quests = QuestStore.quests;
        value = quests.get(tmp);
        if (value == null) {
          value = null;
        }
        tmp2 = value;
      }
      return tmp2;
    };
    const items3 = [tmp10];
    cResult[6] = tmp10;
    cResult[7] = fn2;
    cResult[8] = items3;
    let tmp15 = items3;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[7];
    tmp15 = cResult[8];
  }
  const tmpResult6 = require("useQuestForPlacement");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp12, tmp14, tmp15);
  if (cResult[9] !== stateFromStores1) {
    let tmp18 = null;
    if (null != stateFromStores1) {
      tmp18 = null;
      if (!tmpResult9.isQuestExpired(stateFromStores1)) {
        tmp18 = stateFromStores1;
      }
      tmpResult9 = tmp(7972);
    }
    cResult[9] = stateFromStores1;
    cResult[10] = tmp18;
    let tmp17 = tmp18;
  } else {
    tmp17 = cResult[10];
  }
  if (stateFromStores == null) {
    stateFromStores = tmp17;
  }
  let creative1;
  if (adDecisionForPlacement != null) {
    creative1 = adDecisionForPlacement.creative;
  }
  if (cResult[11] !== creative1) {
    const deliveredBounty = tmp(7974).getDeliveredBounty(creative1);
    cResult[11] = creative1;
    cResult[12] = deliveredBounty;
    let tmp20 = deliveredBounty;
    const tmpResult10 = tmp(7974);
  } else {
    tmp20 = cResult[12];
  }
  if (null == stateFromStores) {
    if (null == tmp20) {
      const _Symbol = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { type: null };
        NO_FILL = tmp(5702).AdCreativeType.NO_FILL;
        obj2.type = NO_FILL;
        cResult[17] = obj2;
      }
    } else {
      if (cResult[15] !== tmp20) {
        const obj3 = { type: tmp(5702).AdCreativeType.BOUNTY, bounty: tmp20 };
        cResult[15] = tmp20;
        cResult[16] = obj3;
        let tmp23 = obj3;
      } else {
        tmp23 = cResult[16];
      }
      let tmp22 = tmp23;
    }
  } else if (cResult[13] !== stateFromStores) {
    const obj4 = { type: tmp(5702).AdCreativeType.QUEST, quest: stateFromStores };
    cResult[13] = stateFromStores;
    cResult[14] = obj4;
    tmp22 = obj4;
  } else {
    tmp22 = cResult[14];
  }
  return tmp22;
}) : (() => {
  const items = [QuestStore];
  let stateFromStores = deliveredQuestId(deliveredBounty[14]).useStateFromStores(items, () => questPreviewOverride.getQuestPreviewOverride(deliveredQuestId(deliveredBounty[13]).QuestContent.QUEST_BAR_MOBILE), []);
  let obj = deliveredQuestId(deliveredBounty[14]);
  const tmp3 = QuestStore;
  const adDecisionForPlacement = deliveredQuestId(deliveredBounty[15]).useAdDecisionForPlacement(deliveredQuestId(deliveredBounty[13]).AdPlacement.MOBILE_HOME_DOCK_AREA);
  let obj2 = deliveredQuestId(deliveredBounty[15]);
  let creative;
  if (adDecisionForPlacement != null) {
    creative = adDecisionForPlacement.creative;
  }
  deliveredQuestId = deliveredQuestId(deliveredBounty[16]).getDeliveredQuestId(creative);
  let obj3 = deliveredQuestId(deliveredBounty[16]);
  const items1 = [tmp3];
  const items2 = [deliveredQuestId];
  const stateFromStores1 = deliveredQuestId(deliveredBounty[14]).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != deliveredQuestId) {
      const quests = QuestStore.quests;
      value = quests.get(tmp);
      if (value == null) {
        value = null;
      }
      tmp2 = value;
    }
    return tmp2;
  }, items2);
  let tmp9 = null;
  if (null != stateFromStores1) {
    tmp9 = null;
    if (!tmpResult3.isQuestExpired(stateFromStores1)) {
      tmp9 = stateFromStores1;
    }
    tmpResult3 = tmp(tmp2[17]);
  }
  if (stateFromStores == null) {
    stateFromStores = tmp9;
  }
  const tmpResult = deliveredQuestId(deliveredBounty[14]);
  let creative1;
  if (adDecisionForPlacement != null) {
    creative1 = adDecisionForPlacement.creative;
  }
  deliveredBounty = deliveredQuestId(deliveredBounty[16]).getDeliveredBounty(creative1);
  const items3 = [stateFromStores, deliveredBounty];
  return noop.useMemo(() => {
    if (null != stateFromStores) {
      const obj2 = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
      let obj = obj2;
    } else if (null != deliveredBounty) {
      const obj3 = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp2 };
      obj = obj3;
    } else {
      obj = { type: AdCreativeType.AdCreativeType.NO_FILL };
    }
    return obj;
  }, items3);
});
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = closure_16();
  let num = 0;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
}) : (() => {
  const tmp = closure_16();
  let num = 0;
  if (tmp) {
    num = obj.useQuestDockExternalOffset();
  }
  return num;
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  _require = bounty;
  const cResult = require("c").c(16);
  const obj = require("c");
  const deliveredQuest = require("QuestDockCreativeContext").getDeliveredQuest(bounty);
  useIsWindowLargeDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    const fn = function n() {
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
  const obj2 = require("QuestDockCreativeContext");
  let userStatus1;
  const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7, tmp8);
  if (deliveredQuest != null) {
    userStatus1 = deliveredQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    isDismissedResult = tmp(7972).isDismissed(deliveredQuest.userStatus, tmp(5698).QuestContent.QUEST_BAR_MOBILE);
    const tmpResult7 = tmp(7972);
  }
  if (deliveredQuest != null) {
    const userStatus = deliveredQuest.userStatus;
    if (userStatus != null) {
      const claimedAt = userStatus.claimedAt;
    }
  }
  const tmpResult = require("initialize");
  const isQuestExpired = require("hooks/QuestHooks").useIsQuestExpired(deliveredQuest);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const isEligibleForQuests = tmp(11644).getIsEligibleForQuests();
    cResult[3] = isEligibleForQuests;
    const tmpResult9 = tmp(11644);
  }
  if (cResult[4] !== bounty) {
    const deliveredAdCreativeId = tmp(15368).getDeliveredAdCreativeId(bounty);
    cResult[4] = bounty;
    cResult[5] = deliveredAdCreativeId;
    let tmp16 = deliveredAdCreativeId;
    const tmpResult10 = tmp(15368);
  } else {
    tmp16 = cResult[5];
  }
  importDefault = tmp16;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [QuestStore];
    cResult[6] = items2;
    let tmp18 = items2;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] !== tmp16) {
    class Q {
      constructor() {
        isAdContentDismissedResult = null != closure_1;
        if (isAdContentDismissedResult) {
          tmp3 = closure_8;
          isAdContentDismissedResult = closure_8.isAdContentDismissed(tmp);
        }
        return isAdContentDismissedResult;
      }
    }
    const items3 = [tmp16];
    cResult[7] = tmp16;
    cResult[8] = Q;
    cResult[9] = items3;
    let tmp21 = items3;
    const tmp20 = Q;
  } else {
    class Q {
      constructor() {
        isAdContentDismissedResult = null != closure_1;
        if (isAdContentDismissedResult) {
          tmp3 = closure_8;
          isAdContentDismissedResult = closure_8.isAdContentDismissed(tmp);
        }
        return isAdContentDismissedResult;
      }
    }
    tmp21 = cResult[9];
  }
  const tmpResult8 = require("hooks/QuestHooks");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp18, tmp20, tmp21);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class Q {
      constructor() {
        isAdContentDismissedResult = null != closure_1;
        if (isAdContentDismissedResult) {
          tmp3 = closure_8;
          isAdContentDismissedResult = closure_8.isAdContentDismissed(tmp);
        }
        return isAdContentDismissedResult;
      }
    }
    const items4 = [BountyStore];
    cResult[10] = items4;
    const tmp23 = items4;
  } else {
    class Q {
      constructor() {
        isAdContentDismissedResult = null != closure_1;
        if (isAdContentDismissedResult) {
          tmp3 = closure_8;
          isAdContentDismissedResult = closure_8.isAdContentDismissed(tmp);
        }
        return isAdContentDismissedResult;
      }
    }
  }
  if (cResult[11] === bounty.bounty) {
    class Q {
      constructor() {
        isAdContentDismissedResult = null != closure_1;
        if (isAdContentDismissedResult) {
          tmp3 = closure_8;
          isAdContentDismissedResult = closure_8.isAdContentDismissed(tmp);
        }
        return isAdContentDismissedResult;
      }
    }
    if (cResult[14] !== bounty) {
      class Q {
        constructor() {
          isAdContentDismissedResult = null != closure_1;
          if (isAdContentDismissedResult) {
            tmp3 = closure_8;
            isAdContentDismissedResult = closure_8.isAdContentDismissed(tmp);
          }
          return isAdContentDismissedResult;
        }
      }
      tmp25[0] = bounty;
      cResult[14] = bounty;
      cResult[15] = tmp25;
      const tmp24 = tmp25;
    } else {
      class Q {
        constructor() {
          isAdContentDismissedResult = null != closure_1;
          if (isAdContentDismissedResult) {
            tmp3 = closure_8;
            isAdContentDismissedResult = closure_8.isAdContentDismissed(tmp);
          }
          return isAdContentDismissedResult;
        }
      }
    }
    const stateFromStores2 = tmp(504).useStateFromStores(tmp23, B, tmp24);
    if (tmp(5702).AdCreativeType.NO_FILL === bounty.type) {
      class Q {
        constructor() {
          isAdContentDismissedResult = null != closure_1;
          if (isAdContentDismissedResult) {
            tmp3 = closure_8;
            isAdContentDismissedResult = closure_8.isAdContentDismissed(tmp);
          }
          return isAdContentDismissedResult;
        }
      }
      return false;
    } else {
      class Q {
        constructor() {
          isAdContentDismissedResult = null != closure_1;
          if (isAdContentDismissedResult) {
            tmp3 = closure_8;
            isAdContentDismissedResult = closure_8.isAdContentDismissed(tmp);
          }
          return isAdContentDismissedResult;
        }
      }
    }
    const tmpResult12 = tmp(504);
  }
  class B {
    constructor() {
      tmp = closure_0;
      isBountyCompletedResult = closure_0.type === closure_0(closure_2[18]).AdCreativeType.BOUNTY;
      if (isBountyCompletedResult) {
        tmp3 = closure_7;
        isBountyCompletedResult = closure_7.isBountyCompleted(tmp.bounty.id);
      }
      return isBountyCompletedResult;
    }
  }
  cResult[11] = bounty.bounty;
  cResult[12] = bounty.type;
  cResult[13] = B;
}) : ((type) => {
  _require = type;
  const deliveredQuest = require("QuestDockCreativeContext").getDeliveredQuest(type);
  const tmp4 = deliveredAdCreativeId(7218)();
  const obj = require("QuestDockCreativeContext");
  const items = [QuestStore];
  let userStatus1;
  const stateFromStores = require("initialize").useStateFromStores(items, () => null != questPreviewOverride.getQuestPreviewOverride(type(dependencyMap[13]).QuestContent.QUEST_BAR_MOBILE), []);
  if (deliveredQuest != null) {
    userStatus1 = deliveredQuest.userStatus;
  }
  let isDismissedResult = null != userStatus1;
  if (isDismissedResult) {
    isDismissedResult = tmp(7972).isDismissed(deliveredQuest.userStatus, tmp(5698).QuestContent.QUEST_BAR_MOBILE);
    const tmpResult = tmp(7972);
  }
  let claimedAt;
  if (deliveredQuest != null) {
    const userStatus = deliveredQuest.userStatus;
    if (userStatus != null) {
      claimedAt = userStatus.claimedAt;
    }
  }
  const obj2 = require("initialize");
  const tmp5 = QuestStore;
  const isQuestExpired = require("hooks/QuestHooks").useIsQuestExpired(deliveredQuest);
  const tmpResult6 = require("hooks/QuestHooks");
  let isEligibleForQuests = require("QuestsEligibility").getIsEligibleForQuests();
  const tmpResult7 = require("QuestsEligibility");
  deliveredAdCreativeId = require("QuestDockCreativeContext").getDeliveredAdCreativeId(type);
  const tmpResult8 = require("QuestDockCreativeContext");
  const items1 = [tmp5];
  const items2 = [deliveredAdCreativeId];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let isAdContentDismissedResult = null != deliveredAdCreativeId;
    if (isAdContentDismissedResult) {
      isAdContentDismissedResult = QuestStore.isAdContentDismissed(tmp);
    }
    return isAdContentDismissedResult;
  }, items2);
  const tmpResult9 = require("initialize");
  const items3 = [BountyStore];
  const items4 = [type];
  type = type.type;
  const stateFromStores2 = require("initialize").useStateFromStores(items3, () => {
    let isBountyCompletedResult = type.type === AdCreativeType.AdCreativeType.BOUNTY;
    if (isBountyCompletedResult) {
      isBountyCompletedResult = BountyStore.isBountyCompleted(type.bounty.id);
    }
    return isBountyCompletedResult;
  }, items4);
  if (require("AdCreativeType").AdCreativeType.NO_FILL === type) {
    return false;
  } else if (tmp(5702).AdCreativeType.BOUNTY === type) {
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
  } else if (tmp(5702).AdCreativeType.QUEST === type) {
    if (stateFromStores) {
      if (!tmp10) {
        let tmp16 = null != deliveredQuest && !tmp4;
      }
      return tmp16;
    }
    tmp16 = null != deliveredQuest && isEligibleForQuests && !isQuestExpired && !tmp10 && !isDismissedResult && !tmp4;
    const tmp17 = null != deliveredQuest && isEligibleForQuests && !isQuestExpired && !tmp10 && !isDismissedResult && !tmp4;
  }
});
let closure_15 = tmp6;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => closure_15(closure_14())) : (() => closure_15(closure_14()));
let closure_16 = tmp7;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest, arg1) => {
  _require = quest;
  const cResult = require("c").c(8);
  const obj = require("c");
  const isChannelFocused = require("isChannelFocused").useIsChannelFocused();
  const obj2 = require("isChannelFocused");
  const currentNavigationRouteName = require("NavigationRouteUtils").useCurrentNavigationRouteName();
  if (cResult[0] !== currentNavigationRouteName) {
    const obj4 = { name: currentNavigationRouteName };
    const coerceGuildsRouteResult = tmp(4648).coerceGuildsRoute(obj4);
    cResult[0] = currentNavigationRouteName;
    cResult[1] = coerceGuildsRouteResult;
    let tmp6 = coerceGuildsRouteResult;
    const tmpResult = tmp(4648);
  } else {
    tmp6 = cResult[1];
  }
  let tmp8 = null != tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === quest.quest) {
    if (cResult[4] === quest.type) {
      let tmp11 = cResult[5];
    }
    let stateFromStores = tmp(504).useStateFromStores(tmp9, tmp11);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ActionSheetStore];
      class S {
        constructor() {
          key = closure_1_5.getKey();
          tmp2 = key === closure_1_11;
          if (!tmp2) {
            tmp3 = closure_1_9;
            tmp2 = key === closure_1_9;
          }
          return tmp2;
        }
      }
      cResult[6] = items1;
      cResult[7] = S;
      let tmp14 = S;
      let tmp13 = items1;
    } else {
      tmp13 = cResult[6];
      tmp14 = cResult[7];
    }
    let tmp16 = arg1;
    const tmpResult3 = tmp(504);
    const stateFromStores1 = tmp(504).useStateFromStores(tmp13, tmp14);
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
  const fn = function f() {
    const type = quest.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      return QuestStore.isClaimingReward(tmp.quest.id);
    } else {
      return false;
    }
    tmp = quest;
  };
  cResult[3] = quest.quest;
  cResult[4] = quest.type;
  cResult[5] = fn;
  tmp11 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  let tmp = arg1;
  const isChannelFocused = require("isChannelFocused").useIsChannelFocused();
  const obj = require("isChannelFocused");
  const currentNavigationRouteName = require("NavigationRouteUtils").useCurrentNavigationRouteName();
  const obj2 = require("NavigationRouteUtils");
  let tmp4 = null != require("NavigationRouteUtils").coerceGuildsRoute({ name: currentNavigationRouteName });
  const obj3 = require("NavigationRouteUtils");
  const items = [QuestStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    type = type.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      return QuestStore.isClaimingReward(tmp.quest.id);
    } else {
      return false;
    }
    tmp = type;
  });
  const obj4 = require("initialize");
  const items1 = [ActionSheetStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    key = key.getKey();
    let tmp2 = key === CAPTCHA_MODAL_KEY;
    if (!tmp2) {
      tmp2 = key === closure_1_9;
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
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = c.c(2);
  if (cResult[0] !== quest) {
    const questAsset = tmp(10606).getQuestAsset(quest, tmp(10606).QuestAssetType.LOGO_TYPE, ThemeTypes.DARK);
    cResult[0] = quest;
    cResult[1] = questAsset;
    let tmp4 = questAsset;
    const tmpResult = tmp(10606);
  } else {
    tmp4 = cResult[1];
  }
  return tmp4.url;
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => AssetUtils.getQuestAsset(closure_0, AssetUtils.QuestAssetType.LOGO_TYPE, ThemeTypes.DARK).url, items);
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  let EXTENSION_RE = require;
  const cResult = c.c(9);
  if (cResult[0] !== config) {
    const questAsset = AssetUtils.getQuestAsset(config, AssetUtils.QuestAssetType.QUEST_BAR_HERO);
    if (cResult[3] === config.config.assets.questBarHeroVideo) {
      if (cResult[4] === config.id) {
        let tmp5 = cResult[5];
      }
      if (questAsset.isAnimated) {
        EXTENSION_RE = AssetUtils.EXTENSION_RE;
        let replaced = str2.replace(EXTENSION_RE, ".png");
      } else {
        replaced = str2;
      }
      cResult[0] = config;
      cResult[1] = replaced;
      cResult[2] = tmp5;
    }
    let asset = null;
    if (null != config.config.assets.questBarHeroVideo) {
      asset = AssetUtils.resolveAsset(config.id, config.config.assets.questBarHeroVideo);
      const EXTENSION_REResult1 = AssetUtils;
    }
    cResult[3] = config.config.assets.questBarHeroVideo;
    cResult[4] = config.id;
    cResult[5] = asset;
    tmp5 = asset;
    const EXTENSION_REResult = AssetUtils;
  } else {
    if (cResult[6] === cResult[1]) {
      if (cResult[7] === tmp3) {
        let tmp10 = cResult[8];
      }
      return tmp10;
    }
    const obj2 = { staticUrl: cResult[1], videoAsset: cResult[2] };
    cResult[6] = cResult[1];
    cResult[7] = cResult[2];
    cResult[8] = obj2;
    tmp10 = obj2;
  }
}) : ((arg0) => {
  const config = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    const questAsset = AssetUtils.getQuestAsset(config, AssetUtils.QuestAssetType.QUEST_BAR_HERO);
    let videoAsset = null;
    if (null != config.config.assets.questBarHeroVideo) {
      videoAsset = tmp(10606).resolveAsset(tmp3.id, tmp3.config.assets.questBarHeroVideo);
      const tmpResult = tmp(10606);
    }
    if (questAsset.isAnimated) {
      let staticUrl = str.replace(tmp(10606).EXTENSION_RE, ".png");
    } else {
      staticUrl = str;
    }
    return { staticUrl, videoAsset };
  }, items);
});
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  const cResult = c.c(2);
  if (cResult[0] !== config) {
    const obj2 = { config };
    const result = QuestTaskUtils.hasWatchVideoOnMobileTasks(obj2);
    cResult[0] = config;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult = QuestTaskUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((config) => {
  const items = [config];
  return noop.useMemo(() => QuestTaskUtils.hasWatchVideoOnMobileTasks({ config }), items);
});
fn = () => {
  const adRefreshLoop = useQuestForPlacement.useAdRefreshLoop(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA);
  return closure_14();
};
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/quests/native/QuestHooks.native.tsx");

export const useMobileQuestDockHeight = tmp3;
export const useMobileQuestDock = fn;
export const useIsMobileQuestDockVisibleToUser = tmp5;
export const useIsMobileQuestDockRenderedBase = tmp6;
export const useIsMobileQuestDockRendered = tmp7;
export const useQuestGameLogotypeAssetUrl = tmp8;
export const useQuestDockHeroAsset = tmp9;
export const useHasWatchVideoOnMobileTasks = tmp10;
export const useMobileActivityQuest = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  _require = config;
  const cResult = require("c").c(26);
  if (cResult[0] !== config) {
    const activityApplicationId = tmp(tmp2[26]).getActivityApplicationId(config);
    cResult[0] = config;
    cResult[1] = activityApplicationId;
    let tmp4 = activityApplicationId;
    const tmpResult = tmp(tmp2[26]);
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ApplicationStore];
    cResult[2] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function v() {
      return ApplicationStore.getApplication(closure_1);
    };
    cResult[3] = tmp4;
    cResult[4] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[4];
  }
  let obj = require("c");
  const tmp6 = importDefault;
  const stateFromStores = require("initialize").useStateFromStores(tmp7, tmp9);
  if (cResult[5] !== stateFromStores) {
    const canLaunchFrameResult = tmp(tmp2[28]).canLaunchFrame(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = canLaunchFrameResult;
    let tmp11 = canLaunchFrameResult;
    const tmpResult5 = tmp(tmp2[28]);
  } else {
    tmp11 = cResult[6];
  }
  noop = tmp11;
  if (cResult[7] === tmp11) {
    if (cResult[8] === config) {
      let id;
      if (stateFromStores != null) {
        let bot = stateFromStores.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      if (cResult[9] === id) {
        let supported_platforms;
        if (stateFromStores != null) {
          const embeddedActivityConfig = stateFromStores.embeddedActivityConfig;
          if (embeddedActivityConfig != null) {
            supported_platforms = embeddedActivityConfig.supported_platforms;
          }
        }
        if (cResult[10] === supported_platforms) {
          let tmp16 = cResult[11];
        }
        closure_5 = tmp16;
        if (cResult[12] === tmp4) {
          if (cResult[13] === config.config.features) {
            if (cResult[14] === stateFromStores) {
              let tmp27 = cResult[15];
              let tmp28 = cResult[16];
            }
            const effect = noop.useEffect(tmp27, tmp28);
            if (cResult[17] === analyticsLocations) {
              if (cResult[18] === tmp11) {
                if (cResult[19] === tmp16) {
                  if (cResult[20] === stateFromStores) {
                    let tmp31 = cResult[21];
                  }
                  if (cResult[22] === tmp16) {
                    if (cResult[23] === tmp31) {
                      if (cResult[24] === stateFromStores) {
                        let tmp34 = cResult[25];
                      }
                      return tmp34;
                    }
                  }
                  let obj2 = { isMobileActivityQuest: tmp16, questApplication: stateFromStores, launchMobileActivity: tmp31 };
                  class C {
                    constructor() {
                      hasItem = null == closure_3;
                      if (hasItem) {
                        tmp2 = closure_1;
                        hasItem = null != closure_1;
                      }
                      if (hasItem) {
                        tmp3 = closure_0;
                        features = closure_0.config.features;
                        tmp4 = QuestVariants;
                        hasItem = features.includes(QuestVariants.MOBILE_ACTIVITY_QUEST);
                      }
                      if (hasItem) {
                        tmp5 = closure_1;
                        tmp6 = closure_2;
                        obj = closure_1(closure_2[31]);
                        tmp7 = closure_1;
                        items = [];
                        items[0] = closure_1;
                        flag = false;
                        applications = obj.fetchApplications(items, false);
                      }
                      return;
                    }
                  }
                  cResult[22] = tmp16;
                  cResult[23] = tmp31;
                  cResult[24] = stateFromStores;
                  cResult[25] = obj2;
                  tmp34 = obj2;
                }
              }
            }
            _require = stateFromStores(function*(arg0, value) {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
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
                  c0 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else if (closure_1_5) {
                      if (closure_1_4) {
                        const obj5 = { applicationId: id.id, surface, analyticsContext: null };
                        const obj7 = { isStart: true, analyticsLocations };
                        obj5.analyticsContext = obj7;
                        c1 = 1;
                        c0 = 1;
                        const obj8 = { value: v2(analyticsLocations[32]).launchFrame(obj5), done: false };
                        return obj8;
                      } else {
                        id = undefined;
                        if (id != null) {
                          const bot = tmp6.bot;
                          if (bot != null) {
                            id = bot.id;
                          }
                        }
                        if (null != id) {
                          const obj9 = { appId: tmp6.id, botId: tmp6.bot.id, analyticsLocations: [] };
                          c1 = 2;
                          c0 = 1;
                          const obj10 = { value: v3(analyticsLocations[33]).launchActivityInBotDM(obj9), done: false };
                          return obj10;
                        }
                      }
                    }
                  } else if (1 === tmp4) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj11 = { value, done: true };
                      return obj11;
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
                  return { value: "IconComponent", done: null };
                } catch (tmp16) {
                  c0 = tmp;
                  throw tmp16;
                }
              }
            });
            class C {
              constructor() {
                hasItem = null == closure_3;
                if (hasItem) {
                  tmp2 = closure_1;
                  hasItem = null != closure_1;
                }
                if (hasItem) {
                  tmp3 = closure_0;
                  features = closure_0.config.features;
                  tmp4 = QuestVariants;
                  hasItem = features.includes(QuestVariants.MOBILE_ACTIVITY_QUEST);
                }
                if (hasItem) {
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  obj = closure_1(closure_2[31]);
                  tmp7 = closure_1;
                  items = [];
                  items[0] = closure_1;
                  flag = false;
                  applications = obj.fetchApplications(items, false);
                }
                return;
              }
            }
            cResult[17] = analyticsLocations;
            cResult[18] = tmp11;
            cResult[19] = tmp16;
            cResult[20] = stateFromStores;
            cResult[21] = tmp33;
            tmp31 = tmp33;
          }
        }
        class C {
          constructor() {
            hasItem = null == closure_3;
            if (hasItem) {
              tmp2 = closure_1;
              hasItem = null != closure_1;
            }
            if (hasItem) {
              tmp3 = closure_0;
              features = closure_0.config.features;
              tmp4 = QuestVariants;
              hasItem = features.includes(QuestVariants.MOBILE_ACTIVITY_QUEST);
            }
            if (hasItem) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              obj = closure_1(closure_2[31]);
              tmp7 = closure_1;
              items = [];
              items[0] = closure_1;
              flag = false;
              applications = obj.fetchApplications(items, false);
            }
            return;
          }
        }
        const items1 = [stateFromStores, tmp4, config.config.features];
        cResult[12] = tmp4;
        cResult[13] = config.config.features;
        cResult[14] = stateFromStores;
        cResult[15] = C;
        cResult[16] = items1;
        tmp28 = items1;
        tmp27 = C;
      }
    }
  }
  const tmpResult4 = require("initialize");
  let canLaunchActivityResult = require("utils/QuestUtils").canLaunchActivity(config);
  if (canLaunchActivityResult) {
    let features = config.config.features;
    canLaunchActivityResult = features.includes(constants.MOBILE_ACTIVITY_QUEST);
  }
  if (canLaunchActivityResult) {
    let supported_platforms1;
    if (stateFromStores != null) {
      const embeddedActivityConfig2 = stateFromStores.embeddedActivityConfig;
      if (embeddedActivityConfig2 != null) {
        supported_platforms1 = embeddedActivityConfig2.supported_platforms;
      }
    }
    canLaunchActivityResult = tmp6(tmp2[30])(supported_platforms1);
    const tmp6Result = tmp6(tmp2[30]);
  }
  if (canLaunchActivityResult) {
    let tmp22 = tmp11;
    if (!tmp11) {
      let id1;
      if (stateFromStores != null) {
        const bot2 = stateFromStores.bot;
        if (bot2 != null) {
          id1 = bot2.id;
        }
      }
      tmp22 = null != id1;
    }
    canLaunchActivityResult = tmp22;
  }
  cResult[7] = tmp11;
  cResult[8] = config;
  let id2;
  if (stateFromStores != null) {
    const bot3 = stateFromStores.bot;
    if (bot3 != null) {
      id2 = bot3.id;
    }
  }
  cResult[9] = id2;
  let supported_platforms2;
  if (stateFromStores != null) {
    const embeddedActivityConfig3 = stateFromStores.embeddedActivityConfig;
    if (embeddedActivityConfig3 != null) {
      supported_platforms2 = embeddedActivityConfig3.supported_platforms;
    }
  }
  cResult[10] = supported_platforms2;
  cResult[11] = canLaunchActivityResult;
  tmp16 = canLaunchActivityResult;
}) : ((config) => {
  _require = config;
  const activityApplicationId = require("QuestTaskUtils").getActivityApplicationId(config);
  analyticsLocations = activityApplicationId(analyticsLocations[27])().analyticsLocations;
  let obj = require("QuestTaskUtils");
  const tmp = analyticsLocations;
  const tmp3 = activityApplicationId;
  let items = [ApplicationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ApplicationStore.getApplication(activityApplicationId));
  let obj2 = require("initialize");
  const canLaunchFrameResult = require("canLaunchFrame").canLaunchFrame(stateFromStores);
  noop = canLaunchFrameResult;
  const obj3 = require("canLaunchFrame");
  let canLaunchActivityResult = require("utils/QuestUtils").canLaunchActivity(config);
  if (canLaunchActivityResult) {
    let features = config.config.features;
    canLaunchActivityResult = features.includes(constants.MOBILE_ACTIVITY_QUEST);
  }
  if (canLaunchActivityResult) {
    let supported_platforms;
    if (stateFromStores != null) {
      const embeddedActivityConfig = stateFromStores.embeddedActivityConfig;
      if (embeddedActivityConfig != null) {
        supported_platforms = embeddedActivityConfig.supported_platforms;
      }
    }
    canLaunchActivityResult = tmp3(tmp[30])(supported_platforms);
    const tmp3Result = tmp3(tmp[30]);
  }
  if (canLaunchActivityResult) {
    let tmp11 = canLaunchFrameResult;
    if (!canLaunchFrameResult) {
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
  const effect = noop.useEffect(() => {
    let hasItem = null == stateFromStores;
    if (hasItem) {
      hasItem = null != activityApplicationId;
    }
    if (hasItem) {
      const features = config.config.features;
      hasItem = features.includes(constants.MOBILE_ACTIVITY_QUEST);
    }
    if (hasItem) {
      const items = [activityApplicationId];
      const applications = ApplicationActionCreatorsDefault.fetchApplications(items, false);
    }
  }, items1);
  const items2 = [canLaunchFrameResult, stateFromStores, canLaunchActivityResult, analyticsLocations];
  let obj4 = require("utils/QuestUtils");
  return {
    isMobileActivityQuest: canLaunchActivityResult,
    questApplication: stateFromStores,
    launchMobileActivity: noop.useCallback(stateFromStores(function*(arg0, value) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          v3 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (canLaunchActivityResult) {
              if (canLaunchFrameResult) {
                const obj5 = { applicationId: stateFromStores.id, surface, analyticsContext: null };
                const obj7 = { isStart: true, analyticsLocations };
                obj5.analyticsContext = obj7;
                v2 = 1;
                v3 = 1;
                const obj8 = { value: v2(9599).launchFrame(obj5), done: false };
                return obj8;
              } else {
                let id;
                if (stateFromStores != null) {
                  const bot = tmp6.bot;
                  if (bot != null) {
                    id = bot.id;
                  }
                }
                if (null != id) {
                  const obj9 = { appId: tmp6.id, botId: tmp6.bot.id, analyticsLocations: [] };
                  v2 = 2;
                  v3 = 1;
                  const obj10 = { value: v3(11677).launchActivityInBotDM(obj9), done: false };
                  return obj10;
                }
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj11 = { value, done: true };
              return obj11;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp16) {
          v3 = tmp;
          throw tmp16;
        }
      }
    }), items2)
  };
});
