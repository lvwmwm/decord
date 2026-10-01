// Module ID: 16317
// Function ID: 16318
// Name: FeedbackOverrideStore
// Dependencies: [16316, 504, 573, 2]

// Module 16317 (FeedbackOverrideStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import feedback_FeedbackManager from "feedback/FeedbackManager" /* 16316 */;
import size from "module_2" /* 2 */;

const React2 = {};
const Store = get_initializedDefault.Store;
class HotspotStore extends Store {
  initialize() {

  }
  getFeedbackConfig(ACTIVITY) {
    return closure_2[ACTIVITY];
  }
}
const prototype = HotspotStore.prototype;
HotspotStore.displayName = "FeedbackOverrideStore";
HotspotStore.persistKey = "feedbackOverrides";
let obj = {
  FEEDBACK_OVERRIDE_SET: function handleSetFeedbackOverride(feedbackType) {
    let chance;
    let cooldown;
    feedbackType = feedbackType.feedbackType;
    const obj = { cooldown, chance };
    ({ cooldown, chance } = feedbackType);
    const merged = Object.assign(feedback_FeedbackManager.FeedbackConfig[feedbackType]);
    closure_2[feedbackType] = obj;
  },
  FEEDBACK_OVERRIDE_CLEAR: function handleClearFeedbackOverride(arg0) {
    delete closure_2[arg0.feedbackType];
  }
};
const hotspotStore = new HotspotStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/feedback/FeedbackOverrideStore.tsx");

export default hotspotStore;
