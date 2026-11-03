// Module ID: 16416
// Function ID: 16417
// Name: SystemTelecomManager
// Dependencies: [2125, 2]

// Module 16416 (SystemTelecomManager)
import LifecycleManager from "LifecycleManager" /* 2125 */;
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
