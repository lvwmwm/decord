// Module ID: 18177
// Function ID: 18178
// Name: MetricKitManager
// Dependencies: [6808, 2]

// Module 18177 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6808 */;
import size from "module_2" /* 2 */;

class MetricKitManager extends AutomaticLifecycleManager {
  _initialize() {

  }
  _terminate() {

  }
}
const prototype = MetricKitManager.prototype;
const metricKitManager = new MetricKitManager();
const result = size.fileFinishedImporting("modules/metric_kit_tracker/native/MetricKitManager.android.tsx");

export default metricKitManager;
