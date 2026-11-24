// Module ID: 16536
// Function ID: 16537
// Name: useAdRefreshLoop
// Dependencies: [19, 8221, 6745, 9752, 8222, 6836, 9783, 16537, 6748, 504, 2]
// Exports: useAdRefreshLoop

// Module 16536 (useAdRefreshLoop)
import react from "react" /* 19 */;
import QuestConstants from "QuestConstants" /* 6745 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6836 */;
import QuestsEligibility from "QuestsEligibility" /* 9752 */;
import AdDeliveryActionCreators from "AdDeliveryActionCreators" /* 9783 */;
import AdDeliveryStore from "AdDeliveryStore" /* 8221 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function maybeRefreshAd(arr, QUEST_HOME_BANNER_DESKTOP, fn, arg3, refetchOnFocus) {
  const f110156 = (item) => {
    const obj = require("AdDecisionUtils");
    return obj.isAdDecisionValid(item);
  };
  let obj = QuestsEligibility;
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  let tmp5 = !isEligibleForQuests;
  if (isEligibleForQuests) {
    tmp5 = arr.length > 0 && arr.every(f110156);
    arr.length > 0 && arr.every(f110156);
  }
  if (!tmp5) {
    const obj2 = DiscordAppStateDefault;
    if ("active" === obj2.getState()) {
      const result = AdDeliveryStore.isFetchingAdToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP);
      const tmp10 = !result && AdDeliveryStore.canRefreshAd(QUEST_HOME_BANNER_DESKTOP);
      if (tmp10) {
        fn(QUEST_HOME_BANNER_DESKTOP, arg3);
      }
    } else if (arr.length > 0) {
      const _Math = Math;
      const clearQuestAdDecision = tmp2(9783).clearQuestAdDecision;
      const items = [];
      AdDeliveryActionCreators;
      HermesBuiltin.arraySpread(items, arr.map((ttlMillis) => ttlMillis.ttlMillis), 0);
      const _Math2 = Math;
      clearQuestAdDecision(QUEST_HOME_BANNER_DESKTOP, HermesBuiltin.apply(min, items, Math), refetchOnFocus);
    }
  }
}
const useEffect = react.useEffect;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
let result = size.fileFinishedImporting("modules/ads/useAdRefreshLoop.tsx");

export function useAdRefreshLoop(arg0, fetch) {
  let QUESTS_BAR_MOBILE;
  let closure_0;
  _require = arg0;
  const _fetch = fetch.fetch;
  const callerSource = fetch.callerSource;
  let enabled;
  let stateFromStores;
  let tmp2 = callerSource;
  const tmp = _require;
  const AdRefreshImmediateOnFocusExperiment = require("AdRefreshImmediateOnFocusExperiment").AdRefreshImmediateOnFocusExperiment;
  const useConfig = AdRefreshImmediateOnFocusExperiment.useConfig;
  if (arg0 === require("QuestTypes").AdPlacement.QUEST_HOME_BANNER_DESKTOP) {
    QUESTS_BAR_MOBILE = QuestsExperimentLocations.QUEST_HOME_HERO;
  } else {
    QUESTS_BAR_MOBILE = QuestsExperimentLocations.QUESTS_BAR_MOBILE;
  }
  const tmp5 = null != arg0 && null == enabled;
  if (enabled == null) {
    enabled = useConfig({ location: QUESTS_BAR_MOBILE }, { autoTrackExposure: tmp5 }).enabled;
  }
  let state = null;
  const obj = _fetch(tmp2[5]);
  if (enabled) {
    state = obj.useState();
  }
  const items = [stateFromStores];
  const items1 = [arg0];
  const tmpResult = tmp(tmp2[9]);
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    let adDecisionsForPlacement = null;
    if (null != closure_0) {
      adDecisionsForPlacement = AdDeliveryStore.getAdDecisionsForPlacement(tmp);
    }
    return adDecisionsForPlacement;
  }, items1);
  const items2 = [stateFromStores, arg0, _fetch, callerSource, state, enabled];
  enabled(() => {
    let interval;
    if (null != interval) {
      const tmp2 = stateFromStores;
      if (null != stateFromStores) {
        const _HermesInternal = HermesInternal;
        maybeRefreshAd(tmp2, interval, _fetch, "" + callerSource + "-open", enabled);
        const _setInterval = setInterval;
        interval = setInterval(() => {
          const adDecisionsForPlacement = stateFromStores.getAdDecisionsForPlacement(closure_0);
          maybeRefreshAd(adDecisionsForPlacement, closure_0, _fetch, "" + callerSource + "-interval", enabled);
        }, 30000);
        return () => clearInterval(closure_0);
      }
    }
  }, items2);
}
