// Module ID: 15726
// Function ID: 15727
// Name: SystemTelecomManager
// Dependencies: [2001, 2]

// Module 15726 (SystemTelecomManager)
import LifecycleManager from "LifecycleManager" /* 2001 */;
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
