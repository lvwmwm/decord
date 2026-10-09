// Module ID: 14619
// Function ID: 14620
// Name: CallKitManager
// Dependencies: [2002, 2]

// Module 14619 (CallKitManager)
import LifecycleManager from "LifecycleManager" /* 2002 */;
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
