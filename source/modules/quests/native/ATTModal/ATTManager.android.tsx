// Module ID: 16299
// Function ID: 16300
// Name: onPostConnectionOpen
// Dependencies: [5260, 7132, 1208, 2]

// Module 16299 (onPostConnectionOpen)
import "initialize";

const require = arg1;
class ATTManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult._openATTPrePromptOrFlowTimeoutId = null;
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.onPostConnectionOpen };
    return applyArgumentsResult;
  }
}
const prototype = ATTManager.prototype;
prototype["onPostConnectionOpen"] = function onPostConnectionOpen() {
  try {
    const adUser = require(7132) /* _fetchAdUser */.fetchAdUser("post_connection_open");
  } catch (tmp4) {
    importDefault(1208).captureException(tmp4);
    const obj2 = importDefault(1208);
  }
};
prototype["_terminate"] = function _terminate() {
  const self = this;
  if (null != this._openATTPrePromptOrFlowTimeoutId) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self._openATTPrePromptOrFlowTimeoutId);
    self._openATTPrePromptOrFlowTimeoutId = null;
  }
};
const aTTManager = new ATTManager();
const result = require("module_1208").fileFinishedImporting("modules/quests/native/ATTModal/ATTManager.android.tsx");

export default aTTManager;
