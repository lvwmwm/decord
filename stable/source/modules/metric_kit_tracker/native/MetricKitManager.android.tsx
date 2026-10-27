// Module ID: 18569
// Function ID: 18570
// Name: MetricKitManager
// Dependencies: [7085, 2]

// Module 18569 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;
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
