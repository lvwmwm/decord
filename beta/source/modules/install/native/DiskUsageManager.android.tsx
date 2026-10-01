// Module ID: 15124
// Function ID: 15125
// Name: DiskUsageManager
// Dependencies: [6539, 2]

// Module 15124 (DiskUsageManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
import size from "module_2" /* 2 */;

class DiskUsageManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = {
      APP_STATE_UPDATE() {

      }
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  clearCaches() {

  }
  _initialize() {

  }
  _terminate() {

  }
}
const prototype = DiskUsageManager.prototype;
const diskUsageManager = new DiskUsageManager();
const result = size.fileFinishedImporting("modules/install/native/DiskUsageManager.android.tsx");

export default diskUsageManager;
