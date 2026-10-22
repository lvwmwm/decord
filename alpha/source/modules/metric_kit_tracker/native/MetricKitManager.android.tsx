// Module ID: 18772
// Function ID: 18773
// Name: MetricKitManager
// Dependencies: [7200, 2]

// Module 18772 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7200 */;
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
