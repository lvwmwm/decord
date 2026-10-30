// Module ID: 17121
// Function ID: 17122
// Name: useNoFillDecision
// Dependencies: [32, 19, 7836, 7839, 17122, 504, 9653, 2]
// Exports: default

// Module 17121 (useNoFillDecision)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7836 */;
import QuestStore from "QuestStore" /* 7839 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/quests/hooks/useNoFillDecision.tsx");

export default function useNoFillDecision(arg0, location) {
  let closure_0;
  let closure_2;
  let first;
  let stateFromStores;
  _require = arg0;
  const tmp = dependencyMap;
  const obj = stateFromStores(17122);
  const obj2 = { location };
  const enableNoFill = obj.useConfig(obj2).enableNoFill;
  const items = [AdDeliveryStore];
  const items1 = [arg0];
  const obj3 = require("get initialized");
  stateFromStores = obj3.useStateFromStores(items, () => AdDeliveryStore.getNoFillForPlacement(closure_0), items1);
  const items2 = [QuestStore];
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items2, () => null != QuestStore.questEnrollmentBlockedUntil);
  [first, dependencyMap] = react.useState(null);
  const items3 = [stateFromStores];
  const effect = react.useEffect(() => {
    let decisionId;
    if (null != stateFromStores) {
      const _Date = Date;
      const sum = tmp.fetchedAt + tmp.ttlMillis;
      const _setTimeout = setTimeout;
      const _Math = Math;
      const timeout = setTimeout(() => closure_1_2(decisionId.decisionId), Math.max(sum - Date.now(), 0));
      return () => clearTimeout(closure_0);
    }
  }, items3);
  let tmp8 = null;
  const tmp2 = _require;
  if (enableNoFill) {
    tmp8 = null;
    if (null != stateFromStores) {
      tmp8 = null;
      if (stateFromStores.decisionId !== first) {
        tmp8 = null;
        const tmp2Result = tmp2(9653);
        if (tmp2Result.getIsEligibleForQuests()) {
          tmp8 = null;
          if (!stateFromStores1) {
            tmp8 = stateFromStores;
          }
        }
      }
    }
  }
  return tmp8;
};
