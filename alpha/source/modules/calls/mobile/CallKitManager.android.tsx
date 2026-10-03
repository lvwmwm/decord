// Module ID: 14279
// Function ID: 14280
// Name: CallKitManager
// Dependencies: [1989, 2]

// Module 14279 (CallKitManager)
import LifecycleManager from "LifecycleManager" /* 1989 */;
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
