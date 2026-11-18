// Module ID: 20210
// Function ID: 20211
// Name: ConjurePublishEvalManager
// Dependencies: [7882, 13164, 20211, 2]

// Module 20210 (ConjurePublishEvalManager)
import conjurePublishEval from "conjurePublishEval" /* 13164 */;
import conjurePublishEvalPlatformDefault from "conjurePublishEvalPlatform" /* 20211 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;
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
