// Module ID: 11332
// Function ID: 11333
// Name: ConjurePublishEvalCooldownStore
// Dependencies: [504, 572, 2]

// Module 11332 (ConjurePublishEvalCooldownStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let obj = { submittedAt: {} };
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class ConjurePublishEvalCooldownStore extends DeviceSettingsStore {
  initialize(submittedAt) {
    submittedAt = undefined;
    if (submittedAt != null) {
      submittedAt = submittedAt.submittedAt;
    }
    if (submittedAt == null) {
      submittedAt = {};
    }
  }
  getSubmittedAt(id1, projectId) {
    let tmp = obj.submittedAt["" + id1 + ":" + projectId];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getUserAgnosticState() {
    return obj;
  }
}
const prototype = ConjurePublishEvalCooldownStore.prototype;
ConjurePublishEvalCooldownStore.displayName = "ConjurePublishEvalCooldownStore";
ConjurePublishEvalCooldownStore.persistKey = "ConjurePublishEvalCooldown";
obj = {
  CONJURE_PUBLISH_EVAL_SUBMITTED: function handleSubmitted(stored) {
    let obj2;
    let flag = stored.stored;
    if (flag) {
      obj = { submittedAt: obj2 };
      obj2 = {};
      const merged = Object.assign(obj.submittedAt);
      const _HermesInternal = HermesInternal;
      const _Date = Date;
      const combined = "" + tmp + ":" + tmp2;
      obj2[combined] = Date.now();
      flag = true;
    }
    return flag;
  }
};
const conjurePublishEvalCooldownStore = new ConjurePublishEvalCooldownStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conjure/publish_eval/ConjurePublishEvalCooldownStore.tsx");

export default conjurePublishEvalCooldownStore;
