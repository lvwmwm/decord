// Module ID: 10950
// Function ID: 10951
// Name: conjureUsageConnection
// Dependencies: [572, 2]

// Module 10950 (conjureUsageConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let obj = {
  spend_limit(state, projectId) {
    let tmp2;
    projectId = projectId.projectId;
    const obj = { type: "CONJURE_SPEND_LIMIT_SET", projectId, spendLimit: tmp2 };
    tmp2 = null;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if ("ok" !== state.state) {
      const obj3 = { state: null, spentUsd: null, limitUsd: null };
      ({ state: obj2.state, spent_usd: obj2.spentUsd, limit_usd: obj2.limitUsd } = state);
      tmp2 = obj3;
    }
    dispatch(obj);
  }
};
const result = size.fileFinishedImporting("modules/conjure/usage/conjureUsageConnection.tsx");

export const usageStepHandlers = obj;
