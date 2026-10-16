// Module ID: 18494
// Function ID: 18495
// Name: MetricKitManager
// Dependencies: [7030, 2]

// Module 18494 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7030 */;
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
