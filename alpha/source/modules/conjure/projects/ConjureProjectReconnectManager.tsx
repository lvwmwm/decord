// Module ID: 20050
// Function ID: 20051
// Name: ConjureProjectReconnectManager
// Dependencies: [6954, 7816, 6990, 7265, 2]

// Module 20050 (ConjureProjectReconnectManager)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6990 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7265 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;
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
