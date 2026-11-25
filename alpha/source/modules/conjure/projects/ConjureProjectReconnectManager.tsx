// Module ID: 19623
// Function ID: 19624
// Name: ConjureProjectReconnectManager
// Dependencies: [6903, 7444, 6938, 7636, 2]

// Module 19623 (ConjureProjectReconnectManager)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6938 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7636 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7444 */;
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
