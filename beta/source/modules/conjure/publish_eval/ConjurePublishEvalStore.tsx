// Module ID: 13165
// Function ID: 13166
// Name: ConjurePublishEvalStore
// Dependencies: [504, 572, 2]

// Module 13165 (ConjurePublishEvalStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let closure_1;

function handleProjectGone(projectId) {
  const pending = closure_1.pending;
  let projectId1;
  projectId = projectId.projectId;
  if (pending != null) {
    projectId1 = pending.projectId;
  }
  let flag = projectId1 === projectId;
  if (flag) {
    closure_1 = { pending: null };
    flag = true;
  }
  return flag;
}
const obj = { pending: null };
const PersistedStore = get_initializedDefault.PersistedStore;
class ConjurePublishEvalStore extends PersistedStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = obj;
    }
    closure_1 = tmp;
  }
  getState() {
    return closure_1;
  }
  getPending() {
    return closure_1.pending;
  }
}
const prototype = ConjurePublishEvalStore.prototype;
ConjurePublishEvalStore.displayName = "ConjurePublishEvalStore";
ConjurePublishEvalStore.persistKey = "ConjurePublishEval";
const obj2 = {
  CONJURE_PUBLISH_EVAL_PENDING: function handlePending(pending) {
    closure_1 = { pending: pending.pending };
    return true;
  },
  CONJURE_PUBLISH_EVAL_SUBMITTED: function handleSubmitted(publishTurnId) {
    const pending = closure_1.pending;
    let flag = null != pending;
    publishTurnId = publishTurnId.publishTurnId;
    if (flag) {
      flag = pending.projectId === tmp;
    }
    if (flag) {
      flag = pending.publishTurnId === publishTurnId;
    }
    if (flag) {
      closure_1 = { pending: null };
      flag = true;
    }
    return flag;
  },
  CONJURE_PROJECT_DELETE_SUCCESS: handleProjectGone,
  CONJURE_PUBLISH_EVAL_PROJECT_GONE: handleProjectGone
};
const conjurePublishEvalStore = new ConjurePublishEvalStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/conjure/publish_eval/ConjurePublishEvalStore.tsx");

export default conjurePublishEvalStore;
