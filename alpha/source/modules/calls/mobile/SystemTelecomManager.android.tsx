// Module ID: 16269
// Function ID: 16270
// Name: SystemTelecomManager
// Dependencies: [1996, 2]

// Module 16269 (SystemTelecomManager)
import LifecycleManager from "LifecycleManager" /* 1996 */;
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
