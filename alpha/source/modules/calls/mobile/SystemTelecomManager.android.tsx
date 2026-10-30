// Module ID: 16228
// Function ID: 16229
// Name: SystemTelecomManager
// Dependencies: [1997, 2]

// Module 16228 (SystemTelecomManager)
import LifecycleManager from "LifecycleManager" /* 1997 */;
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
