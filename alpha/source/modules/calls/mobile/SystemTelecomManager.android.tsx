// Module ID: 15952
// Function ID: 15953
// Name: SystemTelecomManager
// Dependencies: [2001, 2]

// Module 15952 (SystemTelecomManager)
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
