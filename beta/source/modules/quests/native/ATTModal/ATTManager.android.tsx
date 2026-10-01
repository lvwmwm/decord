// Module ID: 17098
// Function ID: 17099
// Name: ATTManager
// Dependencies: [6539, 7150, 1231, 2]

// Module 17098 (ATTManager)
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import AdUserActionCreators from "AdUserActionCreators" /* 7150 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
import size from "module_2" /* 2 */;

class ATTManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult._openATTPrePromptOrFlowTimeoutId = null;
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.onPostConnectionOpen };
    return applyArgumentsResult;
  }
  onPostConnectionOpen() {
    try {
      const obj = AdUserActionCreators;
      const adUser = obj.fetchAdUser("post_connection_open");
    } catch (tmp4) {
      const obj2 = SentryUtilsDefault;
      obj2.captureException(tmp4);
    }
  }
  _terminate() {
    const self = this;
    if (null != this._openATTPrePromptOrFlowTimeoutId) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self._openATTPrePromptOrFlowTimeoutId);
      self._openATTPrePromptOrFlowTimeoutId = null;
    }
  }
}
const prototype = ATTManager.prototype;
const aTTManager = new ATTManager();
const result = size.fileFinishedImporting("modules/quests/native/ATTModal/ATTManager.android.tsx");

export default aTTManager;
