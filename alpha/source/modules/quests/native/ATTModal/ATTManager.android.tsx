// Module ID: 20025
// Function ID: 20026
// Name: ATTManager
// Dependencies: [7816, 8772, 1242, 2]

// Module 20025 (ATTManager)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AdUserActionCreators from "AdUserActionCreators" /* 8772 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;
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
