// Module ID: 19692
// Function ID: 19693
// Name: MetricKitManager
// Dependencies: [7407, 2]

// Module 19692 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7407 */;
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
