// Module ID: 15724
// Function ID: 15725
// Name: SystemTelecomManager
// Dependencies: [2004, 2]

// Module 15724 (SystemTelecomManager)
import LifecycleManager from "LifecycleManager" /* 2004 */;
import size from "module_2" /* 2 */;

class SystemTelecomLifecycleManager extends LifecycleManager {
  _initialize() {

  }
  _terminate() {

  }
}
const prototype = SystemTelecomLifecycleManager.prototype;
const systemTelecomLifecycleManager = new SystemTelecomLifecycleManager();
const result = size.fileFinishedImporting("modules/calls/mobile/SystemTelecomManager.android.tsx");

export default systemTelecomLifecycleManager;
