// Module ID: 16500
// Function ID: 16501
// Name: useQuestForPlacement
// Dependencies: [19, 8401, 8404, 16501, 9959, 504, 16502, 8402, 8411, 6565, 2]
// Exports: default, useAdDecisionForPlacement, useAdRefreshLoop, useDeliveredCreativeForPlacement

// Module 16500 (useQuestForPlacement)
import react from "react" /* 19 */;
import AdCreativeType from "AdCreativeType" /* 6565 */;
import QuestActionCreators from "QuestActionCreators" /* 9959 */;
import ReturnFullQuestStatusInDecisionExperiment from "ReturnFullQuestStatusInDecisionExperiment" /* 16501 */;
import useAdRefreshLoop2 from "useAdRefreshLoop" /* 16502 */;
import AdDeliveryStore from "AdDeliveryStore" /* 8401 */;
import QuestStore from "QuestStore" /* 8404 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function fetchQuestBarAd(MOBILE_HOME_DOCK_AREA, arg1) {
  const obj = ReturnFullQuestStatusInDecisionExperiment;
  const returnFullQuestStatusInDecision = obj.getReturnFullQuestStatusInDecision("quest-placement-refresh");
  if (!returnFullQuestStatusInDecision) {
    const tmpResult = QuestActionCreators;
    const currentQuests = tmpResult.fetchCurrentQuests();
  }
  const tmpResult2 = QuestActionCreators;
  const questToDeliver = tmpResult2.fetchQuestToDeliver(MOBILE_HOME_DOCK_AREA, arg1, returnFullQuestStatusInDecision);
}
const useMemo = react.useMemo;
const result = size.fileFinishedImporting("modules/quests/useQuestForPlacement.tsx");

export default function useFetchQuestForAdPlacement(arg0) {
  let closure_0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("useAdRefreshLoop");
  const obj2 = { fetch: fetchQuestBarAd, callerSource: "questBar" };
  const adRefreshLoop = obj.useAdRefreshLoop(arg0, obj2);
  _require = arg0;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let first = deliveredBounty.getAdDecisionsForPlacement(closure_0)[0];
    if (first == null) {
      first = null;
    }
    return first;
  }, items1);
  let creative;
  const getDeliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId;
  require("AdDecisionUtils");
  if (stateFromStores != null) {
    creative = stateFromStores.creative;
  }
  _require = getDeliveredQuestId(creative);
  const items2 = [QuestStore];
  const tmpResult = tmp(504);
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
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
  let tmp8 = null;
  if (null != stateFromStores1) {
    tmp8 = null;
    const tmpResult2 = tmp(8411);
    if (!tmpResult2.isQuestExpired(stateFromStores1)) {
      tmp8 = stateFromStores1;
    }
  }
  return tmp8;
};
export function useAdDecisionForPlacement(arg0) {
  let closure_0;
  _require = arg0;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let first = deliveredBounty.getAdDecisionsForPlacement(closure_0)[0];
    if (first == null) {
      first = null;
    }
    return first;
  }, items1);
}
export function useAdRefreshLoop(arg0) {
  const obj = useAdRefreshLoop2;
  const obj2 = { fetch: fetchQuestBarAd, callerSource: "questBar" };
  const adRefreshLoop = obj.useAdRefreshLoop(arg0, obj2);
}
export function useDeliveredCreativeForPlacement(MOBILE_HOME_DOCK_AREA, QUEST_BAR_MOBILE) {
  let deliveredBounty;
  let deliveredPlayable;
  let deliveredQuestId;
  _require = QUEST_BAR_MOBILE;
  const tmp = _require;
  let tmp2 = deliveredQuestId;
  let obj = require("get initialized");
  const items = [deliveredPlayable];
  const items1 = [QUEST_BAR_MOBILE];
  let stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuestPreviewOverride(QUEST_BAR_MOBILE), items1);
  _require = MOBILE_HOME_DOCK_AREA;
  let obj2 = require("get initialized");
  const items2 = [deliveredBounty];
  const items3 = [MOBILE_HOME_DOCK_AREA];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let first = deliveredBounty.getAdDecisionsForPlacement(closure_0)[0];
    if (first == null) {
      first = null;
    }
    return first;
  }, items3);
  let creative;
  const getDeliveredQuestId = require("AdDecisionUtils").getDeliveredQuestId;
  const tmp3 = deliveredPlayable;
  const tmp6 = require("AdDecisionUtils");
  if (stateFromStores1 != null) {
    creative = stateFromStores1.creative;
  }
  deliveredQuestId = getDeliveredQuestId(creative);
  const items4 = [tmp3];
  const items5 = [deliveredQuestId];
  const tmpResult = tmp(tmp2[5]);
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
    const tmpResult4 = tmp(tmp2[8]);
    if (!tmpResult4.isQuestExpired(stateFromStores2)) {
      tmp10 = stateFromStores2;
    }
  }
  if (stateFromStores == null) {
    stateFromStores = tmp10;
  }
  let creative1;
  const getDeliveredBounty = tmp(tmp2[7]).getDeliveredBounty;
  tmp(tmp2[7]);
  if (stateFromStores1 != null) {
    creative1 = stateFromStores1.creative;
  }
  deliveredBounty = getDeliveredBounty(creative1);
  let creative2;
  const getDeliveredPlayable = tmp(tmp2[7]).getDeliveredPlayable;
  tmp(tmp2[7]);
  if (stateFromStores1 != null) {
    creative2 = stateFromStores1.creative;
  }
  deliveredPlayable = getDeliveredPlayable(creative2);
  const items6 = [stateFromStores, deliveredBounty, deliveredPlayable];
  return stateFromStores(() => {
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
