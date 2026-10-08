// Module ID: 17889
// Function ID: 17890
// Name: MetricKitManager
// Dependencies: [6797, 2]

// Module 17889 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
