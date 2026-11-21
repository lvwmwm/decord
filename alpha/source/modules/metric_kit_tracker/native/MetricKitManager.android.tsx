// Module ID: 19577
// Function ID: 19578
// Name: MetricKitManager
// Dependencies: [7484, 2]

// Module 19577 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
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
