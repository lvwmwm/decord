// Module ID: 14647
// Function ID: 14648
// Name: useQuestForPlacement
// Dependencies: [19, 7113, 7116, 1091, 10682, 10704, 10683, 504, 14648, 7114, 7112, 2]
// Exports: default, useAdDecisionForPlacement, useAdRefreshLoop

// Module 14647 (useQuestForPlacement)
import DurationsDefault from "Durations" /* 1091 */;
import QuestsEligibility from "QuestsEligibility" /* 10682 */;
import QuestActionCreators from "QuestActionCreators" /* 10683 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10704 */;
import react from "react" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7113 */;
import QuestStore from "QuestStore" /* 7116 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, quests;

let c3;
let closure_4;
const f100239 = () => {
  const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
  let value = deliveryAdDecisionByPlacement.get(closure_0);
  if (value == null) {
    value = null;
  }
  return value;
};
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
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useFetchQuestForAdPlacement(arg0) {
  let closure_0;
  let ref;
  let stateFromStores;
  importDefault = closure_4(null);
  _require = arg0;
  let tmp = _require;
  let tmp2 = stateFromStores;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, f100239, items1);
  const obj2 = require("AdRecheckIntervalExperiment");
  const enableFastAdRecheck = obj2.useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items2 = [stateFromStores, arg0, enableFastAdRecheck];
  let tmp4 = enableFastAdRecheck(() => {
    let current;
    let tmp = ref;
    if (null != ref.current) {
      let tmp2 = globalThis;
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    const tmp4 = enableFastAdRecheck ? closure_1_8 : closure_1_7;
    maybeRefreshAd(stateFromStores, current, "questBar-open");
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
  }, items2);
  _require = arg0;
  const items3 = [AdDeliveryStore];
  const items4 = [arg0];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items3, f100239, items4);
  let creative;
  const getDeliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId;
  require("AdDecisionUtils");
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  _require = getDeliveredQuestId(creative);
  const items5 = [QuestStore];
  const tmpResult = tmp(tmp2[7]);
  const stateFromStores2 = tmpResult.useStateFromStores(items5, () => {
    let tmp2 = null;
    if (null != closure_0) {
      quests = quests.quests;
      let value = quests.get(tmp);
      if (value == null) {
        value = null;
      }
      tmp2 = value;
    }
    return tmp2;
  });
  let tmp9 = null;
  if (null != stateFromStores2) {
    tmp9 = null;
    const tmpResult2 = tmp(tmp2[10]);
    if (!tmpResult2.isQuestExpired(stateFromStores2)) {
      tmp9 = stateFromStores2;
    }
  }
  return tmp9;
};
export const useAdDecisionForPlacement = function useAdDecisionForPlacement(MOBILE_HOME_DOCK_AREA) {
  _require = MOBILE_HOME_DOCK_AREA;
  const items = [AdDeliveryStore];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f100239, items1);
};
export const useAdRefreshLoop = function useAdRefreshLoop(MOBILE_HOME_DOCK_AREA) {
  let closure_1;
  let stateFromStores;
  importDefault = closure_4(null);
  _require = MOBILE_HOME_DOCK_AREA;
  const items = [AdDeliveryStore];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, f100239, items1);
  const obj2 = require("AdRecheckIntervalExperiment");
  const enableFastAdRecheck = obj2.useConfig({ location: "useQuestForAdPlacement" }).enableFastAdRecheck;
  const items2 = [stateFromStores, MOBILE_HOME_DOCK_AREA, enableFastAdRecheck];
  enableFastAdRecheck(() => {
    let current;
    let tmp = ref;
    if (null != ref.current) {
      let tmp2 = globalThis;
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    const tmp4 = enableFastAdRecheck ? closure_1_8 : closure_1_7;
    maybeRefreshAd(stateFromStores, current, "questBar-open");
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
  }, items2);
};
