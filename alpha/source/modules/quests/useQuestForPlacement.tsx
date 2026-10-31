// Module ID: 17082
// Function ID: 17083
// Name: useQuestForPlacement
// Dependencies: [19, 7843, 7846, 1089, 9673, 6872, 9682, 504, 7844, 7852, 6788, 2]
// Exports: default, useAdDecisionForPlacement, useAdRefreshLoop, useDeliveredCreativeForPlacement

// Module 17082 (useQuestForPlacement)
import DurationsDefault from "Durations" /* 1089 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6872 */;
import QuestsEligibility from "QuestsEligibility" /* 9673 */;
import QuestActionCreators from "QuestActionCreators" /* 9682 */;
import react from "react" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7843 */;
import QuestStore from "QuestStore" /* 7846 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
const f111359 = () => {
  const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
  let value = deliveryAdDecisionByPlacement.get(closure_0);
  if (value == null) {
    value = null;
  }
  return value;
};
function maybeRefreshAd(fetchedAt, QUEST_HOME_BANNER_DESKTOP, arg2) {
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
      if (!AdDeliveryStore.isFetchingAdToDeliverByPlacement(QUEST_HOME_BANNER_DESKTOP)) {
        if (obj4.canRefreshAd(QUEST_HOME_BANNER_DESKTOP)) {
          const tmpResult = QuestActionCreators;
          const currentQuests = tmpResult.fetchCurrentQuests();
          const tmpResult3 = QuestActionCreators;
          const questToDeliver = tmpResult3.fetchQuestToDeliver(QUEST_HOME_BANNER_DESKTOP, arg2);
        }
      }
    } else if (null != fetchedAt) {
      const tmpResult4 = QuestActionCreators;
      tmpResult4.clearQuestAdDecision(QUEST_HOME_BANNER_DESKTOP, fetchedAt.ttlMillis);
    }
  }
}
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
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, f111359, items1);
  const items2 = [stateFromStores, arg0];
  closure_3(() => {
    let current;
    let tmp = ref;
    if (null != ref.current) {
      let tmp2 = globalThis;
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
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
  const items3 = [AdDeliveryStore];
  const items4 = [arg0];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items3, f111359, items4);
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
    const tmpResult2 = tmp(tmp2[9]);
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
  return obj.useStateFromStores(items, f111359, items1);
}
export function useAdRefreshLoop(MOBILE_HOME_DOCK_AREA) {
  let stateFromStores;
  let closure_1 = closure_5(null);
  _require = MOBILE_HOME_DOCK_AREA;
  const items = [AdDeliveryStore];
  const items1 = [MOBILE_HOME_DOCK_AREA];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, f111359, items1);
  const items2 = [stateFromStores, MOBILE_HOME_DOCK_AREA];
  closure_3(() => {
    let current;
    let tmp = ref;
    if (null != ref.current) {
      let tmp2 = globalThis;
      let _clearInterval = clearInterval;
      clearInterval(tmp.current);
    }
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
  const stateFromStores1 = obj2.useStateFromStores(items2, f111359, items3);
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
  const tmpResult = tmp(tmp2[7]);
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
    const tmpResult4 = tmp(tmp2[9]);
    if (!tmpResult4.isQuestExpired(stateFromStores2)) {
      tmp10 = stateFromStores2;
    }
  }
  if (stateFromStores == null) {
    stateFromStores = tmp10;
  }
  let creative1;
  const getDeliveredBounty = tmp(tmp2[8]).getDeliveredBounty;
  tmp(tmp2[8]);
  if (stateFromStores1 != null) {
    creative1 = stateFromStores1.creative;
  }
  const deliveredBounty = getDeliveredBounty(creative1);
  let creative2;
  const getDeliveredPlayable = tmp(tmp2[8]).getDeliveredPlayable;
  tmp(tmp2[8]);
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
