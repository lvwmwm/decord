// Module ID: 15515
// Function ID: 15516
// Name: CallKitManager
// Dependencies: [2004, 2]

// Module 15515 (CallKitManager)
import LifecycleManager from "LifecycleManager" /* 2004 */;
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
