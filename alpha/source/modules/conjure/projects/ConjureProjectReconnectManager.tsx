// Module ID: 19706
// Function ID: 19707
// Name: ConjureProjectReconnectManager
// Dependencies: [6979, 7423, 7014, 11054, 2]

// Module 19706 (ConjureProjectReconnectManager)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 7014 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11054 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7423 */;
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
