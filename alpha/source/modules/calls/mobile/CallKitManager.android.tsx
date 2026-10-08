// Module ID: 14524
// Function ID: 14525
// Name: CallKitManager
// Dependencies: [2001, 2]

// Module 14524 (CallKitManager)
import LifecycleManager from "LifecycleManager" /* 2001 */;
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
