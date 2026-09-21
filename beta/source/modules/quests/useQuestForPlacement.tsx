// Module ID: 15372
// Function ID: 15373
// Name: useQuestForPlacement
// Dependencies: [19, 7941, 7944, 1095, 11608, 10585, 10564, 558, 568, 504, 15373, 7942, 7940, 2]

// Module 15372 (useQuestForPlacement)
import DurationsDefault from "Durations" /* 1095 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10585 */;
import QuestsEligibility from "QuestsEligibility" /* 11608 */;
import AdRecheckIntervalExperimentDefault from "AdRecheckIntervalExperiment" /* 15373 */;
import noop from "module_19" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7941 */;
import QuestStore from "QuestStore" /* 7944 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function maybeRefreshAd(fetchedAt, MOBILE_HOME_DOCK_AREA, arg2) {
  let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
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
    if ("active" === obj2.getState()) {
      if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(MOBILE_HOME_DOCK_AREA)) {
        if (obj4.canRefreshAd(MOBILE_HOME_DOCK_AREA)) {
          const currentQuests = tmp(10564).fetchCurrentQuests();
          const tmpResult = tmp(10564);
          const questToDeliver = tmp(10564).fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, arg2);
          const tmpResult3 = tmp(10564);
        }
      }
      obj4 = AdDeliveryStore;
    } else if (null != fetchedAt) {
      tmp(10564).clearQuestAdDecision(MOBILE_HOME_DOCK_AREA, fetchedAt.ttlMillis);
      const tmpResult4 = tmp(10564);
    }
    obj2 = DiscordAppStateDefault;
  }
}
({ useEffect: c3, useRef: closure_4 } = noop);
let closure_7 = 10 * DurationsDefault.Millis.MINUTE;
let closure_8 = 30 * DurationsDefault.Millis.SECOND;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AdDeliveryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(closure_0);
      if (value == null) {
        value = null;
      }
      return value;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    value = deliveryAdDecisionByPlacement.get(closure_0);
    if (value == null) {
      value = null;
    }
    return value;
  }, items1);
});
let closure_10 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(6);
  importDefault = closure_4(null);
  const tmp3 = closure_10(arg0);
  dependencyMap = tmp3;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useQuestForAdPlacement" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const obj = require("c");
  const enableFastAdRecheck = AdRecheckIntervalExperimentDefault.useConfig(first).enableFastAdRecheck;
  if (cResult[1] === enableFastAdRecheck) {
    if (cResult[2] === arg0) {
      if (cResult[3] === tmp3) {
        let tmp5 = cResult[4];
        let tmp6 = cResult[5];
      }
      enableFastAdRecheck(tmp5, tmp6);
    }
  }
  const fn = function h() {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    maybeRefreshAd(closure_2, current, "questBar-open");
    ref.current = setInterval(() => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(current);
      if (value == null) {
        value = null;
      }
      maybeRefreshAd(value, current, "questBar-interval");
    }, enableFastAdRecheck ? closure_1_8 : closure_1_7);
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
  closure_0 = arg0;
  importDefault = closure_4(null);
  const tmp = closure_10(arg0);
  dependencyMap = tmp;
  const enableFastAdRecheck = AdRecheckIntervalExperimentDefault.useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items = [tmp, arg0, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    maybeRefreshAd(closure_2, current, "questBar-open");
    ref.current = setInterval(() => {
      const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
      value = deliveryAdDecisionByPlacement.get(current);
      if (value == null) {
        value = null;
      }
      maybeRefreshAd(value, current, "questBar-interval");
    }, enableFastAdRecheck ? closure_1_8 : closure_1_7);
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
let ReactCompilerGating = ReactCompilerGating_mod;
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(5);
  closure_11(arg0);
  const tmp5 = closure_10(arg0);
  let creative;
  if (tmp5 != null) {
    creative = tmp5.creative;
  }
  if (cResult[0] !== creative) {
    const deliveredQuestId = tmp(7942).getDeliveredQuestId(creative);
    cResult[0] = creative;
    cResult[1] = deliveredQuestId;
    let tmp7 = deliveredQuestId;
    const tmpResult = tmp(7942);
  } else {
    tmp7 = cResult[1];
  }
  _require = tmp7;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[2] = items;
    let tmp9 = items;
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
    const tmp11 = A;
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
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp11);
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
  closure_11(arg0);
  let tmp2 = closure_10(arg0);
  let creative;
  if (tmp2 != null) {
    creative = tmp2.creative;
  }
  _require = require("AdDecisionUtils").getDeliveredQuestId(creative);
  const obj = require("AdDecisionUtils");
  const items = [QuestStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
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
  });
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (!tmp3Result2.isQuestExpired(stateFromStores)) {
      tmp7 = stateFromStores;
    }
    tmp3Result2 = tmp3(7940);
  }
  return tmp7;
});
export const useAdDecisionForPlacement = tmp3;
export const useAdRefreshLoop = tmp4;
