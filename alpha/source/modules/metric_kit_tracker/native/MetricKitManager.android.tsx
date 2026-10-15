// Module ID: 18452
// Function ID: 18453
// Name: MetricKitManager
// Dependencies: [7028, 2]

// Module 18452 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
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
