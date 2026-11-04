// Module ID: 18911
// Function ID: 18912
// Name: MetricKitManager
// Dependencies: [7246, 2]

// Module 18911 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7246 */;
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
