// Module ID: 19741
// Function ID: 19742
// Name: ConjureProjectReconnectManager
// Dependencies: [6982, 7426, 7017, 11060, 2]

// Module 19741 (ConjureProjectReconnectManager)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 7017 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11060 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6982 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7426 */;
import size from "module_2" /* 2 */;

function handlePostConnectionOpen() {
  let result = ConjureProjectStore.isReconnectListPending();
  if (result) {
    const obj = ConjureGuildExperiment;
    result = obj.hasConjureGuildWithoutExposure("ConjureProjectReconnectManager");
  }
  if (result) {
    const obj2 = ConjureActionCreators;
    const result1 = obj2.refetchProjectsAfterReconnect();
  }
}
class ConjureProjectReconnectManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { POST_CONNECTION_OPEN: handlePostConnectionOpen };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const conjureProjectReconnectManager = new ConjureProjectReconnectManager();
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureProjectReconnectManager.tsx");

export default conjureProjectReconnectManager;
