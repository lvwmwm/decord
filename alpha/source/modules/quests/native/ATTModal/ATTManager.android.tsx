// Module ID: 17994
// Function ID: 17995
// Name: ATTManager
// Dependencies: [6807, 7419, 1255, 2]

// Module 17994 (ATTManager)
import SentryUtilsDefault from "SentryUtils" /* 1255 */;
import AdUserActionCreators from "AdUserActionCreators" /* 7419 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
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
