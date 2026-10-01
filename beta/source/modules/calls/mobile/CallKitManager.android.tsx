// Module ID: 14002
// Function ID: 14003
// Name: CallKitManager
// Dependencies: [1983, 2]

// Module 14002 (CallKitManager)
import LifecycleManager from "LifecycleManager" /* 1983 */;
import size from "module_2" /* 2 */;

class CallKitLifecycleManager extends LifecycleManager {
  _initialize() {

  }
  _terminate() {

  }
}
const prototype = CallKitLifecycleManager.prototype;
const callKitLifecycleManager = new CallKitLifecycleManager();
const result = size.fileFinishedImporting("modules/calls/mobile/CallKitManager.android.tsx");

export default callKitLifecycleManager;
