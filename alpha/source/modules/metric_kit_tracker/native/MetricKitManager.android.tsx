// Module ID: 18504
// Function ID: 18505
// Name: MetricKitManager
// Dependencies: [7032, 2]

// Module 18504 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7032 */;
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
