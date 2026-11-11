// Module ID: 14149
// Function ID: 14150
// Name: CheckpointSessionAnalyticsManager
// Dependencies: [14150, 1266, 2]

// Module 14149 (CheckpointSessionAnalyticsManager)
import v1 from "v1" /* 1266 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;
import size from "module_2" /* 2 */;

class CheckpointSessionAnalyticsManager {
  constructor() {
    return Object.assign({ sessionId: null, didPlayerShareDataWithDiscord: false, stepName: null });
  }
  initialize(didPlayerShareDataWithDiscord) {
    const obj = v1;
    this.sessionId = obj.v4();
    this.didPlayerShareDataWithDiscord = didPlayerShareDataWithDiscord;
    this.stepName = null;
  }
  setStepName(stepName) {
    this.stepName = stepName;
  }
  getStepName() {
    return this.stepName;
  }
  getAnalyticsProperties() {
    let didPlayerShareDataWithDiscord;
    const obj = { checkpoint_session_id: this.sessionId, has_personalized_data: didPlayerShareDataWithDiscord };
    didPlayerShareDataWithDiscord = this.didPlayerShareDataWithDiscord && null != CheckpointStore.stats;
    return obj;
  }
}
const prototype = CheckpointSessionAnalyticsManager.prototype;
const prototype2 = CheckpointSessionAnalyticsManager.prototype;
const result = size.fileFinishedImporting("modules/checkpoint/tracking/CheckpointSessionAnalyticsManager.tsx");

export default Object.assign({ sessionId: null, didPlayerShareDataWithDiscord: false, stepName: null });
