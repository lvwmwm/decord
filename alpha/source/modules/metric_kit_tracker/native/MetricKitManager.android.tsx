// Module ID: 17537
// Function ID: 17538
// Name: MetricKitManager
// Dependencies: [6613, 2]

// Module 17537 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
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
