// Module ID: 18921
// Function ID: 18922
// Name: MetricKitManager
// Dependencies: [7216, 2]

// Module 18921 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7216 */;
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
