// Module ID: 19526
// Function ID: 19527
// Name: ConjurePublishEvalManager
// Dependencies: [7395, 18308, 19527, 2]

// Module 19526 (ConjurePublishEvalManager)
import conjurePublishEval from "conjurePublishEval" /* 18308 */;
import conjurePublishEvalPlatformDefault from "conjurePublishEvalPlatform" /* 19527 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;
import size from "module_2" /* 2 */;

function blockingProjectId() {
  const obj = conjurePublishEval;
  const pendingConjurePublishEval = obj.getPendingConjurePublishEval();
  let projectId;
  if (pendingConjurePublishEval != null) {
    projectId = pendingConjurePublishEval.projectId;
  }
  if (projectId == null) {
    projectId = null;
  }
  return projectId;
}
function watchNavigation() {
  const obj = conjurePublishEvalPlatformDefault;
  obj.watchNavigation(blockingProjectId);
}
function handlePostConnectionOpen() {
  const obj = conjurePublishEval;
  const pendingConjurePublishEval = obj.getPendingConjurePublishEval();
  let projectId;
  if (pendingConjurePublishEval != null) {
    projectId = pendingConjurePublishEval.projectId;
  }
  if (projectId == null) {
    projectId = null;
  }
  if (null != projectId) {
    const obj2 = conjurePublishEvalPlatformDefault;
    obj2.watchNavigation(blockingProjectId);
    const obj3 = conjurePublishEvalPlatformDefault;
    obj3.openProject(projectId);
  }
}
class ConjurePublishEvalManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { POST_CONNECTION_OPEN: handlePostConnectionOpen, CONJURE_PUBLISH_EVAL_PENDING: watchNavigation };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const conjurePublishEvalManager = new ConjurePublishEvalManager();
const result = size.fileFinishedImporting("modules/conjure/publish_eval/ConjurePublishEvalManager.tsx");

export default conjurePublishEvalManager;
