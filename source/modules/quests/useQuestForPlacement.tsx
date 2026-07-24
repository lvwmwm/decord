// Module ID: 14064
// Function ID: 107571
// Name: maybeRefreshAd
// Dependencies: [31, 6941, 664, 10494, 9492, 9480, 6956, 566, 14065, 6939, 2]
// Exports: default

// Module 14064 (maybeRefreshAd)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_3;
let closure_4;
function maybeRefreshAd(fetchedAt, MOBILE_HOME_DOCK_AREA, callerSource) {
  let obj = require(10494) /* getIsEligibleForQuests */;
  let isEligibleForQuests = obj.getIsEligibleForQuests();
  if (isEligibleForQuests) {
    let tmp3 = null != fetchedAt;
    if (tmp3) {
      const _Date = Date;
      const sum = fetchedAt.fetchedAt + fetchedAt.ttlMillis;
      tmp3 = sum >= Date.now();
    }
    isEligibleForQuests = !tmp3;
  }
  if (isEligibleForQuests) {
    if ("active" === obj2.getState()) {
      if (!_isNativeReflectConstruct.isFetchingQuestToDeliverByPlacement(MOBILE_HOME_DOCK_AREA)) {
        let enableNewRequestBehavior = _isNativeReflectConstruct.canRefreshAd(MOBILE_HOME_DOCK_AREA);
        if (enableNewRequestBehavior) {
          obj = { location: "maybeRefreshAd" };
          enableNewRequestBehavior = importDefault(6956).getConfig(obj).enableNewRequestBehavior;
          const obj3 = importDefault(6956);
        }
        if (enableNewRequestBehavior) {
          const currentQuests = require(9480) /* _manuallyStartConsoleQuest */.fetchCurrentQuests();
          const obj5 = require(9480) /* _manuallyStartConsoleQuest */;
          const questToDeliver = require(9480) /* _manuallyStartConsoleQuest */.fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, callerSource);
          const obj6 = require(9480) /* _manuallyStartConsoleQuest */;
        }
      }
    } else if (null != fetchedAt) {
      require(9480) /* _manuallyStartConsoleQuest */.clearQuestAdDecision(MOBILE_HOME_DOCK_AREA, fetchedAt.ttlMillis);
      const obj7 = require(9480) /* _manuallyStartConsoleQuest */;
    }
    obj2 = importDefault(9492);
  }
}
({ useEffect: closure_3, useRef: closure_4 } = result);
let closure_6 = 10 * require("set").Millis.MINUTE;
let closure_7 = 30 * require("set").Millis.SECOND;
result = require("set").fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useQuestForAdPlacement(arg0) {
  const _require = arg0;
  const importDefault = callback(null);
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[7]).useStateFromStores(items, () => {
    const questAdDecisionByPlacement = outer1_5.questAdDecisionByPlacement;
    const value = questAdDecisionByPlacement.get(closure_0);
    let tmp2 = null;
    if (null != value) {
      tmp2 = value;
    }
    return tmp2;
  });
  const obj = _require(stateFromStores[7]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(stateFromStores[7]).useStateFromStores(items1, () => {
    let questId;
    if (null != stateFromStores) {
      questId = stateFromStores.questId;
    }
    let tmp3 = null;
    if (null != questId) {
      const quests = outer1_5.quests;
      const value = quests.get(stateFromStores.questId);
      tmp3 = null;
      if (null != value) {
        tmp3 = value;
      }
    }
    return tmp3;
  });
  const obj2 = _require(stateFromStores[7]);
  const enableFastAdRecheck = importDefault(stateFromStores[8]).useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items2 = [stateFromStores, arg0, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(ref.current);
    }
    outer1_8(stateFromStores, current, "questBar-open");
    ref.current = setInterval(() => {
      const questAdDecisionByPlacement = outer2_5.questAdDecisionByPlacement;
      const value = questAdDecisionByPlacement.get(current);
      let tmp3 = null;
      if (null != value) {
        tmp3 = value;
      }
      outer2_8(tmp3, current, "questBar-interval");
    }, enableFastAdRecheck ? outer1_7 : outer1_6);
    current = ref.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(current);
      }
    };
  }, items2);
  let tmp4 = null;
  if (null != stateFromStores1) {
    tmp4 = null;
    if (!obj4.isQuestExpired(stateFromStores1)) {
      tmp4 = stateFromStores1;
    }
    obj4 = _require(stateFromStores[9]);
  }
  return tmp4;
};
