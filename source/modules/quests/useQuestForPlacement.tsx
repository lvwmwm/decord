// Module ID: 13890
// Function ID: 105020
// Name: maybeRefreshAd
// Dependencies: []
// Exports: default

// Module 13890 (maybeRefreshAd)
function maybeRefreshAd(fetchedAt, MOBILE_HOME_DOCK_AREA, callerSource) {
  let obj = require(dependencyMap[3]);
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
      if (!closure_5.isFetchingQuestToDeliverByPlacement(MOBILE_HOME_DOCK_AREA)) {
        let enableNewRequestBehavior = closure_5.canRefreshAd(MOBILE_HOME_DOCK_AREA);
        if (enableNewRequestBehavior) {
          obj = { location: "maybeRefreshAd" };
          enableNewRequestBehavior = importDefault(dependencyMap[6]).getConfig(obj).enableNewRequestBehavior;
          const obj3 = importDefault(dependencyMap[6]);
        }
        if (enableNewRequestBehavior) {
          const currentQuests = require(dependencyMap[5]).fetchCurrentQuests();
          const obj5 = require(dependencyMap[5]);
          const questToDeliver = require(dependencyMap[5]).fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, callerSource);
          const obj6 = require(dependencyMap[5]);
        }
      }
    } else if (null != fetchedAt) {
      require(dependencyMap[5]).clearQuestAdDecision(MOBILE_HOME_DOCK_AREA, fetchedAt.ttlMillis);
      const obj7 = require(dependencyMap[5]);
    }
    const obj2 = importDefault(dependencyMap[4]);
  }
}
const _module = require(dependencyMap[0]);
({ useEffect: closure_3, useRef: closure_4 } = _module);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = 10 * importDefault(dependencyMap[2]).Millis.MINUTE;
let closure_7 = 30 * importDefault(dependencyMap[2]).Millis.SECOND;
const _module1 = require(dependencyMap[10]);
const result = _module1.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useQuestForAdPlacement(arg0) {
  const require = arg0;
  const importDefault = callback(null);
  const items = [closure_5];
  const stateFromStores = require(dependencyMap[7]).useStateFromStores(items, () => {
    const questAdDecisionByPlacement = closure_5.questAdDecisionByPlacement;
    const value = questAdDecisionByPlacement.get(arg0);
    let tmp2 = null;
    if (null != value) {
      tmp2 = value;
    }
    return tmp2;
  });
  const dependencyMap = stateFromStores;
  const obj = require(dependencyMap[7]);
  const items1 = [closure_5];
  const stateFromStores1 = require(dependencyMap[7]).useStateFromStores(items1, () => {
    let questId;
    if (null != stateFromStores) {
      questId = stateFromStores.questId;
    }
    let tmp3 = null;
    if (null != questId) {
      const quests = closure_5.quests;
      const value = quests.get(stateFromStores.questId);
      tmp3 = null;
      if (null != value) {
        tmp3 = value;
      }
    }
    return tmp3;
  });
  const obj2 = require(dependencyMap[7]);
  const enableFastAdRecheck = importDefault(dependencyMap[8]).useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items2 = [stateFromStores, arg0, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    if (null != ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
    }
    callback(stateFromStores, arg0, "questBar-open");
    ref.current = setInterval(() => {
      const questAdDecisionByPlacement = obj.questAdDecisionByPlacement;
      const value = questAdDecisionByPlacement.get(current);
      let tmp3 = null;
      if (null != value) {
        tmp3 = value;
      }
      closure_8(tmp3, current, "questBar-interval");
    }, enableFastAdRecheck ? closure_7 : closure_6);
    const arg0 = ref.current;
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
    const obj4 = require(dependencyMap[9]);
  }
  return tmp4;
};
