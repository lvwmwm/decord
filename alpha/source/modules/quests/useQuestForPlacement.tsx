// Module ID: 17721
// Function ID: 17722
// Name: useQuestForPlacement
// Dependencies: [19, 8805, 8808, 1089, 10132, 8806, 7047, 10133, 17722, 504, 8815, 5345, 2]
// Exports: default, useAdDecisionForPlacement, useAdRefreshLoop, useDeliveredCreativeForPlacement

// Module 17721 (useQuestForPlacement)
import DurationsDefault from "Durations" /* 1089 */;
import AdCreativeType from "AdCreativeType" /* 5345 */;
import react from "react" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 8805 */;
import QuestStore from "QuestStore" /* 8808 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
const f115954 = () => {
  let first = adDecisionsForPlacement.getAdDecisionsForPlacement(closure_0)[0];
  if (first == null) {
    first = null;
  }
  return first;
};
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);
let closure_8 = 30 * DurationsDefault.Millis.SECOND;
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useFetchQuestForAdPlacement(arg0) {
  let closure_0;
  let stateFromStores;
  const ref = closure_5(null);
  _require = arg0;
  let tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("get initialized");
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, f115954, items1);
  const items2 = [stateFromStores, arg0];
  const tmp4 = closure_3(() => {
    let current;
    const tmp = ref;
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    const obj = current(stateFromStores[4]);
    if (obj.getIsEligibleForQuests()) {
      const tmp6Result = current(stateFromStores[5]);
      if (!tmp6Result.isAdDecisionValid(stateFromStores)) {
        const obj3 = ref(stateFromStores[6]);
        if ("active" === obj3.getState()) {
          let obj4 = AdDeliveryStore;
          if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(current)) {
            if (obj4.canRefreshAd(current)) {
              const tmp6Result5 = current(stateFromStores[8]);
              let returnFullQuestStatusInDecision = tmp6Result5.getReturnFullQuestStatusInDecision("quest-placement-refresh");
              if (!returnFullQuestStatusInDecision) {
                const tmp6Result6 = current(stateFromStores[7]);
                let currentQuests = tmp6Result6.fetchCurrentQuests();
              }
              const tmp6Result7 = current(stateFromStores[7]);
              let questToDeliver = tmp6Result7.fetchQuestToDeliver(tmp5, "questBar-open", returnFullQuestStatusInDecision);
            }
          }
        } else if (null != stateFromStores) {
          const tmp6Result8 = current(stateFromStores[7]);
          tmp6Result8.clearQuestAdDecision(current, stateFromStores.ttlMillis);
        }
      }
    }
    tmp.current = setInterval(() => {
      let first = AdDeliveryStore.getAdDecisionsForPlacement(current)[0];
      if (first == null) {
        first = null;
      }
      const obj2 = current(stateFromStores[4]);
      if (obj2.getIsEligibleForQuests()) {
        const tmp3Result = current(stateFromStores[5]);
        if (!tmp3Result.isAdDecisionValid(first)) {
          const obj4 = ref(stateFromStores[6]);
          if ("active" === obj4.getState()) {
            if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(current)) {
              if (AdDeliveryStore.canRefreshAd(current)) {
                const tmp3Result5 = current(stateFromStores[8]);
                const returnFullQuestStatusInDecision = tmp3Result5.getReturnFullQuestStatusInDecision("quest-placement-refresh");
                if (!returnFullQuestStatusInDecision) {
                  const tmp3Result6 = current(stateFromStores[7]);
                  const currentQuests = tmp3Result6.fetchCurrentQuests();
                }
                const tmp3Result7 = current(stateFromStores[7]);
                const questToDeliver = tmp3Result7.fetchQuestToDeliver(tmp, "questBar-interval", returnFullQuestStatusInDecision);
              }
            }
          } else if (null != first) {
            const tmp3Result8 = current(stateFromStores[7]);
            tmp3Result8.clearQuestAdDecision(current, first.ttlMillis);
          }
        }
      }
    }, closure_1_8);
    current = tmp.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
  _require = arg0;
  let obj2 = require("get initialized");
  const items3 = [AdDeliveryStore];
  const items4 = [arg0];
  const stateFromStores1 = obj2.useStateFromStores(items3, f115954, items4);
  let creative;
  const getDeliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId;
  const tmp6 = require("AdDecisionUtils");
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  _require = getDeliveredQuestId(creative);
  const items5 = [QuestStore];
  const tmpResult = tmp(tmp2[9]);
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
export function useAdDecisionForPlacement(arg0) {
  let closure_0;
  _require = arg0;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f115954, items1);
}
export function useAdRefreshLoop(MOBILE_HOME_DOCK_AREA) {
  let stateFromStores;
  let closure_1 = closure_5(null);
  _require = MOBILE_HOME_DOCK_AREA;
  const items = [AdDeliveryStore];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, f115954, items1);
  const items2 = [stateFromStores, MOBILE_HOME_DOCK_AREA];
  closure_3(() => {
    let current;
    const tmp = ref;
    if (null != ref.current) {
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
    const obj = current(stateFromStores[4]);
    if (obj.getIsEligibleForQuests()) {
      const tmp6Result = current(stateFromStores[5]);
      if (!tmp6Result.isAdDecisionValid(stateFromStores)) {
        const obj3 = ref(stateFromStores[6]);
        if ("active" === obj3.getState()) {
          let obj4 = AdDeliveryStore;
          if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(current)) {
            if (obj4.canRefreshAd(current)) {
              const tmp6Result5 = current(stateFromStores[8]);
              let returnFullQuestStatusInDecision = tmp6Result5.getReturnFullQuestStatusInDecision("quest-placement-refresh");
              if (!returnFullQuestStatusInDecision) {
                const tmp6Result6 = current(stateFromStores[7]);
                let currentQuests = tmp6Result6.fetchCurrentQuests();
              }
              const tmp6Result7 = current(stateFromStores[7]);
              let questToDeliver = tmp6Result7.fetchQuestToDeliver(tmp5, "questBar-open", returnFullQuestStatusInDecision);
            }
          }
        } else if (null != stateFromStores) {
          const tmp6Result8 = current(stateFromStores[7]);
          tmp6Result8.clearQuestAdDecision(current, stateFromStores.ttlMillis);
        }
      }
    }
    tmp.current = setInterval(() => {
      let first = AdDeliveryStore.getAdDecisionsForPlacement(current)[0];
      if (first == null) {
        first = null;
      }
      const obj2 = current(stateFromStores[4]);
      if (obj2.getIsEligibleForQuests()) {
        const tmp3Result = current(stateFromStores[5]);
        if (!tmp3Result.isAdDecisionValid(first)) {
          const obj4 = ref(stateFromStores[6]);
          if ("active" === obj4.getState()) {
            if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(current)) {
              if (AdDeliveryStore.canRefreshAd(current)) {
                const tmp3Result5 = current(stateFromStores[8]);
                const returnFullQuestStatusInDecision = tmp3Result5.getReturnFullQuestStatusInDecision("quest-placement-refresh");
                if (!returnFullQuestStatusInDecision) {
                  const tmp3Result6 = current(stateFromStores[7]);
                  const currentQuests = tmp3Result6.fetchCurrentQuests();
                }
                const tmp3Result7 = current(stateFromStores[7]);
                const questToDeliver = tmp3Result7.fetchQuestToDeliver(tmp, "questBar-interval", returnFullQuestStatusInDecision);
              }
            }
          } else if (null != first) {
            const tmp3Result8 = current(stateFromStores[7]);
            tmp3Result8.clearQuestAdDecision(current, first.ttlMillis);
          }
        }
      }
    }, closure_1_8);
    current = tmp.current;
    return () => {
      if (null != current) {
        const _clearInterval = clearInterval;
        clearInterval(tmp);
      }
    };
  }, items2);
}
export function useDeliveredCreativeForPlacement(MOBILE_HOME_DOCK_AREA, QUEST_BAR_MOBILE) {
  let adDecisionsForPlacement;
  let stateFromStores;
  _require = QUEST_BAR_MOBILE;
  const tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("get initialized");
  const items = [QuestStore];
  const items1 = [QUEST_BAR_MOBILE];
  stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuestPreviewOverride(QUEST_BAR_MOBILE), items1);
  _require = MOBILE_HOME_DOCK_AREA;
  let obj2 = require("get initialized");
  const items2 = [AdDeliveryStore];
  const items3 = [MOBILE_HOME_DOCK_AREA];
  const stateFromStores1 = obj2.useStateFromStores(items2, f115954, items3);
  let creative;
  const getDeliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId;
  const tmp3 = QuestStore;
  const tmp6 = require("AdDecisionUtils");
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  const deliveredQuestId = getDeliveredQuestId(creative);
  const items4 = [tmp3];
  const items5 = [deliveredQuestId];
  const tmpResult = tmp(tmp2[9]);
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
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
  }, items5);
  let tmp10 = null;
  if (null != stateFromStores2) {
    tmp10 = null;
    const tmpResult4 = tmp(tmp2[10]);
    if (!tmpResult4.isQuestExpired(stateFromStores2)) {
      tmp10 = stateFromStores2;
    }
  }
  if (stateFromStores == null) {
    stateFromStores = tmp10;
  }
  let creative1;
  const getDeliveredBounty = tmp(tmp2[5]).getDeliveredBounty;
  tmp(tmp2[5]);
  if (stateFromStores1 != null) {
    creative1 = stateFromStores1.creative;
  }
  const deliveredBounty = getDeliveredBounty(creative1);
  let creative2;
  const getDeliveredPlayable = tmp(tmp2[5]).getDeliveredPlayable;
  tmp(tmp2[5]);
  if (stateFromStores1 != null) {
    creative2 = stateFromStores1.creative;
  }
  const deliveredPlayable = getDeliveredPlayable(creative2);
  const items6 = [stateFromStores, deliveredBounty, deliveredPlayable];
  return deliveredPlayable(() => {
    let obj;
    if (null != stateFromStores) {
      obj = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
      const obj2 = { type: AdCreativeType.AdCreativeType.QUEST, quest: tmp };
    } else if (null != deliveredBounty) {
      obj = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp11 };
      const obj3 = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: tmp11 };
    } else if (null != deliveredPlayable) {
      obj = { type: AdCreativeType.AdCreativeType.PLAYABLE, playable: tmp2 };
      const obj4 = { type: AdCreativeType.AdCreativeType.PLAYABLE, playable: tmp2 };
    } else {
      obj = { type: AdCreativeType.AdCreativeType.NO_FILL };
    }
    return obj;
  }, items6);
}
