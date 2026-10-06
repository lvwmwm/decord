// Module ID: 17607
// Function ID: 17608
// Name: MetricKitManager
// Dependencies: [6620, 2]

// Module 17607 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
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
