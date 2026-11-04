// Module ID: 19811
// Function ID: 19812
// Name: MetricKitManager
// Dependencies: [7423, 2]

// Module 19811 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7423 */;
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
