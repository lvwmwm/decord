// Module ID: 19341
// Function ID: 19342
// Name: ConjureProjectReconnectManager
// Dependencies: [6502, 7364, 6538, 6814, 2]

// Module 19341 (ConjureProjectReconnectManager)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6538 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6814 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7364 */;
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
