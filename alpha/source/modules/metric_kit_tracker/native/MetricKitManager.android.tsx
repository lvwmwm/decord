// Module ID: 19846
// Function ID: 19847
// Name: MetricKitManager
// Dependencies: [7426, 2]

// Module 19846 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7426 */;
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
