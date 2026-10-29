// Module ID: 16188
// Function ID: 16189
// Name: SystemTelecomManager
// Dependencies: [2002, 2]

// Module 16188 (SystemTelecomManager)
import LifecycleManager from "LifecycleManager" /* 2002 */;
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
