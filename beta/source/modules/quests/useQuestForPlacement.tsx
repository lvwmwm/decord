// Module ID: 14635
// Function ID: 14636
// Name: useQuestForPlacement
// Dependencies: [19, 7117, 7120, 1103, 10671, 9786, 9765, 558, 576, 504, 14636, 7118, 7116, 2]

// Module 14635 (useQuestForPlacement)
import DurationsDefault from "Durations" /* 1103 */;
import QuestActionCreators from "QuestActionCreators" /* 9765 */;
import DiscordAppStateDefault from "DiscordAppState" /* 9786 */;
import QuestsEligibility from "QuestsEligibility" /* 10671 */;
import AdRecheckIntervalExperimentDefault from "AdRecheckIntervalExperiment" /* 14636 */;
import react from "react" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7117 */;
import QuestStore from "QuestStore" /* 7120 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c3;
let closure_4;
function maybeRefreshAd(fetchedAt, MOBILE_HOME_DOCK_AREA, arg2) {
  const obj = QuestsEligibility;
  let isEligibleForQuests = obj.getIsEligibleForQuests();
  if (isEligibleForQuests) {
    let tmp5 = null != fetchedAt;
    if (tmp5) {
      const _Date = Date;
      const sum = fetchedAt.fetchedAt + fetchedAt.ttlMillis;
      tmp5 = sum >= Date.now();
    }
    isEligibleForQuests = !tmp5;
  }
  if (isEligibleForQuests) {
    const obj2 = DiscordAppStateDefault;
    if ("active" === obj2.getState()) {
      const obj4 = AdDeliveryStore;
      if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(MOBILE_HOME_DOCK_AREA)) {
        if (obj4.canRefreshAd(MOBILE_HOME_DOCK_AREA)) {
          const tmpResult = QuestActionCreators;
          const currentQuests = tmpResult.fetchCurrentQuests();
          const tmpResult3 = QuestActionCreators;
          const questToDeliver = tmpResult3.fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, arg2);
        }
      }
    } else if (null != fetchedAt) {
      const tmpResult4 = QuestActionCreators;
      tmpResult4.clearQuestAdDecision(MOBILE_HOME_DOCK_AREA, fetchedAt.ttlMillis);
    }
  }
}
({ useEffect: c3, useRef: closure_4 } = react);
let closure_7 = 10 * DurationsDefault.Millis.MINUTE;
let closure_8 = 30 * DurationsDefault.Millis.SECOND;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AdDeliveryStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      let value = deliveryAdDecisionByPlacement.get(closure_0);
      if (value == null) {
        value = null;
      }
      return value;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    let value = deliveryAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items1);
});
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_2;
  let first;
  let ref;
  _require = arg0;
  let tmp = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(6);
  importDefault = closure_4(null);
  const tmp3 = closure_10(arg0);
  dependencyMap = tmp3;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useQuestForAdPlacement" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const obj3 = AdRecheckIntervalExperimentDefault;
  const enableFastAdRecheck = obj3.useConfig(first).enableFastAdRecheck;
  if (cResult[1] === enableFastAdRecheck) {
    if (cResult[2] === arg0) {
      let tmp5;
      let tmp6;
      if (cResult[3] === tmp3) {
        tmp5 = cResult[4];
        tmp6 = cResult[5];
      }
      enableFastAdRecheck(tmp5, tmp6);
    }
  }
  const fn = function h() {
    let current;
    let tmp = ref;
    if (null != ref.current) {
      let tmp2 = globalThis;
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    const tmp4 = enableFastAdRecheck ? closure_1_8 : closure_1_7;
    maybeRefreshAd(closure_2, current, "questBar-open");
    tmp.current = setInterval(() => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      let value = deliveryAdDecisionByPlacement.get(current);
      const tmp = maybeRefreshAd;
      const tmp2 = current;
      if (value == null) {
        value = null;
      }
      tmp(value, tmp2, "questBar-interval");
    }, tmp4);
    current = tmp.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  };
  const items = [tmp3, arg0, enableFastAdRecheck];
  cResult[1] = enableFastAdRecheck;
  cResult[2] = arg0;
  cResult[3] = tmp3;
  cResult[4] = fn;
  cResult[5] = items;
  tmp6 = items;
  tmp5 = fn;
}) : ((arg0) => {
  let closure_2;
  let ref;
  let closure_0 = arg0;
  importDefault = closure_4(null);
  let tmp = closure_10(arg0);
  dependencyMap = tmp;
  const obj = AdRecheckIntervalExperimentDefault;
  const enableFastAdRecheck = obj.useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items = [tmp, arg0, enableFastAdRecheck];
  let tmp2 = enableFastAdRecheck(() => {
    let current;
    let tmp = ref;
    if (null != ref.current) {
      let tmp2 = globalThis;
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    const tmp4 = enableFastAdRecheck ? closure_1_8 : closure_1_7;
    maybeRefreshAd(closure_2, current, "questBar-open");
    tmp.current = setInterval(() => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      let value = deliveryAdDecisionByPlacement.get(current);
      const tmp = maybeRefreshAd;
      const tmp2 = current;
      if (value == null) {
        value = null;
      }
      tmp(value, tmp2, "questBar-interval");
    }, tmp4);
    current = tmp.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items);
});
let closure_11 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp11;
  let tmp7;
  let tmp9;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(5);
  closure_11(arg0);
  const tmp5 = closure_10(arg0);
  let creative;
  if (tmp5 != null) {
    creative = tmp5.creative;
  }
  if (cResult[0] !== creative) {
    const tmpResult = tmp(7118);
    const deliveredQuestId = tmpResult.getDeliveredQuestId(creative);
    cResult[0] = creative;
    cResult[1] = deliveredQuestId;
    tmp7 = deliveredQuestId;
  } else {
    tmp7 = cResult[1];
  }
  _require = tmp7;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp7) {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_0) {
          tmp3 = closure_6;
          quests = closure_6.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
    cResult[3] = tmp7;
    cResult[4] = A;
    tmp11 = A;
  } else {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_0) {
          tmp3 = closure_6;
          quests = closure_6.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
  }
  const tmpResult2 = tmp(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp9, tmp11);
  let tmp13 = null;
  if (null != stateFromStores) {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_0) {
          tmp3 = closure_6;
          quests = closure_6.quests;
          value = quests.get(tmp);
          if (value == null) {
            value = null;
          }
          tmp2 = value;
        }
        return tmp2;
      }
    }
    tmp13 = null;
    if (!obj4.isQuestExpired(stateFromStores)) {
      class A {
        constructor() {
          tmp2 = null;
          if (null != closure_0) {
            tmp3 = closure_6;
            quests = closure_6.quests;
            value = quests.get(tmp);
            if (value == null) {
              value = null;
            }
            tmp2 = value;
          }
          return tmp2;
        }
      }
    }
  }
  return tmp13;
}) : ((arg0) => {
  let closure_0;
  const tmp = closure_11(arg0);
  let tmp2 = closure_10(arg0);
  let creative;
  const getDeliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId;
  require("AdDecisionUtils");
  if (tmp2 != null) {
    creative = tmp2.creative;
  }
  _require = getDeliveredQuestId(creative);
  const items = [QuestStore];
  const tmp3Result = require("get initialized");
  const stateFromStores = tmp3Result.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const quests = QuestStore.quests;
      let value = quests.get(tmp);
      if (value == null) {
        value = null;
      }
      tmp2 = value;
    }
    return tmp2;
  });
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = null;
    const tmp3Result2 = require("QuestDataUtils");
    if (!tmp3Result2.isQuestExpired(stateFromStores)) {
      tmp8 = stateFromStores;
    }
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default tmp5;
export const useAdDecisionForPlacement = tmp3;
export const useAdRefreshLoop = tmp4;
